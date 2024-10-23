import { describe, it } from "node:test";
import { strictEqual } from "node:assert/strict";
import { multiply } from "../src/multiply.ts";

describe("multiply", () => {
    it("should multiply", () => {
        strictEqual(multiply(1,2,3), 6);
    });
})