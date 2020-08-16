function vib(param){
    console.log(param);
    switch (param)
    {
        case '1':
        console.log(1);
        window.navigator.vibrate([200, 100, 100,200,300,100,200,100,300,200,100,50,200,10,20,300,100,300,200]);
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