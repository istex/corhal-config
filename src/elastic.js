const { buildMapping } = require('./buildMapping');
const { aliases, aliasesMapping } = require('./aliases');

module.exports = {
  nodes: process.env.ES_NODES || 'http://localhost:9200',
  authUsername: process.env.ES_AUTH_USER || null,
  authPassword: process.env.ES_AUTH_PASS || null,
  mapping: buildMapping(),
  aliases,
  aliasesMapping,
};
