import type { FooterAddressProps as Props } from './types';

import { cls } from '#utils:cls';
import { Addresses } from '#constants:links';
import style from './footer-address.module.css';


export function FooterAddress({ className }: Props) {
	const _className = cls(style.root, className);

	return (
		<address className={_className} data-flow>
			Made with [emoji] Daniel Blake
			{Addresses.map(link => (
				<a key={link.ID} href={link.URL}>{link.LABEL}</a>
			))}
		</address>
	);
}
