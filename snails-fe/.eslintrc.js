module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/prefer-stateless-function": 0,
      "react/jsx-filename-extension": 0,
      "padded-blocks": ["error", {
        "classes": "always",
        "switches": "never",
        "blocks": "never",
      }],
    },
    "globals": {
      "fetch": false,
      "Headers": false,
      "window": false,
      "document": false,
    },
};
