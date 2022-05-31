const jq = require('node-jq');
const _ = require('lodash');

module.exports = { getDeduplicateRulesPaths };

async function getDeduplicateRulesPaths (rules) {
  const nonEmpties = await jq.run('.[]|.non_empty?', rules, { input: 'json', output: 'compact' });
  const isEmpties = await jq.run('.[]|.is_empty?', rules, { input: 'json', output: 'compact' });
  const matches = await jq.run('.[]|.query?.bool?.must?|.[]|.match|keys[0]?', rules, { input: 'json', output: 'compact' });

  return _.chain(nonEmpties)
    .split('\n')
    .map(JSON.parse)
    .concat(_.chain(isEmpties)
      .split('\n')
      .map(JSON.parse)
      .value(),
    )
    .concat(_.chain(matches)
      .split('\n')
      .map(JSON.parse)
      .value(),
    )
    .flatten()
    .compact()
    .uniq()
    .value();
}
