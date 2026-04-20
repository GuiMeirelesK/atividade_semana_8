const catalogo=[
{id:1, titulo:"Vingadores Ultimato",tipo: "filme",ano:2019,generos:["Ação","Herói"],nota:9.4,assistido:true},
{id:2, titulo:"Peaky blinders",tipo:"série",ano:2012,generos:["Crime","Drama"],nota:8,assistido:true},
{id:3, titulo:"The Batman",tipo: "filme",ano:2022,generos:["Ação","Crime"],nota:7.8,assistido:true},
{id:4, titulo:"Pecadores",tipo: "filme",ano:2025,generos:["Ação","Drama"],nota:7.5,assistido:false},
{id:5, titulo:"O mentalista",tipo: "serie",ano:1980,generos:["Drama","Crime"],nota:8.2,assistido:true},
{id:6, titulo:"Top Gun Maverick",tipo: "filme",ano:2022,generos:["Drama","Ação"],nota:8.2,assistido:true},
];
console.log(catalogo[0].titulo,catalogo[5].ano,catalogo[2].generos[1]);
console.log("Listagem com forEach");
catalogo.forEach(item => {
    console.log(`- [${item.tipo.toUpperCase()}] ${item.titulo} (${item.ano})`);
});
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em Caixa Alta:", titulosEmCaixaAlta);
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(`Existem ${naoAssistidos.length} itens não assistidos.`);
const notaAlta = catalogo.find(item => item.nota >= 9);
if (notaAlta) {
    console.log(`Destaque (Nota >= 9): ${notaAlta.titulo} - Nota: ${notaAlta.nota}`);
} else {
    console.log("Nenhum item com nota maior ou igual a 9.");
}
const mediaGeral = catalogo.reduce((soma, item) => soma + item.nota, 0) / catalogo.length;
const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = assistidos.reduce((soma, item) => soma + item.nota, 0) / assistidos.length;
console.log(`Média Geral: ${mediaGeral.toFixed(2)}`);
console.log(`Média dos Assistidos: ${mediaAssistidos.toFixed(2)}`);
const existeAntigo = catalogo.some(item => item.ano < 2000); 
const todosComGenero = catalogo.every(item => item.generos.length > 0);
console.log("Existe algum item antes de 2000?", existeAntigo ? "Sim" : "Não");
console.log("Todos os itens possuem gêneros?", todosComGenero ? "Sim" : "Não");
const output = document.getElementById("output");
output.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <p><strong>Total de itens:</strong> ${catalogo.length}</p>
    <p><strong>Média de notas:</strong> ${mediaGeral.toFixed(2)}</p>
    <p><strong>Itens pendentes:</strong> ${naoAssistidos.length}</p>
`;