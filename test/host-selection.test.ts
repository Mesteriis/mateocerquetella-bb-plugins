import assert from "node:assert/strict";
import { test } from "node:test";
import { resolveSteelHost } from "../host-selection.ts";

test("a registered host ID takes precedence over the system hostname", () => {
  assert.equal(resolveSteelHost(" host_registered ", "different.local"), "host_registered");
});

test("blank configuration preserves the existing hostname default", () => {
  assert.equal(resolveSteelHost("  ", "existing-host"), "existing-host");
  assert.equal(resolveSteelHost(undefined, "existing-host"), "existing-host");
});
