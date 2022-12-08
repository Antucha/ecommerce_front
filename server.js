'use strict';
console.log('only server js file');
const { Builder } = require('nuxt')
const { app, nuxt } = require('./serverApp')
const IS_PROD = process.env.NODE_ENV === 'production'
const PORT = IS_PROD ? process.env.PORT  : 3000
console.log('upload port in server is ' + process.env.PORT )
require('dotenv').config({
  path: `./.env.${IS_PROD ? 'production' : 'development'}`,
});

(async function main() {
  if (!IS_PROD) {
    await new Builder(nuxt).build()
  }

  app.listen(PORT)
})()
