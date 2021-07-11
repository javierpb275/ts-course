type A = {
    one: boolean,
    two: boolean
}

type B = {
    three: boolean
}

let value: A | B = { three: false};

function convert(value: string|number) {
    if (typeof value === "string") {
        value.trim();
    } else if (typeof value === "number") {
        value.toFixed();
    }
}

convert('hello');
convert(1);