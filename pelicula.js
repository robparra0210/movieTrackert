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


	}


var interstellar = new Pelicula(
	{	id: 'tt0841669',		//se deben pasar objetos para qie la destructurasion funciones 
		titulo: 'interstellar',
		director: 'Christopher Nolan ',
		estreno: 2014,
		pais:['EE.UU','U.K','canada'],
		generos:['adventure', 'Drama', 'Sci-Fi'],
		clasificacion:'PG-13'
	})