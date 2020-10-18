var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"en"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};const u=undefined;function plural(n){let i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;if(i===1&&v===0)return 1;return 5}global.ng.common.locales["en"]=["en",[["a","p"],["AM","PM"],u],[["AM","PM"],u,u],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],u,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],u,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",u,"{1} 'at' {0}",u],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",plural,[[["mi","n","in the morning","in the afternoon","in the evening","at night"],["midnight","noon","in the morning","in the afternoon","in the evening","at night"],u],[["midnight","noon","morning","afternoon","evening","night"],u,u],["00:00","12:00",["06:00","12:00"],["12:00","18:00"],["18:00","21:00"],["21:00","06:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Leo\Apps\Nomads Acroyoga\nomads.acroyoga.site\nomads-acroyoga-site\src\main.ts */"zUnb");


/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 20, vars: 3, consts: [["color", "primary", "mat-icon-button", ""], ["mat-icon-button", ""], [3, "click"], [1, "toolbar-text"], ["fixedInViewport", "true"], ["sidenav", ""], ["mat-list-item", "", 3, "routerLink", "click"], [2, "scroll-behavior", "unset"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nomads acroyoga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " About us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Ccntact us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/about-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/contact-us");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [".mat-drawer-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky;\n  \n  top: 0;\n  \n  z-index: 1000;\n}\n\n.mat-sidenav[_ngcontent-%COMP%] {\n  padding-top: 60px;\n}\n\n.toolbar-text[_ngcontent-%COMP%] {\n  font-family: AndelliaDavilton !important;\n  font-size: 2.2em;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background-color: #731c46;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUEwQix5QkFBQTtFQUMxQixNQUFBO0VBQVEseUNBQUE7RUFDUixhQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtBQUtGOztBQUZBO0VBQ0Usd0NBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UseUJBQUE7QUFNRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xyXG4gIHRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG4ubWF0LXNpZGVuYXYge1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4udG9vbGJhci10ZXh0IHtcclxuICBmb250LWZhbWlseTogQW5kZWxsaWFEYXZpbHRvbiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMi4yZW07XHJcbn1cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzMxYzQ2O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9M1M":
/*!*******************************************!*\
  !*** ./src/assets/email/credentials.json ***!
  \*******************************************/
/*! exports provided: web, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"web\":{\"client_id\":\"368609282848-5au6ke4ju6n8et9p900qnfod3hl3e1d0.apps.googleusercontent.com\",\"project_id\":\"quickstart-1602505142612\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_secret\":\"tdiDENyYEqcb-f_YMJNWCw8q\",\"javascript_origins\":[\"http://localhost:4200\"]}}");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, consts: [[1, "logo"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".logo[_ngcontent-%COMP%] {\n  height: calc(100vh - 150px);\n  background-image: url('logo-transparente.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLDhDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9nby10cmFuc3BhcmVudGUucG5nKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "J8bY":
/*!***********************************************!*\
  !*** ./src/assets/settings/sitesettings.json ***!
  \***********************************************/
/*! exports provided: ApiSettings, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ApiSettings\":[{\"ApiName\":\"mail\",\"ApiRoot\":\"https://localhost:44351/api/email/\",\"EndPointNames\":[{\"Name\":\"send\",\"EndPoint\":\"send\",\"RequireAuthorization\":false,\"UseCustomerProfile\":false}]}]}");

/***/ }),

/***/ "L0IO":
/*!*******************************!*\
  !*** ./src/app/model/mail.ts ***!
  \*******************************/
/*! exports provided: Mail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
class Mail {
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");



class AppComponent {
    constructor() {
        this.title = 'nomads-acroyoga-site';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]], styles: [".mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background-color: gray !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n      Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n      \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    width: auto;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, 0.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,\n      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, 0.35);\n    background-position: -0.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n  \n  @media screen and (max-width: 767px) {\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "XJ+S":
/*!********************************************!*\
  !*** ./src/app/services/mailer.service.ts ***!
  \********************************************/
/*! exports provided: MailerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailerService", function() { return MailerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_email_credentials_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/email/credentials.json */ "9M1M");
var _assets_email_credentials_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/email/credentials.json */ "9M1M", 1);
/* harmony import */ var _shared_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/apiservice.service */ "uK48");




