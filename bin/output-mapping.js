#!/usr/bin/env node

const { buildMapping } = require('../src/buildMapping');
const { outputJsonSync } = require('fs-extra');

outputJsonSync('./output/mapping.json', buildMapping(), { spaces: '\t' });
