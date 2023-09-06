import { useState } from "react";
import HeadNav from "../../Common/HeadNav";
import TableRows from "./TableRows";

function RemoveCandidate() {

    const [AllCandidate, setAllCandidate] = useState([{ CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }, { CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }, { CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }, { CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }, { CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }])

    return <>


        <HeadNav></HeadNav>

        <div className="container-fluid text-center">

            <div className="row content">
                <div className="col-lg-2 sidenav">
                </div>
                <div className="col-lg-8 text-center">


                    <br></br>
                    <br></br>
                    <div>
                        <div><center><big>Serach by Canddiate or Region name </big></center></div>
                        <br></br>
                        <input type="text" placeholder="Enter Candidate or Region" className="form-control"></input>
                    </div>

                    <div>
                        <br></br>
                        <button type="button" class="btn btn-success">Search</button>

                    </div>
                    <br></br>
                    <table className='table table-bordered myTable'>
                        <tbody>
                            {
                                AllCandidate.map((candidate) => {
                                    return <TableRows key={candidate.CandidateId}
                                        candidate={candidate}
                                    />
                                })
                            }
                        </tbody>

                    </table>
                </div>
                <div className="col-lg-2 sidenav">
                </div>
            </div>


            <div className="container">
                <br></br>
                <br></br>
                <div><p><center> Resaon To Remove Candidate</center></p></div>
                <input type="text" placeholder="Enter the Reason" className="form-control"></input>
            </div>

            <div>
                <br></br>
                <button type="button" class="btn btn-success">Submit</button>

            </div>

        </div>
    </>
}

export default RemoveCandidate;