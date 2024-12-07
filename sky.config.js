const { defineConfig } = require("cypress");
module.exports = defineConfig({
        e2e: {
            baseUrl: 'https://news.sky.com/uk'
        },
        env:{
            userName: "kashasdkjf@grr.la"
        }
})
