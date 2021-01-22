const baseName = 'bar';

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
            errLogToConsole: false,
            outputStyle: 'expanded'
        },
        // https://github.com/fmarcia/UglifyCSS
        uglifyCssOptions: {
            'maxLineLen': 312,
            'uglyComments': false
        }
    }
};
