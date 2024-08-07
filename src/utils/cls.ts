type Args = (string | false | undefined)[];
type CLS = (...args: Args) => string | undefined;


export const cls: CLS = (...args) => {
	const cl: Args = args.filter(arg => typeof arg === 'string');

	if (cl.length === 0) {
		return undefined;
	}

	return cl.join(' ').trim();
};
