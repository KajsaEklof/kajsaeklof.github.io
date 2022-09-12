exports.ids = [8];
exports.modules = {

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/notes/index.vue?vue&type=template&id=0472502c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "blog"
  }, [_vm._ssrNode("<h2>Notes</h2> <p>Things I learn along the way.</p> "), _vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.posts, function (post, i) {
    return _vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
      staticClass: "post card",
      attrs: {
        "to": {
          name: 'notes-slug',
          params: {
            slug: post.slug
          }
        }
      }
    }, [_c('h3', {
      staticClass: "title"
    }, [_vm._v(_vm._s(post.title))]), _vm._v(" "), _c('p', {
      staticClass: "description"
    }, [_vm._v(_vm._s(post.description))]), _vm._v(" "), _c('p', {
      staticClass: "updated-at"
    }, [_vm._v(_vm._s(_vm.formatDate(post.updatedAt)))])])], 1);
  }), 0)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/notes/index.vue?vue&type=template&id=0472502c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/notes/index.vue?vue&type=script&lang=js&
/* harmony default export */ var notesvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const posts = await $content("posts").only(["title", "description", "slug", "updatedAt"]).sortBy("createdAt", "desc").fetch();
    return {
      posts
    };
  },

  methods: {
    formatDate(date) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return new Date(date).toLocaleDateString("en", options);
    }

  }
});
// CONCATENATED MODULE: ./pages/notes/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_notesvue_type_script_lang_js_ = (notesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/notes/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_notesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "47ab6dce"
  
)

/* harmony default export */ var notes = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map