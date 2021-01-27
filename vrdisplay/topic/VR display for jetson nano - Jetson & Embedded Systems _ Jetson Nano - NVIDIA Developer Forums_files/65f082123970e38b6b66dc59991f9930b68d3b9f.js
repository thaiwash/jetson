(function () {
  if ('Discourse' in window && typeof Discourse._registerPluginCode === 'function') {
    var __theme_name__ = "Categories link in topic breadcrumb";

    var settings = Discourse.__container__.lookup("service:theme-settings").getObjectForTheme(3);

    var themePrefix = function themePrefix(key) {
      return "theme_translations.3.".concat(key);
    };

    Discourse._registerPluginCode('0.8', function (api) {
      try {
        api.decorateWidget("header-topic-info:after", function (helper) {
          return helper.h("a.badge-wrapper.bullet", {
            href: "/categories",
            title: "All Categories"
          }, [helper.h("span.badge-category-bg", {
            style: "background: white;"
          }), helper.h("span.badge-category", [helper.h("span.category-name", "Categories")])]);
        });
      } catch (err) {
        var rescue = require("discourse/lib/utilities").rescueThemeError;

        rescue(__theme_name__, err, api);
      }
    });
  }
})();