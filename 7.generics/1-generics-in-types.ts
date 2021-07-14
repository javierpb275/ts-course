interface Response1<T> {
    type: string
    success: boolean,
    message: T 
}

let payload1: Response1<string> = {
    type: 'post',
    success: true,
    message: 'message'
}

let payload2: Response1<boolean> = {
    type: 'error',
    success: false,
    message: true
}

//The aim of generics is to influence from outside the intern types of the definition/declaration of a type 
/*
API
{
    type: 'success'
    response: {
        object: 5
    }
} 
{
    type: 'error'
    response: null
} 
*/