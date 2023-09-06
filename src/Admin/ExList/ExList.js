import { useState } from "react";

import HeadNav from "../../Common/HeadNav";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import TableRows from "./TableRows";

function ExList() {

    const [AllCandidate, setAllCandidate] = useState([{ CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }, { CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }, { CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }, { CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }, { CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }])

    const history=useHistory();
    const CandidateProfile=()=>{
        history.push("/CandidateProfile");
    }
    return <>

        <HeadNav></HeadNav>

        <div class="jumbotron">
            <center>
                <p>
                    List of Ex Candidate
                </p>
            </center>
        </div>

        <br></br>

        <div className="container-fluid text-center">

            <div className="row content">
                <div className="col-lg-2 sidenav">
                </div>
                <div className="col-lg-8 text-center">


                    <br></br>
                    <br></br>
                    <div>
                        <div><center><big>Serach Candidate by name</big></center></div>
                        <br></br>
                        <input type="text" placeholder="Enter Candidate or Region" className="form-control"></input>
                    </div>

                    <div>
                        <br></br>
                        <button type="button" class="btn btn-success" onClick={CandidateProfile}>Search</button>

                    </div>

                </div>
            </div>
        </div>

<br></br>
        <div className="row content">
            <div className="col-lg-2 sidenav">
            </div>
            <div className="col-lg-8 sidenav">

                <table className='table table-bordered myTable'>
                    <tbody>
                        {
                            AllCandidate.map((candidate) => {
                                return <TableRows key={candidate.CandidateId}
                                    candidate={candidate}
                                    CandidateProfile={CandidateProfile}
                                />
                            })
                        }
                    </tbody>
                </table>


            </div>
            <div className="col-lg-2 sidenav">
            </div>
        </div>
    </>
}

export default ExList;