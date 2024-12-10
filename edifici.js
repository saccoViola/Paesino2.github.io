document.addEventListener('DOMContentLoaded', () => {
 
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

    
    //per creare una persona: 
    //crea un element li di ul in cui appaia new Persona(nomePersona,cognomePersona, annoPersona, luogoPersona, residenzaPersona)
    //questo elemento deve essere poi pushato nell'array persone

    //Fai due nuove persone nella città, una che fa il Pecoraro, ha le pecore, e fabbrica lana.
    //Un altro che ha un negozio di maglioni

    
});