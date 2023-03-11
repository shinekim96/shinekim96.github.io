/*! For license information please see echarts-wordcloud.min.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("echarts")):"function"==typeof define&&define.amd?define(["echarts"],e):"object"==typeof exports?exports["echarts-wordcloud"]=e(require("echarts")):t["echarts-wordcloud"]=e(t.echarts)}(self,(function(t){return(()=>{"use strict";var e={638:(t,e,a)=>{a.r(e);var o=a(83);o.extendSeriesModel({type:"series.wordCloud",visualStyleAccessPath:"textStyle",visualStyleMapper:function(t){return{fill:t.get("color")}},visualDrawType:"fill",optionUpdated:function(){var t=this.option;t.gridSize=Math.max(Math.floor(t.gridSize),4)},getInitialData:function(t,e){var a=o.helper.createDimensions(t.data,{coordDimensions:["value"]}),i=new o.List(a,this);return i.initData(t.data),i},defaultOption:{maskImage:null,shape:"circle",left:"center",top:"center",width:"70%",height:"80%",sizeRange:[12,60],rotationRange:[-90,90],rotationStep:45,gridSize:8,drawOutOfBound:!1,textStyle:{fontWeight:"normal"}}}),o.extendChartView({type:"wordCloud",render:function(t,e,a){var i=this.group;i.removeAll();var r=t.getData(),n=t.get("gridSize");t.layoutInstance.ondraw=function(e,a,s,l){var d=r.getItemModel(s),u=d.getModel("textStyle"),f=new o.graphic.Text({style:o.helper.createTextStyle(u),scaleX:1/l.info.mu,scaleY:1/l.info.mu,x:(l.gx+l.info.gw/2)*n,y:(l.gy+l.info.gh/2)*n,rotation:l.rot});f.setStyle({x:l.info.fillTextOffsetX,y:l.info.fillTextOffsetY+.5*a,text:e,verticalAlign:"middle",fill:r.getItemVisual(s,"style").fill,fontSize:a}),i.add(f),r.setItemGraphicEl(s,f),f.ensureState("emphasis").style=o.helper.createTextStyle(d.getModel(["emphasis","textStyle"]),{state:"emphasis"}),f.ensureState("blur").style=o.helper.createTextStyle(d.getModel(["blur","textStyle"]),{state:"blur"}),o.helper.enableHoverEmphasis(f,d.get(["emphasis","focus"]),d.get(["emphasis","blurScope"])),f.stateTransition={duration:t.get("animation")?t.get(["stateAnimation","duration"]):0,easing:t.get(["stateAnimation","easing"])},f.__highDownDispatcher=!0},this._model=t},remove:function(){this.group.removeAll(),this._model.layoutInstance.dispose()},dispose:function(){this._model.layoutInstance.dispose()}}),window.setImmediate||(window.setImmediate=window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],e="zero-timeout-message";return window.addEventListener("message",(function(a){if("string"==typeof a.data&&a.data.substr(0,e.length)===e){a.stopImmediatePropagation();var o=parseInt(a.data.substr(e.length),36);t[o]&&(t[o](),t[o]=void 0)}}),!0),window.clearImmediate=function(e){t[e]&&(t[e]=void 0)},function(a){var o=t.length;return t.push(a),window.postMessage(e+o.toString(36),"*"),o}}()||function(t){window.setTimeout(t,0)}),window.clearImmediate||(window.clearImmediate=window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)});var i=function(){var t=document.createElement("canvas");if(!t||!t.getContext)return!1;var e=t.getContext("2d");return!!(e.getImageData&&e.fillText&&Array.prototype.some&&Array.prototype.push)}(),r=function(){if(i){for(var t,e,a=document.createElement("canvas").getContext("2d"),o=20;o;){if(a.font=o.toString(10)+"px sans-serif",a.measureText("Ｗ").width===t&&a.measureText("m").width===e)return o+1;t=a.measureText("Ｗ").width,e=a.measureText("m").width,o--}return 0}}(),n=function(t){for(var e,a,o=t.length;o;e=Math.floor(Math.random()*o),a=t[--o],t[o]=t[e],t[e]=a);return t},s=function(t,e){if(i){Array.isArray(t)||(t=[t]),t.forEach((function(e,a){if("string"==typeof e){if(t[a]=document.getElementById(e),!t[a])throw"The element id specified is not found."}else if(!e.tagName&&!e.appendChild)throw"You must pass valid HTML elements, or ID of the element."}));var a={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,layoutAnimation:!0,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationStep:.1,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(e)for(var o in e)o in a&&(a[o]=e[o]);if("function"!=typeof a.weightFactor){var s=a.weightFactor;a.weightFactor=function(t){return t*s}}if("function"!=typeof a.shape)switch(a.shape){case"circle":default:a.shape="circle";break;case"cardioid":a.shape=function(t){return 1-Math.sin(t)};break;case"diamond":case"square":a.shape=function(t){var e=t%(2*Math.PI/4);return 1/(Math.cos(e)+Math.sin(e))};break;case"triangle-forward":a.shape=function(t){var e=t%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"triangle":case"triangle-upright":a.shape=function(t){var e=(t+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"pentagon":a.shape=function(t){var e=(t+.955)%(2*Math.PI/5);return 1/(Math.cos(e)+.726543*Math.sin(e))};break;case"star":a.shape=function(t){var e=(t+.955)%(2*Math.PI/10);return(t+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-e)+3.07768*Math.sin(2*Math.PI/10-e)):1/(Math.cos(e)+3.07768*Math.sin(e))}}a.gridSize=Math.max(Math.floor(a.gridSize),4);var l,d,u,f,c,h,m,g=a.gridSize,v=g-a.maskGapWidth,w=Math.abs(a.maxRotation-a.minRotation),p=Math.min(a.maxRotation,a.minRotation),y=a.rotationStep;switch(a.color){case"random-dark":m=function(){return R(10,50)};break;case"random-light":m=function(){return R(50,90)};break;default:"function"==typeof a.color&&(m=a.color)}var x=null;"function"==typeof a.classes&&(x=a.classes);var M,S=!1,b=[],I=function(t){var e,a,o=t.currentTarget,i=o.getBoundingClientRect();t.touches?(e=t.touches[0].clientX,a=t.touches[0].clientY):(e=t.clientX,a=t.clientY);var r=e-i.left,n=a-i.top,s=Math.floor(r*(o.width/i.width||1)/g),l=Math.floor(n*(o.height/i.height||1)/g);return b[s][l]},T=function(t){var e=I(t);M!==e&&(M=e,e?a.hover(e.item,e.dimension,t):a.hover(void 0,void 0,t))},C=function(t){var e=I(t);e&&(a.click(e.item,e.dimension,t),t.preventDefault())},E=[],k=function(t){if(E[t])return E[t];var e=8*t,o=e,i=[];for(0===t&&i.push([f[0],f[1],0]);o--;){var r=1;"circle"!==a.shape&&(r=a.shape(o/e*2*Math.PI)),i.push([f[0]+t*r*Math.cos(-o/e*2*Math.PI),f[1]+t*r*Math.sin(-o/e*2*Math.PI)*a.ellipticity,o/e*2*Math.PI])}return E[t]=i,i},O=function(){return a.abortThreshold>0&&(new Date).getTime()-h>a.abortThreshold},P=function(e,a,o,i,r){e>=d||a>=u||e<0||a<0||(l[e][a]=!1,o&&t[0].getContext("2d").fillRect(e*g,a*g,v,v),S&&(b[e][a]={item:r,dimension:i}))},D=function(e,a,o){if(a)return!t.some((function(t){var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,!0,a,o||{}),!t.dispatchEvent(i)}),this);t.forEach((function(t){var i=document.createEvent("CustomEvent");i.initCustomEvent(e,!0,a,o||{}),t.dispatchEvent(i)}),this)};!function(){var e=t[0];if(e.getContext)d=Math.ceil(e.width/g),u=Math.ceil(e.height/g);else{var o=e.getBoundingClientRect();d=Math.ceil(o.width/g),u=Math.ceil(o.height/g)}if(D("wordcloudstart",!0)){var i,s,v,I,E;if(f=a.origin?[a.origin[0]/g,a.origin[1]/g]:[d/2,u/2],c=Math.floor(Math.sqrt(d*d+u*u)),l=[],!e.getContext||a.clearCanvas)for(t.forEach((function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=a.backgroundColor,e.clearRect(0,0,d*(g+1),u*(g+1)),e.fillRect(0,0,d*(g+1),u*(g+1))}else t.textContent="",t.style.backgroundColor=a.backgroundColor,t.style.position="relative"})),i=d;i--;)for(l[i]=[],s=u;s--;)l[i][s]=!0;else{var R=document.createElement("canvas").getContext("2d");R.fillStyle=a.backgroundColor,R.fillRect(0,0,1,1);var A,z,F=R.getImageData(0,0,1,1).data,L=e.getContext("2d").getImageData(0,0,d*g,u*g).data;for(i=d;i--;)for(l[i]=[],s=u;s--;){z=g;t:for(;z--;)for(A=g;A--;)for(v=4;v--;)if(L[4*((s*g+z)*d*g+(i*g+A))+v]!==F[v]){l[i][s]=!1;break t}!1!==l[i][s]&&(l[i][s]=!0)}L=R=F=void 0}if(a.hover||a.click){for(S=!0,i=d+1;i--;)b[i]=[];a.hover&&e.addEventListener("mousemove",T),a.click&&(e.addEventListener("click",C),e.addEventListener("touchstart",C),e.addEventListener("touchend",(function(t){t.preventDefault()})),e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),e.addEventListener("wordcloudstart",(function t(){e.removeEventListener("wordcloudstart",t),e.removeEventListener("mousemove",T),e.removeEventListener("click",C),M=void 0}))}v=0;var W=!0;a.layoutAnimation?0!==a.wait?(I=window.setTimeout,E=window.clearTimeout):(I=window.setImmediate,E=window.clearImmediate):(I=function(t){t()},E=function(){W=!1});var B=function(e,a){t.forEach((function(t){t.removeEventListener(e,a)}),this)},X=function t(){B("wordcloudstart",t),E(Y)};!function(e,a){t.forEach((function(t){t.addEventListener("wordcloudstart",a)}),this)}(0,X);var Y=(a.layoutAnimation?I:setTimeout)((function e(){if(W){if(v>=a.list.length)return E(Y),D("wordcloudstop",!1),void B("wordcloudstart",X);h=(new Date).getTime();var o=function(e){var o,i,s;Array.isArray(e)?(o=e[0],i=e[1]):(o=e.word,i=e.weight,s=e.attributes);var f,h,v,M=0===a.rotateRatio||Math.random()>a.rotateRatio?0:0===w?p:p+Math.round(Math.random()*w/y)*y,b=function(t,e,o){var i=a.weightFactor(e);if(i<=a.minSize)return!1;var n=1;i<r&&(n=function(){for(var t=2;t*i<r;)t+=2;return t}());var s=document.createElement("canvas"),l=s.getContext("2d",{willReadFrequently:!0});l.font=a.fontWeight+" "+(i*n).toString(10)+"px "+a.fontFamily;var d=l.measureText(t).width/n,u=Math.max(i*n,l.measureText("m").width,l.measureText("Ｗ").width)/n,f=d+2*u,c=3*u,h=Math.ceil(f/g),m=Math.ceil(c/g);f=h*g,c=m*g;var v=-d/2,w=.4*-u,p=Math.ceil((f*Math.abs(Math.sin(o))+c*Math.abs(Math.cos(o)))/g),y=Math.ceil((f*Math.abs(Math.cos(o))+c*Math.abs(Math.sin(o)))/g),x=y*g,M=p*g;s.setAttribute("width",x),s.setAttribute("height",M),l.scale(1/n,1/n),l.translate(x*n/2,M*n/2),l.rotate(-o),l.font=a.fontWeight+" "+(i*n).toString(10)+"px "+a.fontFamily,l.fillStyle="#000",l.textBaseline="middle",l.fillText(t,v*n,(w+.5*i)*n);var S=l.getImageData(0,0,x,M).data;if(O())return!1;for(var b,I,T,C=[],E=y,k=[p/2,y/2,p/2,y/2];E--;)for(b=p;b--;){T=g;t:for(;T--;)for(I=g;I--;)if(S[4*((b*g+T)*x+(E*g+I))+3]){C.push([E,b]),E<k[3]&&(k[3]=E),E>k[1]&&(k[1]=E),b<k[0]&&(k[0]=b),b>k[2]&&(k[2]=b);break t}}return{mu:n,occupied:C,bounds:k,gw:y,gh:p,fillTextOffsetX:v,fillTextOffsetY:w,fillTextWidth:d,fillTextHeight:u,fontSize:i}}(o,i,M);if(!b)return!1;if(O())return!1;if(!a.drawOutOfBound){var I=b.bounds;if(I[1]-I[3]+1>d||I[2]-I[0]+1>u)return!1}for(var T=c+1;T--;){var C=k(c-T);a.shuffle&&(C=[].concat(C),n(C));for(var E=0;E<C.length;E++){var D=(f=C[E],h=void 0,v=void 0,h=Math.floor(f[0]-b.gw/2),v=Math.floor(f[1]-b.gh/2),b.gw,b.gh,!!function(t,e,o,i,r){for(var n=r.length;n--;){var s=t+r[n][0],f=e+r[n][1];if(s>=d||f>=u||s<0||f<0){if(!a.drawOutOfBound)return!1}else if(!l[s][f])return!1}return!0}(h,v,0,0,b.occupied)&&(function(e,o,i,r,n,s,l,d,u){var f,c,h=i.fontSize;f=m?m(r,n,h,s,l):a.color,c=x?x(r,n,h,s,l):a.classes;var v=i.bounds;v[3],v[0],v[1],v[3],v[2],v[0],t.forEach((function(t){if(t.getContext){var n=t.getContext("2d"),s=i.mu;n.save(),n.scale(1/s,1/s),n.font=a.fontWeight+" "+(h*s).toString(10)+"px "+a.fontFamily,n.fillStyle=f,n.translate((e+i.gw/2)*g*s,(o+i.gh/2)*g*s),0!==d&&n.rotate(-d),n.textBaseline="middle",n.fillText(r,i.fillTextOffsetX*s,(i.fillTextOffsetY+.5*h)*s),n.restore()}else{var l=document.createElement("span"),m="";m="rotate("+-d/Math.PI*180+"deg) ",1!==i.mu&&(m+="translateX(-"+i.fillTextWidth/4+"px) scale("+1/i.mu+")");var v={position:"absolute",display:"block",font:a.fontWeight+" "+h*i.mu+"px "+a.fontFamily,left:(e+i.gw/2)*g+i.fillTextOffsetX+"px",top:(o+i.gh/2)*g+i.fillTextOffsetY+"px",width:i.fillTextWidth+"px",height:i.fillTextHeight+"px",lineHeight:h+"px",whiteSpace:"nowrap",transform:m,webkitTransform:m,msTransform:m,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};for(var w in f&&(v.color=f),l.textContent=r,v)l.style[w]=v[w];if(u)for(var p in u)l.setAttribute(p,u[p]);c&&(l.className+=c),t.appendChild(l)}}))}(h,v,b,o,i,c-T,f[2],M,s),function(e,o,i,r,n,s){var l,f,c=n.occupied,h=a.drawMask;if(h&&((l=t[0].getContext("2d")).save(),l.fillStyle=a.maskColor),S){var m=n.bounds;f={x:(e+m[3])*g,y:(o+m[0])*g,w:(m[1]-m[3]+1)*g,h:(m[2]-m[0]+1)*g}}for(var v=c.length;v--;){var w=e+c[v][0],p=o+c[v][1];w>=d||p>=u||w<0||p<0||P(w,p,h,f,s)}h&&l.restore()}(h,v,0,0,b,e),{gx:h,gy:v,rot:M,info:b}));if(D)return D}}return null}(a.list[v]),i=!D("wordclouddrawn",!0,{item:a.list[v],drawn:o});if(O()||i)return E(Y),a.abort(),D("wordcloudabort",!1),D("wordcloudstop",!1),void B("wordcloudstart",X);v++,Y=I(e,a.wait)}}),a.wait)}}()}function R(t,e){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}};s.isSupported=i,s.minFontSize=r;const l=s;if(!l.isSupported)throw new Error("Sorry your browser not support wordCloud");o.registerLayout((function(t,e){t.eachSeriesByType("wordCloud",(function(a){var i=o.helper.getLayoutRect(a.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),r=a.getData(),n=document.createElement("canvas");n.width=i.width,n.height=i.height;var s=n.getContext("2d"),d=a.get("maskImage");if(d)try{s.drawImage(d,0,0,n.width,n.height),function(t){for(var e=t.getContext("2d"),a=e.getImageData(0,0,t.width,t.height),o=e.createImageData(a),i=0,r=0,n=0;n<a.data.length;n+=4)a.data[n+3]>128&&(i+=l=a.data[n]+a.data[n+1]+a.data[n+2],++r);var s=i/r;for(n=0;n<a.data.length;n+=4){var l=a.data[n]+a.data[n+1]+a.data[n+2];a.data[n+3]<128||l>s?(o.data[n]=0,o.data[n+1]=0,o.data[n+2]=0,o.data[n+3]=0):(o.data[n]=255,o.data[n+1]=255,o.data[n+2]=255,o.data[n+3]=255)}e.putImageData(o,0,0)}(n)}catch(t){console.error("Invalid mask image"),console.error(t.toString())}var u=a.get("sizeRange"),f=a.get("rotationRange"),c=r.getDataExtent("value"),h=Math.PI/180,m=a.get("gridSize");function g(t){var e=t.detail.item;t.detail.drawn&&a.layoutInstance.ondraw&&(t.detail.drawn.gx+=i.x/m,t.detail.drawn.gy+=i.y/m,a.layoutInstance.ondraw(e[0],e[1],e[2],t.detail.drawn))}l(n,{list:r.mapArray("value",(function(t,e){var a=r.getItemModel(e);return[r.getName(e),a.get("textStyle.fontSize",!0)||o.number.linearMap(t,c,u),e]})).sort((function(t,e){return e[1]-t[1]})),fontFamily:a.get("textStyle.fontFamily")||a.get("emphasis.textStyle.fontFamily")||t.get("textStyle.fontFamily"),fontWeight:a.get("textStyle.fontWeight")||a.get("emphasis.textStyle.fontWeight")||t.get("textStyle.fontWeight"),gridSize:m,ellipticity:i.height/i.width,minRotation:f[0]*h,maxRotation:f[1]*h,clearCanvas:!d,rotateRatio:1,rotationStep:a.get("rotationStep")*h,drawOutOfBound:a.get("drawOutOfBound"),layoutAnimation:a.get("layoutAnimation"),shuffle:!1,shape:a.get("shape")}),n.addEventListener("wordclouddrawn",g),a.layoutInstance&&a.layoutInstance.dispose(),a.layoutInstance={ondraw:null,dispose:function(){n.removeEventListener("wordclouddrawn",g),n.addEventListener("wordclouddrawn",(function(t){t.preventDefault()}))}}}))})),o.registerPreprocessor((function(t){var e=(t||{}).series;!o.util.isArray(e)&&(e=e?[e]:[]);var a=["shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];function i(t){t&&o.util.each(a,(function(e){t.hasOwnProperty(e)&&(t["text"+o.format.capitalFirst(e)]=t[e])}))}o.util.each(e,(function(t){if(t&&"wordCloud"===t.type){var e=t.textStyle||{};i(e.normal),i(e.emphasis)}}))}))},83:e=>{e.exports=t}},a={};function o(t){if(a[t])return a[t].exports;var i=a[t]={exports:{}};return e[t](i,i.exports,o),i.exports}return o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o(638)})()}));
//# sourceMappingURL=echarts-wordcloud.min.js.map