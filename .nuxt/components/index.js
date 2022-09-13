export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as TheAboutMe } from '../../components/TheAboutMe.vue'
export { default as TheContact } from '../../components/TheContact.vue'
export { default as TheNavigation } from '../../components/TheNavigation.vue'
export { default as TheProjects } from '../../components/TheProjects.vue'
export { default as TheTechJourney } from '../../components/TheTechJourney.vue'

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
