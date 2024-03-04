function WatchFace(x){
    var FaceType = x;
    var timer = document.getElementById("timer");
    timer.className = FaceType;
    console.log(x);
    switch (FaceType) {
        case "D":
            hide("F", "A");
            break;
        case "F":
            hide("D", "A");
            break;
        case "A":
            hide("F", "D");
            break;
    }
    var cls = document.getElementsByClassName(x);
    for (let index = 0; index < cls.length; index++) {
        cls[index].style.display = "inline-block";   
    }
}
function hide(class1, class2){
    var h1 = document.getElementsByClassName(class1);
    var h2 = document.getElementsByClassName(class2);
    for (let index = 0; index < h1.length; index++) {
        h1[index].style.display = "none";
    }
    for (let index = 0; index < h2.length; index++) {
        h2[index].style.display = "none";
    }
}
setTimeout(() => {
    document.getElementById("penaintro").style.display = "none";
    document.getElementById("timer").style.display = "initial";
    WatchFace("D");
    document.getElementById("timer").className = "intro1 D";
}, 7900);