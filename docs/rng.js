var fighters = 12, p1, p2, color1, color2, r = document.querySelector(':root');

$( document ).ready(function() {
$("button").click(function () {
    let r1 = Math.floor(Math.random() * fighters) + 1, r2 = Math.floor(Math.random() * fighters) + 1;

    switch (r1) {
        case 1:
            p1 = "primeape";
            color1 = "#FFEADC";
            break;
        case 2:
            p1 = "heracross";
            color1 = "#4B78B1";
            break;
        case 3:
            p1 = "blaziken";
            color1 = "#FF4445";
            break;
        case 4:
            p1 = "toxicroak";
            color1 = "#807c93";
            break;
        case 5:
            p1 = "mienshao";
            color1 = "#a588b5";
            break;
        case 6:
            p1 = "chesnaught";
            color1 = "#81cba6";
            break;
        case 7:
            p1 = "bewear";
            color1 = "#fdaec9";
            break;
        case 8:
            p1 = "falinks";
            color1 = "#e4ca5e";
            break;
        case 9:
            p1 = "great tusk";
            color1 = "#8ABADBff";
            break;
        case 10:
            p1 = "galarian zapdos";
            color1 = "#ff6153";
            break;
        case 11:
            p1 = "poliwrath";
            color1 = "#393351";
            break;
        case 12:
            p1 = "scrafty";
            color1 = "#d07048";
    }

    switch (r2) {
        case 1:
            p2 = "primeape";
            color2 = "#FFEADC";
            break;
        case 2:
            p2 = "heracross";
            color2 = "#4B78B1";
            break;
        case 3:
            p2 = "blaziken";
            color2 = "#FF4445";
            break;
        case 4:
            p2 = "toxicroak";
            color2 = "#807c93";
            break;
        case 5:
            p2 = "mienshao";
            color2 = "#a588b5";
            break;
        case 6:
            p2 = "chesnaught";
            color2 = "#81cba6";
            break;
        case 7:
            p2 = "bewear";
            color2 = "#fdaec9";
            break;
        case 8:
            p2 = "falinks";
            color2 = "#e4ca5e";
            break;
        case 9:
            p2 = "great tusk";
            color2 = "#8ABADB";
            break;
        case 10:
            p2 = "galarian zapdos";
            color2 = "#ff6153";
            break;
        case 11:
            p2 = "poliwrath";
            color2 = "#393351";
            break;
        case 12:
            p2 = "scrafty";
            color2 = "#d07048";
    }
    display(p1, p2);

    console.log(p1, p2)

    const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('p1', p1);
        urlParams.set('p2', p2);
        history.pushState(null, '', '?' + urlParams.toString());

        console.log(p1, p2)
    
});
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
    r.style.setProperty('--play1', color1);
    r.style.setProperty('--play2', color2);
}
