import { wrapFunctional } from './utils'

export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as TheAboutMe } from '../../components/TheAboutMe.vue'
export { default as TheContact } from '../../components/TheContact.vue'
export { default as TheNavigation } from '../../components/TheNavigation.vue'
export { default as TheProjects } from '../../components/TheProjects.vue'
export { default as TheTechJourney } from '../../components/TheTechJourney.vue'

export const LazyNuxtLogo = import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyTheAboutMe = import('../../components/TheAboutMe.vue' /* webpackChunkName: "components/the-about-me" */).then(c => wrapFunctional(c.default || c))
export const LazyTheContact = import('../../components/TheContact.vue' /* webpackChunkName: "components/the-contact" */).then(c => wrapFunctional(c.default || c))
export const LazyTheNavigation = import('../../components/TheNavigation.vue' /* webpackChunkName: "components/the-navigation" */).then(c => wrapFunctional(c.default || c))
export const LazyTheProjects = import('../../components/TheProjects.vue' /* webpackChunkName: "components/the-projects" */).then(c => wrapFunctional(c.default || c))
export const LazyTheTechJourney = import('../../components/TheTechJourney.vue' /* webpackChunkName: "components/the-tech-journey" */).then(c => wrapFunctional(c.default || c))
