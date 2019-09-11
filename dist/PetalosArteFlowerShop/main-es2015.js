(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-navbar></app-navbar>\n<div class=\"wrapper container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>\n<app-footer class=\"footer\"></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/arrangements/arrangements.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/arrangements/arrangements.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start\" class=\"album py-5 bg-light\">\n    {{environment.testVar}}\n    <div class=\"row mb-2\">\n        <div class=\"col-lg-6 col-md-6 col-sm-12 rightOnSmall\">\n            Sort by: \n            <select class=\"custom-select\" (change)=\"sortByPrice()\" [(ngModel)]=\"sortSelection\">\n                <option selected>Newest</option>\n                <option *ngFor=\"let category of sortCategories\" value=\"{{category}}\">{{category}}</option>\n            </select>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-12 text-right\">\n            Filter by category:\n            <select class=\"custom-select\" (change)=\"filterByCategory()\" [(ngModel)]=\"selection\">\n                <option selected>All</option>\n                <option *ngFor=\"let category of categories\" value=\"{{category}}\">{{category}}</option>\n            </select>\n        </div>\n    </div>\n    \n    <nav aria-label=\"Page navigation\">\n        <ul class=\"pagination justify-content-center\">\n\n            <li class=\"page-item\" [ngClass]=\"{'disabled': atBeginning}\">\n                <a class=\"page-link\" href=\"#start\" aria-label=\"Previous\"(click)=\"goToPrevious()\">\n                    Previous\n                </a>\n            </li>\n\n            <li class=\"page-item\" *ngFor=\"let page of pages\" [ngClass]=\"{'active': currentPage == page}\">\n                <a class=\"page-link\" href=\"#start\" (click)=\"goToPage(page)\">{{page}}</a>\n            </li>\n\n            <li class=\"page-item\" [ngClass]=\"{'disabled': atEnd}\">\n                <a class=\"page-link\" href=\"#start\" aria-label=\"Next\"(click)=\"goToNext()\">\n                    Next\n                </a>\n            </li>\n\n        </ul>\n    </nav>\n\n    <div class=\"row\">\n        <div class=\"col-6 col-md-4 mb-4\" *ngFor=\"let arrangement of arrangementPages[currentPage]\">\n            <div class=\"card box-shadow h-100\">\n                <img class=\"card-img-top ieImage\"\n                    src=\"{{arrangement.imageUrl}}\"\n                    alt=\"{{arrangement.name}}\">\n                <div class=\"card-body\" style=\"text-align: center;\">\n                    <p class=\"mb-0\" style=\"font-size: 1.4rem\">{{arrangement.name}}</p>\n                    <p class=\"mb-2\">{{arrangement.price | currency}}</p>\n                    <button type=\"button\"\n                        routerLink=\"product/{{arrangement.id}}\"\n                        class=\"btn btn-sm btn-outline-secondary\"\n                        style=\"width: 75%\">\n                        View\n                    </button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <nav aria-label=\"Page navigation\">\n        <ul class=\"pagination justify-content-center\">\n\n            <li class=\"page-item\" [ngClass]=\"{'disabled': atBeginning}\">\n                <a class=\"page-link\" href=\"#start\" aria-label=\"Previous\"(click)=\"goToPrevious()\">\n                    Previous\n                </a>\n            </li>\n\n            <li class=\"page-item\" *ngFor=\"let page of pages\" [ngClass]=\"{'active': currentPage == page}\">\n                <a class=\"page-link\" href=\"#start\" (click)=\"goToPage(page)\">{{page}}</a>\n            </li>\n\n            <li class=\"page-item\" [ngClass]=\"{'disabled': atEnd}\">\n                <a class=\"page-link\" href=\"#start\" aria-label=\"Next\"(click)=\"goToNext()\">\n                    Next\n                </a>\n            </li>\n\n        </ul>\n    </nav>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let product of products\" class=\"mt-3\">\n  <div class=\"row\">\n    <div class=\"col-4\" style=\"padding: 0px\">\n      <img src=\"{{product.imageUrl}}\" alt=\"arrangement image\" width=\"130px\">\n    </div>\n    <div class=\"col-4\">\n      <h4>\n        {{product.name}}\n      </h4>\n      <div *ngIf=\"product.selectedAddons.length > 0\">\n        along with:\n        <div *ngFor=\"let addon of product.selectedAddons\">\n          {{addon.description}}\n        </div>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <h4>\n        Price: {{product.price | currency}}\n      </h4>\n    </div>\n  </div>\n\n  <div style=\"margin-top: 8px;\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"removeProduct(product);\">Remove</button>\n  </div>\n</div>\n\n<div class=\"mt-5\" *ngIf=\"products.length > 0\">\n  <form #paymentForm=\"ngForm\" (ngSubmit)=\"onSubmit(paymentForm)\">\n    <div class=\"row\">\n      <div id=\"customerInfoDiv\" class=\"col-6\">\n        <h4>1. Your Info</h4>\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\"\n            class=\"form-control\"\n            name=\"firstName\"\n            #customerFirstName=\"ngModel\"\n            [ngClass]=\"{'is-invalid':customerFirstName.errors && customerFirstName.touched}\"\n            [(ngModel)]=\"customer.firstName\"\n            minlength=\"2\" required>\n          <div [hidden]=\"!customerFirstName.errors?.required\"\n            class=\"invalid-feedback\">\n            First Name required.\n          </div>\n          <div [hidden]=\"!customerFirstName.errors?.minlength\"\n            class=\"invalid-feedback\">\n            First Name must be at least 2 characters\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name</label>\n          <input type=\"text\"\n            class=\"form-control\"\n            name=\"lastName\"\n            #customerLastName=\"ngModel\"\n            [ngClass]=\"{'is-invalid':customerLastName.errors && customerLastName.touched}\"\n            [(ngModel)]=\"customer.lastName\"\n            minlength=\"2\" required>\n          <div [hidden]=\"!customerLastName.errors?.required\"\n            class=\"invalid-feedback\">\n            Last Name required.\n          </div>\n          <div [hidden]=\"!customerLastName.errors?.minlength\"\n            class=\"invalid-feedback\">\n            Last Name must be at least 2 characters\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phone\">Phone Number</label>\n          <input type=\"text\"\n            class=\"form-control\"\n            name=\"phone\"\n            #customerPhone=\"ngModel\"\n            [ngClass]=\"{'is-invalid':customerPhone.errors && customerPhone.touched}\"\n            [(ngModel)]=\"customer.phone\"\n            placeholder=\"(123) 456-7890\"\n            [textMask]=\"{mask:phoneMask}\"\n            pattern=\"\\(\\d{3}\\) \\d{3}-\\d{4}\"\n            required>\n          <div [hidden]=\"!customerPhone.errors?.required\"\n            class=\"invalid-feedback\">\n            Phone number required.\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\"\n            class=\"form-control\"\n            name=\"email\"\n            #customerEmail=\"ngModel\"\n            [ngClass]=\"{'is-invalid':customerEmail.errors && customerEmail.touched}\"\n            [(ngModel)]=\"customer.email\"\n            pattern=\"\\S+@\\S+\"\n            required>\n          <div [hidden]=\"!customerEmail.errors?.required\"\n            class=\"invalid-feedback\">\n            Email required.\n          </div>\n          <div [hidden]=\"!customerEmail.errors?.pattern\"\n            class=\"invalid-feedback\">\n            Invalid Email.\n          </div>\n        </div>\n      </div>\n      <div id=\"recipientInfoDiv\" class=\"col-6\">\n        <h4>2. Their Info</h4>\n        <div class=\"form-group\">\n          <label for=\"rfirstName\">First Name</label>\n          <input type=\"text\"\n            class=\"form-control\"\n            name=\"rfirstName\"\n            #recipientFirstName=\"ngModel\"\n            [ngClass]=\"{'is-invalid':recipientFirstName.errors && recipientFirstName.touched}\"\n            [(ngModel)]=\"recipient.firstName\"\n            minlength=\"2\" required>\n          <div [hidden]=\"!recipientFirstName.errors?.required\"\n            class=\"invalid-feedback\">\n            First Name required.\n          </div>\n          <div [hidden]=\"!recipientFirstName.errors?.minlength\"\n            class=\"invalid-feedback\">\n            First Name must be at least 2 characters\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"rlastName\">Last Name</label>\n          <input type=\"text\"\n            class=\"form-control\"\n            name=\"rlastName\"\n            #recipientLastName=\"ngModel\"\n            [ngClass]=\"{'is-invalid':recipientLastName.errors && recipientLastName.touched}\"\n            [(ngModel)]=\"recipient.lastName\"\n            minlength=\"2\" required>\n          <div [hidden]=\"!recipientLastName.errors?.required\"\n            class=\"invalid-feedback\">\n            Last Name required.\n          </div>\n          <div [hidden]=\"!recipientLastName.errors?.minlength\"\n            class=\"invalid-feedback\">\n            Last Name must be at least 2 characters\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"rphone\">Phone Number (optional)</label>\n          <input type=\"text\"\n            class=\"form-control\"\n            name=\"rphone\"\n            #recipientPhone=\"ngModel\"\n            [ngClass]=\"{'is-invalid':recipientPhone.errors && recipientPhone.touched}\"\n            [(ngModel)]=\"recipient.phone\"\n            placeholder=\"(123) 456-7890\"\n            [textMask]=\"{mask:phoneMask}\"\n            pattern=\"\\(\\d{3}\\) \\d{3}-\\d{4}\">\n          <div [hidden]=\"!recipientPhone.errors?.required\"\n            class=\"invalid-feedback\">\n            Phone number required.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row text-center\">\n      <div class=\"col-12\">\n        <h4>3. Delivery Options</h4>\n      </div>\n      <div class=\"col-12 form-control remove-height\">\n        <label class=\"radio-inline\">\n          <input type=\"radio\" value=\"delivery\" name=\"deliveryOption\"\n            [(ngModel)]=\"deliveryOption\" (change)=\"toggleDeliveryOption()\"> Delivery\n        </label>\n        <label class=\"radio-inline\">\n          <input type=\"radio\" value=\"pickup\" name=\"deliveryOption\" disabled={{awayDate.active}}\n            [(ngModel)]=\"deliveryOption\" (change)=\"toggleDeliveryOption()\"> Pickup\n        </label>\n        <div *ngIf=\"deliveryOption == 'delivery'\">\n            <div class=\"form-group\">\n              <label for=\"mydate\">Delivery Date<br/>\n                Note: Cutoff time for same-day delivery is 1:00 pm\n              </label>\n              <div class=\"text-danger\" *ngIf=\"awayDate.active\"><b>Note:</b> {{awayDate.awayNote}}</div>\n              <my-date-picker\n                name=\"mydate\"\n                [options]=\"dateOptions\"\n                [(ngModel)]=\"deliveryDate\"\n                required>\n              </my-date-picker>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"addrLineOne\">Address</label>\n              <input type=\"text\"\n                class=\"form-control\"\n                name=\"addrLineOne\"\n                #addrLineOne=\"ngModel\"\n                [ngClass]=\"{'is-invalid':addrLineOne.errors && addrLineOne.touched}\"\n                [(ngModel)]=\"shippingAddr.lineOne\"\n                minlength=\"2\" required>\n              <div [hidden]=\"!addrLineOne.errors?.required\"\n                class=\"invalid-feedback\">\n                Address is required.\n              </div>\n              <div [hidden]=\"!addrLineOne.errors?.minlength\"\n                class=\"invalid-feedback\">\n                Address must be at least 2 characters\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <input type=\"text\"\n                class=\"form-control\"\n                name=\"addrLineTwo\"\n                #addrLineTwo=\"ngModel\"\n                [ngClass]=\"{'is-invalid':addrLineTwo.errors && addrLineTwo.touched}\"\n                [(ngModel)]=\"shippingAddr.lineTwo\">\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group col-5\">\n                <label for=\"addrCity\">City</label>\n                <input type=\"text\"\n                  class=\"form-control\"\n                  name=\"addrCity\"\n                  #addrCity=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':addrCity.errors && addrCity.touched}\"\n                  [(ngModel)]=\"shippingAddr.city\"\n                  minlength=\"2\" required>\n                <div [hidden]=\"!addrCity.errors?.required\"\n                  class=\"invalid-feedback\">\n                  City is required.\n                </div>\n                <div [hidden]=\"!addrCity.errors?.minlength\"\n                  class=\"invalid-feedback\">\n                  City must be at least 2 characters\n                </div>\n              </div>\n              <div class=\"form-group col-3\">\n                <label for=\"addrState\">State</label>\n                <input type=\"text\"\n                  style=\"text-transform: uppercase;\"\n                  class=\"form-control\"\n                  name=\"addrState\"\n                  #addrState=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':addrState.errors && addrState.touched}\"\n                  [(ngModel)]=\"shippingAddr.state\"\n                  minlength=\"2\" maxlength=\"2\" required>\n                <div [hidden]=\"!addrState.errors?.required\"\n                  class=\"invalid-feedback\">\n                  City is required.\n                </div>\n                <div [hidden]=\"!addrState.errors?.minlength\"\n                  class=\"invalid-feedback\">\n                  City must be at least 2 characters\n                </div>\n              </div>\n              <div class=\"form-group col-4\">\n                <label for=\"addrZip\">ZIP</label><br/>\n\n                <input type=\"text\"\n                  class=\"form-control\"\n                  name=\"addrZip\"\n                  #addrZip=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':addrZip.errors && addrZip.touched}\"\n                  [(ngModel)]=\"shippingAddr.zip\"\n                  (keyup)=\"calculateShipping();\"\n                  minlength=\"5\" maxlength=\"5\" required>\n                <div [hidden]=\"!addrZip.errors?.required\"\n                  class=\"invalid-feedback\">\n                  ZIP is required.\n                </div>\n                <div [hidden]=\"!addrZip.errors?.minlength\"\n                  class=\"invalid-feedback\">\n                  ZIP must be 5 characters\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"cardMsg\">Card Message</label>\n              <input\n                class=\"form-control\"\n                name=\"cardMsg\"\n                #cardMsg=\"ngModel\"\n                [ngClass]=\"{'is-invalid':cardMsg.errors && cardMsg.touched}\"\n                [(ngModel)]=\"cardMessage\"\n                maxlength=\"250\">\n              <div [hidden]=\"!cardMsg.errors?.maxLength\"\n                class=\"invalid-feedback\">\n                Card message must be under 250 characters\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"instructions\">Special Instruction Ex. Occasion, Private Neighborhood Code, Preferred Delivery Time</label>\n              <input\n                class=\"form-control\"\n                name=\"instructions\"\n                #instructions=\"ngModel\"\n                [(ngModel)]=\"specialInstructions\"\n                maxlength=\"250\">\n              <div [hidden]=\"!instructions.errors?.maxLength\"\n                class=\"invalid-feedback\">\n                Special Instructions must be under 250 characters\n              </div>\n            </div>\n        </div>\n        \n      </div>\n    </div>\n\n    <div class=\"row mt-2 mb-2\" style=\"border: 1px solid #ced4da; text-align:left;\">\n      <div class=\"col-12\">\n        <h4>4. Review Summary</h4>\n      </div>\n      <div class=\"col-12 form-group\">\n        <label for=\"discountCode\" class=\"mr-2\">Promo Code </label>\n        <input type=\"text\"\n          name=\"discountCode\"\n          class=\"mr-2 discount-input\"\n          #discountCode=\"ngModel\"\n          [(ngModel)]=\"userDiscountCode\">\n          <a id=\"discountButton\"\n            *ngIf=\"!discountApplied\"\n            class=\"btn btn-success discount-button\"\n            (click)=\"addDiscountCode()\">\n            Apply\n          </a>\n          <a id=\"removeDiscountButton\"\n            *ngIf=\"discountApplied\"\n            class=\"btn btn-danger discount-button\"\n            (click)=\"removeDiscountCode()\">\n            Remove\n          </a>\n      </div>\n      <span *ngIf=\"discountApplied\" class=\"col-12\">\n        Discount: {{discount | currency}}\n      </span>\n      <span class=\"col-12\">\n        Subtotal: {{subTotal | currency}}\n      </span>\n      <span class=\"col-12\">\n        Taxes: {{taxes | currency}}\n      </span>\n      <span class=\"col-12\" *ngIf=\"deliveryOption === 'delivery'\">\n        Shipping: {{deliveryZone.price | currency}}\n      </span>\n      <span class=\"col-12\">\n        Total: {{totalPrice | currency}}\n      </span>\n    </div>\n\n    <flash-messages></flash-messages>\n    <button id=\"customButton\"  class=\"col-12 btn btn-primary btn-block\">Checkout Now</button>\n  </form>\n</div>\n    \n<div class=\"row\" *ngIf=\"products.length == 0\" class=\"mt-5 mb-5\">\n  <div class=\"col-12 text-center\">\n    You have no items in your cart\n  </div>\n</div>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"font-family: roboto; color:#6a686c\">\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-12 col-sm-12 background-pink\">\n                <div class=\"text-center\">\n                    <h3>Have a question?</h3>\n                    <p>Ask away, we'll get back to you right away!</p>\n                </div>\n                <form #contactForm=\"ngForm\" (ngSubmit)=\"onSubmit(contactForm)\" class=\"plr-10\">\n                    <div class=\"form-group\">\n                        <input type=\"text\"\n                            class=\"form-control\"\n                            placeholder=\"Your Name\"\n                            name=\"cName\"\n                            #cName=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':cName.errors && cName.touched}\"\n                            [(ngModel)]=\"customerName\"\n                            minlength=\"2\" required>\n                        <div [hidden]=\"!cName.errors?.required\"\n                            class=\"invalid-feedback\">\n                            We need your name to get back to you.\n                        </div>\n                        <div [hidden]=\"!cName.errors?.minlength\"\n                            class=\"invalid-feedback\">\n                            We need your name to get back to you.\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"cEmail\"\n                            class=\"form-control\"\n                            placeholder=\"Email Address\"\n                            name=\"cEmail\"\n                            #cEmail=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':cEmail.errors && cEmail.touched}\"\n                            [(ngModel)]=\"customerEmail\"\n                            pattern=\"\\S+@\\S+\"\n                            required>\n                        <div [hidden]=\"!cEmail.errors?.required\"\n                            class=\"invalid-feedback\">\n                            Email required.\n                        </div>\n                        <div [hidden]=\"!cEmail.errors?.pattern\"\n                            class=\"invalid-feedback\">\n                            Invalid Email.\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\"\n                            class=\"form-control\"\n                            name=\"cPhone\"\n                            placeholder=\"Phone Number\"\n                            #cPhone=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':cPhone.errors && cPhone.touched}\"\n                            [(ngModel)]=\"customerPhone\"\n                            placeholder=\"(123) 456-7890\"\n                            [textMask]=\"{mask:phoneMask}\"\n                            pattern=\"\\(\\d{3}\\) \\d{3}-\\d{4}\"\n                            required>\n                        <div [hidden]=\"!cPhone.errors?.required\"\n                            class=\"invalid-feedback\">\n                            Phone number required.\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <textarea\n                            style=\"height: 150px\"\n                            class=\"form-control\"\n                            name=\"instructions\"\n                            placeholder=\"What can we do for you\"\n                            #instructions=\"ngModel\"\n                            [(ngModel)]=\"customerQuestion\"\n                            maxlength=\"300\"\n                            required>\n                        </textarea>\n                        <div [hidden]=\"!instructions.errors?.maxLength\"\n                            class=\"invalid-feedback\">\n                            Inquiry must be under 300 characters\n                        </div>\n                    </div>\n                    <flash-messages></flash-messages>\n                    <button id=\"customButton\"\n                        class=\"btn btn-primary btn-block submitButton\">\n                        Submit\n                    </button>\n                </form>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <img class=\"d-block\"\n                src=\"https://i.imgur.com/MB8GDZK.png\"\n                alt=\"Petalos y Arte Flower Shop - contact image\">\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12 text-center background-pink\">\n                <h3>Come visit us!</h3>\n                <p class=\"mb-0\">200 N La Homa Rd</p>\n                <p>Palmview, TX 78572</p>\n                <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.8739541405207!2d-98.36389268450192!3d26.233284795321342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a90517ceb9e1%3A0x5e7c51a8b3767b40!2sPetalos+Y+Arte+Flower+Shop!5e0!3m2!1sen!2sus!4v1529378389506\"\n                    height=\"335\"\n                    class=\"plr-10\"\n                    frameborder=\"0\"\n                    style=\"border: 0; width: inherit;\"\n                    allowfullscreen>\n                </iframe>\n    \n            </div>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div style=\"text-align: left;\">\n      <a href=\"tel:+1-956-607-6047\"> (956)607-6047</a><br/>\n      <a href=\"https://goo.gl/maps/v2TucsdmAw22\">200 N La Homa Rd, Palmview TX</a><br/>\n      <div class=\"fb-like\"\n        data-href=\"https://www.facebook.com/Petalos-y-Arte-Flower-Shop-362503580513879/\" data-width=\"300\"\n        data-layout=\"standard\" data-action=\"like\" data-size=\"large\" data-show-faces=\"false\" data-share=\"true\">\n      </div>\n    </div>\n    <div class=\"text-muted row\" style=\"padding-top: 3px;\">\n      <div class=\"col\"></div>\n      <div class=\"col text-center\">\n        Designed and built by <a href=\"https://www.alex-rios.me\">Alejandro Rios</a>\n      </div>\n      <div class=\"col text-right\">Version 19.4.28</div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-3 col-md-3 col-sm-0 text-center headerText removeOnMobile\">\n            <span>\n                Locally owned flower shop in Palmview, TX\n            </span>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-12 text-center\"\n            style=\"font-family: sacramento; font-size:60px;\">\n            Pétalos y Arte\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-0 text-center headerText\">\n            <span class=\"showOnMobile\">\n                Locally owned flower shop in Palmview,TX providing same day flower delivery for the valley\n            </span>\n            <span class=\"removeOnMobile\">\n                Providing same day flower delivery for the valley\n            </span>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ieInfoMessage mb-4\" style=\"text-align: center\">\n    <span>\n        <b style=\"color:red;\">Warning:</b><br/>\n        We have detected that you are using Internet Explorer.<br/>\n        This site is not fully supported on this browser.<br/>\n        You may continue using Internet Explorer, but it is recommended that you switch to a browser such as Chrome, Firefox, or Edge.<br/>\n        We appreciate your business.\n    </span>\n</div>\n<div class=\"mb-4 text-danger\" style=\"text-align: center\" *ngIf=\"awayDate.active\">\n    <b> Note:</b> {{awayDate.awayNote}}\n</div>\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n        <img class=\"d-block w-100\" style=\"height: 450px\"\n            src=\"https://images.pexels.com/photos/428611/bouquet-roses-colorful-floral-428611.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb\"\n            alt=\"Petalos y Arte Flower Shop - main image\">\n        </div>\n    </div>\n</div>\n<app-arrangements></app-arrangements>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mb-3\">\n    <nav class=\"navbar navbar-expand-sm navbar-light\">\n       <a class=\"navbar-brand\" href=\"#\"></a>\n       <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n           <span class=\"navbar-toggler-icon\"></span>\n       </button>\n       <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n           <div class=\"navbar-nav\" style=\"width: 100%;\">\n               <a class=\"nav-item nav-link headerLink\" routerLink=\"/\" data-toggle=\"collapse\">\n                   <h5 class=\"headerLinkText\">Home</h5>\n               </a>\n               <a class=\"nav-item nav-link headerLink\" routerLink=\"/contact\" data-toggle=\"collapse\">\n                   <h5 class=\"headerLinkText\">Contact Us</h5>\n               </a>\n               <a class=\"nav-item nav-link headerLink\" routerLink=\"/cart\" data-toggle=\"collapse\">\n                   <h5 class=\"headerLinkText\">Cart</h5>\n               </a>\n           </div>\n       </div>\n   </nav>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/receipt/receipt.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/receipt/receipt.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"text-align: center;\"  *ngIf=\"receipt\">\n    <div style=\"margin-bottom: 30px;\">\n        <h2>Your order has been received.</h2>\n        You will receive a confirmation email shortly,<br/>\n        the following is your receipt.<br/>\n    </div>\n\n    <div [innerHTML]=\"receipt\"></div>\n\n    <div style=\"margin-top: 15px\">\n        Please use discount code {{discount.name}} for a {{discount.discount}}% discount on your next order.\n    </div>\n    <div style=\"margin-top: 15px\">\n        Thank you for supporting your local business!<br/>\n        Please consider liking or sharing our <a href=\"https://www.facebook.com/Petalos-y-Arte-Flower-Shop-362503580513879/\" target=\"_blank\">Facebook Page</a><br/>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-product/view-product.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-product/view-product.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container p-0\" *ngIf=\"product\">\n    <div class=\"row\">\n        <div class=\"col-md-6 p-0\">\n            <img class=\"card-img-top\"\n            src=\"{{product.imageUrl}}\"\n            alt=\"{{product.name}}\">\n        </div>\n        <div class=\"col-md-6 p-0 text-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                <h1>{{product.name}}</h1> <h4>{{totalPrice | currency}}</h4>\n                <span>\n                    {{product.longDescription}}\n                </span>\n    \n                <h3 style=\"padding-top: 25px;\" *ngIf=\"product.availableAddons.length > 0\">Make it Special!</h3>\n                <div *ngIf=\"product.availableAddons.length > 0\" class=\"row mt-3\" style=\"margin-left:0; margin-right:0;\">\n                    \n                    <div *ngFor=\"let addon of product.availableAddons\" class=\"col-{{12 / product.availableAddons.length}} card\" style=\"min-height:230px; padding:0;\">\n                    <div class=\"imageContainer\">\n                        <img class=\"card-img-top\"\n                        src=\"{{addon.imageUrl}}\"\n                        alt=\"Card image cap\"\n                        height=\"130\">\n                    </div>\n                    <div class=\"card-body\" style=\"padding: .25rem; position: absolute; bottom:0; left:0; text-align:center; width:100%;\">\n                        <span class=\"card-title\">{{addon.description}}</span><br/>\n                        <a *ngIf=\"!addon.inCart\" (click)=\"addItem(addon)\" class=\"btn btn-outline-primary\">Add</a>\n                        <a *ngIf=\"addon.inCart\" (click)=\"removeItem(addon)\" class=\"btn btn-outline-danger\">Remove</a>\n                    </div>\n                    </div>\n                </div>\n                \n                <div *ngIf=\"orderedBalloons\" class=\"mt-4\">\n                    Note: When ordering ballons, please add the occasion in the \"special instructions\" input in the cart before checking out in order to ensure proper balloon is used.\n                </div>\n                <button (click)=\"addToCart()\" type=\"button\" class=\"btn btn-primary btn-block mt-4\">Add To Cart</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\n<div class=\"modal\" id=\"exampleModal\" [ngStyle]=\"{'display':display}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n    <div class=\"modal-body\">\n        Successfully added to cart!\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\" routerLink=\"/\">Continue shopping</button>\n        <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/cart\">Go To Cart</button>\n    </div>\n    </div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/view-product/view-product.component */ "./src/app/components/view-product/view-product.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/receipt/receipt.component */ "./src/app/components/receipt/receipt.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");








const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'product/:id', component: _components_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_4__["ViewProductComponent"] },
    { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"] },
    { path: 'receipt', component: _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_6__["ReceiptComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        declarations: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Petalos Y Arte Flower Shop';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_arrangements_arrangements_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/arrangements/arrangements.component */ "./src/app/components/arrangements/arrangements.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/receipt/receipt.component */ "./src/app/components/receipt/receipt.component.ts");
/* harmony import */ var _components_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/view-product/view-product.component */ "./src/app/components/view-product/view-product.component.ts");
/* harmony import */ var _services_awayDate_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/awayDate.service */ "./src/app/services/awayDate.service.ts");
/* harmony import */ var _services_addon_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/addon.service */ "./src/app/services/addon.service.ts");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/seo.service */ "./src/app/services/seo.service.ts");
/* harmony import */ var _services_arrangement_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/arrangement.service */ "./src/app/services/arrangement.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_discounts_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/discounts.service */ "./src/app/services/discounts.service.ts");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var _services_deliveryZone_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/deliveryZone.service */ "./src/app/services/deliveryZone.service.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/contact.service */ "./src/app/services/contact.service.ts");


































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
            _components_arrangements_arrangements_component__WEBPACK_IMPORTED_MODULE_17__["ArrangementsComponent"],
            _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
            _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_23__["ReceiptComponent"],
            _components_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_24__["ViewProductComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase, 'paFlowerShop'),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__["TextMaskModule"],
            mydatepicker__WEBPACK_IMPORTED_MODULE_12__["MyDatePickerModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_13__["HttpModule"],
        ],
        providers: [
            _services_addon_service__WEBPACK_IMPORTED_MODULE_26__["AddonService"],
            _services_awayDate_service__WEBPACK_IMPORTED_MODULE_25__["AwayDatesService"],
            _services_seo_service__WEBPACK_IMPORTED_MODULE_27__["SeoService"],
            _services_arrangement_service__WEBPACK_IMPORTED_MODULE_28__["ArrangementService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_29__["CartService"],
            _services_discounts_service__WEBPACK_IMPORTED_MODULE_30__["DiscountsService"],
            _services_payment_service__WEBPACK_IMPORTED_MODULE_31__["PaymentService"],
            _services_deliveryZone_service__WEBPACK_IMPORTED_MODULE_32__["DeliveryZoneService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CurrencyPipe"],
            _services_contact_service__WEBPACK_IMPORTED_MODULE_33__["ContactService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/arrangements/arrangements.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/arrangements/arrangements.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ieImage{\r\n    height: 400px;\r\n}\r\n\r\n.custom-select{\r\n    width: auto;\r\n    max-width: 100%;\r\n}\r\n\r\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n    .ieImage{\r\n        height: 400px;\r\n    }\r\n}\r\n\r\n@media(max-width: 768px){\r\n    .rightOnSmall{\r\n        text-align: right;\r\n        margin-bottom: 10px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnJhbmdlbWVudHMvYXJyYW5nZW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcnJhbmdlbWVudHMvYXJyYW5nZW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWVJbWFnZXtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tc2VsZWN0e1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcclxuICAgIC5pZUltYWdle1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLnJpZ2h0T25TbWFsbHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/arrangements/arrangements.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/arrangements/arrangements.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArrangementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrangementsComponent", function() { return ArrangementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_arrangement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/arrangement.service */ "./src/app/services/arrangement.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let ArrangementsComponent = class ArrangementsComponent {
    constructor(arrangementService) {
        this.arrangementService = arrangementService;
        this.categories = [];
        this.selection = 'All';
        this.sortCategories = [];
        this.sortSelection = 'Newest';
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.arrangementPages = [];
        this.arrangementsPerPage = 9;
        this.currentPage = 0;
        this.pages = [];
        this.atBeginning = true;
        this.atEnd = false;
    }
    ngOnInit() {
        this.arrangementService.getArrangements().subscribe(arrangements => {
            this.allArrangements = arrangements;
            for (let arrangement of this.allArrangements) {
                if (!(arrangement.category === "any")) {
                    var tmpVar = this.categories.find(x => x == arrangement.category);
                    if (!tmpVar) {
                        this.categories.unshift(arrangement.category);
                    }
                }
            }
            this.filterByCategory();
        });
        this.sortCategories.unshift('Price: High to Low');
        this.sortCategories.unshift('Price: Low to High');
        this.sortCategories.unshift('Most Popular');
    }
    filterByCategory() {
        this.arrangements = [];
        for (let arrangement of this.allArrangements) {
            if (this.selection === arrangement.category || this.selection === "any" || this.selection === "All") {
                this.arrangements.unshift(arrangement);
            }
        }
        this.sortByPrice();
    }
    sortByPrice() {
        if (this.sortSelection === "Most Popular") {
            this.arrangements.sort((leftSide, rightSide) => {
                if (leftSide.popularity < rightSide.popularity)
                    return 1;
                if (leftSide.popularity > rightSide.popularity)
                    return -1;
                return 0;
            });
        }
        else if (this.sortSelection === "Price: Low to High") {
            this.arrangements.sort((leftSide, rightSide) => {
                if (leftSide.price < rightSide.price)
                    return -1;
                if (leftSide.price > rightSide.price)
                    return 1;
                return 0;
            });
        }
        else if (this.sortSelection === "Price: High to Low") {
            this.arrangements.sort((leftSide, rightSide) => {
                if (leftSide.price < rightSide.price)
                    return 1;
                if (leftSide.price > rightSide.price)
                    return -1;
                return 0;
            });
        }
        else {
            this.arrangements.sort((leftSide, rightSide) => {
                if (leftSide.id < rightSide.id)
                    return 1;
                if (leftSide.id > rightSide.id)
                    return -1;
                return 0;
            });
        }
        this.buildArrangementPages();
    }
    buildArrangementPages() {
        var counter = 0;
        var arrX = 0;
        this.pages = [];
        for (let arrangement of this.arrangements) {
            if (counter == 0) {
                this.arrangementPages[arrX] = [];
                this.pages.push(this.pages.length.toString(10));
            }
            this.arrangementPages[arrX][counter] = arrangement;
            if (counter == this.arrangementsPerPage - 1) {
                counter = 0;
                arrX++;
            }
            else {
                counter++;
            }
        }
        this.setPageBooleans();
    }
    goToPrevious() {
        if (this.currentPage != 0) {
            this.currentPage--;
        }
        this.setPageBooleans();
    }
    goToNext() {
        if (this.currentPage < this.pages.length - 1) {
            this.currentPage++;
        }
        this.setPageBooleans();
    }
    goToPage(pageIndex) {
        this.currentPage = pageIndex;
        this.setPageBooleans();
    }
    setPageBooleans() {
        if (this.currentPage == 0) {
            this.atBeginning = true;
            this.atEnd = false;
        }
        if (this.currentPage == this.pages.length - 1) {
            this.atEnd = true;
            this.atBeginning = false;
        }
        if (this.currentPage > 0 && this.currentPage < this.pages.length - 1) {
            this.atBeginning = false;
            this.atEnd = false;
        }
    }
};
ArrangementsComponent.ctorParameters = () => [
    { type: _services_arrangement_service__WEBPACK_IMPORTED_MODULE_2__["ArrangementService"] }
];
ArrangementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-arrangements',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./arrangements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/arrangements/arrangements.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./arrangements.component.css */ "./src/app/components/arrangements/arrangements.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_arrangement_service__WEBPACK_IMPORTED_MODULE_2__["ArrangementService"]])
], ArrangementsComponent);



/***/ }),

