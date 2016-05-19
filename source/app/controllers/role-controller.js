app.controller('roleCtrl',['$scope','Restangular','roleServices', 'userServices', 'helper', 'toastr', 'cookie', 'localStorageService','APP_CONSTANT', 'ngDialog', '$compile', function ($scope, Restangular, roleServices, userServices, helper, toastr, cookie, localStorageService, APP_CONSTANT, ngDialog, $compile){
    $scope.isDisabled = false;
    $scope.isUserExist = false;

    $scope.init = function () {
        roleServices.get_all_role(Restangular).get().then(function (response) {
            $scope.isDisabled = true;
            helper.startSpin();
            if(response.status == 0){
                $scope.roles = response.data;
                helper.stopSpin();
            }
            if(response.status == -1){
                helper.stopSpin();
                toastr.error(response.error.message);
                $scope.isDisabled = false;
            }
        });

        roleServices.get_all_privilege(Restangular).get().then(function (response) {
            $scope.isDisabled = true;
            helper.startSpin();
            if(response.status == 0){
                $scope.privileges = response.data;
                helper.stopSpin();
            }
            if(response.status == -1){
                helper.stopSpin();
                toastr.error(response.error.message);
                $scope.isDisabled = false;
            }
        });

        userServices.get_all_user(Restangular).get().then(function (response) {
            $scope.isDisabled = true;
            helper.startSpin();
            if(response.status == 0){
                $scope.users = response.data;
                helper.stopSpin();
            }
            if(response.status == -1){
                helper.stopSpin();
                toastr.error(response.error.message);
                $scope.isDisabled = false;
            }
        });
    }

    $scope.addRole = function() {
        $scope.isRole = true;
        $scope.isPrivilege = false;
        $scope.add = { role: '' };
        ngDialog.openConfirm({
            template: 'addPopUp',
            scope: $scope
        }).then(
            function(value) {
                //You need to implement the saveForm() method which should return a promise object
                var data = {
                    name: $scope.add.role
                };
                roleServices.create_role(Restangular).post(data).then(function (response) {
                    if (response.status == 0) {
                        $scope.roles.push(response.data.role);
                        toastr.success(response.data.message);
                    } else {
                        toastr.error(response.error.message);
                    }
                });
            },
            function(value) {
                //Cancel or do nothing
            }
        );
    }

    $scope.addPrivilege = function() {
        $scope.isRole = false;
        $scope.isPrivilege = true;
        $scope.add = { privilege: '' };
        ngDialog.openConfirm({
            template: 'addPopUp',
            scope: $scope
        }).then(
            function(value) {
                //You need to implement the saveForm() method which should return a promise object
                var data = {
                    name: $scope.add.privilege
                };
                roleServices.create_privilege(Restangular).post(data).then(function (response) {
                    if (response.status == 0) {
                        $scope.privileges.push(response.data.privilege);
                        toastr.success(response.data.message);
                    } else {
                        toastr.error(response.error.message);
                    }
                });
            },
            function(value) {
                //Cancel or do nothing
            }
        );
    }

    $scope.deleteRole = function(role_id) {
        ngDialog.openConfirm({
            template: 'confirmationPopUp'
        }).then(
            function(value) {
                //You need to implement the saveForm() method which should return a promise object
                var data = {
                    id: role_id
                };
                roleServices.delete_role(Restangular).post(data).then(function (response) {
                    if (response.status == 0) {
                        var role_details = [];
                        $scope.roles.forEach(function(role, index) {
                            if (role.id != role_id) {
                                role_details.push(role);
                            }
                        });
                        toastr.success(response.data.message);
                        $scope.roles = role_details;
                    } else {
                        toastr.error(response.error.message);
                    }
                });
            },
            function(value) {
                //Cancel or do nothing
            }
        );
    }

    $scope.deletePrivilege = function(privilege_id) {
        ngDialog.openConfirm({
            template: 'confirmationPopUp'
        }).then(
            function(value) {
                //You need to implement the saveForm() method which should return a promise object
                var data = {
                    id: privilege_id
                };
                roleServices.delete_privilege(Restangular).post(data).then(function (response) {
                    if (response.status == 0) {
                        var privilege_details = [];
                        $scope.privileges.forEach(function(privilege, index) {
                            if (privilege.id != privilege_id) {
                                privilege_details.push(privilege);
                            }
                        });
                        toastr.success(response.data.message);
                        $scope.privileges = privilege_details;
                    } else {
                        toastr.error(response.error.message);
                    }
                });
            },
            function(value) {
                //Cancel or do nothing
            }
        );
    }

    $scope.editRole = function(role_id) {
        $scope.isRole = true;
        $scope.isPrivilege = false;
        for (i = 0; i < $scope.roles.length; i++) {
            if ($scope.roles[i].id == role_id) {
                $scope.role = $scope.roles[i];
                break;
            }
        }
        var role_before_edit = angular.copy($scope.roles);
        ngDialog.openConfirm({
            template: 'editPopUp',
            scope: $scope
        }).then(
            function(value) {
                //You need to implement the saveForm() method which should return a promise object
                var data = {
                    id: role_id,
                    name: $scope.role.name
                };
                roleServices.edit_role(Restangular).post(data).then(function (response) {
                    if (response.status == 0) {
                        for (i = 0; i < $scope.roles.length; i++) {
                            if ($scope.roles[i].id == role_id) {
                                $scope.roles[i] = $scope.role;
                                break;
                            }
                        }
                        toastr.success(response.data.message);
                    } else {
                        toastr.error(response.error.message);
                    }
                });
            },
            function(value) {
                //Cancel or do nothing
                $scope.roles = role_before_edit;
            }
        );
    }

    $scope.editPrivilege = function(privilege_id) {
        $scope.isRole = false;
        $scope.isPrivilege = true;
        for (i = 0; i < $scope.privileges.length; i++) {
            if ($scope.privileges[i].id == privilege_id) {
                $scope.privilege = $scope.privileges[i];
                break;
            }
        }
        var privilege_before_edit = angular.copy($scope.privileges);
        ngDialog.openConfirm({
            template: 'editPopUp',
            scope: $scope
        }).then(
            function(value) {
                //You need to implement the saveForm() method which should return a promise object
                var data = {
                    id: privilege_id,
                    name: $scope.privilege.name
                };
                roleServices.edit_privilege(Restangular).post(data).then(function (response) {
                    if (response.status == 0) {
                        for (i = 0; i < $scope.privileges.length; i++) {
                            if ($scope.privileges[i].id == privilege_id) {
                                $scope.privileges[i] = $scope.privilege;
                                break;
                            }
                        }
                        toastr.success(response.data.message);
                    } else {
                        toastr.error(response.error.message);
                    }
                });
            },
            function(value) {
                //Cancel or do nothing
                $scope.privileges = privilege_before_edit;
            }
        );
    }

    $scope.selectUser = function () {
        $scope.isUserExist = false;
        if($scope.user.id != '') {
            $scope.isUserExist = true;
            var data = {
                id: $scope.user.id
            };
            roleServices.get_user_role(Restangular).post(data).then(function (response) {
                if (response.status == 0) {
                    document.getElementById("user-role").value = response.data[0].role_id;
                } else {
                    toastr.error(response.error.message);
                }
            });
        } else {
            document.getElementById("user-role").value = '';
        }
    }

    $scope.changeRole = function () {
        var data = {
            user_id: $scope.user.id,
            role_id: document.getElementById("user-role").value
        };
        roleServices.change_user_role(Restangular).post(data).then(function (response) {
            if (response.status == 0) {
                $scope.user.id = '';
                $scope.user.role = '';
                $scope.isUserExist = false;
                toastr.success(response.data.message);
            } else {
                toastr.error(response.error.message);
            }
        });
    }

    $scope.selectRole = function () {
        if($scope.role.id != '') {
            var data = {
                id: $scope.role.id
            };
            roleServices.get_privilege_by_role(Restangular).post(data).then(function (response) {
                if (response.status == 0) {
                    $scope.rolePrivileges = $scope.privileges;
                    $scope.rolePrivileges.forEach(function(privilege, index) {
                        $scope.rolePrivileges[index]["value"] = false;
                    });
                    response.data.forEach(function(privilege, index) {
                        $scope.rolePrivileges.forEach(function(privilege_temp, index_temp) {
                            if (privilege.privilege_id == privilege_temp.id) {
                                $scope.rolePrivileges[index_temp]["value"] = true;
                            }
                        });
                    });
                    angular.element(document.getElementById('user-role-privileges-inside')).remove();
                    var html = '<div id="user-role-privileges-inside"><label>';
                    $scope.rolePrivileges.forEach(function(privilege, index) {
                        if (privilege.value) {
                            html += '<div class="col-sm-6 role-privileges"><input type="checkbox" id="'+ privilege.id+'" name="'+ privilege.id+'" value="Car"  checked>' + privilege.name + '</div>';
                        } else {
                            html += '<div class="col-sm-6 role-privileges"><input type="checkbox" id="'+ privilege.id+'" name="'+ privilege.id+'" value="Car">' + privilege.name + '</div>';
                        }
                    });
                    html += '</label>';
                    html += '<div class="login-button-details"><button type="submit" ng-click="updatePrivilege()" class="role-privilege-button">Submit</button></div></div>';
                    angular.element(document.getElementById('user-role-privileges')).append($compile(html)($scope));
                } else {
                    toastr.error(response.error.message);
                }
            });
        } else {
            angular.element(document.getElementById('user-role-privileges-inside')).remove();
        }
    }

    $scope.updatePrivilege = function () {
        var new_privileges = [];
        $scope.privileges.forEach(function(privilege, index) {
            if (document.getElementById((privilege.id).toString()).checked) {
                new_privileges.push(privilege)
            }
        });
        var data = {
            role_id: $scope.role.id,
            privileges: new_privileges
        }
        roleServices.change_role_privileges(Restangular).post(data).then(function (response) {
            if (response.status == 0) {
                $scope.role.id = '';
                angular.element(document.getElementById('user-role-privileges-inside')).remove();
                toastr.success(response.data.message);
            } else {
                toastr.error(response.error.message);
            }
        });
    }
}]);
