export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const TheAboutMe = () => import('../../components/TheAboutMe.vue' /* webpackChunkName: "components/the-about-me" */).then(c => wrapFunctional(c.default || c))
export const TheContact = () => import('../../components/TheContact.vue' /* webpackChunkName: "components/the-contact" */).then(c => wrapFunctional(c.default || c))
export const TheNavigation = () => import('../../components/TheNavigation.vue' /* webpackChunkName: "components/the-navigation" */).then(c => wrapFunctional(c.default || c))
export const TheProjects = () => import('../../components/TheProjects.vue' /* webpackChunkName: "components/the-projects" */).then(c => wrapFunctional(c.default || c))
export const TheTechJourney = () => import('../../components/TheTechJourney.vue' /* webpackChunkName: "components/the-tech-journey" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
