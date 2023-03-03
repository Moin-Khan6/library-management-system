import { Box, Grid, Stack,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/button'
import Input from '../../components/input/input'
import firebaseMethods from '../../config/firebase/firebaseMethods'
import { signInvalidUser } from '../../store/authSlice'
import ProgressCircular from '../../components/circularProgress'
import { ToastContainer } from 'react-toastify';
import {  toastError, toastInfo, toastSuccess } from "../../utils/helper";



function SignIn() {
 const dispatch =  useDispatch()
 const auth = useSelector((state) => state.auth.auth)

  const [signInData, setSignInData] = useState({})
  const [loader, setLoader] = useState(false)
  const [validUser,setValidUser] = useState(false)
  const navigate = useNavigate()

  const signInUser = () => {
    if(!signInData.email){
      alert("Email is Required")
      return
    }
    if(!signInData.password){
      alert("Password is Required")
      return
    }
    setLoader(true)
  
    const SignInPromise = firebaseMethods.SignInUser(signInData)
    SignInPromise.then((resolve) =>{
            dispatch(signInvalidUser())
            setValidUser(true)
            setLoader(false)
          }).catch((fail)=>{       
            toastError("Bad User Credentials")
                    setLoader(false)})
  }
  
    const SingUpPage = () =>{
      navigate('/sign-up')
    }

    //******navigate only when Valid User Action is dispatched*******/
    useEffect(()=>{
      if(auth){
        navigate('dash-board')
      }
    })

  return (
    <Grid container>

      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} margin="auto">

      {loader ? <ProgressCircular/>
       :

        <Stack
        direction="row"
        alignItems="center"
        mt={34}
        spacing={1}
        justifyContent="center"
        sx={{ height: "40vh" }}
        >
          <Box
            width="70%"
            className='border'
            padding={3}
            sx={{ height: "40vh", border: "1px solid", borderRadius: "5px" }}
            >
            <Stack
              spacing={2}
              justifyContent="center"
              sx={{ height: "80%" }}
              direction="column"
              alignItems="center"
              >
              <Box className='w-75'>
                <Typography variant="h6">Login To Your Account</Typography>
              
              </Box>

              <Box className='w-75'>
                <Input
                placeholder={"email"}
                name={"data"}
                title={"Email"}
                type="text"
                value={signInData.email} 
                   onChange ={(e) => {setSignInData({...signInData,email:e.target.value})}}
              />    
                        </Box>
              <Box className='w-75'>
                <Input
                placeholder={"Password"}
                name={"data"}
                title={"Password"}
                type="password"
                value={signInData.password} 
                 onChange ={(e) => {setSignInData({...signInData,password:e.target.value})}} 
              /> 
              </Box>
              <Box className='w-75  d-flex justify-content-between'>
            
                <Button  disabled = {loader}
                  onClick={signInUser}
           
                  title="Login"
                  >
                </Button>
                <Button  disabled = {loader}
                  onClick={SingUpPage}
                  
                  title="Sign Up"
                >
                </Button>
            
              </Box>
            </Stack>
          </Box>
        
        
        </Stack>
        
    }  
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
      theme="light" />
      </Grid>
    </Grid> 
     )
}

export default SignIn