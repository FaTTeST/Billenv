/*  ANGULARJS  */
var BillEnv = angular.module('BillEnv',['ui.router']);

BillEnv.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
    $urlRouterProvider.when('/',"/dashboard");
    $stateProvider
        .state('index', {
            url: '',
            abstract:true,
            views: {
                'top-navbar': {
                    templateUrl: 'views/workspace/top-navbar.html'
                },
                'sidebar': {
                    templateUrl: 'views/workspace/sidebar.html'
                },
                'container': {
                    templateUrl: 'views/workspace/container.html',

                },
                'footer': {
                    templateUrl: 'views/workspace/footer.html'
                }
            }
        })
        .state('index.dashboard', {
            url: "/dashboard",
            views: {
                'workspace': {
                    templateUrl: "views/dashboard/dashboard.html"
                }
            }

        })
        .state('index.subscribes', {
            url: "/subscribes",
            views: {
                'workspace': {
                    templateUrl: "views/subscribes/subscribes.html",
                    controller: "SubscribersCtrl"

                }
            }

        });
});
/* ANGULAR CONTROLLERS*/
BillEnv.controller("SubscribersCtrl", function ($scope) {

    (function($){

        $(document).ready(function() {
            var editor = new $.fn.dataTable.Editor( {
                ajax: 'sside/subscribers.php',
                table: '#subscribers',
                fields: [
                    {
                        "label": "Тип организации",
                        "name": "org_type",
                        "type": "radio",
                        "def": "1",
                        "options": [
                            { label: "Юр. лицо", value: 1 },
                            { label: "ИП", value: 2 },
                            { label: "Физ. лицо", value: 51 }

                        ]
                    },
                    {
                        "label": "\u0424\u0430\u043c\u0438\u043b\u0438\u044f",
                        "name": "surname"
                    },
                    {
                        "label": "\u0418\u043c\u044f",
                        "name": "name"
                    },
                    {
                        "label": "\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",
                        "name": "patronymic"
                    },
                    {
                        "label": "\u041f\u043e\u043b\u043d\u043e\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",
                        "name": "org_name"
                    },
                    {
                        "label": "Наименование",
                        "name": "short_name"
                    },
                    {
                        "label": "\u0418\u041d\u041d",
                        "name": "inn"
                    },
                    {
                        "label": "\u041a\u041f\u041f",
                        "name": "kpp"
                    },
                    {
                        "label": "\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441",
                        "name": "business_address"
                    },
                    {
                        "label": "\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0430\u0434\u0440\u0435\u0441",
                        "name": "post_address"
                    },
                    {
                        "label": "\u0420\u0430\u0441\u0447\u0435\u0442\u043d\u044b\u0439 \u0441\u0447\u0435\u0442",
                        "name": "bank_account"
                    },
                    {
                        "label": "\u0411\u0418\u041a",
                        "name": "bik_bank"
                    },
                    {
                        "label": "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
                        "name": "phone"
                    },
                    {
                        "label": "E-mail",
                        "name": "email"
                    }
                ]
            } );

            var table = $('#subscribers').DataTable( {
                ajax: 'sside/subscribers.php',
                columns: [
                    { "data" : "id"},
                    {
                        "data": "short_name"
                    },
                    {
                        "data": "phone"
                    },
                    {
                        "data": "email"
                    },
                    {
                        "data": "post_address"
                    },

                    {
                        "data": "inn"
                    }
                ],
                select: true,
                lengthChange: false
            } );

            new $.fn.dataTable.Buttons( table, [
                { extend: "create", editor: editor },
                { extend: "edit",   editor: editor },
                { extend: "remove", editor: editor }
            ] );

            table.buttons().container()
                .appendTo( $('.col-sm-6:eq(0)', table.table().container() ) );
        } );

    }(jQuery));


});
/*------------------------------------------*/

/*  DATATABLES  */
