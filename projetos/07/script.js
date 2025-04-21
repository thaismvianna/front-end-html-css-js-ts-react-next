function calcularMelhorPreco() {
    // validar campos
    let precoAlcool = document.getElementById("alcool").value // value pega o valor digitado
    let precoGasolina = document.getElementById("gasolina").value 

    // para verificar se o campo a ser digitado está vazio 
    if( precoAlcool != "") {
        if( precoGasolina != "") {

            /* calcular se é melhor usar álcool ou gasolina
            * se valorAcool / valorGasolina >= 0.7 é melhor utilizar gasolina
            * senao é melhot utilizar álcool */

            let resultado = precoAlcool / precoGasolina 
            if( resultado >= 0.7) {
              //  alert("Melhor utilizar gasolina")
                document.getElementById("resultado").innerHTML = "Melhor utilizar gasolina" // innerHTML permite configurar um valor
            } else {
              //  alert("Melhor utilizar álcool")
                document.getElementById("resultado").innerHTML = "Melhor utilizar álcool"
            }
            

        } else {
            alert("Preencha o preço da Gasolina")
        }
    } else {
        alert("Preencha o preço do Álcool")
    }

}