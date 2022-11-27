async function convert() {
  let button = document.getElementById("btn");
  let retry = document.getElementById("clean");
  let request = document.getElementById("value");
  let converted = document.getElementById("result");

  button.addEventListener("click", async (e) => {
    e.preventDefault();

    const coin1 = document.getElementById("coin1").value;
    const coin2 = document.getElementById("coin2").value;

    const api = `https://economia.awesomeapi.com.br/last/${coin1}-${coin2}`;
    const response = await (await fetch(api)).json();

    const req = request.value;

    const result = response[`${coin1}${coin2}`].high;

    let calc = (req * result).toFixed(2);
    
    converted.value = calc
  });

  retry.addEventListener('click', (e) => {
    e.preventDefault()
    request.value = ""
    converted.value = ""
  })


}

convert();