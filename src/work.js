document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
// eslint-disable-next-line no-unused-vars
    var instances = M.Dropdown.init(elems,);
});

document.addEventListener('DOMContentLoaded', function(){
    $('.preloader-background').delay(1700).fadeOut('slow');

    $('.preloader-wrapper')
        .delay(1700)
        .fadeOut();
});