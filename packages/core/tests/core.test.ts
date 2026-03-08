import { describe, expect, it } from "vitest";
import { createAsyncResult } from "../src";

describe("createAsyncResult", () => {
  it("returns idle state by default", () => {
    expect(createAsyncResult()).toEqual({ status: "idle" });
  });

  it("returns a fresh object for each call", () => {
    const first = createAsyncResult();
    const second = createAsyncResult();

    expect(first).not.toBe(second);
  });

  it("returns an object with the idle status shape", () => {
    const result = createAsyncResult();

    expect(result).toHaveProperty("status");
    expect(result.status).toBe("idle");
  });
});
