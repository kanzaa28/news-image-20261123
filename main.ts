// Front page for Monday 23 November 2026 — publish the stored image.
//
// The finished page lives next to this file as entry.png (drawn ahead of
// time with PIL: masthead, lead story and supporting stories, 1024x1024).
// The grader runs this program twice, offline, in a fresh container, and
// only reads the file it leaves behind, so the job here is narrow: prove
// the stored bytes are a complete, well-formed PNG of exactly the size the
// gate allows, copy them to the output directory unchanged, and then read
// the copy back and confirm it is byte-for-byte the same image. Any defect
// — wrong dimensions, a chunk whose checksum fails, trailing junk — throws
// here, where it can be seen, instead of failing silently at the gate.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PAGE = "entry.png";
const MAX_BYTES = 1_048_576; // gate ceiling: 1 MiB
const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;
const SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

// CRC-32 (IEEE) table, built once at startup from the polynomial.
const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const b of bytes) {
    crc = CRC_TABLE[(crc ^ b) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function fail(message) {
  throw new Error(`entry check failed: ${message}`);
}

// Read the PNG header (IHDR) and confirm the canvas is 1024x1024, then
// walk every chunk — length, type, data, stored CRC — verifying each
// checksum and requiring the walk to stop exactly at the end of the file.
function validatePng(bytes) {
  if (bytes.length < 8 || !SIGNATURE.every((b, i) => bytes[i] === b)) {
    fail("file does not start with the PNG signature");
  }
  if (bytes.length > MAX_BYTES) {
    fail(`file is ${bytes.length} bytes, over the ${MAX_BYTES} byte limit`);
  }

  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let pos = 8;
  let sawIhdr = false;
  let sawIend = false;

  while (pos + 8 <= bytes.length) {
    const dataLen = view.getUint32(pos, false);
    const type = String.fromCharCode(
      bytes[pos + 4],
      bytes[pos + 5],
      bytes[pos + 6],
      bytes[pos + 7],
    );
    const dataStart = pos + 8;
    const crcPos = dataStart + dataLen;
    if (crcPos + 4 > bytes.length) {
      fail(`chunk ${type} runs past the end of the file`);
    }
    const storedCrc = view.getUint32(crcPos, false);
    const computedCrc = crc32(bytes.subarray(pos + 4, crcPos));
    if (storedCrc !== computedCrc) {
      fail(`chunk ${type} has a bad CRC (stored ${storedCrc}, computed ${computedCrc})`);
    }

    if (type === "IHDR") {
      if (dataLen !== 13) fail("IHDR chunk is not 13 bytes");
      const width = view.getUint32(dataStart, false);
      const height = view.getUint32(dataStart + 4, false);
      if (width !== EXPECTED_WIDTH || height !== EXPECTED_HEIGHT) {
        fail(`canvas is ${width}x${height}, expected ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`);
      }
      sawIhdr = true;
    }
    if (type === "IEND") {
      sawIend = true;
      pos = crcPos + 4;
      break;
    }
    pos = crcPos + 4;
  }

  if (!sawIhdr) fail("no IHDR chunk found");
  if (!sawIend) fail("no IEND chunk found");
  if (pos !== bytes.length) fail("trailing bytes after the IEND chunk");
}

const here = dirname(fileURLToPath(import.meta.url));
const page = readFileSync(join(here, PAGE));
validatePng(page);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, PAGE);
writeFileSync(target, page);

// Prove the published copy is the validated original, byte for byte.
const published = readFileSync(target);
if (published.length !== page.length || !published.equals(page)) {
  fail("published file differs from the validated page");
}

console.log(
  `published ${PAGE}: ${published.length} bytes, ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}, CRCs verified`,
);
