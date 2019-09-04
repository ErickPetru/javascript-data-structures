# JavaScript Data Structures

> Collection of data structures created with ECMAScript 2015+, TypeScript definition files and Jest unit tests.

## Why?

You may be wondering why recreating functionalities like `Stack` and `Queue` when JavaScript already offers that via `Array`. Or even why creating a simple `HashTable` implementation when we already have `Map` to do much more.

This repository is not intended to propose data structures to be used in production instead of the native solutions, but as a playground to show classical data structures (commonly learnt in _Computer Science_ courses) recreated with modern ECMAScript 2015+ features, like `class`, `import`/`export` and `async`/`await`.

So, it can be used as a material for teachers considering JavaScript for _Data Structures_ classes, but also as a starting point for people who'd like to see modern ECMAScript 2015+ running right in [Node.js](https://nodejs.org/en/), without any previous transpilation.

## Basic Usage

If you wanna run some samples of the data structures in use, just type:

```bash
npm start
```

If you wanna run the complete test suit with [Jest](https://jestjs.io/), use:

```bash
npm run test
```

## Integrated with VS Code

If you're using [Visual Studio Code](https://code.visualstudio.com/), the project also contains a simple `launch.json` configurated with commands for those two tasks, so a simple <kbd>F5</kbd> puts you running with support for breakpoints - even with `async`/`await`!

And for the tests, if you plan to use Jest a lot while developing, try the [Jest extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest). This way you'll be able to run the tests in realtime while developing.

## Interesting Facts

As of Node 12, the `--experimental-modules` flag [was updated](https://medium.com/@nodejs/announcing-a-new-experimental-modules-1be8d2d6c2ff) to a new implementation for supporting ES modules just out of the box, so this repository shows how bleding edge ECMAScript can be used in Node without things like [esm](https://www.npmjs.com/package/esm) or [Babel](https://babeljs.io/).

Curiously, Jest still depends on [@babel/plugin-transform-modules-commonjs](https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs) for transpiling ES modules to CommonJS modules before running the test suite. So, keep in mind that this dependecy isnn't needed for running the code itself.

Finally, while the project is in JavaScript, all classes was created with separated TypeScript definition files (with `.d.ts` extension) to provide better intellisense - which can be easly achieved without using TypeScript itself.

## License

Copyright &copy; 2019

Licensed under the [MIT license](LICENSE).
