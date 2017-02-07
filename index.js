'use strict';

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	//extends: '',
	parserOptions: {
		ecmaFeatures: {
			arrowFunctions: true,
			blockBindings: true,
			classes: true,
			defaultParams: true,
			destructuring: true,
			forOf: true,
			generators: false,
			modules: false,
			objectLiteralComputedProperties: true,
			objectLiteralDuplicateProperties: false,
			objectLiteralShorthandMethods: false,
			objectLiteralShorthandProperties: false,
			spread: false,
			superInFunctions: true,
			templateStrings: true,
			jsx: false
		}
	},
	rules: {
		strict: [2, 'global'],
		camelcase: 0,
		'arrow-parens': 2,
		'arrow-spacing': 2,
		'no-confusing-arrow': 2,
		'array-callback-return': 2,
		'no-const-assign': 2,
		'no-var': 2,
		'prefer-arrow-callback': 0,
		'object-shorthand': 0,
		'one-var-declaration-per-line': [2, 'always'],
		'brace-style': [2, 'stroustrup'],
		'no-negated-condition': 0,
		'no-undef': 2,
    'no-invalid-this': 2,
		'no-trailing-spaces': 2,
		'no-empty-function': 2,
		'no-unused-expressions': 2,
        'no-multiple-empty-lines': [2, {max: 2}],
		'no-constant-condition': 2,
		'handle-callback-err': 2,
		'keyword-spacing': [2, { 'before': true, 'after': true }],
		'no-shadow': [0, {
			allow: ['err', 'done', 'callback','resolve','reject']
		}],
		'callback-return': [2, ['callback', 'next', 'done']],
		'no-unused-vars': [2,
			{
				vars: 'all',
				args: 'after-used'
			}
		],
		indent: [2, 2,
			{
				SwitchCase: 1
			}
		],
		'space-before-function-paren': [2,
			{
				anonymous: 'always',
				named: 'never'
			}
		]
	}
};
