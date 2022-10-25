import { TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Welcome from "../components/Welcome";

const dummyText = {
  title: "Let's set up a home for all your work",
  subTitle: "You can always create another workspace later.",
};

const SecondStep = () => {
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
              Workspace Name
            </Typography>

            <TextField
              id="first-name"
              label="Eden"
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
              Workspace URL <span style={{ color: "#ccc" }}>optional</span>
            </Typography>

            <TextField
              id="first-name"
              label="www.eden.com/   &nbsp;&nbsp;&nbsp;  Example"
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

export default SecondStep;
