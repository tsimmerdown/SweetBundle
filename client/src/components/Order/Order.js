import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Typography,
} from "@material-ui/core";
import Panels from "../Panels/Panels";
import { motion } from "framer-motion";

const Cont = styled(motion.div)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputCont = styled.div`
  margin-top: 1vh;
`;

const SubmitButton = styled(Button)`
  && {
    background: #383838;
    margin-top: 1vh;
    :hover {
      background: white;
      color: black;
    }
  }
`;

const TitleCont = styled.div`
  padding: 10vh 0;
  margin: 10vh 0 5vh 0;
  width: 100%;
  position: relative;
`;

const Title = styled(motion(Typography))``;

const containerVariants = {
  initial: {
    visibility: "hidden",
    opacity: 0,
    transition: {
      delay: 1,
    },
  },
  animate: {
    visibility: "visible",
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
  exit: {
    visibility: "visible",
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string("Enter your phone number")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
});

const Order = () => {
  const [delivery, setDelivery] = useState(false);

  const formik = useFormik({
    initialValues: {
      //   email: "foobar@example.com",
      //   phone: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const deliveryHandler = (event) => {
    event.target.value === "delivery" ? setDelivery(true) : setDelivery(false);
  };

  return (
    <>
      <Cont
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <TitleCont>
          <div
            style={{
              display: "flex",
              overflow: "hidden",
              position: "absolute",
              paddingleft: "100%",
              left: "35%",
            }}
          >
            <Title
              variant="h2"
              initial={{
                x: "100%",
              }}
              animate={{
                x: "-100%",
              }}
              transition={{
                repeat: Infinity,
                duration: "6",
                ease: [0.2, 0.2, 0.2, 0.2],
              }}
            >
              <Typography variant="h2">Inquire About Your Order</Typography>
            </Title>
          </div>
        </TitleCont>
        <form onSubmit={formik.handleSubmit} style={{ width: "50vw" }}>
          <InputCont style={{ display: "flex" }}>
            <TextField
              style={{ flexGrow: 1, marginRight: "10px" }}
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              style={{ flexGrow: 1 }}
              id="phone"
              name="phone"
              label="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </InputCont>
          <InputCont>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </InputCont>
          <InputCont style={{ marginTop: "2vh" }}>
            <FormLabel component="legend">Pickup / Delivery</FormLabel>
            <RadioGroup
              aria-label="Pickup / Delivery"
              name="pickup/delivery"
              onChange={deliveryHandler}
            >
              <FormControlLabel
                value="pickup"
                control={<Radio />}
                label="Pickup"
              />
              <FormControlLabel
                value="delivery"
                control={<Radio />}
                label="Delivery"
              />
            </RadioGroup>
          </InputCont>
          <InputCont>
            <TextField
              fullWidth
              id="datetime-local"
              label="Date required"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </InputCont>
          {delivery && (
            <InputCont>
              <TextField
                fullWidth
                id="deliveryAddress"
                name="deliveryAddress"
                label="Delivery Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                // error={formik.touched.name && Boolean(formik.errors.name)}
                // helperText={formik.touched.name && formik.errors.name}
              />
            </InputCont>
          )}
          <InputCont>
            <TextField
              fullWidth
              multiline
              rows="5"
              id="order"
              name="order"
              label="Order Requests"
              placeholder="Choose from the menu options and enter order here (include design and color requests)"
              value={formik.values.order}
              onChange={formik.handleChange}
              // error={formik.touched.name && Boolean(formik.errors.name)}
              // helperText={formik.touched.name && formik.errors.name}
            />
          </InputCont>
          <SubmitButton
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Submit
          </SubmitButton>
        </form>
      </Cont>
      <Panels />
    </>
  );
};

export default Order;
