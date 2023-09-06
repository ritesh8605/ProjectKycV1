import { useState } from "react";
import axios from "../../DataAccess/AxiosTemp";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import '../../Common//Styles.css';



function VoterSignUp() {



  const history = useHistory();

  const [VoterSignUpDtl, setVoterSignUpDtl] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    contact: "",
    ageProof: "",

  })

  const process = () => {

    if (VoterSignUpDtl.password != conPass.confirmPassword) {
      console.log("Password Not equal ")
      
    }
    else {
      
      addvoterdtl();
      localStorage.setItem("emailforVoterAddressAddUses",VoterSignUpDtl.email);
      history.push("/AddressDtlOfVoter");
    }
  }

  const [conPass, seconPass] = useState("confirmPassword");


  const VoterDtlChange = (args) => {
    var copyofvoter = { ...VoterSignUpDtl };

    copyofvoter[args.target.name] = args.target.value;
    setVoterSignUpDtl(copyofvoter);
  }

  const conpasschange = (args) => {
    var copyofpass = { ...conPass };

    copyofpass[args.target.name] = args.target.value;
    seconPass(copyofpass);
  }


  const addvoterdtl = async () => {
    try {
      const result = await axios.post('/authorize/signupforvoter', VoterSignUpDtl, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      

    }
    catch (error) {
      console.log("Error Occured" + error);
    }
  }
  

  return <>

    <div>
      <div className="jumbotron" style={{ backgroundColor: 'rgb(250, 248, 228)' }} >
        <center><h1>Voter Sign Up</h1></center>
        <center><h2>Enter Details</h2></center>
        <center><h2>1/2</h2></center>

      </div>
    </div>




    <div className="container-fluid text-center">

      <div className="row content">
        <div className="col-lg-5 sidenav">

          <div>
            <div><center><big>First Name</big></center></div>
            <input type="text" placeholder="Enter First Name" className="custom-select" name="firstName" value={VoterSignUpDtl.firstName} onChange={VoterDtlChange}></input>
          </div>

          <br></br>
          <div>
            <div><center><big>Last Name</big></center></div>
            <input type="text" placeholder="Enter Last Name" className="custom-select" name="lastName" value={VoterSignUpDtl.lastName} onChange={VoterDtlChange}></input>
          </div>

          <br></br>
          <div>
            <div><center><big>DOB</big></center></div>
            <input type="date" className="custom-select" name="dob" value={VoterSignUpDtl.dob} onChange={VoterDtlChange}></input>
          </div>

          <br></br>
          <div>
            <div><center><big>Age Proof</big></center></div>
            <input type="number" placeholder="Enter A Valid Id number" className="custom-select" name="ageProof" value={VoterSignUpDtl.ageProof} onChange={VoterDtlChange}></input>
          </div>


        </div>
        <div className="col-lg-2 text-center">

        </div>
        <div className="col-lg-5 sidenav">

          <div>
            <div><center><big>Enter A Valid Email</big></center></div>
            <input type="text" placeholder="Enter Email" className="custom-select" name="email" value={VoterSignUpDtl.email} onChange={VoterDtlChange}></input>
          </div>

          <br></br>
          <div>
            <div><center><big>Password</big></center></div>
            <input type="text" placeholder="Enter the Password" className="custom-select" name="password" value={VoterSignUpDtl.password} onChange={VoterDtlChange}></input>
          </div>

          <br></br>
          <div>
            <div><center><big>Confirm Password</big></center></div>
            <input type="text" placeholder="Confirm Password" className="custom-select" name="confirmPassword" value={conPass.confirmPassword} onChange={conpasschange}></input>
          </div>

          <br></br>
          <div>
            <div><center><big>Contact</big></center></div>
            <input type="number" placeholder="Enter Contact Number" className="custom-select" name="contact" value={VoterSignUpDtl.contact} onChange={VoterDtlChange}></input>
          </div>

        </div>
      </div>
      <br></br><br></br>
      <div><button type="button" class="btn btn-success" onClick={process}>Next</button></div>
    </div>


  </>
}

export default VoterSignUp;