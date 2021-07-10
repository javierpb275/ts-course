//objects:

let person: {
    name: string,
    age: number,
    country: string,
    birthDate: Date,
    pet: boolean,
    job: {
        company: string,
        sector: string
    }
} = {
    name: 'Pepe',
    age: 40,
    country: 'Spain',
    birthDate: new Date(1981),
    pet: true,
    job: {
        company: 'A Company',
        sector: 'IT'
    }
}

/*object type: */
let objeto: object = {
    name: 'Pepe',
    age: 40,
    country: 'Spain'
}