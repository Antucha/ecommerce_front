import { MutationTree, ActionTree } from "vuex";
import { PARAMETERS, HTTP } from '@/config/HttpBase';
import Cookies from 'universal-cookie';
// import { contactUrl, uploadUrl, messagesUrl } from '~/config/EndPoints';
let userSession = (process.browser) ? window.localStorage.getItem(PARAMETERS.loginSession) : null
const cookies = new Cookies();
export interface RootState {
  token: string | null,
  userInfo: any,
  isLogged: any,
  isLoadFullScrees: any
}

const removeSession = () => {
  cookies.remove(PARAMETERS.loginSession, { expires: new Date("December 30, 2017 11:20:25") })
  cookies.remove(PARAMETERS.loginSession, { path: '/', domain: PARAMETERS.sessionUrl })
  cookies.remove(PARAMETERS.loginSession, { path: '/orientacion-vocacional', domain: PARAMETERS.sessionUrl })
  cookies.remove(PARAMETERS.loginSession, { path: '/overview', domain: PARAMETERS.sessionUrl })
  cookies.remove('logoNavBrandInstitution', { expires: new Date("December 30, 2017 11:20:25") })
  cookies.remove('alliance', { expires: new Date("December 30, 2017 11:20:25") })
  cookies.remove('alliance', { path: '/', domain: PARAMETERS.sessionUrl })
  cookies.remove('alliance', { path: '/orientacion-vocacional', domain: PARAMETERS.sessionUrl })
  cookies.remove('alliance', { path: '/overview', domain: PARAMETERS.sessionUrl })
}

const loopLogout = () => {
  const session = cookies.get(PARAMETERS.loginSession)
  if (session) {
    removeSession()
  } else {
    loopLogout()
  }
}

export const state = () => ({
  /* User */
  userName: null,
  userEmail: null,
  userAvatar: null,

  /* NavBar */
  isNavBarVisible: true,

  /* FooterBar */
  isFooterBarVisible: true,

  /* Aside */
  isAsideVisible: true,
  isAsideMobileExpanded: false,

  token: null,
  userInfo: null,
  isLogged: false,
})

export const mutations = {
  /* A fit-them-all commit */
  basic(state: any, payload: any) {
    state[payload.key] = payload.value
  },

  /* User */
  user(state: any, payload: any) {
    if (payload.name) {
      state.userName = payload.name
    }
    if (payload.email) {
      state.userEmail = payload.email
    }
    if (payload.avatar) {
      state.userAvatar = payload.avatar
    }
  },
  logoutFull(state: any) {
    loopLogout()
    state.token = null
    state.userInfo = null
    state.isLogged = false
  },

  /* Aside Mobile */
  asideMobileStateToggle(state: any, payload = null) {
    const htmlClassName = 'has-aside-mobile-expanded'

    let isShow

    if (payload !== null) {
      isShow = payload
    } else {
      isShow = !state.isAsideMobileExpanded
    }

    if (isShow) {
      document.documentElement.classList.add(htmlClassName)
    } else {
      document.documentElement.classList.remove(htmlClassName)
    }

    state.isAsideMobileExpanded = isShow
  },


  addSession(state: any, session: any) {
    if (session) {

      cookies.set(PARAMETERS.loginSession, JSON.stringify(session), { path: '/', domain: PARAMETERS.sessionUrl });
      console.log("session: ", session);
      // if (process.browser) {
      //   window.localStorage.setItem(PARAMETERS.loginSession, JSON.stringify(session))
      // }
      // console.log("Holaaaaaa")
      if (session.token) {
        state.token = session.token
        state.isLogged = true
      }
      if (session.user) {
        state.userInfo = session.user
      }
    }
  },

  logout(state: any) {
    removeSession()
    state.token = null
    state.userInfo = null
    state.isLogged = false
  },

  removeSession(state: any) {
    // window.localStorage.removeItem(PARAMETERS.loginSession)
    cookies.remove(PARAMETERS.loginSession)
    console.log('mutate detecxted')
    state.token = null
    // state.userInfo = null
    // state.isLogged = false
  },
}


export const getters = {
  getToken(state: any) {
    return 'Bearer ' + state.token
  },
  userInfo(state: any) {
    return cookies.get("userSesion");
  },
  userIsAuthor(state: any){
    return cookies.get("userSesion").user.role=='author'
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, { req }) {
    console.log('nuxtServerInit')
    //@ts-ignore
    const cookies = new Cookies(req.headers.cookie)
    console.log(req.headers.cookie)
    const getCookiesLogin = cookies.get(PARAMETERS.loginSession)
    console.log(getCookiesLogin)
    if (getCookiesLogin) {
      const userCookie = JSON.parse(JSON.stringify(getCookiesLogin))
      // commit('logout')
      commit('addSession', userCookie)
    }
  },

  showLoadFullScreen({ commit, state }: { commit: any, state: any }, hide: any) {
    commit('showLoadFullScreen', hide);
  },
}
