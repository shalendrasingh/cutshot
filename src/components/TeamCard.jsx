import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

const TeamCard = ({ data }) => {
  const { icon, title, desc, border } = data;
  return (
    <>
      <Card
        sx={{ maxWidth: 250 }}
        style={{ border: border ? "1px solid #664DE5" : null }}
      >
        <CardHeader avatar={icon} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default TeamCard;
