import { Typography } from "@mui/material";
import { theme } from "../assets/Theme";
import { default as TextField } from "./TextField";
import Grid from "@mui/material/Grid2";
export const styles = {
    typography: {
        color: theme.palette.typography.contrastText,
        fontWeight: "bold",
        paddingRight: "2px",
    },
    inputRequire: {
        color: theme.palette.typography.main,
        fontWeight: "bold",
        paddingRight: "2px",
        fontSize: "14px"
    },
  };


const CustomerInfo = ({ customerInfo, setCustomerInfo, handleChange }) => {
  return (
    <Grid
      size={5}
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
        Customer Information
      </Typography>
      <Grid
        size={12}
        display={"flex"}
        rowSpacing={2}
        flexDirection={"row"}
        paddingLeft={1}
        paddingTop={"4px"}
      >
        <Grid
          size={6}
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
              Customer Number
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
            name="custNumber"
            value={customerInfo.custNumber.value}
            onChange={(e) => handleChange(e, setCustomerInfo)}
            error={customerInfo.custNumber.error}
            helperText={customerInfo.custNumber.helperText}
          />
        </Grid>
        <Grid
          size={6}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          paddingLeft={1}
        >
          <Grid>
            <Typography
              variant="caption"
              sx={styles.typography}
            >
              Street Address
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>
          <TextField
            value={customerInfo.address.value}
            name="address"
            onChange={(e) => handleChange(e, setCustomerInfo)}
            palceholder="Address"
            sx={{ width: "50%", innerHeight: "10%" }}
            error={customerInfo.address.error}
            helperText={customerInfo.address.helperText}
          />
        </Grid>
      </Grid>
      <Grid
        size={12}
        display={"flex"}
        rowSpacing={2}
        flexDirection={"row"}
        paddingLeft={1}
        paddingTop={"4px"}
      >
        <Grid
          size={6}
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
              Work coder
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>
          <TextField
            value={customerInfo.workOrder.value}
            name="workOrder"
            onChange={(e) => handleChange(e, setCustomerInfo)}
            palceholder="A12405"
            error={customerInfo.workOrder.error}
            helperText={customerInfo.workOrder.helperText}
          />
        </Grid>
        <Grid
          size={6}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          paddingLeft={1}
          paddingTop={"4px"}
        >
          <Grid>
            <Typography
              variant="caption"
              sx={styles.typography}
            >
              Province
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>
          <TextField
            value={customerInfo.province.value}
            name="province"
            onChange={(e) => handleChange(e, setCustomerInfo)}
            palceholder="BC"
            sx={{ width: "50%", innerHeight: "10%" }}
            error={customerInfo.province.error}
            helperText={customerInfo.province.helperText}
          />
        </Grid>
      </Grid>
      <Grid
        size={12}
        display={"flex"}
        rowSpacing={2}
        flexDirection={"row"}
        paddingLeft={1}
        paddingTop={"4px"}
      >
        <Grid
          size={6}
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
              Customer Name
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>
          <TextField
            value={customerInfo.custName.value}
            name="custName"
            onChange={(e) => handleChange(e, setCustomerInfo)}
            palceholder="John Don"
            error={customerInfo.custName.error}
            helperText={customerInfo.custName.helperText}
          />
        </Grid>
        <Grid
          size={6}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          paddingLeft={1}
          paddingTop={"4px"}
        >
          <Grid>
            <Typography
              variant="caption"
              sx={styles.typography}
            >
              City
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>
          <TextField
            value={customerInfo.city.value}
            name="city"
            onChange={(e) => handleChange(e, setCustomerInfo)}
            palceholder="Lesely"
            sx={{ width: "50%", innerHeight: "10%" }}
            error={customerInfo.city.error}
            helperText={customerInfo.city.helperText}
          />
        </Grid>
      </Grid>
      <Grid
        size={12}
        display={"flex"}
        rowSpacing={2}
        flexDirection={"row"}
        paddingLeft={1}
        paddingTop={"4px"}
      >
        <Grid
          size={6}
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
              Email
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>
          <TextField
            value={customerInfo.email.value}
            name="email"
            onChange={(e) => handleChange(e, setCustomerInfo)}
            palceholder="Johndon@gmail.com"
            inputProps={{
              type: "email",
            }}
            error={customerInfo.email.error}
            helperText={customerInfo.email.helperText}
          />
        </Grid>
        <Grid
          size={6}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          paddingLeft={1}
          paddingTop={"4px"}
        >
          <Grid>
            <Typography
              variant="caption"
              sx={styles.typography}
            >
              Postal Code
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>

          <TextField
            value={customerInfo.postalCode.value}
            name="postalCode"
            onChange={(e) => handleChange(e, setCustomerInfo)}
            inputProps={{
              pattern: "^[KLMPN]\\d[A-Za-z]\\s?\\d[A-Za-z]\\d$",
            }}
            palceholder="V113000"
            sx={{ width: "50%", innerHeight: "10%" }}
            error={customerInfo.postalCode.error}
            helperText={customerInfo.postalCode.helperText}
          />
        </Grid>
      </Grid>
      <Grid
        size={12}
        display={"flex"}
        rowSpacing={2}
        flexDirection={"row"}
        paddingLeft={1}
        paddingTop={"4px"}
      >
        <Grid
          size={6}
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
              Phone Number
            </Typography>

            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>

          <TextField
            value={customerInfo.phoneNumber.value}
            name="phoneNumber"
            onChange={(e) => handleChange(e, setCustomerInfo)}
            palceholder="604-121-1214"
            inputProps={{
              pattern: "[416][0-9]{9}",
            }}
            error={customerInfo.phoneNumber.error}
            helperText={customerInfo.phoneNumber.helperText}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default CustomerInfo;
