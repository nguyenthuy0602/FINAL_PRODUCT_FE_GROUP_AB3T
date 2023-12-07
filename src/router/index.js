import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
   
   
    {
        path : '/benh-nhan',
        component: ()=>import('../components/BenhNhan/index.vue')
    },
    {
        path : '/loai-benh',
        component: ()=>import('../components/LoaiBenh/index.vue')
    },
    {
        path : '/bac-si',
        component: ()=>import('../components/BacSi/index.vue')
    },
    {
        path : '/lieu-luong',
        component: ()=>import('../components/LieuLuong/index.vue')
    },
    {
        path : '/ke-don-thuoc',
        component: ()=>import('../components/KeDonThuoc/index.vue')
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router