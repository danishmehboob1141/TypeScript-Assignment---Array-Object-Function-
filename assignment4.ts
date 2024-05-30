import * as promptSync from 'prompt-sync'
const input = new promptSync

// Student List Organizer

interface Student {
    name : string,
    isSenior : boolean,
    assignmentCompleted : boolean
}
let students : Student[] = []
let student1: Student = {
    name : "Danish Mehboob",
    isSenior : true,
    assignmentCompleted : true
}
let student2 : Student = {
    name : "Abubakar",
    isSenior : false,
    assignmentCompleted : false
}
let student3 : Student = {
    name : "Muhammad Usman",
    isSenior : true,
    assignmentCompleted : false
}
let student4 : Student = {
    name : "Ali Khan",
    isSenior : true,
    assignmentCompleted : true
}
let student5 : Student = {
    name : "Ali Khan",
    isSenior : false,
    assignmentCompleted : true
}
students.push(student1, student2, student3, student4, student5)

let shortListedStudents: string[] = []
let eliminatedStudents: string[] = []

// Filteration

while (true) {
    console.clear()
    console.log("\n\t1. Show Original Details")
    console.log("\t2. Update the List")
    console.log("\t3. End   \n")
    let choice: number = input("\tEnter your choice> ")
    if (choice == 3) 
        break
    if (choice == 1) {
        console.clear()
        console.log("\n\t\tORIGINAL LIST")
    console.log("============================================")
    for(let i=0; i<students.length; i++) {
        console.log("\n--------Student " + (i+1) + "-------------------")
        for (let info in students[i]) {
            console.log("\t" + info + " : " + students[i][info])
        }
    }
    let pressEnter = input("\n\n\tPress Enter to continue...")
} else if (choice == 2) {
    for(let i=0; i<students.length; i++) {
        if (students[i].assignmentCompleted == true && students[i].isSenior == true) {
            shortListedStudents.push(students[i].name)
        } else {
            eliminatedStudents.push(students[i].name)
        }
    }
    console.clear()
    console.log("\n\n\t\tUPDATED LIST")
    console.log("============================================\n")
    console.log("--------Shortlisted Senior Students--------")
    for (let i=0; i<shortListedStudents.length; i++) {
        console.log("\t" + shortListedStudents[i])
    }
    console.log("\n--------Eliminated Senior Students--------")
    for (let i=0; i<eliminatedStudents.length; i++) {
        console.log("\t" + eliminatedStudents[i])
    }
    let pressEnter = input("\n\n\tPress Enter to continue...")
} else {
    console.clear()
    console.log("\n\n\tInvalid Input! Try Again...")
    for(let i=0; i<1000000000; i++)  {}          // delay loop
}
}
