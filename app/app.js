(function(){
    "use strict";
    angular.module("app",[])
    .controller("Todo",Todo)
    .value("model",{
        user: "Andrii",
        userPhoto: "http://1.bp.blogspot.com/--chOubSsKcU/Vh51YsiEyDI/AAAAAAAAEL0/xXrFSNWNEYg/s1600/12068802_989769287753978_8267513858554579343_o.png",
        userPhoto1: "https://imgs-steps-dragoart-386112.c.cdn77.org/how-to-draw-the-protoss-logo-from-starcraft-2-step-5_1_000000164133_5.gif",
        userPhoto2: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAA3XAAAAJDhjY2ZkMGEyLTAxOTAtNDZhZS05NjVkLTVmNTlhMGUwY2U0Ng.jpg",
        items: [
            {"action":"Estimate ...","done":false},
            {"action":"Create ...","done":false},
            {"action":"Edit ... ","done":true},
            {"action":"Delete ... ","done":false}
        ]
    });

    function Todo($scope,model) {
        $scope.todo = model;
        console.log($scope.todo);
    }

})();
