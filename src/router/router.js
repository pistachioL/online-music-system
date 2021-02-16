
export default new Router({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
          title: '首页',
          type: 'login'   // 是否需要判断是否登录,这里是需要判断
        }
      },
      {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
          title: 'login',
          type: '' // 不需要鉴权
        }
      }
    ]
  })