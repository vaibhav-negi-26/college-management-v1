// 1st main

app.controller('Ctrl', function ($scope, $interval, $location,$window) {
    console.log("This is developers panel not for noraml users.");
    
    myUrl = $location.absUrl();
    parts = myUrl.split('=');  //number is id
    part2 = parts[1]-1;
    localStorage.setItem('id',part2);
    $scope.mainid = localStorage.getItem('id');
    // console.log($scope.mainid);    
    $scope.info = [{
        id: 1,
        name : "Vaibhav",
        emailId: '10vaibhavsinghnegi@gmail.com',
        password: 'vaibhav@26'
    },
    {
        id: 2,
        name : "Keshav",
        emailId: 'keshavy178@gmail.com',
        password: 'keshav@18'
    },
    {
        id: 3,
        name : "Ayush",
        emailId: 'ayushparmar684@gmail.com',
        password: 'ayush@13'
    },
    {
        id: 4,
        name : "Vidushi",
        emailId: 'vidushi516@gmail.com',
        password: 'vidushi@09'
    },
    {
        id: 5,
        name : "Ashmeet",
        emailId: 'abc@gmail.com',
        password: '123456'
    },
    {
        id: 6,
        name : "Vaibhav",
        emailId: 'test@gmail.com',
        password: 'test'
    }];

    $scope.navelement = 'Home > Notice Board & Live Feeds';
    $scope.navBar = function (x) {
        if (x == 1) {
            $scope.navelement = 'Home > Notice Board & Live Feeds';
        } else if (x == 2) {
            $scope.navelement = 'My Services';
        } else if (x == 3) {
            $scope.navelement = 'Student Info Center';
        } else if (x == 4) {
            $scope.navelement = 'Fee Payment';
        } else if (x == 5) {
            $scope.navelement = 'Feed Back Application';
        }
    }
    var tick = function () {
        $scope.clock = Date.now();
    }
    tick();
    $interval(tick, 1000);

    $scope.logout = function () {
        localStorage.clear();
        $window.location.href = '/index.html';
    }
});

// 2nd notice

app.controller('homeCtrl', function ($scope) {
    $scope.notice = ['Welcome to Portal', 'University is on this System from  4, 2019', 'Self-Services are available on the Student portal', 'Give your Feedback'];
    $scope.updates = [{
        title: 'Google',
        link: 'https://www.google.com/'
    }, {
        title: 'Linkedin',
        link: 'https://www.linkedin.com/'
    }, {
        title: 'Facebook',
        link: 'https://www.facebook.com/'
    }, {
        title: 'Dit University',
        link: 'https://www.dituniversity.edu.in/'
    }];
})

// 3rd studentinfo

