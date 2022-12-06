document.getElementById("hello").innerHTML = "안녕";
document.getElementById("hello").style.fontSize = "30px";
document.getElementById("hi").innerHTML = "올때바밤바";

function openAlert2(구멍) {
  document.getElementById("alert").style.display = 구멍;
}

function openAlert1(구멍) {
  document.getElementsByClassName('alert-box')[0].innerHTML='아이디 입력해주세요';
  document.getElementById("alert").style.display = 구멍;
}


//   function closeAlert() {
//     document.getElementById("alert").style.display = "none";
//   }

function plus(a, b) {
  console.log(a + b);
}
plus(2, 3);