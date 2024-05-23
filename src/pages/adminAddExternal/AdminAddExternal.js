import React, { useState } from "react";
import { Button, Form, Upload, Input, message, Col, Flex, Row, DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { beforUploadTypeFileIsImage } from "../../helpers/image";
import { PATHS } from "../../constants/paths";
import "./AdminAddExternal.css";
import { addExternalForm } from "../../services/externaltraining";


const AdminAddExternal = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const imageFileUploadedHandler = async (options) => {
    const { onSuccess, onError, file } = options;
    setIsLoading(true);

    try {
      onSuccess(file, file);
    } catch (err) {
      onError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const submitSuccess = () => {
    message.open({
      type: "success",
      content: "This is a success message",
    });

    navigate(PATHS.externaltraining2);
  };

  const submitHandler = async (values) => {
    setSubmitButtonDisabled(true);

    try {
      await addExternalForm(values);

      submitSuccess();
    } catch (err) {
      console.error(err);
    }

    setSubmitButtonDisabled(false);
  };

  return (
    <section className="container">
      <div className="go-back-container my-4" style={{ marginLeft: "20px" }}>
        <a className="go-back-link" onClick={() => window.history.back()}>
          <i className="fas fa-arrow-left"></i> Go Back
        </a>
      </div>

      <Form
        name="addExternalForm"
        layout="vertical"
        autoComplete="off"
        onFinish={submitHandler}
      >
        <Row justify="center" align="middle">
          <Col lg={6} xs={24}>
            <Form.Item
              label="Training Pic"
              name="trainingPic"
              valuePropName="fileList"
              getValueFromEvent={(e) => e.fileList}
            >
              <Upload
                maxCount={1}
                accept="image/*"
                listType="picture-card"
                beforeUpload={beforUploadTypeFileIsImage}
                customRequest={imageFileUploadedHandler}
               
              >
                <Button
                  style={{
                    border: 0,
                    background: "none",
                  }}
                  type="button"
                >
                  {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </Button>
              </Upload>
            </Form.Item>
          </Col>

          <Col lg={12} xs={24}>
            <Flex vertical>
              <Form.Item label="Title" name="title">
                <Input placeholder="Enter title name" />
              </Form.Item>
              <Form.Item label="Description" name="description">
                <Input.TextArea placeholder="Enter description" />
              </Form.Item>
              <Form.Item label="External Training Link" name="link">
                <Input.TextArea placeholder="Enter External Training link" />
              </Form.Item>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Starts From" name="startsFrom">
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Ends At" name="endsAt">
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
              </Row>
            </Flex>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="success"
            size="large"
            htmlType="submit"
            loading={submitButtonDisabled}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default AdminAddExternal;
