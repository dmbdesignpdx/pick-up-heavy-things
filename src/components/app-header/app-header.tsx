import type { AppHeaderProps as Props } from './types';

import { cls } from '#utils:cls';
import style from './app-header.module.css';


export function AppHeader({ className, heading }: Props) {
	const _className = cls(style.root, className);

	return (
		<header className={_className}>
			<h1>{heading}</h1>
		</header>
	);
}