app.controller('studentCtrl', function ($scope,$location) {
    $scope.show = localStorage.getItem('id');
    // console.log($scope.show);
    $scope.studentinfo = [{
            id: 1,
            studentno: 1000009482,
            firstname: "Vaibhav ",
            middlename: "Singh ",
            lastname: "Negi",
            dept: "Computer Science & Engineering",
            status: "Attending",
            dob: "26-05-1999",
            grade :[{
                title: 'SCGPA 1',
                marks: 7.5
            },
            {
                title: 'SCGPA 2',
                marks: 8.25
            },
            {
                title: 'SCGPA 3',
                marks: 7.25
            },
            {
                title: 'SCGPA 4',
                marks: 8.1
            },
            {
                title: 'CGPA',
                marks: 0
            }],
            add: "Voluptatibus deserunt natus quasi ad inventore incidunt corrupti necessitatibus accusamus praesentium autem?",
            phone: 8789920424,
            email: "10vaibhavsinghnegi@gmail.com",
            bloodGroup: "B+",
            Year : "2019-2020",
            pic:"../image/profile/1.jpg",
            father: "Vikram Singh Negi"
        },
        {
            id: 2,
            studentno: 160110042,
            firstname: "Keshav ",
            middlename: "Singh ",
            lastname: "Yadav",
            dept: "Computer Science & Engineering",
            status: "Attending",
            dob: "18-12-1997",
            grade :[{
                title: 'SCGPA 1',
                marks: 9.5
            },
            {
                title: 'SCGPA 2',
                marks: 9.0
            },
            {
                title: 'SCGPA 3',
                marks: 7.5
            },
            {
                title: 'SCGPA 4',
                marks: 8.5
            },
            {
                title: 'CGPA',
                marks: 0
            }],
            add: "Voluptatibus deserunt natus quasi ad inventore incidunt corrupti necessitatibus accusamus praesentium autem?",
            phone: 9889563044,
            email: "keshavy178@gmail.com",
            bloodGroup: "B+",
            Year : "2019-2020",
            pic:"../image/profile/2.jpg",
            father: "Mr. Yadav"
        },
        {
            id: 3,
            studentno: 1000009437,
            firstname: "Ayush ",
            middlename: "Singh ",
            lastname: "Parmar",
            dept: "Computer Science & Engineering",
            status: "Attending",
            dob: "13-10-1997",
            grade :[{
                title: 'SCGPA 1',
                marks: 6.4
            },
            {
                title: 'SCGPA 2',
                marks: 6.4
            },
            {
                title: 'SCGPA 3',
                marks: 6.4
            },
            {
                title: 'SCGPA 4',
                marks: 6.9
            },
            {
                title: 'CGPA',
                marks: 0
            }],
            add: "Voluptatibus deserunt natus quasi ad inventore incidunt corrupti necessitatibus accusamus praesentium autem?",
            phone: 8126644320,
            email: "ayushparmar684@gmail.com",
            bloodGroup: "A+",
            Year : "2019-2020",
            pic:"../image/profile/3.jpg",
            father: "Mr.Parmar"
        },
        {
            id: 4,
            studentno: 1000008877,
            firstname: "Vidushi ",
            middlename: "",
            lastname: "Sharma",
            dept: "Computer Science & Engineering",
            status: "Attending",
            dob: "09-04-2000",
            grade :[{
                title: 'SCGPA 1',
                marks: 6.6
            },
            {
                title: 'SCGPA 2',
                marks: 6.4
            },
            {
                title: 'SCGPA 3',
                marks: 6.8
            },
            {
                title: 'SCGPA 4',
                marks: 6.5
            },
            {
                title: 'CGPA',
                marks: 0
            }],
            add: "Voluptatibus deserunt natus quasi ad inventore incidunt corrupti necessitatibus accusamus praesentium autem?",
            phone: 8938939928,
            email: "vidushi516@gmail.com",
            bloodGroup: "O+",
            Year : "2019-2020",
            pic:"../image/profile/4.jpg",
            father: "Mr. Sharma"
        },
        {
            id: 5,
            studentno: 1000009494,
            firstname: "Ashmeet ",
            middlename: "",
            lastname: "Kaur",
            dept: "Computer Science & Engineering",
            status: "Attending",
            dob: "13-05-1999",
            grade :[{
                title: 'SCGPA 1',
                marks: 8.6
            },
            {
                title: 'SCGPA 2',
                marks: 8.2
            },
            {
                title: 'SCGPA 3',
                marks: 7.25
            },
            {
                title: 'SCGPA 4',
                marks: 8.1
            },
            {
                title: 'CGPA',
                marks: 0
            }],
            add: "Voluptatibus deserunt natus quasi ad inventore incidunt corrupti necessitatibus accusamus praesentium autem?",
            phone: 8299658680,
            email: "abc@gmail.com",
            bloodGroup: "O+",
            Year : "2019-2020",
            pic:"../image/profile/5.jpg",
            father: "Mr. Kapoor"
        },
        {
            id: 6,
            studentno: 1000001234,
            firstname: "Vaibhav ",
            middlename: "Singh ",
            lastname: "Negi",
            dept: "Computer Science & Engineering",
            status: "Attending",
            dob: "15-09-1999",
            grade :[{
                title: 'SCGPA 1',
                marks: 7.8
            },
            {
                title: 'SCGPA 2',
                marks: 8.2
            },
            {
                title: 'SCGPA 3',
                marks: 7.2
            },
            {
                title: 'SCGPA 4',
                marks: 8.1
            },
            {
                title: 'CGPA',
                marks: 0
            }],
            add: "Voluptatibus deserunt natus quasi ad inventore incidunt corrupti necessitatibus accusamus praesentium autem?",
            phone: 8789920424,
            email: "xyz@gmail.com",
            bloodGroup: "B+",
            Year : "2019-2020",
            pic:"../image/profile/1.jpg",
            father: "Mr. Negi"
        }];

    // object end

    // CGPA calculation

    length = Object.keys($scope.studentinfo[$scope.show].grade).length;
    // console.log(length);
    cgpa = 0;
    var index;
    for (index = 0; index < length; index++) {
        cgpa =  cgpa + $scope.studentinfo[$scope.show].grade[index].marks;
    }
    index = index - 1;
    // console.log(index);
    cgpa = (cgpa / index).toFixed(2);
    // console.log(cgpa);
    $scope.studentinfo[$scope.show].grade[index].marks = cgpa;
    // console.log($scope.studentinfo[0].grade[index].marks);
})

