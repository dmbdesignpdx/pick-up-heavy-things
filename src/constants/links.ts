import { Label } from './names';


function mailTo(email: string): string {
	return `mailto:${email}`;
}


export enum URL {
  GIT_HUB = 'https://github.com/dmbdesignpdx',
  LINKED_IN = 'https://linkedin.com/in/danielblakepdx',
  EMAIL = 'daniel@danielblake.dev',
  PRISM = 'https://prismmoves.org',
  WEBSITE = 'https://danielblake.dev',
}


export const Link = {
	Website: {
		ID: 'link-01',
		LABEL: Label.WEBSITE,
		URL: URL.WEBSITE,
	},
	GitHub: {
		ID: 'link-02',
		LABEL: Label.GIT_HUB,
		URL: URL.GIT_HUB,
	},
	LinkedIn: {
		ID: 'link-03',
		LABEL: Label.LINKED_IN,
		URL: URL.LINKED_IN,
	},
	Prism: {
		ID: 'link-04',
		LABEL: Label.PRISM,
		URL: URL.PRISM,
	},
	Email: {
		ID: 'link-05',
		LABEL: Label.EMAIL,
		URL: mailTo(URL.EMAIL),
	},
} as const;


export const Addresses = [
	Link.Email,
	Link.GitHub,
	Link.LinkedIn,
] as const;
