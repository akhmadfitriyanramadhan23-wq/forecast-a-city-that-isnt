// forecast-a-city-that-isnt
// One original line: a weather forecast, at most 140 characters, for a city
// that does not exist. Snorvik gets lost umbrellas for rain and a bus that
// is still a rumour, in the rhythm of broadcast weather.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Verified: 121 code points, two runs byte-identical (sha256 a6c06e5b76f5).
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "In Snorvik this morning: light rain of lost umbrellas, 4 degrees, and a 90 percent chance the 8:15 bus is still a rumour.";

const points = [...text].length;
if (points < 1 || points > 140 || text.trim().length === 0) {
  throw new Error(`entry must be 1-140 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
