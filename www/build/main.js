webpackJsonp([14],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterProvider = /** @class */ (function () {
    function RegisterProvider(http) {
        this.http = http;
    }
    RegisterProvider.prototype.registerUser = function (fullname, email, password) {
        return this.http.post('https://eventureapp.herokuapp.com/api/signup/user', {
            fullname: fullname,
            email: email,
            password: password
        });
    };
    RegisterProvider.prototype.loginUser = function (email, password) {
        return this.http.post('https://eventureapp.herokuapp.com/api/login/user', {
            email: email,
            password: password
        });
    };
    RegisterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RegisterProvider);
    return RegisterProvider;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContributeLessonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lesson_lesson__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hello_ionic_hello_ionic__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};





var ContributeLessonPage = /** @class */ (function () {
    function ContributeLessonPage(navCtrl, navParams, storage, lessonProvider, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.lessonProvider = lessonProvider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.date = Date.apply(Date.now());
        this.lesson = this.navParams.get('lesson');
        this.title = this.lesson.title;
        this.creator = this.lesson.creator;
        this.creatorEmail = this.lesson.email;
    }
    ContributeLessonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContributeLessonPage');
    };
    ContributeLessonPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ContributeLessonPage.prototype.getName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('userName').then(function (value) {
                            _this.contributor = value;
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get('userEmail').then(function (value) {
                                _this.contributorEmail = value;
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContributeLessonPage.prototype.confirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getName()];
                    case 1:
                        _a.sent();
                        console.log("debug: " + this.creator + ", " + this.creatorEmail + " " + this.title + ", \n    " + this.contributor + ", " + this.contributorEmail + " " + this.contribution);
                        this.lessonProvider.contributeLesson(this.creator, this.creatorEmail, this.title, this.contributor, this.contribution, this.date)
                            .subscribe(function (res) {
                            if (res.message) {
                                var toast = _this.toastCtrl.create({
                                    message: "Contribution added!",
                                    duration: 3000,
                                    position: 'top'
                                });
                                toast.present();
                                _this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_4__hello_ionic_hello_ionic__["a" /* HelloIonicPage */]);
                            }
                            if (res.error) {
                                var alert_1 = _this.alertCtrl.create({
                                    title: 'Contribution error',
                                    subTitle: res.error,
                                    buttons: ['OK']
                                });
                                alert_1.present();
                            }
                        });
                        this.contribution = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    ContributeLessonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contribute-lesson',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\contribute-lesson\contribute-lesson.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Contribute</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="greyish" padding>\n  <br>\n  <ion-grid>\n    <ion-row>\n      <ion-label color="primary" stacked>Add your contribution to this lesson</ion-label>\n      <ion-col col-12>\n        <ion-textarea rows=15 [(ngModel)]="contribution"></ion-textarea>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n<ion-grid>\n  <br>\n<ion-row>\n    <ion-col col-6 class="center">\n        <button ion-button block (click)="goBack()">Cancel</button>\n    </ion-col>\n    <ion-col col-6 class="center">\n        <button ion-button block (click)="confirm()">Confirm</button>\n    </ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\contribute-lesson\contribute-lesson.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_lesson_lesson__["a" /* LessonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ContributeLessonPage);
    return ContributeLessonPage;
}());

//# sourceMappingURL=contribute-lesson.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_event_view_event__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_event_event__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventClass__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OpenEventsPage = /** @class */ (function () {
    function OpenEventsPage(navCtrl, navParams, storage, eventProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.eventProvider = eventProvider;
        this.eventsList = [];
    }
    OpenEventsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('userEmail').then(function (value) { _this.email; });
        //this.eventProvider.getEmailRevised().then(value => {this.email = value});
        this.eventProvider.viewOpenVotes()
            .subscribe(function (res) {
            if (res.events.eventCreator !== undefined || res.events.eventCreator !== null) {
                console.log(res);
                res.events.forEach(function (ev) {
                    var event = new __WEBPACK_IMPORTED_MODULE_5__eventClass__["a" /* Event */](ev.eventCreator, ev.eventName, ev.description, ev.endDate, ev.itemList, ev.guestList, ev.highMediumLowSelected, ev.ordinalSelected);
                    _this.eventsList.push(event);
                    console.log(ev.eventName);
                    console.log(event.eventCreator);
                });
                console.log('debug OpenEventsPage');
            }
        });
    };
    OpenEventsPage.prototype.voteTapped = function (event, vote) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_event_view_event__["a" /* ViewEventPage */], { vote: vote });
    };
    OpenEventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-open-events',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\open-events\open-events.html"*/'<!--Open events page-->\n<ion-header class="instruct">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Open Events</ion-title>\n  </ion-navbar>\n  <div class="instruct">\n    <p>Select from the choices below to vote on the desired event</p>\n  </div>\n</ion-header>\n\n<ion-content padding>\n    <ion-list *ngIf="eventsList.length > 0">\n        <button ion-item *ngFor="let vote of eventsList" (click)="voteTapped($event, vote)">\n          <ion-icon item-left name="list-box"></ion-icon>\n          {{vote.eventName}}\n          <div class="item-note">\n            {{vote.description}} ...\n          </div>\n        </button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\open-events\open-events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_event_event__["a" /* EventProvider */]])
    ], OpenEventsPage);
    return OpenEventsPage;
}());

//# sourceMappingURL=open-events.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__talliedVoteClass__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_event_event__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};





