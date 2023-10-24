// REPASO ARRAY Y OBJETOS CLASE PASADA


// let ejemploArray = ["fdsafdasf", "wwwww", "rrrrr"]
// ejemploArray[ejemploArray.length - 1]

// let ejemploObjeto = {
//     nombre: "fsdafasd",
//     apellido: "fsdfsdaf",
//     edad:525441
// }
// ejemploObjeto.edad

// let ejemploArrayDeObjetos = [{
//     nombre: "fsdafasd",
//     apellido: "fsdfsdaf",
//     edad:525441
// },
// {
//     nombre: "fsdafadfsdsasd",
//     apellido: "fsdfsdsadsdaf",
//     edad:521
// },{
//     nombre: "fsdasdfsdsdfsdfsdfasd",
//     apellido: "fsdffsdfsdfsdfsdsdaf",
//     edad:5
// }]

// ejemploArrayDeObjetos[2].edad

// CLASE DE HOY

// const div = document.querySelector("#fetch")

// fetch("https://rickandmortyapi.com/api/character")
// .then(res => res.json())
// .then((data) =>{
//     console.log(data)
//     console.log(data.results[0].name)
//     div.innerHTML = 
//     `
//         <h2>${data.results[0].name}</h2>
//         <img src = ${data.results[0].image} alt=""/>
//         <p>${data.results[0].status}</p>
//         <p>${data.results[0].species}</p>
//     `
// })

// Ejercicio para realizar es traerse todos los nombres de los primeros 20 personajes 

// const element = document.querySelector("#fetch")

// fetch("https://rickandmortyapi.com/api/character")
// .then(res => res.json())
// .then((data) =>{
//     console.log(data)
//     console.log(data.results)

//     for (const iterator of data.results) {
//         element.innerHTML +=
//         `
//             <h2>${iterator.name}</h2>
//             <img src = ${iterator.image} alt=""/>
//             <p>${iterator.status}</p>
//             <p>${iterator.species}</p>
//         `
//     }

// })

//API DE LOS SIMPSONS

// const element = document.querySelector("#fetch")

// fetch("https://apisimpsons.fly.dev/api/personajes")
// .then(res => res.json())
// .then((data) =>{
//     console.log(data.docs[0])
//     // console.log(data.results)

//     for (const iterator of data.docs) {
//         element.innerHTML +=
//         `
//             <h2>${iterator.Nombre}</h2>
//             <img src = ${iterator.Imagen} alt=""/>
//             <p>${iterator.Genero}</p>
//             <p>${iterator.Ocupacion}</p>
//         `
//     }

// })


//mejorar el innerHTML

// const element = document.querySelector("#fetch")
// const boton = document.querySelector("#btn-next")
// let html = ""

// fetch("https://rickandmortyapi.com/api/character")
// .then(res => res.json())
// .then((data) =>{
//     console.log(data)
//     console.log(data.results)

//     for (const iterator of data.results) {
//         html +=
//         `
//             <div class="card">
//                 <h2>${iterator.name}</h2>
//                 <img src = ${iterator.image} alt=""/>
//                 <p>${iterator.status}</p>
//                 <p>${iterator.species}</p>
//             </div>
//         `
//     }
//     element.innerHTML = html

// })



// fetch("https://rickandmortyapi.com/api/character")
// .then(res => res.json())
// .then((data) =>{
//     console.log(data.info.next)
// })






// Harry Potter

const element = document.querySelector("#fetch")

let html = ""

fetch("https://hp-api.onrender.com/api/characters")
.then(res => res.json())
.then((data) =>{
    console.log(data)

    for (const iterator of data) {
        html +=

        `
            <div class="card">
                <h2>${iterator.name}</h2>
                <img src = ${iterator.image} alt=""/> 
                <p>Casa${iterator.house}</p>
                <p>Actor:${iterator.actor}</p>
            </div>
        `
    }
    element.innerHTML = html

})