import React from 'react';
import { CodeBlock, nord } from 'react-code-blocks';


export const Intro = () => {
  return <div>
    <p>微信已经融入到中国国民生活的方方面面，微信天生的社交属性与庞大用户量的加持，使得集成微信登录已成为众多应用构建用户体系的首选。</p>
    <p>而微信平台平台众多，包含网页端、移动端、微信应用内、以及小程序，每一套都需要单独做开发，不可避免带来大量重复工作。</p>
    <p>现在 Authing 将微信所有端的登录集成了起来，并提供方便易用的 SDK，能够实现一行代码快速接入。</p>

    <p>Authing 目前提供的微信登录方式共有 6 种：</p>
    <ol>
      <li>PC 扫码登录 
        <a href="https://docs.authing.cn/social-login/web/wechat-pc.html" target="_blank" rel="noopener noreferrer">查看接入文档</a>，
      <a href="https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html" target="_blank" rel="noopener noreferrer">查看官方文档</a>
      </li>
      <li>微信网页授权授权 <a href="https://docs.authing.cn/social-login/web/wechat-mp.html" target="_blank" rel="noopener noreferrer">查看接入文档</a>，
      <a href="https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html" target="_blank" rel="noopener noreferrer">查看官方文档</a>
      </li>
      <li>移动端拉起微信登录 <a href="https://docs.authing.cn/social-login/mobile/wechat.html" target="_blank" rel="noopener noreferrer">查看接入文档</a>，
      <a href="https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Development_Guide.html" target="_blank" rel="noopener noreferrer">查看官方文档</a>
      </li>
      <li>微信小程序内登录 <a href="https://docs.authing.cn/social-login/miniprogram/miniprogram/" target="_blank" rel="noopener noreferrer">查看接入文档</a>，
      <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html" target="_blank" rel="noopener noreferrer">查看官方文档</a>
      </li>
      <li>使用小程序扫码登录 <a href="https://docs.authing.cn/scan-qrcode/wxapp-qrcode/" target="_blank" rel="noopener noreferrer">查看接入文档</a></li>
      <li>移动端拉起小程序登录 <a href="https://docs.authing.cn/social-login/miniprogram/app2wxapp.htm" target="_blank" rel="noopener noreferrer">查看接入文档</a>，
      <a href="https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Launching_a_Mini_Program/Launching_a_Mini_Program.html" target="_blank" rel="noopener noreferrer">查看官方文档</a>
      </li>
    </ol>

    <p>Authing 提供了 SDK，封装了复杂的从微信服务器换取用户信息、根据 openid unionid 机制识别绑定同一用户逻辑，开发者只需要指定一个登录成功事件回调函数即可，如接入 PC 端的微信扫码登录：
      
    </p>
    <CodeBlock
      text={`
import { AuthenticationClient } from "authing-js-sdk";

const authing = new AuthenticationClient({
  userPoolId: "YOUR_USERPOOL_ID",
});
authing.social.authorize('wechat:pc', {
  popup: false,
  onSuccess: (user) => {
    console.log(user)
  },
  onError: (code, message) => {
    console.error(code, message)
  }
})
          `}
      language={'js'}
      showLineNumbers={false}
      theme={nord}
    />
  </div>
}
