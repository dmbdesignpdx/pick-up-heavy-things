/** Ours **/
import type { AmountsTableProps as Props } from './types';
import { cls } from '#utils:cls';
import { BREAKPOINTS, GOAL_RATIO } from '#constants:values';
import style from './amounts-table.module.css';


interface Amount {
	percentage: string;
	snatchAmount: number;
	cjAmount: number;
	id: string;
}


export function AmountsTable({
	className,
	title,
	states,
}: Props) {
	const [snatch, ratio] = states;
	const _className = cls(style.root, className);
	const snatchNumber: number = Number(snatch);
	const ratioNumber: number = Number(ratio) * 0.01;
	const snatchGoal: number = Math.round(snatchNumber / GOAL_RATIO);
	const cjGoal: number = Math.round(snatchNumber / ratioNumber);

	const amounts: Amount[] = BREAKPOINTS.map((value, index) => {
		const percentage = (value * 100).toFixed(0);
		const snatchAmount = Math.ceil(BREAKPOINTS[index] * snatchGoal);
		const cjAmount = Math.ceil(BREAKPOINTS[index] * cjGoal);
		const id = `${percentage}-${snatchAmount}-${cjAmount}`;

		return ({
			percentage,
			snatchAmount,
			cjAmount,
			id,
		});
	});

	return (
		<table className={_className}>
			<caption data-sr="">
				{title}
			</caption>
			<thead>
				<tr>
					<th scope="col">Rate</th>
					<th scope="col">Snatch</th>
					<th scope="col">Clean & Jerk</th>
				</tr>
			</thead>
			<tbody>
				<tr role="presentation">
					<td/>
					<td/>
					<td/>
				</tr>
				<tr>
					<td scope="row">GOAL</td>
					<td>{snatchGoal}</td>
					<td>{cjGoal}</td>
				</tr>
				{
					amounts.map(amount => (
						<tr key={amount.id}>
							<td scope="row">{amount.percentage}%</td>
							<td>{amount.snatchAmount}</td>
							<td>{amount.cjAmount}</td>
						</tr>
					))
				}
			</tbody>
		</table>
	);
}
