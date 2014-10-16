angular.module('hcRoutes', [])
    .constant('hcRoutes', {
        name: 'hc',
        url: '/hc',
        tpl: 'hc/hc.html',
        children: [
            {
                name: 'area',
                url: '/area',
                tpl: 'tpls/dataGrid.html',
                title: 'Areas',
                msg: 'Select an Area',
                children:[]

            },
            {
                name: 'areaDetail',
                url: '/area/:areaId',
                tpl: 'tpls/pageDetail.html',
                title: 'Area Detail',
                prevState: {name: 'hc.area', title: 'Areas'},
                children: [
                    {
                        name: 'house',
                        url: '/house',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Houses',
                        msg: 'Select a House'
                    }
                ]
            },
            {
                name: 'houseDetail',
                url: '/area/:areaId/house/:houseId',
                tpl: 'tpls/pageDetail.html',
                title: 'House Detail',
                prevState: {name: 'hc.areaDetail.house', title: 'Houses'},
                children: [
                    {
                        name: 'household',
                        url: '/household',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Households',
                        msg: 'Select a Household'
                    }
                ]
            },
            {
                name: 'householdDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId',
                tpl: 'tpls/pageDetail.html',
                title: 'Household Detail',
                prevState: {name: 'hc.houseDetail.household', title: 'Households'},
                children: [
                    {
                        name: 'visit',
                        url: '/visit',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Visits',
                        addNew: true,
                        msg: 'Add a new Visit'

                    },
                    {
                        name: 'member',
                        url: '/member',
                        tpl: 'tpls/dataGrid.html',
                        title: 'Members',
                        msg: 'Select a Member'
                    },
                    {
                        name: 'ffq',
                        url: '/ffq',
                        tpl: 'tpls/dataGrid.html',
                        title: 'FFQ'
                    }

                ]
            },
            {
                name: 'visitDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/visit',
                tpl: 'tpls/pageDetail.html',
                title: '',
                prevState: {name: 'hc.householdDetail.visit', title: 'Visits'},
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
                name: 'memberDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/member/:memberId',
                tpl: 'tpls/pageDetailNavDisabled.html',
                title: 'Member Detail',
                prevState: {name: 'hc.householdDetail.member', title: 'Members'},
                children: [
                    {
                        name: 'bp1',
                        url: '/bp1',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: '1.BP1-General Information'
                    },
                    {
                        name: 'basicInf',
                        url: '/basicInf',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: '2.Basic Inf'
                    },
                    {
                        name: 'cam',
                        url: '/cam',
                        tpl: 'photoConsent/photoConsent.html',
                        title: '3.Photo Capture'
                    },

                    {
                        name: 'photo',
                        url: '/photo',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: '4.Photo Capture Details'
                    },

                    {
                        name: 'ta',
                        url: '/ta',
                        tpl: 'tpls/surveyFormDirective.html',


                        title: '5.Tobacco & Alcohol'
                    },
                    {
                        name: 'alcoholFreq',
                        url: '/alcoholFreq',
                        tpl: 'tpls/alcoholFormDirective.html',
                        title: '6.Alcohol Freq'
                    },
                    {
                        name: 'alcohol2',
                        url: '/alcohol2',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: '7.Alcohol 2'
                    },
                    {
                        name: 'pmh',
                        url: '/pmh',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: '8.Personal Medical History'
                    },
                    {
                        name: 'rh',
                        url: '/rh',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: '9.Reproductive History'
                    },
                    {
                        name: 'mood',
                        url: '/mood',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: '10.General Mood'
                    },
                    {
                        name: 'fmh',
                        url: '/fmh',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: '11.Family Medical History'
                    },
                    {
                        name: 'fmhDisease',
                        url: '/fmhDisease',
                        tpl: 'tpls/fmhDiseaseFormDirective.html',
                        title: '12.Family Diseases'
                    },
                    {
                        name: 'pa',
                        url: '/pa',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: '13.Physical Activities'
                    },
                    {
                        name: 'bp2',
                        url: '/bp2',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: '14.BP2-Physical Measurements'
                    }

                ]
            },
            {
                name: 'ffqDetail',
                url: '/area/:areaId/house/:houseId/household/:householdId/ffq/:memberId',
                tpl: 'tpls/pageDetailNavDisabled.html',
                title: 'FFQ Detail',
                prevState: {name: 'hc.householdDetail.ffq', title: 'FFQ'},
                children: [
                    {
                        name: 'general',
                        url: '/general',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: '1.General Information'
                    },
                    {
                        name: 'bev',
                        url: '/bev',
                        tpl: 'tpls/ffqFormDirective.html',
                        title: '2.Beverages'
                    },
                    {
                        name: 'cls',
                        url: '/cls',
                        tpl: 'tpls/ffqFormDirective.html',
                        title: '3.Cereals'
                    },
                    {
                        name: 'pls',
                        url: '/pls',
                        tpl: 'tpls/ffqFormDirective.html',
                        title: '4.Pulses'
                    },
                    {
                        name: 'veg',
                        url: '/veg',
                        tpl: 'tpls/ffqFormDirective.html',
                        title: '5.Vegetables'
                    },
                    {
                        name: 'raw',
                        url: '/raw',
                        tpl: 'tpls/ffqFormDirective.html',
                        title: '6.RAW'
                    },
                    {
                        name: 'fruits',
                        url: '/fruits',
                        tpl: 'tpls/ffqFormDirective.html',
                        title: '7.Fruits'
                    },
                    {
                        name: 'juice',
                        url: '/juice',
                        tpl: 'tpls/ffqFormDirective.html',
                        title: '8.Juice'
                    },
                    {
                        name: 'nonveg',
                        url: '/nonveg',
                        tpl: 'tpls/ffqFormDirective.html',
                        title: '9.Non-Veg'
                    },
                    {
                        name: 'sweets',
                        url: '/sweets',
                        tpl: 'tpls/ffqFormDirective.html',
                        title: '10.Sweets'
                    },
                    {
                        name: 'spicemix',
                        url: '/spicemix',
                        tpl: 'tpls/ffqFormDirective.html',
                        title: '11.SpiceMix'
                    },
                    {
                        name: 'snacks',
                        url: '/snacks',
                        tpl: 'tpls/ffqFormDirective.html',
                        title: '12.Snacks'
                    },
                    {
                        name: 'foodAdditives',
                        url: '/foodAdditives',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: '13.Food Additives'
                    },

                    {
                        name: 'invitationCard',
                        url: '/invitationCard',
                        tpl: 'tpls/surveyFormDirective.html',
                        title: '14.Invitation Card'
                    }
                ]
            }


        ]

    });