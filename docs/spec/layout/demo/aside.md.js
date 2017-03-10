webpackJsonp([166,194],{371:function(n,a){"use strict";n.exports={content:[["p","\u9876\u7ea7\u5bfc\u822a\u5728\u4fa7\u8fb9\u680f\u3002"],["p","\u4fa7\u8fb9\u5bfc\u822a\u5728\u9875\u9762\u5e03\u5c40\u4e0a\u91c7\u7528\u7684\u662f\u5de6\u53f3\u7684\u7ed3\u6784\uff0c\u4e00\u822c\u4e3b\u5bfc\u822a\u653e\u7f6e\u4e8e\u9875\u9762\u7684\u5de6\u4fa7\u56fa\u5b9a\u4f4d\u7f6e\uff0c\u8f85\u52a9\u83dc\u5355\u653e\u7f6e\u4e8e\u5de5\u4f5c\u533a\u9876\u90e8\u3002\u5185\u5bb9\u6839\u636e\u6d4f\u89c8\u5668\u7ec8\u7aef\u8fdb\u884c\u81ea\u9002\u5e94\uff0c\u80fd\u63d0\u9ad8\u6a2a\u5411\u7a7a\u95f4\u7684\u4f7f\u7528\u7387\uff0c\u4f46\u662f\u6574\u4e2a\u9875\u9762\u6392\u7248\u4e0d\u7a33\u5b9a\u3002\u4fa7\u8fb9\u5bfc\u822a\u7684\u6a21\u5f0f\u5c42\u7ea7\u6269\u5c55\u6027\u5f3a\uff0c\u4e00\u3001\u4e8c\u3001\u4e09\u7ea7\u5bfc\u822a\u9879\u76ee\u53ef\u4ee5\u66f4\u4e3a\u987a\u7545\u4e14\u5177\u5173\u8054\u6027\u7684\u88ab\u5c55\u793a\uff0c\u540c\u65f6\u4fa7\u8fb9\u5bfc\u822a\u53ef\u4ee5\u56fa\u5b9a\uff0c\u4f7f\u5f97\u7528\u6237\u5728\u64cd\u4f5c\u548c\u6d4f\u89c8\u4e2d\u53ef\u4ee5\u5feb\u901f\u7684\u5b9a\u4f4d\u548c\u5207\u6362\u5f53\u524d\u4f4d\u7f6e\uff0c\u6709\u5f88\u9ad8\u7684\u64cd\u4f5c\u6548\u7387\u3002\u4f46\u8fd9\u7c7b\u5bfc\u822a\u6a2a\u5411\u9875\u9762\u5185\u5bb9\u7684\u7a7a\u95f4\u4f1a\u88ab\u727a\u7272\u4e00\u90e8\u4efd\u3002"]],meta:{order:2,title:"\u4fa7\u8fb9\u5bfc\u822a",filename:"docs/spec/layout/demo/aside.md",id:"docs-spec-layout-demo-aside"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Breadcrumb<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> BrowserDemo <span class="token keyword">from</span> <span class="token string">\'site/theme/template/BrowserDemo\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> SubMenu <span class="token operator">=</span> Menu<span class="token punctuation">.</span>SubMenu<span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BrowserDemo</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ant-layout-aside<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ant-layout-sider<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ant-layout-logo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>\n          <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'1\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultOpenKeys</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'sub1\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubMenu</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub1<span class="token punctuation">"</span></span> <span class="token attr-name">title={&lt;span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\u5bfc\u822a\u4e00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SubMenu</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubMenu</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub2<span class="token punctuation">"</span></span> <span class="token attr-name">title={&lt;span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>laptop<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\u5bfc\u822a\u4e8c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">5</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">6</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">7</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">8</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SubMenu</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubMenu</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub3<span class="token punctuation">"</span></span> <span class="token attr-name">title={&lt;span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>notification<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\u5bfc\u822a\u4e09<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>9<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">9</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">10</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>11<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">11</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">12</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SubMenu</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ant-layout-main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ant-layout-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ant-layout-breadcrumb<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>\u9996\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>\u5e94\u7528\u5217\u8868<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>\u67d0\u5e94\u7528<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ant-layout-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ant-layout-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token number">590</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n              \u5185\u5bb9\u533a\u57df\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ant-layout-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        Ant Design \u7248\u6743\u6240\u6709 \xa9 <span class="token number">2015</span> \u7531\u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\u652f\u6301\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BrowserDemo</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:'import { Menu, Breadcrumb, Icon } from \'antd\';\nimport BrowserDemo from \'site/theme/template/BrowserDemo\';\nconst SubMenu = Menu.SubMenu;\n\nReactDOM.render(\n  <BrowserDemo>\n    <div className="ant-layout-aside">\n      <aside className="ant-layout-sider">\n        <div className="ant-layout-logo"></div>\n        <Menu mode="inline" theme="dark"\n          defaultSelectedKeys={[\'1\']} defaultOpenKeys={[\'sub1\']}>\n          <SubMenu key="sub1" title={<span><Icon type="user" />\u5bfc\u822a\u4e00</span>}>\n            <Menu.Item key="1">\u9009\u98791</Menu.Item>\n            <Menu.Item key="2">\u9009\u98792</Menu.Item>\n            <Menu.Item key="3">\u9009\u98793</Menu.Item>\n            <Menu.Item key="4">\u9009\u98794</Menu.Item>\n          </SubMenu>\n          <SubMenu key="sub2" title={<span><Icon type="laptop" />\u5bfc\u822a\u4e8c</span>}>\n            <Menu.Item key="5">\u9009\u98795</Menu.Item>\n            <Menu.Item key="6">\u9009\u98796</Menu.Item>\n            <Menu.Item key="7">\u9009\u98797</Menu.Item>\n            <Menu.Item key="8">\u9009\u98798</Menu.Item>\n          </SubMenu>\n          <SubMenu key="sub3" title={<span><Icon type="notification" />\u5bfc\u822a\u4e09</span>}>\n            <Menu.Item key="9">\u9009\u98799</Menu.Item>\n            <Menu.Item key="10">\u9009\u987910</Menu.Item>\n            <Menu.Item key="11">\u9009\u987911</Menu.Item>\n            <Menu.Item key="12">\u9009\u987912</Menu.Item>\n          </SubMenu>\n        </Menu>\n      </aside>\n      <div className="ant-layout-main">\n        <div className="ant-layout-header"></div>\n        <div className="ant-layout-breadcrumb">\n          <Breadcrumb>\n            <Breadcrumb.Item>\u9996\u9875</Breadcrumb.Item>\n            <Breadcrumb.Item>\u5e94\u7528\u5217\u8868</Breadcrumb.Item>\n            <Breadcrumb.Item>\u67d0\u5e94\u7528</Breadcrumb.Item>\n          </Breadcrumb>\n        </div>\n        <div className="ant-layout-container">\n          <div className="ant-layout-content">\n            <div style={{ height: 590 }}>\n              \u5185\u5bb9\u533a\u57df\n            </div>\n          </div>\n        </div>\n        <div className="ant-layout-footer">\n        Ant Design \u7248\u6743\u6240\u6709 \xa9 2015 \u7531\u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\u652f\u6301\n        </div>\n      </div>\n    </div>\n  </BrowserDemo>\n, mountNode);',style:".ant-layout-aside {\n  position: relative;\n  min-height: 100%;\n}\n\n.ant-layout-aside .ant-layout-logo {\n  width: 150px;\n  height: 32px;\n  background: #333;\n  border-radius: 6px;\n  margin: 16px 24px 16px 28px;\n}\n\n.ant-layout-aside .ant-layout-sider {\n  width: 224px;\n  background: #404040;\n  position: absolute;\n  overflow: auto;\n  padding-bottom: 24px;\n  height: 100%;\n}\n\n.ant-layout-aside .ant-layout-sider > .ant-menu {\n  margin-bottom: 20px;\n}\n\n.ant-layout-aside .ant-layout-header {\n  background: #fff;\n  height: 64px;\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.ant-layout-aside .ant-layout-breadcrumb {\n  margin: 7px 0 -17px 24px;\n}\n\n.ant-layout-aside .ant-layout-main {\n  margin-left: 224px;\n}\n\n.ant-layout-aside .ant-layout-container {\n  margin: 24px 16px;\n}\n\n.ant-layout-aside .ant-layout-content {\n  background: #fff;\n  padding: 24px;\n}\n\n.ant-layout-aside .ant-layout-footer {\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  font-size: 12px;\n  color: #999;\n  background: #fff;\n  border-top: 1px solid #e9e9e9;\n  width: 100%;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.ant-layout-aside</span> </span><span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">min-height</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.ant-layout-aside</span> <span class="token class">.ant-layout-logo</span> </span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">150</span>px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">32</span>px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#333</span><span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">6</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">16</span>px <span class="token number">24</span>px <span class="token number">16</span>px <span class="token number">28</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.ant-layout-aside</span> <span class="token class">.ant-layout-sider</span> </span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">224</span>px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#404040</span><span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token number">24</span>px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.ant-layout-aside</span> <span class="token class">.ant-layout-sider</span> > <span class="token class">.ant-menu</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">20</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.ant-layout-aside</span> <span class="token class">.ant-layout-header</span> </span><span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">64</span>px<span class="token punctuation">;</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> <span class="token number">1</span>px solid <span class="token hexcode">#e9e9e9</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.ant-layout-aside</span> <span class="token class">.ant-layout-breadcrumb</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">7</span>px <span class="token number">0</span> -<span class="token number">17</span>px <span class="token number">24</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.ant-layout-aside</span> <span class="token class">.ant-layout-main</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">224</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.ant-layout-aside</span> <span class="token class">.ant-layout-container</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">24</span>px <span class="token number">16</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.ant-layout-aside</span> <span class="token class">.ant-layout-content</span> </span><span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">24</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.ant-layout-aside</span> <span class="token class">.ant-layout-footer</span> </span><span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">64</span>px<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">64</span>px<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">12</span>px<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#999</span><span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n  <span class="token property">border-top</span><span class="token punctuation">:</span> <span class="token number">1</span>px solid <span class="token hexcode">#e9e9e9</span><span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'
}}});