import Header from "@/components/header"
import Footer from "@/components/footer"

const HomeIndex = () => import("@/views/index/index")
const ProductIndex = () => import("@/views/productIndex/index")
const ProfileIndex = () => import("@/views/profile/index")
const BusIndex = () => import("@/views/shopBus/index")
const MsgIndex = () => import("@/views/message/index")
const AddressList = () => import("@/views/profile/addressList")
const AddressAdd = () => import("@/views/profile/addressAdd")

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
    },
    {
        path: '/message',
        name: 'message',
        components: {
            default: MsgIndex,
            header: Header,
            footer: Footer
        }
    }, {
        path: '/addressList',
        name: 'addressList',
        components: {
            default: AddressList,
        }
    }, {
        path: '/addressAdd',
        name: 'addressAdd',
        components: {
            default: AddressAdd,
        }
    }
]