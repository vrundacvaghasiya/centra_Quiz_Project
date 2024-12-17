import { Typography } from "@mui/material";
import { theme } from "../assets/Theme";
import Grid from "@mui/material/Grid2";
import { default as TextField } from "./TextField";
import { default as Select } from "./Dropdown";
import { styles } from "./CustomerInfo";

const ProductSummary = ({ summary, setSummary, handleChange }) => {
  return (
    <Grid
      size={6}
      sx={{
        border: `1px solid ${theme.palette.typography.contrastText}`,
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
        Product Summary
      </Typography>
      <Grid
        size={12}
        display={"flex"}
        rowSpacing={2}
        flexDirection={"row"}
        paddingLeft={1}
        paddingTop={"4px"}
      >
        <Grid size={6} display={"flex"} flexDirection={"column"}>
          <Grid
            size={12}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid>
              <Typography
                variant="caption"
                sx={styles.typography}
              >
                Windows
              </Typography>
              <Typography
                variant="caption"
                sx={styles.inputRequire}
              >
                *
              </Typography>
            </Grid>
            <TextField
              id="abc"
              value={summary.windows.value}
              onChange={(e) =>
                handleChange(
                  {
                    target: {
                      value: e.target.value,
                      name: "windows",
                      checkValidity: () => {
                        return true;
                      },
                    },
                  },
                  setSummary
                )
              }
              error={summary.windows.error}
              helperText={summary.windows.helperText}
            />
          </Grid>
          <Grid
            size={12}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            paddingTop={"5px"}
          >
            <Grid>
              <Typography
                variant="caption"
                sx={styles.typography}
              >
                Patio Doors
              </Typography>
              <Typography
                variant="caption"
                sx={styles.inputRequire}
              >
                *
              </Typography>
            </Grid>
            <TextField
              value={summary.patioDoors.value}
              onChange={(e) =>
                handleChange(
                  {
                    target: {
                      value: e.target.value,
                      name: "patioDoors",
                      checkValidity: () => {
                        return true;
                      },
                    },
                  },
                  setSummary
                )
              }
              palceholder="Address"
              sx={{ width: "50%", innerHeight: "10%" }}
              error={summary.patioDoors.error}
              helperText={summary.patioDoors.helperText}
            />
          </Grid>
          <Grid
            size={12}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            paddingTop={"5px"}
          >
            <Grid>
              <Typography
                variant="caption"
                sx={styles.typography}
              >
                Doors
              </Typography>
              <Typography
                variant="caption"
                sx={styles.inputRequire}
              >
                *
              </Typography>
            </Grid>
            <TextField
              value={summary.doors.value}
              onChange={(e) =>
                handleChange(
                  {
                    target: {
                      value: e.target.value,
                      name: "doors",
                      checkValidity: () => {
                        return true;
                      },
                    },
                  },
                  setSummary
                )
              }
              palceholder="Address"
              sx={{ width: "50%", innerHeight: "10%" }}
              error={summary.doors.error}
              helperText={summary.doors.helperText}
            />
          </Grid>
          <Grid
            size={12}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            paddingTop={"5px"}
          >
            <Grid>
              <Typography
                variant="caption"
                sx={styles.typography}
              >
                Sealed Units
              </Typography>
              <Typography
                variant="caption"
                sx={styles.inputRequire}
              >
                *
              </Typography>
            </Grid>
            <TextField
              value={summary.sealedUnits.value}
              onChange={(e) =>
                handleChange(
                  {
                    target: {
                      value: e.target.value,
                      name: "sealedUnits",
                      checkValidity: () => {
                        return true;
                      },
                    },
                  },
                  setSummary
                )
              }
              palceholder="Address"
              sx={{ width: "50%", innerHeight: "10%" }}
              error={summary.sealedUnits.error}
              helperText={summary.sealedUnits.helperText}
            />
          </Grid>
          <Grid
            size={12}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            paddingTop={"5px"}
          >
            <Grid>
              <Typography
                variant="caption"
                sx={styles.typography}
              >
                Others
              </Typography>
              <Typography
                variant="caption"
                sx={styles.inputRequire}
              >
                *
              </Typography>
            </Grid>
            <TextField
              value={summary.others.value}
              onChange={(e) =>
                handleChange(
                  {
                    target: {
                      value: e.target.value,
                      name: "others",
                      checkValidity: () => {
                        return true;
                      },
                    },
                  },
                  setSummary
                )
              }
              palceholder="Address"
              sx={{ width: "50%", innerHeight: "10%" }}
              error={summary.others.error}
              helperText={summary.others.helperText}
            />
          </Grid>
          <Grid
            size={12}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            paddingTop={"5px"}
          >
            <Grid>
              <Typography
                variant="caption"
                sx={styles.typography}
              >
                Submitter Email
              </Typography>
              <Typography
                variant="caption"
                sx={styles.inputRequire}
              >
                *
              </Typography>
            </Grid>
            <TextField
              value={summary.submitterEmail.value}
              name="submitterEmail"
              inputProps={{
                type: "email",
              }}
            onChange={(e) => handleChange(e, setSummary)}
              palceholder="Submitter Email"
              sx={{ width: "50%", innerHeight: "10%" }}
              error={summary.submitterEmail.error}
              helperText={summary.submitterEmail.helperText}
            />
          </Grid>
        </Grid>
        <Grid size={6} sx={{ paddingLeft: 1 }}>
          <Grid
            size={12}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            paddingTop={"5px"}
          >
            <Grid sx={{ width: "40%" }}>
              <Typography
                variant="caption"
                sx={styles.typography}
              >
                CleanBC IQP Code Required Before Ordering Product?
              </Typography>
              <Typography
                variant="caption"
                sx={styles.inputRequire}
              >
                *
              </Typography>
            </Grid>
            <Select
              options={[
                { name: "a", value: "a" },
                { name: "b", value: "b" },
              ]}
              label="select option"
              value={summary.iqpCode.value ?? ""}
              handleChange={(e) =>
                handleChange(
                  {
                    target: {
                      value: e.target.value,
                      name: "iqpCode",
                      checkValidity: () => {
                        return true;
                      },
                    },
                  },
                  setSummary
                )
              }
              error={summary.iqpCode.error}
              helperText={summary.iqpCode.helperText}
            />
          </Grid>
          <Grid
            size={12}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            paddingTop={"5px"}
          >
            <Grid sx={{ width: "40%" }}>
              <Typography
                variant="caption"
                sx={styles.typography}
              >
                Doors Saved in Codel Program?
              </Typography>
              <Typography
                variant="caption"
                sx={styles.inputRequire}
              >
                *
              </Typography>
            </Grid>
            <Select
              options={[
                { name: "N/A", value: "N/A" },
                { name: "Yes", value: "Yes" },
              ]}
              label="select option"
              value={summary.codelProgram.value ?? ""}
              handleChange={(e) =>
                handleChange(
                  {
                    target: {
                      value: e.target.value,
                      name: "codelProgram",
                      checkValidity: () => {
                        return true;
                      },
                    },
                  },
                  setSummary
                )
              }
              error={summary.codelProgram.error}
              helperText={summary.codelProgram.helperText}
            />
          </Grid>
          <Grid
            size={12}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            paddingTop={"5px"}
          >
            <Grid sx={{ width: "40%" }}>
              <Typography
                variant="caption"
                sx={styles.typography}
              >
                Was a Future Opportunity Created?
              </Typography>
            </Grid>
            <Select
              options={[
                { name: "N/A", value: "N/A" },
                { name: "Yes", value: "Yes" },
              ]}
              label="select option"
              value={summary.futureOpp.value ?? ""}
              handleChange={(e) =>
                handleChange(
                  {
                    target: {
                      value: e.target.value,
                      name: "futureOpp",
                      checkValidity: () => {
                        return true;
                      },
                    },
                  },
                  setSummary
                )
              }
              error={summary.futureOpp.error}
              helperText={summary.futureOpp.helperText}
            />
          </Grid>
          <Grid
            size={12}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            paddingTop={"5px"}
          >
            <Grid sx={{ width: "40%" }}>
              <Typography
                variant="caption"
                sx={styles.typography}
              >
                Alteration Drawing & Price Breakdown Submitted?
              </Typography>
              <Typography
                variant="caption"
                sx={styles.inputRequire}
              >
                *
              </Typography>
            </Grid>
            <Select
              options={[
                { name: "N/A", value: "N/A" },
                { name: "Yes", value: "Yes" },
              ]}
              label="select option"
              value={summary.drawingPrice.value ?? ""}
              handleChange={(e) =>
                handleChange(
                  {
                    target: {
                      value: e.target.value,
                      name: "drawingPrice",
                      checkValidity: () => {
                        return true;
                      },
                    },
                  },
                  setSummary
                )
              }
              error={summary.drawingPrice.error}
              helperText={summary.drawingPrice.helperText}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ProductSummary;
