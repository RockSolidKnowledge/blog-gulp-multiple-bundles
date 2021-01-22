const baseName = 'foo';

module.exports = {
    app: { name: baseName },
    css: {
        sourcePaths: [
            `./src/${baseName}/sass/**/*.scss`,
            `!./src/${baseName}/sass/excludeMe.scss`
        ],
        exportPath: `./public/css/${baseName}/`
    },
    thirdParty: {
        // https://github.com/sass/node-sass#options
        sassOptions: {
            errLogToConsole: true,
            outputStyle: 'expanded'
        },
        // https://github.com/fmarcia/UglifyCSS
        uglifyCssOptions: {
            'maxLineLen': 312,
            'uglyComments': true
        }
    }
};
