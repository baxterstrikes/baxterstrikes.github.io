(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function u(){l=e(c.map((function(e){return e.props}))),d.canUseDOM?t(l):n&&(l=n(l))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){c.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(d,"canUseDOM",s),d}}},"8ypT":function(e,t,n){},"9eSz":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("INYr"),n("0mN4");var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a,i=r(n("PJYZ")),o=r(n("VbXa")),s=r(n("8OQS")),l=r(n("pVnL")),c=r(n("q1tI")),u=r(n("17x9")),d=function(e){var t=(0,l.default)({},e),n=t.resolutions,r=t.sizes,a=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=C([].concat(t.fluid))),t.fixed&&(t.fixed=C([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,n=e.fixed;return m(t||n).src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},h=Object.create({}),g=function(e){var t=d(e),n=p(t);return h[n]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:r,sizes:i}),c.default.createElement("source",{media:a,srcSet:n,sizes:i}))}))}function C(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function T(e){return e.map((function(e){var t=e.src,n=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function S(e){return e.map((function(e){var t=e.src,n=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function A(e,t){var n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?r:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var x=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return n&&(n.observe(e),E.set(e,t)),function(){n.unobserve(e),E.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?A(e,!0):"")+A(e)})).join("")+"<img "+c+o+s+n+r+t+i+a+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=c.default.forwardRef((function(e,t){var n=e.src,r=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(k,(0,l.default)({ref:t,src:n},i,{ariaHidden:o}));return r.length>1?c.default.createElement("picture",null,a(r),s):s})),k=c.default.forwardRef((function(e,t){var n=e.sizes,r=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:n,srcSet:r,src:a},m,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));k.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var N=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=b&&g(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!y&&v&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||b&&(y||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=c.default.createRef(),n.placeholderRef=t.placeholderRef||c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),n=p(t),h[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,r=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,C=e.loading,A=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:x?1:0,transition:N?"opacity "+b+"ms":"none"},s),j="boolean"==typeof y?"lightgray":y,P={transitionDelay:b+"ms"},R=(0,l.default)((0,l.default)((0,l.default)({opacity:this.state.imgLoaded?0:1},N&&P),s),f),M={title:t,alt:this.state.isVisible?"":n,style:R,className:p,itemProp:E};if(h){var H=h,q=m(h);return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),j&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&P)}),q.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:M,imageVariants:H,generateSources:S}),q.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:M,imageVariants:H,generateSources:T}),this.state.isVisible&&c.default.createElement("picture",null,w(H),c.default.createElement(k,{alt:n,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:C,draggable:A})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)((0,l.default)({alt:n,title:t,loading:C},q),{},{imageVariants:H}))}}))}if(g){var V=g,B=m(g),F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},i);return"inherit"===i.display&&delete F.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},j&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:j,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},N&&P)}),B.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:B.base64,spreadProps:M,imageVariants:V,generateSources:S}),B.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:B.tracedSVG,spreadProps:M,imageVariants:V,generateSources:T}),this.state.isVisible&&c.default.createElement("picture",null,w(V),c.default.createElement(k,{alt:n,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:C,draggable:A})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)((0,l.default)({alt:n,title:t,loading:C},B),{},{imageVariants:V}))}}))}return null},t}(c.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),j=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});N.propTypes={resolutions:I,sizes:j,fixed:u.default.oneOfType([I,u.default.arrayOf(I)]),fluid:u.default.oneOfType([j,u.default.arrayOf(j)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var P=N;t.default=P},Bl7J:function(e,t,n){"use strict";var r=n("gYX/"),a=n("q1tI"),i=n.n(a),o=n("ipGa"),s=n("Wbzz"),l=n("9eSz"),c=n.n(l),u=function(){var e=o.data,t=i.a.useState(!1),n=t[0],r=t[1],a=i.a.createElement("div",{className:"hidden sm:block sm:h-full"},i.a.createElement("ul",{className:"flex items-end h-full"},i.a.createElement("li",{className:"ml-12 leading-6"},i.a.createElement(s.Link,{activeClassName:"text-pumpkin",to:"/trash-panda"},"Trash Panda")),i.a.createElement("li",{className:"ml-12 leading-6"},i.a.createElement(s.Link,{activeClassName:"text-pumpkin",to:"/plant-parenthood"},"Plant Parenthood")),i.a.createElement("li",{className:"ml-12 leading-6"},i.a.createElement(s.Link,{activeClassName:"text-pumpkin",to:"/nextbook"},"Nextbook")),i.a.createElement("li",{className:"ml-12 leading-6"},i.a.createElement(s.Link,{activeClassName:"text-pumpkin",to:"/about"},"About Me"))));return n?i.a.createElement("nav",null,a,i.a.createElement("div",{className:"sm:hidden"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{style:{width:"1rem"},onClick:function(){return r(!1)}},i.a.createElement(c.a,{fluid:e.file.childImageSharp.fluid}))),i.a.createElement("ul",null,i.a.createElement("li",{className:"my-2"},i.a.createElement(s.Link,{activeClassName:"text-pumpkin",to:"/trash-panda"},"Trash Panda")),i.a.createElement("li",{className:"my-2"},i.a.createElement(s.Link,{activeClassName:"text-pumpkin",to:"/plant-parenthood"},"Plant Parenthood")),i.a.createElement("li",{className:"my-2"},i.a.createElement(s.Link,{activeClassName:"text-pumpkin",to:"/nextbook"},"Nextbook"))),i.a.createElement("div",{className:"my-4"},i.a.createElement(s.Link,{to:"/about"},"About Me")))):i.a.createElement("nav",null,a,i.a.createElement("div",{className:"sm:hidden"},i.a.createElement("button",{style:{width:"1rem"},onClick:function(){return r(!0)}},i.a.createElement(c.a,{fluid:e.file.childImageSharp.fluid}))))},d=function(e){var t=e.siteTitle;e.data;return i.a.createElement("header",{className:"my-4 flex justify-between"},i.a.createElement(s.Link,{to:"/",className:"text-nav1 font-bold"},t),i.a.createElement(u,null))},f=function(){return i.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{"clip-path":"url(#clip0)"},i.a.createElement("path",{d:"M18.395 5.39026C19.1293 4.57196 19.5574 3.71521 19.7075 2.83575C17.6313 1.09717 14.9605 0 12.0469 0C10.5425 0 9.10791 0.291138 7.78076 0.800537C10.0031 3.0271 11.8616 5.66345 13.3153 8.50928C15.4573 7.73474 17.2426 6.67511 18.395 5.39026Z",fill:"#272B2A"}),i.a.createElement("path",{d:"M19.4414 6.32971C18.1514 7.76746 16.2339 8.93677 13.9431 9.78656C14.2278 10.411 14.4895 11.0483 14.7358 11.694C15.9122 11.4409 17.1315 11.297 18.375 11.297C20.3326 11.297 22.2343 11.6292 23.9879 12.2396C23.9896 12.1592 24 12.0811 24 12.0001C24 8.90473 22.8073 6.08948 20.87 3.96436C20.5842 4.78796 20.1097 5.58502 19.4414 6.32971Z",fill:"#272B2A"}),i.a.createElement("path",{d:"M0.27417 9.47412C1.76886 9.73834 3.42487 9.89069 5.01569 9.89069C7.48175 9.89069 9.85059 9.54059 11.9618 8.93927C10.507 6.14417 8.63678 3.57172 6.40454 1.42041C3.36664 3.05426 1.02271 6.01068 0.27417 9.47412Z",fill:"#272B2A"}),i.a.createElement("path",{d:"M23.8666 13.6873C22.1703 13.0488 20.3033 12.7031 18.3749 12.7031C17.2938 12.7031 16.2322 12.8165 15.2083 13.0234C16.2477 16.1407 16.8492 19.5103 16.952 22.9352C20.6089 21.2809 23.2821 17.7962 23.8666 13.6873Z",fill:"#272B2A"}),i.a.createElement("path",{d:"M0 12.0002C0 15.6982 1.78253 19.0554 4.42841 21.2496C4.70874 19.3846 5.54956 17.5499 6.91901 16.0144C8.54791 14.1881 10.8083 12.8205 13.3682 12.0399C13.1299 11.4254 12.8698 10.823 12.5951 10.229C10.3077 10.9074 7.73145 11.2971 5.01562 11.2971C3.35413 11.2971 1.62506 11.1383 0.0576782 10.8629C0.0221558 11.2377 0 11.6164 0 12.0002H0Z",fill:"#272B2A"}),i.a.createElement("path",{d:"M7.96893 16.95C6.58557 18.5013 5.83612 20.3206 5.73999 22.1819C7.57343 23.3268 9.73059 23.9999 12.0469 23.9999C13.2647 23.9999 14.4397 23.8146 15.5477 23.4746C15.4938 19.9736 14.9061 16.5312 13.8375 13.3628C11.4983 14.0643 9.44073 15.2997 7.96893 16.95Z",fill:"#272B2A"})),i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"clip0"},i.a.createElement("rect",{width:"24",height:"24",fill:"white"}))))},p=function(){return i.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{"clip-path":"url(#clip0)"},i.a.createElement("path",{d:"M7.996 21.324C7.996 22.019 7.475 22.306 6.898 22.019L0.67 18.906C0.482 18.817 0.324 18.668 0.195 18.459C0.066 18.25 0 18.042 0 17.837V2.61005C0 2.04205 0.341 1.78505 1.112 2.16905L7.956 5.58905C8.055 5.68805 7.982 5.00805 7.996 21.324ZM8.853 7.00405L16.005 18.572L8.853 15.019V7.00405ZM24 7.24505V21.324C24 21.547 23.938 21.727 23.812 21.865C23.687 22.003 23.517 22.072 23.303 22.072C23.089 22.072 22.879 22.014 22.674 21.898L16.768 18.959L24 7.24505ZM23.96 5.64205C23.96 5.66905 22.815 7.53705 20.525 11.245C18.235 14.953 16.893 17.125 16.5 17.757L11.277 9.28805L15.616 2.24905C15.852 1.86105 16.336 1.79305 16.661 1.95505L23.907 5.56205C23.942 5.57905 23.96 5.60605 23.96 5.64205Z",fill:"#272B2A"})),i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"clip0"},i.a.createElement("rect",{width:"24",height:"24",fill:"white"}))))},m=function(){return i.a.createElement("svg",{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{"clip-path":"url(#clip0)"},i.a.createElement("path",{d:"M21.6 0H2.4C1.08 0 0 1.08 0 2.4V16.8C0 18.12 1.08 19.2 2.4 19.2H21.6C22.92 19.2 24 18.12 24 16.8V2.4C24 1.08 22.92 0 21.6 0ZM21.6 16.8H19.2V6.24L12 10.8L4.8 6.24V16.8H2.4V2.4H3.84L12 7.44L20.16 2.4H21.6V16.8Z",fill:"#272B2A"})),i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"clip0"},i.a.createElement("rect",{width:"24",height:"19.3333",fill:"white"}))))},h=function(){return i.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM8.51294 18.1406H5.59039V9.34808H8.51294V18.1406ZM7.05176 8.14746H7.03271C6.052 8.14746 5.41772 7.47235 5.41772 6.6286C5.41772 5.76581 6.07141 5.10938 7.07117 5.10938C8.07092 5.10938 8.68616 5.76581 8.7052 6.6286C8.7052 7.47235 8.07092 8.14746 7.05176 8.14746ZM19.051 18.1406H16.1288V13.4368C16.1288 12.2547 15.7057 11.4485 14.6483 11.4485C13.8409 11.4485 13.3601 11.9923 13.1488 12.5173C13.0715 12.7051 13.0527 12.9677 13.0527 13.2305V18.1406H10.1303C10.1303 18.1406 10.1686 10.173 10.1303 9.34808H13.0527V10.593C13.441 9.9939 14.1359 9.14172 15.6865 9.14172C17.6093 9.14172 19.051 10.3984 19.051 13.099V18.1406Z",fill:"#272B2A"}))},g=function(){return i.a.createElement("footer",{className:"mt-16 mb-32 flex justify-center items-center"},i.a.createElement("a",{className:"px-8",href:"https://dribbble.com/lynnb"},i.a.createElement(f,null)),i.a.createElement("a",{className:"px-8",href:"https://medium.com/@lynnbaxter"},i.a.createElement(p,null)),i.a.createElement("a",{className:"px-8",href:"mailto://lynnmarieb@gmail.com"},i.a.createElement(m,null)),i.a.createElement("a",{className:"px-8",href:"https://www.linkedin.com/in/lynnmariebaxter"},i.a.createElement(h,null)))};n("8ypT"),t.a=function(e){var t=e.children,n=r.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"bg-white text-outerspace font-sans"},i.a.createElement("div",{className:"px-4"},i.a.createElement(d,{siteTitle:n.site.siteMetadata.title}),i.a.createElement("main",{className:"container m-auto"},t),i.a.createElement(g,null))))}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Lynn Baxter","description":"","author":"@lynnmariebee"}}}}')},EK0E:function(e,t,n){"use strict";var r,a=n("dyZX"),i=n("CkkT")(0),o=n("KroJ"),s=n("Z6vF"),l=n("czNK"),c=n("ZD67"),u=n("0/R4"),d=n("s5qY"),f=n("s5qY"),p=!a.ActiveXObject&&"ActiveXObject"in a,m=s.getWeak,h=Object.isExtensible,g=c.ufstore,y=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(u(e)){var t=m(e);return!0===t?g(d(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(d(this,"WeakMap"),e,t)}},v=e.exports=n("4LiD")("WeakMap",y,b,c,!0,!0);f&&p&&(l((r=c.getConstructor(y,"WeakMap")).prototype,b),s.NEED=!0,i(["delete","has","get","set"],(function(e){var t=v.prototype,n=t[e];o(t,e,(function(t,a){if(u(t)&&!h(t)){this._f||(this._f=new r);var i=this._f[e](t,a);return"set"==e?this:i}return n.call(this,t,a)}))})))},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},INYr:function(e,t,n){"use strict";var r=n("XKFU"),a=n("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(i)},OGtf:function(e,t,n){var r=n("XKFU"),a=n("eeVq"),i=n("vhPU"),o=/"/g,s=function(e,t,n,r){var a=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),i=n("hswa").f,o=n("kJMx").f,s=n("quPj"),l=n("C/va"),c=r.RegExp,u=c,d=c.prototype,f=/a/g,p=/a/g,m=new c(f)!==f;if(n("nh4g")&&(!m||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,c(f)!=f||c(p)==p||"/a/i"!=c(f,"i")})))){c=function(e,t){var n=this instanceof c,r=s(e),i=void 0===t;return!n&&r&&e.constructor===c&&i?e:a(m?new u(r&&!i?e.source:e,t):u((r=e instanceof c)?e.source:e,r&&i?l.call(e):t),n?this:d,c)};for(var h=function(e){e in c||i(c,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},g=o(u),y=0;g.length>y;)h(g[y++]);d.constructor=c,c.prototype=d,n("KroJ")(r,"RegExp",c)}n("elZq")("RegExp")},ZD67:function(e,t,n){"use strict";var r=n("3Lyj"),a=n("Z6vF").getWeak,i=n("y3w9"),o=n("0/R4"),s=n("9gX7"),l=n("SlkY"),c=n("CkkT"),u=n("aagx"),d=n("s5qY"),f=c(5),p=c(6),m=0,h=function(e){return e._l||(e._l=new g)},g=function(){this.a=[]},y=function(e,t){return f(e.a,(function(e){return e[0]===t}))};g.prototype={get:function(e){var t=y(this,e);if(t)return t[1]},has:function(e){return!!y(this,e)},set:function(e,t){var n=y(this,e);n?n[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,n,i){var c=e((function(e,r){s(e,c,t,"_i"),e._t=t,e._i=m++,e._l=void 0,null!=r&&l(r,n,e[i],e)}));return r(c.prototype,{delete:function(e){if(!o(e))return!1;var n=a(e);return!0===n?h(d(this,t)).delete(e):n&&u(n,this._i)&&delete n[this._i]},has:function(e){if(!o(e))return!1;var n=a(e);return!0===n?h(d(this,t)).has(e):n&&u(n,this._i)}}),c},def:function(e,t,n){var r=a(i(t),!0);return!0===r?h(e).set(t,n):r[e._i]=n,e},ufstore:h}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var s,l,c,u=r(t),d=r(n);if(u&&d){if((l=t.length)!=n.length)return!1;for(s=l;0!=s--;)if(!e(t[s],n[s]))return!1;return!0}if(u!=d)return!1;var f=t instanceof Date,p=n instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==n.getTime();var m=t instanceof RegExp,h=n instanceof RegExp;if(m!=h)return!1;if(m&&h)return t.toString()==n.toString();var g=a(t);if((l=g.length)!==a(n).length)return!1;for(s=l;0!=s--;)if(!i.call(n,g[s]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(s=l;0!=s--;)if(!("_owner"===(c=g[s])&&t.$$typeof||e(t[c],n[c])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"gYX/":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Lynn Baxter"}}}}')},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=i.call(this);return e==e?a.call(this):"Invalid Date"}))},ipGa:function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAACE4AAAhOAFFljFgAAAAjklEQVQ4y2NQ19b6QylW09L8qaGr8x9Iz2UAMSjGOtr/tfX1QAYuY1DT0gqjHGuGAuloIG3GMPiBurZmBqUY6NU0IJ2npqXhyAAKTEqxFhDrGRmCImUj0IVaOyjFwAjZBqQPAw0sHgKRoqqpJUIlLKqmqckDStivKMeaz4H0dyA9CRQp/6mBtfR0QbG8CACgRtYPdvl0FwAAAABJRU5ErkJggg==","aspectRatio":1.5897435897435896,"src":"/static/fae9860601cc96cc57163f4d381706dd/73f23/nav-icon.png","srcSet":"/static/fae9860601cc96cc57163f4d381706dd/73f23/nav-icon.png 62w","sizes":"(max-width: 62px) 100vw, 62px"}}}}}')},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,i,o,s=n("17x9"),l=n.n(s),c=n("8+s/"),u=n.n(c),d=n("bmMU"),f=n.n(d),p=n("q1tI"),m=n.n(p),h=n("MgzW"),g=n.n(h),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(E).map((function(e){return E[e]})),"charset"),C="cssText",T="href",S="http-equiv",A="innerHTML",x="itemprop",O="name",L="property",k="rel",N="src",I="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",R="defer",M="encodeSpecialCharacters",H="onChangeClientState",q="titleTemplate",V=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),B=[E.NOSCRIPT,E.SCRIPT,E.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,E.TITLE),n=Q(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,P);return t||r||void 0},Y=function(e){return Q(e,H)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],l=s.toLowerCase();-1===t.indexOf(l)||n===k&&"canonical"===e[n].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==A&&s!==C&&s!==x||(n=s)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][c]&&(a[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],l=g()({},r[s],a[s]);r[s]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;le(E.BODY,r),le(E.HTML,a),se(d,f);var p={baseTag:ce(E.BASE,n),linkTags:ce(E.LINK,i),metaTags:ce(E.META,o),noscriptTags:ce(E.NOSCRIPT,s),scriptTags:ce(E.SCRIPT,c),styleTags:ce(E.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),le(E.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var l=o[s],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),-1===a.indexOf(l)&&a.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===C)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=de(n,r),[m.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Z(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===A||n===C){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===A||e===C)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Z(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(E.BASE,t,r),bodyAttributes:fe(y,n,r),htmlAttributes:fe(b,a,r),link:fe(E.LINK,i,r),meta:fe(E.META,o,r),noscript:fe(E.NOSCRIPT,s,r),script:fe(E.SCRIPT,l,r),style:fe(E.STYLE,c,r),title:fe(E.TITLE,{title:d,titleAttributes:f},r)}},me=u()((function(e){return{baseTag:J([T,I],e),bodyAttributes:G(y,e),defer:Q(e,R),encode:Q(e,M),htmlAttributes:G(b,e),linkTags:X(E.LINK,[k,T],e),metaTags:X(E.META,[O,w,S,L,x],e),noscriptTags:X(E.NOSCRIPT,[A],e),onChangeClientState:Y(e),scriptTags:X(E.SCRIPT,[N,A],e),styleTags:X(E.STYLE,[C],e),title:K(e),titleAttributes:G(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),he=(a=me,o=i=function(e){function t(){return z(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case E.TITLE:return W({},a,((t={})[r.type]=o,t.titleAttributes=W({},i),t));case E.BODY:return W({},a,{bodyAttributes:W({},i)});case E.HTML:return W({},a,{htmlAttributes:W({},i)})}return W({},a,((n={})[r.type]=W({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[V[n]||n]=e[n],t}),t)}(D(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=D(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},_(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),i.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("EH9Q"),a=n("q1tI"),i=n.n(a),o=n("qhky");function s(e){var t=e.description,n=e.lang,a=e.meta,s=e.title,l=r.data.site,c=t||l.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(a)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-3645414893be3af9ecdc.js.map