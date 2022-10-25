import { TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Welcome from "../components/Welcome";
const dummyText = {
  title: "Welcome! First things first...",
  subTitle: "You can always change them later.",
};
const FirstStep = () => {
  const { control } = useFormContext();
  return (
    <>
      <Welcome data={dummyText} />
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <>
            <Typography variant="h6" align="left">
              Full Name
            </Typography>

            <TextField
              id="first-name"
              label="Steve Jobs"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              margin="normal"
              {...field}
            />
          </>
        )}
      />

      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <>
            <Typography variant="h6" align="left">
              Display Name
            </Typography>

            <TextField
              id="first-name"
              label="Steve"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              margin="normal"
              {...field}
            />
          </>
        )}
      />
    </>
  );
};

export default FirstStep;
