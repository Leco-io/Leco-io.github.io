!function(e, n, o) {
    "use strict";
    n("templates-app", [ "angular" ], function(e) {
        e.module("templates-app", [ "home/home.tpl.html", "thankyou/thankyou.tpl.html" ]), 
        e.module("home/home.tpl.html", []).run([ "$templateCache", function(e) {
            e.put("home/home.tpl.html", '<div class="row">\n  <div class="col-md-2"></div>\n  <div class="col-md-8">\n    <div class="jumbotron">\n      <form name="accessForm" class="form-horizontal" data-ng-submit="submit()">\n        <fieldset>\n\n          <!-- Form Name -->\n          <legend>Request Access To Leco</legend>\n\n          <!-- Text input-->\n          <div class="form-group">\n            <label class="col-md-3 control-label" for="email">Email Address</label>\n            <div class="col-md-8">\n              <input id="email" name="email" type="email" placeholder="Enter email address" class="form-control input-md" required data-ng-model="email">\n              <span class="help-block text-left">We\'ll never share your email with anyone else.</span>\n            </div>\n          </div>\n\n          <!-- Button -->\n          <div class="form-group">\n            <div class="col-md-11 text-right">\n              <button id="submit" name="submit" class="btn btn-success" data-ng-disabled="!accessForm.$valid">Request Access</button>\n            </div>\n          </div>\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>\n');
        } ]), e.module("thankyou/thankyou.tpl.html", []).run([ "$templateCache", function(e) {
            e.put("thankyou/thankyou.tpl.html", '<div class="row">\n  <div class="col-md-2"></div>\n  <div class="col-md-8">\n    <div class="jumbotron">\n      <h2>Thank You For Requesting Access</h2>\n      <hr />\n      <p>\n        We will be in touch when you are able start using Leco.\n      </p>\n    </div>\n  </div>\n</div>\n');
        } ]);
    }), n("templates-common", [ "angular" ], function(e) {
        e.module("templates-common", []);
    }), n("app/app.config", [], function() {
        var e = function(e, n, o) {
            e.otherwise("/access"), o.debugInfoEnabled(!0), n.html5Mode(!0);
        };
        return [ "$urlRouterProvider", "$locationProvider", "$compileProvider", e ];
    }), n("app/app.controller", [ "angular" ], function(e) {
        var n = function(n, o) {
            n.date = new Date(), n.$on("$stateChangeSuccess", function(o, t, a, l, u) {
                e.isDefined(t.data.pageTitle) && (n.pageTitle = t.data.pageTitle + " | Leco");
            });
        };
        return [ "$scope", "$location", n ];
    }), n("app/home/home.config", [], function() {
        var e = function(e) {
            e.state("home", {
                url: "/access",
                views: {
                    main: {
                        controller: "HomeCtrl",
                        templateUrl: "home/home.tpl.html"
                    }
                },
                data: {
                    pageTitle: "Access Request"
                }
            });
        };
        return [ "$stateProvider", e ];
    }), n("app/home/home.controller", [], function() {
        var e = function(e, n, o, t, a) {
            function l() {
                var e = new Date();
                analytics.identify(t.v4(), {
                    email: u.email,
                    requested_at: e
                }), o.go("thankyou", !0);
            }
            var u = n;
            u.email = "", u.submit = l, a.load("eezMpRsvTbXL99W97xmtHy4rglGKpIHB");
        };
        return [ "$log", "$scope", "$state", "rfc4122", "segmentio", e ];
    }), n("app/home/home.module", [ "require", "angular", "app/home/home.config", "app/home/home.controller" ], function(e, n) {
        return n.module("leco.home", [ "ui.router", "uuid" ]).config(e("app/home/home.config")).controller("HomeCtrl", e("app/home/home.controller"));
    }), n("app/thankyou/thankyou.config", [], function() {
        var e = function(e) {
            e.state("thankyou", {
                url: "/thankyou",
                views: {
                    main: {
                        templateUrl: "thankyou/thankyou.tpl.html"
                    }
                },
                data: {
                    pageTitle: "Thank You For Requesting Access"
                }
            });
        };
        return [ "$stateProvider", e ];
    }), n("app/thankyou/thankyou.module", [ "require", "angular", "app/thankyou/thankyou.config" ], function(e, n) {
        return n.module("leco.thankyou", [ "ui.router" ]).config(e("app/thankyou/thankyou.config"));
    }), n("app/app.module", [ "require", "angular", "angular-segmentio", "angular-ui-router", "angular-uuid-service", "templates-app", "templates-common", "app/app.config", "app/app.controller", "app/home/home.module", "app/thankyou/thankyou.module" ], function(e, n) {
        return n.module("leco", [ "segmentio", "ui.router", "templates-app", "templates-common", "leco.home", "leco.thankyou" ]).config(e("app/app.config")).controller("AppCtrl", e("app/app.controller"));
    }), n("app/app.main", [ "angular", "app/app.module" ], function(e, n) {
        "interactive" === document.readyState || "complete" === document.readyState ? e.bootstrap(document.documentElement, [ n.name ]) : document.onreadystatechange = function() {
            "interactive" === document.readyState && e.bootstrap(document.documentElement, [ n.name ]);
        };
    });
}(window, window.define);