/***/ "./src/app/components/cart/cart.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/cart/cart.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}\r\n\r\n.remove-height{\r\n  height: 100%;\r\n}\r\n\r\n.discount-input{\r\n  border-radius: 0.25rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXHJcbiAgbWFyZ2luOiAwOyBcclxufVxyXG5cclxuLnJlbW92ZS1oZWlnaHR7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZGlzY291bnQtaW5wdXR7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_deliveryZone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/deliveryZone.service */ "./src/app/services/deliveryZone.service.ts");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/seo.service */ "./src/app/services/seo.service.ts");
/* harmony import */ var _services_discounts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/discounts.service */ "./src/app/services/discounts.service.ts");
/* harmony import */ var _services_arrangement_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/arrangement.service */ "./src/app/services/arrangement.service.ts");
/* harmony import */ var _services_awayDate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/awayDate.service */ "./src/app/services/awayDate.service.ts");













let CartComponent = class CartComponent {
    constructor(paymentService, cartService, deliverZonesService, router, route, flashMessage, currency, seo, discountService, arrangementService, awayDatesService) {
        this.paymentService = paymentService;
        this.cartService = cartService;
        this.deliverZonesService = deliverZonesService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.currency = currency;
        this.seo = seo;
        this.discountService = discountService;
        this.arrangementService = arrangementService;
        this.awayDatesService = awayDatesService;
        this.date = new Date();
        this.currentYear = this.date.getFullYear();
        this.currentMonth = this.date.getMonth() + 1;
        this.currentDay = this.date.getDate();
        this.taxPercentage = .0825;
        this.discountChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        this.discountApplied = false;
        this.awayDate = {};
        //cut off time in 24 hour format
        //currently the cutoff time for same-day delivery is 1pm (13)
        this.cutoffTime = 13;
        this.afterCutoffTime = this.date.getHours() >= this.cutoffTime;
        this.products = [];
        this.description = '';
        this.deliveryZones = [];
        this.deliveryOption = 'delivery';
        this.discount = 0;
        this.subTotal = 0;
        this.taxes = 0;
        this.totalPrice = 0;
        this.stripeTotal = 0;
        this.cardMessage = '';
        this.phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.orderEmail = '';
        this.receipt = '';
        this.specialInstructions = '';
        this.userDiscountCode = '';
        this.deliveryZone = { price: 0 };
        // deliveryDate:any;
        this.customer = {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        };
        this.recipient = {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        };
        this.shippingAddr = {
            lineOne: '',
            lineTwo: '',
            city: '',
            state: 'TX',
            zip: ''
        };
        this.dateOptions = {
            // other options...
            minYear: this.currentYear,
            yearSelector: false,
            showClearDateBtn: false,
            showTodayBtn: false,
            disableUntil: {
                year: this.currentYear,
                month: this.currentMonth,
                day: this.afterCutoffTime ? this.currentDay : this.currentDay - 1
            },
            dateFormat: 'mm-dd-yyyy',
            //use this to disable specific days, good for when going on vacation
            // Disable single dates one by one. Array of disabled dates.
            // For example: [{year: 2016, month: 11, day: 14}, {year: 2016, month: 1, day: 15}].
            // To reset existing disableDays value set empty array to it.
            //currently set to disable first of january 2018 as template
            disableDays: [
                {
                    year: 2018,
                    month: 1,
                    day: 1
                }
            ],
            //use this to disable date ranges, good for when going on vacation
            // Disable date ranges
            // For example: [{begin: {year: 2016, month: 11, day: 14}, end: {year: 2016, month: 11, day: 20}}]
            // To reset existing disableDays value set empty array to it.
            //currently set to disable january to february 2017 as template
            disableDateRanges: [{
                    begin: {
                        year: 2017,
                        month: 1,
                        day: 1
                    },
                    end: {
                        year: 2017,
                        month: 1,
                        day: 1
                    }
                }]
        };
        this.deliveryDate = { date: {
                year: this.currentYear,
                month: this.currentMonth,
                day: this.afterCutoffTime ? this.currentDay + 1 : this.currentDay,
            } };
    }
    ngOnInit() {
        this.seo.generateTags({
            title: 'Petalos y Arte Flower Shop - Cart',
            description: 'Cart, we are a local flower shop in Mission Texas offering floral arrangement delivery to the Mission, Palmview, McAllen, Edinburg, Pharr, La Joya areas of the Rio Grande Valley'
        });
        this.awayDatesService.getDates().subscribe(awayDates => {
            if (awayDates !== null && awayDates.length > 0) {
                this.awayDate = awayDates[0];
                if (new Date() > this.awayDate.endDate) {
                    this.awayDate.active = false;
                }
                if (this.awayDate.active) {
                    this.dateOptions.disableDateRanges[0].begin.year = this.awayDate.beginDate.getFullYear();
                    this.dateOptions.disableDateRanges[0].begin.month = this.awayDate.beginDate.getMonth() + 1;
                    this.dateOptions.disableDateRanges[0].begin.day = this.awayDate.beginDate.getDate();
                    this.dateOptions.disableDateRanges[0].end.year = this.awayDate.endDate.getFullYear();
                    this.dateOptions.disableDateRanges[0].end.month = this.awayDate.endDate.getMonth() + 1;
                    this.dateOptions.disableDateRanges[0].end.day = this.awayDate.endDate.getDate();
                    if (this.date > this.awayDate.beginDate && this.date < this.awayDate.endDate) {
                        let tmpDate = new Date(this.awayDate.endDate.getTime() + (1000 * 60 * 60 * 24));
                        this.deliveryDate = { date: {
                                year: tmpDate.getFullYear(),
                                month: tmpDate.getMonth() + 1,
                                day: tmpDate.getDate()
                            } };
                    }
                }
            }
        });
        this.handler = StripeCheckout.configure({
            key: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].stripeKey,
            image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            locale: 'auto',
            token: token => {
                this.setConfirmationNumber(token.card.id);
                this.paymentService.processPayment(token, this.stripeTotal, this.customer.email, this.description, this.orderEmail, this.newDiscount, this.currentDiscount, this.discountApplied, this.products);
                this.cartService.clearCart();
                this.cartService.setReceiptInfo(this.receipt, this.newDiscount);
            }
        });
        this.products = this.cartService.getCart();
        this.deliverZonesService.getZones().subscribe(deliveryZones => {
            this.deliveryZones = deliveryZones;
        });
        this.discountService.getDiscounts().subscribe(discounts => {
            this.discountCodes = discounts;
        });
        this.calculateSubTotal();
    }
    handlePayment() {
        this.handler.open({
            name: 'Petalos y Arte Flower Shop',
            description: this.description,
            email: this.customer.email,
            allowRememberMe: false,
            amount: this.stripeTotal,
            zipCode: true,
        });
    }
    onpopstate() {
        this.handler.closer();
    }
    toggleDeliveryOption() {
        if (this.deliveryOption === 'pickup') {
            this.shippingAddr = {};
            this.deliveryZone = { price: 0 };
            this.calculateGrandTotal();
        }
        else if (this.deliveryOption === 'delivery') {
        }
    }
    removeProduct(product) {
        this.cartService.removeFromCart(product);
        let tmpArr = [];
        for (let tmpProduct of this.products) {
            if (tmpProduct.id !== product.id) {
                tmpArr.push(tmpProduct);
            }
        }
        this.products = tmpArr;
        this.calculateSubTotal();
    }
    calculateSubTotal() {
        this.subTotal = 0;
        for (let product of this.products) {
            this.subTotal += product.price;
        }
        this.calculateGrandTotal();
    }
    calculateShipping() {
        var found = false;
        for (let city of this.deliveryZones) {
            if (city.active) {
                for (let zip of city.zips) {
                    if (this.shippingAddr.zip == zip.toString()) {
                        this.deliveryZone = city;
                        found = true;
                        break;
                    }
                }
            }
        }
        if (!found) {
            this.deliveryZone = {
                price: 0
            };
        }
        this.calculateGrandTotal();
    }
    calculateGrandTotal() {
        this.taxes = this.subTotal * this.taxPercentage;
        this.taxes = Number(this.taxes.toFixed(2));
        this.totalPrice = this.subTotal + this.deliveryZone.price + this.taxes;
        this.stripeTotal = this.totalPrice * 100;
        this.stripeTotal = Number(this.stripeTotal.toFixed());
        if (this.products.length == 1) {
            this.description = this.products[0].name;
        }
        else {
            var counter = 1;
            for (let product of this.products) {
                this.description = `product ${counter}: ${product.name}, `;
                counter++;
            }
        }
    }
    addDiscountCode() {
        for (let discount of this.discountCodes) {
            if (discount.name === this.userDiscountCode && discount.active) {
                this.currentDiscount = discount;
                this.discount = this.subTotal * (discount.discount / 100);
                this.subTotal -= this.discount;
                this.calculateGrandTotal();
                this.discountApplied = true;
            }
        }
        if (!this.discountApplied) {
            this.flashMessage.show('Invalid Promo Code', {
                cssClass: 'alert-danger', timeout: 4000
            });
        }
        else {
            this.flashMessage.show('Promo Code Applied', {
                cssClass: 'alert-success', timeout: 4000
            });
        }
    }
    removeDiscountCode() {
        this.currentDiscount = null;
        this.subTotal += this.discount;
        this.discount = 0;
        this.discountApplied = false;
        this.calculateGrandTotal();
    }
    onSubmit({ value, valid }) {
        if (!valid) {
            this.flashMessage.show('Invalid form input, please correct and try again', {
                cssClass: 'alert-danger', timeout: 4000
            });
        }
        else if (!this.validEmail(this.customer.email)) {
            this.flashMessage.show('Invalid email input, please input a valid email', {
                cssClass: 'alert-danger', timeout: 4000
            });
        }
        else if (!this.validZip(this.shippingAddr.zip)) {
            this.flashMessage.show('Sorry, the selected city is outside of our current delivery range', {
                cssClass: 'alert-danger', timeout: 4000
            });
        }
        else if (!this.validDeliveryDate()) {
            this.flashMessage.show('Invalid Delivery Date', {
                cssClass: 'alert-danger', timeout: 4000
            });
        }
        else {
            var discountCode = "";
            var discountAmount;
            for (var i = 0; i < 7; i++) {
                discountCode += this.discountChars.charAt(Math.floor(Math.random() * this.discountChars.length));
            }
            if (this.totalPrice > 149) {
                discountAmount = 15;
            }
            else if (this.totalPrice > 99) {
                discountAmount = 10;
            }
            else if (this.totalPrice) {
                discountAmount = 5;
            }
            this.newDiscount = {
                name: discountCode,
                discount: discountAmount,
                active: true
            };
            this.buildOrderEmail(this.newDiscount);
            this.buildReceipt(this.newDiscount);
            this.handlePayment();
        }
    }
    validEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    validZip(selectedZip) {
        if (this.deliveryOption === 'pickup') {
            return true;
        }
        for (let city of this.deliveryZones) {
            if (city.active) {
                for (let zip of city.zips) {
                    if (selectedZip == zip.toString()) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    validDeliveryDate() {
        if (this.deliveryDate == null) {
            return false;
        }
        return true;
    }
    buildReceipt(discount) {
        this.receipt = this.getDeliveryDateInfo();
        this.receipt += this.getDeliveryPersonInfo();
        this.receipt += this.getOrderInfo();
        this.receipt += this.getAdditionalInfo();
    }
    buildOrderEmail(discount) {
        this.orderEmail = this.getDeliveryDateInfo();
        this.orderEmail += this.getDeliveryPersonInfo();
        this.orderEmail += this.getContactPersonInfo();
        this.orderEmail += this.getOrderInfo();
        this.orderEmail += this.getAdditionalInfo();
        this.orderEmail += this.getDiscountInfo(discount);
    }
    getDeliveryDateInfo() {
        var deliveryDateString = "";
        if (this.deliveryOption === "pickup") {
            deliveryDateString = "Pickup";
        }
        else if (this.deliveryOption === "delivery") {
            deliveryDateString = `${this.deliveryDate.date.month}/${this.deliveryDate.date.day}/${this.deliveryDate.date.year}`;
        }
        let deliveryDateInfo = `
    <table style="width: 90%;" align="center">
    <tr>
      <td style="width: 25%; text-align:right; font-weight: bold;">Delivery Date:</td>
      <td style="width: 75%; text-align:left; padding-left: 25px;">${deliveryDateString}</td>
    </tr>`;
        return deliveryDateInfo;
    }
    getDeliveryPersonInfo() {
        let deliveryInfo = '';
        if (this.deliveryOption === "delivery") {
            deliveryInfo = `
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Deliver To:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.recipient.firstName} ${this.recipient.lastName}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Street Address:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.shippingAddr.lineOne}<br/>${this.shippingAddr.lineTwo}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">City, State, Zip:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.shippingAddr.city}, ${this.shippingAddr.state} ${this.shippingAddr.zip}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Phone:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.recipient.phone}</td>
      </tr>`;
        }
        else if (this.deliveryOption === "pickup") {
            deliveryInfo += `
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">For:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.recipient.firstName} ${this.recipient.lastName}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Phone:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.recipient.phone}</td>
      </tr>`;
        }
        return deliveryInfo;
    }
    getContactPersonInfo() {
        let contactInfo = `<tr>
      <td>
        <br/>
      </td>
    </tr>
  
    <tr>
      <td style="width: 25%; text-align:right; font-weight: bold;">Customer Name:</td>
      <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customer.firstName} ${this.customer.lastName}</td>
    </tr>
    <tr>
      <td style="width: 25%; text-align:right; font-weight: bold;">Customer Phone:</td>
      <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customer.phone}</td>
    </tr>
    <tr>
      <td style="width: 25%; text-align:right; font-weight: bold;">Customer Email:</td>
      <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customer.email}</td>
    </tr>
  
    <tr>
      <td>
        <br/>
      </td>
    </tr>`;
        return contactInfo;
    }
    getOrderInfo() {
        let orderInfo = '';
        for (let product of this.products) {
            orderInfo += `
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Product Details:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${product.name}</td>
      </tr>`;
            for (let addon of product.selectedAddons) {
                orderInfo += `
        <tr>
          <td style="width: 25%; text-align:right; font-weight: bold;">Addons:</td>
          <td style="width: 75%; text-align:left; padding-left: 25px;">${addon.name}</td>
        </tr>`;
            }
        }
        orderInfo += `
    <tr>
    <td style="width: 25%; text-align:right; font-weight: bold;">Total Price:</td>
    <td style="width: 75%; text-align:left; padding-left: 25px;">${this.currency.transform(this.totalPrice)}</td>
    </tr>`;
        return orderInfo;
    }
    getAdditionalInfo() {
        let info = '';
        if (this.deliveryOption === "delivery") {
            info += `
        <tr>
          <td>
            <br/>
          </td>
        </tr>
        `;
            if (this.cardMessage !== '') {
                info += `
        <tr>
          <td style="width: 25%; text-align:right; font-weight: bold;">Card Message:</td>
          <td style="width: 75%; text-align:left; padding-left: 25px;">${this.cardMessage}</td>
        </tr>
        `;
            }
            if (this.specialInstructions !== '') {
                info += `
        <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Special Instructions:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.specialInstructions}</td>
        </tr>
        `;
            }
        }
        return info;
    }
    getDiscountInfo(discount) {
        let info = `
    <tr>
      <td style="width: 25%; text-align:right; font-weight: bold;">Discount Code:</td>
      <td style="width: 75%; text-align:left; padding-left: 25px;">${discount.name}</td>
    </tr>
    <tr>
      <td style="width: 25%; text-align:right; font-weight: bold;">Discount Amount:</td>
      <td style="width: 75%; text-align:left; padding-left: 25px;">${discount.discount}%</td>
    </tr>`;
        return info;
    }
    setConfirmationNumber(cardId) {
        var cardToken = cardId.substring(cardId.length - 6, cardId.length);
        this.orderEmail += this.closeTable(cardToken);
        this.receipt += this.closeTable(cardToken);
    }
    closeTable(cardToken) {
        let info = `
    <tr>
      <td style="width: 25%; font-weight: bold; text-align:right;">Confirmation Code:</td>
      <td style="width: 75%; text-align:left;">${cardToken}</td>
    </tr>
    </table>`;
        return info;
    }
};
CartComponent.ctorParameters = () => [
    { type: _services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _services_deliveryZone_service__WEBPACK_IMPORTED_MODULE_3__["DeliveryZoneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__["FlashMessagesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"] },
    { type: _services_seo_service__WEBPACK_IMPORTED_MODULE_9__["SeoService"] },
    { type: _services_discounts_service__WEBPACK_IMPORTED_MODULE_10__["DiscountsService"] },
    { type: _services_arrangement_service__WEBPACK_IMPORTED_MODULE_11__["ArrangementService"] },
    { type: _services_awayDate_service__WEBPACK_IMPORTED_MODULE_12__["AwayDatesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paymentForm', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CartComponent.prototype, "form", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:popstate'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], CartComponent.prototype, "onpopstate", null);
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/components/cart/cart.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        _services_deliveryZone_service__WEBPACK_IMPORTED_MODULE_3__["DeliveryZoneService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__["FlashMessagesService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"],
        _services_seo_service__WEBPACK_IMPORTED_MODULE_9__["SeoService"],
        _services_discounts_service__WEBPACK_IMPORTED_MODULE_10__["DiscountsService"],
        _services_arrangement_service__WEBPACK_IMPORTED_MODULE_11__["ArrangementService"],
        _services_awayDate_service__WEBPACK_IMPORTED_MODULE_12__["AwayDatesService"]])
], CartComponent);



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col-lg-4{\r\n    padding: 2px;\r\n}\r\n.container{\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n.submitButton{\r\n    background-color: #20A4F3;\r\n    border-color: #20A4F3;\r\n}\r\n.background-pink{\r\n    background: #F7E5E6;\r\n}\r\n.plr-10{\r\n    padding: 0px 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbGctNHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuLnN1Ym1pdEJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMEE0RjM7XHJcbiAgICBib3JkZXItY29sb3I6ICMyMEE0RjM7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXBpbmt7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjdFNUU2O1xyXG59XHJcblxyXG4ucGxyLTEwe1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contact.service */ "./src/app/services/contact.service.ts");




let ContactComponent = class ContactComponent {
    constructor(flashMessage, contactService) {
        this.flashMessage = flashMessage;
        this.contactService = contactService;
        this.phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    ngOnInit() {
    }
    onSubmit({ value, valid }) {
        if (!valid) {
            this.flashMessage.show('Invalid form input, please correct and try again', {
                cssClass: 'alert-danger', timeout: 4000
            });
        }
        else if (!this.validEmail(this.customerEmail)) {
            this.flashMessage.show('Invalid email input, please input a valid email address', {
                cssClass: 'alert-danger', timeout: 4000
            });
        }
        else {
            this.contactService.sendContactEmail(this.customerEmail, this.builtTextEmail(), this.buildContactEmail());
            this.customerName = '';
            this.customerEmail = '';
            this.customerPhone = '';
            this.customerQuestion = '';
            this.form.resetForm();
        }
    }
    validEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    builtTextEmail() {
        var textEmail = `Customer Name: ${this.customerName}, 
    Phone: ${this.customerPhone}, 
    Email: ${this.customerEmail},
    Inquier: ${this.customerQuestion}`;
        return textEmail;
    }
    buildContactEmail() {
        var contactEmail = `
    <table style="width: 90%;" align="center">
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Customer Name:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customerName}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Customer Phone:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customerPhone}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Customer Email:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customerEmail}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Inquiry:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customerQuestion}</td>
      </tr>
    </table>`;
        return contactEmail;
    }
};
ContactComponent.ctorParameters = () => [
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contactForm', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ContactComponent.prototype, "form", void 0);
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
        _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]])
], ContactComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    margin-top: 15px;\r\n    border-top: 2px solid;\r\n    border-bottom: 2px solid;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerText{\r\n    line-height: 90px;\r\n}\r\n.headerText > span{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    line-height: 1;\r\n    color: #7f7f7f;\r\n}\r\n.showOnMobile{\r\n    display:none !important;\r\n}\r\n@media (max-width: 768px){\r\n    .showOnMobile{\r\n        display: inline-block !important;\r\n        line-height: 25px !important;\r\n    }\r\n    .removeOnMobile{\r\n        display: none !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0k7UUFDSSxnQ0FBZ0M7UUFDaEMsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlclRleHR7XHJcbiAgICBsaW5lLWhlaWdodDogOTBweDtcclxufVxyXG4uaGVhZGVyVGV4dCA+IHNwYW57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBjb2xvcjogIzdmN2Y3ZjtcclxufVxyXG4uc2hvd09uTW9iaWxle1xyXG4gICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC5zaG93T25Nb2JpbGV7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5yZW1vdmVPbk1vYmlsZXtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n    .ieInfoMessage{\r\n        display: block !important;\r\n    }\r\n}\r\n\r\n.ieInfoMessage{\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XHJcbiAgICAuaWVJbmZvTWVzc2FnZXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaWVJbmZvTWVzc2FnZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/seo.service */ "./src/app/services/seo.service.ts");
/* harmony import */ var _services_awayDate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/awayDate.service */ "./src/app/services/awayDate.service.ts");




let HomeComponent = class HomeComponent {
    constructor(seo, AwayDatesService) {
        this.seo = seo;
        this.AwayDatesService = AwayDatesService;
        this.discountChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        this.awayDate = {};
    }
    ngOnInit() {
        this.seo.generateTags({
            title: 'Petalos y Arte Flower Shop - Home',
            description: 'Home Page, we are a local flower shop in Mission Texas offering floral arrangement delivery to the Mission, Palmview, McAllen, Edinburg, Pharr, La Joya areas of the Rio Grande Valley'
        });
        this.AwayDatesService.getDates().subscribe(awayDates => {
            if (awayDates !== null && awayDates.length > 0) {
                this.awayDate = awayDates[0];
                if (new Date() > this.awayDate.endDate) {
                    this.awayDate.active = false;
                }
                ;
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"] },
    { type: _services_awayDate_service__WEBPACK_IMPORTED_MODULE_3__["AwayDatesService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"],
        _services_awayDate_service__WEBPACK_IMPORTED_MODULE_3__["AwayDatesService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerLink{\r\n    width: 50%;\r\n    text-align: center;\r\n}\r\n.container{\r\n    border-top: 2px solid;\r\n    border-bottom: 2px solid;\r\n}\r\n.navbar-nav{\r\n    width: 100%;\r\n}\r\n.headerLinkText:hover{\r\n    text-decoration: underline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlckxpbmt7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XHJcbn1cclxuLm5hdmJhci1uYXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaGVhZGVyTGlua1RleHQ6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/receipt/receipt.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/receipt/receipt.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table{\r\n    border: 1px solid black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNlaXB0L3JlY2VpcHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjZWlwdC9yZWNlaXB0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/receipt/receipt.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/receipt/receipt.component.ts ***!
  \*********************************************************/
/*! exports provided: ReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptComponent", function() { return ReceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");



let ReceiptComponent = class ReceiptComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() {
        this.receipt = this.cartService.getReceipt();
        this.discount = this.cartService.getDiscount();
        this.cartService.clearReceipt();
    }
};
ReceiptComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
];
ReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-receipt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./receipt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/receipt/receipt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./receipt.component.css */ "./src/app/components/receipt/receipt.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
], ReceiptComponent);



/***/ }),

/***/ "./src/app/components/view-product/view-product.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/view-product/view-product.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backdrop{ \r\n    background-color:rgba(0,0,0,0.6);\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LXByb2R1Y3Qvdmlldy1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLEtBQUs7SUFDTCxNQUFNO0lBQ04sVUFBVTtJQUNWLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZXctcHJvZHVjdC92aWV3LXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZHJvcHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC42KTtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/view-product/view-product.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/view-product/view-product.component.ts ***!
  \*******************************************************************/
/*! exports provided: ViewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductComponent", function() { return ViewProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_arrangement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/arrangement.service */ "./src/app/services/arrangement.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ViewProductComponent = class ViewProductComponent {
    constructor(arrangementService, cartService, router, route, flashMessage) {
        this.arrangementService = arrangementService;
        this.cartService = cartService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.productMessage = "";
        this.display = 'none';
        this.orderedBalloons = false;
    }
    ngOnInit() {
        //get id from url
        this.id = this.route.snapshot.params['id'];
        //get arrangement
        this.arrangementService.getArrangement(this.id).subscribe(arrangement => {
            this.product = arrangement;
            this.totalPrice = arrangement.price;
        });
    }
    addItem(item) {
        item.inCart = true;
        if (item.name === "balloon") {
            this.orderedBalloons = true;
        }
        this.product.selectedAddons.unshift(item);
        this.totalPrice += item.price;
    }
    removeItem(item) {
        var index = this.product.selectedAddons.indexOf(item, 0);
        if (index > -1) {
            if (item.name === "balloon") {
                this.orderedBalloons = false;
            }
            item.inCart = false;
            this.product.selectedAddons.splice(index, 1);
            this.totalPrice -= item.price;
        }
    }
    addToCart() {
        this.cartService.addToCart(this.product);
        this.display = 'block';
    }
    closeModal() {
        this.display = 'none';
    }
};
ViewProductComponent.ctorParameters = () => [
    { type: _services_arrangement_service__WEBPACK_IMPORTED_MODULE_2__["ArrangementService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
];
ViewProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-product/view-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-product.component.css */ "./src/app/components/view-product/view-product.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_arrangement_service__WEBPACK_IMPORTED_MODULE_2__["ArrangementService"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
], ViewProductComponent);



/***/ }),

/***/ "./src/app/services/addon.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/addon.service.ts ***!
  \*******************************************/
/*! exports provided: AddonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonService", function() { return AddonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");




let AddonService = class AddonService {
    constructor(afs) {
        this.afs = afs;
        this.addonsCollection = this.afs.collection('addons');
    }
    getAddons() {
        //get addons with id
        this.addons = this.addonsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
        return this.addons;
    }
    getAddon(id) {
        this.addonDoc = this.afs.doc(`addons/${id}`);
        this.addon = this.addonDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(action => {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                const data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.addon;
    }
};
AddonService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
AddonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
], AddonService);



/***/ }),

/***/ "./src/app/services/arrangement.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/arrangement.service.ts ***!
  \*************************************************/
/*! exports provided: ArrangementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrangementService", function() { return ArrangementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _addon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addon.service */ "./src/app/services/addon.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");





let ArrangementService = class ArrangementService {
    constructor(afs, addonService) {
        this.afs = afs;
        this.addonService = addonService;
        this.addonsMap = new Map();
        this.arrangementsCollection = this.afs.collection('arrangements', ref => ref.where('active', '==', true));
    }
    getArrangements() {
        //get addons first and create map
        this.createAddonsMap();
        //get arrangements with id
        this.arrangements = this.arrangementsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                this.setAddons(data);
                return data;
            });
        }));
        return this.arrangements;
    }
    getArrangement(id) {
        this.createAddonsMap();
        this.arrangementDoc = this.afs.doc(`arrangements/${id}`);
        this.arrangement = this.arrangementDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(action => {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                const data = action.payload.data();
                data.id = action.payload.id;
                this.setAddons(data);
                return data;
            }
        }));
        return this.arrangement;
    }
    /////
    //snippet for updating a document
    /////
    increaseArrangementPopularity(product) {
        this.arrangementsCollection.doc(product.id).update({
            popularity: product.popularity + 1
        });
    }
    createAddonsMap() {
        this.addonService.getAddons().subscribe(addons => {
            for (let item of addons) {
                item.inCart = false;
                this.addonsMap.set(item.name, item);
            }
        });
    }
    setAddons(product) {
        product.availableAddons = [];
        product.selectedAddons = [];
        if (product.addonNames != null) {
            for (let name of product.addonNames) {
                if (this.addonsMap.has(name)) {
                    product.availableAddons.unshift(this.addonsMap.get(name));
                }
            }
        }
    }
};
ArrangementService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _addon_service__WEBPACK_IMPORTED_MODULE_3__["AddonService"] }
];
ArrangementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _addon_service__WEBPACK_IMPORTED_MODULE_3__["AddonService"]])
], ArrangementService);



