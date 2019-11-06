const { 
    override,
    addBabelPlugins,
    addLessLoader, 
} = require('customize-cra');

module.exports = override(
    addBabelPlugins([
        'babel-plugin-root-import', {
            "rootPathPrefix": "~",
            "rootPathSuffix": "./src"
        }
    ]),
    addLessLoader({
        javascriptEnabled: true,
    }),
);