const { mapValues, keys } = require('lodash');

const aliasesMapping = {
  PRODUCTION: { production: {} },
  INTEGRATION: { integration: {} },
  TO_DEDUPLICATE: { toDeduplicate: {} },
};

const aliases = mapValues(aliasesMapping, (mapping) => keys(mapping)?.[0]);

module.exports = { aliases, aliasesMapping };
