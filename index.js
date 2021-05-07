const { application } = require('express');
const container = require('./api/container');

application.start().catch(err => {
    console.log(err);
    process.exit();
});