$(document).ready(function(){
  //alert('document ready');
    
  //! Dropdown FadeIn
  $('.navbar-default .dropdown, .topbar .dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(75).fadeIn();
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
  });
    
  //! Google Maps
  $('#map-holder').gMap({
    scrollwheel: false,
    maptype: "ROADMAP",
    zoom: 15,
    markers: [{
      address: "Marburg Marburg, Deutschland, Stiftstraße 40",
      html: "_address",
      popup: false
    }]
  });

});

$(window).load(function(){
    //alert('window load');
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    });
    
    if ( ($(window).height() + 100) < $(document).height() ) {
        $('#top-link-block').removeClass('hidden').affix({
            offset: {top:100}
        });
    }
    
    // Alle Dom Elemente in der Console ausgeben.
    console.log($('*').length);
});

