
// solução 1
function verificaPalindromo(string) {
    if (!string) return "string inexistente";

    if (string.split("").reverse().join("") === string) {
        return "É palíndromo";
    }
    return "Não é palíndromo";

}

let palavra = "ana";

console.log(palavra + ": " + verificaPalindromo(palavra));

// solução 2 - verifica tbm uma frase

function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    let correcao = string.split(" ").join("");
    for (let i = 0; i < correcao.length / 2; i++) {
        if (correcao[i] === correcao[correcao.length - 1 - i]) {

            return "É palíndromo"
        }
    }
    return "Não é palíndromo";
}

let palavra2 = "roma me tem amor";

console.log(palavra2 + ": " + verificaPalindromo2(palavra2));

