
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "../../DataAccess/AxiosTemp";




function CandidateSignUp() {

   

    const history=useHistory();
    const CandidateSignUp2=()=>{
        history.push("/CandidateSignUp2")
    }

    const [CandidateDtl,setCandidateDtl]= useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dob: "",
        contact: "",
        ageProof: ""
      });



  const process = () => {

    if (CandidateDtl.password != conPass.confirmPassword) {
      console.log("Password Not equal ")
      
    }
    else {
      
        addcandidatedtl();
      localStorage.setItem("emailforCandidateSignUpUses",CandidateDtl.email);
      CandidateSignUp2();
    }
  }

  const [conPass, seconPass] = useState("confirmPassword");


  const CandidateDtlChange = (args) => {
    var copyofcandidate = { ...CandidateDtl };

    copyofcandidate[args.target.name] = args.target.value;
    setCandidateDtl(copyofcandidate);
  }
  const conpasschange = (args) => {
    var copyofpass = { ...conPass };

    copyofpass[args.target.name] = args.target.value;
    seconPass(copyofpass);
  }


  const addcandidatedtl = async () => {
    try {
      const result = await axios.post('/authorize/signupforcandidate', CandidateDtl, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      

    }
    catch (error) {
      console.log("Error Occured" + error);
    }
  }

   
    return<>

        <div> 
            <div className="jumbotron" style={{backgroundColor:'rgb(250, 248, 228)'}} >
                <center><h1>Candidate Sign Up</h1></center>     
                <center><h2>Enter Details</h2></center>  
                <center><h2>1/3</h2></center>     

            </div>  
        </div>
    

  

    <div className="container-fluid text-center"> 

  <div className="row content">
    <div className="col-lg-5 sidenav">

    <div>
    <div><center><big>First Name</big></center></div>
    <input type="text" placeholder="Enter First Name" className="form-control" name="firstName" value={CandidateDtl.firstName
    } onChange={CandidateDtlChange}></input>
    </div>

    <br></br>
    <div>
    <div><center><big>Last Name</big></center></div>
    <input type="text" placeholder="Enter Last Name" className="form-control" name="lastName" value={CandidateDtl.lastName} onChange={CandidateDtlChange}></input>
    </div>

    <br></br>
    <div>
    <div><center><big>DOB</big></center></div>
    <input type="date" className="form-control" name="dob" value={CandidateDtl.dob} onChange={CandidateDtlChange}></input>
    </div>

    <br></br>
    <div>
    <div><center><big>Age Proof</big></center></div>
    <input type="number" placeholder="Enter A Valid Id number" className="form-control" name="ageProof" value={CandidateDtl.ageProof} onChange={CandidateDtlChange}></input>
    </div>
   

    </div>
    <div className="col-lg-2 text-center"> 

    </div>
    <div className="col-lg-5 sidenav">

    <div>
    <div><center><big>Enter A Valid Email</big></center></div>
    <input type="text" placeholder="Enter Email For UserID" className="form-control" name="email" required value={CandidateDtl.email} onChange={CandidateDtlChange}></input>
    </div>
      
    <br></br>
    <div>
    <div><center><big>Password</big></center></div>
    <input type="text" placeholder="Enter the Password" className="form-control" name="password" value={CandidateDtl.password} onChange={CandidateDtlChange}></input>
    </div>

    <br></br>
    <div>
    <div><center><big>Confirm Password</big></center></div>
    <input type="text" placeholder="Confirm Password" className="form-control" name="confirmPassword" value={conPass.confirmPassword} onChange={conpasschange}></input>
    </div>

    <br></br>
    <div>
    <div><center><big>Contact</big></center></div>
    <input type="text" placeholder="Enter Contact Number" className="form-control" name="contact" value={CandidateDtl.contact} onChange={CandidateDtlChange}></input>
    </div>

    </div>
  </div>
  <br></br><br></br>
  <div><button type="button" class="btn btn-success" onClick={process}>Next</button></div>
</div>


    </>
}

export default CandidateSignUp;