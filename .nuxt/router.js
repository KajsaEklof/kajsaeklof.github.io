import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _074eaa6b = () => interopDefault(import('../pages/notes/index.vue' /* webpackChunkName: "pages/notes/index" */))
const _4affb6a3 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _05980923 = () => interopDefault(import('../pages/notes/_slug.vue' /* webpackChunkName: "pages/notes/_slug" */))
const _1df09b79 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/notes",
    component: _074eaa6b,
    name: "notes"
  }, {
    path: "/projects",
    component: _4affb6a3,
    name: "projects"
  }, {
    path: "/notes/:slug",
    component: _05980923,
    name: "notes-slug"
  }, {
    path: "/",
    component: _1df09b79,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
