const cityInput = document.getElementById('searchedcity')
const cityTitle = document.getElementById('citytitle')
const cityNow = document.getElementById('citynow')

function grabWeather(c) {
  if (c == '') {
    console.log('Please enter a city')
  }
  else {
    cityInput.value = ""
    fetchData(c).then(cityData => {
      let currentw = cityData[0].current
      //Fix error handling
      // if (currentw.cod !== 200) { console.log('Error') }
      cityTitle.innerHTML = currentw.name
      let arr = cityData[0].current.main

      Array.from(cityNow.children).forEach(element => {
        // console.log(element.className)
        Object.keys(arr).forEach(key => {
          // console.log(key)
          if (key === element.className) {
            element.innerHTML = arr[key]
            // console.log('match')
          }
          else {
            // console.log('these dont match')
          }
        })
      })
    })
  }
}










async function fetchData(cd) {
  const response = await fetch(`./api/weather?city=${cd}`);
  const cdata = await response.json();
  return cdata;
}

// Enter button
function enter(enterc) {
  if (event.key === 'Enter') {
    grabWeather(enterc.value); enterc.value = "";
  }
}