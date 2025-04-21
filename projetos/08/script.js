function gerarFraseMotivacional() {

    const frases = [ //0...6
        "A ação transforma sonhos em realidade.", 
        "Persista. Tudo vale a pena no final.",
        "Seu único limite é você mesmo.",
        "Cada dia é uma nova chance.",
        "Grandes conquistas começam com pequenos passos",
        "Nada substitui o trabalho consistente."
    ]
    
    const numeroAleatorio = Math.floor(Math.random() * 6) // o math gera numero aleatorio * a quantidade
    /* Math.random() gera numeros aleatorios de 0 ate 1
    acrescentando * 10 ele gera numeros até 10
       Math.floor() arredonda o numero para inteiro
    */
    const frase = frases[numeroAleatorio]

    document.getElementById("frase").innerHTML = frase
}