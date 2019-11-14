
const AsyncComponentHook = (path) => {
    let component = () => import (`@/pages/${path}.vue`);
    return component;
  };
  
  export default [
    {
      path: '/',
      name: 'main',
      component: AsyncComponentHook('comm/Main.view')
    },
    {
      path: '/about/',
      component: AsyncComponentHook('about')
    },
    {
      path: '/home',
      name: 'home',
      component: AsyncComponentHook('home/Home.view')
    },
    {
      path: '/login',
      name: 'login',
      component: AsyncComponentHook('login/Login.view')
    },
    {
      path: '/member',
      name: 'member',
      component: AsyncComponentHook('member/Member.view')
    },
    {
      path: '/waller',
      name: 'waller',
      component: AsyncComponentHook('member/assetDetail/AssetDatil.view')
    },
  ];