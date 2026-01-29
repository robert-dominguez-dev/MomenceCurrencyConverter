module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react-hooks/rules-of-hooks': [
      'error',
      {
        /**
         * Allows components named both "CurrencyChart" and "_CurrencyChart"...
         */
        additionalComponentNamePatterns: ['^_?[A-Z].*'],
      },
    ],
  },
};
