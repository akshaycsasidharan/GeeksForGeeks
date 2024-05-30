function insertelement(){

    let arr=[10,20,30,50,60];
    let index =3;
    let element = 40;

    arr.splice(index , 0 ,element);

    console.log(arr);

}

insertelement();