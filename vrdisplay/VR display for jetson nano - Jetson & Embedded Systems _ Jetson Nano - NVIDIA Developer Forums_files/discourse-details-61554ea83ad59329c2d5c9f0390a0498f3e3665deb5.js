define("discourse/plugins/discourse-details/initializers/apply-details",["exports","I18n","discourse/lib/plugin-api"],function(e,t,i){"use strict";function s(e){e.decorateCooked(function(e){return $("details",e)},{id:"discourse-details"}),e.addToolbarPopupMenuOptionsCallback(function(){return{action:"insertDetails",icon:"caret-right",label:"details.title"}}),e.modifyClass("controller:composer",{actions:{insertDetails:function(){this.toolbarEvent.applySurround("\n"+'[details="'.concat(t.default.t("composer.details_title"),'"]')+"\n","\n[/details]\n","details_text",{multiline:!1})}}})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l={name:"apply-details",initialize:function(){(0,i.withPluginApi)("0.8.7",s)}};e.default=l}),define("discourse/plugins/discourse-details/lib/discourse-markdown/details",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){e.allowList(["summary","summary[title]","details","details[open]","details.elided"]),e.registerPlugin(function(e){e.block.bbcode.ruler.push("details",t)})};var t={tag:"details",before:function(e,t){t=t.attrs;e.push("bbcode_open","details",1),e.push("bbcode_open","summary",1),e.push("text","",0).content=t._default||"",e.push("bbcode_close","summary",-1)},after:function(e){e.push("bbcode_close","details",-1)}}});
//# sourceMappingURL=https://sjc6.discourse-cdn.com/nvidia/assets/plugins/discourse-details-61554ea83ad59329c2d5c9f0390a0498f3e3665deb58d32dc608aeca24fa0bb9.js.map