# Authing x 微信解决方案

<div align=center>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<div align="center">
    <a href="https://forum.authing.cn/" target="_blank"><img src="https://img.shields.io/badge/chat-forum-blue" /></a>
    <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-success" alt="License"></a>
</div>

了解[微信生态解决方案](https://authing.cn/solution/wechat)。

- [Authing x 微信解决方案](#authing-x-微信解决方案)
  - [运行项目](#运行项目)
  - [接入示例](#接入示例)
    - [接入 PC 扫码登录](#接入-pc-扫码登录)
    - [接入微信网页授权登录](#接入微信网页授权登录)
    - [接入移动端拉起微信登录](#接入移动端拉起微信登录)
    - [接入小程序登录](#接入小程序登录)
    - [接入小程序扫码登录](#接入小程序扫码登录)
    - [移动端拉起小程序登录](#移动端拉起小程序登录)
  - [常见问题](#常见问题)
  - [开源共建](#开源共建)
  - [贡献](#贡献)
  - [开源许可](#开源许可)

## 运行项目

```
yarn
yarn start
```

<details>
<summary><strong>查看项目运行截图</strong></summary>

![](https://cdn.authing.cn/blog/20201115153530.png)

![](https://cdn.authing.cn/blog/20201115153548.png)

![](https://cdn.authing.cn/blog/20201115153610.png)
</details>

## 接入示例

### 接入 PC 扫码登录

> 什么是 [PC 扫码登录](https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html)？

你需要用到 [authing-js-sdk](https://docs.authing.co/sdk/sdk-for-node/authentication/SocialAuthenticationClient.html)，详细接入配置请见：[接入微信 PC 扫码登录](https://docs.authing.co/social-login/web/wechat-pc.html)。

代码示例：

```javascript
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
```

### 接入微信网页授权登录

> 什么是[微信网页授权登录](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html) ？

你需要用到 [authing-js-sdk](https://docs.authing.co/sdk/sdk-for-node/authentication/SocialAuthenticationClient.html)，详细接入配置请见：[接入微信网页授权登录](https://docs.authing.co/social-login/web/wechat-mp.html)。


代码示例：
```javascript
import { AuthenticationClient } from "authing-js-sdk";

const authing = new AuthenticationClient({
  userPoolId: "YOUR_USERPOOL_ID",
});
authing.social.authorize('wechat:webpage-authorization', {
  popup: false,
  onSuccess: (user) => {
    console.log(user)
  },
  onError: (code, message) => {
    console.error(code, message)
  }
})
```

### 接入移动端拉起微信登录

> 什么是[移动端拉起微信登录](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Development_Guide.html) ？

你需要用到 [authing-swift-sdk](https://docs.authing.co/sdk/sdk-for-swift.html)，详细接入配置请见：[接入移动端拉起微信登录](https://docs.authing.co/social-login/mobile/wechat.html)。

代码示例：
```javascript
import SwiftyAuthing
let userPoolId = "YOUR_USERPOOL_ID"
self.client = AuthenticationClient(userPoolId: userPoolId)

func loginByWeChatCode() {
    //通过微信SDK返回的认证码登陆 https://docs.authing.cn/social-login/mobile/wechat.html
    let code = "xxxxxxx"
    self.client?.loginByWeChatCode(code: code, completion: { status in
        print(status)
    })
}
```

### 接入小程序登录

> 什么是[小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html) ？

你需要用到 [authing-wxapp-sdk](https://docs.authing.co/sdk/sdk-for-wxapp.html)，详细接入配置请见：[接入移动端拉起微信登录](https://docs.authing.co/social-login/miniprogram/miniprogram/)。

代码示例：

1. 使用 code 登录，无需用户授权

```javascript
const { AuthenticationClient } = require("authing-wxapp-sdk")
const { code } = await wx.login()
const data = await authing.loginByCode(code)
```

2. 用户首次手动授权昵称头像

```javascript
// index.wxml
<button open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>

// index.js
const { AuthenticationClient } = require("authing-wxapp-sdk")

// 使用 code 登录，无需用户授权
const { code } = await wx.login()
const { iv, encryptedData } = e.detail
const user = await authing.loginByCode(code, { iv, encryptedData })         
```

3. 使用用户授权的手机号登录

```javascript
// index.wxml
<button open-type="getPhoneNumber" bindgetphonenumber="getPhone"> 获取手机号 </button>

// index.js
const { AuthenticationClient } = require("authing-wxapp-sdk")

const { code } = await wx.login()
const { iv, encryptedData } = e.detail
const user = await authing.loginByPhone(code, iv, encryptedData)
```

### 接入小程序扫码登录

> 什么是[小程序扫码登录](https://authing.cn/verify) ？

你需要用到 [authing-js-sdk](https://docs.authing.co/sdk/sdk-for-node/authentication/QrCodeAuthenticationClient.html)，详细接入配置请见：[接入小程序扫码登录](https://docs.authing.co/scan-qrcode/wxapp-qrcode/)。

代码示例：

```javascript
import { AuthenticationClient } from "authing-js-sdk";

const authing = new AuthenticationClient({
  userPoolId: "YOUR_USERPOOL_ID",
});
const onScanningSuccess = async (userInfo: any, ticket: string) => {
  const { token } = userInfo;
  if (!token) {
    userInfo = await authing.wxqrcode.exchangeUserInfo(ticket);
  }
  console.log(userInfo)
};

authing.wxqrcode.startScanning("qrcode", {
  onSuccess: onScanningSuccess,
  onError: (message) => {
    alert(message)
  }
});
```

### 移动端拉起小程序登录

> 什么是[移动到拉起小程序登录](https://docs.authing.co/social-login/miniprogram/app2wxapp.html) ？

你需要用到 [authing-swift-sdk](https://docs.authing.co/sdk/sdk-for-swift.html)，详细接入配置请见：[移动到拉起小程序登录](https://docs.authing.co/social-login/miniprogram/app2wxapp.html)。

代码示例：
```javascript
import SwiftyAuthing
let userPoolId = "YOUR_USERPOOL_ID"
self.client = AuthenticationClient(userPoolId: userPoolId)

func loginByWeChatMiniprogram() {
    self.client?.loginByWeChatMiniprogram(completion: { status in
        print(status)
    })
}
```

## 常见问题

如果需要在线技术支持，可访问[官方论坛](https://forum.authing.cn/). 此仓库的 issue 仅用于上报 Bug 和提交新功能特性。

## 开源共建

- Fork 此仓库
- 创建自己的 git 分支 (git checkout -b my-new-feature)
- 提交你的修改 (git commit -am 'Add some feature')
- 将修改内容推送到远程分支 (git push -u origin my-new-feature)
- 创建一个 Pull Request

## 贡献

https://github.com/Authing/.github/blob/main/CONTRIBUTING.md


## 开源许可

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Authing

