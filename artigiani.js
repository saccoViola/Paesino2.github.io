document.addEventListener('DOMContentLoaded', () => {
    class Persona{
    constructor(nome, cognome, annoDiNascita, luogoDiNascita, residenza, portafogli){
        this.nome = nome;
        this.cognome = cognome; 
        this.annoDiNascita = annoDiNascita;
        this.luogoDiNascita = luogoDiNascita;
        this.residenza = residenza;
        this.portafogli = portafogli;
    }
    get etaPersona(){
        let data = new Date;
        let anno = data.getFullYear();
        return anno - this.annoDiNascita;
    }
    saluta(){
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.etaPersona} anni. Sono nat* a ${this.luogoDiNascita}.`;
    }

    }

    class Pastore extends Persona {
        constructor(nome, cognome, annoDiNascita, luogoDiNascita, residenza, portafogli, quantitaPecore, quantitaLana, costoPecora, costoLana, costoTosaggio ){
            super(nome, cognome, annoDiNascita, luogoDiNascita, residenza, portafogli)
            this.quantitaPecore = quantitaPecore;
            this.quantitaLana = quantitaLana;
            this.costoPecora = costoPecora;
            this.costoLana = costoLana;
            this.costoTosaggio = costoTosaggio;
        } 
        compraPecore(lana){  
            let numeroPecoreAggiornato = this.quantitaPecore + lana; 
            let soldiAggiornati = this.portafogli - (this.costoPecora*lana); 

    //se la disponibilità economica è minore del prezzo d'acquisto
            if(this.portafogli < this.costoPecora){
                console.log(`Non hai abbastanza soldi per comprare una nuova pecora`);
                return;
            }

            this.quantitaPecore = numeroPecoreAggiornato; 
            this.portafogli = soldiAggiornati;
            console.log(`Ora hai ${this.quantitaPecore} pecore e ${this.portafogli} soldi nel portafogli`)
        }

        tosaPecore(pecoredaTosare){

            let soldiAggiornati = this.portafogli - (pecoredaTosare*this.costoTosaggio);
            let lanaOttenuta = pecoredaTosare*5 //1 pecora tosata da 5kg di lana 
            

            // if(pecoredaTosare > this.quantitaPecore){
            //     console.log(`Non hai abbastanza pecore! Compra una pecora`);
            //     return;
            // }

            this.portafogli = soldiAggiornati;
            this.quantitaLana +=  lanaOttenuta;
            
            console.log(`Ora hai ${this.quantitaLana} kg di lana e ${this.portafogli} soldi nel portafogli`)
        }

        vendiLana(lanaVenduta){
            let totaleAggiornataLana = this.quantitaLana - lanaVenduta;
            let soldiAggiornati = this.portafogli + (this.costoLana*lanaVenduta);

            if(totaleAggiornataLana < 0){
                console.log(`Non hai abbastanza lana per venderne!`);
                return;
            }

            this.quantitaLana = totaleAggiornataLana; 
            this.portafogli = soldiAggiornati;

            console.log(`Ora hai ${this.quantitaLana} kg di lana e ${this.portafogli} soldi nel portafogli`)
        }
    
    }

    class Magliaio extends Persona {
        constructor(nome, cognome, annoDiNascita, luogoDiNascita, residenza, portafogli,costoLana, quantitaLana, gomitoli, prezzoGomitoli, costoProduzione ){
            super(nome, cognome, annoDiNascita, luogoDiNascita, residenza, portafogli)
            this.quantitaLana = quantitaLana;
            this.costoLana = costoLana;
            this.gomitoli = gomitoli;
            this.prezzoGomitoli = prezzoGomitoli; 
            this.costoProduzione = costoProduzione;
        } 
        compraLana(lana){  
            let numeroLanaAggiornato = this.quantitaLana + lana; 
            let soldiAggiornati = this.portafogli - (this.costoLana*lana); 

    //se la disponibilità economica è minore del prezzo d'acquisto
            if(this.portafogli < this.costoLana){
                console.log(`Non hai abbastanza soldi per comprare la lana!`);
                return;
            }

            this.quantitaLana = numeroLanaAggiornato; 
            this.portafogli = soldiAggiornati;
            console.log(`Ora hai ${this.quantitaLana} kg di lana e ${this.portafogli} soldi nel portafogli`)
        }

        produciGomitoli(){

            let soldiAggiornati = this.portafogli - this.costoProduzione; //produco sempre 5 gomitoli
            

            if(this.portafogli < this.costoProduzione){
                console.log(`Non hai abbastanza lana! Compra della lana`);
                return;
            }
            if(this.quantitaLana <= 0){
                return;
            }

            this.portafogli = soldiAggiornati;
            this.gomitoli += 5;
            this.quantitaLana -= 1;

            
            console.log(`Ora hai ${this.gomitoli} gomitoli e ${this.portafogli} soldi nel portafogli`)
        }

        vendiGomitoli(gomitoliVenduti){
            let totaleAggiornatoGomitoli = this.gomitoli - gomitoliVenduti;
            let soldiAggiornati = this.portafogli + (this.prezzoGomitoli*gomitoliVenduti);

            if(totaleAggiornatoGomitoli < 0){
                console.log(`Non hai abbastanza gomitoli per venderne!`);
                return;
            }

            this.gomitoli = totaleAggiornatoGomitoli; 
            this.portafogli = soldiAggiornati;

            console.log(`Ora hai ${this.gomitoli} gomitoli e ${this.portafogli} soldi nel portafogli`)
        }
    
    }

    const pecoraro = new Pastore("Franco", "Verdi", "1965", "Bergamo","via della gentilezza, 20, Frugiate", 100, 2, 0, 15,5,2);

    const magliaio1 = new Magliaio("Carlo", "Rossi", "1976", "Oggiono", "via dei matti, 6, Frugiate", 100, 5, 0, 0, 3, 15);

    //prendo tag html riguardanti il pastore e li rendo interattivi

    let nomePastore = document.getElementById("input-nome-pastore");
    let cognomePastore = document.getElementById("input-cognome-pastore");
    let portafogliPastore = document.getElementById("input-portafogli-pastore");
    let numeroPecore = document.getElementById("input-pecore");
    let chiliLana = document.getElementById("input-lana"); 

    nomePastore.value = pecoraro.nome;
    cognomePastore.value = pecoraro.cognome;
    portafogliPastore.value = pecoraro.portafogli;
    numeroPecore.value = pecoraro.quantitaPecore;
    chiliLana.value = pecoraro.quantitaLana;

    //prendo bottoni azioni pastore 

    let btnCompraPecora = document.getElementById("btn-compra-pecora");
    let btnTosaPecora = document.getElementById("btn-tosa-pecora");
    let btnVendiLana = document.getElementById("btn-vendi-lana");

    // rendo interattivi i bottoni 

    btnCompraPecora.addEventListener("click", ()=> {
        pecoraro.compraPecore(1);
        numeroPecore.value = pecoraro.quantitaPecore;
        portafogliPastore.value = pecoraro.portafogli;
    
    })

    btnTosaPecora.addEventListener("click", ()=>{
        pecoraro.tosaPecore(1);
        chiliLana.value = pecoraro.quantitaLana;
        portafogliPastore.value = pecoraro.portafogli;
    })

    btnVendiLana.addEventListener("click", ()=>{
        pecoraro.vendiLana(1);
        chiliLana.value = pecoraro.quantitaLana;
        portafogliPastore.value = pecoraro.portafogli;
    })

 //prendo tag html riguardanti il magliaio 

    let nomeMagliaio = document.getElementById("input-nome-magliaio");
    let cognomeMagliaio = document.getElementById("input-cognome-magliaio");
    let portafogliMagliaio = document.getElementById("input-portafogli-magliaio");
    let lanaPerGomitoli= document.getElementById("input-lana-gomitoli");
    let numeroGomitoli= document.getElementById("input-numero-gomitoli");

//e li rendo interattivi

    nomeMagliaio.value = magliaio1.nome;
    cognomeMagliaio.value = magliaio1.cognome;
    portafogliMagliaio.value = magliaio1.portafogli;
    lanaPerGomitoli.value = magliaio1.quantitaLana;
    numeroGomitoli.value = magliaio1.gomitoli;

    //prendo bottoni azioni pastore 

    let btnCompraLana= document.getElementById("btn-compra-lana");
    let btnProduciGomitoli= document.getElementById("btn-produci-gomitoli");
    let btnVendiGomitoli= document.getElementById("btn-vendi-gomitoli");

    // rendo interattivi i bottoni 

    btnCompraLana.addEventListener("click", ()=>{
        magliaio1.compraLana(1);
        lanaPerGomitoli.value = magliaio1.quantitaLana;
        portafogliMagliaio.value = magliaio1.portafogli;
    })

    btnProduciGomitoli.addEventListener("click", ()=>{
        magliaio1.produciGomitoli(1);
        numeroGomitoli.value = magliaio1.gomitoli;
        lanaPerGomitoli.value = magliaio1.quantitaLana;
        portafogliMagliaio.value = magliaio1.portafogli;
    })

    btnVendiGomitoli.addEventListener("click", ()=>{
        magliaio1.vendiGomitoli(1);
        numeroGomitoli.value = magliaio1.gomitoli;
        portafogliMagliaio.value = magliaio1.portafogli;
    })

    formPastore.addEventListener("submit", (event) => {
        event.preventDefault();

        const nomeInput = nomePastore.value.trim();
        const cognomeInput = cognomePastore.value.trim();
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

    formMagliaio.addEventListener("submit", (event) => {
        event.preventDefault();

        const nomeInput = nomeMagliaio.value.trim();
        const cognomeInput = cognomeMagliaio.value.trim();
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
        nomePastore.value = "";
        cognomePastore.value = "";
        annoPersona.value = "";
        luogoPersona.value = "";
        residenzaPersona.value = "";
    }



});

