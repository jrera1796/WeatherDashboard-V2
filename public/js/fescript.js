var cityInput = document.getElementById('searchedcity')

//Main code
function grabWeather(c) {
  if (c == '') {
    console.log('Please enter a city')
  }
  else {
    // debugger;
    cityInput.value = ""
//     let data = {
// cn: c
//     }
// let url = new URL('/api/weather');
// for(let k in data){
//   url.searchParams.append(k, data[k]);
// }
debugger;
    fetch(`/api/weather/${c}`)
    .then((result) =>{
      console.log(result)
    })
    .then((response)=>{
      console.log(response)
    })
    
  }
}

// Enter button
function enter(enterc) {
  if (event.key === 'Enter') {
    grabWeather(enterc.value); enterc.value = "";
  }
}