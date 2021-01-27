(function() {
  if ('Discourse' in window && Discourse.__container__) {
    Discourse.__container__
      .lookup("service:theme-settings")
      .registerSettings(6, {"theme_uploads":{"din":"//discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/nvidia/original/2X/0/0d6fe7372c3e23d6b20dd139f7ad60302e4a8c9e.otf","din-bold":"//discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/nvidia/original/2X/3/32103eb67b9636f4cf1844e16da6a858ba81c4a0.otf","din-ital":"//discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/nvidia/original/2X/f/fd98fe079c6241d24d74c5de82822754bdaf0817.otf"}});
  }
})();
(function () {
  if ('Discourse' in window && typeof Discourse._registerPluginCode === 'function') {
    var __theme_name__ = "discourse-nvidia-theme";

    var settings = Discourse.__container__.lookup("service:theme-settings").getObjectForTheme(6);

    var themePrefix = function themePrefix(key) {
      return "theme_translations.6.".concat(key);
    };

    Discourse._registerPluginCode('0.8', function (api) {
      try {
        api.changeWidgetSetting('home-logo', 'href', 'https://developer.nvidia.com');
      } catch (err) {
        var rescue = require("discourse/lib/utilities").rescueThemeError;

        rescue(__theme_name__, err, api);
      }
    });
  }
})();