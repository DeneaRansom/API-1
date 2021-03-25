let baseURL = 'https://cat-fact.herokuapp.com/facts/random?animal_type'
let url;

let goBtn = document.getElementsByClassName("testbutton");
let animalType = document.getElementById('cat');
let factsNum = document.getElementById('factsNum');

goBtn[0].addEventListener("click", fetchResults);


function fetchResults() {

    //if (factsNum.value > 100) {
      //  alert("MAX IS 100!")

    let animal = animalType.value.toLowerCase()
    url = `${baseURL}=${animal}&amount=1`;
    //console.log("animal type:", animalType.value, "Fact:", factsNum.value) 
    fetch(url)
      .then(function (result) {     
        //console.log(result)
        return result.json(); 
    })
    .then(function (json) {
        //console.log(json);
        displayResults(json);
    })

    
    function displayResults(json) {

        let facts = json.text
        console.log(facts);
      
     
       let para = document.createElement("p");
       let node = document.createTextNode(facts);
       para.appendChild(node);

       let info = document.getElementsByClassName("factsList")
       info[0].appendChild(para)

      }  
        }
        //for (let i = 0; i <= factsNum; i++) {
          //  fetchResults()
        //}
