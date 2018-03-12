// module.exports = {
//     url: function () {
//         return 'http://google.com';
//     },
//     elements: {}
// };


var searchCommands = {
    submit: function () {
        this.waitForElementVisible('@submitButton', 3000)
            .click('@submitButton')
            .api.pause(1000);
        return this; // Return page object for chaining
    }
};

module.exports = {
    testMe: function()  {
        console.log('in testMe')
    },
    url: 'http://google.com',
    commands: [searchCommands],
    elements: {
        searchBar: { selector: 'input[name=q]' },
        submitButton: { selector: '[type=submit]' }
    },
    page: function() {
        console.log('in page of MARSBPCHARTPage');

    },
    MARSBPCHART: function() {

        console.log('in MARSBPCHARTPage.js\' this.MARSBPCHARTPage')
    }
};