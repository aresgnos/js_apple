// document.querySelector('.button').addEventListener('click', function() {

// })

// setTimeout(function() {

// }, 1000)

function first(파라미터) {
    console.log(1);
    파라미터();
}
function second() {
    console.log(2);
}
first(second);