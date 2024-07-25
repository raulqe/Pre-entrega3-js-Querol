class GameApp {
    start() {
        document.getElementById("playerDataForm").addEventListener("submit", (function(event) {
            event.preventDefault();  // Evitar que el formulario se envíe
            // Crear el objeto personaje
            let personaje = {
                nombre: document.getElementById("name").value,
                sexo: document.querySelector('input[name="sex"]:checked').value,
                profesion: document.getElementById("profession").value
            };
            
            console.log(personaje);  // Imprime el objeto personaje en la consola
            this.storePersonaje(personaje);
            this.showPersonaje(personaje);
        }).bind(this));
    }

    helpTextProfesion(){
        document.getElementById("name").addEventListener("change",(function(event){
            
            this.helpMesage();     
        }).bind(this));
    }
   
    storePersonaje(personaje) {
        // Convertir el objeto personaje a una cadena JSON
        let personajeJSON = JSON.stringify(personaje);
        // Guardar el objeto personaje en localStorage
        localStorage.setItem("personaje", personajeJSON);
    }
    
    getPersonaje() {
        // Obtener el objeto personaje desde localStorage
        let personajeJSON = localStorage.getItem("personaje");
        // Convertir la cadena JSON a un objeto y retornarlo
        return personajeJSON ? JSON.parse(personajeJSON) : null;
    }
    
    showPersonaje(personaje) {
        document.getElementById("dialogoBienvenido").style.display = "none";
        document.getElementById("selectProfesion").style.display="none";
        document.getElementById("dialogoBienvenidoPersonaje").style.display = "inline-block";
        document.getElementById("namePersonaje").textContent = personaje.nombre;
        document.getElementById("profesionPersonaje").textContent= personaje.profesion;
    }
    helpMesage(){
 
        document.getElementById("dialogoBienvenido").style.display="none";
        document.getElementById("selectProfesion").style.display="inline-block";
    }
   

}

let app = new GameApp();
app.helpTextProfesion()
app.start();
