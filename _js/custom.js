$("body").delay(1000).animate({"opacity": "1"}, 700); // Fade in on page load

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos}, 750);
});

//start scrollReveal variables
// homepage, main section
var sectionReveal = { 
  viewFactor 	: 0.10,
  duration 		: 300,
  delay    		: 125,
  distance 		: '0px',
  easing   		: 'cubic-bezier(0,.25,.6,1)',
  scale    		: 0.95,
  opacity 		: 0,
//  reset 		: true,
};

// homepage, each item (row)
var homeItemReveal = { 
  viewFactor 	: 0.60,
  duration 		: 300,
  delay    		: 125,
  distance 		: '0px',
  easing   		: 'cubic-bezier(0,.25,.6,1)',
  scale    		: 0.95,
  opacity 		: 0,
};

// expertise item
var expertiseItemReveal = { 
  viewFactor  : 0.01,
  duration    : 250,
  delay       : 250,
  distance    : '0px',
  easing      : 'cubic-bezier(0,.25,.6,1)',
  scale       : 0.95,
  opacity     : 0,
};

// expertise title reveal
var expertiseTitleReveal = { 
  viewFactor  : 0.01,
  duration    : 250,
  delay       : 0,
  distance    : '0px',
  easing      : 'cubic-bezier(0,.25,.6,1)',
  scale       : 0.95,
  opacity     : 0,
};

// title reveal
var sectionTitleReveal = { 
  viewFactor 	: 1.2,
  duration 		: 325,
  delay    		: 100,
  distance 		: '0px',
  easing   		: 'cubic-bezier(0,.25,.6,1)',
  scale    		: 1.05,
  opacity 		: 0,
};

// Keep Case Study title hidden longer
var caseTitleReveal = { 
  viewFactor  : 0.075,
  duration    : 325,
  delay       : 100,
  distance    : '0px',
  //easing      : 'cubic-bezier(0,.25,.6,1)',
  scale       : 1.05,
  opacity     : 0,
//  reset     : true,
};

// apply scrollReveal variables
window.sr = ScrollReveal();
//sr.reveal('main', sectionReveal);
sr.reveal('#works .sectionTitle', sectionTitleReveal);
sr.reveal('#intro .bio ul#bioItems', expertiseTitleReveal);
sr.reveal('#expertise .sectionTitle', expertiseTitleReveal);
sr.reveal('#expertise .expertiseList .expertiseItem', expertiseItemReveal, 250);
sr.reveal('ul.worksList li', homeItemReveal);
sr.reveal('#works', caseTitleReveal);


$(document).ready(function() {
// expanding code snippets (front page)
  function expandSnippetAction(snippetID, container) {
    var expertiseDetail = container.find(".row");

    function go() {
      var snippet = $(snippetID).html();

      // for positioning the arrow
      var arrow = $(this).parent().siblings(".expertiseArrow");
      var centerPoint = $(this).position().left + $(this).width()/2.295;
      arrow.css("left", centerPoint);

      var expertiseInContainer = expertiseDetail.html();

      if (container.is(":hidden")) {
        arrow.show();
        arrow.addClass("hover");
        expertiseDetail.html(snippet);
        container.slideDown();
      } else if (expertiseInContainer == snippet) {
        container.slideUp(function() {
          arrow.hide();
        });
      } else {
        var hgt = $(snippetID).height();
        arrow.addClass("hover");
        expertiseDetail.html(snippet);
        expertiseDetail.animate({height: hgt}, 400);
      }
    }
    return go;
  }

  var row1 = $("#expertiseDetails");
  //var row2 = $("#code-snippet-row2");

  $("#creative-management").click(expandSnippetAction("#hidden-creative-management", row1));
  $("#executive-production").click(expandSnippetAction("#hidden-executive-production", row1));
  $("#brand-development-identity-design").click(expandSnippetAction("#hidden-brand-development-identity-design", row1));
  $("#ux-ui-design").click(expandSnippetAction("#hidden-ux-ui-design", row1));
  $("#web-development").click(expandSnippetAction("#hidden-web-development", row1));

  // arrow color hack for hover-overs
  function arrowMouseover (snippetID, container) {

    function go () {
      var expertiseInContainer = container.find(".row").html();
      var snippet = $(snippetID).html();
      if (expertiseInContainer == snippet) {
        var arrow = $(this).parent().siblings(".expertiseArrow");
        arrow.addClass("hover");
      }
    }
    return go;
  }
  function arrowMouseout () {
    var arrow = $(this).parent().siblings(".expertiseArrow");
    arrow.removeClass("hover");
  }

  $("#creative-management").hover(arrowMouseover("#hidden-creative-management", row1), arrowMouseout);
  $("#executive-production").hover(arrowMouseover("#hidden-executive-production", row1), arrowMouseout);
  $("#brand-development-identity-design").hover(arrowMouseover("#hidden-brand-development-identity-design", row1), arrowMouseout);
  $("#ux-ui-design").hover(arrowMouseover("#hidden-ux-ui-design", row1), arrowMouseout);
  $("#web-development").hover(arrowMouseover("#hidden-web-development", row1), arrowMouseout);

}); 

$(document).ready(function() {
  $("#bioItems").lightSlider({
    item        : 1,
    autoWidth   : false,
    slideMove   : 1,
    slideMargin : 0,
    loop        : true,
    auto        : true,
    pause       : 6887,
    pager       : false,
    controls    : false,
    mode        : 'fade'
  });
  $('ul.worksList li.gallery a.workItem').featherlightGallery({
    previousIcon: '«',
    nextIcon: '»',
    galleryFadeIn: 100,
    galleryFadeOut: 300
  });
});
