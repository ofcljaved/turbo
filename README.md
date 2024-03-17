# EXPORT ERROR

![](./export_error.mp4)

While using tsc in the cohort we faced the issue that when we run

```bash
  npm tsc -b
  node dist/inde.js

  export const VALUE = "I'm BEST";
^^^^^^

SyntaxError: Unexpected token 'export'
```

This is the error, and the root cause is When we running the dev environment in my case I was using ts-node which directly run `.ts` file so It's not giving me Error
But when you build the project using `tsc`

```bash
yarn tsc -b
node dist/index.js
```

If you look at the `dist/index.js` file You'll see it has this import at the top

```js
const common_1 = require('@repo/common/common');
```

Which means it importing directly from the common file But the issue is when you look at the common packages and see it's package.json export

```json
  "exports": {
    "./common": "./src/index.ts"
  },
```

it exporting `.ts` file which is also written in `ES6`
So when I change that to this

```json
  "exports": {
    "./common": "./dist/index.js"
  },
```

It works, then I recall from harkirat's npm package video that whenever You upload a npm package you only upload the `js` files not the `ts` files
So See Now it's working well
