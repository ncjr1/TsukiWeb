class Index {
    constructor(){
        this.Iniciar();
    }

    Iniciar(){
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 1,
            dots: '.dots',
            draggable: true,
            arrows: {
              prev: '.glider-prev',
              next: '.glider-next'
            },
            rewind: true
          });

    }
    
}

$(document).ready(function () {
    app = new Index();
});
