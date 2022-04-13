const { assign, merge } = require('lodash');
const mappings = require('./mapping/mappings/mappings.json');
const settings = require('./mapping/settings/settings.json');
const dynamicTemplates = require('./mapping/mappings/dynamicTemplates.json');
const authors = require('./mapping/mappings/properties/authors.json');
const host = require('./mapping/mappings/properties/host.json');
const technical = require('./mapping/mappings/properties/technical.json');
const business = require('./mapping/mappings/properties/business.json');
const files = require('./mapping/mappings/properties/files.json');
const enrichments = require('./mapping/mappings/properties/enrichments.json');
const identifiers = require('./mapping/mappings/properties/identifiers.json');
const root = require('./mapping/mappings/properties/root.json');

module.exports = { buildMapping };

function buildMapping () {
  return {
    mappings: buildMappings(),
    settings,
  };
}

function buildMappings () {
  return assign({}, mappings, dynamicTemplates, {
    properties: merge(
      root,
      identifiers,
      business,
      technical,
      authors,
      host,
      files,
      enrichments,
    ),
  });
}
