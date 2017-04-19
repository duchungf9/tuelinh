/**
 * Created by Admin on 10/28/2016.
 */
var app = angular.module('myApp', []);
app.controller('CaythuocController',function ($scope) {
    $scope.caythuoc = [
        'Chọn cây thuốc...',
        'Sữa ong chúa 1',
        'Sữa ong chúa 2',
        'Sữa ong chúa 3',
        'Sữa ong chúa 4',
        'Sữa ong chúa 5',
        'Sữa ong chúa 6'
    ];
});
app.controller('BenhController',function ($scope) {
    $scope.list_benh = [
        'Chọn loại bệnh...',
        'Xương khớp',
        'Gan',
        'Sỏi mật',
        'Sữa ong chúa 4',
        'Sữa ong chúa 5',
        'Sữa ong chúa 6'
    ];
});