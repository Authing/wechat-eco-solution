import React from 'react';
import { CodeBlock, nord } from 'react-code-blocks';
import { DocLayout } from '../layouts/DocLayout';

export const WechatMiniprogramAppLaunch = () => {
  return (
    <DocLayout
      document={
        <CodeBlock
          text={`
import SwiftyAuthing
let userPoolId = "YOUR_USERPOOL_ID"
self.client = AuthenticationClient(userPoolId: userPoolId)

func loginByWeChatMiniprogram() {
    self.client?.loginByWeChatMiniprogram(completion: { status in
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
          <img src="https://cdn.authing.cn/blog/2.gif" alt="" height="600" style={{
            cursor: "pointer"
          }} onClick={() => {
            window.open('https://github.com/authing/AuthingIOSDemo', '_blank')
          }} />
        </div>
      }
    />
  );
}
