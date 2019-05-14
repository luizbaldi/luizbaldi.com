module.exports = {
    extends: "airbnb",
    globals: {
        document: true
    },
    rules: {
        'semi': [2, 'never'],
        'jsx-quotes': 'off',
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
    }
}