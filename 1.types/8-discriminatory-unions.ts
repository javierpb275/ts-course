type SumOperation = {
    sum1: number,
    sum2: number,
    type:'sum'
}

type MultiplyOperation = {
    operator1: number,
    operator2: number,
    type:'multiply'
}

type Operation = SumOperation | MultiplyOperation;

function calculate(o: Operation) {
    if (o.type == 'sum') {
        return o.sum1 + o.sum2
    } else if (o.type == 'multiply') {
        return o.operator1 * o.operator2;
    }
}