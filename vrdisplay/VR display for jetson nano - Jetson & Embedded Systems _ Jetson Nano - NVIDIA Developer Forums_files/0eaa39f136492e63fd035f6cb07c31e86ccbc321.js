(function () {
  if ('Discourse' in window && typeof Discourse._registerPluginCode === 'function') {
    var __theme_name__ = "Staff Post Color";

    var settings = Discourse.__container__.lookup("service:theme-settings").getObjectForTheme(7);

    var themePrefix = function themePrefix(key) {
      return "theme_translations.7.".concat(key);
    };

    Discourse._registerPluginCode('0.8', function (api) {
      try {
        api.addPostClassesCallback(function (atts) {
          if (atts.staff === true) {
            return ["staff"];
          }
        });
      } catch (err) {
        var rescue = require("discourse/lib/utilities").rescueThemeError;

        rescue(__theme_name__, err, api);
      }
    });
  }
})();