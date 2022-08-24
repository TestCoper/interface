stat = true;
while (stat){
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
