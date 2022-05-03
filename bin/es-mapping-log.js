#!/usr/bin/env node

const { buildMapping } = require('../src/buildMapping');

console.log(JSON.stringify(buildMapping(), null, '\x20\x20\x20\x20'));
