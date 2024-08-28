import { type ChangeEvent } from '#components:number-input';

export type InputFormProps = Readonly<{
	className?: string;
	snatch: string;
	ratio: string;
	updateSnatch: (e: ChangeEvent) => void;
	updateRatio: (e: ChangeEvent) => void;
}>
