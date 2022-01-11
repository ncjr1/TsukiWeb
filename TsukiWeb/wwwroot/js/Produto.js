produto = {
    Fotos : [],
    Nome : "",
    Preco : 0,
    Descricao : "",
    CdCategoria : 0
}
att ={
    produto : []
}

class Produto {
    constructor(){
        this.Eventos();
        this.Glider();
        this.Iniciar();
        this.Similares();
    }

    Iniciar(){
        produto.Fotos.push({
            urlFoto : imageUrl + ""
        });

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
        this.PreencheProdutos(att.produto);

        //$(".glider").html(`
        //    <div></div>
        //`);
    }

    Eventos(){
        $("body").on("click",".btnOpiniao", (e=>{
            e.preventDefault();
            var text = $(".textOpiniao").val();
            $(".textOpiniao").val("");
            $(".quadroOpinioes").append(`
                <div class="opiniao">
                    <p class="corpoOpiniao">${text}</p>
                    <button class="like"><i class="fas fa-thumbs-up"></i></button>
                    <button class="dislike"><i class="fas fa-thumbs-down"></i></button>
                    <div class="resposta">
                        <p class="corpoResposta"></p>
                    </div>
                </div>
            `);

        }));

    }
    Glider(){
        this.carrossel = new Glider(document.querySelector('#imagensAnuncio'), {
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

    Similares(){
        new Glider(document.querySelector('#gliderSimilares'), {
            slidesToShow: 5,
            slidesToScroll: 5,
            draggable: true,
            dots: '.dots',
            arrows: {
              prev: '.glider-prev',
              next: '.glider-next'
            },
            rewind: true
          });
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

    PreencheProdutos(lst){
        lst.forEach(x => {
            $("#gliderSimilares").append(`
                <div class="produtos">
                    <div class="card">
                        <div class="card-body">
                            <div class="corpoProduto">
                                <div class="imagemProduto">
                                    <a href="/"> <img src=${x.urlImagem}> </a>
                                </div>
                                <h3>${x.nomeProduto}</h3>
                                <h6>${(x.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    }
}

$(document).ready(() => { 
    app = new Produto();
});