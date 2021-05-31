$(function () {
    $(".menu-behavior").on('click', function () {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                window.location.hash = hash;
            });
        }
    });
});



$('.center-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});



let song = document.querySelector("#song");
let icon = document.querySelector("#icon-song");

icon.onclick = function () {
    if (song.paused) {
        song.play();
        icon.src = "icon/pause-button.svg";
        song2.pause()
        icon2.src = "icon/play-button.svg";
        song3.pause()
        icon3.src = "icon/play-button.svg";
        song4.pause()
        icon4.src = "icon/play-button.svg";
        song5.pause()
        icon5.src = "icon/play-button.svg";
        song6.pause()
        icon6.src = "icon/play-button.svg";
        song7.pause()
        icon7.src = "icon/play-button.svg";
        song8.pause()
        icon8.src = "icon/play-button.svg";
        song9.pause()
        icon9.src = "icon/play-button.svg";
        song10.pause()
        icon10.src = "icon/play-button.svg";
    } else {
        song.pause();
        icon.src = "icon/play-button.svg";
    }
}

let song2 = document.querySelector("#song2");
let icon2 = document.querySelector("#icon-song2");

icon2.onclick = function () {
    if (song2.paused) {
        song2.play();
        icon2.src = "icon/pause-button.svg";
        song.pause()
        icon.src = "icon/play-button.svg";
        song3.pause()
        icon3.src = "icon/play-button.svg";
        song4.pause()
        icon4.src = "icon/play-button.svg";
        song5.pause()
        icon5.src = "icon/play-button.svg";
        song6.pause()
        icon6.src = "icon/play-button.svg";
        song7.pause()
        icon7.src = "icon/play-button.svg";
        song8.pause()
        icon8.src = "icon/play-button.svg";
        song9.pause()
        icon9.src = "icon/play-button.svg";
        song10.pause()
        icon10.src = "icon/play-button.svg";
    } else {
        song2.pause();
        icon2.src = "icon/play-button.svg";
    }
}

let song3 = document.querySelector("#song3");
let icon3 = document.querySelector("#icon-song3");

icon3.onclick = function () {
    if (song3.paused) {
        song3.play();
        icon3.src = "icon/pause-button.svg";
        song.pause()
        icon.src = "icon/play-button.svg";
        song2.pause();
        icon2.src = "icon/play-button.svg";
        song4.pause()
        icon4.src = "icon/play-button.svg";
        song5.pause()
        icon5.src = "icon/play-button.svg";
        song6.pause()
        icon6.src = "icon/play-button.svg";
        song7.pause()
        icon7.src = "icon/play-button.svg";
        song8.pause()
        icon8.src = "icon/play-button.svg";
        song9.pause()
        icon9.src = "icon/play-button.svg";
        song10.pause()
        icon10.src = "icon/play-button.svg";
    } else {
        song3.pause();
        icon3.src = "icon/play-button.svg";
    }
}

let song4 = document.querySelector("#song4");
let icon4 = document.querySelector("#icon-song4");

icon4.onclick = function () {
    if (song4.paused) {
        song4.play();
        icon4.src = "icon/pause-button.svg";
        song.pause()
        icon.src = "icon/play-button.svg";
        song2.pause();
        icon2.src = "icon/play-button.svg";
        song3.pause()
        icon3.src = "icon/play-button.svg";
        song5.pause()
        icon5.src = "icon/play-button.svg";
        song6.pause()
        icon6.src = "icon/play-button.svg";
        song7.pause()
        icon7.src = "icon/play-button.svg";
        song8.pause()
        icon8.src = "icon/play-button.svg";
        song9.pause()
        icon9.src = "icon/play-button.svg";
        song10.pause()
        icon10.src = "icon/play-button.svg";
    } else {
        song4.pause();
        icon4.src = "icon/play-button.svg";
    }
}

let song5 = document.querySelector("#song5");
let icon5 = document.querySelector("#icon-song5");

icon5.onclick = function () {
    if (song5.paused) {
        song5.play();
        icon5.src = "icon/pause-button.svg";
        song.pause()
        icon.src = "icon/play-button.svg";
        song2.pause();
        icon2.src = "icon/play-button.svg";
        song3.pause()
        icon3.src = "icon/play-button.svg";
        song4.pause()
        icon4.src = "icon/play-button.svg";
        song6.pause()
        icon6.src = "icon/play-button.svg";
        song7.pause()
        icon7.src = "icon/play-button.svg";
        song8.pause()
        icon8.src = "icon/play-button.svg";
        song9.pause()
        icon9.src = "icon/play-button.svg";
        song10.pause()
        icon10.src = "icon/play-button.svg";
    } else {
        song5.pause();
        icon5.src = "icon/play-button.svg";
    }
}

let song6 = document.querySelector("#song6");
let icon6 = document.querySelector("#icon-song6");

icon6.onclick = function () {
    if (song6.paused) {
        song6.play();
        icon6.src = "icon/pause-button.svg";
        song.pause()
        icon.src = "icon/play-button.svg";
        song2.pause();
        icon2.src = "icon/play-button.svg";
        song3.pause()
        icon3.src = "icon/play-button.svg";
        song4.pause()
        icon4.src = "icon/play-button.svg";
        song5.pause()
        icon5.src = "icon/play-button.svg";
        song7.pause()
        icon7.src = "icon/play-button.svg";
        song8.pause()
        icon8.src = "icon/play-button.svg";
        song9.pause()
        icon9.src = "icon/play-button.svg";
        song10.pause()
        icon10.src = "icon/play-button.svg";
    } else {
        song6.pause();
        icon6.src = "icon/play-button.svg";
    }
}


let song7 = document.querySelector("#song7");
let icon7 = document.querySelector("#icon-song7");

icon7.onclick = function () {
    if (song7.paused) {
        song7.play();
        icon7.src = "icon/pause-button.svg";
        song.pause()
        icon.src = "icon/play-button.svg";
        song2.pause();
        icon2.src = "icon/play-button.svg";
        song3.pause()
        icon3.src = "icon/play-button.svg";
        song4.pause()
        icon4.src = "icon/play-button.svg";
        song5.pause()
        icon5.src = "icon/play-button.svg";
        song6.pause()
        icon6.src = "icon/play-button.svg";
        song8.pause()
        icon8.src = "icon/play-button.svg";
        song9.pause()
        icon9.src = "icon/play-button.svg";
        song10.pause()
        icon10.src = "icon/play-button.svg";
    } else {
        song7.pause();
        icon7.src = "icon/play-button.svg";
    }
}

let song8 = document.querySelector("#song8");
let icon8 = document.querySelector("#icon-song8");

icon8.onclick = function () {
    if (song8.paused) {
        song8.play();
        icon8.src = "icon/pause-button.svg";
        song.pause()
        icon.src = "icon/play-button.svg";
        song2.pause();
        icon2.src = "icon/play-button.svg";
        song3.pause()
        icon3.src = "icon/play-button.svg";
        song4.pause()
        icon4.src = "icon/play-button.svg";
        song5.pause()
        icon5.src = "icon/play-button.svg";
        song6.pause()
        icon6.src = "icon/play-button.svg";
        song7.pause()
        icon7.src = "icon/play-button.svg";
        song9.pause()
        icon9.src = "icon/play-button.svg";
        song10.pause()
        icon10.src = "icon/play-button.svg";
    } else {
        song8.pause();
        icon8.src = "icon/play-button.svg";
    }
}

let song9 = document.querySelector("#song9");
let icon9 = document.querySelector("#icon-song9");

icon9.onclick = function () {
    if (song9.paused) {
        song9.play();
        icon9.src = "icon/pause-button.svg";
        song.pause()
        icon.src = "icon/play-button.svg";
        song2.pause();
        icon2.src = "icon/play-button.svg";
        song3.pause()
        icon3.src = "icon/play-button.svg";
        song4.pause()
        icon4.src = "icon/play-button.svg";
        song5.pause()
        icon5.src = "icon/play-button.svg";
        song6.pause()
        icon6.src = "icon/play-button.svg";
        song7.pause()
        icon7.src = "icon/play-button.svg";
        song8.pause()
        icon8.src = "icon/play-button.svg";
        song10.pause()
        icon10.src = "icon/play-button.svg";
    } else {
        song9.pause();
        icon9.src = "icon/play-button.svg";
    }
}

let song10 = document.querySelector("#song10");
let icon10 = document.querySelector("#icon-song10");

icon10.onclick = function () {
    if (song10.paused) {
        song10.play();
        icon10.src = "icon/pause-button.svg";
        song.pause()
        icon.src = "icon/play-button.svg";
        song2.pause();
        icon2.src = "icon/play-button.svg";
        song3.pause()
        icon3.src = "icon/play-button.svg";
        song4.pause()
        icon4.src = "icon/play-button.svg";
        song5.pause()
        icon5.src = "icon/play-button.svg";
        song6.pause()
        icon6.src = "icon/play-button.svg";
        song7.pause()
        icon7.src = "icon/play-button.svg";
        song8.pause()
        icon8.src = "icon/play-button.svg";
        song9.pause()
        icon9.src = "icon/play-button.svg";
    } else {
        song10.pause();
        icon10.src = "icon/play-button.svg";
    }
};






(function () {

    let hamburger = {
        nav: document.querySelector('#nav'),
        navToggle: document.querySelector('.nav-toggle'),

        initialize() {
            this.navToggle.addEventListener('click', () => { this.toggle(); });
        },

        toggle() {
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        },
    };

    hamburger.initialize();

}());




$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }

    ]
});






