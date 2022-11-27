/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    'browser': true,
    'es6': true,
    'es2017': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      extends: [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': 'error',
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
      alphabetical: false,
    }],
    // 'vue/max-attributes-per-line': ['error', {
    //   singleline: {
    //     'max': 1
    //   },
    //   multiline: {
    //     'max': 1
    //   }
    // }],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/no-irregular-whitespace': ["error", {
      skipStrings: true,
      skipComments: false,
      skipRegExps: false,
      skipTemplates: false,
      skipHTMLAttributeValues: false,
      skipHTMLTextContents: false
    }],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/no-dupe-keys': ['error', {
      'groups': []
    }],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'linebreak-style': ['error', 'unix'], //стиль разрыва строки linebreak-style: ["error", "unix || windows"]
    'no-console': 'error', // без console.log
    'no-debugger': 'error',// без debugger
    'arrow-parens': ['error', 'as-needed'], // скобки в стрелочной функции
    'no-plusplus': 'off', //запрещает унарные операторы ++и --
    'constructor-super': 'off', // конструкторы производных классов должны вызывать super(). Конструкторы не производных классов не должны вызывать super().
    'no-mixed-operators': [ //Заключение сложных выражений в круглые скобки проясняет замысел разработчика
      'error',
      {
        "groups": [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', "||"],
          ['in', "instanceof"]
        ],
        'allowSamePrecedence': true
      }
    ],
    'import/extensions': 'off', // обеспечить согласованное использование расширения файла в пути импорта
    'import/prefer-default-export': 'off', // ESLint предпочитает экспорт по умолчанию импорт/предпочитает экспорт по умолчанию
    'no-unused-expressions': 'error', //нет неиспользуемых выражений
    'no-param-reassign': 'off', //без переназначения параметров
    'prefer-destructuring': ['error', { // требуется деструктуризация массивов и/или объектов.
      'array': true,
      'object': true
    }, {
      'enforceForRenamedProperties': false
    }
    ],
    'no-bitwise': ['error', { allow: ['~'] }], // запрещает побитовые операторы.
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // запрещает неиспользуемые переменные.
    'max-len': ['error', { code: 120 }], // обеспечивает максимальную длину строки.
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, consistent: true },
      ObjectPattern: { multiline: true, consistent: true }
    }], // применяет согласованные разрывы строк после открытия и перед закрытием фигурных скобок.
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }] // требует или запрещает пустую строку между членами класса.
  }
}
