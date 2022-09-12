exports.ids = [7];
exports.modules = {

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/notes/_slug.vue?vue&type=template&id=5afcf1f3&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('article', [_vm._ssrNode("<h1>" + _vm._ssrEscape(_vm._s(_vm.post.title)) + "</h1> <p>" + _vm._ssrEscape(_vm._s(_vm.post.description)) + "</p> "), _vm._ssrNode("<nav>", "</nav>", [_vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.post.toc, function (link) {
    return _vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
      attrs: {
        "to": `#${link.id}`
      }
    }, [_vm._v(_vm._s(link.text))])], 1);
  }), 0)]), _vm._ssrNode(" "), _c('nuxt-content', {
    attrs: {
      "document": _vm.post
    }
  }), _vm._ssrNode(" <p>" + _vm._ssrEscape("Post last updated: " + _vm._s(_vm.formatDate(_vm.post.updatedAt))) + "</p>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/notes/_slug.vue?vue&type=template&id=5afcf1f3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/notes/_slug.vue?vue&type=script&lang=js&
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const post = await $content("posts", params.slug).fetch();
    return {
      post
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
// CONCATENATED MODULE: ./pages/notes/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var notes_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/notes/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  notes_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4b18b05e"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map