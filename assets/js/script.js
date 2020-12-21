
$(document).ready(function() {
  function show_modal(url){
    let modal_object = $('<object width="100%" height="100%" />');
    modal_object.attr("data", url);
    $('#modal-body-space').html(modal_object);
    $('#projectModal').modal('show');
  }

  // function scrollTo(section){
  // 	document.querySelector(section).scrollIntoView({
  // 		behavior: 'smooth'
  // 	});
  // }

  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $('.scroll-animations.animated')
  $(window).scroll(function() {
    console.log("scrolling");
    $('.scroll-animations.animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).css('opacity', '1');
        console.log("yessss");
        $(this).addClass('animate__animated animate__bounceInUp');

      }
    });
  });
});
