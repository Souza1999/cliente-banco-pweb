class ClienteController {
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;

    private cliente: ClienteController;

    constructor() {
        this.inputCpf = <HTMLInputElement>document.querySelector("#cpf");
        this.inputNome = <HTMLInputElement>document.querySelector("#nome");

        this.cliente = new ClienteController();

    }

    inserirCliente(evento: Event){
        // Documentação
        evento.preventDefault();    

        let novoCliente = new ClienteController (this.inputCpf.value);
        this.cliente
    }


}