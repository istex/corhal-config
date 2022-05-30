#!/usr/bin/env node

const { buildMapping } = require('../src/buildMapping');
const { getMappingsPaths } = require('../helpers/esHelpers/getMappingsPaths');

(async function () {
  console.log(JSON.stringify(await getMappingsPaths(buildMapping()?.mappings), null, '\x20\x20\x20\x20'));
})();
