import React from "react";
import { Avatar, Card, CardHeader, Divider, Typography } from "@mui/material";

const LoginSection = ({ userInfo }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader
        title={"Authentication Details"}
        sx={{
          textAlign: "center",
          backgroundColor: "#2C3E50",
          color: "#fff",
          fontWeight: "bold",
          letterSpacing: "1px",
          textTransform: "uppercase",
          borderBottom: "1px solid #ddd",
        }}
      />
      <Divider />
      <Typography
        variant="h6"
        sx={{
          pt: 2,
          pb: 1,
          textAlign: "center",
          fontWeight: "normal",
          fontSize: 24,
          color: "black",
        }}
      >
        Logged In: {userInfo.isLoggedIn ? "Yes" : "No"}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          pt: 1,
          pb: 2,
          textAlign: "center",
          fontWeight: "normal",
          fontSize: 24,
          color: "black",
        }}
      >
        Login Attempts: {userInfo.loginAttemptCount}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          pt: 1,
          pb: 2,
          textAlign: "center",
          fontWeight: "normal",
          fontSize: 24,
          color: "black",
        }}
      >
        Geolocation: {userInfo.geoLocation}
      </Typography>
    </Card>
  );
};

export default LoginSection;
