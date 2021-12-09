if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    console.log("ready")
    document.getElementById("2b")
    .addEventListener("click", gennum)
}
function gennum() {
    var index = document.getElementById("3b").value
    var numboxv = document.getElementById("1b").value
    var realnum = parseInt(numboxv, 10);
    var number = Math.pow(realnum, 1 / index);
    if (Number.isInteger(number) == true){
        display(number)
    }
    else {
        simplfy(realnum ,index)
    }
}
function simplfy(anumber, index){
    var divideBy = 2
    while (Number.isInteger(anumber / divideBy) == false) {
        divideBy++
    }
    var i = 0
    while (Number.isInteger(anumber / divideBy) == true) {
        var anumber = anumber / divideBy
        i++
    }
    if (Number.isInteger(i / index) == true){
        i /= index
        display(anumber, i * divideBy, index)
    }
    else{
        if (Number.isInteger(i / 2) == false){
            if(Number.isInteger(i / index) == true){
                var dis = i /= index
                display(anumber,dis * divideBy, index)
            }
            else{
                i2 = 0
                while (Number.isInteger(i / index) == false){
                    i--
                    i2++
                }
                var mult = i2 * divideBy
                i /= index
                display(anumber * mult, i * divideBy, index)
            }
        }
        display(anumber * divideBy, i * divideBy, index)
    }
}
function display(anumber ,frontnumber, index){
    var docpart = document.getElementById("box")
    var box = docpart.textContent;
    var newtext = box.replace(/\d+\w+\d+|\w+\d+|\d+\.*/g, "")
    docpart.innerHTML = newtext.replace(" perfect square does not need to be simplfied", "")
    if (frontnumber == null) {
        docpart.append(anumber + " perfect square does not need to be simplfied")
    }
    else{
        docpart.append(frontnumber + index + "rt" + anumber)
    }
}