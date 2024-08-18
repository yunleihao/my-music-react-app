import WYMDiscover from '@/pages/discover';
import WYMMine from '@/pages/mine';
import WYMFriend from '@/pages/friend';

const routes = [
    {
        path: "/",
        exact: true,
        component: WYMDiscover
    },
    {
        path: "/discover",
        component: WYMDiscover
    },
    {
        path: "/mine",
        component: WYMMine
    },
    {
        path: "/friend",
        component: WYMFriend
    }
];

export default routes;