var ViewEventPage = /** @class */ (function () {
    function ViewEventPage(navCtrl, navParams, storage, eventProvider, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.eventProvider = eventProvider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.talliedVote = [];
        this.voteList = [];
        this.votingEvent = this.navParams.get('vote');
        this.initRanks();
    }
    ViewEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewEventPage');
    };
    ViewEventPage.prototype.getName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('userEmail').then(function (value) {
                            _this.userEmail = value;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewEventPage.prototype.initRanks = function () {
        var _this = this;
        this.votingEvent.itemList.forEach(function (label) {
            _this.talliedVote.push({
                label: 0
            });
        });
    };
    ViewEventPage.prototype.testOne = function (event, choice) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getName()];
                    case 1:
                        _a.sent();
                        console.log("test: " + this.talliedVote[choice]);
                        this.voteList.push({ name: choice, rank: this.talliedVote[choice] });
                        this.voteList.forEach(function (vote) {
                            console.log("debug: " + _this.userEmail + " " + vote.name + " " + vote.rank);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewEventPage.prototype.vote = function () {
        var _this = this;
        var vote = new __WEBPACK_IMPORTED_MODULE_2__talliedVoteClass__["a" /* TalliedVote */]();
        vote.voter = this.userEmail;
        vote.rankings = this.voteList;
        this.eventProvider.sendVote(this.votingEvent.eventName, this.votingEvent.eventCreator, vote).subscribe(function (res) {
            if (res.error) {
                var alert_1 = _this.alertCtrl.create({
                    title: "Voting Error",
                    subTitle: res.error,
                    buttons: ['OK']
                });
                alert_1.present();
                _this.navCtrl.pop();
            }
            if (res.message) {
                var toast = _this.toastCtrl.create({
                    message: res.message,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.navCtrl.popToRoot();
            }
        });
        console.log("DEBUG: ");
        console.log(this.votingEvent.eventCreator);
        console.log(this.votingEvent.eventName);
        console.log(vote.voter);
        vote.rankings.forEach(function (obj) {
            console.log(obj.name + "  " + obj.rank);
        });
    };
    ViewEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-event',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\view-event\view-event.html"*/'\n<!-- View Event Page -->\n<ion-header class="instruct">\n   <ion-navbar>\n      <button menuToggle *ngIf="!votingEvent">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n   <ion-title>Event</ion-title>\n  </ion-navbar>\n  <div class="instruct">\n      <p *ngIf="votingEvent.ordinalSelected">Please rank the choices below from your favorite (1st) to your least</p>\n      <p *ngIf="votingEvent.highMediumLowSelected">Please select your favorite choice from the selection below</p>\n    </div>\n</ion-header>\n\n<ion-content padding>\n    <h3 text-center *ngIf="votingEvent">\n        {{votingEvent.eventName}}\n      </h3>\n      <p text-center>Created by : {{votingEvent.eventCreator}}</p>\n      <p text-center *ngIf="votingEvent">\n        {{votingEvent.description}}\n      </p>\n      <br>\n      \n      <ion-list *ngIf="votingEvent.ordinalSelected">\n          <ion-item *ngFor="let choice of votingEvent.itemList">\n            <ion-label>{{choice}}</ion-label>\n            <ion-select  [(ngModel)]="talliedVote[choice]" (ionChange)="testOne($event, choice)">\n              <ion-option *ngFor="let choice of votingEvent.itemList"\n              >{{votingEvent.itemList.indexOf(choice) + 1}}</ion-option>\n            </ion-select>\n          </ion-item>\n      </ion-list>\n      <ion-list *ngIf="votingEvent.highMediumLowSelected">\n          <ion-item *ngFor="let choice of votingEvent.itemList">\n            <ion-label>{{choice}}</ion-label>\n            <ion-select  [(ngModel)]="talliedVote[choice]" (ionChange)="testOne($event, choice)">\n              <ion-option >"Yes!"</ion-option>\n            </ion-select>\n          </ion-item>\n      </ion-list>\n      <p></p>\n      <br>\n      <button ion-button block (click)="vote()">Submit Vote!</button>\n</ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\view-event\view-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_event_event__["a" /* EventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ViewEventPage);
    return ViewEventPage;
}());

//# sourceMappingURL=view-event.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ResultChartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RankedVotesPickOne = /** @class */ (function () {
    function RankedVotesPickOne() {
        this.names = [];
        this.votes = [];
    }
    return RankedVotesPickOne;
}());
var ResultChartsPage = /** @class */ (function () {
    function ResultChartsPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.voteLabel = ["Lion King", "Wall-e", "Beauty & The Beast"];
        this.voteData = [6, 11, 9];
        this.voteList = this.navParams.get('vote');
    }
    ResultChartsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultChartsPage');
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: this.voteList.voteLabel,
                datasets: [{
                        label: this.voteList.eventName,
                        data: this.voteList.voteData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: .5
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        //   this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        //       type: 'doughnut',
        //       data: {
        //           labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        //           datasets: [{
        //               label: '# of Votes',
        //               data: [12, 19, 3, 5, 2, 3],
        //               backgroundColor: [
        //                   'rgba(255, 99, 132, 0.2)',
        //                   'rgba(54, 162, 235, 0.2)',
        //                   'rgba(255, 206, 86, 0.2)',
        //                   'rgba(75, 192, 192, 0.2)',
        //                   'rgba(153, 102, 255, 0.2)',
        //                   'rgba(255, 159, 64, 0.2)'
        //               ],
        //               hoverBackgroundColor: [
        //                   "#FF6384",
        //                   "#36A2EB",
        //                   "#FFCE56",
        //                   "#FF6384",
        //                   "#36A2EB",
        //                   "#FFCE56"
        //               ]
        //           }]
        //       }
        //   });
    };
    ResultChartsPage.prototype.sendResults = function () {
        var toast = this.toastCtrl.create({
            message: "Results have been sent!",
            duration: 3000,
            position: 'top'
        });
        toast.present();
        this.navCtrl.popToRoot();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], ResultChartsPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], ResultChartsPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], ResultChartsPage.prototype, "lineCanvas", void 0);
    ResultChartsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result-charts',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\result-charts\result-charts.html"*/'<!--\n  Generated template for the ResultChartsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Result Charts</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="greyish">\n  <br>\n  <br>\n    <ion-card center >\n        <ion-card-header>\n          Bar Chart\n        </ion-card-header>\n        <ion-card-content>\n          <canvas class="expand" #barCanvas></canvas>\n        </ion-card-content>\n      </ion-card>\n      <br>\n      <br>\n      <div padding>\n      <ion-label ion-button class="button-block" (click)="sendResults()">Send out results</ion-label>\n      </div>\n      <!-- <ion-card>\n        <ion-card-header>\n          Doughnut Chart\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #doughnutCanvas></canvas>\n        </ion-card-content>\n      </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\result-charts\result-charts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ResultChartsPage);
    return ResultChartsPage;
}());

//# sourceMappingURL=result-charts.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonViewContribPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contribute_lesson_contribute_lesson__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LessonViewContribPage = /** @class */ (function () {
    function LessonViewContribPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lessonView = this.navParams.get('lesson');
    }
    LessonViewContribPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LessonViewContribPage');
    };
    LessonViewContribPage.prototype.goToContributeLesson = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contribute_lesson_contribute_lesson__["a" /* ContributeLessonPage */], { lesson: this.lessonView });
    };
    LessonViewContribPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lesson-view-contrib',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\lesson-view-contrib\lesson-view-contrib.html"*/'<!--LessonViewContribPage-->\n<ion-header>\n    <ion-navbar>\n       <button menuToggle *ngIf="!lessonView">\n         <ion-icon name="menu"></ion-icon>\n       </button>\n    <ion-title>{{lessonView.title}}</ion-title>\n   </ion-navbar>\n </ion-header>\n\n<ion-content class="greyish" padding>\n  <ion-card>\n    <p padding>{{lessonView.lesson}}</p>\n    <ion-item>\n        <h3>{{lessonView.creator}}</h3>\n        <ion-note>{{lessonView.date}}</ion-note>\n    </ion-item>\n  </ion-card>\n    <ion-card *ngFor="let lessonAdvice of lessonView.contributions">\n      <p padding>{{lessonAdvice.advice}}</p>\n      <ion-item>\n          <h3>{{lessonAdvice.name}}</h3>\n          <ion-note>{{lessonAdvice.date}}</ion-note>\n      </ion-item>\n    </ion-card>\n  <ion-fab bottom right>\n    <button ion-fab (click)="goToContributeLesson()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\lesson-view-contrib\lesson-view-contrib.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LessonViewContribPage);
    return LessonViewContribPage;
}());

//# sourceMappingURL=lesson-view-contrib.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_register__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hello_ionic_hello_ionic__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//providers



