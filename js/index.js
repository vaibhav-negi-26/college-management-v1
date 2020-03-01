var app = angular.module('App', []);
app.controller('Ctrl', function ($scope, $location, $window) {
    data = [{
            id: 1,
            name: "Vaibhav",
            emailId: '10vaibhavsinghnegi@gmail.com',
            password: 'vaibhav@26'
        },
        {
            id: 2,
            name: "Keshav",
            emailId: 'keshavy178@gmail.com',
            password: 'keshav@18'
        },
        {
            id: 3,
            name: "ayush",
            emailId: 'ayushparmar684@gmail.com',
            password: 'ayush@13'
        },
        {
            id: 4,
            name: "vidushi",
            emailId: 'vidushi516@gmail.com',
            password: 'vidushi@09'
        },
        {
            id: 5,
            name: "abc",
            emailId: 'abc@gmail.com',
            password: '123456'
        },
        {
            id: 6,
            name: "Vaibhav",
            emailId: 'test@gmail.com',
            password: 'test'
        }
    ];
    length = Object.keys(data).length;
    console.log(length);
    
    check = 0;
    var index;
    $scope.check = function (Id, pass) {
        for (index = 0; index < length; index++) {
            if (Id == data[index].emailId && pass == data[index].password) {
                check = check + 1;
                break
            }
        }
        // console.log(check); 
        if (check == 1) {
            check = 0;
            // window.alert("Hi "+ data[index].name +" your Id is : "+data[index].id);
            console.log(data[index].id);
            abc = 'portal.html#!/home?&id=' + data[index].id;
            $window.location.href = abc;
        } else {
            document.location.reload();
        }
    }
})