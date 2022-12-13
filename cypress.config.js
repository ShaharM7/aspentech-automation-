const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://0jlk3y.codesandbox.io/',
        "defaultCommandTimeout": 7000,
        "slowTestThreshold": 2000
    },
});
