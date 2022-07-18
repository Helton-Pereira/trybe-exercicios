const getCrypto = async () => {
  const url = 'https://api.coincap.io/v2/assets'

  const result = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => error.toString());

  return result;
}

const setCoins = async () => {
  const coins = await getCrypto();

  const coinList = document.getElementById('coins');

  coins.filter((_, index) => index < 10 )
  .forEach((coin) => {
    const newLine = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);

    newLine.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`

    coinList.appendChild(newLine);
  });
}

window.onload = () => setCoins();