var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];


// When the user clicks the button, open the modal 
btn1.onclick = function () {
    modal1.style.display = "block";
}
btn2.onclick = function () {
    modal2.style.display = "block";
}
btn3.onclick = function () {
    modal3.style.display = "block";
}
btn4.onclick = function () {
    modal4.style.display = "block";
}
btn5.onclick = function () {
    modal5.style.display = "block";
}
btn6.onclick = function () {
    modal6.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    modal1.style.display = "none";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
span3.onclick = function () {
    modal3.style.display = "none";
}
span4.onclick = function () {
    modal4.style.display = "none";
}
span5.onclick = function () {
    modal5.style.display = "none";
}
span6.onclick = function () {
    modal6.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
}









var hiddenTarget = 'hidden'
var target = 'target'
var sourceTarget = 'source'

var targetIdToShow = 1

function main() {
    var targets = getElements(target)
    var sources = getElements(sourceTarget)
    sources.forEach(function (sourceNode) {
        var sourceNodeId = extractId(sourceNode, sourceTarget)
        sourceNode.addEventListener('click', function () {
            showTarget(targets, sourceNodeId)
        })
    })
    showTarget(targets, targetIdToShow)
}

function getElements(type) {
    return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
        var target1Num = extractId(targetNode1, target)
        var target2Num = extractId(targetNode2, target)
        return target1Num > target2Num
    })
}

function extractId(targetNode, baseClass) {
    var currentClassIndex = targetNode.classList.length
    while (currentClassIndex--) {
        var currentClass = targetNode.classList.item(currentClassIndex)
        var maybeIdNum = parseInt(currentClass.split('-')[1])
        if (isNaN(maybeIdNum)) {
            continue
        }
        var classStrinToValidate = baseClass + '-' + maybeIdNum
        if (classStrinToValidate === currentClass) {
            return maybeIdNum
        }
    }
}

function showTarget(targets, targetId) {
    targets.forEach(function (targetNode, targetIndex) {
        var currentTargetNodeId = extractId(targetNode, target)
        if (currentTargetNodeId === targetId) {
            targetNode.classList.remove(hiddenTarget)
        } else {
            targetNode.classList.add(hiddenTarget)
        }
    })
}

main()