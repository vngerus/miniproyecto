// https://vike.dev/onRenderHtml
export { onRenderHtml }

import { escapeInject } from 'vike/server'

async function onRenderHtml() {
  return escapeInject`
<!doctype html>
<html lang="en">
  <head>
	tester
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`
}