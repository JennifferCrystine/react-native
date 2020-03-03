function calculaMedia(media) {
	if(media >= 6) {
		console.log("passou");
	} else {
		console.log("não passou");
	}
}

const calculaMediaAF = (media) => {
	if(media >= 6) {
		console.log("passou");
	} else if(media < 6){
		console.log("reprovou");
	} else {
		console.log("erro");
	}
}

var media = 7; //escopo dinamico
let media_let = 5; //escopo léxico
const media_const = 6; //constante

//calculaMedia(7);
//calculaMediaAF(media_const);

//console.log("A média normal é "+media+", a média com let é "+media_let+" e a media com const é "+media_const);

//console.log(`A média normal é ${media}, a media com let é ${media_let}`);

// const funcao_rest = (...args) => {
// 	console.log(args);
// } //rest operator

// funcao_rest(1, 2, 3, "qualquer outra coisa");

// const func_com_map = (... args) => {
// 	args.map(function(elem, index){
// 		console.log(`Esse é o ${elem}, na posição ${index}`)
// 	})
// }

// func_com_map(1, 2, 3);


// //classes

// const produto = new Produto("jenniffer");
// produto.escreveNome();
// Produto.imprimeCodigo();


// fetch("http://api-tweets-neymar.herokuapp.com/tweets#index")
// .then(json => json.json())
// .then(resp => {
// 	lista = resp;
// 	console.warn(lista);
// });

fetch("http://api-tweets-neymar.herokuapp.com/tweets#index")
.then(json => json.json())
.then(resp => console.warn(resp))
.catch(e => console.warn(e));



 // async function teste() {}

const get_tweets = async () => {
 	try{
 		const json = await fetch("http://api-tweets-neymar.herokuapp.com/tweets#index");
	 	const resp = await json.json();
	 	console.log(json);
	 	console.log(resp);
	} catch(e) {
	 	console.warn(e);
	}
}

get_tweets();