var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, reg, loadingCtrl, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reg = reg;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.userSignup = function () {
        var _this = this;
        if (this.fullname === undefined || this.email === undefined || this.password === undefined) {
            var alert_1 = this.alertCtrl.create({
                title: 'Sign Up Error',
                subTitle: 'One or more fields were empty',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.showLoading();
            this.reg.registerUser(this.fullname, this.email, this.password)
                .subscribe(function (res) {
                _this.loading.dismiss();
                console.log(res);
                if (res.user) {
                    var userData = {
                        name: res.user.fullname,
                        email: res.user.email
                    };
                    _this.storage.set('userEmail', userData.email);
                    _this.storage.set('userName', userData.name);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__hello_ionic_hello_ionic__["a" /* HelloIonicPage */], { data: userData });
                }
                if (res.error) {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Sign Up Error',
                        subTitle: res.error,
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            });
            this.fullname = '';
            this.email = '';
            this.password = '';
        }
    };
    SignUpPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...',
            duration: 3000
        });
        this.loading.present();
    };
    SignUpPage.prototype.loginPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\sign-up\sign-up.html"*/'<ion-content color="primary" padding>\n   <br>\n   <br>\n   <br>\n       <ion-grid>\n         <ion-row color="primary" justify-content-center>\n           <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">\n             <div text-center>\n               <img src=\'../../assets/imgs/acbluepurp.jpg\'>\n               <h3>Sign up for Eventure!</h3>\n             </div>\n             <div padding >\n               <ion-item >\n                    <ion-input name="fullname" type="text" \n                    placeholder="Fullname"  \n                    [(ngModel)]="fullname"></ion-input>\n               </ion-item>\n               <ion-item >\n                  <ion-input name="email" type="email" \n                  placeholder="your@email.com"  \n                  [(ngModel)]="email"></ion-input>\n                </ion-item> \n               <ion-item >\n                 <ion-input name="password" type="password" \n                 placeholder="Password"  \n                 [(ngModel)]="password"></ion-input>\n               </ion-item>\n             </div>\n             <br>\n             <br>\n             <div padding>\n               <ion-label  ion-button class="button-block" \n               size="large" type="submit" (click)="userSignup()">Sign up</ion-label>\n               <br>\n               <ion-label  ion-button clear class="button-block" \n               size="large" type="submit" (click)="loginPage()">Already a member? Login!</ion-label>\n             </div>\n           </ion-col>\n         </ion-row>\n       </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_ngx__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, camera, evetProvider, actionSheetCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.evetProvider = evetProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
        this.user = this.navParams.get('user');
    };
    SettingsPage.prototype.addImage = function () {
        var _this = this;
        var options = {
            quality: 75,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: false,
            correctOrientation: true,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 300,
            targetHeight: 300,
        };
        this.camera.getPicture(options).then(function (imgURL) {
            _this.imagePath = 'data:imagejpeg;base64,' + imgURL;
        });
        console.log(this.imagePath);
    };
    SettingsPage.prototype.captureImage = function () {
        var _this = this;
        var CamOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            targetWidth: 1024,
            targetHeight: 720
        };
        this.camera.getPicture(CamOptions).then(function (imageData) {
            console.log(imageData);
            _this.CapturedImageURL = imageData;
        });
    };
    SettingsPage.prototype.captureImageGallery = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: 0,
            saveToPhotoAlbum: true,
            targetWidth: 1024,
            targetHeight: 720,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.CapturedImageURL = imageData;
        });
    };
    SettingsPage.prototype.CameraActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose an image from',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        _this.captureImage();
                    }
                },
                {
                    text: 'Library',
                    icon: 'image',
                    handler: function () {
                        _this.captureImageGallery();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'close-circle',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      <ion-avatar ion-start>\n        <img src=\'../../assets/imgs/Mandy.jpg\'>\n      </ion-avatar>\n      <p>Account</p>\n      <p *ngIf="user">{{user.user}}</p>\n      <button ion-button item-end (click)="CameraActionSheet()">Add image</button>\n    </ion-list-header>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_ngx__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contribute-lesson/contribute-lesson.module": [
		490,
		13
	],
	"../pages/event/event.module": [
		491,
		12
	],
	"../pages/input-lessons/input-lessons.module": [
		492,
		11
	],
	"../pages/lesson-view-contrib/lesson-view-contrib.module": [
		498,
		10
	],
	"../pages/login/login.module": [
		493,
		9
	],
	"../pages/open-events/open-events.module": [
		502,
		8
	],
	"../pages/result-charts/result-charts.module": [
		503,
		7
	],
	"../pages/search-lessons/search-lessons.module": [
		494,
		6
	],
	"../pages/send-reminders/send-reminders.module": [
		495,
		5
	],
	"../pages/settings/settings.module": [
		496,
		4
	],
	"../pages/sign-up/sign-up.module": [
		497,
		3
	],
	"../pages/view-event/view-event.module": [
		499,
		2
	],
	"../pages/view-lessons/view-lessons.module": [
		500,
		1
	],
	"../pages/vote-results/vote-results.module": [
		501,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};



var EventProvider = /** @class */ (function () {
    function EventProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    //note!!!! IMPORTANT in order to run locally, change the URL to this: https://eventureapp.herokuapp.com
    EventProvider.prototype.searchReminders = function (reminders) {
        var email = this.getEmail();
        return this.http.post('https://eventureapp.herokuapp.com/api/event/reminders', {
            reminders: reminders,
            email: email
        });
    };
    EventProvider.prototype.sendReminders = function (reminders) {
        return this.http.post('https://eventureapp.herokuapp.com/api/event/send-reminders', {
            remindersList: reminders
        });
    };
    EventProvider.prototype.getReminders = function (email) {
        this.getEmail();
        console.log("getReminders email " + email);
        return this.http.get("https://eventureapp.herokuapp.com/api/event/get-reminders/" + email);
    };
    EventProvider.prototype.sendVote = function (eventTitle, eventCreator, votes) {
        console.log("sending votes");
        return this.http.post('https://eventureapp.herokuapp.com/api/event/vote', {
            eventTitle: eventTitle,
            eventCreator: eventCreator,
            votes: votes
        });
    };
    EventProvider.prototype.getEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('userEmail').then(function (value) {
                            _this.email = value;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventProvider.prototype.getEmailRevised = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('userEmail')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventProvider.prototype.getOpenVotes = function (email) {
        return this.http
            .get("https://eventureapp.herokuapp.com/api/events/view/" + email);
    };
    EventProvider.prototype.viewOpenVotes = function () {
        this.getEmail();
        return this.http
            .get("https://eventureapp.herokuapp.com/api/events/view/" + this.email);
    };
    EventProvider.prototype.createEvent = function (eventCreator, creatorEmail, eventName, endDate, itemList, ordinalSelected, highMediumLowSelected, description, guestList) {
        return this.http.post('https://eventureapp.herokuapp.com/api/event/create', {
            eventCreator: eventCreator,
            creatorEmail: creatorEmail,
            eventName: eventName,
            endDate: endDate,
            itemList: itemList,
            ordinalSelected: ordinalSelected,
            highMediumLowSelected: highMediumLowSelected,
            description: description,
            guestList: guestList
        });
    };
    EventProvider.prototype.getRankedVotes = function (myEmail) {
        console.log('getting ranks');
        return this.http.post('https://eventureapp.herokuapp.com/api/event/ranks', {
            email: myEmail
        });
    };
    EventProvider.prototype.uploadImage = function (userId, image) {
        return this.http.post('https://eventureapp.herokuapp.com/api/v1/profile/upload', {
            userId: userId,
            image: image
        });
    };
    EventProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], EventProvider);
    return EventProvider;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VotesProvider = /** @class */ (function () {
    function VotesProvider(http) {
        this.http = http;
        console.log('Hello VotesProvider Provider');
    }
    VotesProvider.prototype.getFinishedVotes = function (email) {
        return this.http.post('https://eventureapp.herokuapp.com/api/votes', {
            email: email
        });
    };
    VotesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], VotesProvider);
    return VotesProvider;
}());

//# sourceMappingURL=votes.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewLessonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ViewLessonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewLessonsPage = /** @class */ (function () {
    function ViewLessonsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewLessonsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewLessonsPage');
    };
    ViewLessonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-lessons',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\view-lessons\view-lessons.html"*/'<!--View Lessons Page-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Lessons Learned</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\view-lessons\view-lessons.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ViewLessonsPage);
    return ViewLessonsPage;
}());

//# sourceMappingURL=view-lessons.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(386);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_server_server__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera_ngx__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_event_event__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_view_event_view_event__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_input_lessons_input_lessons__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_view_lessons_view_lessons__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_send_reminders_send_reminders__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_open_events_open_events__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_vote_results_vote_results__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_search_lessons_search_lessons__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_lesson_view_contrib_lesson_view_contrib__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_sign_up_sign_up__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_hello_ionic_hello_ionic__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_item_details_item_details__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_register_register__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_event_event__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_lesson_lesson__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_contribute_lesson_contribute_lesson__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_result_charts_result_charts__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_votes_votes__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_settings_settings__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//Pages of app go HERE




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_view_event_view_event__["a" /* ViewEventPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_input_lessons_input_lessons__["a" /* InputLessonsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_view_lessons_view_lessons__["a" /* ViewLessonsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_send_reminders_send_reminders__["a" /* SendRemindersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_open_events_open_events__["a" /* OpenEventsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_vote_results_vote_results__["a" /* VoteResultsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_search_lessons_search_lessons__["a" /* SearchLessonsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_lesson_view_contrib_lesson_view_contrib__["a" /* LessonViewContribPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_contribute_lesson_contribute_lesson__["a" /* ContributeLessonPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_result_charts_result_charts__["a" /* ResultChartsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contribute-lesson/contribute-lesson.module#ContributeLessonPageModule', name: 'ContributeLessonPage', segment: 'contribute-lesson', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event/event.module#EventPageModule', name: 'EventPage', segment: 'event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/input-lessons/input-lessons.module#InputLessonsPageModule', name: 'InputLessonsPage', segment: 'input-lessons', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-lessons/search-lessons.module#SearchLessonsPageModule', name: 'SearchLessonsPage', segment: 'search-lessons', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/send-reminders/send-reminders.module#SendRemindersPageModule', name: 'SendRemindersPage', segment: 'send-reminders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lesson-view-contrib/lesson-view-contrib.module#LessonViewContribPageModule', name: 'LessonViewContribPage', segment: 'lesson-view-contrib', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-event/view-event.module#ViewEventPageModule', name: 'ViewEventPage', segment: 'view-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-lessons/view-lessons.module#ViewLessonsPageModule', name: 'ViewLessonsPage', segment: 'view-lessons', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vote-results/vote-results.module#VoteResultsPageModule', name: 'VoteResultsPage', segment: 'vote-results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/open-events/open-events.module#OpenEventsPageModule', name: 'OpenEventsPage', segment: 'open-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/result-charts/result-charts.module#ResultChartsPageModule', name: 'ResultChartsPage', segment: 'result-charts', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_view_event_view_event__["a" /* ViewEventPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_input_lessons_input_lessons__["a" /* InputLessonsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_view_lessons_view_lessons__["a" /* ViewLessonsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_send_reminders_send_reminders__["a" /* SendRemindersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_open_events_open_events__["a" /* OpenEventsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_vote_results_vote_results__["a" /* VoteResultsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_search_lessons_search_lessons__["a" /* SearchLessonsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_lesson_view_contrib_lesson_view_contrib__["a" /* LessonViewContribPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_contribute_lesson_contribute_lesson__["a" /* ContributeLessonPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_result_charts_result_charts__["a" /* ResultChartsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_settings_settings__["a" /* SettingsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__providers_server_server__["a" /* ServerProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_register_register__["a" /* RegisterProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_event_event__["a" /* EventProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_lesson_lesson__["a" /* LessonProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_votes_votes__["a" /* VotesProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera_ngx__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalliedVote; });
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
var TalliedVote = /** @class */ (function () {
    function TalliedVote() {
        this.rankings = [];
    }
    return TalliedVote;
}());

//# sourceMappingURL=talliedVoteClass.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = /** @class */ (function () {
    function Event(creator, title, description, endDate, choice, guests, highMedLow, ordinal) {
        this.eventCreator = creator;
        this.eventName = title;
        this.description = description;
        this.endDate = endDate;
        this.itemList = choice;
        this.guestList = guests;
        this.highMediumLowSelected = highMedLow;
        this.ordinalSelected = ordinal;
    }
    return Event;
}());

