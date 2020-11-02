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
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");











function MenuComponent_mat_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_mat_toolbar_1_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r2.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nomads acroyoga");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_mat_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_mat_toolbar_2_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r2.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nomads acroyoga");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " About us ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "library_books");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Our courses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Contact us ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/about-us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/our-courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/contact-us");
} }
class MenuComponent {
    constructor(deviceDetector) {
        this.deviceDetector = deviceDetector;
        this.isMobile = this.deviceDetector.isMobile();
    }
    ngOnInit() { }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 18, vars: 6, consts: [["color", "primary", "mat-icon-button", "", 4, "ngIf"], ["fixedInViewport", "true"], ["sidenav", ""], ["mat-list-item", "", 3, "routerLink", "click"], ["color", "primary", "mat-icon-button", ""], ["mat-icon-button", ""], [3, "click"], [1, "toolbar-text"], ["mat-icon-button", "", "fxHide", "", "fxShow.xs", ""], ["fxHide.xs", "", 2, "border-radius", "20px", "color", "white", "text-decoration", "none", "cursor", "pointer", "vertical-align", "middle", 3, "routerLink"], ["src", "assets/img/logo-fondo-blanco.png", 2, "width", "40px", "height", "40px", "border-radius", "20px"], [1, "fill-space"], ["mat-button", "", "fxHide.xs", "", 3, "routerLink"], [1, "mr"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_mat_toolbar_1_Template, 7, 0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_mat_toolbar_2_Template, 27, 5, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " About us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Our courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Contact us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/about-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/our-courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/contact-us");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultShowHideDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".mat-drawer-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky;\n  \n  top: 0;\n  \n  z-index: 1000;\n}\n\n.mat-sidenav[_ngcontent-%COMP%] {\n  padding-top: 60px;\n}\n\n.toolbar-text[_ngcontent-%COMP%] {\n  font-family: AndelliaDavilton !important;\n  font-size: 2.2em;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background-color: #731c46;\n}\n\n.fill-space[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUEwQix5QkFBQTtFQUMxQixNQUFBO0VBQVEseUNBQUE7RUFDUixhQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtBQUtGOztBQUZBO0VBQ0Usd0NBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UseUJBQUE7QUFNRjs7QUFKQTtFQUdFLGNBQUE7QUFLRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xyXG4gIHRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG4ubWF0LXNpZGVuYXYge1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4udG9vbGJhci10ZXh0IHtcclxuICBmb250LWZhbWlseTogQW5kZWxsaWFEYXZpbHRvbiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMi4yZW07XHJcbn1cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzMxYzQ2O1xyXG59XHJcbi5maWxsLXNwYWNlIHtcclxuICAvLyBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXHJcbiAgLy8gRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC5cclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss'],
            }]
    }], function () { return [{ type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"] }]; }, null); })();


/***/ }),

/***/ "6DqY":
/*!*****************************************************************!*\
  !*** ./src/app/components/our-courses/our-courses.component.ts ***!
  \*****************************************************************/
/*! exports provided: OurCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurCoursesComponent", function() { return OurCoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngmodule/material-carousel */ "XZNO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function OurCoursesComponent_mat_carousel_slide_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-carousel-slide", 9);
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", slide_r1.image)("hideOverlay", false);
} }
class OurCoursesComponent {
    constructor(deviceDetector) {
        this.deviceDetector = deviceDetector;
        this.slides = [
            { image: '../../../assets/img/textura-solo-imagen.jpg' },
            { image: '../../../assets/img/logo-fondo-blanco.png' },
            { image: '../../../assets/img/textura-texto-foto-manchas.svg' },
        ];
        this.isMobile = this.deviceDetector.isMobile();
    }
    ngOnInit() {
        this.auto = this.isMobile ? '400px' : '680px';
        this.proportion = this.isMobile ? '60' : '25';
    }
}
OurCoursesComponent.ɵfac = function OurCoursesComponent_Factory(t) { return new (t || OurCoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"])); };
OurCoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurCoursesComponent, selectors: [["app-our-courses"]], decls: 33, vars: 7, consts: [[1, "background-container", "background-text"], [1, "text-container"], [1, "subtitle"], [1, "carousel-container"], ["timings", "250ms ease-in", "interval", "5000", "color", "accent", "maxWidth", "auto", "slides", "5", "orientation", "ltr", 3, "autoplay", "loop", "hideArrows", "hideIndicators", "useKeyboard", "useMouseWheel"], [3, "image", "hideOverlay", 4, "ngFor", "ngForOf"], ["href", "/contact-us/Online%20class"], ["href", "/contact-us/Drop%20in%20class"], ["href", "/contact-us/Live%20workshop"], [3, "image", "hideOverlay"]], template: function OurCoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Would you like to practice ACROYOGA?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OurCoursesComponent_mat_carousel_slide_7_Template, 1, 2, "mat-carousel-slide", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Would you like to learn some postures or sequences?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " We offer 1-hour on-line or recorded classes, where you could learn basic acroyoga poses and transitions and have fun composing your own sequences. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "On-line classes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " for more info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Drop-in classes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " We are currently living in Tenerife and we offer drop-in classes in the different beaches and parks of the island. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " or follow our profile to know where we are. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Live workshop:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " are you a yoga school or have you got a place where to hold a workshop? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " and let\u2019s talk about it! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("loop", true)("hideArrows", false)("hideIndicators", false)("useKeyboard", true)("useMouseWheel", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_2__["MatCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_2__["MatCarouselSlideComponent"]], styles: [".background-container[_ngcontent-%COMP%] {\n  background-image: url('textura-texto-foto-manchas.svg');\n}\n\n.text-container[_ngcontent-%COMP%] {\n  background-color: rgba(254, 248, 234, 0.2) !important;\n}\n\n.carousel-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdXItY291cnNlcy9vdXItY291cnNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxREFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vdXItY291cnNlcy9vdXItY291cnNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvdGV4dHVyYS10ZXh0by1mb3RvLW1hbmNoYXMuc3ZnKTtcclxufVxyXG5cclxuLnRleHQtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NCwgMjQ4LCAyMzQsIDAuMikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurCoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-courses',
                templateUrl: './our-courses.component.html',
                styleUrls: ['./our-courses.component.scss'],
            }]
    }], function () { return [{ type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"] }]; }, null); })();


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
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[1, "logo"], [1, "slogam"], [1, "slogam-text"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Jump into the void and be confident...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".background-container[_ngcontent-%COMP%] {\n  background-image: none;\n  padding: 0px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: calc(100vh - 150px);\n  background-image: url('logo-transparente.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-attachment: fixed;\n  z-index: 1;\n}\n\n.slogam[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  background-image: url('textura-texto-hojas.svg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.8;\n  align-items: center;\n  text-align: center;\n}\n\n.slogam-text[_ngcontent-%COMP%] {\n  font-size: 5em;\n  padding-top: 50vh;\n  font-family: AndelliaDavilton;\n  font-weight: bolder;\n  line-height: 1.1;\n  text-align: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsOENBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0RBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9nby10cmFuc3BhcmVudGUucG5nKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uc2xvZ2FtIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3RleHR1cmEtdGV4dG8taG9qYXMuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsb2dhbS10ZXh0IHtcclxuICBmb250LXNpemU6IDVlbTtcclxuICBwYWRkaW5nLXRvcDogNTB2aDtcclxuICBmb250LWZhbWlseTogQW5kZWxsaWFEYXZpbHRvbjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "J8bY":
/*!***********************************************!*\
  !*** ./src/assets/settings/sitesettings.json ***!
  \***********************************************/
/*! exports provided: ApiSettings, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ApiSettings\":[{\"ApiName\":\"mail\",\"ApiRoot\":\"https://mailsender20201021021819.azurewebsites.net/api/email/\",\"EndPointNames\":[{\"Name\":\"send\",\"EndPoint\":\"send\",\"RequireAuthorization\":false,\"UseCustomerProfile\":false}]}]}");

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
/* harmony import */ var _gapi_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gapi.module */ "eUgs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_our_courses_our_courses_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/our-courses/our-courses.component */ "6DqY");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
















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
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _gapi_module__WEBPACK_IMPORTED_MODULE_11__["GapiModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
        _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"],
        _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"],
        _components_our_courses_our_courses_component__WEBPACK_IMPORTED_MODULE_13__["OurCoursesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _gapi_module__WEBPACK_IMPORTED_MODULE_11__["GapiModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                    _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"],
                    _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"],
                    _components_our_courses_our_courses_component__WEBPACK_IMPORTED_MODULE_13__["OurCoursesComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _gapi_module__WEBPACK_IMPORTED_MODULE_11__["GapiModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
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
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "eUgs":
/*!********************************!*\
  !*** ./src/app/gapi.module.ts ***!
  \********************************/
/*! exports provided: GapiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GapiModule", function() { return GapiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_gapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-gapi */ "4dwI");




let gapiClientConfig = {
    client_id: "212863676403-s969j469fm0ejbtrq21274qm7224qd9j.apps.googleusercontent.com",
    discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
    scope: [
        "https://www.googleapis.com/auth/gmail.send",
        "https://www.googleapis.com/auth/gmail.compose"
    ].join(" ")
};
class GapiModule {
}
GapiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GapiModule });
GapiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GapiModule_Factory(t) { return new (t || GapiModule)(); }, imports: [[
            //...
            ng_gapi__WEBPACK_IMPORTED_MODULE_1__["GoogleApiModule"].forRoot({
                provide: ng_gapi__WEBPACK_IMPORTED_MODULE_1__["NG_GAPI_CONFIG"],
                useValue: gapiClientConfig
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GapiModule, { imports: [ng_gapi__WEBPACK_IMPORTED_MODULE_1__["GoogleApiModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GapiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    //...
                    ng_gapi__WEBPACK_IMPORTED_MODULE_1__["GoogleApiModule"].forRoot({
                        provide: ng_gapi__WEBPACK_IMPORTED_MODULE_1__["NG_GAPI_CONFIG"],
                        useValue: gapiClientConfig
                    }),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "fSPL":
/*!*************************************************!*\
  !*** ./src/app/services/mail/mailer.service.ts ***!
  \*************************************************/
/*! exports provided: MailerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailerService", function() { return MailerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_email_credentials_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/email/credentials.json */ "9M1M");
var _assets_email_credentials_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/email/credentials.json */ "9M1M", 1);
/* harmony import */ var _shared_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/apiservice.service */ "uK48");
/* harmony import */ var ng_gapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-gapi */ "4dwI");





class MailerService {
    constructor(apiService, gApi) {
        this.apiService = apiService;
        this.gApi = gApi;
        this.credentials = _assets_email_credentials_json__WEBPACK_IMPORTED_MODULE_1___namespace;
    }
    sendMail(mail) {
        this.apiService
            .sendPost('mail', 'send', mail)
            .subscribe((e) => console.log(e));
    }
}
MailerService.ɵfac = function MailerService_Factory(t) { return new (t || MailerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_gapi__WEBPACK_IMPORTED_MODULE_3__["GoogleApiService"])); };
MailerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MailerService, factory: MailerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _shared_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"] }, { type: ng_gapi__WEBPACK_IMPORTED_MODULE_3__["GoogleApiService"] }]; }, null); })();


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
/* harmony import */ var src_app_services_mail_mailer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mail/mailer.service */ "fSPL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class ContactUsComponent {
    constructor(mailservice, actRoute) {
        this.mailservice = mailservice;
        this.actRoute = actRoute;
        this.name = '';
        this.email = '';
        this.message = '';
        this.gCredentials = _assets_email_credentials_json__WEBPACK_IMPORTED_MODULE_2___namespace;
        this.subject = actRoute.snapshot.params.subject;
    }
    ngOnInit() {
        // new calendar_v3.Calendar({ })
        // const oAuth2Client = new google.auth.OAuth2(
        //   this.gCredentials.web.client_id, this.gCredentials.web.client_secret, '');
    }
    sendMail($event) {
        let mail = new src_app_model_mail__WEBPACK_IMPORTED_MODULE_1__["Mail"]();
        mail.name = this.name;
        mail.body = this.message;
        mail.mailTo = 'acroyoga.nomads@gmail.com';
        mail.replayTo = this.email;
        mail.subject = this.subject;
        console.log(mail);
        this.mailservice.sendMail(mail);
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mail_mailer_service__WEBPACK_IMPORTED_MODULE_3__["MailerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 18, vars: 5, consts: [[1, "container"], [1, "card-contact"], ["mat-card-avatar", "", 1, ""], ["name", "name", "id", "name", "placeholder", "Name", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["id", "email", "name", "email", "placeholder", "Email address", "type", "email", "onblur", "this.setAttribute('value', this.value);", "required", "", 3, "ngModel", "ngModelChange"], [1, "validation-text"], ["name", "subject", "id", "subject", "placeholder", "Subject", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], [1, "flex"], ["id", "message", "name", "message", "placeholder", "Message", "rows", "3", "required", "", 3, "ngModel", "ngModelChange"], [3, "disabled", "click"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_10_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Please enter a valid email address.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_13_listener($event) { return ctx.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactUsComponent_Template_button_click_16_listener($event) { return ctx.sendMail($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.name != "" && ctx.email != "" && ctx.message != ""));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: ["@media (min-width: 320px) {\n  .container[_ngcontent-%COMP%] {\n    background-image: url('textura-solo-imagen.jpg');\n    height: calc(100vh - 70px - 80px);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 40px;\n    background-size: cover;\n  }\n\n  .card-contact[_ngcontent-%COMP%] {\n    max-width: 750px;\n    width: 100%;\n    height: 330px;\n  }\n}\ninput[_ngcontent-%COMP%]::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font: inherit;\n  -webkit-transition: transform 0.3s ease-in-out, font-size 0.6s ease-in-out, visibility 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, font-size 0.6s ease-in-out, visibility 0.3s ease-in-out;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font: inherit;\n  font-size: 0.8em;\n  width: 100%;\n  display: block;\n  border: none;\n  padding: 20px 0 10px;\n  border-bottom: solid 1px #dd92a2;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #dd92a2 4%);\n  background-position: -100% 0;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  transition: background 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  resize: none;\n  overflow: hidden;\n}\ninput[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\n  color: #dd92a2;\n}\ninput[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:valid, textarea[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:valid {\n  box-shadow: none;\n  outline: none;\n  background-position: 0 0;\n}\ninput[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, input[_ngcontent-%COMP%]:valid::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]:valid::-webkit-input-placeholder {\n  font-size: 0.8em;\n  transform: translateY(-20px);\n  visibility: visible !important;\n  opacity: 1;\n}\ninput[type=email][_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #dd92a2 4%);\n  background-repeat: no-repeat;\n  transition: border-bottom 0.3s ease, background 0.3s ease;\n}\ninput[type=email][_ngcontent-%COMP%]    ~ span.validation-text[_ngcontent-%COMP%] {\n  visibility: hidden;\n  font-size: 0.6em;\n  width: 100%;\n  transition: color 0.3s ease-in-out;\n}\ninput[type=email][_ngcontent-%COMP%]:not([value=\"\"])::-webkit-input-placeholder {\n  font-size: 0.8em;\n  transform: translateY(-20px);\n  visibility: visible !important;\n  opacity: 1;\n}\ninput[type=email][_ngcontent-%COMP%]:not([value=\"\"]):focus::-webkit-input-placeholder {\n  color: #dd92a2;\n}\ninput[type=email][_ngcontent-%COMP%]:not([value=\"\"]):focus:not(:valid)::-webkit-input-placeholder {\n  color: #e91e63;\n}\ninput[type=email][_ngcontent-%COMP%]:focus {\n  background-position: 0 0;\n}\ninput[type=email][_ngcontent-%COMP%]:focus:not(:valid):not([value=\"\"]) {\n  border-bottom: solid 1px #e91e63;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #e91e63 4%);\n}\ninput[type=email][_ngcontent-%COMP%]:not(:focus):not(:valid):not([value=\"\"]) {\n  border-bottom: solid 1px #e91e63;\n  background-position: 0 0;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #e91e63 4%);\n}\ninput[type=email][_ngcontent-%COMP%]:not(:focus):not(:valid):not([value=\"\"])::-webkit-input-placeholder {\n  color: #e91e63;\n}\ninput[type=email][_ngcontent-%COMP%]:not(:focus):not(:valid):not([value=\"\"])    ~ span.validation-text[_ngcontent-%COMP%] {\n  visibility: visible;\n  color: #e91e63;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n}\n.flex[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  line-height: 120%;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  transition: transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), box-shadow 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);\n  border: none;\n  background: #dd92a2;\n  cursor: pointer;\n  border-radius: 3px;\n  padding: 6px;\n  width: 100%;\n  color: white;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);\n}\nbutton[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.2);\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: gray;\n  opacity: 0.5;\n}\n\na[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50px;\n  background: #dd92a2;\n  display: inline-block;\n  margin: 50px calc(50% - 21px);\n  white-space: nowrap;\n  padding: 13px;\n  box-sizing: border-box;\n  color: white;\n  transition: all 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);\n  font-family: Roboto, sans-serif;\n  text-decoration: none;\n  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.2);\n}\na[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  transition: margin-right 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\na[_ngcontent-%COMP%]:hover {\n  width: 134px;\n  transform: translateX(-50px);\n}\na[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRTtJQUNFLGdEQUFBO0lBQ0EsaUNBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtFQUxGOztFQU9BO0lBQ0UsZ0JBQUE7SUFDQSxXQWZJO0lBZ0JKLGFBQUE7RUFKRjtBQUNGO0FBT0E7O0VBRUUsYUFBQTtFQUNBLHVHQUFBO0VBQUEsK0ZBQUE7QUFMRjtBQVNBOztFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBL0JNO0VBZ0NOLGNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhFQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFORjtBQU9FOztFQUNFLGNBL0NHO0FBMkNQO0FBTUU7OztFQUVFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FBSEo7QUFJSTs7O0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQUFOO0FBS0E7RUFDRSw4RUFBQTtFQUVBLDRCQUFBO0VBQ0EseURBQUE7QUFIRjtBQUlFO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBckVJO0VBc0VKLGtDQUFBO0FBSEo7QUFNSTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFKTjtBQU1JO0VBQ0UsY0FuRkM7QUErRVA7QUFNSTtFQUNFLGNBcEZJO0FBZ0ZWO0FBT0U7RUFDRSx3QkFBQTtBQUxKO0FBTUk7RUFDRSxnQ0FBQTtFQUNBLDhFQUFBO0FBSk47QUFXRTtFQUlFLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4RUFBQTtBQVpKO0FBT0k7RUFDRSxjQXBHSTtBQStGVjtBQWNJO0VBQ0UsbUJBQUE7RUFDQSxjQS9HSTtBQW1HVjtBQWlCQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQWRGO0FBZUU7RUFDRSxpQkFBQTtBQWJKO0FBaUJBO0VBQ0UsZ0JBQUE7RUFDQSwrR0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFsSUs7RUFtSUwsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBbklNO0VBb0lOLFlBQUE7RUFDQSwwQ0FBQTtBQWRGO0FBZUU7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0FBYko7QUFlRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQWJKO0FBaUJBOzs7Ozs7Ozs7OztFQUFBO0FBYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBcEtLO0VBcUtMLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQWZGO0FBZ0JFO0VBQ0Usa0JBQUE7RUFDQSwrREFBQTtBQWRKO0FBZ0JFO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0FBZEo7QUFlSTtFQUNFLGtCQUFBO0FBYk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYXNlOiAjZGQ5MmEyO1xyXG4kdGV4dDogIzczMWM0NjtcclxuJGludmFsaWQ6ICNlOTFlNjM7XHJcbiR3aWR0aDogMTAwJTtcclxuJGN1YmljOiBjdWJpYy1iZXppZXIoMC42NCwgMC4wOSwgMC4wOCwgMSk7XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3RleHR1cmEtc29sby1pbWFnZW4uanBnKTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHggLSA4MHB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLmNhcmQtY29udGFjdCB7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIGhlaWdodDogMzMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcclxudGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAwLjZzIGVhc2UtaW4tb3V0LFxyXG4gICAgdmlzaWJpbGl0eSAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICB3aWR0aDogJHdpZHRoO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAyMHB4IDAgMTBweDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGJhc2U7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA5NiUsICRiYXNlIDQlKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtJHdpZHRoIDA7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAkd2lkdGggMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyAkY3ViaWM7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgJjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJGJhc2U7XHJcbiAgfVxyXG4gICY6Zm9jdXMsXHJcbiAgJjp2YWxpZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTYlLCAkYmFzZSA0JSk7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDAwcHggMDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC4zcyBlYXNlLCBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcclxuICAmIH4gc3Bhbi52YWxpZGF0aW9uLXRleHQge1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAmOm5vdChbdmFsdWU9XCJcIl0pIHtcclxuICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICRiYXNlO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1czpub3QoOnZhbGlkKTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAkaW52YWxpZDtcclxuICAgIH1cclxuICB9XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgICAmOm5vdCg6dmFsaWQpOm5vdChbdmFsdWU9XCJcIl0pIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRpbnZhbGlkO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gYm90dG9tLFxyXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTYlLFxyXG4gICAgICAgICRpbnZhbGlkIDQlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6bm90KDpmb2N1cyk6bm90KDp2YWxpZCk6bm90KFt2YWx1ZT1cIlwiXSkge1xyXG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAkaW52YWxpZDtcclxuICAgIH1cclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkaW52YWxpZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gYm90dG9tLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDk2JSxcclxuICAgICAgJGludmFsaWQgNCVcclxuICAgICk7XHJcbiAgICAmIH4gc3Bhbi52YWxpZGF0aW9uLXRleHQge1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICBjb2xvcjogJGludmFsaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyAkY3ViaWMsIGJveC1zaGFkb3cgMC4ycyAkY3ViaWM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICRiYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIHdpZHRoOiAkd2lkdGg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxufVxyXG5cclxuLyphIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdyb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogJGJhc2U7XHJcbiAgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbn0qL1xyXG5cclxuYSB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogJGJhc2U7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogNTBweCBjYWxjKDUwJSAtIDIxcHgpO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAkY3ViaWM7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLXJpZ2h0IDAuMnMgJGN1YmljO1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIHdpZHRoOiAxMzRweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_mail_mailer_service__WEBPACK_IMPORTED_MODULE_3__["MailerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_settings_sitesettings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/settings/sitesettings.json */ "J8bY");
var _assets_settings_sitesettings_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/settings/sitesettings.json */ "J8bY", 1);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");







class ApiserviceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Ocp-Apim-Trace': 'true',
            }),
        };
        this.settings = JSON.parse(JSON.stringify(_assets_settings_sitesettings_json__WEBPACK_IMPORTED_MODULE_2__));
    }
    BuildApiEndPoint(apiName, endPointName) {
        let api = this.settings.ApiSettings.filter((e) => e.ApiName == apiName);
        if (api.length == 0)
            throw new Error('Api does not exist');
        let endPoint = api[0].EndPointNames.filter((e) => e.Name == endPointName);
        if (endPoint.length == 0)
            throw new Error('endpoint  does not exist');
        return api[0].ApiRoot + endPoint[0].EndPoint;
    }
    sendPost(apiName, endPoint, body) {
        return this.httpClient
            .post(this.BuildApiEndPoint(apiName, endPoint), body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    }
}
ApiserviceService.ɵfac = function ApiserviceService_Factory(t) { return new (t || ApiserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ApiserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiserviceService, factory: ApiserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");







class AboutUsComponent {
    constructor(platformLocation, sanitizer, deviceDetector) {
        this.platformLocation = platformLocation;
        this.deviceDetector = deviceDetector;
        this.videoUrl = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/TpCxmvPI4G4');
        this.isMobile = this.deviceDetector.isMobile();
        // this.stefaniaImage =
        // this.platformLocation.pathname + '/assets/img/logo-transparente.png';
    }
    ngOnInit() { }
    getVideoHeight() {
        return this.isMobile ? '200px' : '680px';
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__["DeviceDetectorService"])); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 85, vars: 2, consts: [[1, "background-container", "background-text"], [1, "text-container"], [1, "subtitle"], [1, "about-us"], [1, "video-container"], ["width", "92%", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media;\n      gyroscope; picture-in-picture", "allowfullscreen", "", 1, "polaroid", 3, "src", "height"], [1, "image-description"], [1, "therapy-photo", "polaroid"], [2, "width", "100%"], ["fxLayout", "row wrap", "fxLayoutGap", "1%"], ["fxFlex", "49%", "fxFlex.lg", "48%", "fxFlex.sm", "100%", "fxFlex.xs", "100%"], ["mat-card-image", "", "src", "assets/img/stefania-photo.jpeg", "alt", "Photo of Stefania", 1, ""], ["fxFlex", "49%", "fxFlex.lg", "49%", "fxFlex.sm", "100%", "fxFlex.xs", "100%"], ["mat-card-image", "", "src", "assets/img/leonardo-photo.jpg", "alt", "Photo of Stefania"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hi guys!! Thanks for joining us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Nomads - Acroyoga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ": a fusion of acrobatics, yoga and nomadic life. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ACROBATICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " in acroyoga is considered as a solar practice, this helps us develop self-confidence, together with the strength and fun of acrobatics. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "YOGA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ", the lunar part, helps us cultivate awareness in breathing, balance and connection. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "NOMADIC LIFE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " makes us discover new places and develop curiosity, adaptation, mental and emotional flexibility. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Acroyoga is a large ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "global community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ". Regardless of your location, skill-level, or income, we will provide a safe, fun and empowering practice for you and your partners. AcroYoga supports physical health, clear and kind communication, creative potential, and human connection. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " We talk about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " because we practice it with other people. Being connected with other bodies promotes concentration, balance and confidence in others. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " NO WORRIES!!! You do not need to be an expert in yoga or acrobatics to practice this discipline as there are postures that any beginner can perform. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " To achieve success in this discipline, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "mutual help is needed that forces people to let go of control, fear, anxiety and free themselves from useless burdens.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Doing a balanced posture requires utmost concentration and attention. This state of focus improves a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "greater awareness in the present, leaving distractions and anxiety aside.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " WHAT WE LOVE about Yoga, acrobatics and travel is that they have a common ground: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " living in the present in balance with others.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Acroyoga as a couple's therapy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Why should a couple practice acroyoga? Being in such close physical contact increases the desire to be more united; trust also plays a great role in this activity, and besides, with all these acrobatics in the air, both the partners will have to trust each other to make every movement fluid and nice. The couple will have a more effective communication without too much tension: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\"so don't have any doubts, get out of the couple's routine and add this kind of activity that will unite you and make you feel healthier.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Who are we? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Stefania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Stefania is a Hatha and Vinyasa Yoga Teacher certified with International Yoga Alliance, she has been also working as a translator and interpreter in Italian,English, French and Spanish for 15 years ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Leonardo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Leonardo is a musician, web developer, passionate about acrobatics, aerial dance, skate and surf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"])("height", ctx.getVideoHeight());
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"]], styles: [".background-container[_ngcontent-%COMP%] {\n  background-image: url('background-text.svg');\n}\n\n.therapy-text[_ngcontent-%COMP%] {\n  font-family: \"Nouvelle vague\", sans-serif;\n  font-weight: normal;\n  font-size: 1.4em;\n  text-align: justify;\n  line-height: 1.2;\n}\n\n.therapy-photo[_ngcontent-%COMP%] {\n  background-image: url('therapy-photo.JPG');\n  background-size: contain;\n  height: 146px;\n  width: 220px;\n  background-repeat: no-repeat;\n  display: block;\n  float: left;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n\n.stefania-photo[_ngcontent-%COMP%] {\n  background-image: url('textura-solo-imagen.jpg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.polaroid[_ngcontent-%COMP%] {\n  border-top: solid 10px;\n  border-left: solid 10px;\n  border-right: solid 10px;\n  border-bottom: solid 30px;\n  border-color: white;\n}\n\n.image-description[_ngcontent-%COMP%] {\n  min-height: 200px;\n  display: block;\n}\n\n.video-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: solid 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDRDQUFBO0FBQUY7O0FBRUE7RUFDRSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0RBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBR0Y7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFHRSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWluX2hlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG4uYmFja2dyb3VuZC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQtdGV4dC5zdmcpO1xyXG59XHJcbi50aGVyYXB5LXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdXZlbGxlIHZhZ3VlXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG4udGhlcmFweS1waG90byB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvdGhlcmFweS1waG90by5KUEcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBoZWlnaHQ6IDE0NnB4O1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zdGVmYW5pYS1waG90byB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvdGV4dHVyYS1zb2xvLWltYWdlbi5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ucG9sYXJvaWQge1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDEwcHg7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDEwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDMwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmltYWdlLWRlc2NyaXB0aW9uIHtcclxuICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi52aWRlby1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5ociB7XHJcbiAgYm9yZGVyOiBzb2xpZCAwLjVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.scss'],
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PlatformLocation"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__["DeviceDetectorService"] }]; }, null); })();


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
/* harmony import */ var _components_our_courses_our_courses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/our-courses/our-courses.component */ "6DqY");








const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'about-us', component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"] },
    { path: 'contact-us/:subject', component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"] },
    { path: 'contact-us', component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"] },
    { path: 'our-courses', component: _components_our_courses_our_courses_component__WEBPACK_IMPORTED_MODULE_5__["OurCoursesComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
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
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
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
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngmodule/material-carousel */ "XZNO");










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
            _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_8__["MatCarouselModule"],
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_8__["MatCarouselModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_8__["MatCarouselModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_8__["MatCarouselModule"]] }); })();
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
                    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_8__["MatCarouselModule"],
                ],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_8__["MatCarouselModule"],
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