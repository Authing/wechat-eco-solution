# Authing x 微信解决方案

- [运行项目](#运行项目)
- [接入示例](#接入示例)
  - [接入 PC 扫码登录](#接入-pc-扫码登录)
  - [接入微信网页授权登录](#接入微信网页授权登录)
  - [接入移动端拉起微信登录](#接入移动端拉起微信登录)
  - [接入小程序登录](#接入小程序登录)
  - [接入小程序扫码登录](#接入小程序扫码登录)
  - [移动端拉起小程序登录](#移动端拉起小程序登录)

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

func loginByWeChatCode() {
    //通过微信SDK返回的认证码登陆 https://docs.authing.cn/social-login/mobile/wechat.html
    let code = "xxxxxxx"
    self.client?.loginByWeChatCode(code: code, completion: { status in
        print(status)
    })
}
```

