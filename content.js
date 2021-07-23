chrome.runtime.sendMessage({ todo: "showPageAction" });

function tocenter() {
    var para = document.body.getElementsByTagName("p");
    var list = document.body.getElementsByTagName("ul");
    var olo = document.body.getElementsByTagName("ol");
    var lis = document.body.getElementsByTagName("li");
    var sp = document.body.getElementsByTagName("span");
    var he1 = document.body.getElementsByTagName("h1");
    var he2 = document.body.getElementsByTagName("h2");
    var he3 = document.body.getElementsByTagName("h3");
    var he4 = document.body.getElementsByTagName("h4");
    var he5 = document.body.getElementsByTagName("h5");
    var he6 = document.body.getElementsByTagName("h6");
    all = [para, he1, he2, he3, he4, he5, he6, list, olo, lis, sp];
    for (i = 0; i < all.length; i++) {
        for (j = 0; j < all[i].length; j++) {
            all[i][j].style["text-align"] = 'center';
        }

    }

}
function toright() {
    var para = document.body.getElementsByTagName("p");
    var list = document.body.getElementsByTagName("ul");
    var olo = document.body.getElementsByTagName("ol");
    var lis = document.body.getElementsByTagName("li");
    var sp = document.body.getElementsByTagName("span");
    var he1 = document.body.getElementsByTagName("h1");
    var he2 = document.body.getElementsByTagName("h2");
    var he3 = document.body.getElementsByTagName("h3");
    var he4 = document.body.getElementsByTagName("h4");
    var he5 = document.body.getElementsByTagName("h5");
    var he6 = document.body.getElementsByTagName("h6");
    all = [para, sp, he1, he2, he3, he4, he5, he6, list, olo, lis];
    for (i = 0; i < all.length; i++) {
        for (j = 0; j < all[i].length; j++) {
            all[i][j].style["text-align"] = 'right';
        }

    }

}
function toleft() {
    var para = document.body.getElementsByTagName("p");
    var list = document.body.getElementsByTagName("ul");
    var olo = document.body.getElementsByTagName("ol");
    var lis = document.body.getElementsByTagName("li");
    var sp = document.body.getElementsByTagName("span");
    var he1 = document.body.getElementsByTagName("h1");
    var he2 = document.body.getElementsByTagName("h2");
    var he3 = document.body.getElementsByTagName("h3");
    var he4 = document.body.getElementsByTagName("h4");
    var he5 = document.body.getElementsByTagName("h5");
    var he6 = document.body.getElementsByTagName("h6");
    all = [para, he1, he2, sp, he3, he4, he5, he6, list, olo, lis];
    for (i = 0; i < all.length; i++) {
        for (j = 0; j < all[i].length; j++) {
            all[i][j].style["text-align"] = 'left';
        }

    }

}


