(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["hdpTips"] = factory(require("jQuery"));
	else
		root["hdpTips"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var  $ = __webpack_require__(2);
	__webpack_require__(3);

	var $tips;     //当前页面上实例
	var tid;       //timeoutId

	var tpl = __webpack_require__(11);

	function showTips(type,content,timeout){
	    $tips && $tips.remove();
	    tid && clearTimeout(tid);

	    $tips = $(tpl({
	        type:type,
	        content:content
	    })).appendTo('body');

	    $tips.css({
	        'margin-top':-$tips.height() / 2,
	        'margin-left':-$tips.width() / 2
	    });

	    if(timeout){
	        tid = setTimeout(function(){
	            $tips && $tips.remove();
	            $tips = null;
	        },timeout);
	    }
	}

	module.exports = {
	    info:function(content,timeout){
	        timeout = (typeof timeout === 'undefined') ? 5000 : 0;
	        content = content || "此功能正在开发,如果您迫切需要这个功能,请联系我们客服";
	        showTips('info',content,timeout);
	    },
	    fail:function(content,timeout){
	        timeout = (typeof timeout === 'undefined') ? 5000 : 0;
	        content = content || '服务器异常,请重试';
	        showTips('fail',content,timeout);
	    },
	    success:function(content,timeout){
	        timeout = (typeof timeout === 'undefined') ? 5000 : 0;
	        content = content || '操作成功';
	        showTips('success',content,timeout);
	    },
	    loading:function(content,timeout){
	        content = content || '正在加载数据';
	        showTips('loading',content,timeout);
	    },
	    hide:function(){
	        $tips && $tips.remove();
	        $tips = null;
	    }
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./tips.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./tips.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".hdp-tips-box{\r\n\tposition: fixed;\r\n    z-index: 9999;\r\n    top: 50%;\r\n    left: 50%;\r\n    border: 1px solid #d5d5d5;\r\n    padding: 0 20px;\r\n    font-size: 14px;\r\n    border-radius: 4px;\r\n    background-color: #fff;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    box-shadow: 1px 1px 5px #eee;\r\n}\r\n.hdp-tips-box .content{\r\n\tvertical-align: middle;\r\n\tmargin-left: 5px;\r\n}\r\n.hdp-tips-box .icon{\r\n\twidth:22px;\r\n\theight: 22px;\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n}\r\n.hdp-tips-box.loading .icon{\r\n\tbackground: url(" + __webpack_require__(6) + ");\r\n\twidth:32px;\r\n\theight: 32px;\r\n}\r\n.hdp-tips-box.info .icon{\r\n\tbackground: url(" + __webpack_require__(7) + ");\r\n}\r\n.hdp-tips-box.success .icon{\r\n\tbackground: url(" + __webpack_require__(8) + ");\r\n}\r\n.hdp-tips-box.fail .icon{\r\n\tbackground: url(" + __webpack_require__(9) + ");\r\n}", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/gif;base64,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"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURXS39vxzbO32/6TT/5vRi/LBY/56d/PBYprRiYjG/v/x8ZnQh3W5+fH37fLBYfG+Xf6kovLAYJHJ/6LQjKDUj3/A/vfUlP12cf55dbrfr3a8/cnl/63X/uTy/8XkvNTszfG+XPT68/757vjcpPrs2ZnQiP6ysfG9XJnPhvL47v6lo6PQjf6Afv13cuv26PTEbPG/XvXZr//9+fLAYfT68v/w8P747vXKe5jPhf3z4P/l5J3Oh/6NjP7576XXl/6Tj3W6+qnZnPrlvf/6+v/7+/TJdrvhr6vZnvrlvPfWlvx1b/TMgP/Hxf6JiPb7//j79vX68/z++//Gxa3ZoPPMjqvTlfvx4nS49/C9W7rgsPK/X/HAaJrTiv729f58ef769urz48vi+P/+/vv9+v/m5f/8/PHDdPx0bpnRiPy5tfTMfpjOhPv9+9Pm+PTUo6fXm/PNj/beuv+Cf/basHe5+KjZm/3Sz/304vb6/fjjxfTVpKrUlv12cPXLeLvZ9vLDZfPQmfxzbf6Skf6NifTGa/6SkP/9+uz26ffWlJvOhunz4/TNgPfVlvPPmPXKeaLQjcHfsp7Pierz5P6Oiv/496XSkfDCcvvw4rbWoP7z8sHd99bpypnOhPLFd9ToyP6zse64VPz27PC/Z/bbsfLHePrs2PzAvf/l5YnB9vj7/vfgu/yIgpjOg/jcpv/9/P3z4fXXp7ngrvfVlfLFdvy/u+jy4ebx3/11cPz17LbZpPPKhPC7WcLe95fNgvTVpfP4/aPPje+5VvLLjfrt2f3Lx/6mpP3JxfPCY5rSiv96d3e9/////////83Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///ywZjrwAAADNdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAh79wcAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA+ElEQVQoU1VRMY7EMAhEpop0laU04PzFL7jW/fX+0L1g09wLTkqPeFN8gHdzWSuKYTwaBgCNM9LG3Hs6Z6oQ4IZCtVaShccF70yGiH9U8fAH0HGig0Kt2l/qkgw3uHhKtOIjXinvDm/kmTT84RZR/R0KJuExtTJ680ho3RVShM7+6lHD6KywzfDGFioKL8qNTajAIf3GlmzsaURaubSd3W/aMKu7dvKmvXxO5WPC7uTME5YG07adZF3yU2XpONkVrUsdObyYQQ46rUeM6ljI9K9RSY8JGp5j3D4oaoujczvn90pun6rg5//SdOy9YMbCvoJrl8+93q4/9AgNb+XYExYAAAAASUVORK5CYII="

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAADAFBMVEV0t/b8c2zt9v+k0/+b0YvywWP+enfzwWKa0YmIxv7/8fGZ0Id1ufnx9+3ywWHxvl3+pKLywGCRyf+i0Iyg1I9/wP731JT9dnH+eXW63692vP3J5f+t1/7k8v/F5LzU7M3xvlz0+vP++e743KT67NmZ0Ij+srHxvVyZz4by+O7+paOj0I3+gH79d3Lr9uj0xGzxv1712a///fnywGH0+vL/8PD++O71ynuYz4X98+D/5eSdzof+jYz++e+l15f+k491uvqp2Zz65b3/+vr/+/v0yXa74a+r2Z765bz31pb8dW/0zID/x8X+iYj2+//4+/b1+vP8/vv/xsWt2aDzzI6r05X78eJ0uPfwvVu64LDyv1/xwGia04r+9vX+fHn++vbq8+PL4vj//v77/fr/5uX//Pzxw3T8dG6Z0Yj8ubX0zH6YzoT7/fvT5vj01KOn15vzzY/23rr/gn/22rB3ufio2Zv90s/99OL2+v3448X01aSq1Jb9dnD1y3i72fbyw2Xz0Jn8c23+kpH+jYn0xmv+kpD//frs9un31pSbzobp8+P0zYD31Zbzz5j1ynmi0I3B37Kez4nq8+T+jor/+Pel0pHwwnL78OK21qD+8/LB3ffW6cqZzoTyxXfU6Mj+s7HuuFT89uzwv2f227Hyx3j67Nj8wL3/5eWJwfb4+/734Lv8iIKYzoP43Kb//fz98+H116e54K731ZXyxXb8v7vo8uHm8d/9dXD89ey22aTzyoTwu1nC3veXzYL01aXz+P2jz43vuVbyy4367dn9y8f+pqT9ycXzwmOa0or/end3vf/////////Nzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8sGY68AAAAzXRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AIe/cHAAAARZJREFUGNNtkaFuwzAQhg0KJkVFC/apbCNFBocqjaywiYIqBW3kpFXKA/QJCltaKU9QYmIpwNzAz5SbYydpJu2IrU///br7T/h/S6SHFUjdaWkO/MRcHB1SKLR5+80jZpMjuVSE+w1HXBqaYORN4AEXOT4pImHXB8yf9kkfTfdSEwSsYmuitjqUDVLFwgM6Wr3iSPl+CZK18DJzP/dbZQeqvmCgZITX5B7AxdnaqkhahxBwMLkAq/O+4KgNbRDVjq7A7zOtMZjI4TvoRweXvCGOnV3b9m1atlbCn3ZZWnrOBXUvfA+L3ZPHdsjkVP3lKGNUrHa4TPDYc8pbaTtliyTL+ToMHzWiRVrpLS9u6XltAIzZpFP6XzzgLMQ/D5bPAAAAAElFTkSuQmCC"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAADAFBMVEV0t/b8c2zt9v+k0/+b0YvywWP+enfzwWKa0YmIxv7/8fGZ0Id1ufnx9+3ywWHxvl3+pKLywGCRyf+i0Iyg1I9/wP731JT9dnH+eXW63692vP3J5f+t1/7k8v/F5LzU7M3xvlz0+vP++e743KT67NmZ0Ij+srHxvVyZz4by+O7+paOj0I3+gH79d3Lr9uj0xGzxv1712a///fnywGH0+vL/8PD++O71ynuYz4X98+D/5eSdzof+jYz++e+l15f+k491uvqp2Zz65b3/+vr/+/v0yXa74a+r2Z765bz31pb8dW/0zID/x8X+iYj2+//4+/b1+vP8/vv/xsWt2aDzzI6r05X78eJ0uPfwvVu64LDyv1/xwGia04r+9vX+fHn++vbq8+PL4vj//v77/fr/5uX//Pzxw3T8dG6Z0Yj8ubX0zH6YzoT7/fvT5vj01KOn15vzzY/23rr/gn/22rB3ufio2Zv90s/99OL2+v3448X01aSq1Jb9dnD1y3i72fbyw2Xz0Jn8c23+kpH+jYn0xmv+kpD//frs9un31pSbzobp8+P0zYD31Zbzz5j1ynmi0I3B37Kez4nq8+T+jor/+Pel0pHwwnL78OK21qD+8/LB3ffW6cqZzoTyxXfU6Mj+s7HuuFT89uzwv2f227Hyx3j67Nj8wL3/5eWJwfb4+/734Lv8iIKYzoP43Kb//fz98+H116e54K731ZXyxXb8v7vo8uHm8d/9dXD89ey22aTzyoTwu1nC3veXzYL01aXz+P2jz43vuVbyy4367dn9y8f+pqT9ycXzwmOa0or/end3vf/////////Nzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8sGY68AAAAzXRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AIe/cHAAAAQ9JREFUGNN1ka1uxDAMgFN6KCx+goJpgSElB4pH9gAF1VXTaEG4d9oT3JGhsiOVRv0C7SRLeScvP612mraAxPn0yU5sFf5cqhzivmqt9eSv8oPlY2UyZKzF8dbKhsXPCMwmbZbenGQsng0zw6wfI2c8HyThw2zjjatFdJU46TZiWZEz9n1dpQDQR+wYNixrttm+9yo8U6aMCecIupMKteHdrosNxqug7W+bKWG6s4uCy7/2tONXdyxlABoVfHl2zFJt6aBzKlzHopNeLmaLhvjLG+0lH3DLkXrSHjM353VMz4aXKbdK3FPmhJmi/pTSb6crkzsDQDAN+3T6wV86g0i2043czTL0p8YvvnFllOEb8SEkJ74AZ6IAAAAASUVORK5CYII="

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function anonymous(locals, escape, include, rethrow) {
	    rethrow = rethrow || function rethrow(err, str, filename, lineno) {
	        var lines = str.split("\n");
	        var start = Math.max(lineno - 3, 0);
	        var end = Math.min(lines.length, lineno + 3);
	        var context = lines.slice(start, end).map(function(line, i) {
	            var curr = i + start + 1;
	            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
	        }).join("\n");
	        err.path = filename;
	        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
	        throw err;
	    };
	    escape = escape || function(markup) {
	        return markup == undefined ? "" : String(markup).replace(_MATCH_HTML, encode_char);
	    };
	    var _ENCODE_HTML_RULES = {
	        "&": "&amp;",
	        "<": "&lt;",
	        ">": "&gt;",
	        '"': "&#34;",
	        "'": "&#39;"
	    }, _MATCH_HTML = /[&<>'"]/g;
	    function encode_char(c) {
	        return _ENCODE_HTML_RULES[c] || c;
	    }
	    var __line = 1, __lines = '<div class="hdp-tips-box <%=type%>">\r\n    <i class="icon"></i><span class="content"><%=content%></span>\r\n</div>', __filename = "src\\tips.tpl";
	    try {
	        var __output = [], __append = __output.push.bind(__output);
	        with (locals || {}) {
	            __append('<div class="hdp-tips-box ');
	            __append(escape(type));
	            __append('">\r\n    <i class="icon"></i><span class="content">');
	            __line = 2;
	            __append(escape(content));
	            __append("</span>\r\n</div>");
	            __line = 3;
	        }
	        return __output.join("");
	    } catch (e) {
	        rethrow(e, __lines, __filename, __line);
	    }
	}

/***/ }
/******/ ])
});
;