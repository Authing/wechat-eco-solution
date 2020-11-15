import React from 'react';
import { Row, Col } from 'antd';

export const DocLayout = (props: {
  document: any,
  example: any
}) => {
  const { document, example } = props
  return <div>
    <Row gutter={24}>
      <Col span={12}>
        <h2>代码示例</h2>
        {
          document
        }
      </Col>
      <Col span={12}>
        <h2>立即体验</h2>
        {
          example
        }
      </Col>
    </Row>
  </div>
} 