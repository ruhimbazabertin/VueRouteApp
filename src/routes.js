import Home from './components/Home'
import User from './components/user/User'
import UserEdit from './components/user/UserEdit'
import UserStart from './components/user/UserStart'
import UserDetail from './components/user/UserDetail'
import Header from './components/Header'
import Footer from './components/Footer'
export const routes = [
             { path: '', component: Home, name:"home"},
             //User as parent component
             { path: '/user', component: User, children: [
                   {path:'', component: UserStart},
                   {path: ':id', component: UserDetail, name:"userDetail"},
                   {path: ':id/edit', component: UserEdit, name: "editUser"},

                 
             ]},  
             {path: '*', redirect: '/'},   

];