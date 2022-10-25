import React from "react";
import Welcome from "../components/Welcome";
import DoneIcon from "@mui/icons-material/Done";
import { IconButton } from "@mui/material";
const dummyText = {
  title: "Congratulations, Eren!",
  subTitle: "You have completed onboarding, you can start using the Eden!",
};
const FourStep = () => {
  return (
    <>
      <div
        style={{
          width: "150px",
          margin: "50px auto",
          height: "80px",
        }}
      >
        <IconButton
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#664DE5",
            marginLeft: "30px",
          }}
        >
          <DoneIcon
            style={{
              width: "40px",
              height: "40px",
              background: "none",
              color: "#fff",
              backgroundColor: "#664DE5",
            }}
          />
        </IconButton>
      </div>
      <Welcome data={dummyText} />
    </>
  );
};

export default FourStep;
