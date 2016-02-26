System.register(['angular2/core', 'ng2-parallax/parallax-ts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, parallax_ts_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (parallax_ts_1_1) {
                parallax_ts_1 = parallax_ts_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: '/app/app.template.html',
                        directives: [
                            parallax_ts_1.Parallax
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQUE7Z0JBSUEsQ0FBQztnQkFYRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxLQUFLO3dCQUNmLFdBQVcsRUFBRyx3QkFBd0I7d0JBQ3RDLFVBQVUsRUFBRTs0QkFDUixzQkFBUTt5QkFDWDtxQkFDSixDQUFDOztnQ0FBQTtnQkFLRixtQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBRVEsdUNBQVkiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFBhcmFsbGF4LCBQYXJhbGxheENvbmZpZyB9IGZyb20gJ25nMi1wYXJhbGxheC9wYXJhbGxheC10cyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZVVybCA6ICcvYXBwL2FwcC50ZW1wbGF0ZS5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIFBhcmFsbGF4XG4gICAgXVxufSlcbmNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgLy8gY29uZmlnOiBQYXJhbGxheENvbmZpZyA9IHtcbiAgICAgICAgXG4gICAgLy8gfTtcbn1cblxuZXhwb3J0IHsgQXBwQ29tcG9uZW50IH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
