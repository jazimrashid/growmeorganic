import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function Form() {
  const [errorMessage, setErrorMessage] = useState("");  
  const navigate = useNavigate();   //--->For Routing
  const [formData, setFormData] = useState({    //--->Setting Initial State of Input Fields
    email: "",
    password: "",
    name: "",
  });
//---> On click of Submit Button if these formalities dont match then Changing state of Error message
  const handleSubmit = (event) => { 
    event.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      formData.password.length < 8 ||
      formData.email.indexOf("@") != -1
    ) {
      setErrorMessage(
        "please enter all your correct details : valid email, password length>=8"
      );
      return;
    }
    setErrorMessage("");
    const data = new FormData(event.currentTarget);
//----> Setting Form data to current input fields and saving to local storage
    setFormData({
      email: data.get("email"),
      password: data.get("password"),
    });
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/Home");  //---->navigating to home on submit event
  };
  //----> on changing of input fields 
  const handleChange = (event) => {
    setFormData({
      ...formData,//----->... is a spread opreator
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="Name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
        <h6>
          {errorMessage && (
            <div style={{ color: "red", fontFamily: "Monospace" }}>
              {errorMessage}
            </div>
          )}
        </h6>
      </ThemeProvider>
    </>
  );
}