class MailerService {
    constructor(apiService) {
        this.apiService = apiService;
        this.credentials = _assets_email_credentials_json__WEBPACK_IMPORTED_MODULE_1___namespace;
    }
    sendMail(mail) {
        this.apiService.sendPost('mail', 'send', mail);
    }
}
MailerService.ɵfac = function MailerService_Factory(t) { return new (t || MailerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"])); };
MailerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MailerService, factory: MailerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _shared_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "ukFw");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "pO+s");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
    // {
    //   provide: google.authentication.OAuth2Client,
    //   useValue: new google.authentication.OAuth2Client(
    // // You get this in GCP project credentials
    //     data.web.client_id,
    //     data.web.client_secret,
    // // URL where you'll handle succesful authentication
    // ''    
    //     )
    // },
    // {
    //   provide: calendar_v3.Calendar,
    //   useFactory: (auth: OAuth2Client) => {
    //     return new calendar_v3.Calendar({ auth });
    //   } ,
    //   deps: [google.authentication.OAuth2Client],
    // },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"], _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"], _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
                ],
                providers: [
                // {
                //   provide: google.authentication.OAuth2Client,
                //   useValue: new google.authentication.OAuth2Client(
                // // You get this in GCP project credentials
                //     data.web.client_id,
                //     data.web.client_secret,
                // // URL where you'll handle succesful authentication
                // ''    
                //     )
                // },
                // {
                //   provide: calendar_v3.Calendar,
                //   useFactory: (auth: OAuth2Client) => {
                //     return new calendar_v3.Calendar({ auth });
                //   } ,
                //   deps: [google.authentication.OAuth2Client],
                // },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "pO+s":
/*!***************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/mail */ "L0IO");
/* harmony import */ var _assets_email_credentials_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/email/credentials.json */ "9M1M");
var _assets_email_credentials_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/email/credentials.json */ "9M1M", 1);
/* harmony import */ var src_app_services_mailer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mailer.service */ "XJ+S");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







