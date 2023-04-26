//Lammar a la API
fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")

.then(response => response.json())
//solo para quiero los 51 estados de estados unidos 

.then(data => {

    const arrayData = data.map(data => data.state)
    const simpleArray = arrayData.filter((element, index) => {
        return arrayData.indexOf(element) === index;
    })

    // const array = simpleArray.filter(element, index) => {
         
    // }

    console.log(simpleArray);
})
