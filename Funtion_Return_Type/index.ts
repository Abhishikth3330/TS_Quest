// we should have a habit to explicitly mention the type of the fucntion we want
// to be mire specific we can specify the return type of the fucntion


type UserRole = "guest" | "member" | "admin"

type User = {
    username : string
    role : UserRole
}

const users : User[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" }
];


// we have mentioned 'User'
// this means that the function is supposed to return a User Type
function fetchUserDetails (username : string) : User {
    const user = users.find(user => user.username === username)

    if (!user){
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

/* 
    we can also use a string type and return something else
    But a good practice is to be more specific to what we have to return
*/

function fetchUserDetails2 (username : string) : string {
    const user = users.find(user => user.username === username)

    if (!user){
        throw new Error(`User with username ${username} not found`)
    }
    return user.username
}