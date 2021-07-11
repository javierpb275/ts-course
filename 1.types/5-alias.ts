type Numero = number;

let n: Numero = 5;

type LoginCredentials = {
    username: string,
    password: string,
    remember?: boolean
}

function login(data: LoginCredentials) {

}

login({username: 'admin', password: 'admin'});