;
//# sourceMappingURL=eventClass.js.map

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 193,
	"./af.js": 193,
	"./ar": 194,
	"./ar-dz": 195,
	"./ar-dz.js": 195,
	"./ar-kw": 196,
	"./ar-kw.js": 196,
	"./ar-ly": 197,
	"./ar-ly.js": 197,
	"./ar-ma": 198,
	"./ar-ma.js": 198,
	"./ar-sa": 199,
	"./ar-sa.js": 199,
	"./ar-tn": 200,
	"./ar-tn.js": 200,
	"./ar.js": 194,
	"./az": 201,
	"./az.js": 201,
	"./be": 202,
	"./be.js": 202,
	"./bg": 203,
	"./bg.js": 203,
	"./bm": 204,
	"./bm.js": 204,
	"./bn": 205,
	"./bn.js": 205,
	"./bo": 206,
	"./bo.js": 206,
	"./br": 207,
	"./br.js": 207,
	"./bs": 208,
	"./bs.js": 208,
	"./ca": 209,
	"./ca.js": 209,
	"./cs": 210,
	"./cs.js": 210,
	"./cv": 211,
	"./cv.js": 211,
	"./cy": 212,
	"./cy.js": 212,
	"./da": 213,
	"./da.js": 213,
	"./de": 214,
	"./de-at": 215,
	"./de-at.js": 215,
	"./de-ch": 216,
	"./de-ch.js": 216,
	"./de.js": 214,
	"./dv": 217,
	"./dv.js": 217,
	"./el": 218,
	"./el.js": 218,
	"./en-SG": 219,
	"./en-SG.js": 219,
	"./en-au": 220,
	"./en-au.js": 220,
	"./en-ca": 221,
	"./en-ca.js": 221,
	"./en-gb": 222,
	"./en-gb.js": 222,
	"./en-ie": 223,
	"./en-ie.js": 223,
	"./en-il": 224,
	"./en-il.js": 224,
	"./en-nz": 225,
	"./en-nz.js": 225,
	"./eo": 226,
	"./eo.js": 226,
	"./es": 227,
	"./es-do": 228,
	"./es-do.js": 228,
	"./es-us": 229,
	"./es-us.js": 229,
	"./es.js": 227,
	"./et": 230,
	"./et.js": 230,
	"./eu": 231,
	"./eu.js": 231,
	"./fa": 232,
	"./fa.js": 232,
	"./fi": 233,
	"./fi.js": 233,
	"./fo": 234,
	"./fo.js": 234,
	"./fr": 235,
	"./fr-ca": 236,
	"./fr-ca.js": 236,
	"./fr-ch": 237,
	"./fr-ch.js": 237,
	"./fr.js": 235,
	"./fy": 238,
	"./fy.js": 238,
	"./ga": 239,
	"./ga.js": 239,
	"./gd": 240,
	"./gd.js": 240,
	"./gl": 241,
	"./gl.js": 241,
	"./gom-latn": 242,
	"./gom-latn.js": 242,
	"./gu": 243,
	"./gu.js": 243,
	"./he": 244,
	"./he.js": 244,
	"./hi": 245,
	"./hi.js": 245,
	"./hr": 246,
	"./hr.js": 246,
	"./hu": 247,
	"./hu.js": 247,
	"./hy-am": 248,
	"./hy-am.js": 248,
	"./id": 249,
	"./id.js": 249,
	"./is": 250,
	"./is.js": 250,
	"./it": 251,
	"./it-ch": 252,
	"./it-ch.js": 252,
	"./it.js": 251,
	"./ja": 253,
	"./ja.js": 253,
	"./jv": 254,
	"./jv.js": 254,
	"./ka": 255,
	"./ka.js": 255,
	"./kk": 256,
	"./kk.js": 256,
	"./km": 257,
	"./km.js": 257,
	"./kn": 258,
	"./kn.js": 258,
	"./ko": 259,
	"./ko.js": 259,
	"./ku": 260,
	"./ku.js": 260,
	"./ky": 261,
	"./ky.js": 261,
	"./lb": 262,
	"./lb.js": 262,
	"./lo": 263,
	"./lo.js": 263,
	"./lt": 264,
	"./lt.js": 264,
	"./lv": 265,
	"./lv.js": 265,
	"./me": 266,
	"./me.js": 266,
	"./mi": 267,
	"./mi.js": 267,
	"./mk": 268,
	"./mk.js": 268,
	"./ml": 269,
	"./ml.js": 269,
	"./mn": 270,
	"./mn.js": 270,
	"./mr": 271,
	"./mr.js": 271,
	"./ms": 272,
	"./ms-my": 273,
	"./ms-my.js": 273,
	"./ms.js": 272,
	"./mt": 274,
	"./mt.js": 274,
	"./my": 275,
	"./my.js": 275,
	"./nb": 276,
	"./nb.js": 276,
	"./ne": 277,
	"./ne.js": 277,
	"./nl": 278,
	"./nl-be": 279,
	"./nl-be.js": 279,
	"./nl.js": 278,
	"./nn": 280,
	"./nn.js": 280,
	"./pa-in": 281,
	"./pa-in.js": 281,
	"./pl": 282,
	"./pl.js": 282,
	"./pt": 283,
	"./pt-br": 284,
	"./pt-br.js": 284,
	"./pt.js": 283,
	"./ro": 285,
	"./ro.js": 285,
	"./ru": 286,
	"./ru.js": 286,
	"./sd": 287,
	"./sd.js": 287,
	"./se": 288,
	"./se.js": 288,
	"./si": 289,
	"./si.js": 289,
	"./sk": 290,
	"./sk.js": 290,
	"./sl": 291,
	"./sl.js": 291,
	"./sq": 292,
	"./sq.js": 292,
	"./sr": 293,
	"./sr-cyrl": 294,
	"./sr-cyrl.js": 294,
	"./sr.js": 293,
	"./ss": 295,
	"./ss.js": 295,
	"./sv": 296,
	"./sv.js": 296,
	"./sw": 297,
	"./sw.js": 297,
	"./ta": 298,
	"./ta.js": 298,
	"./te": 299,
	"./te.js": 299,
	"./tet": 300,
	"./tet.js": 300,
	"./tg": 301,
	"./tg.js": 301,
	"./th": 302,
	"./th.js": 302,
	"./tl-ph": 303,
	"./tl-ph.js": 303,
	"./tlh": 304,
	"./tlh.js": 304,
	"./tr": 305,
	"./tr.js": 305,
	"./tzl": 306,
	"./tzl.js": 306,
	"./tzm": 307,
	"./tzm-latn": 308,
	"./tzm-latn.js": 308,
	"./tzm.js": 307,
	"./ug-cn": 309,
	"./ug-cn.js": 309,
	"./uk": 310,
	"./uk.js": 310,
	"./ur": 311,
	"./ur.js": 311,
	"./uz": 312,
	"./uz-latn": 313,
	"./uz-latn.js": 313,
	"./uz.js": 312,
	"./vi": 314,
	"./vi.js": 314,
	"./x-pseudo": 315,
	"./x-pseudo.js": 315,
	"./yo": 316,
	"./yo.js": 316,
	"./zh-cn": 317,
	"./zh-cn.js": 317,
	"./zh-hk": 318,
	"./zh-hk.js": 318,
	"./zh-tw": 319,
	"./zh-tw.js": 319
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 443;

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_event_event__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_input_lessons_input_lessons__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_send_reminders_send_reminders__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_vote_results_vote_results__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_search_lessons_search_lessons__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};














