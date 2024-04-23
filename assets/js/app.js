// An object literal
var app = {
  init: function() {
    app.initFullPage();
  },
  initFullPage: function () {
    new fullpage('#fullpage', {
      autoScrolling:true,
      scrollHorizontally: true,
      navigation: true,
      navigationTooltips: ['', 'Наши услуги', 'Консалтинг', 'Изыскания', 'Оценка', 'Контакты'],
      showActiveTooltip: true
    });
  },
  scrollTop: function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
};
(function() {
  // your page initialization code here
  // the DOM will be available here
  app.init();
})();
