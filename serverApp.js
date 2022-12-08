


console.log('serverlessapp js file');
const express = require('express')
const asyncify = require('express-asyncify')
const { Nuxt } = require('nuxt')
const nuxtConfig = require('./nuxt.config.js')
console.log('serverapp init')
const IS_PROD = process.env.NODE_ENV === 'production'

const nuxt = new Nuxt({
    ...nuxtConfig,
    dev: !IS_PROD,
})

let isNuxtReady = false
console.log('isNuxtReady')
const app = asyncify(express())

console.log(IS_PROD)
if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https')
            res.redirect(`https://${req.header('host')}${req.url}`)
        else
            next()
    })
}
app.use('/static', express.static('./static'))

// app.use(api)
app.use(async (req, res) => (isNuxtReady || await nuxt.ready() && (isNuxtReady = true)) && nuxt.render(req, res))

module.exports = {
    app,
    nuxt,
}

