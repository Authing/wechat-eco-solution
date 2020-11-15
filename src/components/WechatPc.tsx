import { Button } from 'antd';
import React from 'react';
import { CodeBlock, nord } from 'react-code-blocks';
import { authing } from '../authing';
import { DocLayout } from '../layouts/DocLayout';

export const WechatPc = () => {
  return (
    <DocLayout
      document={
        <div>
          <p>详细文档请见：<a href="https://docs.authing.co/social-login/web/wechat-pc.html" target="_blank" rel="noopener noreferrer">接入微信 PC 扫码登录</a></p>
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
      example={
        <Button onClick={() => {
          authing.social.authorize('wechat:pc', {
            popup: false,
            onSuccess: (user) => {
              console.log(user)
            },
            onError: (code, message) => {
              console.error(code, message)
            }
          })
        }}>
          使用微信登录
          </Button>
      }
    />
  );
}
