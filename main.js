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
// let studentsArray = [
//     {
//         name: "Ben Kilinski",
//         birthdate: "10/03/1997",
//         email: "ben.kilinski@gmail.com",
//         resut: "aproved"
//     }, 
//     {
//         name: "Jony Walter",
//         birthdate: "10/03/1990",
//         email: "jony@gmail.com",
//         resut: "not aproved"
//     }, 
//     {
//         name: "Ilana",
//         birthdate: "10/03/1999",
//         email: "ilana@gmail.com",
//         resut: "aproved"
//     }]

// function printStudentsLog(){
//     for (const iterator of studentsArray) {
//         console.log(iterator)
//     }
// }

// function printStudent3Log(){
//     for(const iterator of studentsArray){
//         for(const key in iterator){
//             if(iterator[key]=="Ilana"){
//                 console.log(iterator)
//             }
//         }
//     }
// }

// function printStudentsPage(){
//     for(const iterator of studentsArray){
//         task10.innerHTML += `<div id="student${studentsArray.indexOf(iterator)}"></div>`
//         let studentObject = document.getElementById(`student${studentsArray.indexOf(iterator)}`)
//         for(const key in iterator){
//             studentObject.innerHTML += `<p>${key}: ${iterator[key]}</p>` 
//         }
//     }
// }
//-------------------//-----------------------

//task 11
// let office = getOffice()

// function getOffice(){
//     let officeArray = []
//     let numDepartments = +prompt("How many departments do you have?")
//     for (let i = 0; i<numDepartments; i++){
//         let objectMy = {
//             department: prompt("insert departament"),
//             workers: +prompt("insert the number of workers"), 
//             manager: prompt("insert the manager name"),
//         }    
//         officeArray.push(objectMy)        
//     }
//     return officeArray   
// }

// function task11(){ 
//     for(const iterator of office){
//         document.getElementById("task11div").innerHTML += `<div id="dep${office.indexOf(iterator)+1}"></div>`
//         for(const key in iterator){
//             document.getElementById(`dep${office.indexOf(iterator)+1}`).innerHTML += `<p>${key}: ${iterator[key]}</p>`
//         }
//     }
// } 
// task11()
//-----------------------//-----------------------

//task 12
// function showForm() {
//     document.body.innerHTML += `<form id="myForm")>
//                                 <label>Original station: </label><input id="ostation"type=" text"><br>
//                                 <label>Final station: </label><input id="fstation" type="text"><br>
//                                 <label>Travel time: </label><input id="travelTime"type="number"><br>
//                                 </form>
//                                 <button id="btnConfirm">confirm</button>`
//     btnConfirm.addEventListener("click", () => {
//         document.body.innerHTML = 
//         `<p>Original station: ${ostation.value}</p>
//         <p>Final station: ${fstation.value}</p>
//         <p>Travel time:${travelTime.value}</p>`

//     })
// }
// btn12.addEventListener("click", showForm)
//---------------------------------//-------------------------------

//task 13 
// let cities = [
//     {
//     City: "New York",
//     Population: "8.5m",
//     Quarentine: "yes",
//     Symbol: "https://www.nyc.gov/assets/dcas/images/content/pages/CitySealColor.jpg", 
//     }, 
//     {
//     City: "Tel Aviv",
//     Population: "1.4m",
//     Quarentine: "no",
//     Symbol: "https://www.crwflags.com/fotw/images/i/il-tlviv.gif" 
//     }, 

//     { 
//     City: "Mexico City",
//     Population: "8.9m",
//     Quarentine: "no",
//     Symbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Coat_of_arms_of_Mexico.svg/1200px-Coat_of_arms_of_Mexico.svg.png", 
//     }, 

//     {
//     City: "Buenos Aires",
//     Population: "15.5m",
//     Quarentine: "no",
//     Symbol:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Escudo_de_la_Ciudad_de_Buenos_Aires.svg/1200px-Escudo_de_la_Ciudad_de_Buenos_Aires.svg.png" , 
//     }, 

//     { 
//     City: "Tokyo",
//     Population: "14m",
//     Quarentine: "yes",
//     Symbol:"https://upload.wikimedia.org/wikipedia/commons/c/c9/Symbol_of_Tokyo_Metropolis.svg", 
//     }
// ]

// function printTokyo(){
//     for(const iterator of cities){
//         if(iterator.City == "Tokyo"){
//             for(const key in iterator){
//                 if (key == "Symbol") {
//                     document.body.innerHTML += `<div>Symbol: <img src="${iterator[key]}"></div>`;
//                 } 
//                 else {
//                     document.body.innerHTML += `<div>${key}: ${iterator[key]}</div>`;
//                 }
//             }    
//         }
//     }
// }

// function printCities(){
//     let cityHtml = "";
    
//     for(const iterator of cities){
//         cityHtml += `<div id="city${cities.indexOf(iterator)+1}"></div>`
        
//         for(const key in iterator){
            
//             if(key == "Symbol"){
//                 cityHtml += `<p><img src="${iterator[key]}" width="100" height="75"></p>`
//             }
//             else{
//                 cityHtml += `<p>${key}: ${iterator[key]}</p>`
//             }
//         }
//     }
//     cityHtml += `<button id="btnNewCity">add new city</button>`
//     document.body.innerHTML += cityHtml
// }
// printCities()

// btnNewCity.addEventListener("click", ()=>{
//     let newCity = {
//         city: prompt("city name"),
//         population: +prompt("population")+"m",
//         Quarentine: prompt("its a city under quarentine?"),
//         Symbol: prompt("insert city symbol image link")
//     }
//     cities.push(newCity)
//     document.body.innerHTML = '';
//     printCities()
// })
//-----------------------------------------------------------

//task 14


