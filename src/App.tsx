import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Tabs, Col, Row } from 'antd';
import { WechatMiniprogramQrCode } from './components/WechatMiniprogramQrCode';
import { WechatPc } from './components/WechatPc';
import WechatWebpageAuthorization from './components/WechatWebpageAuthorization';
import { Intro } from './components/Intro';
import { WechatMobile } from './components/WechatMobile';
import { WechatMiniProgram } from './components/WechatMiniprogram';
import { WechatMiniprogramAppLaunch } from './components/WechatMiniprogramAppLaunch';
const { TabPane } = Tabs;

function App() {

  return (
    <Row >
      <Col span={4}></Col>
      <Col span={16}>
        <div>
          <Tabs type="card">
            <TabPane tab="开发指引" key="intro">
              <Intro />
            </TabPane>
            <TabPane tab="PC 扫码登录" key="pc">
              <WechatPc />
            </TabPane>
            <TabPane tab="微信网页授权登录" key="web">
              <WechatWebpageAuthorization />
            </TabPane>
            <TabPane tab="移动端拉起微信登录" key="wechat-mobile">
              <WechatMobile />
            </TabPane>
            <TabPane tab="小程序登录" key="miniprogram-default">
              <WechatMiniProgram />
            </TabPane>
            <TabPane tab="小程序扫码登录" key="miniprogram-qrcode">
              <WechatMiniprogramQrCode />
            </TabPane>
            <TabPane tab="移动端拉起小程序登录" key="miniprogram-app-launch">
              <WechatMiniprogramAppLaunch />
            </TabPane>
          </Tabs>

        </div>

      </Col>
      <Col span={4}></Col>
    </Row>
  );
}

export default App;
