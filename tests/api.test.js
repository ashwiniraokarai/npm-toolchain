import { expect, test } from "vitest";
import fetch from "node-fetch";

test("GitHub API for repo stats returns the right response", async () => {
  const response = await fetch(
    "https://api.github.com/repos/facebook/react/stats/commit_activity");
  const data = await response.json();
  // A year has 52 weeks
  expect(data).toHaveLength(52);
  expect(Object.keys(data[0])).toEqual(["total", "week", "days"]);
});