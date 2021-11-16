module.exports = {
	mode: 'jit',
	purge: ['./index.html', './style.css'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				spartan: "'Spartan', sans-serif ",
			},
			textColor: {
				var: {
					'key-base': 'var(--color-text-key-base)',
					'key-accent-1': 'var(--color-text-key-accent-1)',
					'key-accent-2': 'var(--color-text-key-accent-2)',
					screen: 'var(--color-text-screen)',
					'sup-screen': 'var(--color-text-sup-screen)',
				},
			},
			backgroundColor: {
				var: {
					base: 'var(--color-bg-base)',
					screen: 'var(--color-bg-screen)',
					keypad: 'var(--color-bg-keypad)',
					'key-base': 'var(--color-bg-key-base)',
					'key-accent-1': 'var(--color-bg-key-accent-1)',
					'key-accent-2': 'var(--color-bg-key-accent-2)',
				},
			},
			boxShadow: {
				'key-base': '0px 5px var(--color-shadow-key-base)',
				'key-accent-1': '0px 5px var(--color-shadow-key-accent-1)',
				'key-accent-2': '0px 5px var(--color-shadow-key-accent-2)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
