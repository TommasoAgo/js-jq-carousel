// Devo aggiungere al click sulla freccia destra un evento: 
// cambiare classe all'elemento successivo al primo e poi di seguito fino all'ultimo
// L'ultimo click deve riportarmi alla prima immagine
// TEST
$('.header-container').fadeIn(2000);
// Creo una variabile per la freccia destra

var rightArrow = $('.right');

rightArrow.mouseenter(function() {
    rightArrow.addClass('greyarrow');
})

rightArrow.mouseleave(function() {
    rightArrow.removeClass('greyarrow');
})

// Aggiungo l'evento click alla freccia
rightArrow.click(function() {
    var activeImg = $('.active');
    // Devo nascondere l'immagine corrente al click
    activeImg.removeClass('active');
    // SE l'immagine è l'ultima della lista 
    if ( activeImg.hasClass('last') ) {
        // Allora ridai la classe active alla prima
        $('.first').addClass('active');
    } else {
        // Altrimenti dai la classe active all'immagine successiva
        var nextImg = activeImg.next();
        nextImg.addClass('active');
    } 
})

// Faccio lo stesso per la freccia sinistra
var leftArrow = $('.left');

leftArrow.mouseenter(function() {
    leftArrow.addClass('greyarrow');
})

leftArrow.mouseleave(function() {
    leftArrow.removeClass('greyarrow');
})

leftArrow.click(function() {
    var activeImg = $('.active');
    activeImg.removeClass('active');
    if ( activeImg.hasClass('first') ) {
        $('.last').addClass('active');
    } else {
        var prevImg = activeImg.prev();
        prevImg.addClass('active');
    } 
})

