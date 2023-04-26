import './App.css';
import {
  Button,
  Form,
  InputNumber,
  Card,
  Upload,
  Row, Col
} from 'antd';
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';

const onFinish = (values) => {
  console.log(values)
}

function App() {
  return (
    <Card style={{ width: 500, height: 500 }}>
      <Form
        onFinish={onFinish}
        layout="horizontal"
      >
        <Row>
          <Col>
            <Form.Item label={"Profil Resmi"} style={{ width: "100%" }} valuePropName="fileList">
              <Upload listType='picture' action="http://localhost:3000/upload" accept=".jpg,.jpeg,.png" maxCount={1}>
                <Button icon={<UploadOutlined />} >Resim Yükle</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Form.Item label="Genişlik" name={"width"}>
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col offset={2} span={10}>
            <Form.Item label="Uzunluk" name={"height"}>
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Form.Item style={{ width: "100%" }}>
            <Button htmlType='submit' block>Gönder</Button>
          </Form.Item>
        </Row>

      </Form>
    </Card>
  );
}

export default App;
