import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createForm } from "../../services/Form";
import { Button, Input, message, Form, Select } from "antd";
import { PATHS } from "../../constants/paths";
import "./Form.css";
import { AuthContext } from "../../context/AuthContext";

const FormComponent = () => {
  const {
    user: { id },
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const submitSuccess = () => {
    message.open({
      type: "success",
      content: "This is a success message",
    });

    navigate(PATHS.home);
  };

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const submitHandler = async (values) => {
    setSubmitButtonDisabled(true);

    const data = {
      ...values,
      userId: id,
    };

    try {
      await createForm(data);

      submitSuccess();
    } catch (err) {
      console.error(err);
    }

    setSubmitButtonDisabled(false);
  };

  return (
    <section className="p-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="p-4 bg-light rounded" style={{ maxWidth: "700px" }}>
            <Form
              name="createForm"
              className="mt-4"
              autoComplete="off"
              layout="vertical"
              onFinish={submitHandler}
            >
              <Form.Item name="subject" label="Form Type">
                <Select
                  style={{
                    width: 200,
                  }}
                  options={[
                    {
                      value: "Subject Hours",
                      label: "Subject Hours",
                    },
                    {
                      value: "OverLoad Hours",
                      label: "OverLoad Hours",
                    },
                    {
                      value: "Subjects Request",
                      label: "Subjects Request",
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item label="Description" name="description">
                <Input.TextArea placeholder="Enter description" />
              </Form.Item>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormComponent;
