


import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function ShowApplicationStatus() {


    const history=useHistory();
    const Home=()=>{
        history.push("/");
    }
    const [message, setmessage] = useState("your Assembly proof is not valid correct it...Approved You Can Login Or Your Appliocation is in progesss");
    return <>

        <nav className="navbar " style={{ backgroundColor: "aqua" }}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Project KYC</a>
                </div>
                <div className="text-right">

                    <button className="btn btn-danger navbar-btn" onClick={Home}>Back</button>

                </div>

            </div>
        </nav>



        <br></br>
        <br></br>
        <br></br>

        <div className="row content">
            <div className="col-lg-2 sidenav"></div>
            <div className="col-lg-8 sidenav">

                <div>
                    <div><center><h4>Your Application Number</h4></center></div>
                    <br></br>

                    <input type="text" className="form-control"></input>
                    <br></br><br></br>
                    <div style={{ textAlign: "center" }}><button type="button" class="btn btn-success">Submit</button></div>
                </div>
            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
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

export default ShowApplicationStatus;