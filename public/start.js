stat = true;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const dec = async i => (await delay(2000), --i)

const foo = async () => {
  let i = 10000000000000000000;
  
  while(i = await dec(i)) 
    try {
      var lo = document.getElementsByClassName("hzptBO")[0];
      lo.remove();
      stat = false;
    }
    catch(err) {
      // pass
    }
  try {
      document.getElementsByClassName("gdpFPF")[0].textContent = "PIKA";
    }
    catch(err) {
      // pass
    }
}

foo()
