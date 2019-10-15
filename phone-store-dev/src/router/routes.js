import Header from "@/components/header"
import Footer from "@/components/footer"

const HomeIndex = () => import("@/views/index/index")
const ProductIndex = () => import("@/views/productIndex/index")
const ProfileIndex = () => import("@/views/profile/index")
const BusIndex = () => import("@/views/shopBus/index")

export default [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        name: 'index',
        components: {
            default: HomeIndex,
            header: Header,
            footer: Footer
        }
    },
    {
        path: '/productIndex',
        name: 'product',
        components: {
            default: ProductIndex,
            header: Header
        }
    },
    {
        path: '/profile',
        name: 'profile',
        components: {
            default: ProfileIndex,
            footer: Footer
        }
    },
    {
        path: '/cart',
        name: 'cart',
        components: {
            default: BusIndex,
            header: Header,
            footer: Footer
        }
    }
]