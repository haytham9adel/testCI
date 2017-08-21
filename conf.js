exports.config = {
    capabilities: {
        'browserName': 'firefox'
    } ,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js']
};