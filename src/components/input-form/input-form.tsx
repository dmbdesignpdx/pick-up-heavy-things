import type { InputFormProps as Props } from './types';

import { cls } from '#utils:cls';
import { NumberInput } from '#components:number-input';
import style from './input-form.module.css';


export function InputForm({
	className,
	snatch,
	ratio,
	updateSnatch,
	updateRatio,
}: Props) {
	const _className = cls(style.root, className);

	return (
		<div className={_className}>
			<NumberInput
				label="Snatch PR"
				value={snatch}
				onChange={updateSnatch}
			/>
			<NumberInput
				label="Snatch %"
				value={ratio}
				onChange={updateRatio}
			/>
		</div>
	);
}
