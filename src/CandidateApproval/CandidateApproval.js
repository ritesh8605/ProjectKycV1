import { useState } from "react";
import HeadNav from "../Common/HeadNav";
import TableRows from "./TableRows";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function CandidateApproval() {

    const history= useHistory();

    const [AllCandidate,setAllCandidate]=useState([{CandidateId:"1001",FirstName:"Ritesh",LastName :"Padalwar",Occupation:"Minsiter"},{CandidateId:"1001",FirstName:"Ritesh",LastName :"Padalwar",Occupation:"Minsiter"},{CandidateId:"1001",FirstName:"Ritesh",LastName :"Padalwar",Occupation:"Minsiter"},{CandidateId:"1001",FirstName:"Ritesh",LastName :"Padalwar",Occupation:"Minsiter"},{CandidateId:"1001",FirstName:"Ritesh",LastName :"Padalwar",Occupation:"Minsiter"}])


    const ShowDetailOfCandidate=(CandidateId)=>{
        console.log(CandidateId)
        history.push("/ShowDetailOfCandidate");

    }
   
    return <>

        <HeadNav></HeadNav>
        <div class="jumbotron">
            <center>
                <p>
                    Pending Approvals of Candidate
                </p>
            </center>
        </div>

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
                                        ShowDetailOfCandidate={ShowDetailOfCandidate}
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

export default CandidateApproval;