// function return
function ambil(){
  var balik ="dikembalikan";
  return balik;
}
//function parameter/argument
function mintadata(x = "ambil"){

  console.log(x);
}
console.log(ambil());
mintadata();
