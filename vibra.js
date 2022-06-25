function detectarDispositivo() {

    const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
    let queDispositivo = toMatch.some((toMatchItem) => { return navigator.userAgent.match(toMatchItem);});

    if (queDispositivo == true) {
        document.getElementById("aviso-compatibilidad").style="visibility: hidden;";
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

        case '2':
        console.log(2);
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
    }
}

vib()