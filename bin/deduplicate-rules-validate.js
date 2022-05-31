#!/usr/bin/env node

const { buildMapping } = require('../src/buildMapping');
const rules = require('../src/deduplicate/rules.json');
const { assert } = require('../helpers/deduplicateRulesValidation');

(
  async function () {
    await assert(rules, buildMapping()?.mappings);
  }
)().catch(reason => console.error(reason));
