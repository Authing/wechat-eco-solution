import { Divider } from 'antd';
import React from 'react';
import { CodeBlock, nord } from 'react-code-blocks';
import { DocLayout } from '../layouts/DocLayout';

export const WechatMiniProgram = () => {
  return (
    <DocLayout
      document={
        <div>
          <p>1. 使用 code 登录，无需用户授权</p>
          <CodeBlock
            text={`
const { AuthenticationClient } = require("authing-wxapp-sdk")
const { code } = await wx.login()
const data = await authing.loginByCode(code)
          `}
            language={'js'}
            showLineNumbers={false}
            theme={nord}
          />

          <p>2. 用户首次手动授权昵称头像</p>
          <CodeBlock
            text={`
// index.wxml
<button open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>

// index.js
const { AuthenticationClient } = require("authing-wxapp-sdk")

// 使用 code 登录，无需用户授权
const { code } = await wx.login()
const { iv, encryptedData } = e.detail
const user = await authing.loginByCode(code, { iv, encryptedData })
          `}
            language={'js'}
            showLineNumbers={false}
            theme={nord}
          />
          <p>3. 使用用户授权的手机号登录</p>
          <CodeBlock
            text={`
// index.wxml
<button open-type="getPhoneNumber" bindgetphonenumber="getPhone"> 获取手机号 </button>

// index.js
const { AuthenticationClient } = require("authing-wxapp-sdk")

const { code } = await wx.login()
const { iv, encryptedData } = e.detail
const user = await authing.loginByPhone(code, iv, encryptedData)
          `}
            language={'js'}
            showLineNumbers={false}
            theme={nord}
          />
        </div>
      }
      example={
        <div>
          <p>点击图片查看完整 SDK 文档</p>
          <img src="https://cdn.authing.cn/blog/img_0951.PNG" alt="" height="600" style={{
            cursor: "pointer"
          }} onClick={() => {
            window.open('https://github.com/authing/authing-wxapp-sdk', '_blank')
          }} />
        </div>
      }
    />
  );
}
