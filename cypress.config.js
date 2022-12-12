const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://0jlk3y.codesandbox.io/',

        setupNodeEvents(on, config) {
        },
    },
});
