// Build Your First Friend List

type Friend = {
    firstName : string
    lastName : string
    id ?: number
}

let friend1: Friend = {
    firstName : "Muhammad",
    lastName : "Hamza"
}
let friend2: Friend = {
    firstName : "Muhammad",
    lastName : "Ahsan",
    id : 68686
}
let friend3: Friend = {
    firstName : "Ali",
    lastName : "Khan",
    id : 22139
}
let people = {
    friends : [friend1, friend2, friend3]
}
console.clear()
console.log("\n\n\tFriends List\n==============================")
for (let i=0; i<people.friends.length; i++) {
    console.log("\n\tFriend " + (i+1))
    for (let info in people.friends[i]) {
        console.log(info + " : " + people.friends[i][info])
    }
}
console.log("\n==============================\n\n\n\n")
