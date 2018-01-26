/* 路由配置和controller和service都写在这个js文件中，如果文件比较大的话可以分别拆成hello-world-route.js, hello-world-controller.js, hello-world-service.js */
app.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state({
            name: 'about-me',
            url: '/about_me',
            templateUrl: './about-me-demo/about-me.html',
            controller: 'aboutMeCtrl'
        });
})
    .controller('aboutMeCtrl',function($scope,$state){
        $scope.goBack=function(){
            history.back(-1);
        }
    })

//filter service 都可以写在下面
