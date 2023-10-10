console.log("page loaded ...");

var count = 3;
var likeCount = document.querySelector("#count");

function add() {
    count++;
    likeCount.innerText = count + " like(s)"
}
