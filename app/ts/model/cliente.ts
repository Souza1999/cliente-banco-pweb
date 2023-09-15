class Cliente {
    private _cpf: string;
    private _nome: string;

    constructor(cpf: string, nome: string) {
        this._cpf = cpf;
        this._nome = nome;

    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

}