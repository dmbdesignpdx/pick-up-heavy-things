import type { ChangeEvent as ReactChangeEvent } from 'react';

export type ChangeEvent = ReactChangeEvent<HTMLInputElement>

export type NumberInputProps = Readonly<{
	className?: string;
	label: string;
	value: string;
	onChange?: (e: ChangeEvent) => void;
}>
