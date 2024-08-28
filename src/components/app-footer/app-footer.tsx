import type { AppFooterProps as Props } from './types';

import { cls } from '#utils:cls';
import { Link } from '#constants:links';
import { FooterAddress } from '#components:footer-address';
import style from './app-footer.module.css';


export function AppFooter({ className }: Props) {
	const _className = cls(style.root, className);

	return (
		<footer className={_className}>
			<FooterAddress />
			<p>Check out <a href={Link.Prism.URL}>{Link.Prism.LABEL}</a>. Do it.</p>
		</footer>
	);
}
