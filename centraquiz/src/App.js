import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { theme } from "./assets/Theme";
import FileViewer from "react-file-viewer";
import CustomerInfo from "./components/CustomerInfo";
import OrderDetails from "./components/OrderDetails";
import ProductSummary from "./components/ProductSummary";
import { useCustomHook } from "./hooks/MyCustomeHook";

function App() {
  const {
    files,
    handleFileChange,
    handleDrop,
    convertPdF,
    handleChange,
    setCustomerInfo,
    customerInfo,
    setOrderDetails,
    orderDetails,
    setSummary,
    summary,
  } = useCustomHook();

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "center",
        background: theme.palette.background.main,
      }}
    >
      <Grid
        id="capture"
        container
        width={"100%"}
        sx={{ background: theme.palette.primary.contrastText }}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        paddingBottom={1}
      >
        <Grid size={12}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              width: "100%",
              background: theme.palette.primary.main,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              paddingLeft: 1,
              color: theme.palette.typography.light,
            }}
          >
            New Order Intake - Supply & install
          </Typography>
        </Grid>
        <Grid
          container
          width={"100%"}
          padding={1}
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <CustomerInfo
            customerInfo={customerInfo}
            setCustomerInfo={setCustomerInfo}
            handleChange={handleChange}
          />
          <OrderDetails
            handleChange={handleChange}
            orderDetails={orderDetails}
            setOrderDetails={setOrderDetails}
          />
          <ProductSummary
            handleChange={handleChange}
            summary={summary}
            setSummary={setSummary}
          />

          <Grid
            size={6}
            sx={{
              border: `1px solid ${theme.palette.typography.contrastText}`,
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="body"
              component="div"
              sx={{
                background: theme.palette.background.main,
                paddingLeft: 1,
                color: theme.palette.secondary.contrastText,
                fontWeight: "bold",
              }}
            >
              Attachments {console.log(files)}
            </Typography>
            <Grid
              size={12}
              onDrop={handleDrop}
              onDragOver={(event) => event.preventDefault()}
              height={"92%"}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "#fafafa",
                cursor: "pointer",
              }}
            >
              <input
                type="file"
                hidden
                id="browse"
                onChange={handleFileChange}
                // accept=".pdf,.docx,.pptx,.txt,.xlsx"
                multiple
              />
              <label htmlFor="browse" className="browse-btn">
                Drag here or click to add files
              </label>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          size={12}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"end"}
          textAlign={"end"}
        >
          <Button
            variant="contained"
            onClick={convertPdF}
            sx={{
              width: "150px",
              marginRight: 2,
              background: theme.palette.primary.main,
            }}
          >
            Submit
          </Button>

          <Button
            variant="outlined"
            sx={{
              width: "150px",
              background: theme.palette.background.main,
              border: `1px solid ${theme.palette.background.main}`,
              color: theme.palette.secondary.contrastText,
            }}
          >
            Cancel
          </Button>
        </Grid>
        {files?.map((item, i) => {
          return (
            <div
              id="image1"
              key={i}
              style={{ width: "100%", textAlign: "center" }}
            >
              <FileViewer
                fileType={item.type.split("/")[1]}
                filePath={item.url}
              />
            </div>
          );
        })}
      </Grid>
    </Box>
  );
}

export default App;

