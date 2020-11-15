import React from 'react';
import { CodeBlock, nord } from 'react-code-blocks';
import { DocLayout } from '../layouts/DocLayout';

export const WechatMobile = () => {
  return (
    <DocLayout
      document={
        <CodeBlock
          text={`
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
          `}
          language={'swift'}
          showLineNumbers={false}
          theme={nord}
        />
      }
      example={
        <div>
          <p>点击图片查看示例 Demo</p>
          <img src="https://cdn.authing.cn/blog/output.gif" alt="" height="600" style={{
            cursor: "pointer"
          }} onClick={() => {
            window.open('https://github.com/authing/AuthingIOSDemo', '_blank')
          }} />
        </div>
      }
    />
  );
}
