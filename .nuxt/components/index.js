import { wrapFunctional } from './utils'

export { default as NuxtLogo } from '../../components/NuxtLogo.vue'

export const LazyNuxtLogo = import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
