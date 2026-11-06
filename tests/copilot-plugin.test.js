#!/usr/bin/env node
// Smoke test for the Copilot plugin adapter: keep command wiring minimal and
// ensure only the core command is exposed.

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function readJSON(relPath) {
  return JSON.parse(fs.readFileSync(path.join(root, relPath), 'utf8'));
}

test('copilot plugin command directory exposes only ponytail', () => {
  const manifest = readJSON('.github/plugin/plugin.json');
  assert.equal(manifest.name, 'ponytail');
  assert.equal(manifest.commands, 'commands/');

  assert.deepEqual(fs.readdirSync(path.join(root, manifest.commands)), ['ponytail.toml']);
});
