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



console.log('If you see me, everything is A O K')

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

    })


    const menuBtn = document.createElement('li');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', () => {
        removeChildNodes(content);
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.default)();

    })

    const contactBtn = document.createElement('li');
    contactBtn.textContent = 'Contact';

    navList.appendChild(aboutBtn);
    navList.appendChild(menuBtn);
    navList.appendChild(contactBtn);

}

function removeChildNodes(parent) {
    while (parent.children[1]) {
        parent.removeChild(parent.children[1]);
    }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJXO0FBQ0Y7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFXOztBQUVuQixLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVU7O0FBRWxCLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUN6RDNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLEtBQUs7QUFDaEM7OztBQUdBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxxQkFBcUI7QUFDdkQ7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDbEcxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ055Qzs7QUFFekMscURBQVkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUFib3V0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dFVzLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQnKTtcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0VXMpO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgXG4gICAgY29uc3QgYmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYmx1cmIudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtJztcbiAgICBcbiAgICBhYm91dFVzLmFwcGVuZENoaWxkKGJsdXJiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXQ7IiwiaW1wb3J0IGNyZWF0ZUFib3V0IGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9tZW51LmpzJztcblxuY29uc29sZS5sb2coJ0lmIHlvdSBzZWUgbWUsIGV2ZXJ5dGhpbmcgaXMgQSBPIEsnKVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgcmVzdGF1cmFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICByZXN0YXVyYW50LnRleHRDb250ZW50ID0gJ0Jpc3RybyBCdXMnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50KTtcblxuICAgIGNvbnN0IGJ5bGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBieWxpbmUudGV4dENvbnRlbnQgPSAnQSB3b3JsZCBvZiBmb29kIGluIG1vdGlvbidcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnlsaW5lKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuXG4gICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgYWJvdXRCdG4udGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICAgIGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW1vdmVDaGlsZE5vZGVzKGNvbnRlbnQpO1xuICAgICAgICBjcmVhdGVBYm91dCgpO1xuXG4gICAgfSlcblxuXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW1vdmVDaGlsZE5vZGVzKGNvbnRlbnQpO1xuICAgICAgICBjcmVhdGVNZW51KCk7XG5cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQoYWJvdXRCdG4pO1xuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuY2hpbGRyZW5bMV0pIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5jaGlsZHJlblsxXSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXJcbiIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSlcblxuICAgIG1ha2VNZW51U2VjdGlvbignU2FuZHdpY2hlcycsIHNhbmR3aWNoQXJyYXkpO1xuICAgIG1ha2VNZW51U2VjdGlvbignU2lkZXMnLCBzaWRlc0FycmF5KTtcbiAgICBtYWtlTWVudVNlY3Rpb24oJ0RyaW5rcycsIGRyaW5rc0FycmF5KTtcblxuXG59XG5cblxuXG5mdW5jdGlvbiBtYWtlTWVudVNlY3Rpb24obmFtZSwgYXJyYXkpIHtcbiAgICBsZXQgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LXRpdGxlJyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7bmFtZX1gO1xuICAgIG1lbnVUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuXG4gICAgICAgIGxldCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGZvb2ROYW1lLnRleHRDb250ZW50ID0gYCR7YXJyYXlbaV0ubmFtZX1gO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kTmFtZSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChocik7XG5cbiAgICAgICAgbGV0IGZvb2REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBmb29kRGVzYy50ZXh0Q29udGVudCA9IGAke2FycmF5W2ldLmRlc2NyaXB0aW9ufWBcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kKGZvb2REZXNjKTtcblxuXG4gICAgfVxufVxuXG5sZXQgc2FuZHdpY2hBcnJheSA9IFt7XG4gICAgICAgIG5hbWU6ICdKdXN0LUEtU2FuZHdpY2gnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1R1cmtleSwgYmFjb24sIExUTy4gJDcuOTknLFxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0J1cyBCdXJnZXInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ091ciBmYW1vdXMgYnVyZ2VyIG9uIHdoZWVscy4gdHdvIHBhdHRpZXMsIHNwZWNpYWwgc2F1Y2UsIExUTy4gJDEwLjk5JyxcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdTcGVlZHkgQ2hlZXNlIFBoaWxseScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUGVwcGVycywgb25pb25zLCBhbmQgb3VyIGZpcmVzYXVjZS4gJDguOTknXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnV2lja2VkIEdyaWxsZWQgQ2hlZXNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdNZXVuc3RlciBhbmQgYXZvY2FkbyBvbiBicmlvY2hlLiAkNS45OSdcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdGYWxhZmVsIFdyYXAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0h1bW11cywgdGFib3VsaSwgdHNhemlraS4gJDEwLjk5J1xuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0J1ZmZhbG8gQ2hpY2tlbiBEZWx1eGUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JhY29uLCByYW5jaCwgY2hlZGRhciwgTFRPLiAkNy45OSdcbiAgICB9XG5dXG5cbmxldCBzaWRlc0FycmF5ID0gW3tcbiAgICAgICAgbmFtZTogJ0ZyZW5jaCBGcmllcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2hvZXN0cmluZy4gJDIuOTknLFxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1N3ZWV0IFBvdGF0byBmcmllcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9jYWwgcG90YXRvZXMgZnJvbSBSaWRkbGVicm9vayBGYXJtLiAkNC45OScsXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnVGF0ZXIgVG90cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRnJlc2ggb3V0IHRoZSBmcnllci4gJDMuOTknXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnU2FsdGVkIENvb2tpZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSXRzIGJpZ2dlciB0aGFuIHlvdSB0aGluay4uLiAkMS45OSdcbiAgICB9XG5dXG5cbmxldCBkcmlua3NBcnJheSA9IFt7XG4gICAgICAgIG5hbWU6ICdQb2xhciBTZWx0emVyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb2NhbCA6KS4gJDEuOTknLFxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0laWkUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dyYXBlZnJ1aXQsIHN0cmF3YmVycnksIHdoYXRldmVyLiAkMi45OScsXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnU2x1c2gnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1BsYWluLCBzbm93LWZsYXZvcmVkLiAkMTAuOTknXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnQmVlcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUm90YXRpbmcgbG9jYWwgYnJld3MuICQ3Ljk5J1xuICAgIH1cbl1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi9pbml0TG9hZC5qcyc7XG5cbmNyZWF0ZUhlYWRlcigpXG4iXSwic291cmNlUm9vdCI6IiJ9