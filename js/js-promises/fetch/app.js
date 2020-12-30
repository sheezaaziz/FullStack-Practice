fetch('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res => {
  console.log("parsing...");
  return res.json();
})
.then(data => {
  console.log("data passed...");
  console.log("curr btc price: ", data.ticker.price);
})
.catch(e => {
  console.log("error... ", e);
})

const fetchBitcoinPrice = async () => {
  try {
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
    data = await res.json();
    console.log(data.ticker.price);
  } catch (err) {
    console.log("error...", err);
  }
}
