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
let banderin=1;
function Classalirse(){
    return;
    /*pendiente: quitar los a y agregar button para el efecto al salir*/
    //   setTimeout(() => {
    //     console.log("1 Segundo esperado")
    //   }, 10000);

      setInterval(() => {
        console.log("Ejecutar cada 10 seg");
        cambiaclase();
      }, 5000);      

    //   window.clearInterval()
}
var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
if(sPage == "index.html"){
    setInterval(() => {
        cambiaclase();
    }, 3000);      
}

function cambiaclase(){
    if(banderin==1){
        mueve.className="animate__animated animate__backInUp";
        console.log("animate__backInUp");
        banderin++;
    } else if(banderin==2){
        mueve.className="animate__animated animate__backInDown";
        console.log("animate__backInDown");
        banderin++;
    } else if(banderin==3){
        mueve.className="animate__animated animate__backInRight";
        console.log("animate__backInRight");
        banderin++;
    } else if(banderin==4){
        mueve.className="animate__animated animate__backInLeft";
        console.log("animate__backInLeft");
        banderin=1;
    }
}

function verificaObjeto (objeto){
	if(objeto.value==""){
		alert("Debe completar el campo "+ objeto.getAttribute("nombre") + ", es obligatorio!!!!");
		objeto.focus();
		return true;
	}
}

function tamano(campo){	
	if (campo.value.length > 249)
		return false;
	else
		return true;
}

function valida(){
    if(verificaObjeto(contactform.name)) return false;
    if(verificaObjeto(contactform.apellido)) return false;
    if(verificaObjeto(contactform._replyto)) return false;
    if(verificaObjeto(contactform.clave)) return false;
    if(verificaObjeto(contactform.reclave)) return false;
    if(contactform.clave.value!=contactform.reclave.value){
        alert("No coinciden las Claves!");
        contactform.clave.focus();
        return false;
    }
    if(verificaObjeto(contactform.interesmayor)) return false;
    if(verificaObjeto(contactform.message)) return false;
}


async function obtener(dia,cual){
    try{
        // const apiUrl = "https://api.nasa.gov/planetary/apod?date=2022-10-18&api_key=DEMO_KEY"
        const apiUrl = "https://api.nasa.gov/planetary/apod?date="+dia+"&api_key=DEMO_KEY"
        // alert(apiUrl);
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        // console.log(data.code);
        if(data.code== null){
            if(cual=='1'){
                document.getElementById("imagen1").src = data.url;
                document.getElementById("imagen1").className='vis1';
            }else{
                document.getElementById("imagen2").src = data["hdurl"];
                document.getElementById("imagen2").className='vis1';
            }
        }
        else{
            document.getElementById("errore").innerHTML ="La Nasa no nos deja ver tantas veces seguidas!";
        }
    }
    catch (error){console.log('Ocurrió un error grave:', error);}
}

function mostrame(){
    let valor=document.getElementById('fecha').value;
    if(valor=='')
        alert('Ingresá una fecha, daaalee!!!'); 
    else {
        obtener(valor,'2');
        console.log(valor);
    }

}
let hoy = fechahoy();

function dalavuelta(){
    var fecha='2022-12-06 02:55:00';
    var fecha='2022-12-06';
    console.log(fecha);
    var nueva=fecha.split(" ")[0].split("-").reverse().join("-");
    console.log(nueva);
}

function fechahoy(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if(month < 10){
        if(day<10){
            console.log(`${year}-0${month}-0${day}`);
                return (`${year}-0${month}-0${day}`);
        }else{
            console.log(`${year}-0${month}-${day}`);
                return (`${year}-0${month}-${day}`);
        }
    }else{
        if(day<10){
            console.log(`${year}-${month}-0${day}`);
                return (`${year}-${month}-0${day}`);
        }else{
            console.log(`${year}-${month}-${day}`);
                return (`${year}-${month}-${day}`);
        }
    }
}

if(sPage == "observatorios.html" || sPage == "expediciones.html" ){
    let aura=fechahoy();
    // alert(aura);
///////agregar    // obtener(aura,'1');
    console.log(aura);
}


// {"date":"2022-10-15","explanation":"Gamma-ray burst GRB 221009A likely signals the birth of a new black hole, formed at the core of a collapsing star long ago in the distant universe. The extremely powerful blast is depicted in this animated gif constructed using data from the Fermi Gamma Ray Space Telescope. Fermi captured the data at gamma-ray energies, detecting photons with over 100 million electron volts. In comparison visible light photons have energies of about 2 electron volts. A steady, high energy gamma-ray glow from the plane of our Milky Way galaxy runs diagonally through the 20 degree wide frame at the left, while the transient gamma-ray flash from GRB 221009A appears at center and then fades. One of the brightest gamma-ray bursts ever detected GRB 221009A is also close as far as gamma-ray bursts go, but still lies about 2 billion light-years away. In low Earth orbit Fermi\u2019s Large Area Telescope recorded gamma-ray photons from the burst for more than 10 hours as high-energy radiation from GRB 221009A swept over planet Earth last Sunday, October 9.","hdurl":"https://apod.nasa.gov/apod/image/2210/LAT_221009A_burst_opt_1080.gif","media_type":"image","service_version":"v1","title":"GRB 221009A","url":"https://apod.nasa.gov/apod/image/2210/LAT_221009A_burst_opt_1080.gif"}
