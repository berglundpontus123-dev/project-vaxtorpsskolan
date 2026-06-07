AppRegistry.registerBundle({applicationId:'openingHoursContactCenter|1.0.0',bundle: {}});
AppRegistry.registerModule({applicationId:'openingHoursContactCenter|1.0.0',path:'/template/currentOpenStatus',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="ws-openinghours__currentcontainer">\n    ';
 if(heading !=="") { 
__p+='\n        <h2 class="ws-openinghours__heading">'+
((__t=( heading ))==null?'':_.escape(__t))+
'</h2>\n    ';
 } 
__p+='\n    <ul class="ws-openinghours__contact">\n        ';
 if (contact.phone) { 
__p+='\n            <li class="ws-openinghours__contact-item"><svg focusable="false" aria-hidden="true"><use xlink:href="#phone"></use></svg><a href="tel:'+
((__t=( contact.phoneValidated ))==null?'':_.escape(__t))+
'">'+
((__t=( contact.phone ))==null?'':_.escape(__t))+
'</a></li>\n        ';
 } 
__p+='\n        ';
 if (contact.email) { 
__p+='\n            <li class="ws-openinghours__contact-item"><svg focusable="false" aria-hidden="true"><use xlink:href="#mail"></use></svg><a href="mailto:'+
((__t=( contact.email ))==null?'':_.escape(__t))+
'">'+
((__t=( contact.email ))==null?'':_.escape(__t))+
'</a></li>\n        ';
 } 
__p+='\n        ';
 if (contact.address) { 
__p+='\n            <li class="ws-openinghours__contact-item"><svg focusable="false" aria-hidden="true"><use xlink:href="#marker-pin"></use></svg>'+
((__t=( contact.address ))==null?'':_.escape(__t))+
'</li>\n        ';
 } 
__p+='\n    </ul>\n    <p class="ws-openinghours__statusrow">\n        ';
 if (status) { 
__p+='\n            ';
 if (status.open) { 
__p+='\n                <span class="ws-openinghours__icon ws-openinghours__icon--open"></span>\n                Öppet idag: <span class="ws-openinghours__text">'+
((__t=( status.openString ))==null?'':_.escape(__t))+
'</span>\n            ';
 } else { 
__p+='\n                <span class="ws-openinghours__icon ws-openinghours__icon--closed"></span>\n                Stängt just nu. <span class="ws-openinghours__text">'+
((__t=( status.nextTimeOpenString ))==null?'':_.escape(__t))+
'</span>\n            ';
 } 
__p+='\n        ';
 } else { 
__p+='\n            På grund av en längre avvikelse kan öppettider just nu inte visas.\n        ';
 } 
__p+='\n    </p>\n    ';
 if (links) { 
__p+='\n        <div class="ws-openinghours__links">\n            ';
 if (links.openinghours) { 
__p+='\n                <a class="ws-openinghours__link" href="'+
((__t=( links.openinghours ))==null?'':_.escape(__t))+
'" title="Flera kontaktuppgifter">Flera kontaktuppgifter</a>\n            ';
 } 
__p+='\n        </div>\n    ';
 } 
__p+='\n</div>';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'openingHoursContactCenter|1.0.0',path:'/component/Table',module:function(define){'use strict';define(function(require) {
   'use strict';

   var
      _                 = require('underscore'),
      Component         = require('Component'),
      helperFunctions   = require('/module/common/helperFunctions');
      // template          = require('/template/openingHoursTable');

   return Component.extend({

      // template: template,

      templateFunctions: function() {
         var context = this;
         return {
            formatOpeningHours: function(from, to) {
               return helperFunctions.formatOpeningHours(from, to);
            },
            formatDayName: function(abbr) {
               return helperFunctions.formatDayName(abbr);
            }
         }
      },

      filterState: function(state) {
         return _.extend({}, {place: state.place});
      }
   });
});}});
AppRegistry.registerModule({applicationId:'openingHoursContactCenter|1.0.0',path:'/component/CurrentOpenStatus',module:function(define){'use strict';define(function(require) {
   'use strict';

   var
      _                 = require('underscore'),
      Component         = require('Component'),
      template          = require('/template/currentOpenStatus');

   return Component.extend({

      template: template,

      filterState: function(state) {
         return _.extend({}, {
            heading: state.heading,
            place: state.place,
            status: state.status,
            contact: state.contact,
            links: state.links
         })
      }
   });
});}});
AppRegistry.registerModule({applicationId:'openingHoursContactCenter|1.0.0',path:'/template/error',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="ws-openinghours__currentcontainer">\n    <h2 class="ws-openinghours__heading">Kan inte visa öppettider</h2>\n    <p class="sv-font-brodtext-liten ws-openinghours__statusrow">\n        '+
((__t=( errorText ))==null?'':_.escape(__t))+
'\n    </p>\n</div>';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'openingHoursContactCenter|1.0.0',path:'/template/main',module:function(define){define(function(require){var _=require('underscore');return function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+=''+
((__t=( renderer.renderComponent('CurrentOpenStatus') ))==null?'':__t)+
'';
}
return __p;
};});}});
AppRegistry.registerModule({applicationId:'openingHoursContactCenter|1.0.0',path:'/module/common/helperFunctions',module:function(define){'use strict';define(function(require) {
    'use strict';

    var 
        _  = require('underscore');

    return {

        getDays: function() {
            return {
                "mo": "Måndag",
                "tu": "Tisdag",
                "we": "Onsdag",
                "th": "Torsdag",
                "fr": "Fredag",
                "sa": "Lördag",
                "su": "Söndag"
            };
        },

        getJavaDays: function() {
            return {
                "2": "mo",
                "3": "tu",
                "4": "we",
                "5": "th",
                "6": "fr",
                "7": "sa",
                "1": "su"
            };
        },

        formatDayName: function(abbr) {
            var days = this.getDays();
            return days[abbr] ? days[abbr] : '';
        },

        formatOpeningHours: function(from, to) {
            var formattedString = '';
            formattedString += from ? from : '';
            formattedString += ' - ';
            formattedString += to ? to : '';
            return formattedString;
        }
    };
});}});
AppRegistry.registerModule({applicationId:'openingHoursContactCenter|1.0.0',path:'/main',module:function(define){'use strict';define(function (require) {
  "use strict";

  var _ = require("underscore"),
    Component = require("Component"),
    errorTemplate = require("/template/error"),
    mainTemplate = require("/template/main");

  return Component.extend({
    getTemplate: function () {
      if (this.state.route === "/error") {
        return errorTemplate;
      }
      return mainTemplate;
    },

    filterState: function (state) {
      return _.extend(
        {},
        {
          errorText: state.errorText,
          route: state.route,
        }
      );
    },
  });
});
}});