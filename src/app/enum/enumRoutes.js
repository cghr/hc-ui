angular.module('enumRoutes', [])
    .constant('enumRoutes', {
        name: 'enum',
        url: '/enum',
        tpl: 'enum/enum.html',
        children: [
            {
                name: 'area',
                url: '/area',
                tpl: 'tpls/dataGrid.html',
                title: 'Areas',
                msg: 'Select an Area'

            },
            {
                name: 'areaDetail',
                url: '/area/:areaId',
                tpl: 'tpls/pageDetail.html',
                title: 'Houses',
                prevState: {name: 'enum.area', title: 'Areas'},
                children: [
                    {
                        name: 'house',
                        url: '/house',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Houses',
                        addNew: true,
                        msg: 'Add/Select a House'
                    }
                ]
            },
            {
                name: 'houseDetail',
                url: '/area/:areaId/house/:houseId',
                tpl: 'tpls/pageDetail.html',
                title: 'Households',
                prevState: {name: 'enum.areaDetail.house', title: 'Houses'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: 'Basic Inf'
                    },
                    {
                        name: 'household',
                        url: '/household',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Households',
                        addNew: true,
                        msg: 'Add/Select a Household'
                    }
                ]
            },
            {
                name: 'householdDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId',
                tpl: 'tpls/pageDetailNavDisabled.html',
                defaultState: 'member',
                title: 'Members',
                prevState: {name: 'enum.houseDetail.household', title: 'Households'},
                children: [
                    {
                        name: 'visit',
                        url: '/visit',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Visits',
                        addNew: true,
                        msg: 'Add a new visit'
                    },
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Basic Information'
                    },
                    {
                        name: 'member',
                        url: '/member',
                        tpl: 'enum/member/member.html',
                        title: 'Members',
                        addNew: true
                    },
                    {
                        name: 'commonQs',
                        url: '/commonQs',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: 'Common Qs'
                    },
                    {
                        name: 'foodItems',
                        url: '/foodItems',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: 'Food Items'
                    },
                    {
                        name: 'hospInf',
                        url: '/hospInf',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Hospitalization Inf'
                    },
                    {
                        name: 'hosp',
                        url: '/hosp',
                        tpl: 'enum/hosp/hosp.html',
                        title: 'Hospitalization',
                        addNew: true
                    },
                    {
                        name: 'deathInf',
                        url: '/deathInf',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Death Inf'
                    },
                    {
                        name: 'death',
                        url: '/death',
                        tpl: 'enum/death/death.html',
                        title: 'Deaths',
                        addNew: true
                    },
                    {
                        name: 'contact',
                        url: '/contact',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: 'Contact Inf',
                        stateChangeStartMsg: 'Enumeration of the Household Completed'
                    }
                ]
            },
            {
                name: 'visitDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/visit/',
                tpl: 'tpls/pageDetail.html',
                title: '',
                prevState: {name: 'enum.householdDetail.visit', title: 'Visits'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyFormCustomNav.html',
                        title: 'Basic Inf'
                    }
                ]

            },
            {
                name: 'memberDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/member/:memberId',
                tpl: 'tpls/pageDetail.html',
                title: '',
                prevState: {name: 'enum.householdDetail.member', title: 'Members'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: 'Basic Inf'
                    }
                ]

            },
            {
                name: 'hospDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/hosp/:memberId',
                tpl: 'tpls/pageDetail.html',
                title: '',
                prevState: {name: 'enum.householdDetail.hosp', title: 'Hospitalization'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: 'Basic Inf'
                    }
                ]

            },
            {
                name: 'deathDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/death/:memberId',
                tpl: 'tpls/pageDetail.html',
                title: '',
                prevState: {name: 'enum.householdDetail.death', title: 'Deaths'},
                children: [
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: 'Basic Inf'
                    }
                ]

            }

        ]


    });