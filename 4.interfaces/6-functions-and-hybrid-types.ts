//interfaces:

interface Comparator {
    (first: string, second: string): number
    algorithm: string 
    safe: boolean
}

function sorter(c: Comparator) {
    let out = c("first", "second");
    console.log(`Ordering by using the algorithm ${c.algorithm}: ${out}`)
}

//also with types:

type ComparatorT = {
    (first: string, second: string): number
    algorithm: string 
    safe: boolean
}


//FUNCTIONS WITH ADDITIONAL PROPERTIES