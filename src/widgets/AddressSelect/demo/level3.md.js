webpackJsonp([2,194],{535:function(n,a){"use strict";n.exports={content:{"zh-CN":[["p","\u9009\u62e9\u7701\u548c\u5e02\u533a"]],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u7701\u5e02\u533a","en-US":"Type"},filename:"src/widgets/AddressSelect/demo/level3.md",id:"src-widgets-AddressSelect-demo-level3"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>addr<span class="token punctuation">.</span>city<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>address-select</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8bf7\u9009\u62e9\u7701\u5e02\u533a<span class="token punctuation">"</span></span>  <span class="token attr-name">:city.sync</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>addr.city<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>address-select</span><span class="token punctuation">></span></span>'}],preview:'<span>{{addr.city}}</span>\n<address-select level="3" placeholder="\u8bf7\u9009\u62e9\u7701\u5e02\u533a"  :city.sync="addr.city" ></address-select>',vueScript:"new Vue({\n  el: 'body',\n  data:function(){\n  \treturn {\n  \t\taddr:{\n  \t\t\tcity:'aa'\n  \t\t}\n  \t}\n  },\n  components: {\n    addressSelect: atuiWidget.AddressSelect\n  },\n  events: {\n  \t'select-city': function(data){\n  \t\tconsole.log(data)\n  \t},\n  \t'select-province': function(data){\n  \t\tconsole.log(data)\n  \t},\n  \t'select-county': function(data){\n  \t\n  \t}\n  }\n})"}}});