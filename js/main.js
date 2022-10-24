let departamentos = new Array();
let casas = new Array ();
let numRegistroCasa = 0 ;
let numRegistroDepartamentos = 0;


function extraccionDatosCasa(){
    let frm = document.forms.formularioRegristoCasa;
    let municipio =frm.municipio;
    let codigoPostal = frm.codigoPostal;
    let cantidadRecamaras = frm.cantidadBaños;
    let calle = frm.calle;
    let dimensiones = frm.dimensiones;
    let antiguedad = frm.antiguedad;
    let cantidadBaños = frm.cantidadBaños;
    let numeroContacto = frm.numeroContacto;
    let precio = frm.precio;
    let descripcionGeneral= frm.descripcionGeneral;

    alert ("municipio:"+municipio.value+'\n'+ "codigo postal:"+codigoPostal.value+'\n'+"cantida de recamaras:"+cantidadRecamaras.value+'\n'
    +"calle:"+calle.value+'\n'+"dimensiones:"+dimensiones.value+'\n'+"antiguedad:"+antiguedad.value+'\n'+"cantidad de baños:"+cantidadBaños.value+'\n'
    +"numero de contacto:"+numeroContacto.value+'\n'+"precio:"+precio.value+'\n'+"decripcion genereal:"+descripcionGeneral.value)
}
function extraccionDatosDepartamentos(){
    let frm = document.forms.formularioRegistroDepartamento;
    let municipio = frm.municipio;
    let codigoPostal = frm.codigoPostal;
    let amueblado = frm.amueblado;
    let calle = frm.calle;
    let dimensiones = frm.dimensiones;
    let internet = frm.internet;
    let clima = frm.clima;
    let numeroContacto = frm.numeroContacto;
    let precio = frm.precio;
    let descripcionGeneral = frm.descripcionGeneral;

    let depa = "municipio:"+municipio.value+'\n'+"codigo postal:"+codigoPostal.value+'\n'+"amueblado:"+amueblado.value+'\n'
    +"calle:"+calle.value+'\n'+"dimensiones:"+dimensiones.value+'\n'+"internet:"+internet.value+'\n'+"clima:"+clima.value+'\n'
    +"numero de contacto:"+numeroContacto.value+'\n'+"precio:"+precio.value+'\n'+"descripcion general:"+descripcionGeneral.value;
    
    departamentos.push(depa);
    console.log(departamentos);

    alert("municipio:"+municipio.value+'\n'+"codigo postal:"+codigoPostal.value+'\n'+"amueblado:"+amueblado.value+'\n'
    +"calle:"+calle.value+'\n'+"dimensiones:"+dimensiones.value+'\n'+"internet:"+internet.value+'\n'+"clima:"+clima.value+'\n'
    +"numero de contacto:"+numeroContacto.value+'\n'+"precio:"+precio.value+'\n'+"descripcion general:"+descripcionGeneral.value)
  
}
 function extraccionDatosUsuario(){
    let frm =document.forms.formularioRegistroUsuario;
    let nombre =frm.nombre;
    let apellido = frm.apellidos;
    let curp = frm.curp;
    let correoElectronico = frm.correoElectronico;
    let edad = frm.edad;
    let sexo = frm.sexo;
    

    alert("nombre"+nombre.value+'\n'+"apellidos:"+apellido.value+'\n'+"curp:"+curp.value+'\n'+
    "correo electronico:"+correoElectronico.value+'\n'+"edad:"+edad.value+'\n'+"sexo:"+sexo.value)

}
function mostrardepartamentos(){
    let resultado = ""
    for (let i = 0; i < departamentos.length; i++) {
        resultado += departamentos[i]+"<br>";
    }
    document.getElementById("todosdepartamentos").innerHTML= resultado;
    console.log(departamentos);

}
