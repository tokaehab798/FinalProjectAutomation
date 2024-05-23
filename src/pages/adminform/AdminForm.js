import React, { useCallback, useEffect, useState } from "react";
import "./AdminForm.css";
import { getAllForms } from "../../services/adminForm";
import { saveAs } from "file-saver";
import { PDFDocument, rgb } from "pdf-lib";
import { Form, Select, Button, message } from "antd";
import { getAllStaff } from "../../services/staff";
import { forwardForm } from "../../services/Form";

function AdminForm() {
  const [allForms, setAllForms] = useState([]);

  const [form] = Form.useForm();

  const [handlingOptions, setHandlingOptions] = useState();

  const fetchAllForms = useCallback(async () => {
    try {
      const response = await getAllForms();
      setAllForms(response.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchAllForms();
  }, [fetchAllForms]);

  const downloadPDF = async (form) => {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    const { subject, description, userId } = form;

    page.drawText(`Subject: ${subject}`, {
      x: 50,
      y: 800,
      size: 20,
      color: rgb(0, 0, 0),
    });

    // Add content to the PDF
    page.drawText(`Handled By: ${userId?.name}`, {
      x: 50,
      y: 700,
      size: 20,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Description: ${description}`, {
      x: 50,
      y: 600,
      size: 20,
      color: rgb(0, 0, 0),
    });

    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // Convert bytes to a Blob
    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

    // Download the Blob as a PDF file
    saveAs(pdfBlob, "example.pdf");
  };

  const [allStaff, setAllStaff] = useState([]);

  const fetchAllStaff = useCallback(async () => {
    try {
      const response = await getAllStaff();
      const { data } = response;
      setAllStaff(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchAllStaff();
  }, [fetchAllStaff]);

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const submitHandler = async (values) => {
    setSubmitButtonDisabled(true);

    const data = {};
    let formId;

    Object.keys(values).forEach((key) => {
      if (key.startsWith("handledBy_")) {
        formId = key.split("handledBy_")[1];

        data.handledBy = values[key];
      }
    });

    try {
      await forwardForm(formId, data);

      message.open({
        type: "success",
        content: "This is a success message",
      });
    } catch (err) {
      console.error(err);
    }

    setSubmitButtonDisabled(true);
  };

  return (
    <section className="p-5">
      <div className="container" style={{ maxWidth: "600px" }}>
        <div className="go-back-container" style={{ marginLeft: "20px" }}>
          <a className="go-back-link" onClick={() => window.history.back()}>
            <i className="fas fa-arrow-left"></i> Go Back
          </a>
        </div>
        <div>
          {/* Render allForms */}
          {Array.isArray(allForms) &&
            allForms.map((adminForm, index) => (
              <div
                className="row p-5 bg-light align-items-center forms-row rounded"
                key={index}
              >
                <div className="col-lg-12">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <p className="fw-bold me-1 mb-0">Name:</p>
                        <p className="mb-0">{adminForm?.userId?.name}</p>
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        <p className="fw-bold me-1 mb-0">ID:</p>
                        <p className="mb-0">{adminForm._id}</p>
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        <p className="fw-bold me-1 mb-0">Form:</p>
                        <p className="mb-0">{adminForm.subject}</p>
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        <p className="fw-bold me-1 mb-0">Description:</p>
                        <p className="mb-0">{adminForm?.description}</p>
                      </div>
                    </div>

                    <button
                      className="btn btn-success ms-auto"
                      onClick={() => downloadPDF(adminForm)}
                    >
                      Download
                    </button>
                  </div>

                  <Form
                    form={form}
                    name={`adminForm_${adminForm._id}`}
                    className="mt-4"
                    autoComplete="off"
                    onFinish={submitHandler}
                  >
                    <Form.Item
                      name={`handlingOptions_${adminForm._id}`}
                      label="Handling Options"
                    >
                      <Select
                        style={{
                          width: 200,
                        }}
                        options={[
                          {
                            value: "myself",
                            label: "Handling by Myself",
                          },
                          {
                            value: "others",
                            label: "Handling by Others",
                          },
                        ]}
                        onSelect={(value) =>
                          setHandlingOptions((prev) => ({
                            ...prev,
                            [`handlingOptions_${adminForm._id}`]: value,
                          }))
                        }
                      />
                    </Form.Item>

                    {handlingOptions?.[`handlingOptions_${adminForm._id}`] ===
                      "others" && (
                      <div className="d-flex justify-content-between">
                        <Form.Item
                          name={`handledBy_${adminForm._id}`}
                          label="Handled By"
                        >
                          <Select
                            style={{
                              width: 200,
                            }}
                            options={allStaff?.map((member) => ({
                              value: member?.user?._id,
                              label: member?.user?.name,
                            }))}
                            placeholder="Select Staff Member"
                          />
                        </Form.Item>

                        <Form.Item>
                          <Button
                            type="success"
                            size="large"
                            htmlType="submit"
                            loading={submitButtonDisabled}
                          >
                            Send
                          </Button>
                        </Form.Item>
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default AdminForm;
