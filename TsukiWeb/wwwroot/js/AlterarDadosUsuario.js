att = {
    enderecos : []
}

class Dados {
    constructor(){
        this.Iniciar();
    }
    Iniciar(){
        att.enderecos.push(
            {
                nomeEndereco:"Casa",
                rua: "Um sonho",
                numero: 64,
                bairro: "Cabeludo",
                cep: "1223040",
                cidade: "Rio de Janiro",
                uf: "RJ"
        });
        att.enderecos.push(
            {
                nomeEndereco:"Casa vó",
                rua: "Um sonho distante",
                numero: 66,
                bairro: "Cabeludoaa",
                cep: "1223040",
                cidade: "Rio de Janiro",
                uf: "RJ"
        });
        this.PreencherDados(att.enderecos);
    }

    PreencherDados(lst){
        lst.forEach(x => {
            $("#bodyEnderecos").append(`
                <div class="endereco">
                    <h6>${x.nomeEndereco}</h6>
                    <p class="rua" >${x.rua}</p>
                    <p>${x.numero},</p>
                    <p>${x.bairro}</p>
                    <div class="bloco">
                        <p>CEP ${x.cep} -</p>
                        <p>${x.cidade},</p>
                        <p>${x.uf}</p>
                    </div>
                </div>
            `);
        });
    }
}

$(document).ready(function(){
    app = new Dados();
});