import { describe, it } from "node:test";
import { strictEqual } from "node:assert/strict";
import { sum } from "../src/sum.ts";

describe("sum", () => {
    it("should sum", () => {
        strictEqual(sum(1,2,3), 6);
    });
})