  


  /* Section Title */
  $(document).ready(function () {

    $('#sidebar-toggler').on('click', function () {
        $('#side-bar').toggleClass('hide');
        $('#content').toggleClass('hide');
        $('#style-navbar').toggleClass('hide');
        $(this).toggleClass('hide');

    });

});

  ScrollReveal().reveal('#jumbo', {
    distance: '150%',
    origin: 'left',
    opacity: null, 
    delay: 500
});