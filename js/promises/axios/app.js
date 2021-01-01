// axios gives headers already available to us and data parsed.
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
  .then(res => {
    console.log(res.data.ticker.price);
  })
  .catch(err => {
    console.log("error: ", err);
  })

const fetchBitcoinPrice = async() => {
  try {
    const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    console.log(res.data.ticker.price);
  } catch (err) {
    console.log("error: ", err);
  }
}
