function convierte(valor1,valor2,valor3){
    let num1 = Math.round(valor1 * 255 / 100);
    let num2 = Math.round(valor2 * 255 / 100);
    let num3 = Math.round(valor3 * 255 / 100);

    let hex1 = '0' + num1.toString(16);
    hex1 = hex1.slice(-2);
    let hex2 = '0' + num2.toString(16);
    hex2 = hex2.slice(-2);
    let hex3 = '0' + num3.toString(16);
    hex3 = hex3.slice(-2);

    contactform.todos.value= '#'+ hex1 + hex2 + hex3;
    contactform.colores.value= '#'+ hex1 + hex2 + hex3;
}
function aver(valor,obj){
    let num = Math.round(valor * 255 / 100);
    obj.value=num;
    convierte(contactform.rangor.value,contactform.rangog.value,contactform.rangob.value);                        
}
function trainspotting(valor){
    let hex1=valor.substr(1,2)
    let hex2=valor.substr(3,2)
    let hex3=valor.slice(-2);
    //alert(hex1+' '+hex2+' '+hex3);
    let num1=parseInt(hex1, 16);
    let num2=parseInt(hex2, 16);
    let num3=parseInt(hex3, 16);
    let num1_0_100=Math.round(num1*100/255,0);
    let num2_0_100=Math.round(num2*100/255,0);
    let num3_0_100=Math.round(num3*100/255,0);
    contactform.rangor.value=num1_0_100;
    contactform.rangog.value=num2_0_100;
    contactform.rangob.value=num3_0_100;
    contactform.values1.value=num1;
    contactform.values2.value=num2;
    contactform.values3.value=num3;
    //alert(num1+' '+num2+' '+num3);
}
