import Vue from 'vue'
import Router from 'vue-router'
import PageDashboard from "../page/PageDashboard";
import PageAbout from "../page/PageAbout";
// import Page404 from "../page/Page404";



Vue.use(Router)

const router = new Router ({
    mode: 'history',
    routes:[
        {
            path:'/dashboard',
            name:'dashboard',
            component: PageDashboard

        },
        {
            path:'/about',
            name:'about',
            component: PageAbout

        },
        {
            path:'/dashboard/:category',
            name:'addPayment',
            component: PageDashboard,
            props: (route) => ({value: parseInt(route.query.value)})

        },
        // {
        //     path:"*",
        //     name:'404',
        //     component: Page404
        //
        // }

    ]
})
export default router
