interface UserData2 {
    readonly username: string,
    created_at: Date | undefined,//or Date or undefined
    superuser?: boolean,//?: it can be or not
    readonly personal: {
        name: string,
        email: string
    },
    logout():void,
    rename: (username: string) => void
}

function login2(): UserData2 {
    return {
        username: 'admin',
        created_at: new Date(),
        superuser: true,
        personal: {
            name: 'Mr.Admin',
            email: 'admin@gmail.com'
        },
        logout: () => console.log('GoodBye'),
        rename: username => console.log('Rename account')
    }
}

let l = login2();

//l.username = 'foo'; You cannot do this because it is readonly

//but you can do this:
console.log(l.username);
l.rename('foo')

//l.personal = {}; You cannot do this because it is readonly

//but you can do this:
l.personal.name = 'Pepe';

//be careful when you say sth can be undefined. check if we receive any value:
if (l.created_at) {
    l.created_at.toISOString()
}
//another thing we can do is this:
l.created_at?.toISOString();

//if we are 100% sure that it's gonna exist:
l.created_at!.toISOString();