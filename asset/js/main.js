  


  /* Section Title */
  $(document).ready(function () {

    $('#sidebar-toggler').on('click', function () {
        $('#side-bar').toggleClass('hide');
        $('#content').toggleClass('hide');
        $('#style-navbar').toggleClass('hide');
        $(this).toggleClass('hide');

    });

   


    $('#side-bar a, #intro a, #style-navbar a').on('click', function(e) {
    e.preventDefault();
    console.log($(this).attr('href'));
    $('html,body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });



  	


});

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();


    // Do something

     if(scroll!=0){
    	var x = $('#style-navbar').offset().top;

    	console.log(x)
    	$('#style-navbar').addClass("black-nav");
    }
     else{

     	$('#style-navbar').removeClass("black-nav");
     }
});

  

  	

  ScrollReveal().reveal('#jumbo', {
    distance: '150%',
    origin: 'left',
    opacity: null, 
    delay: 500
});

ScrollReveal().reveal('.skill', {
    distance: '150%',
    origin: 'left',
    opacity: null, 
    delay: 500
});

  $('.skill').tilt({
    scale: 1.2
})

   ScrollReveal().reveal('.project', {
    distance: '5%',
    origin: 'bottom',
    opacity: null, 
    delay: 500
});



