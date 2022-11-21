(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1437:function(n,e,t){"use strict";t.r(e);t(19),t(18),t(15),t(10),t(37),t(17),t(38);var r=t(2),o=t(3),d=(t(25),t(27)),l=t(26),c=t(99),A=t(143),m=t(40),v=t(1371),C=t(736),f=t(71),$=t(44),h=t(13),x=t(2417),w=t(477),y=t(0);function k(object,n){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),e.push.apply(e,t)}return e}function B(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(n,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(source,e))}))}return n}var E={name:"AddCustomBadgeDialog",components:{Card:A.a,AsyncButton:c.b,Banner:m.a,Checkbox:$.a,LabeledInput:h.a,ColorInput:x.a,ClusterBadge:v.a,ClusterProviderIcon:C.a},data:function(){return{useCustomBadge:null,errors:[],badgeBgColor:"",badgeDescription:"",badgeAsIcon:null,letter:""}},fetch:function(){var n,e,t,r,o,d;null!==(n=this.currentCluster.metadata)&&void 0!==n&&n.annotations&&(this.badgeDescription=null===(e=this.currentCluster.metadata)||void 0===e?void 0:e.annotations[l.h.TEXT],this.useCustomBadge=(null===(t=this.badgeDescription)||void 0===t?void 0:t.length)>0,this.badgeDescription=this.badgeDescription||"Example Text",this.badgeBgColor=(null===(r=this.currentCluster.metadata)||void 0===r?void 0:r.annotations[l.h.COLOR])||"#ff0000",this.badgeAsIcon=!(null===(o=this.currentCluster.metadata)||void 0===o||!o.annotations[l.h.ICON_TEXT])||!1,this.letter=(null===(d=this.currentCluster.metadata)||void 0===d?void 0:d.annotations[l.h.ICON_TEXT])||this.badgeDescription.substring(0,2))},computed:B(B({},Object(d.b)(["currentCluster"])),{},{previewColor:function(){return Object(w.c)(Object(w.b)(this.badgeBgColor))||"#ffffff"},canSubmit:function(){return this.badgeDescription.length>=1},previewCluster:function(){return{isLocal:this.currentCluster.isLocal,providerNavLogo:this.currentCluster.providerNavLogo,badge:{text:this.badgeDescription,color:this.badgeBgColor,textColor:Object(w.c)(Object(w.b)(this.badgeBgColor)),iconText:this.badgeAsIcon?this.letter.toUpperCase():""}}},mode:function(){return this.useCustomBadge?"edit":"view"}}),methods:{close:function(){this.$emit("close")},apply:function(n){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("rancher/find",{type:y.B.CLUSTER,id:e.currentCluster.id});case 3:return delete(r=t.sent).annotations[l.h.TEXT],delete r.annotations[l.h.COLOR],delete r.annotations[l.h.ICON_TEXT],e.useCustomBadge&&(e.$set(r.annotations,l.h.TEXT,e.badgeDescription),e.$set(r.annotations,l.h.COLOR,e.badgeBgColor),e.badgeAsIcon&&e.$set(r.annotations,l.h.ICON_TEXT,e.letter.toUpperCase())),t.next=10,r.save();case 10:n(!0),e.close(),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),e.errors=Object(f.c)(t.t0),n(!1);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})))()}}},_=(t(2602),t(1)),component=Object(_.a)(E,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("Card",{staticClass:"prompt-badge",attrs:{"show-highlight-border":!1}},[t("h4",{staticClass:"text-default-text",attrs:{slot:"title"},slot:"title"},[n._v("\n    "+n._s(n.t("clusterBadge.modal.title"))+"\n  ")]),n._v(" "),t("div",{staticClass:"pl-10 pr-10 cluster-badge-body",attrs:{slot:"body"},slot:"body"},[t("div",[n._v(n._s(n.t("clusterBadge.modal.previewTitle")))]),n._v(" "),t("div",{staticClass:"mt-10 pl-20 row preview-row"},[t("div",{staticClass:"badge-preview col span-12"},[n.useCustomBadge?t("ClusterProviderIcon",{attrs:{cluster:n.previewCluster}}):t("ClusterProviderIcon",{attrs:{cluster:n.currentCluster}}),n._v(" "),t("div",{staticClass:"cluster-name"},[n._v("\n          "+n._s(n.currentCluster.nameDisplay)+"\n        ")]),n._v(" "),n.useCustomBadge?t("ClusterBadge",{attrs:{cluster:n.previewCluster}}):n._e()],1)]),n._v(" "),t("div",{staticClass:"row mt-10"},[t("div",{staticClass:"col"},[t("Checkbox",{staticClass:"mt-10",attrs:{label:n.t("clusterBadge.modal.checkbox")},model:{value:n.useCustomBadge,callback:function(e){n.useCustomBadge=e},expression:"useCustomBadge"}})],1)]),n._v(" "),t("div",{staticClass:"options"},[t("div",{staticClass:"row mt-10"},[t("div",{staticClass:"col span-12"},[t("LabeledInput",{attrs:{mode:n.mode,label:n.t("clusterBadge.modal.description"),maxlength:32,required:!0},model:{value:n.badgeDescription,callback:function(e){n.badgeDescription="string"==typeof e?e.trim():e},expression:"badgeDescription"}})],1)]),n._v(" "),t("div",{staticClass:"row mt-10"},[t("div",{staticClass:"col span-12"},[t("ColorInput",{attrs:{mode:n.mode,"default-value":n.badgeBgColor,label:n.t("clusterBadge.modal.badgeBgColor")},model:{value:n.badgeBgColor,callback:function(e){n.badgeBgColor=e},expression:"badgeBgColor"}})],1)]),n._v(" "),t("div",{staticClass:"row mt-10"},[t("div",{staticClass:"col"},[t("Checkbox",{staticClass:"mt-10",attrs:{mode:n.mode,label:n.t("clusterBadge.modal.badgeAsIcon"),tooltip:n.t("clusterBadge.modal.maxCharsTooltip")},model:{value:n.badgeAsIcon,callback:function(e){n.badgeAsIcon=e},expression:"badgeAsIcon"}})],1)]),n._v(" "),t("div",{staticClass:"row mt-10"},[t("div",{staticClass:"col"},[t("LabeledInput",{staticClass:"badge-icon-text",attrs:{disabled:!n.badgeAsIcon,mode:n.mode,label:n.t("clusterBadge.modal.iconText"),maxlength:2},model:{value:n.letter,callback:function(e){n.letter="string"==typeof e?e.trim():e},expression:"letter"}})],1)])])]),n._v(" "),t("div",{staticClass:"bottom",attrs:{slot:"actions"},slot:"actions"},[n._l(n.errors,(function(n,i){return t("Banner",{key:i,attrs:{color:"error",label:n}})})),n._v(" "),t("div",{staticClass:"buttons"},[t("button",{staticClass:"btn role-secondary mr-10",on:{click:n.close}},[n._v("\n        "+n._s(n.t("generic.cancel"))+"\n      ")]),n._v(" "),t("AsyncButton",{attrs:{"action-label":n.t("clusterBadge.modal.buttonAction"),disabled:!n.canSubmit},on:{click:n.apply}})],1)],2)])}),[],!1,null,"a8e565a2",null);e.default=component.exports},2397:function(n,e,t){var content=t(2402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(21).default)("1e8ca094",content,!0,{sourceMap:!0})},2401:function(n,e,t){"use strict";t(2397)},2402:function(n,e,t){var r=t(20)(!0);r.push([n.i,'.clearfix[data-v-53067cd0]:after,.clearfix[data-v-53067cd0]:before{content:" ";display:table}.clearfix[data-v-53067cd0]:after{clear:both}.list-unstyled[data-v-53067cd0]{margin:0;padding:0;list-style-type:none}.no-select[data-v-53067cd0]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.no-resize[data-v-53067cd0]{resize:none}.hand[data-v-53067cd0]{cursor:pointer;cursor:hand}.fixed[data-v-53067cd0]{table-layout:fixed}.clip[data-v-53067cd0]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.clip[data-v-53067cd0],.force-wrap[data-v-53067cd0]{word-wrap:break-word}.force-wrap[data-v-53067cd0]{white-space:normal}.bordered-section[data-v-53067cd0]{border-bottom:1px solid var(--border);margin-bottom:20px;padding-bottom:20px}.section-divider[data-v-53067cd0]{margin-bottom:20px;margin-top:20px}.color-input[data-v-53067cd0]{border:1px solid var(--border);border-radius:var(--border-radius);padding:10px}.color-input.disabled[data-v-53067cd0],.color-input.disabled .selected[data-v-53067cd0],.color-input[disabled][data-v-53067cd0],.color-input[disabled][data-v-53067cd0]:hover{color:var(--input-disabled-text);background-color:var(--input-disabled-bg);outline-width:0;border-color:var(--input-disabled-border);cursor:not-allowed}.color-input.disabled .selected div[data-v-53067cd0],.color-input.disabled .selected input[data-v-53067cd0],.color-input.disabled .selected label[data-v-53067cd0],.color-input.disabled .selected span[data-v-53067cd0],.color-input.disabled div[data-v-53067cd0],.color-input.disabled input[data-v-53067cd0],.color-input.disabled label[data-v-53067cd0],.color-input.disabled span[data-v-53067cd0],.color-input[disabled]:hover div[data-v-53067cd0],.color-input[disabled]:hover input[data-v-53067cd0],.color-input[disabled]:hover label[data-v-53067cd0],.color-input[disabled]:hover span[data-v-53067cd0],.color-input[disabled] div[data-v-53067cd0],.color-input[disabled] input[data-v-53067cd0],.color-input[disabled] label[data-v-53067cd0],.color-input[disabled] span[data-v-53067cd0]{cursor:not-allowed!important}.color-input.disabled .selected label[data-v-53067cd0],.color-input.disabled label[data-v-53067cd0],.color-input[disabled]:hover label[data-v-53067cd0],.color-input[disabled] label[data-v-53067cd0]{color:var(--input-disabled-label);display:inline-block;z-index:1}.color-input.disabled .selected[data-v-53067cd0]::-moz-placeholder,.color-input.disabled[data-v-53067cd0]::-moz-placeholder,.color-input[disabled][data-v-53067cd0]::-moz-placeholder,.color-input[disabled][data-v-53067cd0]:hover::-moz-placeholder{color:var(--input-disabled-placeholder)}.color-input.disabled .selected[data-v-53067cd0]::placeholder,.color-input.disabled[data-v-53067cd0]::placeholder,.color-input[disabled][data-v-53067cd0]::placeholder,.color-input[disabled][data-v-53067cd0]:hover::placeholder{color:var(--input-disabled-placeholder)}.color-input LABEL[data-v-53067cd0]{display:block}.color-input .preview-container[data-v-53067cd0]:hover{cursor:pointer}.color-input .preview-container .color-value[data-v-53067cd0]{margin-left:4px}.color-input .color-display[data-v-53067cd0]{border:1px solid var(--border)}.color-input .color-display[data-v-53067cd0]:focus{outline:none;box-shadow:0 0 0 var(--outline-width) var(--outline);background:var(--input-focus-bg)}.color-input INPUT[data-v-53067cd0]{border:none;padding:0;width:23px;height:23px;-webkit-appearance:none;opacity:0}.color-input INPUT[data-v-53067cd0]:hover{cursor:pointer}',"",{version:3,sources:["webpack://node_modules/@rancher/shell/components/form/ColorInput.vue"],names:[],mappings:"AAyME,mEAEE,WAAA,CACA,aAAA,CAEF,iCACE,UAAA,CAsDJ,gCAjDE,QAAA,CACA,SAAA,CACA,oBAAA,CAgDF,4BA5CE,wBAAA,CACA,qBAAA,CAEA,gBAAA,CA0CF,4BAtCE,WAAA,CAuCF,uBAnCE,cAAA,CACA,WAAA,CAmCF,wBA/BE,kBAAA,CAgCF,uBA5BE,sBAAA,CACA,eAAA,CACA,kBACA,CA0BF,oDA1BE,oBAKA,CAqBF,6BArBE,kBAAA,CAsBF,mCAlBE,qCAAA,CACA,kBAAA,CACA,mBAAA,CAiBF,kCAbE,kBAAA,CACA,eAAA,CAmLF,8BACE,8BAAA,CACA,kCAAA,CACA,YAAA,CAEA,8KACE,gCAAA,CACA,yCAAA,CACA,eAAA,CACA,yCAAA,CACA,kBAAA,CAEA,4wBACE,4BAAA,CAGF,sMACE,iCAAA,CACA,oBAAA,CACA,SAAA,CAEF,sPACI,uCAAA,CADJ,kOACI,uCAAA,CAIN,oCACE,aAAA,CAIA,uDACE,cAAA,CAGF,8DACE,eAAA,CAIJ,6CACE,8BAAA,CAEA,mDACE,YAAA,CACA,oDAAA,CACA,gCAAA,CAIJ,oCACE,WAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,uBAAA,CACA,SAAA,CACA,0CACE,cAAA",sourcesContent:["$header-font: 'Poppins', sans-serif;\n$body-font: 'Lato', arial, helvetica, sans-serif;\n$mono-font: 'Roboto Mono', monospace;\n\n$max-width: 1440px !default;\n$min-width: 75% !default;\n$input-height: 61px;\n$unlabeled-input-height: 40px;\n\n$input-padding-lg: 18px;\n$input-padding-sm: 10px;\n$input-line-height: 18px;\n\n$column-gutter: 1.75%;\n\n$sideways-tabs-width: 200px;\n\n$array-list-remove-margin: 75px;\n\n$z-indexes: (\n  zero: 0,\n  default: 1,\n  overContent: 2,\n  hoverOverContent: 3,\n\n  mainHeader: 12,\n\n  tableGroup: 10,\n  fixedTableHeader: 11,\n\n  modalOverlay: 20,\n  modalContent: 21,\n\n  tooltip: 30,\n\n  dropdownOverlay: 40,\n  dropdownContent: 41,\n\n  loadingOverlay: 50,\n  loadingContent: 51\n);\n\n// Usage Example:\n// @media only screen and (min-width: map-get($breakpoints, '--viewport-*')) {\n// }\n$breakpoints: (\n  '--viewport-4':  480px, // Phone\n  '--viewport-7':  768px, // Tablet\n  '--viewport-9':  992px, // Laptop/Desktop\n  '--viewport-12': 1281px, // Desktop\n);\n\n$font-size-h2: 21px;\n\n/*\n * Global spacing variables\n */\n$space-s: 10px;\n$space-m: 20px;\n$space-l: 40px;\n///Computes the \"brightness\" of a color\n@use \"sass:math\";\n\n@function brightness($color) {\n  @if type-of($color) == color {\n    @return math.div(red($color) * 0.299 + green($color) * 0.587 + blue($color) * 0.114, 255) * 100%;\n  }\n  @else {\n    @return unquote(\"brightness(#{$color})\");\n  }\n}\n\n\n///Select the more readable foreground color for a given background color.\n@function contrast-color($color, $dark: $contrasted-dark, $light: $contrasted-light) {\n  @if $color == null {\n    @return null;\n  }\n  @else {\n    $color-brightness: brightness($color);\n    $dark-text-brightness: brightness($dark);\n    $light-text-brightness: brightness($light);\n    @return if(abs($color-brightness - $light-text-brightness) > abs($color-brightness - $dark-text-brightness), $light, $dark);\n  }\n}\n\n@function add-z-index($key, $value) {\n  @return map-merge($z-indexes, ($key: $value));\n}\n\n@function z-index($key) {\n  @if map-has-key($z-indexes, $key) {\n    @return map-get($z-indexes, $key);\n  }\n\n  @warn \"Unknown key `#{$key}` in $z-indexes\";\n  @return null;\n}\n\n// _decimal.scss | MIT License | gist.github.com/terkel/4373420\n\n// Round a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @param  {String} [$mode:round] (round|ceil|floor) How to round a number\n// @return {Number} A rounded number\n// @example\n//     decimal-round(0.333)    => 0\n//     decimal-round(0.333, 1) => 0.3\n//     decimal-round(0.333, 2) => 0.33\n//     decimal-round(0.666)    => 1\n//     decimal-round(0.666, 1) => 0.7\n//     decimal-round(0.666, 2) => 0.67\n//\n@function decimal-round ($number, $digits: 0, $mode: round) {\n  $n: 1;\n  // $number must be a number\n  @if type-of($number) != number {\n      @warn '#{ $number } is not a number.';\n      @return $number;\n  }\n  // $digits must be a unitless number\n  @if type-of($digits) != number {\n      @warn '#{ $digits } is not a number.';\n      @return $number;\n  } @else if not unitless($digits) {\n      @warn '#{ $digits } has a unit.';\n      @return $number;\n  }\n  @for $i from 1 through $digits {\n      $n: $n * 10;\n  }\n  @if $mode == round {\n      @return math.div(round($number * $n), $n);\n  } @else if $mode == ceil {\n      @return math.div(ceil($number * $n), $n);\n  } @else if $mode == floor {\n      @return math.div(floor($number * $n), $n);\n  } @else {\n      @warn '#{ $mode } is undefined keyword.';\n      @return $number;\n  }\n}\n\n// Ceil a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @return {Number} A ceiled number\n// @example\n//     decimal-ceil(0.333)    => 1\n//     decimal-ceil(0.333, 1) => 0.4\n//     decimal-ceil(0.333, 2) => 0.34\n//     decimal-ceil(0.666)    => 1\n//     decimal-ceil(0.666, 1) => 0.7\n//     decimal-ceil(0.666, 2) => 0.67\n//\n@function decimal-ceil ($number, $digits: 0) {\n  @return decimal-round($number, $digits, ceil);\n}\n\n// Floor a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @return {Number} A floored number\n// @example\n//     decimal-floor(0.333)    => 0\n//     decimal-floor(0.333, 1) => 0.3\n//     decimal-floor(0.333, 2) => 0.33\n//     decimal-floor(0.666)    => 0\n//     decimal-floor(0.666, 1) => 0.6\n//     decimal-floor(0.666, 2) => 0.66\n//\n@function decimal-floor ($number, $digits: 0) {\n  @return decimal-round($number, $digits, floor);\n}\n\n@function sizzle-gradient($color) {\n  $angle: 135deg;\n  $startPos: 0%;\n  $start: 0.3;\n  $middlePos: 110px;\n  $middle: 0.1;\n  $endPos: 100%;\n  $end: 0;\n\n  @return transparent linear-gradient(#{$angle},\n      #{rgba($color, $start)} #{$startPos},\n      #{rgba($color, $middle)} #{$middlePos},\n      #{rgba($color, $end)} #{$endPos}\n  ) 0% 0% no-repeat padding-box;\n}\n\n// -----------------------------------------------------------------------------\n// This file contains all application-wide Sass mixins.\n// -----------------------------------------------------------------------------\n\n/// Clear inner floats\n@mixin clearfix() {\n  &:before,\n  &:after {\n    content: \" \"; // 1\n    display: table; // 2\n  }\n  &:after {\n    clear: both;\n  }\n}\n\n@mixin list-unstyled {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n@mixin no-select {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n@mixin no-resize {\n  resize : none;\n}\n\n@mixin hand {\n  cursor : pointer;\n  cursor : hand;\n}\n\n@mixin fixed {\n  table-layout : fixed;\n}\n\n@mixin clip {\n  text-overflow : ellipsis;\n  overflow      : hidden;\n  white-space   : nowrap;\n  word-wrap     : break-word;\n}\n\n@mixin force-wrap {\n  word-wrap : break-word;\n  white-space: normal;\n}\n\n@mixin bordered-section {\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n}\n\n@mixin section-divider {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.clearfix         { @include clearfix; }\n.list-unstyled    { @include list-unstyled }\n.no-select        { @include no-select }\n.no-resize        { @include no-resize }\n.hand             { @include hand }\n.fixed            { @include fixed }\n.clip             { @include clip }\n.force-wrap       { @include force-wrap }\n.bordered-section { @include bordered-section }\n.section-divider  { @include section-divider }\n\n/// Sets the specified background color and calculates a dark or light contrasted text color.\n@mixin contrasted($background-color, $dark: $contrasted-dark, $light: $contrasted-light) {\n  color: contrast-color($background-color, $dark, $light);\n\n  &:hover {\n    text-decoration: underline;\n    color: var(--body-text);\n  }\n}\n\n/// Sets base color and darkens bg on hover\n@mixin bg-lighten($bg) {\n  background: $bg;\n  * {\n    background:lighten($bg,20%);\n  }\n}\n\n@mixin link-color($color, $hover) {\n  @if not($hover) {\n    $hover: $color;\n  }\n\n  color: $color;\n\n  &:hover\n   {\n    text-decoration: underline;\n    color: $hover;\n  }\n}\n\n@mixin icon-rotate($degrees, $rotation) {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=#{$rotation});\n  -webkit-transform: rotate($degrees);\n      -ms-transform: rotate($degrees);\n          transform: rotate($degrees);\n}\n\n@mixin icon-flip($horiz, $vert, $rotation) {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=#{$rotation});\n  -webkit-transform: scale($horiz, $vert);\n      -ms-transform: scale($horiz, $vert);\n          transform: scale($horiz, $vert);\n}\n\n@mixin input-status-color {\n  &, &.focused {\n    &.success {\n      border: solid 1px var(--success);\n      input, .selected {\n        color: var(--success);\n      }\n\n      .vs__actions:after {\n        color: var(--success);\n      }\n    }\n\n    &.warning {\n      border: solid 1px var(--warning);\n      input, .selected {\n        color: var(--warning);\n      }\n\n      .vs__actions:after {\n        color: var(--warning);\n      }\n    }\n\n    &.error {\n      border: solid 1px var(--error);\n\n      > label {\n        color: var(--error);\n      }\n\n      .vs__actions:after {\n        color: var(--error);\n      }\n    }\n  }\n}\n\n@mixin form-focus {\n  // Focus for form like elements (not to be confused with basic :focus style)\n  outline: none;\n  border-color: var(--outline);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.color-input {\n  border: 1px solid var(--border);\n  border-radius: var(--border-radius);\n  padding: 10px;\n\n  &.disabled, &.disabled .selected, &[disabled], &[disabled]:hover {\n    color: var(--input-disabled-text);\n    background-color: var(--input-disabled-bg);\n    outline-width: 0;\n    border-color: var(--input-disabled-border);\n    cursor: not-allowed;\n\n    label, span, div, input {\n      cursor: not-allowed !important;\n    }\n\n    label {\n      color: var(--input-disabled-label);\n      display: inline-block;\n      z-index: 1;\n    }\n    &::placeholder {\n        color: var(--input-disabled-placeholder);\n    }\n  }\n\n  LABEL{\n    display: block;\n  }\n\n  .preview-container{\n    &:hover {\n      cursor: pointer;\n    }\n\n    .color-value {\n      margin-left: 4px;\n    }\n  }\n\n  .color-display{\n    border: 1px solid var(--border);\n\n    &:focus {\n      outline: none;\n      box-shadow: 0 0 0 var(--outline-width) var(--outline);\n      background: var(--input-focus-bg);\n    }\n  }\n\n  INPUT{\n    border: none;\n    padding: 0;\n    width: 23px;\n    height: 23px;\n    -webkit-appearance: none;\n    opacity: 0;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n}\n"],sourceRoot:""}]),n.exports=r},2417:function(n,e,t){"use strict";t(41),t(47);var r=t(9),o={props:{value:{type:String,default:""},defaultValue:{type:String,default:""},label:{type:String,default:null},labelKey:{type:String,default:null},mode:{type:String,validator:function(n){return[r.L,r.R].includes(n)},default:r.L}},data:function(){return{viewMode:r.R,editMode:r.L}},computed:{inputValue:function(){return this.value?this.value:this.defaultValue}},mounted:function(){this.$emit("input",this.inputValue)}},d=(t(2401),t(1)),component=Object(d.a)(o,(function(){var n,e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"color-input",class:(n={},n[e.mode]=e.mode,n.disabled=e.mode!==e.editMode,n)},[r("label",{staticClass:"text-label"},[e.labelKey?r("t",{attrs:{k:e.labelKey,raw:!0}}):e._e(),e._v(e._s(e.label))],1),e._v(" "),r("div",{staticClass:"preview-container",on:{click:function(n){return n.stopPropagation(),e.$refs.input.click(n)}}},[r("span",{staticClass:"color-display",style:{"background-color":e.inputValue}},[r("input",{ref:"input",attrs:{type:"color",disabled:e.mode!==e.editMode},domProps:{value:e.inputValue},on:{input:function(n){return e.$emit("input",n.target.value)}}})]),e._v(" "),r("span",{staticClass:"text-muted color-value"},[e._v(e._s(e.inputValue))])])])}),[],!1,null,"53067cd0",null);e.a=component.exports},2467:function(n,e,t){var content=t(2603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(21).default)("c0ce0b28",content,!0,{sourceMap:!0})},2602:function(n,e,t){"use strict";t(2467)},2603:function(n,e,t){var r=t(20)(!0);r.push([n.i,'.clearfix[data-v-a8e565a2]:after,.clearfix[data-v-a8e565a2]:before{content:" ";display:table}.clearfix[data-v-a8e565a2]:after{clear:both}.list-unstyled[data-v-a8e565a2]{margin:0;padding:0;list-style-type:none}.no-select[data-v-a8e565a2]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.no-resize[data-v-a8e565a2]{resize:none}.hand[data-v-a8e565a2]{cursor:pointer;cursor:hand}.fixed[data-v-a8e565a2]{table-layout:fixed}.clip[data-v-a8e565a2]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.clip[data-v-a8e565a2],.force-wrap[data-v-a8e565a2]{word-wrap:break-word}.force-wrap[data-v-a8e565a2]{white-space:normal}.bordered-section[data-v-a8e565a2]{border-bottom:1px solid var(--border);margin-bottom:20px;padding-bottom:20px}.section-divider[data-v-a8e565a2]{margin-bottom:20px;margin-top:20px}.prompt-badge[data-v-a8e565a2]{margin:0}.prompt-badge .cluster-badge-body[data-v-a8e565a2]{min-height:50px;display:flex;flex-direction:column}.prompt-badge .cluster-badge-body .preview-row[data-v-a8e565a2]{height:32px}.prompt-badge .cluster-badge-body .preview-row .badge-preview[data-v-a8e565a2]{align-items:center;display:flex;height:32px;white-space:nowrap}.prompt-badge .cluster-badge-body .preview-row .badge-preview .cluster-name[data-v-a8e565a2]{margin:0 10px;font-size:16px}.prompt-badge .cluster-badge-body .preview-row .badge-preview .cluster-badge-icon-preview[data-v-a8e565a2]{width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:5px;font-weight:700}.prompt-badge .cluster-badge-body .preview-row .badge-preview .cluster-badge-preview[data-v-a8e565a2]{cursor:default;border-radius:10px;font-size:12px;padding:2px 10px}.prompt-badge .cluster-badge-body[data-v-a8e565a2]  .badge-icon-text input{text-transform:uppercase}.bottom[data-v-a8e565a2]{display:flex;flex-direction:column;flex:1}.bottom .banner[data-v-a8e565a2]{margin-top:0}.bottom .buttons[data-v-a8e565a2]{display:flex;justify-content:flex-end;width:100%}',"",{version:3,sources:["webpack://node_modules/@rancher/shell/dialog/AddCustomBadgeDialog.vue"],names:[],mappings:"AAyME,mEAEE,WAAA,CACA,aAAA,CAEF,iCACE,UAAA,CAsDJ,gCAjDE,QAAA,CACA,SAAA,CACA,oBAAA,CAgDF,4BA5CE,wBAAA,CACA,qBAAA,CAEA,gBAAA,CA0CF,4BAtCE,WAAA,CAuCF,uBAnCE,cAAA,CACA,WAAA,CAmCF,wBA/BE,kBAAA,CAgCF,uBA5BE,sBAAA,CACA,eAAA,CACA,kBACA,CA0BF,oDA1BE,oBAKA,CAqBF,6BArBE,kBAAA,CAsBF,mCAlBE,qCAAA,CACA,kBAAA,CACA,mBAAA,CAiBF,kCAbE,kBAAA,CACA,eAAA,CAuTF,+BACE,QAAA,CAEA,mDACE,eAAA,CACA,YAAA,CACA,qBAAA,CAEA,gEACE,WAAA,CAEA,+EACE,kBAAA,CACA,YAAA,CACA,WAAA,CACA,kBAAA,CAEA,6FACE,aAAA,CACA,cAAA,CAGF,2GACE,UAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,iBAAA,CACA,eAAA,CAGF,sGACE,cAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CAKN,2EACE,wBAAA,CAKN,yBACE,YAAA,CACA,qBAAA,CACA,MAAA,CAEA,iCACE,YAAA,CAGF,kCACE,YAAA,CACA,wBAAA,CACA,UAAA",sourcesContent:["$header-font: 'Poppins', sans-serif;\n$body-font: 'Lato', arial, helvetica, sans-serif;\n$mono-font: 'Roboto Mono', monospace;\n\n$max-width: 1440px !default;\n$min-width: 75% !default;\n$input-height: 61px;\n$unlabeled-input-height: 40px;\n\n$input-padding-lg: 18px;\n$input-padding-sm: 10px;\n$input-line-height: 18px;\n\n$column-gutter: 1.75%;\n\n$sideways-tabs-width: 200px;\n\n$array-list-remove-margin: 75px;\n\n$z-indexes: (\n  zero: 0,\n  default: 1,\n  overContent: 2,\n  hoverOverContent: 3,\n\n  mainHeader: 12,\n\n  tableGroup: 10,\n  fixedTableHeader: 11,\n\n  modalOverlay: 20,\n  modalContent: 21,\n\n  tooltip: 30,\n\n  dropdownOverlay: 40,\n  dropdownContent: 41,\n\n  loadingOverlay: 50,\n  loadingContent: 51\n);\n\n// Usage Example:\n// @media only screen and (min-width: map-get($breakpoints, '--viewport-*')) {\n// }\n$breakpoints: (\n  '--viewport-4':  480px, // Phone\n  '--viewport-7':  768px, // Tablet\n  '--viewport-9':  992px, // Laptop/Desktop\n  '--viewport-12': 1281px, // Desktop\n);\n\n$font-size-h2: 21px;\n\n/*\n * Global spacing variables\n */\n$space-s: 10px;\n$space-m: 20px;\n$space-l: 40px;\n///Computes the \"brightness\" of a color\n@use \"sass:math\";\n\n@function brightness($color) {\n  @if type-of($color) == color {\n    @return math.div(red($color) * 0.299 + green($color) * 0.587 + blue($color) * 0.114, 255) * 100%;\n  }\n  @else {\n    @return unquote(\"brightness(#{$color})\");\n  }\n}\n\n\n///Select the more readable foreground color for a given background color.\n@function contrast-color($color, $dark: $contrasted-dark, $light: $contrasted-light) {\n  @if $color == null {\n    @return null;\n  }\n  @else {\n    $color-brightness: brightness($color);\n    $dark-text-brightness: brightness($dark);\n    $light-text-brightness: brightness($light);\n    @return if(abs($color-brightness - $light-text-brightness) > abs($color-brightness - $dark-text-brightness), $light, $dark);\n  }\n}\n\n@function add-z-index($key, $value) {\n  @return map-merge($z-indexes, ($key: $value));\n}\n\n@function z-index($key) {\n  @if map-has-key($z-indexes, $key) {\n    @return map-get($z-indexes, $key);\n  }\n\n  @warn \"Unknown key `#{$key}` in $z-indexes\";\n  @return null;\n}\n\n// _decimal.scss | MIT License | gist.github.com/terkel/4373420\n\n// Round a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @param  {String} [$mode:round] (round|ceil|floor) How to round a number\n// @return {Number} A rounded number\n// @example\n//     decimal-round(0.333)    => 0\n//     decimal-round(0.333, 1) => 0.3\n//     decimal-round(0.333, 2) => 0.33\n//     decimal-round(0.666)    => 1\n//     decimal-round(0.666, 1) => 0.7\n//     decimal-round(0.666, 2) => 0.67\n//\n@function decimal-round ($number, $digits: 0, $mode: round) {\n  $n: 1;\n  // $number must be a number\n  @if type-of($number) != number {\n      @warn '#{ $number } is not a number.';\n      @return $number;\n  }\n  // $digits must be a unitless number\n  @if type-of($digits) != number {\n      @warn '#{ $digits } is not a number.';\n      @return $number;\n  } @else if not unitless($digits) {\n      @warn '#{ $digits } has a unit.';\n      @return $number;\n  }\n  @for $i from 1 through $digits {\n      $n: $n * 10;\n  }\n  @if $mode == round {\n      @return math.div(round($number * $n), $n);\n  } @else if $mode == ceil {\n      @return math.div(ceil($number * $n), $n);\n  } @else if $mode == floor {\n      @return math.div(floor($number * $n), $n);\n  } @else {\n      @warn '#{ $mode } is undefined keyword.';\n      @return $number;\n  }\n}\n\n// Ceil a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @return {Number} A ceiled number\n// @example\n//     decimal-ceil(0.333)    => 1\n//     decimal-ceil(0.333, 1) => 0.4\n//     decimal-ceil(0.333, 2) => 0.34\n//     decimal-ceil(0.666)    => 1\n//     decimal-ceil(0.666, 1) => 0.7\n//     decimal-ceil(0.666, 2) => 0.67\n//\n@function decimal-ceil ($number, $digits: 0) {\n  @return decimal-round($number, $digits, ceil);\n}\n\n// Floor a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @return {Number} A floored number\n// @example\n//     decimal-floor(0.333)    => 0\n//     decimal-floor(0.333, 1) => 0.3\n//     decimal-floor(0.333, 2) => 0.33\n//     decimal-floor(0.666)    => 0\n//     decimal-floor(0.666, 1) => 0.6\n//     decimal-floor(0.666, 2) => 0.66\n//\n@function decimal-floor ($number, $digits: 0) {\n  @return decimal-round($number, $digits, floor);\n}\n\n@function sizzle-gradient($color) {\n  $angle: 135deg;\n  $startPos: 0%;\n  $start: 0.3;\n  $middlePos: 110px;\n  $middle: 0.1;\n  $endPos: 100%;\n  $end: 0;\n\n  @return transparent linear-gradient(#{$angle},\n      #{rgba($color, $start)} #{$startPos},\n      #{rgba($color, $middle)} #{$middlePos},\n      #{rgba($color, $end)} #{$endPos}\n  ) 0% 0% no-repeat padding-box;\n}\n\n// -----------------------------------------------------------------------------\n// This file contains all application-wide Sass mixins.\n// -----------------------------------------------------------------------------\n\n/// Clear inner floats\n@mixin clearfix() {\n  &:before,\n  &:after {\n    content: \" \"; // 1\n    display: table; // 2\n  }\n  &:after {\n    clear: both;\n  }\n}\n\n@mixin list-unstyled {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n@mixin no-select {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n@mixin no-resize {\n  resize : none;\n}\n\n@mixin hand {\n  cursor : pointer;\n  cursor : hand;\n}\n\n@mixin fixed {\n  table-layout : fixed;\n}\n\n@mixin clip {\n  text-overflow : ellipsis;\n  overflow      : hidden;\n  white-space   : nowrap;\n  word-wrap     : break-word;\n}\n\n@mixin force-wrap {\n  word-wrap : break-word;\n  white-space: normal;\n}\n\n@mixin bordered-section {\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n}\n\n@mixin section-divider {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.clearfix         { @include clearfix; }\n.list-unstyled    { @include list-unstyled }\n.no-select        { @include no-select }\n.no-resize        { @include no-resize }\n.hand             { @include hand }\n.fixed            { @include fixed }\n.clip             { @include clip }\n.force-wrap       { @include force-wrap }\n.bordered-section { @include bordered-section }\n.section-divider  { @include section-divider }\n\n/// Sets the specified background color and calculates a dark or light contrasted text color.\n@mixin contrasted($background-color, $dark: $contrasted-dark, $light: $contrasted-light) {\n  color: contrast-color($background-color, $dark, $light);\n\n  &:hover {\n    text-decoration: underline;\n    color: var(--body-text);\n  }\n}\n\n/// Sets base color and darkens bg on hover\n@mixin bg-lighten($bg) {\n  background: $bg;\n  * {\n    background:lighten($bg,20%);\n  }\n}\n\n@mixin link-color($color, $hover) {\n  @if not($hover) {\n    $hover: $color;\n  }\n\n  color: $color;\n\n  &:hover\n   {\n    text-decoration: underline;\n    color: $hover;\n  }\n}\n\n@mixin icon-rotate($degrees, $rotation) {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=#{$rotation});\n  -webkit-transform: rotate($degrees);\n      -ms-transform: rotate($degrees);\n          transform: rotate($degrees);\n}\n\n@mixin icon-flip($horiz, $vert, $rotation) {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=#{$rotation});\n  -webkit-transform: scale($horiz, $vert);\n      -ms-transform: scale($horiz, $vert);\n          transform: scale($horiz, $vert);\n}\n\n@mixin input-status-color {\n  &, &.focused {\n    &.success {\n      border: solid 1px var(--success);\n      input, .selected {\n        color: var(--success);\n      }\n\n      .vs__actions:after {\n        color: var(--success);\n      }\n    }\n\n    &.warning {\n      border: solid 1px var(--warning);\n      input, .selected {\n        color: var(--warning);\n      }\n\n      .vs__actions:after {\n        color: var(--warning);\n      }\n    }\n\n    &.error {\n      border: solid 1px var(--error);\n\n      > label {\n        color: var(--error);\n      }\n\n      .vs__actions:after {\n        color: var(--error);\n      }\n    }\n  }\n}\n\n@mixin form-focus {\n  // Focus for form like elements (not to be confused with basic :focus style)\n  outline: none;\n  border-color: var(--outline);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.prompt-badge {\n  margin: 0;\n\n  .cluster-badge-body {\n    min-height: 50px;\n    display: flex;\n    flex-direction: column;\n\n    .preview-row {\n      height: 32px;\n\n      .badge-preview {\n        align-items: center;\n        display: flex;\n        height: 32px;\n        white-space: nowrap;\n\n        .cluster-name {\n          margin: 0 10px;\n          font-size: 16px;\n        }\n\n        .cluster-badge-icon-preview {\n          width: 32px;\n          height: 32px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          border-radius: 5px;\n          font-weight: bold;\n        }\n\n        .cluster-badge-preview {\n          cursor: default;\n          border-radius: 10px;\n          font-size: 12px;\n          padding: 2px 10px;\n        }\n      }\n    }\n\n    ::v-deep .badge-icon-text input {\n      text-transform: uppercase;\n    }\n  }\n}\n\n.bottom {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n\n  .banner {\n    margin-top: 0;\n  }\n\n  .buttons {\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n  }\n}\n\n"],sourceRoot:""}]),n.exports=r}}]);
//# sourceMappingURL=5ab2b32dfd798646d00a.js.map