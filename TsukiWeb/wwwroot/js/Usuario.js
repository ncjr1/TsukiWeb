att = {
    produto : [],
    usuario : []
}

class Produtos {
    constructor(){
        this.Iniciar();
        //this.Eventos();
    }

    Iniciar(){
        att.produto.push({ 
            nomeProduto : "Teste 1",
            preco : 1000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });
        att.usuario.push({
            nomeUsuario : "Cuca beludo",
            emailUsuario : "Cuc4_B3luD0@gmail.com"
        });
        this.PreenchePagina(att);
        // this.PreencheFavorito(att.produto);
    }
    
    PreenchePagina(x){
        $("#nomeUsu").val(`Bem Vindo ${x.usuario.nomeUsuario}`);
        $("#email").val(`<i class="fas fa-envelope"></i> ${x.usuario.emailUsuario}`);
        $("#nomeProduto").val(`${x.produto.nomeProduto}`);
        $("#precoProduto").val(`${x.produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    }

    // PreencheFavorito(x){
    //     $(".corpoProduto").append(`
    //         <div class="imagemProduto">
    //         <a href="/"> <img src=${x.urlImagem}> </a>
    //         </div>
    //         <div class="nomeFavorito">
    //             <h3>${x.nomeProduto}</h3>
    //             <h6>${(x.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h6>
    //         </div>
    //         <div class="botao1">
    //             <button class="btn btnCarrinho"><i class="fa-solid fa-cart-plus"></i> Carrinho</button>
    //         </div>
    //         <div class="botao2">
    //             <button class="btn btnFavorito"><i class="fa-solid fa-heart"></i> Favoritos</button>
    //         </div>
    //     `);
    // }

    // PreencheUsuario(x){
    //     $("#bodyUsuario").append(`
    //         <img src="${x.imageUrl}" />
    //         <h5>Bem vindo ${x.nomeUsuario}</h5>
    //         <p id="email"><i class="fas fa-envelope"></i> ${x.emailUsuario}</p>
    //         <a href="">Alterar dados</a>
    //     `);
    // }
}

$(document).ready(function () {
    app = new Produtos();
});