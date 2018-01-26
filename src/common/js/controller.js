app.controller('noticeManageCtrl', function ($scope,$stateParams,$state,$timeout) {
    $scope.goNoticeContent = function(){
        $state.go("noticeDetails");
    };

    $scope.goCreateAnnouncement = function() {
        $state.go("createAnnouncement");
    };

})
    .controller('noticeDetailsCtrl', function ($scope,$stateParams,$state) {

    $scope.goBack = function(){
        history.back(-1);
    };

})

.controller('conferenceNoticeManageCtrl', function ($scope,$stateParams,$state,$timeout) {
    console.log("hello world");
    $scope.goNoticeContent = function(){
        $state.go("noticeDetails");
    };

    $scope.goCreateAnnouncement = function() {
        $state.go("createAnnouncement");
    };

    $scope.goBack = function(){
        history.back(-1);
    };

})

    .controller('peopleManageCtrl', function ($scope,$stateParams,$state,$timeout) {
        console.log("hello world");
        $scope.goNoticeContent = function(){
            $state.go("noticeDetails");
        };

        $scope.goCreateAnnouncement = function() {
            $state.go("createAnnouncement");
        };

        $scope.goBack = function(){
            history.back(-1);
        };

    })

    .controller('peopleInfoCtrl', function ($scope,$stateParams,$state,$timeout) {
        console.log("hello world");
        $scope.goNoticeContent = function(){
            $state.go("noticeDetails");
        };

        $scope.goCreateAnnouncement = function() {
            $state.go("createAnnouncement");
        };

        $scope.goBack = function(){
            history.back(-1);
        };

    })

    .controller('signManageCtrl', function ($scope,$stateParams,$state,$timeout) {
        console.log("hello world");
        $scope.goNoticeContent = function(){
            $state.go("noticeDetails");
        };

        $scope.goCreateAnnouncement = function() {
            $state.go("createAnnouncement");
        };

        $scope.goBack = function(){
            history.back(-1);
        };

    })

    .controller('createAnnouncementCtrl', function ($scope,$stateParams,$state,$timeout) {
        console.log("hello world");
        $scope.goNoticeContent = function(){
            $state.go("noticeDetails");
        };

        $scope.goCreateAnnouncement = function() {
            $state.go("createAnnouncement");
        };

        $scope.goBack = function(){
            history.back(-1);
        };

    })

    .controller('createMeetingNoticeCtrl', function ($scope,$stateParams,$state,$timeout) {
        console.log("hello world");
        $scope.goNoticeContent = function(){
            $state.go("noticeDetails");
        };

        $scope.goCreateAnnouncement = function() {
            $state.go("createAnnouncement");
        };

        $scope.goBack = function(){
            history.back(-1);
        };

    })
;