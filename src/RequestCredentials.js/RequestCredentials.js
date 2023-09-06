import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function RequestCredentials() {

    const history=useHistory();

    const Login=()=>{
        history.push("/Login")
    }

    const [message, setmessage] = useState("your application number is 854784567");

    return <>


        <div class="jumbotron">
            <div class="container">
                <div>Do you already have Credentials ? Click here{"                "}
                    <a class="btn btn-primary btn-lg" onClick={Login}>Login</a></div>
                <br></br>
            </div>
            <div className="container">
                <center>
                    <h2>
                        Candidate can Request here for Login Credentials
                    </h2>
                </center>
            </div>
        </div>


        <div className="container-fluid text-center">

            <div className="row content">
                <div className="col-lg-2 sidenav">
                </div>
                <div className="col-lg-8 text-center">

                    <div>
                        <div><center><big>First Name</big></center></div>
                        <input type="text" placeholder="Enter The First name" className="form-control"></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Last Name</big></center></div>
                        <input type="text" placeholder="Enter Last Name" className="form-control"></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Occupation</big></center></div>
                        <input type="text" placeholder="Enter your Occupation" className="form-control"></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Assembly Name</big></center></div>
                        <input type="text" placeholder="Enter The Assembly name" className="form-control"></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Assembly Proof</big></center></div>
                        <input type="number" placeholder="Enter your Assembly Number" className="form-control"></input>
                    </div>


                    <br></br>
                    <div>
                        <div><center><big>Your Quote</big></center></div>
                        <input type="text" placeholder="Enter your Quote" className="form-control"></input>
                    </div>

                    <br></br>Select The Region<br></br><br></br>
                    <select class="form-select form-select-lg lg-3" aria-label=".form-select-lg example">
                        <option selected disabled>Open this select menu</option>
                        <option value="1">Get</option>
                        <option value="2">data</option>
                        <option value="3">from</option>
                        <option value="3">db</option>
                    </select>

                    <div>
                        <br></br>
                        <button type="button" class="btn btn-success">Submit</button>

                    </div>


                </div>
                <div className="col-lg-2 sidenav">
                </div>
            </div>
        </div>

        <br></br>
        <div class="jumbotron">
            <div class="container">

                <center>
                    <p>{message}</p>
                </center>

            </div>
        </div>



    </>
}

export default RequestCredentials;