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
        description: 'Turnkey, bacon, LTO. $7.99',
    }, {
        name: 'Bus Burger',
        description: 'Our famous burger on wheels. two patties, special sauce, LTO. $10.99',
    }, {
        name: 'Speedy Cheese Philly',
        description: 'Peppers, onions, and our firesauce. $8.99'
    }, {
        name: 'Wicked Grilled Cheese',
        description: 'Meunster and avocado on brioche. $5.99'
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
    byline.textContent= 'A world of food in motion'
    header.appendChild(byline);
    
    const nav = document.createElement('nav');
    header.appendChild(nav);
    
    const navList = document.createElement('ul');
    nav.appendChild(navList);
    
    const aboutBtn = document.createElement('li')
    aboutBtn.textContent = 'About';
    const menuBtn = document.createElement('li');
    menuBtn.textContent = 'Menu';
    const contactBtn = document.createElement('li');
    contactBtn.textContent = 'Contact';
    
    navList.appendChild(aboutBtn);
    navList.appendChild(menuBtn);
    navList.appendChild(contactBtn);
          
}

createHeader()
;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.default)()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEU7Ozs7Ozs7Ozs7Ozs7O0FDakIxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixLQUFLO0FBQ2hDOztBQUVBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLHFCQUFxQjtBQUN2RDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQzFGMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0Y7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtEQUFVIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVBYm91dCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBhYm91dFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRVcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0Jyk7XG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dFVzKTtcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIFxuICAgIGNvbnN0IGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJsdXJiLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bSc7XG4gICAgXG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZChibHVyYik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFib3V0OyIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSlcblxuICAgIG1ha2VNZW51U2VjdGlvbignU2FuZHdpY2hlcycsIHNhbmR3aWNoQXJyYXkpO1xuICAgIG1ha2VNZW51U2VjdGlvbignU2lkZXMnLCBzaWRlc0FycmF5KTtcbiAgICBtYWtlTWVudVNlY3Rpb24oJ0RyaW5rcycsIGRyaW5rc0FycmF5KTtcblxuXG59XG5cblxuXG5mdW5jdGlvbiBtYWtlTWVudVNlY3Rpb24obmFtZSwgYXJyYXkpIHtcbiAgICBsZXQgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LXRpdGxlJyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7bmFtZX1gO1xuICAgIG1lbnVUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcblxuICAgICAgICBsZXQgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IGAke2FycmF5W2ldLm5hbWV9YDtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xuICAgICAgICBsZXQgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChocik7XG5cbiAgICAgICAgbGV0IGZvb2REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBmb29kRGVzYy50ZXh0Q29udGVudCA9IGAke2FycmF5W2ldLmRlc2NyaXB0aW9ufWBcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kKGZvb2REZXNjKTtcblxuXG4gICAgfVxufVxuXG5sZXQgc2FuZHdpY2hBcnJheSA9IFt7XG4gICAgICAgIG5hbWU6ICdKdXN0LUEtU2FuZHdpY2gnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1R1cm5rZXksIGJhY29uLCBMVE8uICQ3Ljk5JyxcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdCdXMgQnVyZ2VyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdPdXIgZmFtb3VzIGJ1cmdlciBvbiB3aGVlbHMuIHR3byBwYXR0aWVzLCBzcGVjaWFsIHNhdWNlLCBMVE8uICQxMC45OScsXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnU3BlZWR5IENoZWVzZSBQaGlsbHknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1BlcHBlcnMsIG9uaW9ucywgYW5kIG91ciBmaXJlc2F1Y2UuICQ4Ljk5J1xuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1dpY2tlZCBHcmlsbGVkIENoZWVzZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTWV1bnN0ZXIgYW5kIGF2b2NhZG8gb24gYnJpb2NoZS4gJDUuOTknXG4gICAgfVxuXVxuXG5sZXQgc2lkZXNBcnJheSA9IFt7XG4gICAgICAgIG5hbWU6ICdGcmVuY2ggRnJpZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Nob2VzdHJpbmcuICQyLjk5JyxcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdTd2VldCBQb3RhdG8gZnJpZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvY2FsIHBvdGF0b2VzIGZyb20gUmlkZGxlYnJvb2sgRmFybS4gJDQuOTknLFxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1RhdGVyIFRvdHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZyZXNoIG91dCB0aGUgZnJ5ZXIuICQzLjk5J1xuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1NhbHRlZCBDb29raWUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0l0cyBiaWdnZXIgdGhhbiB5b3UgdGhpbmsuLi4gJDEuOTknXG4gICAgfVxuXVxuXG5sZXQgZHJpbmtzQXJyYXkgPSBbe1xuICAgICAgICBuYW1lOiAnUG9sYXIgU2VsdHplcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9jYWwgOikuICQxLjk5JyxcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdJWlpFJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdHcmFwZWZydWl0LCBzdHJhd2JlcnJ5LCB3aGF0ZXZlci4gJDIuOTknLFxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1NsdXNoJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdQbGFpbiwgc25vdy1mbGF2b3JlZC4gJDEwLjk5J1xuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0JlZXInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1JvdGF0aW5nIGxvY2FsIGJyZXdzLiAkNy45OSdcbiAgICB9XG5dXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlQWJvdXQgZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21lbnUuanMnO1xuXG5jb25zb2xlLmxvZygnSWYgeW91IHNlZSBtZSwgZXZlcnl0aGluZyBpcyBBIE8gSycpXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgXG4gICAgY29uc3QgcmVzdGF1cmFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICByZXN0YXVyYW50LnRleHRDb250ZW50ID0gJ0Jpc3RybyBCdXMnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50KTtcbiAgICBcbiAgICBjb25zdCBieWxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYnlsaW5lLnRleHRDb250ZW50PSAnQSB3b3JsZCBvZiBmb29kIGluIG1vdGlvbidcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnlsaW5lKTtcbiAgICBcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBcbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG4gICAgXG4gICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgYWJvdXRCdG4udGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGFib3V0QnRuKTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gICAgICAgICAgXG59XG5cbmNyZWF0ZUhlYWRlcigpXG5jcmVhdGVNZW51KClcbiJdLCJzb3VyY2VSb290IjoiIn0=