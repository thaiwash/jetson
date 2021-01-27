(function() {
  if ('Discourse' in window && Discourse.__container__) {
    Discourse.__container__
      .lookup("service:theme-settings")
      .registerSettings(4, {"Custom_header_links":"Home, Home, https://developer.nvidia.com/, vdo, self, remove|Blog, Blog, https://developer.nvidia.com/blog/, vdo, self, remove|News, News, https://news.developer.nvidia.com/, vdo, self, remove|Forums, Forums, /, vdo, self, remove|Docs, Docs, https://docs.nvidia.com/, vdo, self, remove|NGC, NGC, https://ngc.nvidia.com, vdo, self, remove|Training, Training, https://www.nvidia.com/en-us/deep-learning-ai/education/,vdo, self, remove","links_position":"left"});
  }
})();
(function () {
  if ('Discourse' in window && typeof Discourse._registerPluginCode === 'function') {
    var __theme_name__ = "Custom Header Links";

    var settings = Discourse.__container__.lookup("service:theme-settings").getObjectForTheme(4);

    var themePrefix = function themePrefix(key) {
      return "theme_translations.4.".concat(key);
    };

    Discourse._registerPluginCode('0.8.20', function (api) {
      try {
        var customHeaderLinks = settings.Custom_header_links;
        var linksPosition = settings.links_position === "right" ? "header-buttons:before" : "home-logo:after";
        if (!customHeaderLinks.length) return;

        var h = require("virtual-dom").h;

        var headerLinks = [];
        customHeaderLinks.split("|").map(function (i) {
          var seg = $.map(i.split(","), $.trim);
          var linkText = seg[0];
          var linkTitle = seg[1];
          var linkHref = seg[2];
          var deviceClass = ".".concat(seg[3]);
          var linkTarget = seg[4] === "self" ? "" : "_blank";
          var keepOnScrollClass = seg[5] === "keep" ? ".keep" : "";
          var linkClass = ".".concat(linkText.trim().toLowerCase().replace(/\s/gi, '-'));

          if (!linkTarget) {
            headerLinks.push(h("li.headerLink".concat(deviceClass).concat(keepOnScrollClass).concat(linkClass), h("a", {
              title: linkTitle,
              href: linkHref
            }, linkText)));
          } else {
            headerLinks.push(h("li.headerLink".concat(deviceClass).concat(keepOnScrollClass).concat(linkClass), h("a", {
              title: linkTitle,
              href: linkHref,
              target: linkTarget
            }, linkText)));
          }
        });
        api.decorateWidget(linksPosition, function (helper) {
          return helper.h("ul.custom-header-links", headerLinks);
        });
        api.decorateWidget("home-logo:after", function (helper) {
          var titleVisible = helper.attrs.minimized;

          if (titleVisible) {
            $(".d-header").addClass("hide-menus");
          } else {
            $(".d-header").removeClass("hide-menus");
          }
        });
      } catch (err) {
        var rescue = require("discourse/lib/utilities").rescueThemeError;

        rescue(__theme_name__, err, api);
      }
    });
  }
})();