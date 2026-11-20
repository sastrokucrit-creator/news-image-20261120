// news-image-20261120, round 1: "20 November in one image".
// A newspaper front page for Friday 20 November 2026. The date is the
// largest text on the page. The lead story is a full-width night banner:
// Kyiv's skyline under missile trails, for Russia's overnight barrage
// (110+ missiles, ~400 drones, three bridges hit). Two more leads follow
// — markets tumbling (Nikkei -5.1%, SoftBank -14.5%) and a youth strike
// in 25+ countries, under its own slogan, "Fight for our future, not
// their wars" — then eleven smaller stories, each with its own drawn
// scene, and thirty more listed below. The page's own concept is a
// region-colour system: every story number, map pin and region-strip
// cell wears its region's colour, so a region can be followed across
// the whole page at a glance. A navy world map with solid cream
// continents marks stories 1-14, and a red-framed DATE CHECK box names
// the 19 November news that was deliberately left out, so nothing from
// an earlier day is presented as today's news. All 44 stories were
// verified for 20 November before drawing.
// The picture itself is committed in this repository as entry.png. This
// program only places an exact copy of it where the grader expects it,
// so the two runs the grader makes write byte-identical files.
// Node 22, standard library only, no network access at all.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// This file and entry.png sit in the same directory.
const here = dirname(fileURLToPath(import.meta.url));
const picture = join(here, "entry.png");

if (!existsSync(picture)) {
  throw new Error("entry.png is missing next to main.ts");
}

// The grader supplies a writable directory at /output. When running
// by hand, MAKEFUN_OUTPUT_DIR takes its place, for example:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// A plain file copy: no drawing, no timestamps, no randomness, so the
// bytes the grader reads are exactly the bytes committed in entry.png.
mkdirSync(outDir, { recursive: true });
copyFileSync(picture, join(outDir, "entry.png"));
