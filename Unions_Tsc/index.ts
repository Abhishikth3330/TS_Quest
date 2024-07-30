// to be simpler
// Union is similar to OR and demoted by |
// condition-1 | condition-2
// so if anyone of these is true the flow of the code will follow along

type User = {
    username : string
    role: "guest" | "member" | "admin"
}

type UserRole = "guest" | "member" | "admin"

// here we have a userRole which is of type UserRole
// so it should be from one of the mentioned things

let userRole : UserRole = "member"

