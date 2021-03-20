let FuncionariosObject = {
    Funcionarios: [
        {
            usuarioId: "rorani",
            funcaoFunc: "Desenvolvedor",
            primeiroNome: "Ronin",
            ultimoNome: "Irani",
            uf: "RR",
            numeroFone: "1234567",
            email: "roninI@gmail.com",
        },
        {
            usuarioId: "leleo",
            funcaoFunc: "Escrivão",
            primeiroNome: "Leandro",
            ultimoNome: "Leonardo",
            uf: "PR",
            numeroFone: "1111111",
            email: "aleleo@gmail.com",
        },
        {
            usuarioId: "clera",
            funcaoFunc: "Analista Sênior",
            primeiroNome: "Cleiton",
            ultimoNome: "Rasta",
            uf: "SP",
            numeroFone: "4082222222",
            email: "cleitinho@gmail.com",
        },
    ],
};

const data = FuncionariosObject.funcionario;


const curatedData = data.map(
    (funcionario) =>
        `Nome: ${funcionario.primeiroNome} ${funcionario.ultimoNome}, Título: ${funcionario.funcaoFunc}`
);

console.log(curatedData);
;