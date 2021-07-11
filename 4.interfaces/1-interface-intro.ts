interface UserData {
    username: string,
    created_at: Date,
    superuser: boolean
}

function login(): UserData {
    return {
        username: 'admin',
        created_at: new Date(),
        superuser: true
    }
}

let data = login()