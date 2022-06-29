const { assign, merge, _ } = require('lodash');
const mappings = require('./mapping/mappings/mappings.json');
const settings = require('./mapping/settings/settings.json');
const dynamicTemplates = require('./mapping/mappings/dynamicTemplates.json');
const authors = require('./mapping/mappings/properties/authors.json');
const host = require('./mapping/mappings/properties/host.json');
const technical = require('./mapping/mappings/properties/technical.json');
const business = require('./mapping/mappings/properties/business.json');
const files = require('./mapping/mappings/properties/files.json');
const enrichments = require('./mapping/mappings/properties/enrichments.json');
const identifiers = require('./mapping/mappings/properties/root/identifiers.json');
const metadata = require('./mapping/mappings/properties/root/metadata.json');
const fulltext = require('./mapping/mappings/properties/root/fulltext.json');

module.exports = { buildMapping };

function buildMapping () {
  return {
    mappings: _buildMappings(),
    settings,
  };
}

function _buildMappings () {
  return assign({}, mappings, dynamicTemplates, {
    properties: merge(
      _sort(metadata),
      _sort(fulltext),
      _sort(identifiers),
      business,
      technical,
      authors,
      host,
      files,
      enrichments,
    ),
  });
}

function _sort (collection) {
  return _(collection).toPairs().sortBy().fromPairs().value();
}
