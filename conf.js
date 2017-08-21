exports.config = {

    allScriptsTimeout: 11000,

    baseUrl: 'http://localhost:8000/',

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    } ,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js']
};