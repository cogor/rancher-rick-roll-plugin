(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{2524:function(n,e,t){var content=t(2710);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(21).default)("1912b3e5",content,!0,{sourceMap:!0})},2709:function(n,e,t){"use strict";t(2524)},2710:function(n,e,t){var r=t(20)(!0);r.push([n.i,'.clearfix[data-v-f7e0223e]:after,.clearfix[data-v-f7e0223e]:before{content:" ";display:table}.clearfix[data-v-f7e0223e]:after{clear:both}.list-unstyled[data-v-f7e0223e]{margin:0;padding:0;list-style-type:none}.no-select[data-v-f7e0223e]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.no-resize[data-v-f7e0223e]{resize:none}.hand[data-v-f7e0223e]{cursor:pointer;cursor:hand}.fixed[data-v-f7e0223e]{table-layout:fixed}.clip[data-v-f7e0223e]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.clip[data-v-f7e0223e],.force-wrap[data-v-f7e0223e]{word-wrap:break-word}.force-wrap[data-v-f7e0223e]{white-space:normal}.bordered-section[data-v-f7e0223e]{border-bottom:1px solid var(--border);margin-bottom:20px;padding-bottom:20px}.section-divider[data-v-f7e0223e]{margin-bottom:20px;margin-top:20px}.overlay[data-v-f7e0223e]{width:100%;height:100%;position:absolute;top:0;left:0;background-color:var(--overlay-bg);z-index:1}.ui-perf-setting P[data-v-f7e0223e]{line-height:1.25;margin-bottom:10px}.ui-perf-setting .underline[data-v-f7e0223e]{text-decoration:underline}.input[data-v-f7e0223e]{max-width:25%}',"",{version:3,sources:["webpack://node_modules/@rancher/shell/pages/c/_cluster/settings/performance.vue"],names:[],mappings:"AAyME,mEAEE,WAAA,CACA,aAAA,CAEF,iCACE,UAAA,CAsDJ,gCAjDE,QAAA,CACA,SAAA,CACA,oBAAA,CAgDF,4BA5CE,wBAAA,CACA,qBAAA,CAEA,gBAAA,CA0CF,4BAtCE,WAAA,CAuCF,uBAnCE,cAAA,CACA,WAAA,CAmCF,wBA/BE,kBAAA,CAgCF,uBA5BE,sBAAA,CACA,eAAA,CACA,kBACA,CA0BF,oDA1BE,oBAKA,CAqBF,6BArBE,kBAAA,CAsBF,mCAlBE,qCAAA,CACA,kBAAA,CACA,mBAAA,CAiBF,kCAbE,kBAAA,CACA,eAAA,CA6UF,0BACE,UAAA,CACA,WAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,kCAAA,CACA,SAAA,CAGE,oCACE,gBAAA,CACA,kBAAA,CAGF,6CACE,yBAAA,CAGJ,wBACE,aAAA",sourcesContent:["$header-font: 'Poppins', sans-serif;\n$body-font: 'Lato', arial, helvetica, sans-serif;\n$mono-font: 'Roboto Mono', monospace;\n\n$max-width: 1440px !default;\n$min-width: 75% !default;\n$input-height: 61px;\n$unlabeled-input-height: 40px;\n\n$input-padding-lg: 18px;\n$input-padding-sm: 10px;\n$input-line-height: 18px;\n\n$column-gutter: 1.75%;\n\n$sideways-tabs-width: 200px;\n\n$array-list-remove-margin: 75px;\n\n$z-indexes: (\n  zero: 0,\n  default: 1,\n  overContent: 2,\n  hoverOverContent: 3,\n\n  mainHeader: 12,\n\n  tableGroup: 10,\n  fixedTableHeader: 11,\n\n  modalOverlay: 20,\n  modalContent: 21,\n\n  tooltip: 30,\n\n  dropdownOverlay: 40,\n  dropdownContent: 41,\n\n  loadingOverlay: 50,\n  loadingContent: 51\n);\n\n// Usage Example:\n// @media only screen and (min-width: map-get($breakpoints, '--viewport-*')) {\n// }\n$breakpoints: (\n  '--viewport-4':  480px, // Phone\n  '--viewport-7':  768px, // Tablet\n  '--viewport-9':  992px, // Laptop/Desktop\n  '--viewport-12': 1281px, // Desktop\n);\n\n$font-size-h2: 21px;\n\n/*\n * Global spacing variables\n */\n$space-s: 10px;\n$space-m: 20px;\n$space-l: 40px;\n///Computes the \"brightness\" of a color\n@use \"sass:math\";\n\n@function brightness($color) {\n  @if type-of($color) == color {\n    @return math.div(red($color) * 0.299 + green($color) * 0.587 + blue($color) * 0.114, 255) * 100%;\n  }\n  @else {\n    @return unquote(\"brightness(#{$color})\");\n  }\n}\n\n\n///Select the more readable foreground color for a given background color.\n@function contrast-color($color, $dark: $contrasted-dark, $light: $contrasted-light) {\n  @if $color == null {\n    @return null;\n  }\n  @else {\n    $color-brightness: brightness($color);\n    $dark-text-brightness: brightness($dark);\n    $light-text-brightness: brightness($light);\n    @return if(abs($color-brightness - $light-text-brightness) > abs($color-brightness - $dark-text-brightness), $light, $dark);\n  }\n}\n\n@function add-z-index($key, $value) {\n  @return map-merge($z-indexes, ($key: $value));\n}\n\n@function z-index($key) {\n  @if map-has-key($z-indexes, $key) {\n    @return map-get($z-indexes, $key);\n  }\n\n  @warn \"Unknown key `#{$key}` in $z-indexes\";\n  @return null;\n}\n\n// _decimal.scss | MIT License | gist.github.com/terkel/4373420\n\n// Round a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @param  {String} [$mode:round] (round|ceil|floor) How to round a number\n// @return {Number} A rounded number\n// @example\n//     decimal-round(0.333)    => 0\n//     decimal-round(0.333, 1) => 0.3\n//     decimal-round(0.333, 2) => 0.33\n//     decimal-round(0.666)    => 1\n//     decimal-round(0.666, 1) => 0.7\n//     decimal-round(0.666, 2) => 0.67\n//\n@function decimal-round ($number, $digits: 0, $mode: round) {\n  $n: 1;\n  // $number must be a number\n  @if type-of($number) != number {\n      @warn '#{ $number } is not a number.';\n      @return $number;\n  }\n  // $digits must be a unitless number\n  @if type-of($digits) != number {\n      @warn '#{ $digits } is not a number.';\n      @return $number;\n  } @else if not unitless($digits) {\n      @warn '#{ $digits } has a unit.';\n      @return $number;\n  }\n  @for $i from 1 through $digits {\n      $n: $n * 10;\n  }\n  @if $mode == round {\n      @return math.div(round($number * $n), $n);\n  } @else if $mode == ceil {\n      @return math.div(ceil($number * $n), $n);\n  } @else if $mode == floor {\n      @return math.div(floor($number * $n), $n);\n  } @else {\n      @warn '#{ $mode } is undefined keyword.';\n      @return $number;\n  }\n}\n\n// Ceil a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @return {Number} A ceiled number\n// @example\n//     decimal-ceil(0.333)    => 1\n//     decimal-ceil(0.333, 1) => 0.4\n//     decimal-ceil(0.333, 2) => 0.34\n//     decimal-ceil(0.666)    => 1\n//     decimal-ceil(0.666, 1) => 0.7\n//     decimal-ceil(0.666, 2) => 0.67\n//\n@function decimal-ceil ($number, $digits: 0) {\n  @return decimal-round($number, $digits, ceil);\n}\n\n// Floor a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @return {Number} A floored number\n// @example\n//     decimal-floor(0.333)    => 0\n//     decimal-floor(0.333, 1) => 0.3\n//     decimal-floor(0.333, 2) => 0.33\n//     decimal-floor(0.666)    => 0\n//     decimal-floor(0.666, 1) => 0.6\n//     decimal-floor(0.666, 2) => 0.66\n//\n@function decimal-floor ($number, $digits: 0) {\n  @return decimal-round($number, $digits, floor);\n}\n\n@function sizzle-gradient($color) {\n  $angle: 135deg;\n  $startPos: 0%;\n  $start: 0.3;\n  $middlePos: 110px;\n  $middle: 0.1;\n  $endPos: 100%;\n  $end: 0;\n\n  @return transparent linear-gradient(#{$angle},\n      #{rgba($color, $start)} #{$startPos},\n      #{rgba($color, $middle)} #{$middlePos},\n      #{rgba($color, $end)} #{$endPos}\n  ) 0% 0% no-repeat padding-box;\n}\n\n// -----------------------------------------------------------------------------\n// This file contains all application-wide Sass mixins.\n// -----------------------------------------------------------------------------\n\n/// Clear inner floats\n@mixin clearfix() {\n  &:before,\n  &:after {\n    content: \" \"; // 1\n    display: table; // 2\n  }\n  &:after {\n    clear: both;\n  }\n}\n\n@mixin list-unstyled {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n@mixin no-select {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n@mixin no-resize {\n  resize : none;\n}\n\n@mixin hand {\n  cursor : pointer;\n  cursor : hand;\n}\n\n@mixin fixed {\n  table-layout : fixed;\n}\n\n@mixin clip {\n  text-overflow : ellipsis;\n  overflow      : hidden;\n  white-space   : nowrap;\n  word-wrap     : break-word;\n}\n\n@mixin force-wrap {\n  word-wrap : break-word;\n  white-space: normal;\n}\n\n@mixin bordered-section {\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n}\n\n@mixin section-divider {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.clearfix         { @include clearfix; }\n.list-unstyled    { @include list-unstyled }\n.no-select        { @include no-select }\n.no-resize        { @include no-resize }\n.hand             { @include hand }\n.fixed            { @include fixed }\n.clip             { @include clip }\n.force-wrap       { @include force-wrap }\n.bordered-section { @include bordered-section }\n.section-divider  { @include section-divider }\n\n/// Sets the specified background color and calculates a dark or light contrasted text color.\n@mixin contrasted($background-color, $dark: $contrasted-dark, $light: $contrasted-light) {\n  color: contrast-color($background-color, $dark, $light);\n\n  &:hover {\n    text-decoration: underline;\n    color: var(--body-text);\n  }\n}\n\n/// Sets base color and darkens bg on hover\n@mixin bg-lighten($bg) {\n  background: $bg;\n  * {\n    background:lighten($bg,20%);\n  }\n}\n\n@mixin link-color($color, $hover) {\n  @if not($hover) {\n    $hover: $color;\n  }\n\n  color: $color;\n\n  &:hover\n   {\n    text-decoration: underline;\n    color: $hover;\n  }\n}\n\n@mixin icon-rotate($degrees, $rotation) {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=#{$rotation});\n  -webkit-transform: rotate($degrees);\n      -ms-transform: rotate($degrees);\n          transform: rotate($degrees);\n}\n\n@mixin icon-flip($horiz, $vert, $rotation) {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=#{$rotation});\n  -webkit-transform: scale($horiz, $vert);\n      -ms-transform: scale($horiz, $vert);\n          transform: scale($horiz, $vert);\n}\n\n@mixin input-status-color {\n  &, &.focused {\n    &.success {\n      border: solid 1px var(--success);\n      input, .selected {\n        color: var(--success);\n      }\n\n      .vs__actions:after {\n        color: var(--success);\n      }\n    }\n\n    &.warning {\n      border: solid 1px var(--warning);\n      input, .selected {\n        color: var(--warning);\n      }\n\n      .vs__actions:after {\n        color: var(--warning);\n      }\n    }\n\n    &.error {\n      border: solid 1px var(--error);\n\n      > label {\n        color: var(--error);\n      }\n\n      .vs__actions:after {\n        color: var(--error);\n      }\n    }\n  }\n}\n\n@mixin form-focus {\n  // Focus for form like elements (not to be confused with basic :focus style)\n  outline: none;\n  border-color: var(--outline);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: var(--overlay-bg);\n  z-index: 1;\n}\n  .ui-perf-setting {\n    P {\n      line-height: 1.25;\n      margin-bottom: 10px;\n    }\n\n    .underline {\n      text-decoration: underline;\n    }\n  }\n  .input {\n    max-width: 25%;\n  }\n"],sourceRoot:""}]),n.exports=r},2920:function(n,e,t){"use strict";t.r(e);t(19),t(18),t(15),t(10),t(37),t(17),t(38);var r=t(3),o=t(2),l=(t(41),t(47),t(25),t(44)),c=t(43),d=t(99),m=t(40),v=t(13),f=t(0),h=t(75),A=t(9),$=t(84);function C(object,n){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),e.push.apply(e,t)}return e}function x(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(r.a)(n,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(source,e))}))}return n}var w={layout:"authenticated",components:{Checkbox:l.a,Loading:c.a,AsyncButton:d.b,Banner:m.a,LabeledInput:v.a,UnitInput:$.a},fetch:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.$store.dispatch("management/find",{type:f.v.SETTING,id:h.c.UI_PERFORMANCE});case 3:n.uiPerfSetting=e.sent,e.next=13;break;case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,n.$store.dispatch("management/create",{type:f.v.SETTING},{root:!0});case 10:n.uiPerfSetting=e.sent,n.uiPerfSetting.value=JSON.stringify(h.b),n.uiPerfSetting.metadata={name:h.c.UI_PERFORMANCE};case 13:r=(null===(t=n.uiPerfSetting)||void 0===t?void 0:t.value)||JSON.stringify(h.b),n.value=x(x({},h.b),JSON.parse(r)),n.gcStartedEnabled=n.value.garbageCollection.enabled;case 16:case"end":return e.stop()}}),e,null,[[0,6]])})))()},data:function(){return{uiPerfSetting:h.b,bannerVal:{},value:{},errors:[],gcStartedEnabled:null}},computed:{mode:function(){var n,e=this.$store.getters["management/schemaFor"](f.v.SETTING);return null!=e&&null!==(n=e.resourceMethods)&&void 0!==n&&n.includes("PUT")?A.L:A.R}},methods:{save:function(n){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.uiPerfSetting.value=JSON.stringify(e.value),e.errors=[],t.prev=2,t.next=5,e.uiPerfSetting.save();case 5:e.$store.dispatch("gcPreferencesUpdated",{previouslyEnabled:e.gcStartedEnabled,newPreferences:e.value.garbageCollection},{root:!0}),e.gcStartedEnabled=e.value.garbageCollection.enabled,n(!0),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),e.errors.push(t.t0),n(!1);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})))()}}},k=(t(2709),t(1)),component=Object(k.a)(w,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return n.$fetchState.pending?t("Loading"):t("div",[t("h1",{staticClass:"mb-20"},[n._v("\n    "+n._s(n.t("performance.label"))+"\n  ")]),n._v(" "),t("div",[t("div",{staticClass:"ui-perf-setting"},[t("div",{staticClass:"mt-20"},[t("h2",[n._v(n._s(n.t("performance.websocketNotification.label")))]),n._v(" "),t("p",[n._v(n._s(n.t("performance.websocketNotification.description")))]),n._v(" "),t("Checkbox",{staticClass:"mt-10 mb-20",attrs:{label:n.t("performance.websocketNotification.checkboxLabel"),primary:!0},model:{value:n.value.disableWebsocketNotification,callback:function(e){n.$set(n.value,"disableWebsocketNotification",e)},expression:"value.disableWebsocketNotification"}})],1),n._v(" "),t("div",{staticClass:"mt-40"},[t("h2",[n._v(n._s(n.t("performance.incrementalLoad.label")))]),n._v(" "),t("p",[n._v(n._s(n.t("performance.incrementalLoad.description")))]),n._v(" "),t("Checkbox",{staticClass:"mt-10 mb-20",attrs:{label:n.t("performance.incrementalLoad.checkboxLabel"),primary:!0},model:{value:n.value.incrementalLoading.enabled,callback:function(e){n.$set(n.value.incrementalLoading,"enabled",e)},expression:"value.incrementalLoading.enabled"}}),n._v(" "),t("div",{staticClass:"ml-20"},[t("p",{class:{"text-muted":!n.value.incrementalLoading.enabled}},[n._v("\n            "+n._s(n.t("performance.incrementalLoad.setting"))+"\n          ")]),n._v(" "),t("LabeledInput",{staticClass:"input",attrs:{label:n.t("performance.incrementalLoad.inputLabel"),disabled:!n.value.incrementalLoading.enabled,type:"number",min:"0"},model:{value:n.value.incrementalLoading.threshold,callback:function(e){n.$set(n.value.incrementalLoading,"threshold",e)},expression:"value.incrementalLoading.threshold"}})],1)],1),n._v(" "),t("div",{staticClass:"mt-40"},[t("h2",{directives:[{name:"t",rawName:"v-t",value:"performance.manualRefresh.label",expression:"'performance.manualRefresh.label'"}]}),n._v(" "),t("p",[n._v(n._s(n.t("performance.manualRefresh.description")))]),n._v(" "),t("Banner",{attrs:{color:"error","label-key":"performance.manualRefresh.banner"}}),n._v(" "),t("Checkbox",{staticClass:"mt-10 mb-20",attrs:{label:n.t("performance.manualRefresh.checkboxLabel"),primary:!0},model:{value:n.value.manualRefresh.enabled,callback:function(e){n.$set(n.value.manualRefresh,"enabled",e)},expression:"value.manualRefresh.enabled"}}),n._v(" "),t("div",{staticClass:"ml-20"},[t("p",{class:{"text-muted":!n.value.manualRefresh.enabled}},[n._v("\n            "+n._s(n.t("performance.manualRefresh.setting"))+"\n          ")]),n._v(" "),t("LabeledInput",{staticClass:"input",attrs:{label:n.t("performance.manualRefresh.inputLabel"),disabled:!n.value.manualRefresh.enabled,type:"number",min:"0"},model:{value:n.value.manualRefresh.threshold,callback:function(e){n.$set(n.value.manualRefresh,"threshold",n._n(e))},expression:"value.manualRefresh.threshold"}})],1)],1),n._v(" "),t("div",{staticClass:"mt-40"},[t("h2",{directives:[{name:"t",rawName:"v-t",value:"performance.gc.label",expression:"'performance.gc.label'"}]}),n._v(" "),t("p",[n._v(n._s(n.t("performance.gc.description")))]),n._v(" "),t("Banner",{attrs:{color:"error","label-key":"performance.gc.banner"}}),n._v(" "),t("Checkbox",{staticClass:"mt-10 mb-20",attrs:{label:n.t("performance.gc.checkboxLabel"),primary:!0},model:{value:n.value.garbageCollection.enabled,callback:function(e){n.$set(n.value.garbageCollection,"enabled",e)},expression:"value.garbageCollection.enabled"}}),n._v(" "),t("div",{staticClass:"ml-20"},[t("h3",[n._v(n._s(n.t("performance.gc.whenRun.description")))]),n._v(" "),t("div",{staticClass:"ml-20 mb-10"},[t("Checkbox",{staticClass:"mt-10 mb-10",class:{"text-muted":!n.value.garbageCollection.enabled},attrs:{label:n.t("performance.gc.whenRun.intervalCheckBox.label"),disabled:!n.value.garbageCollection.enabled,primary:!0},model:{value:n.value.garbageCollection.enabledInterval,callback:function(e){n.$set(n.value.garbageCollection,"enabledInterval",e)},expression:"value.garbageCollection.enabledInterval"}}),n._v(" "),t("div",{staticClass:"ml-20"},[t("UnitInput",{staticClass:"input",attrs:{suffix:n.t("suffix.seconds",{count:n.value.garbageCollection.interval}),label:n.t("performance.gc.whenRun.interval.inputLabel"),disabled:!n.value.garbageCollection.enabled||!n.value.garbageCollection.enabledInterval,min:"30"},model:{value:n.value.garbageCollection.interval,callback:function(e){n.$set(n.value.garbageCollection,"interval",e)},expression:"value.garbageCollection.interval"}})],1),n._v(" "),t("Checkbox",{staticClass:"mt-20 mb-10",class:{"text-muted":!n.value.garbageCollection.enabled},attrs:{label:n.t("performance.gc.whenRun.route.description"),disabled:!n.value.garbageCollection.enabled,primary:!0},model:{value:n.value.garbageCollection.enabledOnNavigate,callback:function(e){n.$set(n.value.garbageCollection,"enabledOnNavigate",e)},expression:"value.garbageCollection.enabledOnNavigate"}})],1),n._v(" "),t("h3",[n._v(n._s(n.t("performance.gc.howRun.description")))]),n._v(" "),t("div",{staticClass:"ml-20"},[t("p",{class:{"text-muted":!n.value.garbageCollection.enabled}},[n._v("\n              "+n._s(n.t("performance.gc.howRun.age.description",{},!0))+"\n            ")]),n._v(" "),t("UnitInput",{staticClass:"input",attrs:{suffix:n.t("suffix.seconds",{count:n.value.garbageCollection.ageThreshold}),label:n.t("performance.gc.howRun.age.inputLabel"),disabled:!n.value.garbageCollection.enabled,min:"30"},model:{value:n.value.garbageCollection.ageThreshold,callback:function(e){n.$set(n.value.garbageCollection,"ageThreshold",e)},expression:"value.garbageCollection.ageThreshold"}}),n._v(" "),t("p",{staticClass:"mt-20",class:{"text-muted":!n.value.garbageCollection.enabled}},[n._v("\n              "+n._s(n.t("performance.gc.howRun.count.description"))+"\n            ")]),n._v(" "),t("LabeledInput",{staticClass:"input",attrs:{label:n.t("performance.gc.howRun.count.inputLabel"),disabled:!n.value.garbageCollection.enabled,type:"number",min:"0"},model:{value:n.value.garbageCollection.countThreshold,callback:function(e){n.$set(n.value.garbageCollection,"countThreshold",n._n(e))},expression:"value.garbageCollection.countThreshold"}})],1)])],1)])]),n._v(" "),n._l(n.errors,(function(n){return[t("Banner",{key:n,attrs:{color:"error",label:n}})]})),n._v(" "),"edit"===n.mode?t("div",[t("AsyncButton",{staticClass:"pull-right mt-20",attrs:{mode:"apply"},on:{click:n.save}})],1):n._e()],2)}),[],!1,null,"f7e0223e",null);e.default=component.exports}}]);
//# sourceMappingURL=3f5a248a9ac95a214b2c.js.map