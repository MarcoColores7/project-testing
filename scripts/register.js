
function Proyecto(name,lider,prueba,tester,fecha){
this.name = name;
this.lider = lider;
this.prueba = prueba;
this.tester = tester;
this.fecha = fecha;
}


//Get the input field
const inputProject = document.getElementById("txtNombre-project");
const inputLider = document.getElementById("txtlider-project");
const inputPrueba = document.getElementById("txtdescripcion");
const inputTester = document.getElementById("txt-tester");
const inputFecha = document.getElementById("txt-fecha");


function register(){
let newProyecto = new Proyecto(inputProject.value,inputLider.value,inputPrueba.value,inputTester.value,inputFecha.value);
/*console.log(inputProject.value,inputLider.value,inputPrueba.value);*/
if(inputProject.value === "" ){
    alert("El campo nombre del proyecto es obligatorio");
    return;
}else{
    
    display(newProyecto);
   /* alert("Proyecto registrado con éxito");*/
}

}



/*<p>${Proyecto.name} -${Proyecto.lider} - ${Proyecto.prueba}</p>*/	
function display(Proyecto){
    const list = document.getElementById("list");
    p=`
    <div>
<p>${Proyecto.name} -${Proyecto.lider} - ${Proyecto.prueba} -${Proyecto.tester} -${Proyecto.fecha} </p>    </div
    `;
    list.innerHTML+=p;

}

/*let proyecto = new Proyecto("Proyecto1","Lider1","Prueba1");
let proyecto2 = new Proyecto("Proyecto2","Lider2","Prueba2");
console.log(proyecto,proyecto2);*/