function detectarDispositivo() {

    const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
    let queDispositivo = toMatch.some((toMatchItem) => { return navigator.userAgent.match(toMatchItem);});

<<<<<<< HEAD
    if (queDispositivo == true) {
        document.getElementById("aviso-compatibilidad").style="visibility: hidden;";
=======
    if (queDispositivo === true) {
        document.getElementById("aviso-compatibilidad").style="visibility: visible;";
>>>>>>> 12bdfd3495aff3336b4241c21d1876ffafc6e980
        console.log("detectó que NO es mobile y muestra el aviso de compatibilidad");
      } // ELSE: no se necesitó la variable "si es PC", pero se puede perfeccionar el IF con otros casos

}detectarDispositivo();
 

function vib(param){
    console.log(param);
    switch (param)
    {
        case '1':
        console.log(1);
        window.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]);
        break;

        case '2':
        console.log(2);
        window.navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100]);
        break;

        case '3':
        console.log(3);
        break;

        case '4':
        console.log(4);
        break;

        case '5':
        console.log(5);
        break;
        
        case '6':
        console.log(6);
        break;

        default:
            console.log("default case");
    }
}

vib()