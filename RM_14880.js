function Criptografar(string, Hash) {
  const Data = Date.now() // Data Atual.
  let StringCript = string.split("") // String para array.
  for (let i = 0; i < StringCript.length; i++) { // Loop para o array.
    StringCript[i] = StringCript[i].charCodeAt(0) * Data // Transforma letra > ASCCI e multiplica pela data.
    StringCript[i] += Hash // Adicionando a Hash.
  }
  StringCript.push(Data) // Adicionando a data no ultimo elemento do array.

  let Resultado = "";

  for (let i = 0; i < StringCript.length; i++) { // Loop no array para transformar em string.
    Resultado += StringCript[i];
  }

  return Resultado;
}

function UnCript(Cripto, Hash) {
  String(Hash);

  const string = Cripto.split(Hash); // Uso a Hash para dividir a string para um array

  const d = string.pop(); // Remover o ultimo item do array

  for (let i = 0; i < string.length; i++) { // Loop para dividir cada elemento pela data e transformar de ASCCI
    string[i] = String.fromCharCode(parseInt(string[i]) / d);
  }

  let Resultado = "";

  for (let i = 0; i < string.length; i++) {
    Resultado += string[i];
  }

  return Resultado;
}

let Mensagem = "Teste123";

let MensagemCripto = Criptografar(Mensagem, "19481771572223223458568")

console.log(MensagemCripto);

console.log(UnCript(MensagemCripto, "19481771572223223458568"))

