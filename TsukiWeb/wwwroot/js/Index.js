class Index {
    constructor(){
        this.Glider();
        this.Eventos();
    }
    
    Eventos(){
        //Corrige o bug do GliderJS
        $("body").on("mouseenter", "#ddmenu", (e) => {
            $(".glider-contain").addClass("menosUm");
        });

        $("body").on("mouseleave", "#ddmenu", (e) => {
            $(".glider-contain").removeClass("menosUm");
        });

        $("body").on("mouseenter", "#myHeader", (e) => {
            $(".glider-contain").addClass("menosUm");
        });

        $("body").on("mouseleave", "#myHeader", (e) => {
            $(".glider-contain").removeClass("menosUm");
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