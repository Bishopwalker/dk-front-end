import React, {useState} from "react";
import {Button, Card, CardHeader, Divider, Grid, Modal, TextField, Typography,} from "@mui/material";
import {UserInfo} from "../../interfaces/UserInfo";
import axios from "axios";
import {Navigate} from "react-router-dom";

interface LoginSectionProps {
    userInfo: UserInfo,
    authorities: [{ authority: 'STRIPE_CUSTOMER'}],
}

const EmailPasswordSection:React.FC<LoginSectionProps> = ({ userInfo }) => {
  const [open, setOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
    const initState = userInfo.password ? "Changed" : "Not Changed";
    const [status, setStatus] =useState(initState);

    const handleOpen = () => {
    setOpen(true);
  };


React.useEffect(() => {
    if(userInfo.role==="USER" && status==="Not Changed"){
        setOpen(true)
    }
}, [userInfo]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleNewPasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setConfirmPassword(event.target.value);
  };

    const handleSubmit = async () => {
        if (newPassword === confirmPassword) {
            try {
                const response = await axios.put(
                    `https://api.northernneckgarbage.com/api/nngc/customers/${userInfo.id}`,
                    { password: newPassword },
                    {
                        headers: {
                            Authorization: userInfo.token,
                        },
                    }
                );

                if (response.data) {
                    // Perform necessary actions after a successful password update
                    // For example, you can show a success message to the user
                    alert("Password updated successfully!" + response.data.message);
                    setStatus("Changed");
                    handleClose();
                } else {
                    // Handle the error message from the API response
                    console.error(response.data.message);
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error(error.message);
                } else {
                    console.error('An error occurred:', error);
                }
            }
        }
    };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Card sx={{ mb: 2, textAlign: "center" }}>
          <CardHeader
            title={"Update Credentials"}
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
              fontWeight: "bold",
            }}
          >
            Email: {userInfo.email}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              pt: 1,
              pb: 2,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Password: {status}
          </Typography>

          <Button
            sx={{
              m: 2,
              backgroundColor: "#2C3E50",
              "&:hover": {
                backgroundColor: "#455A64",
              },
            }}
            variant="contained"
            onClick={handleOpen}
          >
            Change Password
          </Button>
        </Card>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: 400,
            bgcolor: "#F0F2F5",
            p: 2,
            borderRadius: "8px",
          }}
        >
          <CardHeader
            title="Change Password"
            sx={{ bgcolor: "#2C3E50", color: "#fff", textAlign: "center" }}
          />
          <Divider />
          <TextField
            sx={{
              mt: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#2C3E50",
                },
                "&:hover fieldset": {
                  borderColor: "#2C3E50",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2C3E50",
                },
              },
            }}
            label="New Password"
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            fullWidth
          />
          <TextField
            sx={{
              mt: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#2C3E50",
                },
                "&:hover fieldset": {
                  borderColor: "#2C3E50",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2C3E50",
                },
              },
            }}
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            fullWidth
          />
          <Button
            sx={{
              mt: 2,
              bgcolor: "#2C3E50",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#455A64",
              },
            }}
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Card>
      </Modal>
    </Grid>
  );
};

export default EmailPasswordSection;

