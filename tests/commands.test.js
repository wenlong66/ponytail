#!/usr/bin/env node
// Pi, Gemini CLI, and OpenCode expose only the core Ponytail command and skill.

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const piSource = fs.readFileSync(path.join(root, 'pi-extension', 'index.js'), 'utf8');
const commands = [...piSource.matchAll(/registerCommand\(["']([\w-]+)["']/g)].map((m) => m[1]);

test('pi registers only the core ponytail command', () => {
  assert.deepEqual(commands, ['ponytail']);
});

for (const [dir, extension] of [['commands', '.toml'], ['.opencode/command', '.md']]) {
  test(`${dir} ships only the core ponytail command`, () => {
    assert.deepEqual(
      fs.readdirSync(path.join(root, dir)).filter((file) => file.endsWith(extension)).sort(),
      [`ponytail${extension}`],
    );
  });
}

test('only the core ponytail skill ships', () => {
  assert.deepEqual(
    fs.readdirSync(path.join(root, 'skills'))
      .filter((name) => fs.existsSync(path.join(root, 'skills', name, 'SKILL.md')))
      .sort(),
    ['ponytail'],
  );
});
