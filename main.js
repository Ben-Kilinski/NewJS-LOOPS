//task 1 - forEach
// let names = ["Ben", "Itzhak", "Matan",  "Maya", "Aron"]
// function task1 () {
//     names.forEach(function (item){console.log(item)})
// }
// task1()

//-----------------------------------------------------------//-----------------------------------------

//task 2 - forEach
// let ages = [10, 33, 26, 48, 55, 78, 93, 84, 15, 102]
// function task2 () {
//     ages.forEach(function(item){
//         if (item >= 25){
//         console.log(item)
//         }
//     })
// }
// task2 ()

//-----------------------------------------------------------//-----------------------------------------

//task 3 - forEach
// let familyNames = ["Kilinski", "Jones", "Gurion", "Einstein", "Openheimer"]
// function task3 () {
//     familyNames.forEach(function(item, index){
//             console.log(familyNames[index].toUpperCase())
//     })
// }
// task3 () 

//-----------------------------------------------------------//-----------------------------------------

//task 4 - for of
// function task4() {
//     let names = ["Itzhak", "Ron", "Matan", "Ben", "Maya"]
//     for (const item of names) { console.log(item) }
// }
// task4()

//-----------------------------------------------------------//-----------------------------------------

//task 5 - for of
// function task5() {
//     let ages = [6, 92, 76, 44, 2, 22, 58, 64, 67, 112]
//     for (const item of ages) {
//         if (item >= 25) { console.log(item) }
//     }
// }
// task5()

//-----------------------------------------------------------//-----------------------------------------

//task 6 - for of
// function task6() {
//     let FamilyNames = ["Kilinski", "Johnson", "Goldberg", "Alves", "Potter", "Parker"]
//     for (let item of FamilyNames) {
//         console.log(item.toUpperCase()) 
//     }
// }
// task6()

//-----------------------------------------------------------//-----------------------------------------

//task 7 
// let btn = document.getElementById("btn")
// let liCollection = document.getElementsByTagName("li")
// btn.addEventListener("click", ()=>{
//     for(let ilItem of liCollection){
//         ilItem.innerText = ilItem.innerText.toUpperCase()
//     }
// })  
//-----------------------------------------------------------//-----------------------------------------

//task 8
// let home = {
//     street: "Alembi 74",
//     city: "Tel Aviv",
//     country: "Israel",
//     rooms: 4,
// }
// console.log(home)

// for(let fields in home){
//     console.log(fields)
//     document.body.innerHTML += `<p>${home[fields]}</p>`
// }
//--------------------------------//------------------------------------------------------------------


//task 9 
// let dogsArray = [
//     {
//       dog: "Max",
//       age: 3,
//       breed: "Golden"
//     },
//     {
//       dog: "Jony",
//       age: 5,
//       breed: "bulldog"
//     },
//     {
//       dog: "Luna",
//       age: 2,
//       breed: "Siberian Husky"
//     }
// ]

// function printDogLog(){
//     for (let dogs of dogsArray){
//     console.log(dogs)
//     }
// }

// function printDog2Log(){
//     for (const iterator of dogsArray) {
//         for (const key in iterator) {
//             if(iterator[key]=="Jony"){
//                 console.log(iterator[key])
//             }
//         }
//     } 
// }

// function printArrayObjects(){
//     for (const iterator of dogsArray) {
//         document.body.innerHTML += `<div id="thisDiv${dogsArray.indexOf(iterator)}"></div>`
//         let div1 = document.getElementById(`thisDiv${dogsArray.indexOf(iterator)}`)
//         for(const key in iterator){
//             div1.innerHTML += `<p>${key}: ${iterator[key]}</p>`
//         } 
//     }    
// }
//-----------------------//-------------------------------------------------------------------------

//task10
let studentsArray = [
    {
        name: "Ben Kilinski",
        birthdate: "10/03/1997",
        email: "ben.kilinski@gmail.com",
        resut: "aproved"
    }, 
    {
        name: "Jony Walter",
        birthdate: "10/03/1990",
        email: "jony@gmail.com",
        resut: "not aproved"
    }, 
    {
        name: "Ilana",
        birthdate: "10/03/1999",
        email: "ilana@gmail.com",
        resut: "aproved"
    }]

function printStudentsLog(){
    for (const iterator of studentsArray) {
        console.log(iterator)
    }
}

function printStudent3Log(){
    for(const iterator of studentsArray){
        for(const key in iterator){
            if(iterator[key]=="Ilana"){
                console.log(iterator)
            }
        }
    }
}

function printStudentsPage(){
    for(const iterator of studentsArray){
        task10.innerHTML += `<div id="student${studentsArray.indexOf(iterator)}"></div>`
        let studentObject = document.getElementById(`student${studentsArray.indexOf(iterator)}`)
        for(const key in iterator){
            studentObject.innerHTML += `<p>${key}: ${iterator[key]}</p>` 
        }
    }
}
//-------------------//-----------------------

//task 11
let office = [
    {
    department: prompt("insert departament"),
    workers: +prompt("insert the number of workers"), 
    manger: prompt("insert the manager name"),
    },
    {
    department: prompt("insert departament"),
    workers: +prompt("insert the number of workers"), 
    manger: prompt("insert the manager name"),
    },
    {
    department: prompt("insert departament"),
    workers: +prompt("insert the number of workers"), 
    manger: prompt("insert the manager name"),
    }
]
function task11(){
    for(const iterator of office){
        document.body.innerHTML += `<div id="${office.indexOf(iterator)}"></div>`
        for(const key of iterator){
            document.body.innerHTML += `<p id="${office.indexOf(iterator)}">${key}: ${iterator[key]}</p>`
        }
    }
}
task11()