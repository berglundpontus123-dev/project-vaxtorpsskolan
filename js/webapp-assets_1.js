AppRegistry.registerBundle({applicationId:'rs-webapp|0.1.8',bundle: {"en":{"hello":"Hello"},"sv":{"hello":"Hej"}}});
AppRegistry.registerModule({applicationId:'rs-webapp|0.1.8',path:'/template/main',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';
 if (showReadSpeaker) { 
__p+='\n    ';
 if (isOnline) { 
__p+='\n        ';
 if (useDocReader) { 
__p+='\n            <script type="text/javascript">\n                window.rsDocReaderConf = {lang: \''+
((__t=( outputLocaleString ))==null?'':__t)+
'\', img_alt: \''+
((__t=( outputDrAltText ))==null?'':__t)+
'\'};\n            </script>\n        ';
 } 
__p+='\n    <script src="'+
((__t=( outputJsUrl ))==null?'':__t)+
'" type="text/javascript" id="rs_req_Init"></script>\n    ';
 } 
__p+='\n    ';
 if (useClassicLook) { 
__p+='\n        <a accesskey="L" class="'+
((__t=( outputFontClass ))==null?'':__t)+
' rs_href rs_preserve rs_skip" href="'+
((__t=(  outputUrl ))==null?'':__t)+
'" onclick="readpage(this.href,\''+
((__t=( outputDivId ))==null?'':__t)+
'\'); return false;" onkeypress="readpage(this.href,\''+
((__t=( outputDivId ))==null?'':__t)+
'\'); return false;">\n            ';
 if (useLinkImage) { 
__p+='\n            <img class="sv-noborder sv-vamiddle" src="'+
((__t=( outputImgUrl ))==null?'':__t)+
'" alt="'+
((__t=( outputHelpText ))==null?'':__t)+
'" title="'+
((__t=( outputHelpText ))==null?'':__t)+
'"/>\n            ';
 } 
__p+='\n            '+
((__t=( outputLinkText ))==null?'':__t)+
'\n        </a>\n        <div id="'+
((__t=( outputDivId ))==null?'':__t)+
'" class="rs_addtools rs_splitbutton rs_skip rs_preserve rs_exp"></div>\n    ';
 } else { 
__p+='\n        <div id="readspeaker_button1" class="rs_skip rsbtn rs_preserve">\n            <a accesskey="L" class="rsbtn_play" title="'+
((__t=( outputHelpText ))==null?'':__t)+
'" href="'+
((__t=(  outputUrl ))==null?'':__t)+
'">\n                <span class="rsbtn_left rsimg rspart">\n                    <span class="rsbtn_text">\n                        <span>'+
((__t=( outputLinkText ))==null?'':__t)+
'</span>\n                    </span>\n                </span>\n                <span class="rsbtn_right rsimg rsplay rspart"></span>\n            </a>\n        </div>\n    ';
 } 
__p+='\n';
 } 
__p+='\n';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'rs-webapp|0.1.8',path:'/main',module:function(define){'use strict';define(function(require) {
   'use strict';

   var
      Component  = require('Component'),
      template   = require('/template/main');

   return Component.extend({
      template: template
   });
});}});