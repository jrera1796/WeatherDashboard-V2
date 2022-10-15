var cityInput = document.getElementById('searchedcity')

//Main code
function grabWeather(c) {
  if (c == '') {
    console.log('Please enter a city')
  }
  else {
    cityInput.value = ""
    // fetch(`/api/weather/${c}`)
    // .then(response => {
    //   return response.json();
    // })
  }
}

// Enter button
function enter(enterc) {
  if (event.key === 'Enter') {
    grabWeather(enterc.value); enterc.value = "";
  }
}