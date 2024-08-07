'use client';

import { useState, useEffect } from 'react';
import { type ChangeEvent, NumberInput } from '#components:number-input';
import { AmountsTable } from '#components:amounts-table';
import { AppHeader } from '#components:app-header';
import { AppFooter } from '#components:app-footer';
import { STORAGE_NAME } from '#constants:names';
import style from '../styles/pages/page.module.css';


export default function Home() {
	const [snatch, setSnatch] = useState('0');
	const [ratio, setRatio] = useState('80');

	function updateSnatch(e: ChangeEvent) {
		const { value } = e.target;

		setSnatch(value);

		const hold = JSON.stringify({
			snatch: value,
			ratio,
		});

		window.localStorage.setItem(STORAGE_NAME, hold);
	}

	function updateRatio(e: ChangeEvent) {
		const { value } = e.target;

		setRatio(value);

		const hold = JSON.stringify({
			snatch,
			ratio: value,
		});

		window.localStorage.setItem(STORAGE_NAME, hold);
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
				<NumberInput
					label="Snatch PR"
					value={snatch}
					onChange={updateSnatch}
				/>
				<NumberInput
					label="Snatch Percentage"
					value={ratio}
					onChange={updateRatio}
				/>
				<AmountsTable
					title="Snatch"
					states={[snatch, ratio]}
				/>
			</main>
			<AppFooter />
		</>
	);
}
