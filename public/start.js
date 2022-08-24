stat = true;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const dec = async i => (await delay(2000), --i)

const foo = async () => {
  let i = 10000000000000000000;
  
  while(i = await dec(i)) 
    try {
      var lo = document.getElementsByClassName("hzptBO")[0];
      lo.remove();
      document.getElementsByClassName("gdpFPF")[0].textContent = "PIKA"
      stat = false;
    }
    catch(err) {
      // pass
    }
}

foo()
