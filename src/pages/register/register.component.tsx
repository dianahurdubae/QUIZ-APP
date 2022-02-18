import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button, { ButtonProps } from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import { IUser } from "../../models/user";
import { register } from "../../state/reducers/userReducer";
import { testCategories, testDifficulties } from "./resister.constants";
import "./register.component.scss";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#77a6f7",
  "&:hover": {
    backgroundColor: "#0c53cf",
  },
}));

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [testCategory, setTestCategory] = useState("");
  const [testDifficulty, setTestDifficulty] = useState("");

  const handleTestCategoryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTestCategory(event.target.value);
  };

  const handleTestDifficultyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTestDifficulty(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user: IUser = {
      firstName: data.get("firstName") as string,
      lastName: data.get("lastName") as string,
      age: data.get("age") as string,
      email: data.get("email") as string,
      testCategory: data.get("testCategory") as string,
      testDifficulty: data.get("testDifficulty") as string,
    };
    dispatch(register(user));
    navigate("/test");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Register to start the quiz
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                autoComplete="age"
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
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="outlined-select-currency"
                select
                label="Test Category"
                value={testCategory}
                name="testCategory"
                onChange={handleTestCategoryChange}
                helperText="Please select test category"
              >
                {testCategories.map((option: any) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="outlined-select-currency"
                select
                label="Test Difficulty"
                value={testDifficulty}
                name="testDifficulty"
                onChange={handleTestDifficultyChange}
                helperText="Please select test difficulty"
              >
                {testDifficulties.map((option: any) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <ColorButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Begin Test
          </ColorButton>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
