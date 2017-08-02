// var demo = function(data) {
//   fx.rates = data.rates
//   var rate = fx(1).from("GBP").to("USD")
//   alert("£1 = $" + rate.toFixed(4))
// }

// $.getJSON("http://api.fixer.io/latest", demo)

(() => {
  'use strict'

  var usdRate, eurRate, cadRate

  // creating a new XMLHttpRequest.
  const xhr = new XMLHttpRequest()
  // HTTP method and where to request
  xhr.open('GET', 'https://api.fixer.io/latest?base=CAD&symbols=USD,EUR,CAD')
  // in a GET request what you send doesn't matter
  // if POST this is the request body
  xhr.send(null)

  // wait for the 'readystatechange' event to fire on the xhr object
  xhr.onreadystatechange = function () {
    // if xhr has not finished we're not ready yet so return
    if (xhr.readyState !== 4 ) { return }
    // if it didn't get a 200 status back log the error
    if (xhr.status !== 200) { return console.log('Error: ' + xhr.status) }

    // if everything works log the response
    console.log(xhr.responseText)

    // logging api response
    const logger = document.querySelector("#logger")

    logger.innerHTML = xhr.responseText

    //creating rates variables
    var rates = JSON.parse(xhr.responseText).rates

    // console.log(rates)

    return rates
  }


  usdRate = rates.USD

  eurRate = rates.EUR

  // console.log("USD is " + usdRate + ", EUR is " + eurRate)


})()

function convert() {

  	var inOne, inTwo, r, usd, eur, cad

	r = JSON.parse(logger.innerHTML).rates;

  	inOne = document.getElementById('input1');

  	inTwo = document.getElementById('input2');

  	usd = r.USD 

  	eur = r.EUR

  	cad = r.CAD

	inTwo.value = inOne.value * r;

	console.log(r);
}