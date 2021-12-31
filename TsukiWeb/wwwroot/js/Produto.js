produto = {
    Fotos : [],
    Nome : "",
    Preco : 0,
    Descricao : "",
    CdCategoria : 0
}

class Produto {
    constructor(){
        this.Iniciar();
        this.Eventos();
    }

    Iniciar(){
        produto.Fotos.push({
            urlFoto : imageUrl + ""
        });

        $(".glider").html(`
            <div></div>
        `);
    }

    Eventos(){

    }
}

$(document).ready(() => { 
    app = new Produto();
});