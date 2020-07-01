showMapData('Total')

function showMapData(stateName) {
  console.log(stateName);

  fetch('https://api.covid19india.org/data.json').then((response) => response.json()).then((data) => {
    for (let i in data.statewise) {
      if (data.statewise[i].state == stateName) {
        console.log(data.statewise[i])
        document.querySelector('.caseFigActive').innerHTML = data.statewise[i].active;

        document.querySelector('.caseFigConfirmed').innerHTML = data.statewise[i].confirmed;

        document.querySelector('.caseFigDied').innerHTML = data.statewise[i].deaths;

        document.querySelector('.caseFigRecod').innerHTML = data.statewise[i].recovered;

        document.querySelector('.state-name').innerHTML = stateName;


      }
    }
  })
}