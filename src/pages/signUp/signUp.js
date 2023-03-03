import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/input/input";
import firebaseMethods from "../../config/firebase/firebaseMethods";
import Button from "../../components/button/button";
import ProgressCircular from "../../components/circularProgress";
import { ToastContainer } from "react-toastify";
import { toastError } from "../../utils/helper";
import { signInvalidUser } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

function SignUp() {
  const dispatch = useDispatch();

  const [signUpData, setSignUpData] = useState({});
  const [loader, setLoader] = useState(false);

  const auth = useSelector((state) => state.auth.auth);

  const navigate = useNavigate();
  const loginPage = () => {
    navigate("/");
  };

  const signUpUser = () => {
    if (!signUpData.email) {
      alert("Email is Required");
      return;
    }
    if (!signUpData.password) {
      alert("Password is Required");
      return;
    }
    setLoader(true);

    let signUp = firebaseMethods.signUpUser(signUpData);
    signUp
      .then((success) => {
        setLoader(false);
        dispatch(signInvalidUser());
      })
      .catch((failure) => {
        setLoader(false);
        toastError("User Already Present");
      });
  };

  useEffect(() => {
    if (auth) {
      navigate("/dash-board");
    }
  });

  return (
    <Grid container>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {loader ? (
        <ProgressCircular />
      ) : (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} margin="auto">
          <Stack
            direction="row"
            alignItems="center"
            mt={34}
            spacing={1}
            justifyContent="center"
            sx={{ height: "40vh" }}
          >
            <Box width="70%" padding={3} className="border">
              <Stack
                spacing={2}
                justifyContent="center"
                sx={{ height: "90%" }}
                direction="column"
                alignItems="center"
              >
                <Box>
                  <Typography variant="h5">Creating Your Account</Typography>
                  <Typography variant="caption">
                    Login using Social Networks
                  </Typography>
                </Box>

                <Box className="w-75">
                  <InputField
                    title={"Name"}
                    type="text"
                    placeholder="name"
                    value={signUpData.name}
                    onChange={(e) => {
                      setSignUpData({ ...signUpData, name: e.target.value });
                    }}
                  />
                </Box>
                <Box className="w-75">
                  <InputField
                    title={"Email"}
                    type="email"
                    placeholder="email"
                    value={signUpData.email}
                    onChange={(e) => {
                      setSignUpData({ ...signUpData, email: e.target.value });
                    }}
                  />
                </Box>
                <Box className="w-75">
                  <InputField
                    title={"Email"}
                    type="password"
                    placeholder="password"
                    value={signUpData.password}
                    onChange={(e) => {
                      setSignUpData({
                        ...signUpData,
                        password: e.target.value,
                      });
                    }}
                  />
                </Box>
                <Box className=" w-75 d-flex justify-content-between">
                  <Button onClick={signUpUser} title="Sign Up"></Button>
                  <Button onClick={loginPage} title="Login"></Button>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      )}
    </Grid>
  );
}

export default SignUp;
