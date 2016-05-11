//app.config(function($routeProvider){
//    $routeProvider.when('/',{
//        crossDomain:true,
//        resolve : {
//            check : function  ($location,cookie) {
//                if (!cookie.exist()) {
//                    $location.path('/workplace');
//                    return true;
//                }else{
//                    $location.path('/signin');
//                    return false;
//                }
//            }
//        }
//    }).when('/signin',{
//       controller:"signinCtrl",
//       templateUrl:"source/views/signin.html",
//       resolve : {
//           signinCheck : function  ($location,cookie) {
//                if (cookie.exist()) {
//                    return true;
//                }else{
//                   $location.path('/workplace');
//                   return false;
//                }
//           }
//       }
//    }).when('/workplace',{
//        controller:"workplaceCtrl",
//        templateUrl:"source/views/workplace.html",
////        resolve : {
////            profileCheck : function  ($location,cookie) {
////                if (!cookie.exist()) {
////                    return true;
////                }else{
////                    $location.path('/signin');
////                    return false;
////                }
////            }
////        }
//    })
//    .otherwise({redirectTo:'/'});
//
//});