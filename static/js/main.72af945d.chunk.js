(this.webpackJsonpinstaview=this.webpackJsonpinstaview||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"en":{"srcTextTitle":"Enter your original caption here","fixedTextTitle":"Copy your fixed caption here","inputPlaceholder":"Type something!","copy":"Tired of not being able to put line breaks in your Instagram post captions? With this tool you can insert new lines in your Instagram posts, simply enter and copy your caption below"},"es":{"srcTextTitle":"Ingresa tu caption aqu\xed","fixedTextTitle":"Copia tu caption ac\xe1","inputPlaceholder":"Escribe algo!","copy":"Cansado de no poder poner saltos de l\xednea en tus publicaciones de Instagram? Con esta herramienta puedes insertar saltos de l\xednea en el caption de tus posts de Instagram, solo copia y pega tu texto en la secci\xf3n de abajo"}}')},19:function(e,t,n){e.exports=n(29)},24:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(17),r=n.n(i),c=(n(24),n(32)),l=n(18),s=n(30);n(25);function u(){var e=Object(s.a)(),t=Object(a.useState)(e.formatMessage({id:"inputPlaceholder"})),n=Object(l.a)(t,2),i=n[0],r=n[1];return o.a.createElement("div",{className:"TextInputContainer"},o.a.createElement("div",{className:"TextInput"},o.a.createElement("div",{className:"TextInput--title"},o.a.createElement(c.a,{id:"srcTextTitle"})),o.a.createElement("textarea",{defaultValue:i,onChange:function(e){return r(e.target.value.replace(/\n/g,"\n\u2063\n"))}})),o.a.createElement("div",{className:"TextInput"},o.a.createElement("div",{className:"TextInput--title"},o.a.createElement(c.a,{id:"fixedTextTitle"})),o.a.createElement("textarea",{onClick:function(e){return e.target.select()},type:"text",value:i,contentEditable:!1,readOnly:!0})))}n(28);var d=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"Caption Fixer")),o.a.createElement("main",null,o.a.createElement("div",{className:"copy"},o.a.createElement(c.a,{id:"copy"})),o.a.createElement(u,null)))},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=n(31),g=n(14),h=Object.keys(g),v=(navigator.languages||["en"]).find((function(e){return-1!==h.indexOf(e)}))||"en";r.a.render(o.a.createElement(m.a,{messages:g[v],defaultLocale:"en",locale:v},o.a.createElement(d,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ig-caption-fixer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ig-caption-fixer","/service-worker.js");p?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.72af945d.chunk.js.map