/***/ }),

/***/ "./src/app/services/awayDate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/awayDate.service.ts ***!
  \**********************************************/
/*! exports provided: AwayDatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwayDatesService", function() { return AwayDatesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");




let AwayDatesService = class AwayDatesService {
    constructor(afs) {
        this.afs = afs;
        this.awayDatesCollection = this.afs.collection('awayDates');
    }
    getDates() {
        this.awayDates = this.awayDatesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
        return this.awayDates;
    }
};
AwayDatesService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
AwayDatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
], AwayDatesService);



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartService = class CartService {
    constructor() {
        this.selectedArrangements = [];
    }
    getCart() {
        return this.selectedArrangements;
    }
    addToCart(item) {
        for (let addons of item.selectedAddons) {
            item.price += addons.price;
        }
        this.selectedArrangements.unshift(item);
    }
    removeFromCart(item) {
        var index = this.selectedArrangements.indexOf(item, 0);
        if (index > -1) {
            this.selectedArrangements.splice(index, 1);
        }
    }
    setReceiptInfo(receipt, discount) {
        this.receipt = receipt;
        this.discount = discount;
    }
    getReceipt() {
        return this.receipt;
    }
    getDiscount() {
        return this.discount;
    }
    clearReceipt() {
        this.receipt = '';
        this.discount = {};
    }
    clearCart() {
        this.selectedArrangements = [];
    }
};
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CartService);



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let ContactService = class ContactService {
    constructor(http, flashMessage) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api;
    }
    sendContactEmail(customerEmail, textBody, emailBody) {
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api}/sendEmail`, {
            customerEmail,
            recipientEmail: 'contact',
            subject: 'Contact Request',
            textBody,
            emailBody
        })
            .subscribe(resp => {
            if (resp.status == 200) {
                this.flashMessage.show("Thank you for your inquiry! We'll get back to you shortly.", {
                    cssClass: 'alert-success', timeout: 10000
                });
            }
        }, err => {
            this.flashMessage.show('Error occured while processing your order, please try again...if the problem persists please contact us at petalosArteFlowerShop@gmail.com', {
                cssClass: 'alert-danger', timeout: 10000
            });
        });
    }
};
ContactService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] }
];
ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
        angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
], ContactService);



/***/ }),

