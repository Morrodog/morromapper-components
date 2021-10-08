# Morromapper Components
A Vue component library for presenting maps of The Elder Scrolls 3: Morrowind.

## Installation
To install, simply
```bash
yarn install https://github.com/Morrodog/morromapper-components
```

And add
```javascript
import 'morromapper-components/style.css'
```
to your `main.ts` or equivalent. (Assuming that you're using Rollup or Webpack or similar.)

## Usage
TODO: Explain usage, beginning with `<mm-map>` and its children.

## Development
To develop the library, a small Vite app is included in the repository. The files for the Vite app are `index.html` and everything under `sandbox/`
Experimentation should mostly be done in `sandbox/app.vue`.

Unfortunately, because `vue` must be included as a peer dependency, and because yarn doesn't support adding a dependency without adding to package.json, it is necessary to add and remove Vue to use the sandbox. 
Be careful when doing this not to accidentally add Vue 2, and not to push a commit to `master` with Vue as a dependency.
