
function Proyecto(name,lider,prueba,tester,fecha){
    this.name = name;
    this.lider = lider;
    this.prueba = prueba;
    this.tester = tester;
    this.fecha = fecha;
    }
    
    // Obtener inputs del HTML
    const inputProject = document.getElementById("txtNombre-project");
    const inputLider = document.getElementById("txtlider-project");
    const inputPrueba = document.getElementById("txtdescripcion");
    const inputTester = document.getElementById("txt-tester");
    const inputFecha = document.getElementById("txt-fecha");


    // Obtener estudiantes guardados o inicializar arreglo vacío
    let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
   
   
    // Registrar nuevo estudiante
    function register(){

    if(inputProject.value === ""){
    alert("Ingresa nombre  del proyecto");
    return;
    }

    let newProyecto = new Proyecto(inputProject.value, inputLider.value, inputPrueba.value, inputTester.value,inputFecha.value);

    proyectos.push(newProyecto);
    localStorage.setItem("proyectos", JSON.stringify(proyectos));
    window.location.href = "list-datos-projects.html";

    /*displayProjects();*/

    /*inputProject.value = "";
    inputLider.value = "";
    inputPrueba.value = "";
    inputTester.value = "";
    inputFecha.value = "";*/

    }


    // Mostrar estudiantes en pantalla
    function displayProjects(){

    const list = document.getElementById("lista-proyectos");
    list.innerHTML = "";

    proyectos.forEach((proyecto, index) => {
    let proyectoElement = `
    <tr>
        <td>${proyecto.name}</td>
        <td>${proyecto.lider}</td>  
        <td>${proyecto.prueba}</td>
        <td>${proyecto.tester}</td>
        <td>${proyecto.fecha}</td>
        <td><button class="btn btn-danger" onclick="deleteStudent(${index})">Eliminar</button></td>
    
    </tr>
    `;
    list.innerHTML += proyectoElement;
    });
    }



    // Eliminar un estudiante
    function deleteStudent(index){
    proyectos.splice(index, 1);
    localStorage.setItem("proyectos", JSON.stringify(proyectos));
    displayProjects();
    }



    // Borrar todos los datos del ls
    function clearStorage(){
    localStorage.removeItem("proyectos");
    proyectos = [];
    displayProjects();
    }



    // Mostrar estudiantes
    document.addEventListener("DOMContentLoaded", displayProjects);