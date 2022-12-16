import FileConverter from '../utils/FileConverter';
import Forest from './forest';

export const run = async () => {
    const content = await FileConverter.readAndConvertCsvToRows('./inputs/input-8.txt');
    const forest = new Forest();

    // build forest
    forest.fill(content);

    let count = 0;
    Object.values(forest.trees).forEach(tree => {
        if (tree.isVisible()) {
            count++;
        }
    });

    console.log(count);

    let second = 0;
    Object.values(forest.trees).forEach(tree => {
        const score = tree.scenicScore();

        if (score > second) {
            second = score;
        }
    });

    console.log('second', second);
}

// import FileReader from '../utils/FileReader';

// async function p2022day8_part1(input: string, ...params: any[]) {
// 	let trees: number[][] = [];

// 	const lines = input.split("\r\n");
// 	for (const line of lines) {
// 		let arr = [];
// 		for (const tree of line.split("")) {
// 			arr.push(parseInt(tree));
// 		}
// 		trees.push(arr);
// 	}

// 	return 2*trees.length + (2*(trees.length - 2)) + getScore(trees, 1);
// }

// function getScore(trees: number[][], inset: number): number {
// 	let x = inset;
// 	let y = inset;
// 	let score = 0;
// 	let state = 0;
	
// 	while(state < 4) {
// 		let slices: number[][] = [[],[]];
// 		for (let i = 0; i < trees.length; i++) {
// 			if(i==y) continue;
// 			slices[Number(i < y)].push(trees[i][x]);
// 		}

// 		slices.push(trees[y].slice(0,x));
// 		slices.push(trees[y].slice(x+1,trees[y].length));
		
// 		for (let i = 0; i < slices.length; i++) {
// 			const slice = slices[i];
// 			if(Math.max(...slice) < trees[y][x]) {
// 				score++;
// 				break;
// 			}
// 		}

// 		if(inset == Math.trunc(trees.length/2)) return score;

// 		switch(state) {
// 			case 0:
// 				if(++x >= trees[y].length - inset - 1)
// 					state++;
// 				break;
// 			case 1:
// 				if(++y >= trees.length - inset - 1)
// 					state++;
// 				break;
// 			case 2:
// 				if(--x <= inset)
// 					state++;
// 				break;
// 			case 3:
// 				if(--y <= inset)
// 					state++;
// 				break;
// 		}
// 	}


// 	return score + getScore(trees, ++inset)
// }

// export const run = async () => {
//     const input = await FileReader.readToText('./inputs/input-8.txt');
//     console.log(await p2022day8_part1(input));
// }