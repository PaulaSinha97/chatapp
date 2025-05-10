import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
//   MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Login(props:any) {
  const navigate = useNavigate();
    const [cred,setCred] = useState({email:'',password:''})
    useEffect(() => {
      console.log(cred);
    }, [cred])

    function loginUser() {
        if(cred.email && cred.password){
          fetch('http://localhost:3000/auth/login', {
              method: 'POST',
              body: JSON.stringify({email:cred.email,password : cred.password}),
              headers: {
                Accept: 'application/json,',
                'Content-Type':'application/json; charset=UTF-8',
                // 'Content-Length': Buffer.byteLength(data),
                // 'Cookie': cookies,
            },
            })
            .then(response => response.json())
            .then(data =>{
   if(data){
      navigate('/home');
      // navigate('//contact', { replace: true }); // replace the current history entry
   }
            })}
      }

  return (
    <MDBContainer className="my-5" style={{color:'red',background:'black',border: '1px solid red',
      padding: '150px'}}>

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            {/* <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/> */}
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign, into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onBlur={(e:any)=>{setCred({...cred, email:e.target.value})}}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"  onBlur={(e:any)=>{setCred({...cred, password:e.target.value})}}/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={loginUser}>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;