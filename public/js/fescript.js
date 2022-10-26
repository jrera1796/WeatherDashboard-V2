const cityInput = document.getElementById('searchedcity')
const cityTitle = document.getElementById('citytitle')
const cityNow = document.getElementById('citynow')
const cityCast = document.getElementById('citycast')
function grabWeather(c) {
  if (c == '') {
    console.log('Please enter a city')
  }
  else {
    cityInput.value = ""
    fetchData(c)
      .then(cityData => {
        let currentw = cityData[0].current
        let currentf = cityData[1].forecast
        let currentMain = currentw.main
        let forecastArray = currentf.list
        cityTitle.innerHTML = currentw.name
        console.log(currentf)
        Array.from(cityNow.children).forEach(element => {
          Object.keys(currentMain).forEach(key => {
            key === element.className ? element.innerHTML = currentMain[key] : console.log('these dont match')
          })
        })

        Array.from(cityCast.children).forEach(element => {
          Object.keys(forecastMain).forEach(key => {
            key === element.className ? element.innerHTML = forecastMain[key] : console.log('these forecasts dont match')
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