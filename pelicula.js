/*<p>La clase recibira un objeto al momento de instanciarse con los siguientes datos: id de la pelicula en IMDB, titulo, 
	director, ano de estreo, pais o paises de origen, generos y calificacion en IMDB</p>
	<ul>*/


class Pelicula { 
	constructor({id, titulo, director, estreno, pais, generos, calificacion}){ //lo corchetes son para generar una destructuracion del obeto
		this.id = id;  //interstellar: tt0816692 		arrival: tt2543164  mr: robot 
		this.titulo= titulo;
		this.director=director; 
		this.estreno=estreno; 
		this.pais=pais;
		this.generos= generos; 
		this.calificacion =calificacion;
		
		this.validarId(id)
		this.validarTituloYDirector(titulo,director)
		this.validarAnoDeEstreno(estreno)
		this.validarPais(pais)
	}


	validarCadenaTexto(texto){
		if(typeof(texto)=='string'){
			return
		}else{
			return console.error(`${texto} no corresponde a una cadena de texto por favor verifique el campo`)
		}

	}

	validarId(id){
		this.validarCadenaTexto(id)
		if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){  /*no le coloco un else porque en la validacion interesa mas el caso incorrecto para
													devolver a pantalla */
				return console.error(`IMDB ID ${id} no es valido debe de contener 9 caracteres donde los dos primeros sean letras y
				otros 7 numeros`)
				}
		}
	
	validarTituloYDirector(titulo,director){
		this.validarCadenaTexto(titulo)
		this.validarCadenaTexto(director)
		titulo.length>=100?titulo=titulo.slice(0,100)+'...':titulo =titulo
		director.length>=50?director=director.slice(0,50)+'...':director =director
		this.titulo = titulo
		this.director =director
		return 
		}
	
	validarAnoDeEstreno(estreno){
		if(!(typeof(estreno)=='number')){
		return console.error(`El valor ${estreno} no corresponte a un numero`);
		 } else if (!(Number.isInteger(estreno))){
		   return console.error(`El valor ${estreno} no es entero`);
			 } else if (!(/^[0-9]{0,3}\d$/.test(estreno))){
				return console.error(`el ${estreno} anio  no es valido mayor a 4 digitos`);
			}	
    	}
	
	validarPais(pais){
		if(!( Array.isArray(pais))){
			return console.error('Los paises deben ser ingresados en forma de array')
	    	}else for( let i in pais ){
		    	this.validarCadenaTexto(pais[i])
		     }
		}

	validarGenero(generos){
		if (!(Array.isArray(generos))) {
			return console.error('Los generos deben ser ingresados en forma de array')
		}



	}

  /*Action, Adult, adventura,animation, biograpgy, comedy, crime, documentary,
 	drama, family, fantasy, film noir, game show, history, horror, musical, music,
  	mystery, news, reality, romance, sci-fi. short, sport, talk-show, thriller,
   	war, western*/

var interstellar = new Pelicula(
	{	id: 'tt0841669',		//se deben pasar objetos para qie la destructurasion funciones 
		titulo: 'interstellar',
		director: 'Christopher Nolan ',
		estreno: 2014,
		pais:['EE.UU','U.K','canada'],
		generos:['adventure', 'Drama', 'Sci-Fi'],
		calificacion:8.6
	})


	