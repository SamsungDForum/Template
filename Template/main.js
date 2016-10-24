var element = ''; // contents element
var focusIdx = ''; //index of key, mouse focus
var contentsURL = 'https://www.samsungdforum.com/Preview/'; // contents url
var result = ''; // for print log

// when body onload is called
function main() {
    log('[TemplateApplication] onload');

    document.addEventListener('visibilitychange', function() {
        if(document.hidden){
            log('hidden');
        }
        else {
            log('visible');
        }
    });

    moveFocus(1);
}

// when key is clicked
function handleKeydown(event) {
    console.log('[TemplateApplication] handleKeydown : ' + event.keyCode);

    switch(event.keyCode) {
        case 37:
            if(focusIdx === 'noButton') {
                moveFocus('yesButton');
            }
        break;
        case 38:
            if(focusIdx === 2) {
                moveFocus(1);
            }
            else if(focusIdx === 3) {
                moveFocus(2);
            }
            else if(focusIdx === 4) {
                moveFocus(3);
            }
            else if(focusIdx === 5) {
                moveFocus(4);
            }
            else if(focusIdx === 6) {
                moveFocus(5);
            }
        break;
        case 39:
            if(focusIdx === 'yesButton') {
                moveFocus('noButton');
            }
        break;
        case 40:
            if(focusIdx === 1) {
                moveFocus(2);
            }
            else if(focusIdx === 2) {
                moveFocus(3);
            }
            else if(focusIdx === 3) {
                moveFocus(4);
            }
            else if(focusIdx === 4) {
                moveFocus(5);
            }
            else if(focusIdx === 5) {
                moveFocus(6);
            }
        break;
        case 13:
            if(focusIdx === 1) {
                function1();
            }
            else if(focusIdx === 2) {
                function2();
            }
            else if(focusIdx === 3) {
                function3();
            }
            else if(focusIdx === 4) {
                function4();
            }
            else if(focusIdx === 5) {
                function5();
            }
            else if(focusIdx === 6) {
                clearLog();
            }
            else if(focusIdx === 'yesButton') {
                clickYes();
            }
            else if(focusIdx === 'noButton') {
                clickNo();
            }
        break;
        case 10009:
            clickReturn();
        break;
        default:
        break;
    }
}

// for moving focus as focus index
function moveFocus(idx) {
    focusIdx = idx;

    if(focusIdx === 1) {
        document.getElementById('button1').style.backgroundColor = '#99ff99';
        document.getElementById('button2').style.backgroundColor = '#ffffff';
        document.getElementById('button3').style.backgroundColor = '#ffffff';
        document.getElementById('button4').style.backgroundColor = '#ffffff';
        document.getElementById('button5').style.backgroundColor = '#ffffff';
        document.getElementById('button6').style.backgroundColor = '#ffffff';
    }
    else if(focusIdx === 2) {
        document.getElementById('button1').style.backgroundColor = '#ffffff';
        document.getElementById('button2').style.backgroundColor = '#99ff99';
        document.getElementById('button3').style.backgroundColor = '#ffffff';
        document.getElementById('button4').style.backgroundColor = '#ffffff';
        document.getElementById('button5').style.backgroundColor = '#ffffff';
        document.getElementById('button6').style.backgroundColor = '#ffffff';
    }
    else if(focusIdx === 3) {
        document.getElementById('button1').style.backgroundColor = '#ffffff';
        document.getElementById('button2').style.backgroundColor = '#ffffff';
        document.getElementById('button3').style.backgroundColor = '#99ff99';
        document.getElementById('button4').style.backgroundColor = '#ffffff';
        document.getElementById('button5').style.backgroundColor = '#ffffff';
        document.getElementById('button6').style.backgroundColor = '#ffffff';
    }
    else if(focusIdx === 4) {
        document.getElementById('button1').style.backgroundColor = '#ffffff';
        document.getElementById('button2').style.backgroundColor = '#ffffff';
        document.getElementById('button3').style.backgroundColor = '#ffffff';
        document.getElementById('button4').style.backgroundColor = '#99ff99';
        document.getElementById('button5').style.backgroundColor = '#ffffff';
        document.getElementById('button6').style.backgroundColor = '#ffffff';
    }
    else if(focusIdx === 5) {
        document.getElementById('button1').style.backgroundColor = '#ffffff';
        document.getElementById('button2').style.backgroundColor = '#ffffff';
        document.getElementById('button3').style.backgroundColor = '#ffffff';
        document.getElementById('button4').style.backgroundColor = '#ffffff';
        document.getElementById('button5').style.backgroundColor = '#99ff99';
        document.getElementById('button6').style.backgroundColor = '#ffffff';
    }
    else if(focusIdx === 6) {
        document.getElementById('button1').style.backgroundColor = '#ffffff';
        document.getElementById('button2').style.backgroundColor = '#ffffff';
        document.getElementById('button3').style.backgroundColor = '#ffffff';
        document.getElementById('button4').style.backgroundColor = '#ffffff';
        document.getElementById('button5').style.backgroundColor = '#ffffff';
        document.getElementById('button6').style.backgroundColor = '#99ff99';
    }
    else if(focusIdx === 'yesButton') {
        document.getElementById('button1').style.backgroundColor = '#ffffff';
        document.getElementById('button2').style.backgroundColor = '#ffffff';
        document.getElementById('button3').style.backgroundColor = '#ffffff';
        document.getElementById('button4').style.backgroundColor = '#ffffff';
        document.getElementById('button5').style.backgroundColor = '#ffffff';
        document.getElementById('button6').style.backgroundColor = '#ffffff';
        document.getElementById('yesButton').style.backgroundColor = '#99ff99';
        document.getElementById('noButton').style.backgroundColor = '#ffffff';
    }
    else if(focusIdx === 'noButton') {
        document.getElementById('button1').style.backgroundColor = '#ffffff';
        document.getElementById('button2').style.backgroundColor = '#ffffff'; 
        document.getElementById('button3').style.backgroundColor = '#ffffff';
        document.getElementById('button4').style.backgroundColor = '#ffffff';
        document.getElementById('button5').style.backgroundColor = '#ffffff';
        document.getElementById('button6').style.backgroundColor = '#ffffff';
        document.getElementById('yesButton').style.backgroundColor = '#ffffff';
        document.getElementById('noButton').style.backgroundColor = '#99ff99';
    }
}

