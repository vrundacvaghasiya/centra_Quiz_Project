import { Typography } from "@mui/material";
import { theme } from "../assets/Theme";
import Grid from "@mui/material/Grid2";
import { default as TextField } from "./TextField";
import { default as Select } from "./Dropdown";
import { styles } from "./CustomerInfo";

const OrderDetails = ({orderDetails, setOrderDetails, handleChange}) => {
  return (
    <Grid
      size={7}
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
        Order Details
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
              Branch
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>
          <>
            <Select
              name="branch"
              options={[
                { name: "AA", value: "AA" },
                { name: "AB", value: "AB" },
                { name: "AC", value: "AC" },
                { name: "AD", value: "AD" },
              ]}
              label="Select Branch"
              value={orderDetails.branch.value ?? ""}
              error={orderDetails.branch.error}
              helperText={orderDetails.branch.helperText}
              handleChange={(e) =>
                handleChange(
                  {
                    target: {
                      value: e.target.value,
                      name: "branch",
                      checkValidity: () => {
                        return true;
                      },
                    },
                  },
                  setOrderDetails
                )
              }
            />
          </>
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
              Remeasure Required?
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
              { name: "Yes", value: "Yes" },
              { name: "No", value: "No" },
            ]}
            label="Select Remeasure Required"
            value={orderDetails.remeasure.value ?? ""}
            handleChange={(e) =>
              handleChange(
                {
                  target: {
                    value: e.target.value,
                    name: "remeasure",
                    checkValidity: () => {
                      return true;
                    },
                  },
                },
                setOrderDetails
              )
            }
            error={orderDetails.remeasure.error}
            helperText={orderDetails.remeasure.helperText}
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
              Order Type
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
              { name: "Supply & Install", value: "Supply & Install" },
              { name: "Supply Only", value: "Supply Only" },
            ]}
            label="Select Branch"
            value={orderDetails.orderType.value ?? ""}
            handleChange={(e) =>
              handleChange(
                {
                  target: {
                    value: e.target.value,
                    name: "orderType",
                    checkValidity: () => {
                      return true;
                    },
                  },
                },
                setOrderDetails
              )
            }
            error={orderDetails.orderType.error}
            helperText={orderDetails.orderType.helperText}
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
              Delivery Zone?
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
              { name: "AA", value: "AA" },
              { name: "BB", value: "BB" },
            ]}
            label="Select Delivery Zone"
            value={orderDetails.deliveryZone.value ?? ""}
            handleChange={(e) =>
              handleChange(
                {
                  target: {
                    value: e.target.value,
                    name: "deliveryZone",
                    checkValidity: () => {
                      return true;
                    },
                  },
                },
                setOrderDetails
              )
            }
            error={orderDetails.deliveryZone.error}
            helperText={orderDetails.deliveryZone.helperText}
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
              Home Depot Order
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
              { name: "H1", value: "H1" },
              { name: "H2", value: "H2" },
            ]}
            label="Select Option"
            value={orderDetails.homeDepot.value ?? ""}
            handleChange={(e) =>
              handleChange(
                {
                  target: {
                    value: e.target.value,
                    name: "homeDepot",
                    checkValidity: () => {
                      return true;
                    },
                  },
                },
                setOrderDetails
              )
            }
            error={orderDetails.homeDepot.error}
            helperText={orderDetails.homeDepot.helperText}
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
              Payment Type?
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
              { name: "Cash", value: "Cash" },
              { name: "Card", value: "Card" },
            ]}
            label="Select Payment Type"
            value={orderDetails.paymentType.value ?? ""}
            handleChange={(e) =>
              handleChange(
                {
                  target: {
                    value: e.target.value,
                    name: "paymentType",
                    checkValidity: () => {
                      return true;
                    },
                  },
                },
                setOrderDetails
              )
            }
            error={orderDetails.paymentType.error}
            helperText={orderDetails.paymentType.helperText}
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
              Lead Source
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>
          <TextField
            id="price"
            value={orderDetails.leadSource.value}
            onChange={(e) =>
              handleChange(
                {
                  target: {
                    value: e.target.value,
                    name: "leadSource",
                    checkValidity: () => {
                      return true;
                    },
                  },
                },
                setOrderDetails
              )
            }
            sx={{ width: "60%" }}
            error={orderDetails.leadSource.error}
            helperText={orderDetails.leadSource.helperText}
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
              Sell Price (Before Tax)
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>
          <TextField
            id="price"
            value={orderDetails.sellPrice.value}
            onChange={(e) =>
              handleChange(
                {
                  target: {
                    value: e.target.value,
                    name: "sellPrice",
                    checkValidity: () => {
                      return true;
                    },
                  },
                },
                setOrderDetails
              )
            }
            sx={{ width: "60%" }}
            error={orderDetails.sellPrice.error}
            helperText={orderDetails.sellPrice.helperText}
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
              Estimator
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
              { name: "E1", value: "E1" },
              { name: "E2", value: "E2" },
            ]}
            label="Select Estimator"
            value={orderDetails.estimator.value ?? ""}
            handleChange={(e) =>
              handleChange(
                {
                  target: {
                    value: e.target.value,
                    name: "estimator",
                    checkValidity: () => {
                      return true;
                    },
                  },
                },
                setOrderDetails
              )
            }
            error={orderDetails.estimator.error}
            helperText={orderDetails.estimator.helperText}
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
              List Price
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>
          <TextField
            id="price"
            value={orderDetails.listPrice.value}
            onChange={(e) =>
              handleChange(
                {
                  target: {
                    value: e.target.value,
                    name: "listPrice",
                    checkValidity: () => {
                      return true;
                    },
                  },
                },
                setOrderDetails
              )
            }
            sx={{ width: "60%" }}
            error={orderDetails.listPrice.error}
            helperText={orderDetails.listPrice.helperText}
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
              Marketer
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>
          <TextField
            id="price"
            value={orderDetails.marketer.value}
            onChange={(e) =>
              handleChange(
                {
                  target: {
                    value: e.target.value,
                    name: "marketer",
                    checkValidity: () => {
                      return true;
                    },
                  },
                },
                setOrderDetails
              )
            }
            sx={{ width: "60%" }}
            error={orderDetails.marketer.error}
            helperText={orderDetails.marketer.helperText}
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
              Deposit Value
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>
          <TextField
            id="price"
            value={orderDetails.depositValue.value}
            onChange={(e) =>
              handleChange(
                {
                  target: {
                    value: e.target.value,
                    name: "depositValue",
                    checkValidity: () => {
                      return true;
                    },
                  },
                },
                setOrderDetails
              )
            }
            sx={{ width: "60%" }}
            error={orderDetails.depositValue.error}
            helperText={orderDetails.depositValue.helperText}
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
        ></Grid>
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
              Discount %
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>
          <TextField
            id="price"
            value={orderDetails.discount.value}
            onChange={(e) =>
              handleChange(
                {
                  target: {
                    value: e.target.value,
                    name: "discount",
                    checkValidity: () => {
                      return true;
                    },
                  },
                },
                setOrderDetails
              )
            }
            sx={{ width: "60%" }}
            error={orderDetails.discount.error}
            helperText={orderDetails.discount.helperText}
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
        ></Grid>
        <Grid
          size={6}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          paddingLeft={1}
          paddingBottom={1}
        >
          <Grid>
            <Typography
              variant="caption"
              sx={styles.typography}
            >
              Commission %
            </Typography>
            <Typography
              variant="caption"
              sx={styles.inputRequire}
            >
              *
            </Typography>
          </Grid>
          <TextField
            id="price"
            value={orderDetails.commission.value}
            onChange={(e) =>
              handleChange(
                {
                  target: {
                    value: e.target.value,
                    name: "commission",
                    checkValidity: () => {
                      return true;
                    },
                  },
                },
                setOrderDetails
              )
            }
            sx={{ width: "60%" }}
            error={orderDetails.commission.error}
            helperText={orderDetails.commission.helperText}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default OrderDetails;
