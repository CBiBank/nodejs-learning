import Cookies from 'js-cookie'

const app = {
  // namespaced will make mutations and actions in a new scoped. state and getters is in scoped even if namespaced not set.
  // namespaced: true,
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    token: '',
    userInfo: {},
    topList: [],
    addRoutes: [],
    apis: [],
    tabInfo: '',
    subPageInfo: {},
    lang: 'zh-CN'
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    ADD_TOP_BAR: (state, topList) => {
      state.topList = topList
    },
    ADD_ROUTES: (state, addRoutes) => {
      state.addRoutes = addRoutes
    },
    ADD_APIS: (state, apis) => {
      state.apis = apis
    },
    LOGIN_OUT: (state) => {
      state.token = ''
      state.userInfo = {}
      state.addRoutes = []
    },
    SAVE_TABINFO: (state, tabInfo) => {
      state.tabInfo = tabInfo
    },
    SAVE_SUB_PAGE: (state, subPageInfo) => {
      state.subPageInfo = subPageInfo
    },
    SET_LANG: (state, lang) => {
      state.lang = lang
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    SaveTabInfo({ commit }, tabInfo) {
      commit('SAVE_TABINFO', tabInfo)
    },
    SaveSubPage({ commit }, subPageInfo) {
      commit('SAVE_SUB_PAGE', subPageInfo)
    }
  }
}

export default app
