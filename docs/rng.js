var fighters = 19, p1, p2, color1, color2, r = document.querySelector(':root');

$(document).ready(function () {
    // Get the search parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);

    const p1FromURL = urlParams.get('p1');
    const p2FromURL = urlParams.get('p2');

    p1 = p1FromURL || "passimian";
    p2 = p2FromURL || "kommo-o";
    console.log(p1, p2);
    console.log(color1, color2)
    display(p1, p2);

    $("button").click(function () {
        r1 = Math.floor(Math.random() * fighters) + 1, r2 = Math.floor(Math.random() * fighters) + 1;

        switch (r1) {
            case 1:
                p1 = "primeape";
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
                p1 = "great_tusk";
                break;
            case 10:
                p1 = "galarian_zapdos";
                break;
            case 11:
                p1 = "poliwrath";
                break;
            case 12:
                p1 = "scrafty";
                break;
            case 13:
                p1 = "medicham";
                break;
            case 14:
                p1 = "breloom";
                break;
            case 15:
                p1 = "tyrogue";
                break;
            case 16:
                p1 = "slither_wing";
                break;
            case 17:
               p1 = "mega_lopunny";
                break;
            case 18:
               p1 = "kommo-o";
                break;
            case 19:
               p1 = "passimian";
                break;
        }

        switch (r2) {
            case 1:
                p2 = "primeape";
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
                p2 = "great_tusk";
                break;
            case 10:
                p2 = "galarian_zapdos";
                break;
            case 11:
                p2 = "poliwrath";
                break;
            case 12:
                p2 = "scrafty";
                break;
            case 13:
                p2 = "medicham";
                break;
            case 14:
                p2 = "breloom";
                break;
            case 15:
                p2 = "tyrogue";
                break;
            case 16:
                p2 = "slither_wing";
                break;
            case 17:
                p2 = "mega_lopunny";
                break;
            case 18:
               p2 = "kommo-o";
                break;
            case 19:
               p2 = "passimian";
                break;
        }
        display(p1, p2);


        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('p1', encodeURIComponent(p1));
        urlParams.set('p2', encodeURIComponent(p2));
        history.pushState(null, '', '?' + urlParams.toString());

        console.log(p1, p2)

    });
});

function display(p1, p2) {
    switch (p1) {
        case "primeape":
            color1 = "#8d6457";
            break;
        case "heracross":
            color1 = "#4B78B1";
            break; 
        case "blaziken":
            color1 = "#FF4445";
            break; 
        case "toxicroak":
            color1 = "#807c93";
            break;
        case "mienshao":
            color1 = "#a588b5";
            break; 
        case "chesnaught":
            color1 = "#81cba6";
            break; 
        case "bewear":
            color1 = "#fdaec9";
            break;
        case "falinks":
            color1 = "#e4ca5e";
            break;
        case "great_tusk":
            color1 = "#8abadb";
            break;
        case "galarian_zapdos":
            color1 = "#ff6153";
            break; 
        case "poliwrath":
            color1 = "#393351";
            break;
        case "scrafty":
            color1 = "#d07048";
            break;
        case "medicham":
            color1 = "#fd809f";
            break;
        case "breloom":
            color1 = "#5abd87";
            break;
        case "tyrogue":
            color1 = "#c8a8b8";
            break;
        case "slither_wing":
            color1 = "#fff9be";
            break;
        case "mega_lopunny":
            color1 = "#a56b63";
            break;
        case "kommo-o":
            color1 = "#f9db73";
            break;
        case "passimian":
            color1 = "#d6de73";
            break;
        }

    switch (p2) {
        case "primeape":
            color2 = "#8d6457";
            break;
        case "heracross":
            color2 = "#4B78B1";
            break; 
        case "blaziken":
            color2 = "#FF4445";
            break; 
        case "toxicroak":
            color2 = "#807c93";
            break;
        case "mienshao":
            color2 = "#a588b5";
            break; 
        case "chesnaught":
            color2 = "#81cba6";
            break; 
        case "bewear":
            color2 = "#fdaec9";
            break;
        case "falinks":
            color2 = "#e4ca5e";
            break;
        case "great_tusk":
            color2 = "#8abadb";
            break;
        case "galarian_zapdos":
            color2 = "#ff6153";
            break; 
        case "poliwrath":
            color2 = "#393351";
            break;
        case "scrafty":
            color2 = "#d07048";
            break;
        case "medicham":
            color2 = "#fd809f";
            break;
        case "breloom":
            color2 = "#5abd87";
            break;
        case "tyrogue":
            color2 = "#c8a8b8";
            break;
        case "slither_wing":
            color2 = "#fff9be";
            break;
        case "mega_lopunny":
            color2 = "#a56b63";
            break;
        case "kommo-o":
            color2 = "#f9db73";
            break;
        case "passimian":
            color2 = "#d6de73";
            break;
        }
        console.log(color1, color2)
    let img1 = "";
    let img2 = "";
    let names = "";
    img1 += "<img src=\"Assets/" + p1 + ".png\" alt=\"" + p1 + "\">"
    img2 += "<img src=\"Assets/" + p2 + ".png\" alt=\"" + p2 + "\">"
    names += "<h3 class=\"vs\">" + p1.replace("_", " ") + " vs. " + p2.replace("_", " ") + "</h3>"
    document.getElementById("p1").innerHTML = img1;
    document.getElementById("p2").innerHTML = img2;
    document.getElementById("names").innerHTML = names;
    r.style.setProperty('--play1', color1);
    r.style.setProperty('--play2', color2);
}
