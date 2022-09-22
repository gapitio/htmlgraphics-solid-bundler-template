# Bundler

Bundler to make developing code easier and scalable.

## Contains

- [rollup.js](https://rollupjs.org/)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Solid](https://www.solidjs.com/)
- Local development server to run the code live in the browser.

## Requirements

- [Node](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

## Usage

First you have to install the required dependencies

```bash
pnpm i
```

### Dev

Then you start the development script

```bash
pnpm run dev
```

Go to <http://localhost:5173>. Change some code in `./src/onInit.tsx`, `./src/onRender.ts`, or `./src/design/html.html`, and the website will update.

### Build

When the code is ready to be uploaded to Grafana, start the build script

```bash
pnpm run build
```

Then go to `/dist` and copy the content of `panel-options.json` to the panels `Import/export` option.

## Dev site

`src/devSite` is a folder where most of the configuration for the dev website is.

To add custom series go to `src/devSite/data.ts` and add createSeries() in series.

Window has been used to get global variables like data, customProperties, ETC.

## Eslint

It's recommended to use the current eslint config, but as it's strongly opinionated it might be _easier_ to use a less opinionated config.

Replace the current .eslint.cjs with the below code.

```ts
module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
};
```
