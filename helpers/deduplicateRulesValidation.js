const _ = require('lodash');
const { getMappingsPaths } = require('./esHelpers/getMappingsPaths');
const { getDeduplicateRulesPaths } = require('./getDeduplicateRulesPaths');

module.exports = { assert };

async function assert (rules, mappings) {
  const mappingsPaths = await getMappingsPaths(mappings);
  const deduplicateRulesPaths = await getDeduplicateRulesPaths(rules);

  const diff = _.difference(deduplicateRulesPaths, mappingsPaths);

  if (diff.length > 0) throw rulesValidationError(diff);
}

function rulesValidationError (diff) {
  const err = new Error(`Validation error while checking rules vs mappings: ${JSON.stringify(diff)}`);
  err.name = 'rulesValidationError';
  err.info = { diff };
  return err;
}
