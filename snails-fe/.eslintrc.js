module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
      "react/prefer-stateless-function": 0,
      "react/jsx-filename-extension": 0,
      "padded-blocks": ["error", {
       "classes": "always",
       "switches": "never",
       "blocks": "never",
      }],
      "no-underscore-dangle": ["error", { "allowAfterThis": true }],
      "jsx-a11y/href-no-hash": "off",
      "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }]
    },
    "globals": {
      "fetch": false,
      "Headers": false,
      "window": false,
      "document": false,
    },
};
