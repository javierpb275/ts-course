//arrays and objects:
let vector: number[] = [];
vector[0];

let theObject: object = {
    displayName: 'foo',
    rpDisplayName: 'foo',
    id: 1
};

//theObject.id
let x = theObject['displayName'];

//------------------

//when you want to specified that access using an index, it has to return [index: number]: THIS TYPE;
interface Indexable {
    [index: number]: boolean;
}

let l: Indexable = {}

let k = l[4];


interface IndexableS {
    [index: string]: string;
}

let ls: IndexableS = {}

let ks = ls["4"];