// 4th myservices>subject

app.controller('subjectCtrl',function ($scope) {
    $scope.sub = [{
        pic: "../image/sub/1.png",
        title: "C++",
        point: 4,
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum a sint quis, vitae voluptates?"
    },
    {
        pic: "../image/sub/2.png",
        title: "Java",
        point: 4,
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum a sint quis, vitae voluptates?"
    },
    {
        pic: "../image/sub/3.png",
        title: "Python",
        point: 3,
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum a sint quis, vitae voluptates?"
    },

    {
        pic: "../image/sub/4.png",
        title: "PHP",
        point: 3,
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum a sint quis, vitae voluptates?"
    },

    {
        pic: "../image/sub/5.png",
        title: "AngularJS",
        point: 4,
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum a sint quis, vitae voluptates?"
    },

    {
        pic: "../image/sub/6.png",
        title: "Mongo DB",
        point: 3,
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum a sint quis, vitae voluptates?"
    }];
});

// 5th myservices>subject

app.controller('timetableCtrl',function ($scope) {
    $scope.timetable = [{
        title: "Monday",
        first: "C++",
        second: "Java",
        third: "Python"
    },{
        title: "Tuesday",
        first: "Php",
        second: "AngularJS",
        third: "MongoDB"
    },{
        title: "wednesday",
        first: "C++",
        second: "Java",
        third: "Python"
    },{
        title: "Thursay",
        first: "Php",
        second: "AngularJS",
        third: "MongoDB"
    },{
        title: "Friday",
        first: "C++",
        second: "AngularJS",
        third: "Php"
    },{
        title: "Satuarday",
        first: "Java",
        second: "MongoDB",
        third: "Python"
    }]
});

// 6th myservices>attendence

app.controller('attendenceCtrl',function ($scope) {
    $scope.attendence = [{
        title: "C++",
        total:11,
        preset: 9,
        absent: 0,
        percent:0
    },{
        title: "Java",
        total:10,
        preset: 7,
        absent:0,
        percent:0
    },{
        title: "Python",
        total:11,
        preset: 4,
        absent:0,
        percent:0
    },{
        title: "Php",
        total:11,
        preset: 6,
        absent:0,
        percent:0
    },{
        title: "AngularJS",
        total:11,
        preset: 11,
        absent:0,
        percent:0
    },{
        title: "Mongo DB",
        total:11,
        preset: 10,
        absent:0,
        percent:0
    }];
    // for (let j = 0; j < 3; j++) 
    length = Object.keys($scope.attendence).length;
    console.log(length);
    var per, ab;
    var i;
    for (i = 0; i < length; i++) {
        $scope.attendence[i].absent = $scope.attendence[i].total - $scope.attendence[i].preset;
        $scope.attendence[i].percent = Math.floor((($scope.attendence[i].preset / $scope.attendence[i].total ) * 100));
    }
});