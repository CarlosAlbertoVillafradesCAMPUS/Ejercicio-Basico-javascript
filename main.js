do{
    let table = {
        1:[[90,100],[80,89],[70,79],[60,69],[1,59],[0,0]],
        2: [[12,14],[9,11],[6,8],[3,5],[1,2],[0,0]],
        letter: [["A"],["B"],["C"],["D"],["E"],["F"]],
        3: [[5,5],[4,4],[3,3],[2,2],[1,1],[0,0]],
        proficiency:[["exeedecs proficiency"],["demostrates proficiency"],["aproaches proficiency"],["falls well proficiency"],["lacks all proficiency"],["no attem proficiency"],],
        reward:[
            ["Felicitaciones se acaba de ganar un viaje a las islas maldivas"],
            ["Estuviste bien bro, pero no te alcanzo"],
            ["Mas o menos parcero, le toca  mejorar"],
            ["Pailas mi ñero sigue intentando :("],
            ["Heche para apolo mas bien"],
            ["No ñero, esto no es lo suyo"]
        ]
    };
    console.table(table)
let option = Number(prompt("Elige tipo de nota va ingresar.\n1.Trditional\n2.Point Range\n3.SBG Rating"));

function order(seleccion){
    let fusion = [];
    table[seleccion].forEach(element => {
        fusion = fusion.concat(element)
    });
    console.log(...fusion)
    
    return `${Math.min(...fusion)} - ${Math.max(...fusion)}`
}

let Nota = Number(prompt(`Digite su nota entre ${order(option)}`));

function result(seleccion, nota) {
    for (let [key, value] of Object.entries(table[seleccion])) {
        if(nota >= value[0] && nota <= value[1]){
            alert(`Sacaste: ${table.letter[key]}\n ${table.proficiency[key]}\nFrase recompensa: ${table.reward[key]}`)
            break
        }
      }
}
 result(option, Nota)
}while(confirm("Desea realizar otra validacion"))
