(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1433:function(t,n,e){"use strict";e.r(n);e(16);var o={mixins:[e(2395).a],methods:{login:function(){this.$store.dispatch("auth/redirectTo",{provider:this.name})}}},r=e(1),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center"},[e("button",{ref:"btn",staticClass:"btn bg-primary",staticStyle:{"font-size":"18px"},on:{click:t.login}},[t._v("\n    "+t._s(t.t("login.loginWithProvider",{provider:t.displayName}))+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports},2395:function(t,n,e){"use strict";e(4),e(5),e(6),e(7),e(16);n.a={props:{focusOnMount:{type:Boolean,required:!0},name:{type:String,required:!0}},computed:{displayName:function(){return this.t("model.authConfig.provider.".concat(this.name))}},mounted:function(){this.focusOnMount&&this.focus()},methods:{focus:function(){this.$refs.btn.focus()}}}}}]);
//# sourceMappingURL=cf3290a337c4c53d2fd9.js.map