function colourtext(a) {
    var para = document.body.getElementsByTagName("p");
    var list = document.body.getElementsByTagName("ul");
    var olo = document.body.getElementsByTagName("ol");
    var lis = document.body.getElementsByTagName("li");
    var sp = document.body.getElementsByTagName("span");
    all = [para, list, olo, lis, sp];
    for (i = 0; i < all.length; i++) {
        for (j = 0; j < all[i].length; j++) {
            all[i][j].style.color = a;
        }

    }

}
function colourtitle(a) {
    var he1 = document.body.getElementsByTagName("h1");
    var he2 = document.body.getElementsByTagName("h2");
    var he3 = document.body.getElementsByTagName("h3");
    var he4 = document.body.getElementsByTagName("h4");
    var he5 = document.body.getElementsByTagName("h5");
    var he6 = document.body.getElementsByTagName("h6");
    all = [he1, he2, he3, he4, he5, he6];
    for (i = 0; i < all.length; i++) {
        for (j = 0; j < all[i].length; j++) {
            all[i][j].style.color = a;
        }

    }

}
function colourbg(a) {
    document.body.style.backgroundColor = a;

}
var filter = true;
function monochrome() {
    if (filter === true) {
        document.body.style.filter = null;
        filter = false
    } else {
        document.body.style.filter = "grayscale(100%)";
        filter = true
    }

}
function invert() {
    if (filter === true) {
        document.body.style.filter = null;
        filter = false
    } else {
        document.body.style.filter = "invert(100%)";
        filter = true
    }

}
function highcontrast() {
    if (filter === true) {
        document.body.style.filter = null;
        filter = false
    } else {
        document.body.style.filter = "contrast(1.75)";
        filter = true
    }
}
function lowcontrast() {
    if (filter === true) {
        document.body.style.filter = null;
        filter = false
    } else {
        document.body.style.filter = "contrast(50%)";
        filter = true
        console.log("Yes working")
    }
}
function toleft() {
    var para = document.body.getElementsByTagName("p");
    var list = document.body.getElementsByTagName("ul");
    var olo = document.body.getElementsByTagName("ol");
    var lis = document.body.getElementsByTagName("li");
    var he1 = document.body.getElementsByTagName("h1");
    var he2 = document.body.getElementsByTagName("h2");
    var he3 = document.body.getElementsByTagName("h3");
    var he4 = document.body.getElementsByTagName("h4");
    var he5 = document.body.getElementsByTagName("h5");
    var he6 = document.body.getElementsByTagName("h6");
    all = [para, he1, he2, he3, he4, he5, he6, list, olo, lis];
    for (i = 0; i < all.length; i++) {
        for (j = 0; j < all[i].length; j++) {
            all[i][j].style["text-align"] = 'left';
        }

    }
}
function textToAudio() {
    alert('Text to speech is now starting')
    var msg = document.body.textContent;
    console.log(msg);
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";

    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "alignmentcenter") {
        // var addColor = '#' + request.clickedColor;
        tocenter();
    }
    if (request.todo == "alignmentleft") {
        toleft();
    }
    if (request.todo == "alignmentright") {
        toright();
    }
    if (request.todo == "monochrome") {
        // var addColor = '#' + request.clickedColor;
        monochrome();
    }
    if (request.todo == "highcontrast") {
        highcontrast();
    }
    if (request.todo == "lowcontrast") {
        lowcontrast();
    }
    if (request.todo == "invert") {
        invert();
    }
    if (request.todo == "colortext-red") {
        colourtext('red');
    }
    if (request.todo == "colortext-yellow") {
        colourtext('yellow');
    }
    if (request.todo == "colortext-white") {
        colourtext('white');
    }
    if (request.todo == "colortext-blue") {
        colourtext('blue');
    }
    if (request.todo == "colortext-green") {
        colourtext('green');
    }
    if (request.todo == "colortext-teal") {
        colourtext('teal');
    }
    if (request.todo == "colortext-black") {
        colourtext('black');
    }

    if (request.todo == "colortitle-red") {
        colourtitle('red');
    }
    if (request.todo == "colortitle-yellow") {
        colourtitle('yellow');
    }
    if (request.todo == "colortitle-white") {
        colourtitle('white');
    }
    if (request.todo == "colortitle-blue") {
        colourtitle('blue');
    }
    if (request.todo == "colortitle-green") {
        colourtitle('green');
    }
    if (request.todo == "colortitle-teal") {
        colourtitle('teal');
    }
    if (request.todo == "colortitle-black") {
        colourtitle('black');
    }


    if (request.todo == "colorbg-red") {
        colourbg('red');
    }
    if (request.todo == "colorbg-yellow") {
        colourbg('yellow');
    }
    if (request.todo == "colorbg-white") {
        colourbg('white');
    }
    if (request.todo == "colorbg-blue") {
        colourbg('blue');
    }
    if (request.todo == "colorbg-green") {
        colourbg('green');
    }
    if (request.todo == "colorbg-teal") {
        colourbg('teal');
    }
    if (request.todo == "colorbg-black") {
        colourbg('black');
    }
});
