export default function ({ store, redirect, route }) {

  if (process.server) {
    console.log('session')
    console.log(store.state)
    console.log('route.name')
    console.log(route.name)

    if (!store.state.isLogged) {
      return redirect('/auth/signin')
    }

    if (route.name == 'index' && store.state.isLogged) {
      return redirect('/course')
    }

    if (route.name === 'auth-signin' && store.state.isLogged) {
      // return redirect('/overview')
      return redirect('/course')
    }

    if (route.name === 'auth-signup' && store.state.isLogged) {
      // return redirect('/overview')
      return redirect('/course')
    }

    if (route.name === 'logout' && store.state.isLogged) {
      store.commit('logoutFull')
      if (!store.state.isLogged) {
        return redirect('/')
      }
    }
  }





}
