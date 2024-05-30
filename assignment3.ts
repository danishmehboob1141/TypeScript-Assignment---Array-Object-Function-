import * as promptSync from 'prompt-sync'
const input = new promptSync

// Company Product Catalogue

let inventory: Product[] = []
type Product = {
    productName : string
    model : string
    cost : number
    quantity : number
}
let PeekFreans : Product = {
    productName : "Rio",
    model : "ay-8",
    cost : 750,
    quantity : 13
}
let Shan : Product = {
    productName : "Biryani Masala",
    model : "sksa-11",
    cost : 130,
    quantity : 2500
}
let Nestle : Product = {
    productName : "Fruita Vitals",
    model : "a-123-ff",
    cost : 170,
    quantity : 662
}
inventory.push(Nestle,PeekFreans,Shan)

while (true) {
    console.clear()
    console.log()
    console.log("\t1. Nestle")
    console.log("\t2. Peak Freans")
    console.log("\t3. Shan")
    console.log("\t0. End Program \n")
    let choice: number = input("\tWhich product's information you want to know?")
    if(choice == 1) {
        console.clear()
        console.log("\n\n\tInformation about Nestle Product")
        console.log("---------------------------------------------------------")
        for (let key in inventory[0]) {
            console.log("\t" + key + " : " + inventory[0][key])
        }
        console.log("---------------------------------------------------------")
        let pressEnter = input("\n\n\n\tPress Enter to continue ...")
    } else if (choice == 2) {
        console.clear()
        console.log("\n\n\tInformation about Peak Freans Product")
        console.log("---------------------------------------------------------")
        for (let key in inventory[1]) {
            console.log("\t" + key + " : " + inventory[1][key])
        }
        console.log("---------------------------------------------------------")
        let pressEnter = input("\n\n\n\tPress Enter to continue ...")
    } else if (choice == 3) {
        console.clear()
        console.log("\n\n\tInformation about Shan Product")
        console.log("---------------------------------------------------------")
        for(let key in inventory[2]){
            console.log("\t" + key + " : " + inventory[2][key])
        }
        console.log("---------------------------------------------------------")
        let pressEnter = input("\n\n\n\tPress Enter to continue ...")
    } else if (choice == 0) {
        break
    } else {
        console.clear()
        console.log("\n\tInvalid Input! Try Again ...")
        for (let i=0; i<1000000000; i++) {} // delay loop
    }
}
