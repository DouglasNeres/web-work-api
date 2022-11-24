async function convert() {
  let button = document.getElementById("botao");
  let retry = document.getElementById("retry");
  let request = document.getElementById("converter");
  let converted = document.getElementById("convertido");

  button.addEventListener("click", async (e) => {
    e.preventDefault();

    const coin1 = document.getElementById("coin1").value;
    const coin2 = document.getElementById("coin2").value;

    const api = `https://economia.awesomeapi.com.br/last/${coin2}-${coin1}`;
    const response = await (await fetch(api)).json();

    const req = request.value;

    const result = response[`${coin2}${coin1}`].high;

    let calc = (req * result).toFixed(2);
    
    converted.value = calc;
  });

  retry.addEventListener('click', (e) => {
    request.value = ""
    converted.value = ""
  })


}

convert();