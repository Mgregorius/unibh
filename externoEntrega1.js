function msg() {
    alert("AIA");
}

function mOut(obj) {
    document.getElementById("lampada").src = 'lamp2.png'
  }

function mOver(obj) {
  document.getElementById("lampada").src = 'lamp1.png'
}

var nomecompleto = prompt("Digite seu nome completo:");
nomes = nomecompleto.split(" ");
for (x in nomes) {
    alert(nomes[x]);
}