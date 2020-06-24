/*<p>La clase recibira un objeto al momento de instanciarse con los siguientes datos: id de la pelicula en IMDB, titulo, 
	director, ano de estreo, pais o paises de origen, generos y calificacion en IMDB</p>
	<ul>*/


class Pelicula { 
	constructor({ id, titulo, director, estreno, pais, generos, calificacion}){ //lo corchetes son para generar una destructuracion del obeto
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
		this.validarGeneros(generos)
		this.validarCalificacion(calificacion)
		//this.fichaTecnica(id, titulo, director, estreno, pais, generos, calificacion)
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

	static get listaGeneros(){
		return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime',' Documentary',
			'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game Show', 'History', 'Horror', 'Musical', 'Music',
			'Mystery','News', 'Reality', 'Romance', 'Sci-Fi' ,'Short', 'Sport', 'Talk-Show', 'Thriller',
			'War', 'Western']
	}

	static generosAceptados(){
		return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(', ')} `)
	}



	validarGeneros(generos){

	if (!(Array.isArray(generos))) {
		return console.error('Los generos deben ser ingresados en forma de array')
		}
	for(let genero of generos ){  
		if (!Pelicula.listaGeneros.includes(genero)){
			console.error(`Genero incorrecto ${generos.join(', ')}` );
			Pelicula.listaGeneros()
		    }
	    }
	}

	validarCalificacion(calificacion){
		let decimal = /^\d*\.?\d$/;
		if (!(typeof (calificacion) == 'number')) {
			return console.error(`El valor ${calificacion} no corresponte a un numero`);
		}else if (!(decimal.test(calificacion))) {
			return console.error('solo se admite un valor decimal')
		} else if(!(calificacion >= 0 && calificacion<=10)){
			return console.error('solo se adminten valores de entre 0 a diez')
		}

	}	

	fichaTecnica(){
		console.info(` FICHA TECNICA \n titulo: ${this.titulo}\n id: ${this.id}\n director: ${this.titulo}\n estreno: ${this.estreno}\n pais: ${this.pais.join(', ')}\n generos: ${this.generos.join(', ')}\n calificaion: ${this.calificacion}	`)

	}


}
  
/*const  interstellar = new Pelicula(
	{	id: 'tt0841669',		//se deben pasar objetos para qie la destructurasion funciones 
		titulo: 'interstellar',
		director: 'Christopher Nolan ',
		estreno: 2014,
		pais:['EE.UU','U.K','canada'],
		generos:['Adventure', 'Drama', 'Sci-Fi'],
		calificacion: 10
	})*/

const peli = [
			{id: 'tt0841669',		//se deben pasar objetos para qie la destructurasion funciones 
			titulo: 'interstellar',
			director: 'Christopher Nolan ',
			estreno: 2014,
			pais: ['EE.UU', 'U.K', 'canada'],
			generos: ['Adventure', 'Drama', 'Sci-Fi'],
			calificacion: 8.4}, 

		    {id:'tt1091722',
			 titulo: 'Adventureland',
			 director:'Greg Mottola',
			 estreno:2009,
			 pais:['usa'],
			 generos: ['Comedy', 'Drama', 'Romance' ],
			 calificacion: 6.8 
			},

			{id: 'tt4158110',
			 titulo:'Mr.Robot',
			 director:'Sam Esmail',
			 estreno:2015,
			 pais: ['EE.UU',' U.K'],
			 generos: ['Crime', 'Drama', 'Thriller' ],
			 calificacion: 8.5
			}
		]

   peli.forEach(Peli => { new Pelicula(Peli).fichaTecnica() });