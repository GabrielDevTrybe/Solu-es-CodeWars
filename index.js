/*
Trolls estão atacando sua seção de comentários!

Uma forma comum de lidar com essa situação é retirar todas as vogais dos comentários dos trolls, neutralizando a ameaça.

Sua tarefa é escrever uma função que recebe uma string e retorna uma nova string com todas as vogais removidas.

Por exemplo, a string "Este site é para perdedores LOL!" se tornaria "Ths wbst s fr lsrs LL!".

Nota: para este kata y não é considerado uma vogal.
*/

function disemvowel(str) {
  const regex = /[aeiouAEIOU]/gi;
  return str.replace(regex, '');
}

console.log(disemvowel('This website is for losers LOL!'));

/*
Entrada => string
Saida => uma string sem as vogais
*/