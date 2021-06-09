/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createAbout() {
    const content = document.getElementById('content');
    const aboutUs = document.createElement('div');
    aboutUs.setAttribute('id', 'about');
    
    content.appendChild(aboutUs);
    
    const title = document.createElement('h2');
    title.textContent = 'About Us';
    aboutUs.appendChild(title);
    
    const blurb = document.createElement('p');
    blurb.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    
    aboutUs.appendChild(blurb);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact(){
    const content = document.getElementById('content');
    const contactBox = document.createElement('div')
    contactBox.setAttribute('id', 'contact')
    content.appendChild(contactBox)
    
    const title = document.createElement('h2');
    title.textContent='Contact';
    contactBox.appendChild(title);
    
    const info = document.createElement('p')
    info.textContent = 'We\'re on wheels, so good luck finding us. You can call us at 000-000-0000.';
    contactBox.appendChild(info);
      
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/initLoad.js":
/*!*************************!*\
  !*** ./src/initLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




console.log('If you see me, everything is A O K');

function createHeader() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    content.appendChild(header);

    const restaurant = document.createElement('h1')
    restaurant.textContent = 'Bistro Bus';
    header.appendChild(restaurant);

    const byline = document.createElement('p');
    byline.textContent = 'A world of food in motion'
    header.appendChild(byline);

    const nav = document.createElement('nav');
    header.appendChild(nav);

    const navList = document.createElement('ul');
    nav.appendChild(navList);

    const aboutBtn = document.createElement('li')
    aboutBtn.textContent = 'About';
    aboutBtn.addEventListener('click', () => {
        removeChildNodes(content);
        (0,_about_js__WEBPACK_IMPORTED_MODULE_0__.default)();
    });

    const menuBtn = document.createElement('li');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', () => {
        removeChildNodes(content);
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.default)();
    });

    const contactBtn = document.createElement('li');
    contactBtn.textContent = 'Contact';
        contactBtn.addEventListener('click', () => {
        removeChildNodes(content);
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.default)();
    });

    navList.appendChild(aboutBtn);
    navList.appendChild(menuBtn);
    navList.appendChild(contactBtn);
};

function removeChildNodes(parent) {
    while (parent.children[1]) {
        parent.removeChild(parent.children[1]);
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
    const content = document.getElementById('content');
    const menu = document.createElement('div')
    menu.setAttribute('id', 'menu')
    content.appendChild(menu)

    makeMenuSection('Sandwiches', sandwichArray);
    makeMenuSection('Sides', sidesArray);
    makeMenuSection('Drinks', drinksArray);
}



function makeMenuSection(name, array) {
    let menuTitle = document.createElement('div')
    menuTitle.setAttribute('class', 'menu-title');
    menu.appendChild(menuTitle);

    let title = document.createElement('h2')
    title.textContent = `${name}`;
    menuTitle.appendChild(title);

    for (let i = 0; i < array.length; i++) {
        let menuItem = document.createElement('div');
        menuItem.setAttribute('class', 'menu-item');
        menu.appendChild(menuItem);

        let foodName = document.createElement('h3');
        foodName.textContent = `${array[i].name}`;
        menuItem.appendChild(foodName);
        
        let hr = document.createElement('hr');
        menuItem.appendChild(hr);

        let foodDesc = document.createElement('p');
        foodDesc.textContent = `${array[i].description}`
        menuItem.append(foodDesc);
    }
}

let sandwichArray = [{
        name: 'Just-A-Sandwich',
        description: 'Turkey, bacon, LTO. $7.99',
    }, {
        name: 'Bus Burger',
        description: 'Our famous burger on wheels. two patties, special sauce, LTO. $10.99',
    }, {
        name: 'Speedy Cheese Philly',
        description: 'Peppers, onions, and our firesauce. $8.99'
    }, {
        name: 'Wicked Grilled Cheese',
        description: 'Meunster and avocado on brioche. $5.99'
    }, {
        name: 'Falafel Wrap',
        description: 'Hummus, tabouli, tsaziki. $10.99'
    }, {
        name: 'Buffalo Chicken Deluxe',
        description: 'Bacon, ranch, cheddar, LTO. $7.99'
    }
]

let sidesArray = [{
        name: 'French Fries',
        description: 'Shoestring. $2.99',
    }, {
        name: 'Sweet Potato fries',
        description: 'Local potatoes from Riddlebrook Farm. $4.99',
    }, {
        name: 'Tater Tots',
        description: 'Fresh out the fryer. $3.99'
    }, {
        name: 'Salted Cookie',
        description: 'Its bigger than you think... $1.99'
    }
]

let drinksArray = [{
        name: 'Polar Seltzer',
        description: 'Local :). $1.99',
    }, {
        name: 'IZZE',
        description: 'Grapefruit, strawberry, whatever. $2.99',
    }, {
        name: 'Slush',
        description: 'Plain, snow-flavored. $10.99'
    }, {
        name: 'Beer',
        description: 'Rotating local brews. $7.99'
    }
]


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initLoad.js */ "./src/initLoad.js");


(0,_initLoad_js__WEBPACK_IMPORTED_MODULE_0__.default)()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFOzs7Ozs7Ozs7Ozs7OztBQ2pCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLGFBQWEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQlM7QUFDRjtBQUNNOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBVztBQUNuQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBVTtBQUNsQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBYTtBQUNyQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxRDVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixLQUFLO0FBQ2hDOztBQUVBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxxQkFBcUI7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDNUYxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ055Qzs7QUFFekMscURBQVkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUFib3V0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dFVzLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQnKTtcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0VXMpO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgXG4gICAgY29uc3QgYmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYmx1cmIudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtJztcbiAgICBcbiAgICBhYm91dFVzLmFwcGVuZENoaWxkKGJsdXJiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXQ7IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRhY3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhY3RCb3guc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0JylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RCb3gpXG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50PSdDb250YWN0JztcbiAgICBjb250YWN0Qm94LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaW5mby50ZXh0Q29udGVudCA9ICdXZVxcJ3JlIG9uIHdoZWVscywgc28gZ29vZCBsdWNrIGZpbmRpbmcgdXMuIFlvdSBjYW4gY2FsbCB1cyBhdCAwMDAtMDAwLTAwMDAuJztcbiAgICBjb250YWN0Qm94LmFwcGVuZENoaWxkKGluZm8pO1xuICAgICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3Q7IiwiaW1wb3J0IGNyZWF0ZUFib3V0IGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmNvbnNvbGUubG9nKCdJZiB5b3Ugc2VlIG1lLCBldmVyeXRoaW5nIGlzIEEgTyBLJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCByZXN0YXVyYW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIHJlc3RhdXJhbnQudGV4dENvbnRlbnQgPSAnQmlzdHJvIEJ1cyc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnQpO1xuXG4gICAgY29uc3QgYnlsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJ5bGluZS50ZXh0Q29udGVudCA9ICdBIHdvcmxkIG9mIGZvb2QgaW4gbW90aW9uJ1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChieWxpbmUpO1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5cbiAgICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBhYm91dEJ0bi50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gICAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUNoaWxkTm9kZXMoY29udGVudCk7XG4gICAgICAgIGNyZWF0ZUFib3V0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUNoaWxkTm9kZXMoY29udGVudCk7XG4gICAgICAgIGNyZWF0ZU1lbnUoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUNoaWxkTm9kZXMoY29udGVudCk7XG4gICAgICAgIGNyZWF0ZUNvbnRhY3QoKTtcbiAgICB9KTtcblxuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQoYWJvdXRCdG4pO1xuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5jaGlsZHJlblsxXSkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmNoaWxkcmVuWzFdKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7XG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51JylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpXG5cbiAgICBtYWtlTWVudVNlY3Rpb24oJ1NhbmR3aWNoZXMnLCBzYW5kd2ljaEFycmF5KTtcbiAgICBtYWtlTWVudVNlY3Rpb24oJ1NpZGVzJywgc2lkZXNBcnJheSk7XG4gICAgbWFrZU1lbnVTZWN0aW9uKCdEcmlua3MnLCBkcmlua3NBcnJheSk7XG59XG5cblxuXG5mdW5jdGlvbiBtYWtlTWVudVNlY3Rpb24obmFtZSwgYXJyYXkpIHtcbiAgICBsZXQgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LXRpdGxlJyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7bmFtZX1gO1xuICAgIG1lbnVUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcblxuICAgICAgICBsZXQgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IGAke2FycmF5W2ldLm5hbWV9YDtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaHIpO1xuXG4gICAgICAgIGxldCBmb29kRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZm9vZERlc2MudGV4dENvbnRlbnQgPSBgJHthcnJheVtpXS5kZXNjcmlwdGlvbn1gXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZChmb29kRGVzYyk7XG4gICAgfVxufVxuXG5sZXQgc2FuZHdpY2hBcnJheSA9IFt7XG4gICAgICAgIG5hbWU6ICdKdXN0LUEtU2FuZHdpY2gnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1R1cmtleSwgYmFjb24sIExUTy4gJDcuOTknLFxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0J1cyBCdXJnZXInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ091ciBmYW1vdXMgYnVyZ2VyIG9uIHdoZWVscy4gdHdvIHBhdHRpZXMsIHNwZWNpYWwgc2F1Y2UsIExUTy4gJDEwLjk5JyxcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdTcGVlZHkgQ2hlZXNlIFBoaWxseScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUGVwcGVycywgb25pb25zLCBhbmQgb3VyIGZpcmVzYXVjZS4gJDguOTknXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnV2lja2VkIEdyaWxsZWQgQ2hlZXNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdNZXVuc3RlciBhbmQgYXZvY2FkbyBvbiBicmlvY2hlLiAkNS45OSdcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdGYWxhZmVsIFdyYXAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0h1bW11cywgdGFib3VsaSwgdHNhemlraS4gJDEwLjk5J1xuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0J1ZmZhbG8gQ2hpY2tlbiBEZWx1eGUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JhY29uLCByYW5jaCwgY2hlZGRhciwgTFRPLiAkNy45OSdcbiAgICB9XG5dXG5cbmxldCBzaWRlc0FycmF5ID0gW3tcbiAgICAgICAgbmFtZTogJ0ZyZW5jaCBGcmllcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2hvZXN0cmluZy4gJDIuOTknLFxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1N3ZWV0IFBvdGF0byBmcmllcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9jYWwgcG90YXRvZXMgZnJvbSBSaWRkbGVicm9vayBGYXJtLiAkNC45OScsXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnVGF0ZXIgVG90cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRnJlc2ggb3V0IHRoZSBmcnllci4gJDMuOTknXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnU2FsdGVkIENvb2tpZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSXRzIGJpZ2dlciB0aGFuIHlvdSB0aGluay4uLiAkMS45OSdcbiAgICB9XG5dXG5cbmxldCBkcmlua3NBcnJheSA9IFt7XG4gICAgICAgIG5hbWU6ICdQb2xhciBTZWx0emVyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb2NhbCA6KS4gJDEuOTknLFxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0laWkUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dyYXBlZnJ1aXQsIHN0cmF3YmVycnksIHdoYXRldmVyLiAkMi45OScsXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnU2x1c2gnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1BsYWluLCBzbm93LWZsYXZvcmVkLiAkMTAuOTknXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnQmVlcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUm90YXRpbmcgbG9jYWwgYnJld3MuICQ3Ljk5J1xuICAgIH1cbl1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4vaW5pdExvYWQuanMnO1xuXG5jcmVhdGVIZWFkZXIoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==