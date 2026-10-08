// Solicita ao usuário a temperatura
let valor = parseFloat(prompt("Digite a temperatura:"));

// Solicita ao usuário a unidade (C ou F)
let unidade = prompt("Digite a unidade (C para Celsius ou F para Fahrenheit):").toUpperCase();

if (unidade === "C") {
  // Conversão de Celsius para Fahrenheit
  let fahrenheit = (valor * 9/5) + 32;
  alert(`${valor} °C equivalem a ${fahrenheit.toFixed(2)} °F`);
} else if (unidade === "F") {
  // Conversão de Fahrenheit para Celsius
  let celsius = (valor - 32) * 5/9;
  alert(`${valor} °F equivalem a ${celsius.toFixed(2)} °C`);
} else {
  alert("Unidade inválida! Digite apenas C ou F.");
}
