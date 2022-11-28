async function convert() {
  let button = document.getElementById("btn");
  let retry = document.getElementById("clean");
  let invert = document.getElementById("invert");
  let request = document.getElementById("value");
  let converted = document.getElementById("result");
  
  const coin1 = document.getElementById("coin1");
  const coin2 = document.getElementById("coin2");

  button.addEventListener("click", async (e) => {
    e.preventDefault();

    const fieldConvert = coin1.value;
    const fieldFor = coin2.value;
    
    const api = `https://economia.awesomeapi.com.br/last/${fieldConvert}-${fieldFor}`;
    const response = await (await fetch(api)).json();

    const req = request.value;

    const result = response[`${fieldConvert}${fieldFor}`].high;

    let calc = (req * result).toFixed(2);
    
    converted.value = calc
  });

  retry.addEventListener('click', (e) => {
    e.preventDefault()
    request.value = ""
    converted.value = ""
  })

  invert.addEventListener('click',  async (e) => {
      e.preventDefault()

    const fieldConvert = coin1.value
    const fieldFor = coin2.value

    coin1.value = fieldFor
    coin2.value = fieldConvert
  
    })

}

convert();