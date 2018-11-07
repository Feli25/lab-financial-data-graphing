const coinInfo = axios.create({
  baseURL: 'https://api.coindesk.com/v1/bpi/historical/close.json',
});

coinInfo.get()
  .then(response => {
    // console.log(Object.keys(response.data.bpi));

    // console.log(response.data.bpi),

    printTheChart(response.data.bpi);
  })
  .catch(err => { console.log(err) })

let printTheChart = (coinData => {
  let ctx = document.getElementById('myChart').getContext('2d');
  let stockLabels = Object.keys(coinData);
  let stockPrice = Object.values(coinData);
  // console.log(stockLabels, stockPrice)
  let chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockLabels,
      datasets: [{
        label: "bitcoins",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: stockPrice,
        // }, {
        //   label: "open",
        //   // backgroundColor: 'rgb(255, 99, 132)',
        //   borderColor: 'rgb(20, 99, 250)',
        //   data: stockData.map(element => element.open),
      }]
    }
  });
})