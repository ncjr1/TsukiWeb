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
            preco : 1000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Teste 1",
            preco : 2000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Teste 1",
            preco : 3000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Teste 1",
            preco : 4000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Teste 1",
            preco : 5000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Teste 1",
            preco : 6000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Teste 2",
            preco : 7000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Teste 1",
            preco : 8000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Teste 1",
            preco : 9000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Teste 1",
            preco : 10000,
            urlImagem : imageUrl + "Brincos.jpeg"
        });
        this.PreencheProdutos(att.produto);
    }
    
    Eventos(){
        $("#txtFiltroMin").maskMoney({prefixMoney: "R$ ", placeholder: "Preço Mínimo"});
        $("#txtFiltroMax").maskMoney({prefixMoney: "R$ ", placeholder: "Preço Máximo"});
        // $( "#txtFiltroNome" ).keyup(function(e) {
        //     e.stopPropagation();
        //     let filtro = $('#txtFiltroNome').val().toUpperCase().trim();
        //     let produtosFiltrados = att.produto.filter(x => x.nomeProduto.toUpperCase().includes(filtro));
        //     app.LimpaProdutos();
        //     app.PreencheProdutos(produtosFiltrados);
        // });

        $("body").on("click", "#btnFiltro", (e) => {
            e.preventDefault();
            if($("#txtFiltroNome").val() == "" && $("#txtFiltroMin").val() == "" && $("#txtFiltroMax").val() == ""){
                app.LimpaProdutos();
                app.PreencheProdutos(att.produto);
                return;
            }else if($("#txtFiltroMin").val() == "" && $("#txtFiltroMax").val() == ""){
                let filtro = $('#txtFiltroNome').val().toUpperCase().trim();
                let produtosFiltrados = att.produto.filter(x => x.nomeProduto.toUpperCase().includes(filtro));
                app.LimpaProdutos();
                app.PreencheProdutos(produtosFiltrados);
            }else{
                let filtro = $('#txtFiltroNome').val().toUpperCase().trim();
                let produtosFiltrados = att.produto.filter(x => x.nomeProduto.toUpperCase().includes(filtro) && (x.preco >= ($("#txtFiltroMin").cleanVal() / 100) && x.preco <= ($("#txtFiltroMax").cleanVal() / 100)));
                app.LimpaProdutos();
                app.PreencheProdutos(produtosFiltrados);
            }
        });

        $("body").on("click", "#btnLimpaFiltro", (e) => {
            e.preventDefault();
            $("#txtFiltroMin").val('');
            $("#txtFiltroMax").val('');
            $("#txtFiltroNome").val("");
            $("#btnFiltro").trigger("click");
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