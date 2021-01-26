_satellite.pushAsyncScript(function(event, target, $variables){
  try {
    if (document.URL.indexOf('/tlt-getting-started') > -1) {
        jQuery('ul li a').click(function() {
            var $this = jQuery(this);
            var getVal = $this.text().trim();
            var getHeading = $this.parents('.panel-body').find('ul b').text().trim();
            if (getHeading == '' || typeof getHeading == 'undefined') {
                getHeading = $this.parents('ul').siblings('center').find('h2 font').text().trim();
            }
            ClickOmniTracki(true, 'event10', 'link:section:' + getHeading + ":", getVal);
        });
    }
    if (document.URL.indexOf('/transfer-learning-toolkit') > -1) {
        jQuery('a.btn-success,a.btn-xs').click(function() {
            var $this = jQuery(this);
            var getVal = $this.text().trim();
            var getHeading = $this.parents('.row').siblings('center').find('h1 font').text().trim();
            if (getHeading == '' || typeof getHeading == 'undefined') {
                getHeading = $this.parents('center').siblings('center').find('h4 font').text().trim().substr(0, 21);
            }
            ClickOmniTracki(true, 'event10', 'button:section:' + getHeading + ":", getVal);
        });
        jQuery('.panel-heading a').click(function() {
            var $this = jQuery(this);
            var getVal = $this.text().trim();
            var getHeading = $this.parents('.panel-heading').find('h4').text().trim();
            ClickOmniTracki(true, 'event10', 'link:section:' + getHeading + ":", getVal);
        });
    }
    if (document.URL.indexOf('/rapids') > -1) {
        jQuery('a.btn-primary,a.btn-success').click(function() {
            var $this = jQuery(this);
            var getVal = $this.text().trim();
            var getHeading = $this.parents('div.clear_fix').find('p font').text().trim().substr(0, 51);
            ClickOmniTracki(true, 'event10', 'link:section:' + getHeading + ":", getVal);
        });

    }
    if (document.URL.indexOf('/isaac-sim') > -1) {
        jQuery('a.btn-primary,a.btn-success').click(function() {
            var $this = jQuery(this);
            var getVal = $this.text().trim();
            var getHeading = $this.parents('div.clear_fix').find('p font').text().trim();
            if (getHeading == '' || typeof getHeading == 'undefined') {
                getHeading = $this.parents('center').find('h1 font ').text().trim();
            }
            ClickOmniTracki(true, 'event10', 'link:section:' + getHeading + ":", getVal);
        });
    }
    if (document.URL.indexOf('/nvidia-tensorrt-download') > -1) {
        jQuery('ul li a').click(function() {
            var $this = jQuery(this);
            var getVal = $this.text().trim();
            var getHeading = $this.parents('.col-sm-12').find('h1 ').text().trim();
            var subHeading = $this.parents('.col-sm-12').find('h2').text().trim();
            var Heading = $this.parents('.col-sm-12').find('h4').text().trim();
            ClickOmniTracki(true, 'event10', 'link:section:' + getHeading + ":" + subHeading + ":" + Heading + ":", getVal);
        });
    }
    if (document.URL.indexOf('/deepstream-getting-started') > -1) {
        jQuery('a.btn-success').click(function() {
            var $this = jQuery(this);
            var getVal = $this.text().trim();
            var getHeading = $this.parents('#div1').siblings('center').first('h2').text().trim();
            ClickOmniTracki(true, 'event10', 'button:section:' + getHeading + ":", getVal);
        });
        jQuery('ul li a,.panel-body a,a[href*="/nvidia-deepstream-sdk-50-software-license-agreement"],a[href*="/python-sample-apps-bindings-license-agreement"],a[href*="/embedded/deepstream-on-jetson-downloads-archived"],a[href*="/deepstream-sdk-download-tesla-archived"],a[href*="https://github.com/NVIDIA-AI-IOT/deepstream_python_apps"]').click(function() {
            var $this = jQuery(this);
            var getVal = $this.text().trim();
            var getHeading = $this.parents('center').siblings('center').find('b').text().trim();
            ClickOmniTracki(true, 'event10', 'link:section:' + getHeading + ":", getVal);
        });
    }
    if (document.URL.indexOf('/clara-medical-imaging') > -1) {
        jQuery('a.btn-success').click(function() {
            var $this = jQuery(this);
            var getVal = $this.text().trim();
            var getHeading = $this.parents('.col-sm-12').find('h1.title').text().trim();
            var subHeading = $this.parents('.col-md-10').siblings('center').find('h3 font').text().trim().substr(0, 38);
            if (subHeading == '' || typeof subHeading == 'undefined') {
                subHeading = $this.parents('.row').siblings('center').find('h2 font').text().trim().substr(0, 21);
            }
            if (subHeading == '' || typeof subHeading == 'undefined') {
                subHeading = $this.parents('.col-md-6,.col-md-pull-4').find('h4 font,h3 font').text().trim();
            }
            ClickOmniTracki(true, 'event10', 'button:section:' + getHeading + ":" + subHeading + ':', getVal);
        });
    }
    if (document.URL.indexOf('/nvidia-nemo') > -1) {
        jQuery('a.btn-success').click(function() {
            var $this = jQuery(this);
            var getVal = $this.text().trim();
            var getHeading = $this.parents('.row').siblings('center').find('h1 font').text().trim();
            var subHeading = $this.parents('.col-lg-10').find('.lead').text().trim().substr(0, 38);
            ClickOmniTracki(true, 'event10', 'button:section:' + getHeading + ":" + subHeading + ':', getVal);
        });
    }
	if (document.URL.indexOf('/nvidia-merlin#getstarted') > -1) {
        jQuery('.col-md-3 center a').click(function() {
            var $this = jQuery(this);
            var getVal = $this.text().trim();
            var getHeading = $this.parents('.col-md-3').find('h5 font').text().trim();
            ClickOmniTracki(true, 'event10', 'button:section:' + getHeading + ":", getVal);
		});
	}
	if (document.URL.indexOf('/Clara-parabricks') > -1) {
        jQuery('.col-md-6 a,.tab-content li a').click(function() {
            var $this = jQuery(this);
            var getVal = $this.text().trim();
            //var getHeading = $this.find('h3 font').text().trim();
            ClickOmniTracki(true, 'event10', 'button:section:', getVal);
		});
	}
        
} catch (e) {}
});
