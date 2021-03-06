(function() {
  if ('Discourse' in window && Discourse.__container__) {
    Discourse.__container__
      .lookup("service:theme-settings")
      .registerSettings(5, {"theme_uploads":{"DIN-Web-Pro-Bold":"//discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/nvidia/original/2X/4/4bf3d412e4c6313c1434d72148521c27da6f2deb.woff","DIN-Web-Pro-Bold-Italic":"//discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/nvidia/original/2X/0/01ab110c800908a8b5823dbeda2f5fee1cbc1810.woff","DIN-Web-Pro-Light":"//discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/nvidia/original/2X/a/a8df55b0830f483b8ae89d15df71768eeabc4475.woff","DIN-Web-Pro-Light-Italic":"//discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/nvidia/original/2X/4/4e1f05b49d70f24b26ebd2d3e5d2e58a55c2fb0f.woff","DIN-Web-Pro-Medium":"//discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/nvidia/original/2X/2/21fa413f4acaeabbe7b1aa9e0cf639cae378e6bc.woff","DIN-Web-Pro-Medium-Italic":"//discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/nvidia/original/2X/5/58ebd1c81cf9949980d2e3fdb139a716bf219cce.woff","DIN-Web-Pro-Regular":"//discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/nvidia/original/2X/2/202f2701783730bd54a4537a73f31505842c3942.woff","DIN-Web-Pro-Regular-Italic":"//discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/nvidia/original/2X/0/014121ac7d08ddb695a925ad7a4c61326797680c.woff","nv_forums":"//discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/nvidia/original/2X/c/cc4ca64e859012375e8841c52c4b354b89b6bbdf.png"}});
  }
})();
(function () {
  if ('Discourse' in window && typeof Discourse._registerPluginCode === 'function') {
    var __theme_name__ = "NVIDIA CSS/HTML";

    var settings = Discourse.__container__.lookup("service:theme-settings").getObjectForTheme(5);

    var themePrefix = function themePrefix(key) {
      return "theme_translations.5.".concat(key);
    };

    Discourse._registerPluginCode('0.8', function (api) {
      try {
        api.replaceIcon('d-liked', 'thumbs-up');
        api.replaceIcon('d-unliked', 'far-thumbs-up');
        api.replaceIcon('notification.liked', 'far-thumbs-up');
        api.replaceIcon('notification.liked_2', 'far-thumbs-up');
        api.replaceIcon('notification.liked_many', 'far-thumbs-up');
        api.replaceIcon('heart', 'thumbs-up');
      } catch (err) {
        var rescue = require("discourse/lib/utilities").rescueThemeError;

        rescue(__theme_name__, err, api);
      }
    });
  }
})();