class ContactUsComponent {
    constructor(mailservice) {
        this.mailservice = mailservice;
        this.gCredentials = _assets_email_credentials_json__WEBPACK_IMPORTED_MODULE_2___namespace;
    }
    ngOnInit() {
        // new calendar_v3.Calendar({ })
        // const oAuth2Client = new google.auth.OAuth2(
        //   this.gCredentials.web.client_id, this.gCredentials.web.client_secret, '');
    }
    sendMail($event) {
        console.log('sendMail');
        let mail = new src_app_model_mail__WEBPACK_IMPORTED_MODULE_1__["Mail"]();
        mail.body = this.message;
        mail.mailTo = this.email;
        this.mailservice.sendMail(mail);
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mailer_service__WEBPACK_IMPORTED_MODULE_3__["MailerService"])); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 17, vars: 0, consts: [[1, "container"], [1, "card-contact"], ["mat-card-avatar", "", 1, ""], ["placeholder", "Name", "type", "text", "value", "", "required", ""], ["placeholder", "Email address", "type", "email", "onblur", "this.setAttribute('value', this.value);", "value", "", "required", ""], [1, "validation-text"], [1, "flex"], ["placeholder", "Message", "rows", "3", "required", ""], [3, "click"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Please enter a valid email address.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactUsComponent_Template_button_click_15_listener($event) { return ctx.sendMail($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], styles: ["@media (min-width: 320px) {\n  .container[_ngcontent-%COMP%] {\n    width: 90%;\n    height: calc(100vh - 150px);\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    background-image: url('background-text.svg');\n    background-size: cover;\n    align-items: center;\n  }\n\n  .card-contact[_ngcontent-%COMP%] {\n    max-width: 750px;\n    width: 100%;\n    height: 280px;\n  }\n}\ninput[_ngcontent-%COMP%]::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font: inherit;\n  -webkit-transition: transform 0.3s ease-in-out, font-size 0.3s ease-in-out, visibility 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, font-size 0.3s ease-in-out, visibility 0.3s ease-in-out;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font: inherit;\n  font-size: 0.8em;\n  width: 100%;\n  display: block;\n  border: none;\n  padding: 20px 0 10px;\n  border-bottom: solid 1px #dd92a2;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #dd92a2 4%);\n  background-position: -100% 0;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  transition: background 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  resize: none;\n  overflow: hidden;\n}\ninput[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\n  color: #dd92a2;\n}\ninput[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:valid, textarea[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:valid {\n  box-shadow: none;\n  outline: none;\n  background-position: 0 0;\n}\ninput[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, input[_ngcontent-%COMP%]:valid::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]:valid::-webkit-input-placeholder {\n  font-size: 0.8em;\n  transform: translateY(-20px);\n  visibility: visible !important;\n  opacity: 1;\n}\ninput[type=email][_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #dd92a2 4%);\n  background-repeat: no-repeat;\n  transition: border-bottom 0.3s ease, background 0.3s ease;\n}\ninput[type=email][_ngcontent-%COMP%]    ~ span.validation-text[_ngcontent-%COMP%] {\n  visibility: hidden;\n  font-size: 0.6em;\n  width: 100%;\n  transition: color 0.3s ease-in-out;\n}\ninput[type=email][_ngcontent-%COMP%]:not([value=\"\"])::-webkit-input-placeholder {\n  font-size: 0.8em;\n  transform: translateY(-20px);\n  visibility: visible !important;\n  opacity: 1;\n}\ninput[type=email][_ngcontent-%COMP%]:not([value=\"\"]):focus::-webkit-input-placeholder {\n  color: #dd92a2;\n}\ninput[type=email][_ngcontent-%COMP%]:not([value=\"\"]):focus:not(:valid)::-webkit-input-placeholder {\n  color: #e91e63;\n}\ninput[type=email][_ngcontent-%COMP%]:focus {\n  background-position: 0 0;\n}\ninput[type=email][_ngcontent-%COMP%]:focus:not(:valid):not([value=\"\"]) {\n  border-bottom: solid 1px #e91e63;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #e91e63 4%);\n}\ninput[type=email][_ngcontent-%COMP%]:not(:focus):not(:valid):not([value=\"\"]) {\n  border-bottom: solid 1px #e91e63;\n  background-position: 0 0;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #e91e63 4%);\n}\ninput[type=email][_ngcontent-%COMP%]:not(:focus):not(:valid):not([value=\"\"])::-webkit-input-placeholder {\n  color: #e91e63;\n}\ninput[type=email][_ngcontent-%COMP%]:not(:focus):not(:valid):not([value=\"\"])    ~ span.validation-text[_ngcontent-%COMP%] {\n  visibility: visible;\n  color: #e91e63;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n}\n.flex[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  line-height: 120%;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  transition: transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), box-shadow 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);\n  border: none;\n  background: #dd92a2;\n  cursor: pointer;\n  border-radius: 3px;\n  padding: 6px;\n  width: 100%;\n  color: white;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);\n}\nbutton[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\na[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50px;\n  background: #dd92a2;\n  display: inline-block;\n  margin: 50px calc(50% - 21px);\n  white-space: nowrap;\n  padding: 13px;\n  box-sizing: border-box;\n  color: white;\n  transition: all 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);\n  font-family: Roboto, sans-serif;\n  text-decoration: none;\n  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.2);\n}\na[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  transition: margin-right 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\na[_ngcontent-%COMP%]:hover {\n  width: 134px;\n  transform: translateX(-50px);\n}\na[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7SUFDQSw0Q0FBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFKRjs7RUFNQTtJQUNFLGdCQUFBO0lBQ0EsV0FmSTtJQWdCSixhQUFBO0VBSEY7QUFDRjtBQU1BOztFQUVFLGFBQUE7RUFDQSx1R0FBQTtFQUFBLCtGQUFBO0FBSkY7QUFRQTs7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQS9CTTtFQWdDTixjQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4RUFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTEY7QUFNRTs7RUFDRSxjQS9DRztBQTRDUDtBQUtFOzs7RUFFRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQUZKO0FBR0k7OztFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFDTjtBQUlBO0VBQ0UsOEVBQUE7RUFFQSw0QkFBQTtFQUNBLHlEQUFBO0FBRkY7QUFHRTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQXJFSTtFQXNFSixrQ0FBQTtBQUZKO0FBS0k7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBSE47QUFLSTtFQUNFLGNBbkZDO0FBZ0ZQO0FBS0k7RUFDRSxjQXBGSTtBQWlGVjtBQU1FO0VBQ0Usd0JBQUE7QUFKSjtBQUtJO0VBQ0UsZ0NBQUE7RUFDQSw4RUFBQTtBQUhOO0FBVUU7RUFJRSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEVBQUE7QUFYSjtBQU1JO0VBQ0UsY0FwR0k7QUFnR1Y7QUFhSTtFQUNFLG1CQUFBO0VBQ0EsY0EvR0k7QUFvR1Y7QUFnQkE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUFiRjtBQWNFO0VBQ0UsaUJBQUE7QUFaSjtBQWdCQTtFQUNFLGdCQUFBO0VBQ0EsK0dBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBbElLO0VBbUlMLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQW5JTTtFQW9JTixZQUFBO0VBQ0EsMENBQUE7QUFiRjtBQWNFO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBQVpKO0FBZ0JBOzs7Ozs7Ozs7OztFQUFBO0FBYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBaEtLO0VBaUtMLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQWRGO0FBZUU7RUFDRSxrQkFBQTtFQUNBLCtEQUFBO0FBYko7QUFlRTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtBQWJKO0FBY0k7RUFDRSxrQkFBQTtBQVpOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzZTogI2RkOTJhMjtcclxuJHRleHQ6ICM3MzFjNDY7XHJcbiRpbnZhbGlkOiAjZTkxZTYzO1xyXG4kd2lkdGg6IDEwMCU7XHJcbiRjdWJpYzogY3ViaWMtYmV6aWVyKDAuNjQsIDAuMDksIDAuMDgsIDEpO1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC10ZXh0LnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNhcmQtY29udGFjdCB7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcclxudGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAwLjNzIGVhc2UtaW4tb3V0LFxyXG4gICAgdmlzaWJpbGl0eSAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICB3aWR0aDogJHdpZHRoO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAyMHB4IDAgMTBweDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGJhc2U7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA5NiUsICRiYXNlIDQlKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtJHdpZHRoIDA7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAkd2lkdGggMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyAkY3ViaWM7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgJjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJGJhc2U7XHJcbiAgfVxyXG4gICY6Zm9jdXMsXHJcbiAgJjp2YWxpZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTYlLCAkYmFzZSA0JSk7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDAwcHggMDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC4zcyBlYXNlLCBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcclxuICAmIH4gc3Bhbi52YWxpZGF0aW9uLXRleHQge1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAmOm5vdChbdmFsdWU9XCJcIl0pIHtcclxuICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICRiYXNlO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1czpub3QoOnZhbGlkKTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAkaW52YWxpZDtcclxuICAgIH1cclxuICB9XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgICAmOm5vdCg6dmFsaWQpOm5vdChbdmFsdWU9XCJcIl0pIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRpbnZhbGlkO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gYm90dG9tLFxyXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTYlLFxyXG4gICAgICAgICRpbnZhbGlkIDQlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6bm90KDpmb2N1cyk6bm90KDp2YWxpZCk6bm90KFt2YWx1ZT1cIlwiXSkge1xyXG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAkaW52YWxpZDtcclxuICAgIH1cclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkaW52YWxpZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gYm90dG9tLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDk2JSxcclxuICAgICAgJGludmFsaWQgNCVcclxuICAgICk7XHJcbiAgICAmIH4gc3Bhbi52YWxpZGF0aW9uLXRleHQge1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICBjb2xvcjogJGludmFsaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyAkY3ViaWMsIGJveC1zaGFkb3cgMC4ycyAkY3ViaWM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICRiYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIHdpZHRoOiAkd2lkdGg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbn1cclxuXHJcbi8qYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAncm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICRiYXNlO1xyXG4gIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59Ki9cclxuXHJcbmEge1xyXG4gIHdpZHRoOiA0MnB4O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICRiYXNlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDUwcHggY2FsYyg1MCUgLSAyMXB4KTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgJGN1YmljO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1yaWdodCAwLjJzICRjdWJpYztcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICB3aWR0aDogMTM0cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_mailer_service__WEBPACK_IMPORTED_MODULE_3__["MailerService"] }]; }, null); })();


/***/ }),

/***/ "uK48":
/*!*******************************************************!*\
  !*** ./src/app/services/shared/apiservice.service.ts ***!
  \*******************************************************/
/*! exports provided: ApiserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiserviceService", function() { return ApiserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_settings_sitesettings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/settings/sitesettings.json */ "J8bY");
var _assets_settings_sitesettings_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/settings/sitesettings.json */ "J8bY", 1);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class ApiserviceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.settings = JSON.parse(JSON.stringify(_assets_settings_sitesettings_json__WEBPACK_IMPORTED_MODULE_1___namespace));
    }
    BuildApiEndPoint(apiName, endPointName) {
        let api = this.settings.ApiSettings.filter(e => e.ApiName == apiName);
        if (api.length == 0)
            throw new Error("Api does not exist");
        let endPoint = api[0].EndPointNames.filter(e => e.Name == endPointName);
        if (endPoint.length == 0)
            throw new Error("endpoint  does not exist");
        return api[0].ApiRoot + endPoint[0].EndPoint;
    }
    sendPost(apiName, endPoint, body) {
        return this.httpClient.post(this.BuildApiEndPoint(apiName, endPoint), body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
}
ApiserviceService.ɵfac = function ApiserviceService_Factory(t) { return new (t || ApiserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ApiserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiserviceService, factory: ApiserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ukFw":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 4, vars: 0, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_aboutUs$$SRC_APP_COMPONENTS_ABOUT_US_ABOUT_US_COMPONENT_TS_1 = goog.getMsg("{$startParagraph} Acroyoga (also written Acro-Yoga or Acro Yoga) is a physical practice which combines yoga and acrobatics.[1] Acroyoga includes many types of (mostly recreational) partner and group acrobatics in which at least someone is lifted. As such it also draws on traditions of circus arts, cheer-leading, and dance acro. Acroyoga is more vigorous than many traditional forms of yoga as exercise, and may lead to more injuries. Learning Acroyoga requires strength training, flexibility training and technique training.[5] Strength training is accomplished through repetition of exercises like push-ups, hand walking and handstands. Flexibility training is best done at the end of a session with a partner. {$closeParagraph}{$startParagraph} Learning good Acroyoga technique takes time and effort and is best learned with an expert teacher.[5] One important Acroyoga technique is called bone stacking. This involves the base partner keeping arms and legs straight to maximize the weight load on bones rather than muscles to support the flyer.[6] A typical Acro Yoga session may include:[7] Circle ceremony promotes communication and openness Warm-up to gradually get your muscles ready for more strenuous exercise Partner flow - continue warming up with asanas and stretching with a partner[8] Inversions help build trust between the partners[8] Flying and acrobatics Some communities have regular Acro Yoga meetings to provide a place for interested people to come together and practice for free, called jams. There are also larger Acro Yoga events such as the Dutch Acrobatics Convention, Acro SF, Vancouver Acro Festival, to name a few, that draw a global audience of practitioners. All over the world, there are instructors teaching Acro Yoga in regular classes and workshops. You can learn Acroyoga by yourself, but it takes time, discipline and responsibility, as you may not know all the techniques that will make the practice safe, for yourself and others. {$closeParagraph}", { "startParagraph": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]", "closeParagraph": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]" });
        i18n_0 = MSG_EXTERNAL_aboutUs$$SRC_APP_COMPONENTS_ABOUT_US_ABOUT_US_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\n  " + "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]" + "\n    Acroyoga (also written Acro-Yoga or Acro Yoga) is a physical practice which\n    combines yoga and acrobatics.[1] Acroyoga includes many types of (mostly\n    recreational) partner and group acrobatics in which at least someone is\n    lifted. As such it also draws on traditions of circus arts, cheer-leading,\n    and dance acro. Acroyoga is more vigorous than many traditional forms of\n    yoga as exercise, and may lead to more injuries. Learning Acroyoga requires\n    strength training, flexibility training and technique training.[5] Strength\n    training is accomplished through repetition of exercises like push-ups, hand\n    walking and handstands. Flexibility training is best done at the end of a\n    session with a partner.\n  " + "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]" + "\n  " + "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]" + "\n    Learning good Acroyoga technique takes time and effort and is best learned\n    with an expert teacher.[5] One important Acroyoga technique is called bone\n    stacking. This involves the base partner keeping arms and legs straight to\n    maximize the weight load on bones rather than muscles to support the\n    flyer.[6] A typical Acro Yoga session may include:[7] Circle ceremony\n    promotes communication and openness Warm-up to gradually get your muscles\n    ready for more strenuous exercise Partner flow - continue warming up with\n    asanas and stretching with a partner[8] Inversions help build trust between\n    the partners[8] Flying and acrobatics Some communities have regular Acro\n    Yoga meetings to provide a place for interested people to come together and\n    practice for free, called jams. There are also larger Acro Yoga events such\n    as the Dutch Acrobatics Convention, Acro SF, Vancouver Acro Festival, to\n    name a few, that draw a global audience of practitioners. All over the\n    world, there are instructors teaching Acro Yoga in regular classes and\n    workshops. You can learn Acroyoga by yourself, but it takes time, discipline\n    and responsibility, as you may not know all the techniques that will make\n    the practice safe, for yourself and others.\n  " + "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]" + "";
    } i18n_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](i18n_0); return [[1, "background-text"], i18n_0, [1, "about-us"]]; }, template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".background-text[_ngcontent-%COMP%] {\n  background-image: url('background-text.svg');\n  background-size: cover;\n  height: calc(100vh - 150px);\n  padding: 40px;\n  overflow: auto;\n}\n\n.about-us[_ngcontent-%COMP%] {\n  font-family: \"nouvelle vague\";\n  font-weight: normal;\n  font-size: 1.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC10ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLXRleHQuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uYWJvdXQtdXMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIm5vdXZlbGxlIHZhZ3VlXCI7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "ukFw");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "pO+s");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");







const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'about-us', component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"] },
    { path: 'contact-us', component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                ],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map