var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen, http, storage) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.http = http;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            //{ title: 'Eventure Home', component: HelloIonicPage, },
            { title: 'Create Event', component: __WEBPACK_IMPORTED_MODULE_4__pages_event_event__["a" /* EventPage */] },
            { title: 'Search Lessons', component: __WEBPACK_IMPORTED_MODULE_12__pages_search_lessons_search_lessons__["a" /* SearchLessonsPage */] },
            { title: 'Create Lesson', component: __WEBPACK_IMPORTED_MODULE_5__pages_input_lessons_input_lessons__["a" /* InputLessonsPage */] },
            { title: 'Send Reminders', component: __WEBPACK_IMPORTED_MODULE_6__pages_send_reminders_send_reminders__["a" /* SendRemindersPage */] },
            { title: 'Vote results', component: __WEBPACK_IMPORTED_MODULE_7__pages_vote_results_vote_results__["a" /* VoteResultsPage */] }
        ];
        this.storage.get('userName').then(function (value) {
            _this.user = value;
        });
        this.storage.get('userEmail').then(function (value) {
            _this.email = value;
        });
        //this.http.get("http://jsonplaceholder.typicode.com/users")
        //   .map((response) => response)
        //   .subscribe(data => { 
        //     this.user = data[0].name;
        //     this.department = data[0].address.city;
        //   })
    }
    MyApp.prototype.initializeApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.platform.ready().then(function () {
                            _this.statusBar.styleDefault();
                            _this.splashScreen.hide();
                        });
                        return [4 /*yield*/, this.getEmail()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.getEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('userName').then(function (value) {
                            _this.user = value;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.menu.close();
        this.nav.push(page.component);
    };
    MyApp.prototype.logOut = function () {
        this.storage.clear();
        this.storage.remove('userEmail');
        this.storage.remove('userName');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.settings = function () {
        var user = {
            user: this.user,
            email: this.email
        };
        this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */], { user: user });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar class="left">\n\n      <ion-avatar class="centered">\n          <img class="avatar-menu" src=\'../../assets/imgs/Mandy.jpg\'>\n      </ion-avatar>\n        <ion-label class="white" > {{user}} </ion-label>\n        <ion-note class="white" text-center> {{email}} </ion-note>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-item no-lines *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n        <ion-icon item-right name="redo"></ion-icon>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <button no-lines ion-item menuClose (click)="settings()">Settings\n        <ion-icon name="settings" item-left></ion-icon>\n      </button>\n      <button no-lines ion-item menuClose (click)="logOut()">Log out\n          <ion-icon name="log-out" item-left></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServerProvider = /** @class */ (function () {
    function ServerProvider(http) {
        this.http = http;
        console.log('Hello ServerProvider Provider');
    }
    ServerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServerProvider);
    return ServerProvider;
}());

//# sourceMappingURL=server.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\item-details\item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LessonProvider = /** @class */ (function () {
    function LessonProvider(http) {
        this.http = http;
        console.log('Hello LessonProvider Provider');
    }
    LessonProvider.prototype.createLesson = function (creator, email, title, description, lesson, contributions, contributors, isPrivate, date) {
        return this.http.post('https://eventureapp.herokuapp.com/api/lesson/create', {
            creator: creator,
            email: email,
            title: title,
            description: description,
            lesson: lesson,
            contributions: contributions,
            contributors: contributors,
            isPrivate: isPrivate,
            date: date
        });
    };
    LessonProvider.prototype.searchLessons = function (lesson) {
        return this.http.post('https://eventureapp.herokuapp.com/api/lesson/search-lesson', {
            lesson: lesson
        });
    };
    LessonProvider.prototype.contributeLesson = function (creator, email, title, contributor, contribution, date) {
        if (date === void 0) { date = Date.apply(Date.now()); }
        return this.http.post('https://eventureapp.herokuapp.com/api/lesson/contribute', {
            creator: creator,
            email: email,
            title: title,
            contributor: contributor,
            contribution: contribution,
            date: date
        });
    };
    LessonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LessonProvider);
    return LessonProvider;
}());

//# sourceMappingURL=lesson.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_event__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_lessons_input_lessons__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__send_reminders_send_reminders__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__open_events_open_events__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vote_results_vote_results__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_lessons_search_lessons__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_event_event__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
//Angular, ionic, etc... imports



//local App imports for pushing page







