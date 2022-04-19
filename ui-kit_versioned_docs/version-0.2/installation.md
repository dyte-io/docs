# Installation

There are two ways you can install ui-kit depending on your project.

If you are using a build tool which uses npm packages where you can import npm packages, you need to install the npm package.

Install the package from npm:

```bash
npm install @dytesdk/ui-kit
```

And now you need to define the custom elements:

```js
import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit/loader/index.es2017.js';

defineCustomElements();
```

Or, if you just want the components in an html file, load it with the `script` tag.

```html
<html>
  <head>
    <script type="module">
      import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit/loader/index.es2017.js';
      defineCustomElements();
    </script>
  </head>
  <body>
    <dyte-meeting></dyte-meeting>
  </body>
</html>
```