/***/ "./src/app/services/deliveryZone.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/deliveryZone.service.ts ***!
  \**************************************************/
/*! exports provided: DeliveryZoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryZoneService", function() { return DeliveryZoneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");




let DeliveryZoneService = class DeliveryZoneService {
    constructor(afs) {
        this.afs = afs;
        this.deliveryZonesCollection = this.afs.collection('deliveryZones');
    }
    getZones() {
        //get zones with id
        this.deliveryZones = this.deliveryZonesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
        return this.deliveryZones;
    }
    getZone(id) {
        this.deliveryZoneDoc = this.afs.doc(`deliveryZones/${id}`);
        this.deliveryZone = this.deliveryZoneDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(action => {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                const data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.deliveryZone;
    }
};
DeliveryZoneService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
DeliveryZoneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
], DeliveryZoneService);



/***/ }),

/***/ "./src/app/services/discounts.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/discounts.service.ts ***!
  \***********************************************/
/*! exports provided: DiscountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountsService", function() { return DiscountsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");




let DiscountsService = class DiscountsService {
    constructor(afs) {
        this.afs = afs;
        this.discountsCollection = this.afs.collection('discounts', ref => ref.where('active', '==', true));
    }
    addDiscountCode(newDiscount) {
        this.discountsCollection.add(newDiscount);
    }
    getDiscounts() {
        this.discounts = this.discountsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
        return this.discounts;
    }
    invalidateDiscount(discount) {
        this.discountsCollection.doc(discount.id).update({
            active: false
        });
    }
};
DiscountsService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
DiscountsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
], DiscountsService);



/***/ }),

