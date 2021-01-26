define("discourse/plugins/discourse-checklist/discourse/initializers/checklist",["exports","discourse/lib/plugin-api","discourse/lib/ajax","discourse-common/lib/icon-library","I18n"],function(e,n,c,t,l){"use strict";function i(e,n){var o,u;n&&(e=e.find(".chcklst-box"),o=n.widget,(u=n.getModel()).can_edit&&(e.each(function(r,e){$(e).click(function(e){var a,e=$(e.currentTarget);e.hasClass("permanent")||(a=e.hasClass("checked")?"[ ]":"[x]",e.after((0,t.iconHTML)("spinner",{class:"fa-spin"})).hide(),(0,c.ajax)("/posts/".concat(u.id),{type:"GET",cache:!1}).then(function(c){var t=[];[/`[^`\n]*\n?[^`\n]*`/gm,/^```[^]*?^```/gm,/\[code\][^]*?\[\/code\]/gm,/_(?=\S).*?\S_/gm,/~~(?=\S).*?\S~~/gm].forEach(function(e){for(var n;null!=(n=e.exec(c.raw));)t.push([n.index,n.index+n[0].length])}),[/([^\[\n]|^)\*\S.+?\S\*(?=[^\]\n]|$)/gm].forEach(function(e){for(var n;null!=(n=e.exec(c.raw));)t.push([n.index+1,n.index+n[0].length])});var i=-1,s=!1,e=c.raw.replace(/\[(\s|\_|\-|\x|\\?\*)?\]/gi,function(n,e,c){return!s&&(i+=t.every(function(e){return e[0]>=c+n.length||c>e[1]}))===r?(s=!0,a):n}),e=u.save({raw:e,edit_reason:l.default.t("checklist.edit_reason")});e&&e.then&&e.then(function(){o.attrs.isSaving=!1,o.scheduleRerender()})}))})}),e.css({cursor:"pointer"})))}Object.defineProperty(e,"__esModule",{value:!0}),e.checklistSyntax=i,e.default=void 0;var s={name:"checklist",initialize:function(){(0,n.withPluginApi)("0.1",function(e){(e=e).container.lookup("site-settings:main").checklist_enabled&&e.decorateCooked(i,{id:"checklist"})})}};e.default=s}),define("discourse/plugins/discourse-checklist/lib/discourse-markdown/checklist",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){e.registerOptions(function(e,n){e.features.checklist=!!n.checklist_enabled}),e.whiteList(["span.chcklst-stroked","span.chcklst-box fa fa-square-o fa-fw","span.chcklst-box checked fa fa-check-square-o fa-fw","span.chcklst-box checked permanent fa fa-check-square fa-fw"]),e.registerPlugin(function(e){return e.core.ruler.push("checklist",n)})};var o=/\[(\s?|x|X)\]/g;function u(e,n,c,t){var i=function(e){switch(e){case"x":return"checked fa fa-check-square-o fa-fw";case"X":return"checked permanent fa fa-check-square fa-fw";default:return"fa fa-square-o fa-fw"}}(c[1]),c=new t.Token("check_open","span",1);c.attrs=[["class","chcklst-box ".concat(i)]],e.push(c);t=new t.Token("check_close","span",-1);e.push(t)}function n(e){for(var n,c,t,i=e.tokens,s=0,a=0,r=i.length;a<r;a++)if("inline"===i[a].type)for(n=(c=i[a].children).length-1;0<=n;n--){s+=(t=c[n]).nesting,"text"!==t.type||0!==s||(t=function(e,n){for(var c,t,i,s=null,a=0;c=o.exec(e);){c.index>a&&(s=s||[],(t=new n.Token("text","",0)).content=e.slice(a,c.index),s.push(t)),a=c.index+c[0].length,u(s=s||[],0,c,n)}return s&&a<e.length&&((i=new n.Token("text","",0)).content=e.slice(a),s.push(i)),s}(t.content,e))&&(i[a].children=c=e.md.utils.arrayReplaceAt(c,n,t))}}});
//# sourceMappingURL=https://sjc4.discourse-cdn.com/nvidia/assets/plugins/discourse-checklist-5fe159e04ddbe1aa83d16af087823f45ca50e8dbf486e53bf29489d934d690fc.js.map