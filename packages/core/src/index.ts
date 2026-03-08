
export type AsyncResult<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: unknown };

export function createAsyncResult<T>(): AsyncResult<T> {
  return { status: "idle" };
}

export { default as Query } from "./query";
export { default as QueryCache } from "./queryCache";
export { default as QueryClient } from "./queryClient";