/***/ "./src/app/services/payment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _discounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discounts.service */ "./src/app/services/discounts.service.ts");
/* harmony import */ var _arrangement_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./arrangement.service */ "./src/app/services/arrangement.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








let PaymentService = class PaymentService {
    constructor(http, flashMessage, router, discountService, arrangementService) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
        this.discountService = discountService;
        this.arrangementService = arrangementService;
    }
    processPayment(token, amount, email, description, emailBody, newDiscount, currentDiscount, discountApplied, products) {
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].api}/charge`, {
            stripeToken: token.id,
            stripeEmail: email,
            amount,
            description,
            emailBody
        })
            .subscribe(resp => {
            if (resp.status == 200) {
                //create a new discount code
                this.discountService.addDiscountCode(newDiscount);
                //check if a discount was used, and remove it
                if (discountApplied) {
                    this.discountService.invalidateDiscount(currentDiscount);
                }
                //update product popularity
                for (let product of products) {
                    this.arrangementService.increaseArrangementPopularity(product);
                }
                this.router.navigate(['receipt']);
            }
        }, err => {
            this.flashMessage.show('Error occured while processing your order, please try again...if the problem persists please contact us at petalosArteFlowerShop@gmail.com', {
                cssClass: 'alert-danger', timeout: 10000
            });
        });
    }
};
PaymentService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _discounts_service__WEBPACK_IMPORTED_MODULE_5__["DiscountsService"] },
    { type: _arrangement_service__WEBPACK_IMPORTED_MODULE_6__["ArrangementService"] }
];
PaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
        angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _discounts_service__WEBPACK_IMPORTED_MODULE_5__["DiscountsService"],
        _arrangement_service__WEBPACK_IMPORTED_MODULE_6__["ArrangementService"]])
], PaymentService);



/***/ }),

/***/ "./src/app/services/seo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/seo.service.ts ***!
  \*****************************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SeoService = class SeoService {
    constructor(meta) {
        this.meta = meta;
    }
    generateTags(config) {
        config = Object.assign({ title: 'Petalos y Arte Flower Shop - Same Day Flower Delivery | Palmview', description: 'Local flower shop in Palmview Texas offering same day flower delivery to the Mission, Palmview, McAllen, Edinburg, Pharr, La Joya areas of the Rio Grande Valley', url: 'https://www.petalosarte.com', author: 'AR Web Designs', language: 'EN', region: 'US-TX', placename: 'Palmview', position: '26.233251;-98.361366', ICBM: '26.233251, -98.361366', type: 'website', imagePath: 'https://images.pexels.com/photos/428611/bouquet-roses-colorful-floral-428611.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', keywords: 'floral arrangements, '
                + 'flower delivery, '
                + 'floral delivery, '
                + 'flower shop, '
                + 'flower delivery, '
                + 'flower shop in mission tx, '
                + 'flower shop in mission texas, '
                + 'send flowers, '
                + 'from you flowers, '
                + 'local florist, '
                + 'roses deliver, '
                + 'mission, '
                + 'tx, ' }, config);
        this.meta.updateTag({ name: 'title', content: config.title });
        this.meta.updateTag({ name: 'description', content: config.description });
        this.meta.updateTag({ name: 'url', content: config.url });
        this.meta.updateTag({ name: 'author', content: config.author });
        this.meta.updateTag({ name: 'keywords', content: config.keywords });
        this.meta.updateTag({ name: 'language', content: config.language });
        this.meta.updateTag({ name: 'geo.region', content: config.region });
        this.meta.updateTag({ name: 'geo.placename', content: config.placename });
        this.meta.updateTag({ name: 'geo.position', content: config.position });
        this.meta.updateTag({ name: 'ICBM', content: config.ICBM });
        this.meta.updateTag({ name: 'og:title', content: config.title });
        this.meta.updateTag({ name: 'og:site_name', content: config.title });
        this.meta.updateTag({ name: 'og:description', content: config.description });
        this.meta.updateTag({ name: 'og:type', content: config.type });
        this.meta.updateTag({ name: 'og:image', content: config.imagePath });
        this.meta.updateTag({ name: 'og:url', content: config.url });
    }
};
SeoService.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }
];
SeoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
], SeoService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: false,
    stripeKey: 'pk_test_Mqk5tVgm8NXvt81KUk3iigKo',
    firebase: {
        apiKey: "AIzaSyAsDbkDi1OAeJgWzGgtZpv2IgaazPw8qZ4",
        authDomain: "petalos-arte.firebaseapp.com",
        databaseURL: "https://petalos-arte.firebaseio.com",
        projectId: "petalos-arte",
        storageBucket: "petalos-arte.appspot.com",
        messagingSenderId: "220047130772"
    },
    api: 'http://localhost:8080'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\PetalosArteFlowerShop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map