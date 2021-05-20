import * as pieces from '../pieces.js';
import {indexToLetter} from '../helpers.js';
import createFenFromBoardArray from '../board/create-fen.js';
import createBoardArray from '../board/create-board.js';
import * as validation from '../validation.js';


export default function getAllMoves(cell) {
	let possibleSquares = [];
	let beforeState = createFenFromBoardArray();
	for (let i = 1; i <= 8; i++) {
		for (let j = 1; j <= 8; j++) {
			const targetCell = indexToLetter(j) + i;

			if (validation.makeMove(cell, targetCell, { isTest: true })) {
				possibleSquares.push(targetCell);
			}
			createBoardArray(beforeState);
		}
	}
	return possibleSquares;
}