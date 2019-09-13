(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{505:function(t,e,o){o(195),o(506),t.exports=o(507)},507:function(t,e,o){"use strict";o.r(e),function(t){var e=o(430),n=o(123);Object(n.configureActions)({limit:10});const i=o(520);Object(e.configure)(function(){i.keys().forEach(t=>i(t))},t),console.log("configuring actions")}.call(this,o(432)(t))},520:function(t,e,o){var n={"./Joystick.stories.tsx":521};function i(t){var e=s(t);return o(e)}function s(t){var e=n[t];if(!(e+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id=520},521:function(t,e,o){"use strict";(function(t){var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(2),s=o(430),r=o(123),a=o(522),c=s.storiesOf("Joystick Examples",t);c.add("Default joystick",function(){return i.createElement(a.Joystick,{start:r.action("Started"),move:r.action("Moved"),stop:r.action("Stopped")})}),c.add("Yellow (custom colors) joystick",function(){return i.createElement(a.Joystick,{start:r.action("Started"),baseColor:"#FFFF99",stickColor:"#FFD300",move:r.action("Moved"),stop:r.action("Stopped")})}),c.add("50ms throttled joystick",function(){return i.createElement(a.Joystick,{start:r.action("Started"),throttle:50,move:r.action("Moved"),stop:r.action("Stopped")})}),c.add("100ms throttled joystick",function(){return i.createElement(a.Joystick,{start:r.action("Started"),throttle:100,move:r.action("Moved"),stop:r.action("Stopped")})}),c.add("200ms throttled joystick",function(){return i.createElement(a.Joystick,{start:r.action("Started"),throttle:200,move:r.action("Moved"),stop:r.action("Stopped")})}),c.add("500ms throttled joystick",function(){return i.createElement(a.Joystick,{start:r.action("Started"),throttle:500,move:r.action("Moved"),stop:r.action("Stopped")})}),c.add("HUGE joystick",function(){return i.createElement(a.Joystick,{start:r.action("Started"),move:r.action("Moved"),stop:r.action("Stopped"),size:500})}),c.add("Tiny joystick",function(){return i.createElement(a.Joystick,{start:r.action("Started"),move:r.action("Moved"),stop:r.action("Stopped"),size:50})}),c.add("Disabled joystick",function(){return i.createElement(a.Joystick,{start:r.action("Started"),move:r.action("Moved"),stop:r.action("Stopped"),disabled:!0})});var u=function(t){function e(e){var o=t.call(this,e)||this;return o.state={direction:"Stopped"},o}return n(e,t),e.prototype._handleMove=function(t){this.setState({direction:t.direction})},e.prototype._handleStop=function(t){this.setState({direction:"Stopped"})},e.prototype.render=function(){return i.createElement("div",null,i.createElement(a.Joystick,{move:this._handleMove.bind(this),stop:this._handleStop.bind(this)}),i.createElement("p",null,this.state.direction))},e}(i.Component);c.add("Default with direction text",function(){return i.createElement(u,null)})}).call(this,o(93)(t))},522:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i,s=o(2);!function(t){t.MouseDown="mousedown",t.MouseMove="mousemove",t.MouseUp="mouseup",t.TouchStart="touchstart",t.TouchMove="touchmove",t.TouchEnd="touchend"}(i||(i={}));var r=function(t){function e(e){var o=t.call(this,e)||this;return o.state={dragging:!1},o._stickRef=s.createRef(),o._baseRef=s.createRef(),o._throttleMoveCallback=function(){var t=0;return function(e){var n=(new Date).getTime(),i=o.props.throttle||0;if(!(n-t<i))return t=n,o.props.move?o.props.move(e):void 0}}(),o._boundMouseUp=function(){o._mouseUp()},o._boundMouseMove=function(t){o._mouseMove(t)},o}return n(e,t),e.prototype._updatePos=function(t){var e=this;window.requestAnimationFrame(function(){e.setState({coordinates:t})}),this._throttleMoveCallback({type:"move",x:t.relativeX,y:-t.relativeY,direction:t.direction})},e.prototype._mouseDown=function(t){!0!==this.props.disabled&&(this._parentRect=this._baseRef.current.getBoundingClientRect(),this.setState({dragging:!0}),t.type===i.MouseDown?(window.addEventListener(i.MouseUp,this._boundMouseUp),window.addEventListener(i.MouseMove,this._boundMouseMove)):(window.addEventListener(i.TouchEnd,this._boundMouseUp),window.addEventListener(i.TouchMove,this._boundMouseMove)),this.props.start&&this.props.start({type:"start",x:null,y:null,direction:null}))},e.prototype._getDirection=function(t){return t>2.35619449||t<-2.35619449?"FORWARD":t<2.35619449&&t>.785398163?"RIGHT":t<-.785398163?"LEFT":"BACKWARD"},e.prototype._getWithinBounds=function(t){var e=this._baseSize/2;return t>e?e:t<-e?-1*e:t},e.prototype._mouseMove=function(t){if(this.state.dragging){var e=null,o=null;t.type===i.MouseMove?(e=t.clientX,o=t.clientY):(e=t.touches[0].clientX,o=t.touches[0].clientY);var n=this._getWithinBounds(e-this._parentRect.left-this._baseSize/2),s=this._getWithinBounds(o-this._parentRect.top-this._baseSize/2),r=Math.atan2(n,s);this._updatePos({relativeX:n,relativeY:s,direction:this._getDirection(r),axisX:e-this._parentRect.left,axisY:o-this._parentRect.top})}},e.prototype._mouseUp=function(){this.setState({dragging:!1,coordinates:void 0}),window.removeEventListener("mouseup",this._boundMouseUp),window.removeEventListener("mousemove",this._boundMouseMove),this.props.stop&&this.props.stop({type:"stop",x:null,y:null,direction:null})},e.prototype._getBaseStyle=function(){var t=void 0!==this.props.baseColor?this.props.baseColor:"#000033",e=this._baseSize+"px";return{height:e,width:e,background:t,borderRadius:this._baseSize,display:"flex",justifyContent:"center",alignItems:"center"}},e.prototype._getStickStyle=function(){var t=void 0!==this.props.stickColor?this.props.stickColor:"#3D59AB",e=this._baseSize/1.5+"px",o={background:t,cursor:"move",height:e,width:e,borderRadius:this._baseSize,flexShrink:0};return this.state.dragging&&void 0!==this.state.coordinates&&(o=Object.assign({},o,{position:"absolute",transform:"translate3d("+this.state.coordinates.relativeX+"px, "+this.state.coordinates.relativeY+"px, 0)"})),o},e.prototype.render=function(){this._baseSize=this.props.size||100;var t=this._getBaseStyle(),e=this._getStickStyle();return s.createElement("div",{className:this.props.disabled?"joystick-base-disabled":"",onMouseDown:this._mouseDown.bind(this),onTouchStart:this._mouseDown.bind(this),ref:this._baseRef,style:t},s.createElement("div",{ref:this._stickRef,className:this.props.disabled?"joystick-disabled":"",style:e}))},e}(s.Component);e.Joystick=r;try{(e.Joystick||r).displayName="Joystick",(e.Joystick||r).__docgenInfo={description:"",displayName:"Joystick",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},baseColor:{defaultValue:null,description:"",name:"baseColor",required:!1,type:{name:"string"}},stickColor:{defaultValue:null,description:"",name:"stickColor",required:!1,type:{name:"string"}},throttle:{defaultValue:null,description:"",name:"throttle",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},move:{defaultValue:null,description:"",name:"move",required:!1,type:{name:"(event: IJoystickUpdateEvent) => void"}},stop:{defaultValue:null,description:"",name:"stop",required:!1,type:{name:"(event: IJoystickUpdateEvent) => void"}},start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"(event: IJoystickUpdateEvent) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Joystick.tsx#Joystick"]={name:"Joystick",docgenInfo:(e.Joystick||r).__docgenInfo,path:"src/Joystick.tsx"})}catch(t){}}},[[505,2,4]]]);
//# sourceMappingURL=iframe.b74cdc79b0785c97a329.bundle.js.map