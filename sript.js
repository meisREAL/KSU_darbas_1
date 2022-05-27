// 1. paspaudziamas mygtukas pritaikyt
// 2. nuskaitomas pasirinkta spalva inpute
// 3. pasiziuryma kam taikyti spalva (header ar footer)
// 4. pasirinktam elementui pritaikoma pasirinkta spalva

function chooseColor() {
    let color = document.querySelector('#colorPicker').value;
    let radioHead = document.querySelector('#head').checked;
    let radioFoot = document.querySelector('#foot').checked;
    if (radioHead == true) {
        document.querySelector('header').style.backgroundColor = color;
    } else if (radioFoot == true) {
        document.querySelector('footer').style.backgroundColor = color;
    } else {
        return
    }
}
const applyColor = document.querySelector('#applyColor');
applyColor.addEventListener('click', chooseColor);

//-------------------------------------------------------------------------------------------
// norima nuotrauka paimama is html doko su onclick
// centrine nuotrauka prilyginama bigPic kintamajam
// nuotrauku saltiniai yra sukeiciami
function changePic(img) {
    let bigPic = document.querySelector('#bigPic')
    bigPic.src = img.src;
}

//--------------------------------------------------------------------------------------------

function selectPicture(img) {
    if (img.style.border == '') {
        img.style.border = '5px solid gold';
    } else {
        img.style.border = '';
    }
}

function changePictureParameters() {
    let newHeight = Number(document.querySelector('#newHeight').value);
    let newWidth = Number(document.querySelector('#newWidth').value);
    let images = document.querySelectorAll('.smallPic');

    for (i = 0; i < images.length; i++) {
        if (images[i].style.border == '5px solid gold') {
            images[i].style.height = newHeight + 'px';
            images[i].style.width = newWidth + 'px';
        }
    }

}

//-----------------------------------------------------------------------------------------------

function showDescription() {
    let showDescriptionCheck = document.querySelector('#showDescriptionCheck').checked;
    // if (showDescriptionCheck == true) {
    //     document.querySelector('.second').classList.add('block');
    // }

    let descriptions = document.querySelectorAll('.second')
    for (i = 0; i < descriptions.length; i++) {
        if (showDescriptionCheck == true) {
            descriptions[i].classList.add('block')
        } else if (showDescriptionCheck == false) {
            descriptions[i].classList.remove('block');
        }
    }
}

