att = {
    produto : []
}

class Produtos {
    constructor(){
        this.Iniciar();
        this.Eventos();
    }

    Iniciar(){
        att.produto.push({ 
            nomeProduto : "Teste 1",
            preco : 15000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Teste 2",
            preco : 25000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Exemplo 1",
            preco : 25000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Exemplo 2",
            preco : 25000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "c teste",
            preco : 25000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });
        att.produto.push({ 
            nomeProduto : "Teste 1",
            preco : 15000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Teste 2",
            preco : 25000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Exemplo 1",
            preco : 25000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Exemplo 2",
            preco : 25000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "c teste",
            preco : 25000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });
        this.PreencheProdutos(att.produto);
    }
    
    Eventos(){
        $( "#txtFiltroNome" ).keyup(function(e) {
            e.stopPropagation();
            let filtro = $('#txtFiltroNome').val().toUpperCase().trim();
            let produtosFiltrados = att.produto.filter(x => x.nomeProduto.toUpperCase().includes(filtro));
            app.LimpaProdutos();
            app.PreencheProdutos(produtosFiltrados);
        });
    }

    PreencheProdutos(lst){
        lst.forEach(x => {
            $("#bodyProdutos").append(`
                <div class="produto">
                    <div class="card">
                        <div class="card-body">
                            <div class="corpoProduto">
                                <div class="imagemProduto">
                                    <a href="/"> <img src=${x.urlImagem}> </a>
                                </div>
                                <h3>${x.nomeProduto}</h3>
                                <h6>${(x.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h6>
                                <div class="botoesProduto">
                                    <div class="botao">
                                        <button class="btn btnCarrinho"><i class="fa-solid fa-cart-plus"></i> Carrinho</button>
                                    </div>
                                    <div>
                                        <button class="btn btnFavorito"><i class="fa-solid fa-heart"></i> Favoritos</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    LimpaProdutos(){
        $("#bodyProdutos").html(``);
    }
}

$(document).ready(function () {
    app = new Produtos();
});