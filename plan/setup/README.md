**important links**

[jsconfig](https://code.visualstudio.com/docs/languages/jsconfig)  
[module aliasing](https://www.npmjs.com/package/module-alias)  
[prop types](https://www.npmjs.com/package/prop-types)

**files**

```js
// libraries
import React from "react";

// components
import { Form } from "components/Form";

// styles
import "css/index.scss";

// utils
import { debounce } from "utils/debounce.js";

/**
* * Playgound.js or Sandbox.js for testing/playing
* * Setup Error Boundary
* /
```

**libraries**

- [x] dart sass
- [x] react-router-dom
- [x] axios
- [x] prop types
- [x] material-ui icons
- [x] redux
- [x] react-redux
- [x] redux-thunk
- [x] redux-logger

**public**

- [x] del react logos
- [x] del react favicon
- [ ] add own favicon
- [ ] modify manifest.json

**index.html**

- [ ] link favicon
- [x] theme-color
- [ ] other libraries (fonts etc)

**index.css**

- [x] :root
- [x] css variables
- [x] resets
- [x] media queries

**.env**

```json
GENERATE_SOURCEMAP=false
```

**package.json**

```json
// only for development

"proxy": "http://localhost:4000",
```

**deploying to netlify**

```js
- create _redirects file

/* /index.html 200
```

**index.css**

```css
@font-face {
  font-family: roboto;
  src: url("../fonts/Roboto-Regular.ttf");
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
}

body {
  margin: 0;
  font-family: roboto, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

button,
input {
  outline: none;
  border: none;
}

a {
  text-decoration: none;
}

/* Small (sm) devices (landscape phones, 567px and up) */
@media screen and (min-width: 568px) {
}

/* Medium (md) devices (tablets, 768px and up) */
@media screen and (min-width: 768px) {
}

/* Large (lg) devices (desktops, 992px and up) */
@media screen and (min-width: 992px) {
}

/* Extra (xl) devices (large desktops, 1200px and up) */
@media screen and (min-width: 1200px) {
}
```
