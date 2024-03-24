/* CJAM - CURSO DE JAVASCRIPT ANDRÉ MAURÍCIO */

/* abrir este arquivo no editor preferido de vocês:*/


/*
Inicie o seu serviço do nodeJs no prompt de comando do windows para fazer os exercícios abaixo.
*/

/*
01 - Exiba a string 'Grandes poderes trazem grandes responsabilidades.' no console.

Utilize os espaços entre os comentários abaixo para executar os códigos dos exercícios.
*/

const frase = "Grandes poderes trazem grandes responsabilidades."
console.log(frase)

/*
02 - Comente o console.log acima, e:

- Armazene a palavra 'Tom' em uma constante "tom";
- Armazene a palavra 'Hanks' em uma constante "firstTom";
- Armazene a palavra 'Cruise' em uma constante "secondTom";
- Declare uma constante "myFavoriteTom" que recebe nome, espaço, e sobrenome do Tom que você mais gosta;
- Exiba a "myFavoriteTom" no console.
*/



const tom = 'Tom'
const firstTom = 'Hanks'
const secondTom = 'Cruise'

const myFavoriteTom = tom + " " + secondTom
console.log(myFavoriteTom)





/*
03 - Comente o console.log acima, e:

- Armazene a palavra 'JavaScript' em uma constante "programmingLanguage";
- Armazene a junção das letras "J" e "S", da programmingLanguage, em uma constante "js";
- As letras não devem ser digitadas manualmente;
- Exiba a "js" no console;

*/
const programmingLanguage = 'JavaScript'
const js = programmingLanguage.slice(0,1) + programmingLanguage.slice(4,5)
console.log(js)


/*
04 - Comente o console.log acima, e,

- Armazene, em uma constante "mdn", a junção das letras iniciais das 3 palavras que a constante "mozilla" que foi declarada abaixo, armazena;
- As iniciais não devem ser digitadas manualmente;
- Exiba a "mdn" no console;
*/

const mozilla = 'Mozilla Developer Network'
const mdn = mozilla.slice(0,1) + mozilla.slice(8,9) + mozilla.slice(18,19)
console.log(mdn) 


/*
05 - Comente o console.log acima, e,

- Exiba no console a quantidade de caracteres que a constante "programmingLanguage" possui;
*/

const caracteres = programmingLanguage.length
console.log(caracteres)


/*
06 - Comente o console.log acima, e,

- Exiba no console a última letra da string que a "randomWord" (abaixo) armazena, mas com a condição a seguir;
- Ao invés de inserir manualmente a posição do último caractere, faça com que a obtenção da última letra funcione para qualquer palavra que a "randomWord" receber;
- Dica: utilize a propriedade ".length".
*/

const pinga = 'arapongas'
console.log(pinga[pinga.length -1])



/*
07 - Comente o console.log acima, e,

- Exiba, no console, a string que "summerMessage" (abaixo) armazena, mas com todas as letras minúsculas;
- Não modifique a string da "summerMessage";
- Não digite a nova string manualmente.
*/

const summerMessage = 'O VERÃO CHEGA NESTE FIM DE SEMANA'
console.log(summerMessage.toLowerCase())


/*
08 - Comente o console.log acima, e,

- Exiba, no console, a string que "winterMessage" (abaixo) armazena, mas com todas as letras maiúsculas;
- Não modifique a string da "winterMessage";
- Não digite a nova string manualmente.
*/

const winterMessage = 'o inverno está chegando'
console.log(winterMessage.toUpperCase())

/*
09 - Comente o console.log acima, e,

- Exiba, no console, o index do caractere "v" da "winterMessage";
*/
console.log(winterMessage.indexOf("v"))

