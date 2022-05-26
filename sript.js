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

// 1. doubleclick ant nuotraukos
// 2. parenkamas paspaustas paveikslelis
// 3. parinktas paveikslelis rodomas centriniame lange 750x375

