/* 路由配置和controller和service都写在这个js文件中，如果文件比较大的话可以分别拆成hello-world-route.js, hello-world-controller.js, hello-world-service.js */
app.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state({
            name: 'add-volunteer',
            url: '/add-volunteer',
            templateUrl: './addVolunteer/addVolunteer.html',
            controller: 'addVolunteerCtrl'
        });
        // .state({
        //     name: 'about-me',
        //     url: '/about_me',
        //     template: '<h3>Its the UI-Router hello world app!</h3>'
        // })

    $urlRouterProvider.when('','/add-volunteer');  // 默认跳转

})
    .controller('addVolunteerCtrl',function($scope,$state){
        $scope.aboutMe = function () {
            $state.go('about-me');
        }

    })

//filter service 都可以写在下面
