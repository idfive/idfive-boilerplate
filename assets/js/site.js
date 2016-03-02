var site = (function($) {

  var idfive = {};

  idfive.domReady = function() {
    idfive.readySilk();
    idfive.hero();
    idfive.slideshow();
    idfive.instagram();
  };

  idfive.readySilk = function() {

    $('.silk-accordion').silkaccordion();
    $('.silk-nav').silknav();
    $('.silk-table').silktable();
    $('.silk-tabs').silktabs();

  }

  idfive.hero = function() {

    if($('.hero').length) {

      $('.hero').each(function() {

        var image = $(this).find('img').attr('src');
        $(this).css('background-image', 'url(' + image + ')');

      });

    }

  };

  idfive.slideshow = function() {

    if($('.swift-slide').length) {

      swift({
        container: '.swift-slide',
        elements: 'li'
      });

    }

  };

  idfive.instagram = function() {

    var feed = new Instafeed({
      clientId: '00dbf1c65fd84dd38fa9b69417654cd8'
    });

    feed.run();

  }

  return idfive;

})(jQuery);

(function($){

  site.domReady();

})(jQuery);
