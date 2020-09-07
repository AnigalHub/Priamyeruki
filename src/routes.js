import LandingPage from "./components/LandingPage";
//import company from "./components/company";

export default[
    {
        path: '/',
        name: 'Landing',
        component: LandingPage,
    },
    {
        path: '/company',
        name: 'Company',
        //component: company
        component: () => import("./components/company")
    },
    {
        path: '/equipment',
        name: 'Equipment',
        component: () => import("./components/equipment")
    },
    {
        path: '/processing_on_a_cnc_milling_machine',
        name: 'Processing',
        component: () => import("./components/activity/processing_on_a_cnc_milling_machine")
    },
    {
        path: '/design_and_modeling',
        name: 'Modelling',
        component: () => import("./components/activity/design_and_modeling")
    },
    {
        path: '/chrome_plating',
        name: 'Chrome',
        component: () => import("./components/activity/chrome_plating")
    },
    {
        path: '/aquaprint',
        name: 'Aquaprint',
        component: () => import("./components/activity/aquaprint")
    },
    {
        path: '/laser_engraving',
        name: 'Laser',
        component: () => import("./components/activity/laser_engraving")
    },
    {
        path: '/sandblasing',
        name: 'Sandblasing',
        component: () => import("./components/activity/sandblasing")
    },
    {
        path: '/painting_works',
        name: 'Painting',
        component: () => import("./components/activity/painting_works")
    },
    {
        path: '/drawing_with_a_UV_printer',
        name: 'Drawing',
        component: () => import("./components/activity/drawing_with_a_UV_printer")
    },
    {
        path: '/samples_of_work',
        name: 'Samples',
        component: () => import("./components/samples_of_work")
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import("./components/contacts")
    },
    {
        path: '/:activity',
        name: 'Activity',
        component: () => import("./components/LandingPage/activity")
    },
];