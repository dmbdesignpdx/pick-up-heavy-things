import type { NumberInputProps as Props } from './types';

import { cls } from '#utils:cls';
import style from './number-input.module.css';


export function NumberInput({
	className,
	label,
	value,
	onChange,
}: Props) {
	const _className = cls(style.root, className);

	return (
		<label className={_className}>
			<span>{label}</span>
			<input
				className={style.input}
				value={value}
				type="number"
				min={50}
				max={200}
				onChange={onChange}
			/>
		</label>
	);
}
