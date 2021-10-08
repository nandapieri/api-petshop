class DadosNaoFornecidos extends Error {
    constructor() {
        super('Não foram fornecidos dados para atualizar o objeto')
        this.name = 'DadosNaoFornecidos'
        this.idErro = 2
    }

}

module.exports = DadosNaoFornecidos