(function($) {

  $.fn.menumaker = function(options) {
      
      var submenu = $(this), settings = $.extend({
        title: "",
        format: "dropdown",
        breakpoint: 768,
        sticky: false
      }, options);

      return this.each(function() {
        submenu.find('li ul').parent().addClass('has-sub');
        if (settings.format != 'select') {
          submenu.prepend('<div id="menu-button">' + settings.title + '</div>');
          $(this).find("#menu-button").on('click', function(){
            $(this).toggleClass('menu-opened');
            var mainmenu = $(this).next('ul');
            if (mainmenu.hasClass('open')) { 
              mainmenu.hide().removeClass('open');
            }
            else {
              mainmenu.show().addClass('open');
              if (settings.format === "dropdown") {
                mainmenu.find('ul').show();
              }
            }
          });

          multiTg = function() {
            submenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
            submenu.find('.submenu-button').on('click', function() {
              $(this).toggleClass('submenu-opened');
              if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').hide();
              }
              else {
                $(this).siblings('ul').addClass('open').show();
              }
            });
          };

          if (settings.format === 'multitoggle') multiTg();
          else submenu.addClass('dropdown');
        }

        else if (settings.format === 'select')
        {
          submenu.append('<select style="width: 100%"/>').addClass('select-list');
          var selectList = submenu.find('select');
          selectList.append('<option>' + settings.title + '</option>', {
                                                         "selected": "selected",
                                                         "value": ""});
          submenu.find('a').each(function() {
            var element = $(this), indentation = "";
            for (i = 1; i < element.parents('ul').length; i++)
            {
              indentation += '-';
            }
            selectList.append('<option value="' + $(this).attr('href') + '">' + indentation + element.text() + '</option');
          });
          selectList.on('change', function() {
            window.location = $(this).find("option:selected").val();
          });
        }

        if (settings.sticky === true) submenu.css('position', 'fixed');

        resizeFix = function() {
          if ($(window).width() > settings.breakpoint) {
            submenu.find('ul').show();
            submenu.removeClass('small-screen');
            if (settings.format === 'select') {
              submenu.find('select').hide();
            }
            else {
              submenu.find("#menu-button").removeClass("menu-opened");
            }
          }

          if ($(window).width() <= settings.breakpoint && !submenu.hasClass("small-screen")) {
            submenu.find('ul').hide().removeClass('open');
            submenu.addClass('small-screen');
            if (settings.format === 'select') {
              submenu.find('select').show();
            }
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$(document).ready(function() {
  $("#submenu").menumaker({
    title: "",
    format: "dropdown"
  });
});

});
})(jQuery);
