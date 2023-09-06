
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "../Common/Styles.css"
import { useState } from 'react';
import axios from '../DataAccess/AxiosTemp';
import Cookies from 'js-cookie';
function Login() {


    const history= useHistory();

    const SignUpVoter=()=>{
        history.push("/SignUpVoter")
    }


    const[loginDtl,setloginDtl] = useState({
        email:"",
        password:""
    })


    const loginDtlchange = (args) => {
        var copyofidpass = { ...loginDtl };

        copyofidpass[args.target.name] = args.target.value;
        setloginDtl(copyofidpass);
    }

    const LoggedIn=()=>{

        if(loginDtl.email != undefined && loginDtl.password != undefined){
            callAxios();
        }

    }

    
    const callAxios = async () => {
        try {
          
          const response = await axios.post('authorize/signin', loginDtl);
      
      
          sessionStorage.setItem("LoggedUserData",JSON.stringify(response.data))

          debugger;
          history.push("/LoggedIn");
        } catch (error) {
          console.error('Error sending data:', error);
        }
      };



    
   



   


    return <>




        <header className="header">

            <div className="header-buttons">
                <h4>Want To Sign Up As Voter ..</h4>
                <button className="header-button" onClick={SignUpVoter}>Sign Up</button>
            </div>

        </header>


        <div>
            <div class="jumbotron" style={{ backgroundColor: 'white' }} >

            </div>
        </div>

        <div class="container ">

            <div class="form-group">
                <label class="control-label col-sm-2"></label>
                <div class="col-sm-10">
                    <center><b>Email</b></center>
                    <br></br>
                    <input type="email" class="custom-select" placeholder="Enter Email" name="email" value={loginDtl.email} onChange={loginDtlchange} ></input>

                </div>
                <br></br><br></br>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="pwd"></label>
                <div class="col-sm-10">
                    <br></br>
                    <center><b>Password</b></center>
                    <br></br>
                    <input type="password" class="custom-select" placeholder="Enter password" name="password" value={loginDtl.password} onChange={loginDtlchange}></input>
                </div>
            </div>
            <br></br><br></br><br></br>

            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <br></br>
                    <button className="header-button" onClick={() => { LoggedIn() }} class="btn btn-success">{console.log("hi")}Login</button>
                </div>
                <div class="col-sm-12">
                    <center><p><a href="#">Forget Password? Click Here</a></p></center>
                </div>
            </div>

        </div>

    </>
}

export default Login;


// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import axios from '../DataAccess/AxiosTemp';

// function Login() {
//     const [loggedUser, setLoggedUser] = useState({
//         token: "",
//         type: "",
//         id: "",
//         firstName: "",
//         lastName: "",
//         email: "",
//         userType: ""
//     });
//     const history = useHistory();
//     const [loginDtl, setLoginDtl] = useState({
//         email: "",
//         password: ""
//     });

//     const loginDtlChange = (event) => {
//         const { name, value } = event.target;
//         setLoginDtl({ ...loginDtl, [name]: value });
//     };

//     const login = async () => {
//         try {
//             const result = await axios.post('/authorize/signin', loginDtl, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 },
//             });

//             const user = result.data;
//             setLoggedUser(user);

//             // Store user data in cookies
//             setCookie('loggedUser', JSON.stringify(user), 7);

//             if (user.token !== undefined) {
//                 history.push('/LogTheUser');
//             } else {
//                 console.log("Invalid Id or password");
//             }
//         } catch (error) {
//             console.log("Error Occurred: " + error);
//         }
//     };

//     // Function to set a cookie
//     const setCookie = (name, value, days) => {
//         const expires = new Date();
//         expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
//         const cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
//         document.cookie = cookie;
//     };

//     const SignUpVoter = () => {
//         history.push("/SignUpVoter");
//     };

