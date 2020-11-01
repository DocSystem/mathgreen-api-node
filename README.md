# Mathgreen API Node

Mathgreen API for Node.JS

![npm](https://img.shields.io/npm/v/@docsystem/mathgreen-api-node) ![npm downloads](https://img.shields.io/npm/dt/@docsystem/mathgreen-api-node) [![GitHub issues](https://img.shields.io/github/issues/DocSystem/mathgreen-api-node)](https://github.com/DocSystem/mathgreen-api-node/issues) ![made by docsystem](https://img.shields.io/badge/Made%20by-DocSystem-blue)

```js
const mathgreen = require('mathgreen');

async function main() {
  const premiere = await mathgreen.premiere();
  const terminale = await mathgreen.terminale();
  const nsi = await mathgreen.nsi();
  const bcpst = await mathgreen.bcpst();
}

main()
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/).

If this is a brand new project, make sure to create a ``package.json`` first with the [``npm init`` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the [``npm install`` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```
$ npm install @docsystem/mathgreen-api-node
```
