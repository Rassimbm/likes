console.log("page loaded ...");

var count = [3,9,12,9];
var likeCount = [
    document.querySelector("#count-1"),
    document.querySelector("#count-2"),
    document.querySelector("#count-3"),
    document.querySelector("#count-4")
]


function add(id) {
    count[id]++;
    likeCount[id].innerText = count[id] + " like(s)"
}