var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage(navCtrl, navParams, eventCtrl, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventCtrl = eventCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.userData = this.navParams.get('data');
        console.log(this.userData.email);
        this.checkReminders();
    }
    HelloIonicPage.prototype.onPageWillEnter = function () {
    };
    HelloIonicPage.prototype.checkReminders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var message;
            return __generator(this, function (_a) {
                message = "";
                this.eventCtrl.getReminders(this.userData.email).subscribe(function (res) {
                    if (res.results) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "You have Reminders",
                            subTitle: "Reminder name goes here",
                            buttons: ['OK']
                        });
                        alert_1.present();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    HelloIonicPage.prototype.voteResultsClicked = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__vote_results_vote_results__["a" /* VoteResultsPage */], { data: this.userData });
    };
    HelloIonicPage.prototype.openEventsClicked = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__open_events_open_events__["a" /* OpenEventsPage */]);
    };
    HelloIonicPage.prototype.createLessonClicked = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__input_lessons_input_lessons__["a" /* InputLessonsPage */]);
    };
    HelloIonicPage.prototype.createEventClicked = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event_event__["a" /* EventPage */]);
    };
    HelloIonicPage.prototype.sendReminderClicked = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__send_reminders_send_reminders__["a" /* SendRemindersPage */]);
    };
    HelloIonicPage.prototype.searchLessonsClicked = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_lessons_search_lessons__["a" /* SearchLessonsPage */]);
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header class="instruct">\n  <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Eventure</ion-title>\n  </ion-navbar>\n  <div class="instruct">\n      <ion-avatar class="centered">\n        <img class="avatar" src=\'../../assets/imgs/Mandy.jpg\'>\n      </ion-avatar>\n      <h2> {{userData.name}} </h2>\n      <ion-note> {{userData.email}} </ion-note>      \n  </div>\n</ion-header>\n\n\n\n\n<ion-content padding>\n  <!--<ion-card class="ion-card-class">\n      <ion-item>\n        <ion-avatar>\n          <img src="../../assets/imgs/logo.png">\n        </ion-avatar>  \n      </ion-item>\n      <ion-card-content>\n        <ion-card-title>{{userData.name}}</ion-card-title>\n        <ion-note>{{userData.email}}</ion-note>\n      </ion-card-content>\n  </ion-card>-->\n  <br>\n  <ion-item no-lines padding (click)="openEventsClicked()">\n      <ion-icon name="paper" item-left></ion-icon>\n      Open events\n      <ion-badge item-right>3</ion-badge>\n  </ion-item>\n  <ion-item no-lines padding (click)="voteResultsClicked()">\n      <ion-icon name="stats" item-left></ion-icon>\n      Vote results\n      <ion-badge (click)="checkReminders()" item-right>4</ion-badge>\n  </ion-item>\n  <ion-item no-lines padding (click)="sendReminderClicked()">\n      <ion-icon name="mail" item-left></ion-icon>\n      Send reminder\n      <ion-badge item-right>10</ion-badge>\n  </ion-item>\n  <br>\n  <p></p>\n  <br>\n  <ion-item no-lines >\n    <ion-label ion-button large class="button-block" (click)="createEventClicked($event)" >\n      Create new event\n      <ion-icon name="checkmark-circle-outline" item-right padding></ion-icon>\n    </ion-label>\n  </ion-item>\n  <ion-item no-lines >\n      <ion-label ion-button large class="button-block" (click)="createLessonClicked()">\n          Create new lesson \n          <ion-icon name="list" item-right padding></ion-icon>\n      </ion-label>\n  </ion-item>\n  <ion-item no-lines >\n      <ion-label ion-button large class="button-block" (click)="searchLessonsClicked()">\n          Search lessons \n          <ion-icon name="search" item-right padding></ion-icon>\n      </ion-label>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_9__providers_event_event__["a" /* EventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Event = /** @class */ (function () {
    function Event() {
    }
    return Event;
}());
var EventPage = /** @class */ (function () {
    function EventPage(navCtrl, navParams, eventProvider, storage, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventProvider = eventProvider;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.itemList = [];
        this.guestList = [];
        this.storage.get('userEmail').then(function (email) {
            _this.creatorEmail = email;
            console.log("debug: " + _this.creatorEmail);
        });
        this.storage.get('userName').then(function (name) {
            _this.eventCreator = name;
            console.log("debug " + _this.eventCreator);
        });
    }
    EventPage.prototype.addItem = function () {
        this.itemList.push(this.inputAddItem);
        this.itemList.forEach(function (item) { console.log("" + item); });
        this.inputAddItem = '';
    };
    EventPage.prototype.remove = function (item) {
        var i = this.itemList.indexOf(item);
        if (i != -1) {
            this.itemList.splice(i, 1);
        }
        this.itemList.forEach(function (word) { console.log(word); });
    };
    EventPage.prototype.addGuest = function () {
        this.guestList.push(this.inputAddGuest);
        this.guestList.forEach(function (guest) { console.log("" + guest); });
        this.inputAddGuest = '';
    };
    EventPage.prototype.removeGuest = function (guest) {
        var i = this.guestList.indexOf(guest);
        if (i != -1) {
            this.guestList.splice(i, 1);
        }
        this.guestList.forEach(function (word) { console.log(word); });
    };
    EventPage.prototype.selectOrdinal = function () {
        this.ordinalSelected = true;
        this.highMediumLowSelected = false;
    };
    EventPage.prototype.selectHighMediumLow = function () {
        this.highMediumLowSelected = true;
        this.ordinalSelected = false;
    };
    EventPage.prototype.clear = function () {
        this.eventCreator = '';
        this.creatorEmail = '';
        this.eventName = '';
        this.endDate = null;
        this.inputAddItem = '';
        this.itemList = [];
        this.ordinalSelected = null;
        this.highMediumLowSelected = null;
        this.description = '';
        this.inputAddGuest = '';
        this.guestList = [];
    };
    EventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventPage');
    };
    EventPage.prototype.createEvent = function () {
        var _this = this;
        this.eventProvider.createEvent(this.eventCreator, this.creatorEmail, this.eventName, this.endDate, this.itemList, this.ordinalSelected, this.highMediumLowSelected, this.description, this.guestList)
            .subscribe(function (res) {
            if (res.message) {
                var toast = _this.toastCtrl.create({
                    message: res.message,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.navCtrl.pop();
            }
            if (res.error) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Event Creation Error',
                    subTitle: res.error,
                    buttons: ['OK']
                });
                alert_1.present();
            }
            console.log(res);
        });
        this.clear();
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\event\event.html"*/'\n<ion-header class="instruct">\n  <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Create Event</ion-title>\n  </ion-navbar>\n  <div class="instruct">\n    <p>Fill out the forms below to begin creating an event. \n      Press Submit button when finished to create your event</p>\n  </div>\n</ion-header>\n\n<ion-content padding>\n    <ion-item padding>\n      <ion-label color="dark" >Event: </ion-label>\n      <ion-input class="ion-label-text" type="text" \n      placeholder="Add event name here" clearInput \n      [(ngModel)]="eventName"></ion-input>\n    </ion-item>\n    <ion-item padding>\n        <ion-label color="dark">End Date: </ion-label>\n        <ion-datetime placeholder="Add your ending date here" \n        display-format="MMMM YYYY" picker-format="MMMM YYYY"\n        min="2019" max="2050" [(ngModel)]="endDate"></ion-datetime>\n    </ion-item>\n    <ion-item padding>\n        <ion-label color="dark">Description: </ion-label>\n  </ion-item>\n  <ion-item padding>\n        <ion-textarea rows=7\n        placeholder="Enter more information here..."\n        [(ngModel)]="description"></ion-textarea>\n  </ion-item>\n    <ion-item no-lines *ngIf="itemList.length > 0">\n      <ion-label color="dark">Items to be ranked: </ion-label>\n    </ion-item>\n    <ion-list padding>\n      <ion-item (click)="remove(item)" *ngFor="let item of itemList">\n        {{item}}\n      <ion-icon item-right name="close-circle"></ion-icon>\n      </ion-item>\n    </ion-list>\n    <ion-item padding>\n        <ion-label color="dark" >Add item: </ion-label>\n        <ion-input class="ion-label-text" type="text" \n        placeholder="Add list items here" clearInput\n        [(ngModel)]="inputAddItem" name="inputAddItem"></ion-input>\n    </ion-item>\n      <p padding>\n       <button padding ion-button shape="round" (click)="addItem()">\n         <ion-icon name="add"></ion-icon> Add item\n       </button>\n      </p>\n    <ion-item padding>\n          <ion-label color="dark">Selet ranking type: </ion-label>\n    </ion-item>\n    <ion-item padding>\n      <!--<ion-note>ordinal selected</ion-note> TODO *ngIf -->\n      <ion-grid >\n        <ion-row>\n          <ion-col col-6 class="centered">\n            <button ion-button class="button-block"\n            (click)="selectOrdinal()"\n            title="Traditional ranking">\n            <ion-icon *ngIf="ordinalSelected === true" \n            name="checkmark" item-right></ion-icon>Rank 1st, 2nd...</button>\n          </ion-col >\n          <ion-col col-6 class="centered">\n              <button ion-button class="button-block" \n              (click)="selectHighMediumLow()"  \n              title="Use High, Medium, or low ranking" >\n              <ion-icon *ngIf="highMediumLowSelected === true" \n              name="checkmark" item-right></ion-icon>Pick One</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n<!---->\n    <ion-item padding>\n      <ion-label>Invite guests to rank:</ion-label>\n    </ion-item>\n      <ion-list padding>\n        <ion-item (click)="removeGuest(guest)" *ngFor="let guest of guestList">\n          {{guest}}\n        <ion-icon item-right name="close-circle"></ion-icon>\n        </ion-item>\n      </ion-list>\n    <ion-item>\n        <ion-input class="ion-label-text-left" type="email" \n        placeholder="Add guests here" clearInput\n        [(ngModel)]="inputAddGuest" name="inputAddGuest"></ion-input>\n    </ion-item>\n    <p padding>\n      <ion-label ion-button shape="round" (click)="addGuest()" >\n        <ion-icon name="person-add" > </ion-icon>Invite guest \n      </ion-label>\n    </p>    \n  <p></p>\n  <br>\n  <p padding >\n      <button ion-button class="button-block" (click)="createEvent()">Submit</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\event\event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputLessonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lesson_lesson__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//input lessons logic
var InputLessonsPage = /** @class */ (function () {
    function InputLessonsPage(navCtrl, navParams, storage, lessonProvider, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.lessonProvider = lessonProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.contributions = [];
        this.contributors = [];
        this.isPrivate = false;
        this.date = Date.apply(Date.now());
        this.storage.get('userName').then(function (value) { _this.creator = value; });
        this.storage.get('userEmail').then(function (value) { _this.email = value; });
        console.log(this.creator);
    }
    InputLessonsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InputLessonsPage');
    };
    InputLessonsPage.prototype.addContributor = function () {
        this.contributors.push(this.guest);
        this.contributors.forEach(function (guest) { console.log("" + guest); });
        this.guest = '';
    };
    InputLessonsPage.prototype.removeContributor = function (guest) {
        var i = this.contributors.indexOf(guest);
        if (i != -1) {
            this.contributors.splice(i, 1);
        }
        this.contributors.forEach(function (word) { console.log(word); });
    };
    InputLessonsPage.prototype.toggled = function () {
        console.log(this.isPrivate);
    };
    InputLessonsPage.prototype.submit = function () {
        var _this = this;
        this.lessonProvider.createLesson(this.creator, this.email, this.title, this.description, this.lesson, this.contributions, this.contributors, this.isPrivate, this.date).subscribe(function (res) {
            if (res.message) {
                var toast = _this.toastCtrl.create({
                    message: res.message,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.navCtrl.pop();
            }
            if (res.error) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: res.error,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    InputLessonsPage.prototype.submitTest = function () {
        console.log(this.creator + " " + this.lesson);
    };
    InputLessonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-input-lessons',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\input-lessons\input-lessons.html"*/'<!-- Input Lesson Page-->\n<ion-header class="instruct">\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Create Lesson</ion-title>\n    </ion-navbar>\n    <div class="instruct">\n        <p>Use the search bar below to manage your events and send reminders. \n          You can search by event names, emails, or keywords and the search will\n        filter accordingly</p>\n      </div>\n  </ion-header>\n\n  <ion-content padding>\n        <ion-item padding>\n          <ion-label color="dark">Title: </ion-label>\n          <ion-input class="placeHolderText" type="text" \n          placeholder="Add title here" clearInput \n          [(ngModel)]="title"></ion-input>\n        </ion-item>\n\n        <ion-item padding>\n              <ion-label color="dark">Description: </ion-label>\n        </ion-item>\n        <ion-item padding>\n              <ion-textarea rows=4\n              placeholder="Enter a short description here..."\n              [(ngModel)]="description"></ion-textarea>\n        </ion-item>\n        <br>\n        <ion-item padding>\n            <ion-label color="dark">Lesson: </ion-label>\n      </ion-item>\n      <ion-item padding>\n            <ion-textarea rows=8\n            placeholder="Enter your lesson here..."\n            [(ngModel)]="lesson"></ion-textarea>\n      </ion-item>\n        <ion-item padding>\n          <ion-label>Invite contibutors:</ion-label>\n        </ion-item>\n        <ion-list padding>\n            <button ion-item (click)="removeContributor(contributor)" *ngFor="let contributor of contributors">\n              {{contributor}}\n            <div item-right><ion-note>remove</ion-note></div>\n            </button>\n          </ion-list>\n        <ion-item padding>\n            <ion-input class="placeHolderText" type="email" \n            placeholder="Add contibutors here" clearInput\n            [(ngModel)]="guest" name="guest"></ion-input>\n        </ion-item>\n        <p padding>\n          <ion-label ion-button shape="round"\n            (click)="addContributor()">\n            <ion-icon name="person-add"\n            ></ion-icon>Invite Guest \n          </ion-label>\n        </p>\n        <br>\n        <ion-item no-lines>\n          <p item-left>Switch on to limit access to contibutors only</p>\n          <ion-toggle item-right\n          [(ngModel)]="isPrivate"\n          (ionChange)="toggled()"></ion-toggle>\n        </ion-item>\n      <p></p>\n      <br>\n      <p padding >\n          <button ion-button class="button-block" \n          (click)="submit()">Submit</button>\n      </p>\n    </ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\input-lessons\input-lessons.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_lesson_lesson__["a" /* LessonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], InputLessonsPage);
    return InputLessonsPage;
}());

//# sourceMappingURL=input-lessons.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendRemindersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Reminder = /** @class */ (function () {
    function Reminder(name, reminderTo, reminderFrom) {
        this.name = name;
        this.reminderTo = reminderTo;
        this.reminderFrom = reminderFrom;
    }
    return Reminder;
}());
;
var SendRemindersPage = /** @class */ (function () {
    function SendRemindersPage(navCtrl, navParams, eventProvider, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventProvider = eventProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.remindersToSend = [];
        this.showList = true;
        this.showResults = [];
        this.results = false;
        this.noResults = false;
        this.guestsListEmails = new Set();
        this.guests = [];
    }
    SendRemindersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendRemindersPage');
    };
    SendRemindersPage.prototype.searchReminders = function () {
        var _this = this;
        this.eventProvider.searchReminders(this.eventToRemind)
            .subscribe(function (res) {
            if (res.results.length > 0) {
                _this.results = true;
                _this.noResults = false;
                _this.showResults = res.results;
                _this.remindersToSend = res.results;
            }
            else {
                _this.results = false;
                _this.noResults = true;
                _this.showResults = res.results;
                _this.remindersToSend = [{ 'reminders': "No results found" }];
            }
        });
        console.log(this.showResults);
    };
    // test(event, reminder, name) {
    //     let pos = this.guestsListEmails.map(function(e) { return e.reminder; }).indexOf(reminder);
    //     let posTwo = this.guestsListEmails.map(function(e) { return e.name; }).indexOf(name);
    //     if (pos > -1 && posTwo > -1) {
    //       //console.log(pos, posTwo);
    //       this.guestsListEmails.splice(pos,1);
    //       return;
    //     } else {
    //       this.guestsListEmails.push({name:name, reminder: reminder});
    //       //this.guestsListEmails.forEach(e => console.log(`${e.reminder} ${e.name}`));
    //     }
    // }
    SendRemindersPage.prototype.testSet = function (event, name, reminder, creator) {
        this.guestsListEmails.add({ name: name, reminder: reminder, creator: creator });
    };
    SendRemindersPage.prototype.testButton = function () {
        var _this = this;
        this.guestsListEmails.forEach(function (e) { return console.log(e.name + " " + e.reminder + " " + e.creator); });
        var t = Array.from(this.guestsListEmails);
        this.eventProvider.sendReminders(t)
            .subscribe(function (res) {
            if (res.message) {
                var toast = _this.toastCtrl.create({
                    message: res.message,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.navCtrl.pop();
            }
            if (res.error) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Reminders Error!',
                    subTitle: res.error,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    SendRemindersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-send-reminders',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\send-reminders\send-reminders.html"*/'<!--Reminders Page-->\n<ion-header class="instruct">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title >Send reminders</ion-title>\n    </ion-navbar>\n    <div class="instruct">\n        <p>Use the search bar below to manage your events and send reminders. \n          You can search by event names, emails, or keywords and the search will\n        filter accordingly</p>\n      </div>\n    <ion-searchbar [(ngModel)]="evntToRemind"\n                   [showCancelButton]="true"\n                   (keyup)="searchReminders()"></ion-searchbar>\n<!--     <ion-grid>  \n        <ion-row>\n          <ion-col>\n            <button ion-button class="button-block" centered disabled>Keyword</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button class="button-block" centered checked>Title</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button class="button-block" centered disabled>Date</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n</ion-header>\n<ion-content padding class="greyish">\n  <div *ngFor="let event of showResults">\n    <ion-list *ngFor="let reminder of event.guestList; let i = index;">\n        <ion-card padding class="shadows">\n            <ion-note padding >{{event.eventName}}</ion-note>\n            <ion-item no-lines>\n                    <ion-card-title item-left>{{reminder}}</ion-card-title>\n                    <ion-checkbox (click)="testSet($event, event.eventName, reminder, event.eventCreator)" item-right></ion-checkbox>\n            </ion-item >\n            <ion-note padding>{{event.endDate}}</ion-note>\n        </ion-card>\n    </ion-list>\n  </div>\n  <button *ngIf="this.results"(click)="testButton()" ion-button block>Send Reminders</button>\n</ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\send-reminders\send-reminders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], SendRemindersPage);
    return SendRemindersPage;
}());

//# sourceMappingURL=send-reminders.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_charts_result_charts__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_event_event__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_votes_votes__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};






/**
 * Generated class for the VoteResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//vote class for ovote list to be used in ngFor in template
var Vote = /** @class */ (function () {
    function Vote(eventCreator, eventName, voteLabel, voteData) {
        this.voteLabel = [];
        this.voteData = [];
        this.eventCreator = eventCreator;
        this.eventName = eventName;
        this.voteLabel = voteLabel;
        this.voteData = voteData;
    }
    return Vote;
}());
var VoteResultsPage = /** @class */ (function () {
    function VoteResultsPage(navCtrl, navParams, storage, eventProvider, voteProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.eventProvider = eventProvider;
        this.voteProvider = voteProvider;
        this.voteList = [
            new Vote('dking@icstars.org', 'Best Accenture App', ['DME', 'BMASV', 'IT Crowd', 'New System'], [7, 4, 6, 15]),
            new Vote('dking@icstars.org', 'Favorite Marvel Movie', ['Iron Man2', 'X-Men', 'Infinity War', 'Gaurdians of the Galaxy'], [6, 12, 28, 23]),
            new Vote('dking@icstars.org', 'Favorite Power Ranger', ['Red', 'White', 'Green', 'Pink', 'Yellow', 'Blue'], [8, 12, 28, 15, 20, 2]),
            new Vote('dking@icstars.org', 'Favorite OS', ['Linux', 'Mac OS', 'Minux', 'Windows 10'], [8, 12, 3, 11])
        ];
    }
    VoteResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VoteResultsPage');
        this.pullRankedVotes();
        this.voteProviderGetVotes();
    };
    VoteResultsPage.prototype.goToCharts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_charts_result_charts__["a" /* ResultChartsPage */]);
                        return [4 /*yield*/, this.pullRankedVotes()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VoteResultsPage.prototype.pullRankedVotes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('userEmail').then(function (value) { return _this.email = value; })];
                    case 1:
                        _a.sent();
                        console.log(this.email);
                        this.eventProvider.getRankedVotes(this.email);
                        return [2 /*return*/];
                }
            });
        });
    };
    VoteResultsPage.prototype.voteProviderGetVotes = function () {
        this.voteProvider.getFinishedVotes(this.email);
        console.log('vote sent');
    };
    VoteResultsPage.prototype.voteTapped = function (event, vote) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_charts_result_charts__["a" /* ResultChartsPage */], { vote: vote });
    };
    VoteResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vote-results',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\vote-results\vote-results.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Vote Results</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngIf="voteList.length > 0">\n      <ion-item *ngFor="let vote of voteList" (click)="voteTapped($event, vote)">\n        <ion-icon item-left name="list-box"></ion-icon>\n        {{vote.eventName}}\n        <ion-icon item-right name="arrow-forward" ></ion-icon>\n      </ion-item >\n    </ion-list>\n  </ion-content>\n\n\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\vote-results\vote-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_event_event__["a" /* EventProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_votes_votes__["a" /* VotesProvider */]])
    ], VoteResultsPage);
    return VoteResultsPage;
}());

