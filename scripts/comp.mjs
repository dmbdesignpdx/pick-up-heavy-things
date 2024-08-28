/**
 * @file Provides a CLI to create a new component
 */

import fs from 'node:fs/promises';
import { print } from './print.mjs';
import json from '../package.json' assert { type: 'json' };
import { createSpinner } from 'nanospinner';

const spinner = createSpinner();

/**
 * @type {import('node').process}
 */

/**
 * @type {import('node').fs}
 */


/**
 * Main function to run
 * @async
 * @returns {void}
 */
const main = async () => {
	const [
		,
		,
		arg,
		...args
	] = process.argv;

	if (!arg) {
		print('error', 'No component name specified.');

		return;
	}

	const element = args.indexOf('-e');
	const path = args.indexOf('-d');
	const kabob = arg
		.replace(/(?!^)[A-Z]/g, '-$&')
		.toLowerCase();
	const src = json.comp || './components';
	let el = 'div';
	let dir = `${src}/${kabob}`;

	if (element > -1) {
		const name = args[element + 1];

		if (name) {
			el = name;
		}
	}

	if (path > -1) {
		const name = args[path + 1];

		if (name) {
			dir = `./${name}/${kabob}`;
		}
	}

	const component = `import type { ${arg}Props as Props } from './types';\n\nimport { cls } from '#utils:cls';\nimport style from './${kabob}.module.css';\n\n\nexport function ${arg}({ className }: Props) {\n\tconst _className = cls(style.root, className);\n\n\treturn (\n\t\t<${el} className={_className}>\n\t\t\t${arg} component\n\t\t</${el}>\n\t);\n}\n`;

	const types = `export type ${arg}Props = Readonly<{ \n	className?: string; \n}>\n`;

	const index = `export * from './${kabob}';\nexport * from './types.d';\n`;

	const styles = '.root {\n	contain: strict;\n}\n';

	const test = `import { render, screen } from '@testing-library/react';\nimport { axe } from 'jest-axe';\nimport { ${arg} } from '.';\n\n\ndescribe('${arg}', () => {\n	test('renders its content', async () => {\n		render(<${arg} />);\n\n		const intro = await screen.findByText(/content/i);\n\n		/**\n		 * @note Placeholder assertion:\n		 * This is redundant as 'findByText' will error if not present.\n		 * Remove when writing your own tests.\n		 */\n		expect(intro).toBeInTheDocument();\n	});\n\n	test('is accessible', async () => {\n		const { container } = render(<${arg} />);\n\n		const element = await axe(container);\n\n		expect(element).toHaveNoViolations();\n	});\n});\n`;

	spinner.start({
		color: 'yellow',
		text: 'Creating your component...\n',
	});

	try {
		await fs.mkdir(dir, { recursive: true });
	} catch (e) {
		if (e.code === 'EEXIST') {
			print('warn', `${dir} already exists.`);
		}

		if (e.code === 'ENOENT') {
			print('error', `${dir} does not exist.`);
		}

		return;
	}

	await fs.writeFile(`${dir}/index.ts`, index);
	await fs.writeFile(`${dir}/types.d.ts`, types);
	await fs.writeFile(`${dir}/${kabob}.tsx`, component);
	await fs.writeFile(`${dir}/${kabob}.module.css`, styles);
	await fs.writeFile(`${dir}/${kabob}.test.tsx`, test);

	setTimeout(() => {
		spinner.stop({
			text: `Component ${arg} created!\n`,
			mark: '🎉',
		});
		spinner.clear();
	}, 1000);
};

main();
