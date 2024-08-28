'use client';

import { useState, useEffect } from 'react';
import { type ChangeEvent, NumberInput } from '#components:number-input';
import { AmountsTable } from '#components:amounts-table';
import { AppHeader } from '#components:app-header';
import { AppFooter } from '#components:app-footer';
import { STORAGE_NAME } from '#constants:names';
import style from '../styles/pages/page.module.css';

export type State = 'snatch' | 'ratio';


export default function Home() {
	const [snatch, setSnatch] = useState('0');
	const [ratio, setRatio] = useState('80');

	function updateState(state: State) {
		return function (e: ChangeEvent) {
			const { value } = e.target;
			const isRatio = state === 'ratio';

			const hold = JSON.stringify({
				snatch: !isRatio ? value: snatch,
				ratio: isRatio ? value : ratio,
			});

			window.localStorage.setItem(STORAGE_NAME, hold);

			if (isRatio) setRatio(value);

			setSnatch(value);
		};
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const snatchMax = window.localStorage.getItem(STORAGE_NAME);

			if (snatchMax) {
				const hold = JSON.parse(snatchMax);

				setSnatch(hold.snatch);
				setRatio(hold.ratio);
			}
		}
	}, []);

	return (
		<>
			<AppHeader heading="Pick Up Heavy Things"/>
			<main className={style.root}>
				<form className={style.tester}>
					<NumberInput
						label="Snatch PR"
						value={snatch}
						onChange={updateState('snatch')}
					/>
					<NumberInput
						label="Snatch %"
						value={ratio}
						onChange={updateState('ratio')}
					/>
				</form>
				<AmountsTable
					title="Snatch"
					states={[snatch, ratio]}
				/>
			</main>
			<AppFooter />
		</>
	);
}
