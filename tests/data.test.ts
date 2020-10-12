import { GHOSTS, ghostMatches, ALL_EVIDENCE } from "../src/data";

test("Evidence list length", () => {
  expect(ALL_EVIDENCE.length).toBe(6);
});

test("Ghost list length", () => {
  expect(GHOSTS.length).toBe(12);
});

describe("ghostMatches", () => {
  test("No evidence", () => {
    for (const ghost of GHOSTS) {
      const result = ghostMatches(ghost, []);
      expect(result).toBe(true);
    }
  });

  test("1 evidence", () => {
    const result = ghostMatches(GHOSTS[0], ["box"]);
    expect(result).toBe(true);
  });

  test("2 evidence", () => {
    const result = ghostMatches(GHOSTS[0], ["box", "fingerprints"]);
    expect(result).toBe(true);
  });

  test("3 evidence", () => {
    const result = ghostMatches(GHOSTS[0], ["box", "fingerprints", "writing"]);
    expect(result).toBe(true);
  });

  test("Conflicting evidence", () => {
    const result = ghostMatches(GHOSTS[0], ["box", "fingerprints", "freezing"]);
    expect(result).toBe(false);
  });
});