//# sourceMappingURL=vote-results.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLessonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lesson_view_contrib_lesson_view_contrib__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lesson_lesson__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchLessonsPage = /** @class */ (function () {
    function SearchLessonsPage(navCtrl, navParams, lessonProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lessonProvider = lessonProvider;
        this.lessonsResults = [];
        this.showList = true;
        this.showResults = [];
        this.results = false;
        this.noResults = false;
    }
    SearchLessonsPage.prototype.lessonPicked = function (event, lesson) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lesson_view_contrib_lesson_view_contrib__["a" /* LessonViewContribPage */], { lesson: lesson });
    };
    SearchLessonsPage.prototype.searchLesson = function () {
        var _this = this;
        this.lessonProvider.searchLessons(this.lessonToSearch)
            .subscribe(function (res) {
            if (res.results.length > 0) {
                _this.results = true;
                _this.noResults = false;
                _this.showResults = res.results;
                _this.lessonsResults = res.results;
            }
            else {
                _this.results = false;
                _this.noResults = true;
                _this.showResults = res.results;
                _this.lessonsResults = [{ 'lesson': "No results found" }];
            }
        });
    };
    SearchLessonsPage.prototype.onCancel = function (event) { };
    SearchLessonsPage.prototype.onClear = function (event) { };
    SearchLessonsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchLessonsPage');
    };
    SearchLessonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-lessons',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\search-lessons\search-lessons.html"*/'<!--Search lessons page-->\n<ion-header class="instruct">\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title >Search Lessons</ion-title>\n    </ion-navbar>\n    <div class="instruct">\n        <p>Use the search bar below to find the lesson you are looking for.\n          You can search by name, events or any keywords and the search bar will \n          filter your search accordingly.\n        </p>\n    </div>\n    <ion-searchbar \n      [(ngModel)]="lessonToSearch"\n      [showCancelButton]="true"\n      (keyup)="searchLesson()"\n      (ionCancel)="onCancel($event)"\n      (ionClear)="onClear($event)"></ion-searchbar>\n\n\n      <!--    <ion-grid>\n         <ion-row>\n          <ion-col>\n            <button ion-button class="button-block" centered disabled>Keyword</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button class="button-block" centered checked>Title</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button class="button-block" centered disabled>Creator</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n  </ion-header>\n\n<ion-content padding class="greyish">\n<ion-list *ngFor="let lesson of lessonsResults">\n  <ion-card class="ion-card-class">\n      <ion-title>{{lesson.title}}<p> {{lesson.creator}}</p></ion-title>\n      <p padding>{{lesson.description}}</p>\n      <ion-item>\n          <ion-note >{{lesson.date}}</ion-note>\n          <ion-icon class="addit" name="search" slot="right" (click)="lessonPicked($event, lesson)"></ion-icon>\n      </ion-item>\n  </ion-card>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\search-lessons\search-lessons.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_lesson_lesson__["a" /* LessonProvider */]])
    ], SearchLessonsPage);
    return SearchLessonsPage;
}());