// when return is clicked
function clickReturn() {
    if(element) {
        document.getElementsByTagName('body')[0].removeChild(element);
        element = '';

        moveFocus(1);
    } else {
        displayExitPopup();
    }
}

// description of function1
function function1() {
    log('Call function1');

    play(1);
}

// description of function2
function function2() {
    log('Call function2');

    play(2);
}

// description of function1
function function3() {
    log('Call function1');

    paint(3);
}

// description of function2
function function4() {
    log('Call function2');

    paint(4);
}

// description of function3
function function5() {
    log('Call function3');

    paint(5);
}

// for playing video contents
function play(value) {
    log('Call play : ' + value);

    if(!element) {
        element = document.createElement('div');
        element.className = 'dim';
        document.getElementsByTagName('body')[0].appendChild(element);

        var videoElement = document.createElement('video');
        videoElement.className = 'video';
        videoElement.src = contentsURL + value + '.mp4';
        videoElement.style.display = 'none';
        element.appendChild(videoElement);

        var loadingIconElement = document.createElement('div');
        loadingIconElement.className = 'loadingIcon';
        element.appendChild(loadingIconElement);

        videoElement.addEventListener('timeupdate', function () {
            console.log(videoElement.currentTime);
            if(0 < videoElement.currentTime && element.childNodes[1]) {
                videoElement.style.display = 'block';
                element.removeChild(loadingIconElement);
            }
        });
        videoElement.play();
    }
}

// for painting image contents
function paint(value) {
    log('Call paint : ' + value);

    if(!element) {
        element = document.createElement('div');
        element.className = 'dim';
        document.getElementsByTagName('body')[0].appendChild(element);

        var imgElement = document.createElement('img');
        imgElement.className = 'img';
        imgElement.src = contentsURL + value + '.jpg';
        element.appendChild(imgElement);
    }
}

// display exit popup
function displayExitPopup() {
    log('Call displayExitPopup');

    if(!element) {
        element = document.createElement('div');
        element.className = 'dim';
        document.getElementsByTagName('body')[0].appendChild(element);

        var exitPopupElement = document.createElement('div');
        exitPopupElement.className = 'exitPopup';
        exitPopupElement.innerHTML = 'Do you want to exit?';

        var yesButtonElement = document.createElement('input');
        yesButtonElement.type = 'button';
        yesButtonElement.id = 'yesButton';
        yesButtonElement.value = 'Yes';
        yesButtonElement.addEventListener('mouseover', function() {
            moveFocus('yesButton');
        });
        yesButtonElement.addEventListener('click', function() {
            clickYes();
        });

        var NoButtonElement = document.createElement('input');
        NoButtonElement.type = 'button';
        NoButtonElement.id = 'noButton';
        NoButtonElement.value = 'No';
        NoButtonElement.addEventListener('mouseover', function() {
            moveFocus('noButton');
        });
        NoButtonElement.addEventListener('click', function() {
            clickNo();
        });

        exitPopupElement.appendChild(yesButtonElement);
        exitPopupElement.appendChild(NoButtonElement);
        element.appendChild(exitPopupElement);
        
        moveFocus('yesButton');
    }
}

// when yes is clicked on exit popup
function clickYes() {
    tizen.application.getCurrentApplication().exit();
}

// when no is clicked on exit popup
function clickNo() {
    clickReturn();
}

// for printing log
function log(string) {
    result = result +' <br> ' + string;
    document.getElementById('result').innerHTML = result;
}

//for clearing log
function clearLog() {
    result = '';
    document.getElementById('result').innerHTML = '';
}
