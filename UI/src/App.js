import './App.css';
import {
  Button,
  Form,
  InputNumber,
  Card,
  Upload,
  Row,
  Col,
  Slider,
  Switch,
} from 'antd';
import React from 'react';
import axios from "axios";
import { UploadOutlined } from '@ant-design/icons';


function App() {

  const onFinish = (values) => {
    axios.post('http://localhost:3000/data/', values)
      .then(response =>
        console.log(response)
      )
      .catch(error => console.log(error));
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
      <Card style={{ width: 500, height: 400 }}>
        <Form
          onFinish={onFinish}
          layout="horizontal"
        >
          <Row>
            <Col>
              <Form.Item label={"Profil Resmi"} style={{ width: "100%" }} name="image" required>
                <Upload listType='picture' action="http://localhost:3000/upload" accept=".jpg,.jpeg,.png" maxCount={1} >
                  <Button icon={<UploadOutlined />} >Resim Yükle</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name={"derece"} label={"Döndurme Derecesi"} initialValue={90}>
                <Slider min={1} max={360} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name={"ayna"} label={"Aynalama Yapılsın mı"} initialValue={false}>
                <Switch />
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
    </div>
  );
}

export default App;
