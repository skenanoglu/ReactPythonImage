import './App.css';
import { useState } from 'react';
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
  Image,
} from 'antd';
import React from 'react';
import axios from "axios";
import { UploadOutlined } from '@ant-design/icons';


function App() {
  const [resizedFileName, setResizedFileName] = useState('');
  const [inputValue, setInputValue] = useState(90);

  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  const onFinish = (values) => {
    /**
     * Axios, node.js ve tarayıcı için promise tabanlı HTTP İstemcisidir. 
     * izomorfik (= tarayıcıda ve node.js'de aynı kod tabanıyla çalışabilir). 
     * Sunucu tarafında yerel (native) node.js http modülünü, istemcide (tarayıcı) ise XMLHttpRequests'i kullanır.
     */
    axios.post('http://localhost:3000/data/', values)
      .then(response =>
        new Promise(resolve => {
          setTimeout(() => {
            setResizedFileName(response.data.filename)
          }, 1500);
        })
      )
      .catch(error => console.log(error));
  }
  return (
    <div style={{ marginTop: "50px", display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
      <Card style={{ background: "beige" }}>
        <Row>
          <Card style={{ width: 550, height: 400 }}>
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
                <Col span={20}>
                  <Form.Item name={"derece"} label={"Döndür °"} initialValue={inputValue}>
                    <Slider
                      min={1} max={360}
                      onChange={onChange}
                      value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                  </Form.Item>
                </Col>
                <Col span={2}>
                  <InputNumber
                    disabled
                    min={1} max={360}
                    value={inputValue}
                    onChange={onChange}
                  />
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
        </Row>
        <Row>
          <Card style={{ width: 550, height: 350 }}>
            <Image width={500} height={300} src={(resizedFileName.length < 2 ? undefined : require('./resized/'.concat(resizedFileName)))} />
          </Card>
        </Row>
      </Card>

    </div>
  );
}

export default App;
