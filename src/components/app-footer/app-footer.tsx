import type { AppFooterProps as Props } from './types';

import { cls } from '#utils:cls';
import style from './app-footer.module.css';


export function AppFooter({ className }: Props) {
	const _className = cls(style.root, className);

	return (
		<footer className={_className}>
			<address>
				Daniel Blake
				<a href="#">Email</a>
				<a href="#">LinkedIn</a>
			</address>
			<p>Check out <a href="#">Prism Moves</a></p>
		</footer>
	);
}
