var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var bsw = document.getElementById("biswap");
var xmr = document.getElementById("monero");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cbiswap%2Cmonero&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true",
    
    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function( response ){
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    bsw.innerHTML = response.biswap.usd;
    xmr.innerHTML = response.monero.usd;
});