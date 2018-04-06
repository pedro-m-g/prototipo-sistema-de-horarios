$('.indicator').click(function(evt) {
  $(evt.target).parent().find('.indicator-chooser').toggle();
});

$('.indicator-chooser .indicator').click(function(evt) {
  var $target = $(evt.target);
  var $indicator = $target.parents()
                          .closest('.indicator-chooser')
                          .parent()
                          .find('.indicator.selected');
  var classes = ['red', 'yellow', 'green'];
  classes.forEach(cls => $indicator.removeClass(cls));
  classes.filter(cls => $target.hasClass(cls))
         .forEach(cls => $indicator.addClass(cls));
})

$('.js-open-context-menu').click(function(evt) {
  $(evt.target).parent().find('.context-menu').toggle();
  evt.preventDefault();
});
