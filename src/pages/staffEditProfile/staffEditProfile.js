import React, { useContext, useState } from "react";
import { Button, Form, Upload, Input, message, Col, Flex, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  beforUploadTypeFileIsImage,
  beforUploadTypeFileIsPdf,
} from "../../helpers/image";
import { PATHS } from "../../constants/paths";
import "./staffEditProfile.css";
import { editStaffProfile } from "../../services/staff2";
import { AuthContext } from "../../context/AuthContext";

const StaffEditProfile = () => {
  const {
    user: { id },
  } = useContext(AuthContext);
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

    navigate(PATHS.departmentMembers);
  };

  const submitHandler = async (values) => {
    setSubmitButtonDisabled(true);

    try {
      await editStaffProfile(id, values);

      submitSuccess();
    } catch (err) {
      console.error(err);
      message.error("An error occurred while saving.");
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
        name="StaffEditForm"
        layout="vertical"
        autoComplete="off"
        onFinish={submitHandler}
      >
        <Row justify="center" align="middle">
          <Col lg={6} xs={24}>
            <Form.Item
              label="Profile Picture"
              name="profilePicture"
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

          <Col lg={6} xs={24}>
            <Form.Item
              label="Research Paper"
              name="researchPapers"
              valuePropName="fileList"
              getValueFromEvent={(e) => e.fileList} // Limit to 1 file
            >
              <Upload
                maxCount={1} // Limit to one file
                accept="application/pdf" // Specify PDF files
                listType="picture-card"
                beforeUpload={beforUploadTypeFileIsPdf}
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
                    Upload PDF
                  </div>
                </Button>
              </Upload>
            </Form.Item>
          </Col>

          <Col lg={12} xs={24}>
            <Flex vertical>
              <Form.Item label="Brief" name="brief">
                <Input placeholder="Enter title name" />
              </Form.Item>
              {/* <Form.Item label="Description" name="description">
                <Input.TextArea placeholder="Enter description" />
              </Form.Item> */}
            </Flex>
          </Col>
        </Row>

        <Row justify="center" align="middle">
          <Col lg={12} xs={24}>
            <Flex vertical>
              <Form.Item
                label="Subject Code"
                name="subjectHistory[0][subjectCode]"
              >
                <Input placeholder="Enter name" />
              </Form.Item>
              <Form.Item
                label="Subject Name"
                name="subjectHistory[0][subjectName]"
              >
                <Input placeholder="Enter title" />
              </Form.Item>
            </Flex>
          </Col>
        </Row>

        <Row justify="center">
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
        </Row>
      </Form>
    </section>
  );
};

export default StaffEditProfile;
