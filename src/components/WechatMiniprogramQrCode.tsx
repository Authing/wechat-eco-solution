import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { CodeBlock, CopyBlock, nord } from 'react-code-blocks';
import '../App.css';
import { authing } from '../authing';
import { DocLayout } from '../layouts/DocLayout';

export const WechatMiniprogramQrCode = () => {
  const [loading, setLoading] = useState(true)
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) return;
    setStarted(true);
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
      },
      onCodeShow: () => {
        setLoading(false)
      }
    });
  }, [started, authing]);

  return (
    <div>

      <DocLayout
        document={
          <div>
            <p>详细文档请见：<a href="https://docs.authing.co/sdk/sdk-for-node/authentication/QrCodeAuthenticationClient.html" target="_blank" rel="noopener noreferrer">扫码登录模块</a></p>
            <CodeBlock
              text={`
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
`}
              language={'js'}
              showLineNumbers={false}
              theme={nord}
            />
          </div>
        }
        example={
          <div>

            {
              loading && <div className="loading">
                加载中 ...
              </div>
            }
            <div id="qrcode"></div>
          </div>
        }
      />
    </div>
  );
}