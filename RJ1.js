const personagens = [
    {
        nome: "steve rogers",
        codinome: "capitão america",
        armaPrincipal: "escudo",
        armaSecundaria: "martelo",
        velocidade: 85,
        forca: 75,
        resistencia: 80,
        descricao: function() {
            return "Nome do personagem: " + this.nome + "\n" +
                "Codinome do personagem: " + this.codinome + "\n" +
                "Arma principal: " + this.armaPrincipal + "\n" +
                "Arma secundária: " + this.armaSecundaria + "\n" +
                "Nível de força: " + this.forca + "\n" +
                "Nível de velocidade: " + this.velocidade + "\n" +
                "Nível de resistência: " + this.resistencia + "\n";
        }
    },
    {
        nome: "robert bruce",
        codinome: "hulk",
        armaPrincipal: "soco",
        armaSecundaria: "musculos",
        velocidade: 70,
        forca: 90,
        resistencia: 80,
        descricao: function() {
            return "Nome do personagem: " + this.nome + "\n" +
                "Codinome do personagem: " + this.codinome + "\n" +
                "Arma principal: " + this.armaPrincipal + "\n" +
                "Arma secundária: " + this.armaSecundaria + "\n" +
                "Nível de força: " + this.forca + "\n" +
                "Nível de velocidade: " + this.velocidade + "\n" +
                "Nível de resistência: " + this.resistencia + "\n";
        }
    },
    {
        nome: "thanos",
        codinome: "",
        armaPrincipal: "manopla do infinito",
        armaSecundaria: "",
        velocidade: 100,
        forca: 100,
        resistencia: 100,
        descricao: function() {
            return "Nome do personagem: " + this.nome + "\n" +
                "Codinome do personagem: " + this.codinome + "\n" +
                "Arma principal: " + this.armaPrincipal + "\n" +
                "Arma secundária: " + this.armaSecundaria + "\n" +
                "Nível de força: " + this.forca + "\n" +
                "Nível de velocidade: " + this.velocidade + "\n" +
                "Nível de resistência: " + this.resistencia + "\n";
        }
    }
];


for (let i= 0; i < personagens.length; i++){
    // contador=0 pra cada contador enquanto o tamanho de coisas em
    // personagem i recebe 1..
    let personagemAtual= personagens[i];
    // define o atual como o i (item na lista personagens)
    console.log(personagemAtual.descricao());
    
    for (let x = i + 1; x < personagens.length; x++){
        let personagemComparado =personagens[x];
        // pra cada comparado(x) de personagem(i+1) do tamanho de personagem x+1
        console.log("\nComparando com: ");
        console.log(personagemComparado.descricao());
        if (personagemAtual.forca > personagemComparado.forca) {
            console.log(`${personagemAtual.nome} tem mais força que ${personagemComparado.nome}`);
        } else if (personagemAtual.forca < personagemComparado.forca) {
            console.log(`${personagemComparado.nome} tem mais força que ${personagemAtual.nome}`);
        } else {
            console.log(`${personagemAtual.nome} e ${personagemComparado.nome} têm a mesma força`);
        }

        if (personagemAtual.velocidade > personagemComparado.velocidade) {
            console.log(`${personagemAtual.nome} é mais rápido que ${personagemComparado.nome}`);
        } else if (personagemAtual.velocidade < personagemComparado.velocidade) {
            console.log(`${personagemComparado.nome} é mais rápido que ${personagemAtual.nome}`);
        } else {
            console.log(`${personagemAtual.nome} e ${personagemComparado.nome} têm a mesma velocidade`);
        }

        if (personagemAtual.resistencia > personagemComparado.resistencia) {
            console.log(`${personagemAtual.nome} tem mais resistência que ${personagemComparado.nome}`);
        } else if (personagemAtual.resistencia < personagemComparado.resistencia) {
            console.log(`${personagemComparado.nome} tem mais resistência que ${personagemAtual.nome}`);
        } else {
            console.log(`${personagemAtual.nome} e ${personagemComparado.nome} têm a mesma resistência`);
        }
    } // so exibindo se x > i ou i > x
}