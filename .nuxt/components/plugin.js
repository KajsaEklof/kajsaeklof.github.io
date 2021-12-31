import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  NuxtLogo: () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c)),
  TheAboutMe: () => import('../../components/TheAboutMe.vue' /* webpackChunkName: "components/the-about-me" */).then(c => wrapFunctional(c.default || c)),
  TheContact: () => import('../../components/TheContact.vue' /* webpackChunkName: "components/the-contact" */).then(c => wrapFunctional(c.default || c)),
  TheNavigation: () => import('../../components/TheNavigation.vue' /* webpackChunkName: "components/the-navigation" */).then(c => wrapFunctional(c.default || c)),
  TheProjects: () => import('../../components/TheProjects.vue' /* webpackChunkName: "components/the-projects" */).then(c => wrapFunctional(c.default || c)),
  TheScrollToTop: () => import('../../components/TheScrollToTop.vue' /* webpackChunkName: "components/the-scroll-to-top" */).then(c => wrapFunctional(c.default || c)),
  TheTechJourney: () => import('../../components/TheTechJourney.vue' /* webpackChunkName: "components/the-tech-journey" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
