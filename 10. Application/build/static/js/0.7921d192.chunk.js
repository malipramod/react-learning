webpackJsonp([0],{190:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n.n(i),l=n(7),u=n(196),s=n(10),p=n(199),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),A=function(e){function t(){var e,n,o,i;r(this,t);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.checkoutCancelledHandler=function(){o.props.history.goBack()},o.checkoutContinuedHandler=function(){o.props.history.replace("/checkout/contact-data")},i=n,a(o,i)}return o(t,e),d(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=c.a.createElement(s.c,{to:"/"});if(this.props.ings){var t=this.props.purchased?c.a.createElement(s.c,{to:"/"}):null;e=c.a.createElement("div",null,t,c.a.createElement(u.a,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),c.a.createElement(s.d,{path:this.props.match.path+"/contact-data",component:p.a}))}return e}}]),t}(i.Component),m=function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}};t.default=Object(l.b)(m)(A)},193:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(194),i=n.n(o),c=function(e){var t=null,n=null,r=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&(r.push(i.a.Invalid),n=a.a.createElement("p",null,"Please enter some valid value!")),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:r.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:r.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}));break;case"select":t=a.a.createElement("select",{className:r.join(" "),onChange:e.changed,value:e.value},e.elementConfig.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=a.a.createElement("input",Object.assign({className:r.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}))}return a.a.createElement("div",{className:i.a.Input},a.a.createElement("label",{className:i.a.Label},e.label),t,n)};t.a=c},194:function(e,t,n){var r=n(195);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(189)(r,a);r.locals&&(e.exports=r.locals)},195:function(e,t,n){t=e.exports=n(188)(!0),t.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#ccc}.Input__Invalid__38X2d{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["C:/Users/pmali/Desktop/ReactJS/14. Burger Builder Application - Redux/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAGD,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CAEtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAa,AACb,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,wBAAyB,CAC5B",file:"Input.css",sourcesContent:[".Input{\r\n    width: 100%;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n\r\n.Label{\r\n    font-weight: bold;\r\n    display: block;\r\n    margin-bottom: 8px;\r\n\r\n}\r\n\r\n.InputElement{\r\n    outline: none;\r\n    border: 1px solid #ccc;\r\n    background-color: white;\r\n    font:inherit;\r\n    padding: 6px 10px;\r\n    display: block;\r\n    width: 100%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus{\r\n    outline: none;\r\n    background-color: #ccc;    \r\n}\r\n\r\n.Invalid{\r\n    border: 1px solid red;\r\n    background-color:#FDA49A;\r\n}"],sourceRoot:""}]),t.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},196:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(59),i=n(56),c=n(197),l=n.n(c),u=function(e){return a.a.createElement("div",{className:l.a.CheckoutSummary},a.a.createElement("h1",null,"We hope it tastes well!"),a.a.createElement("div",{style:{width:"100%",margin:"auto"}},a.a.createElement(o.a,{ingredients:e.ingredients})),a.a.createElement(i.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),a.a.createElement(i.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))};t.a=u},197:function(e,t,n){var r=n(198);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(189)(r,a);r.locals&&(e.exports=r.locals)},198:function(e,t,n){t=e.exports=n(188)(!0),t.push([e.i,".CheckoutSummary__CheckoutSummary__-avOx{text-align:center;width:80%;margin:auto}","",{version:3,sources:["C:/Users/pmali/Desktop/ReactJS/14. Burger Builder Application - Redux/src/components/Order/CheckoutSummary/CheckoutSummary.css"],names:[],mappings:"AAAA,yCACI,kBAAmB,AACnB,UAAW,AACX,WAAa,CAChB",file:"CheckoutSummary.css",sourcesContent:[".CheckoutSummary {\n    text-align: center;\n    width: 80%;\n    margin: auto;\n}\n\n"],sourceRoot:""}]),t.locals={CheckoutSummary:"CheckoutSummary__CheckoutSummary__-avOx"}},199:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),l=n.n(c),u=n(7),s=n(56),p=n(200),d=n.n(p),A=n(14),m=n(57),f=n(193),b=n(58),h=n(13),C=n(15),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=function(e){function t(){var e,n,i,c;a(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{require:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Street"},value:"",validation:{require:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zipcode"},value:"",validation:{require:!0,minLength:6,maxLenght:6},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{require:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your email"},value:"",validation:{require:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},i.orderHandler=function(e){e.preventDefault();var t={};for(var n in i.state.orderForm)t[n]=i.state.orderForm[n].value;var r={ingredients:i.props.ings,price:i.props.price,orderData:t,userId:i.props.userId};i.props.onOrderBurger(r,i.props.token)},i.inputChangedHandler=function(e,t){var n=Object(C.b)(i.state.orderForm[t],{value:e.target.value,valid:Object(C.a)(e.target.value,i.state.orderForm[t].validation),touched:!0}),a=Object(C.b)(i.state.orderForm,r({},t,n)),o=!0;for(var c in a)o=a[c].valid&&o;i.setState({orderForm:a,formIsValid:o})},c=n,o(i,c)}return i(t,e),g(t,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=l.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return l.a.createElement(f.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}),l.a.createElement(s.a,{disabled:!this.state.formIsValid,clicked:this.orderHandler,btnType:"Success"},"Order"));return this.props.loading&&(r=l.a.createElement(m.a,null)),l.a.createElement("div",{className:d.a.ContactData},l.a.createElement("h4",null,"Enter Contact Data"),r)}}]),t}(c.Component),y=function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},x=function(e){return{onOrderBurger:function(t,n){return e(h.g(t,n))}}};t.a=Object(u.b)(y,x)(Object(b.a)(v,A.a))},200:function(e,t,n){var r=n(201);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(189)(r,a);r.locals&&(e.exports=r.locals)},201:function(e,t,n){t=e.exports=n(188)(!0),t.push([e.i,".ContactData__ContactData__1whvJ{margin:20px auto;text-align:center;width:80%;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media(min-width:600px){.ContactData__ContactData__1whvJ{width:500px}}.ContactData__Input__2uU-e{display:block}","",{version:3,sources:["C:/Users/pmali/Desktop/ReactJS/14. Burger Builder Application - Redux/src/containers/Checkout/ContactData/ContactData.css"],names:[],mappings:"AAAA,iCACI,iBAAkB,AAClB,kBAAmB,AACnB,UAAW,AACX,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,wBACI,iCACI,WAAa,CAChB,CACJ,AAED,2BACI,aAAc,CACjB",file:"ContactData.css",sourcesContent:[".ContactData{\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    width: 80%;\r\n    -webkit-box-shadow: 0 2px 3px #ccc;\r\n            box-shadow: 0 2px 3px #ccc;\r\n    border: 1px solid #eee;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n@media(min-width:600px){\r\n    .ContactData{       \r\n        width: 500px;\r\n    }    \r\n}\r\n\r\n.Input {\r\n    display:block;\r\n}"],sourceRoot:""}]),t.locals={ContactData:"ContactData__ContactData__1whvJ",Input:"ContactData__Input__2uU-e"}}});
//# sourceMappingURL=0.7921d192.chunk.js.map