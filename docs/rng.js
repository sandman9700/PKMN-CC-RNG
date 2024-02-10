var fighters = 12, p1, p2;

$("button").click(function () {
    let r1 = Math.floor(Math.random() * fighters) + 1, r2 = Math.floor(Math.random() * fighters) + 1;

    switch (r1) {
        case 1:
            p1 = "primeape"
            break;
        case 2:
            p1 = "heracross";
            break;
        case 3:
            p1 = "blaziken";
            break;
        case 4:
            p1 = "toxicroak";
            break;
        case 5:
            p1 = "mienshao";
            break;
        case 6:
            p1 = "chesnaught";
            break;
        case 7:
            p1 = "bewear";
            break;
        case 8:
            p1 = "falinks";
            break;
        case 9:
            p1 = "great tusk";
            break;
        case 10:
            p1 = "galarian zapdos";
            break;
        case 11:
            p1 = "poliwrath";
            break;
        case 12:
            p1 = "scrafty";
    }

    switch (r2) {
        case 1:
            p2 = "primeape"
            break;
        case 2:
            p2 = "heracross";
            break;
        case 3:
            p2 = "blaziken";
            break;
        case 4:
            p2 = "toxicroak";
            break;
        case 5:
            p2 = "mienshao";
            break;
        case 6:
            p2 = "chesnaught";
            break;
        case 7:
            p2 = "bewear";
            break;
        case 8:
            p2 = "falinks";
            break;
        case 9:
            p2 = "great tusk";
            break;
        case 10:
            p2 = "galarian zapdos";
            break;
        case 11:
            p2 = "poliwrath";
            break;
        case 12:
            p2 = "scrafty";
    }
    display(p1, p2);

    console.log(p1, p2)
});

function display(p1, p2) {
    let img1 = "";
    let img2 = "";
    let names = "";
    img1 += "<img src=\"Assets/" + p1 + ".png\" alt=\"" + p1 + "\">"
    img2 += "<img src=\"Assets/" + p2 + ".png\" alt=\"" + p2 + "\">"
    names += "<h3 class=\"vs\">" + p1 + " vs. " + p2 + "</h3>"
    document.getElementById("p1").innerHTML = img1;
    document.getElementById("p2").innerHTML = img2;
    document.getElementById("names").innerHTML = names;
}
