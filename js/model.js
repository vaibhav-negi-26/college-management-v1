var app = angular.module('App', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "template/notice.html",
        controller: "homeCtrl"
    })
    .when("/attendence", {
        templateUrl: "template/attendence.html",
        controller: "attendenceCtrl"
    })
    .when("/timetable", {
        templateUrl: "template/timetable.html",
        controller: "timetableCtrl"
    })
    .when("/subjects", {
        templateUrl: "template/subjects.html",
        controller: "subjectCtrl"
    })
    .when("/studentinfo", {
        templateUrl: "template/studentinfo.html",
        controller: "studentCtrl"
    })
    .when("/feepayment", {
        templateUrl: "template/feepayment.html"
    })
    .when("/feedbackform", {
        templateUrl: "template/feedback.html"
    })
    .otherwise({
        redirectTo: "/home"
    })
})
