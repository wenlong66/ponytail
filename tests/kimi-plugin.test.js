#!/usr/bin/env node
// Kimi Code plugin manifest: AGENTS.md goes into the system prompt every turn,
// skills/ gives the core skill, which Kimi also exposes as /ponytail.
// No hooks and no command copies: Kimi turns skills into slash commands
// itself. Kimi does not read a version field, so the
// manifest has none and stays out of the release bump.

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

test('Kimi manifest points at AGENTS.md and only the core skill', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, '.kimi-plugin', 'plugin.json'), 'utf8'));
  assert.equal(manifest.name, 'ponytail');
  // Kimi ignores a systemPromptPath file over 32 KB.
  assert.ok(fs.statSync(path.join(root, manifest.systemPromptPath)).size < 32 * 1024);
  assert.match(fs.readFileSync(path.join(root, manifest.systemPromptPath), 'utf8'), /lazy senior/);
  const skills = path.join(root, manifest.skills);
  assert.deepEqual(fs.readdirSync(skills, { withFileTypes: true }).filter(entry => entry.isDirectory()).map(entry => entry.name), ['ponytail']);
  assert.ok(fs.existsSync(path.join(skills, 'ponytail', 'SKILL.md')), 'core ponytail skill must ship');
});
