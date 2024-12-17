import React, { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import {
  initialCustomerInfo,
  initialOrderDetails,
  initialSummaryInfo,
} from "../utils/CommanLabel";

export function useCustomHook() {
  const [customerInfo, setCustomerInfo] = useState(initialCustomerInfo);
  const [summary, setSummary] = useState(initialSummaryInfo);
  const [orderDetails, setOrderDetails] = useState(initialOrderDetails);
  const [files, setFiles] = useState([]);

  React.useEffect(()=>{
    setCustomerInfo(customerInfo);
  },[customerInfo,summary,orderDetails,files])

  const updateFields = (updates, key) => {
    key((prevFormData) => {
      // Create a new object to avoid mutation
      const updatedFormData = { ...prevFormData };

      // Iterate over the updates object
      for (let key in updates) {
        if (updates.hasOwnProperty(key)) {
          // If the key exists in the form data, update it
          if (updatedFormData[key]) {
            updatedFormData[key] = {
              ...updatedFormData[key], // Preserve other properties (like helperText)
              ...updates[key], // Update only the fields that are passed
            };
          }
        }
      }

      return updatedFormData; // Return the updated form data object
    });
  };
  const handleChange = (e, state) => {
    const { name, value } = e.target;
    updateFields(
      {
        [name]: {
          value,
          error: value === "" || !e.target.checkValidity() ? true : false,
        },
      },
      state
    );
  };

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [
        ...prevFiles,
        {
          type: newFiles[0].type,
          url: URL.createObjectURL(event.target.files[0]),
        },
      ]);
    }
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setFiles((prevFiles) => [
        ...prevFiles,
        {
          type: newFiles[0].type,
          url: URL.createObjectURL(event.dataTransfer.files[0]),
        },
      ]);
    }
  };
  const convertPdF = async () => {
    Object.entries(customerInfo).map(([key, val]) => {
      return (
        val.value === "" &&
        updateFields(
          {
            [key]: {
              value: val.value,
              error: val.value === "" ? true : false,
              helperText: val.helperText,
            },
          },
          setCustomerInfo
        )
      );
    });
    Object.entries(orderDetails).map(([key, val]) => {
      return (
        val.value === "" &&
        updateFields(
          {
            [key]: {
              value: val.value,
              error: val.value === "" ? true : false,
              helperText: val.helperText,
            },
          },
          setOrderDetails
        )
      );
    });

    Object.entries(summary).map(([key, val]) => {
      return (
        val.value === "" &&
        updateFields(
          {
            [key]: {
              value: val.value,
              error: val.value === "" ? true : false,
              helperText: val.helperText,
            },
          },
          setSummary
        )
      );
    });

    const allObject = { ...orderDetails, ...customerInfo, ...summary };
    const isValid = Object.values(allObject).filter((i) => i.value === "");

    if (isValid.length <= 0) {
      const input = document.getElementById("capture");
      const canvas = await html2canvas(input);
      const data = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        
        disableFontFace: true,
        compress: true,
      });
      const imgProperties = pdf.getImageProperties(data);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

      pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight, "FAST");

      pdf.save("print.pdf");
      setCustomerInfo(initialCustomerInfo);
      setOrderDetails(initialOrderDetails);
      setSummary(summary);
      setFiles([]);
    }
  };

  return {
    summary,
    setSummary,
    orderDetails,
    setOrderDetails,
    customerInfo,
    setCustomerInfo,
    files,
    setFiles,
    handleChange,
    updateFields,
    handleFileChange,
    handleDrop,
    convertPdF,
  };
}
