import { describe, expect, it } from "vitest";
import { ASYNLIB_REACT_ADAPTER, createAsyncResult } from "../src";

describe("react adapter", () => {
  it("exports react adapter marker", () => {
    expect(ASYNLIB_REACT_ADAPTER).toBe("react");
  });

  it("re-exports createAsyncResult from core", () => {
    expect(createAsyncResult()).toEqual({ status: "idle" });
  });

  it("preserves core behavior on repeated calls", () => {
    const first = createAsyncResult();
    const second = createAsyncResult();

    expect(first).not.toBe(second);
    expect(first.status).toBe("idle");
    expect(second.status).toBe("idle");
  });
});
