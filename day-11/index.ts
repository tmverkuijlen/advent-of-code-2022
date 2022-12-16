import FileReader from "../utils/FileReader"
import Monkey from "./monkey";

export const run = async() => {
    const content = await FileReader.readToText('./inputs/input-11.txt');

    const monkeyContents = content.split('\r\n\r\n');

    const monkeys: Monkey[] = [];

    for (let monkeyContent of monkeyContents) {
        const [monkey, strItems, strOperator, strTest, strIfTrue, strIfFalse] = monkeyContent.split('\r\n');

        const items = strItems.replace('  Starting items: ', '').split(', ').map(s => parseInt(s));
        const operator = strOperator.replace('  Operation: new = ', '');
        const test = parseInt(strTest.replace('  Test: divisible by ', ''));
        const ifTrue = parseInt(strIfTrue.replace('    If true: throw to monkey ', ''));
        const ifFalse = parseInt(strIfFalse.replace('    If false: throw to monkey ', ''));

        monkeys.push(new Monkey(monkeys, items, operator, test, ifTrue, ifFalse));
    }

    const ROUNDS = 20;

    for (let i = 0; i < ROUNDS; i++) {
        for (let monkey of monkeys) {
            monkey.emulate();
        }
    }

    console.log(monkeys.map(m => m.inspect));
}