att = {
    produto : []
}

class Index {
    constructor(){
        this.Glider();
        this.Eventos();
    }
    
    Eventos(){
        let precoTeste = (15000).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        let precoTeste2 = (25000).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        att.produto.push({ 
            nomeProduto : "Produto 1",
            preco : precoTeste,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Produto 2",
            preco : precoTeste2,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Produto 3",
            preco : precoTeste2,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Produto 4",
            preco : precoTeste2,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Produto 1",
            preco : precoTeste,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.push({ 
            nomeProduto : "Produto 1",
            preco : precoTeste,
            urlImagem : imageUrl + "Brincos.jpeg"
        });
        att.produto.push({ 
            nomeProduto : "Produto 1",
            preco : precoTeste,
            urlImagem : imageUrl + "Brincos.jpeg"
        });
        att.produto.push({ 
            nomeProduto : "Produto 1",
            preco : precoTeste,
            urlImagem : imageUrl + "Brincos.jpeg"
        });

        att.produto.forEach(x => {
            $("#bodyProdutos").append(`
                <div class="produto">
                    <div class="card">
                        <div class="card-body">
                            <div class="corpoProduto">
                                <div class="imagemProduto">
                                    <a href="/"> <img src=${x.urlImagem}> </a>
                                </div>
                                <h3>${x.nomeProduto}</h3>
                                <h6>${x.preco}</h6>
                                <div class="botoesProduto">
                                    <button class="btn btnCarrinho"><i class="fa-solid fa-cart-plus"></i>Carrinho</button>
                                    <button class="btn btnFavorito"><i class="fa-solid fa-heart"></i>Favoritos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    Glider(){
        this.carrossel = new Glider(document.querySelector('.glider'), {
            slidesToShow: 1,
            dots: '#dots',
            draggable: true,
            arrows: {
              prev: '.glider-prev',
              next: '.glider-next'
            },
            rewind: true
        });
        this.AutoScroll(this.carrossel, 5000);
    }

    //Automatiza o Slider do GliderJS
    AutoScroll(slider, intervalo){
        let slides = slider.track.childElementCount;
        this.ctd = 1;  //Começa como 1 porque é o próximo slide
        window.clearInterval(intervalo);
        setInterval(() => {
            this.MudarSlide(this.ctd, slides, slider);
            this.ctd++;
        }, intervalo);
    }

    //Muda para o próximo slide, caso seja o ultimo retorna ao primeiro
    MudarSlide(ctd, slides, slider){
        ctd >= slides ? this.ctd = 0 : "";
        slider.scrollItem(this.ctd);
    }
}

$(document).ready(function () {
    app = new Index();
});