//# sourceMappingURL=search-lessons.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hello_ionic_hello_ionic__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_register_register__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//login page






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, reg, loadingCtrl, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reg = reg;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.storage.clear();
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...',
        });
        this.loading.present();
    };
    LoginPage.prototype.submitLogin = function () {
        var _this = this;
        if (this.email === undefined || this.password === undefined) {
            var alert_1 = this.alertCtrl.create({
                title: 'Login Error',
                subTitle: 'One or more fields were empty',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.showLoading();
            this.reg.loginUser(this.email, this.password)
                .subscribe(function (res) {
                _this.loading.dismiss();
                console.log(res);
                if (res.user) {
                    var userData = {
                        name: res.user.fullname,
                        email: res.user.email
                    };
                    _this.storage.clear();
                    _this.storage.set('userEmail', userData.email);
                    _this.storage.set('userName', userData.name);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__hello_ionic_hello_ionic__["a" /* HelloIonicPage */], { data: userData });
                }
                if (res.error) {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Login Error',
                        subTitle: res.error,
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            });
            //resets the inputs to blank
            this.email = '';
            this.password = '';
        }
    };
    //placeholder for page navigation before login works or gets changes
    LoginPage.prototype.mockLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__hello_ionic_hello_ionic__["a" /* HelloIonicPage */]);
    };
    //push SignUpPage onto the stack
    LoginPage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\login\login.html"*/'\n<ion-content color="primary" padding>\n  <br>\n  <br>\n  <br>\n      <ion-grid>\n        <ion-row color="primary" justify-content-center>\n          <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">\n            <div text-center>\n              <img class="logo" src="../../assets/imgs/acbluepurp.jpg">\n              <h3>Eventure login</h3>\n            </div>\n            <div padding>\n              <ion-item >\n                <ion-input name="email" type="email" \n                placeholder="your@email.com" ngModel \n                required [(ngModel)]="email"></ion-input>\n              </ion-item>\n              <ion-item >\n                <ion-input name="password" type="password" \n                placeholder="Password" ngModel \n                required [(ngModel)]="password"></ion-input>\n              </ion-item>\n            </div>\n            <br>\n            <br>\n            <div padding>\n              <ion-label  ion-button class="button-block" \n              size="large" type="submit" (click)="submitLogin()">Login</ion-label>\n              <br>\n              <ion-label  ion-button clear class="button-block" \n              size="large" type="submit" (click)="registerPage()">Not a member? Sign up!</ion-label>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </ion-content>\n'/*ion-inline-end:"C:\EventureHeroku\MyIonicProjectLocal\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.js.map