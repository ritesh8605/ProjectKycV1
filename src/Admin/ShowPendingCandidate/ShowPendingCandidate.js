import { useState } from "react";
import HeadNav from "../../Common/HeadNav";



function ShowPendingCandidate() {


    const [message,setmessage]=useState("your Assembly proof is not valid correct it...Approved You Can Login Or Your Appliocation is in progesss");
    return <>

        <HeadNav></HeadNav>


        <div className="container-fluid text-center">

            <div className="row content">
                <div className="col-lg-5 sidenav">

                    <div>
                        <div><center><big>Candidate First Name</big></center></div>
                        <input type="text" className="form-control"></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Candidate Last Name</big></center></div>
                        <input type="text" className="form-control"></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Candidate Occupation</big></center></div>
                        <input type="text" className="form-control"></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Candidate Region</big></center></div>
                        <input type="text" className="form-control"></input>
                    </div>

                </div>
                <div className="col-lg-2 text-center">

                </div>
                <div className="col-lg-5 sidenav">

                    <div>
                        <div><center><big>Candidate Assembly</big></center></div>
                        <input type="text" className="form-control"></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Candidate Assembly Proof</big></center></div>
                        <input type="text" className="form-control"></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Candidate Quote</big></center></div>
                        <input type="text" className="form-control"></input>
                    </div>

                </div>
            </div>
            <br></br><br></br>
            <div><button type="button" class="btn btn-success">Approve</button></div>
        </div>

        <br></br><br></br>

        <div className="container" style={{textAlign:"center", width:"600px"}}>
    <div class="form-outline lg-4">
        <textarea class="form-control"rows="7"></textarea>
    </div>
    <br></br>
    <button className="btn btn-primary">Suggestion</button>
    </div>  



    </>
}

export default ShowPendingCandidate;