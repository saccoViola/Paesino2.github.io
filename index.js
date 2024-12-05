document.addEventListener('DOMContentLoaded', () => {
    class Persona{
        constructor(nome, cognome, annoDiNascita, luogoDiNascita, residenza){
            this.nome = nome;
            this.cognome = cognome; 
            this.annoDiNascita = annoDiNascita;
            this.luogoDiNascita = luogoDiNascita;
            this.residenza = residenza;
        }
        get etaPersona(){
            let data = new Date;
            let anno = data.getFullYear();
            return anno - this.annoDiNascita;
        }
        saluta(){
            return `Ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.etaPersona} anni. Sono nat* a ${this.luogoDiNascita}.`;
        }
        compra(){

        }
    }

    class Edificio{
        constructor(paese, via, numeroCivico, proprietario){
            this.paese = paese;
            this.via = via; 
            this.numeroCivico = numeroCivico;
            this.proprietario = proprietario;
        }
    }

    class Casa extends Edificio{
        constructor(paese, via, numeroCivico, proprietario,numeroAbitanti){
            super(paese, via, numeroCivico, proprietario)
            this.numeroAbitanti = numeroAbitanti;
        }
    }

    class Negozio extends Edificio{
        constructor(paese, via, numeroCivico, proprietario, tipoAttività){
            super(paese, via, numeroCivico, proprietario)
            this.tipoAttività = tipoAttività;
        }
        vendi(){

        }
    }

    const persona1 = new Persona("Roberto","Rossi", 1987, "Frugiate", "via dei matti n 0, Frugiate");
    const casa1 = new Casa("Frugiate", "via dei Matti", 0, persona1, 3);
    const negozio1 = new Negozio("Frugiate", "via della gentilezza", 5, persona1, "negozio di gomitoli");

    console.log(persona1.saluta());
    console.log(casa1);
    console.log(negozio1);

    let form = document.getElementById("form-container");
    let nomePersona = document.getElementById("input-nome");
    let cognomePersona = document.getElementById("input-cognome");
    let annoPersona = document.getElementById("input-anno"); 
    let luogoPersona = document.getElementById("input-luogo");
    let residenzaPersona = document.getElementById("input-residenza");
    // let button = document.getElementById("button-submit");
    let personeVarie = document.getElementById("persone-varie");
    let persone = [];



    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nomeInput = nomePersona.value.trim();
        const cognomeInput = cognomePersona.value.trim();
        const annoInput = parseInt(annoPersona.value, 10);
        const luogoInput = luogoPersona.value.trim();
        const residenzaInput = residenzaPersona.value.trim(); 

        const persona = new Persona(
            nomeInput,
            cognomeInput,
            annoInput,
            luogoInput,
            residenzaInput
        );

        persone.push(persona);

        createPerson();
        getBlank()

    })

    function createPerson() {
        personeVarie.innerHTML = "";
        
        persone.forEach((persona) => {
            let lista = document.createElement("li");
            lista.className ="lista";
            lista.textContent = persona.saluta();
            personeVarie.appendChild(lista);
        });  
    }  

    function getBlank() {
        nomePersona.value = "";
        cognomePersona.value = "";
        annoPersona.value = "";
        luogoPersona.value = "";
        residenzaPersona.value = "";
    }

    //per creare una persona: 
    //crea un element li di ul in cui appaia new Persona(nomePersona,cognomePersona, annoPersona, luogoPersona, residenzaPersona)
    //questo elemento deve essere poi pushato nell'array persone

    //Fai due nuove persone nella città, una che fa il Pecoraro, ha le pecore, e fabbrica lana.
    //Un altro che ha un negozio di maglioni

    class Artigiano extends Persona {
        constructor(nome, cognome, annoDiNascita, luogoDiNascita, residenza, quantitàMateriaPrima, materiaPrima ){
            super(nome, cognome, annoDiNascita, luogoDiNascita, residenza)
            this.quantitàMateriaPrima = quantitàMateriaPrima;
            this.materiaPrima = materiaPrima;
        }
     
    }

    const artigiano1 = new Artigiano("Franco", "Verdi", "1965", "Bergamo","via della gentilezza, 20, Frugiate", 2, "pecore");

    console.log(artigiano1);

    

});