//     return (
//         <>
//             <header className="header">
//                 <div className="header-buttons">
//                     <h4>Want To Sign Up As Voter ..</h4>
//                     <button className="header-button" onClick={SignUpVoter}>Sign Up</button>
//                 </div>
//             </header>
//             <div>
//                 <div class="jumbotron" style={{ backgroundColor: 'white' }}></div>
//             </div>
//             <div class="container">
//                 <div class="form-group">
//                     <label class="control-label col-sm-2"></label>
//                     <div class="col-sm-10">
//                         <center><b>Email</b></center>
//                         <br></br>
//                         <input type="email" class="custom-select" placeholder="Enter Email" name="email" value={loginDtl.email} onChange={loginDtlChange}></input>
//                     </div>
//                     <br></br><br></br>
//                 </div>
//                 <div class="form-group">
//                     <label class="control-label col-sm-2" for="pwd"></label>
//                     <div class="col-sm-10">
//                         <br></br>
//                         <center><b>Password</b></center>
//                         <br></br>
//                         <input type="password" class="custom-select" placeholder="Enter password" name="password" value={loginDtl.password} onChange={loginDtlChange}></input>
//                     </div>
//                 </div>
//                 <br></br><br></br><br></br>
//                 <div class="form-group">
//                     <div class="col-sm-offset-2 col-sm-10">
//                         <br></br>
//                         <button className="header-button" onClick={login} class="btn btn-success">Login</button>
//                     </div>
//                     <div class="col-sm-12">
//                         <center><p><a href="#">Forget Password? Click Here</a></p></center>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Login;


// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import axios from '../DataAccess/AxiosTemp';

// function Login() {
//     const [loggedUser, setLoggedUser] = useState({
//         token: "",
//         type: "",
//         id: "",
//         firstName: "",
//         lastName: "",
//         email: "",
//         userType: ""
//     });
//     const history = useHistory();
//     const [loginDtl, setLoginDtl] = useState({
//         email: "",
//         password: ""
//     });

//     const loginDtlChange = (event) => {
//         const { name, value } = event.target;
//         setLoginDtl({ ...loginDtl, [name]: value });
//     };

//     const login = async () => {
//         try {
//             const result = await axios.post('/authorize/signin', loginDtl, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 },
//             });

//             const user = result.data;
//             setLoggedUser(user);

//             // Store user data in cookies
//             setCookie('loggedUser', JSON.stringify(user), 7);

//             if (user.token !== undefined) {
//                 history.push('/LogTheUser');
//             } else {
//                 console.log("Invalid Id or password");
//             }
//         } catch (error) {
//             console.log("Error Occurred: " + error);
//         }
//     };

//     // Function to set a cookie
//     const setCookie = (name, value, days) => {
//         const expires = new Date();
//         expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
//         const cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
//         document.cookie = cookie;
//     };

//     const SignUpVoter = () => {
//         history.push("/SignUpVoter");
//     };

//     return (
//         <>
//             <header className="header">
//                 <div className="header-buttons">
//                     <h4>Want To Sign Up As Voter ..</h4>
//                     <button className="header-button" onClick={SignUpVoter}>Sign Up</button>
//                 </div>
//             </header>
//             <div>
//                 <div className="jumbotron" style={{ backgroundColor: 'white' }}></div>
//             </div>
//             <div className="container">
//                 <div className="form-group">
//                     <label className="control-label col-sm-2"></label>
//                     <div className="col-sm-10">
//                         <center><b>Email</b></center>
//                         <br></br>
//                         <input type="email" className="custom-select" placeholder="Enter Email" name="email" value={loginDtl.email} onChange={loginDtlChange}></input>
//                     </div>
//                     <br></br><br></br>
//                 </div>
//                 <div className="form-group">
//                     <label className="control-label col-sm-2" htmlFor="pwd"></label>
//                     <div className="col-sm-10">
//                         <br></br>
//                         <center><b>Password</b></center>
//                         <br></br>
//                         <input type="password" className="custom-select" placeholder="Enter password" name="password" value={loginDtl.password} onChange={loginDtlChange}></input>
//                     </div>
//                 </div>
//                 <br></br><br></br><br></br>
//                 <div className="form-group">
//                     <div className="col-sm-offset-2 col-sm-10">
//                         <br></br>
//                         <button className="header-button" onClick={login} className="btn btn-success">Login</button>
//                     </div>
//                     <div className="col-sm-12">
//                         <center><p><a href="#">Forget Password? Click Here</a></p></center>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Login;
