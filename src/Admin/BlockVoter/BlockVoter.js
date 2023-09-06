import { useState } from "react";
import HeadNav from "../../Common/HeadNav";
import TableRows from "./TableRows";

function BlockVoter() {

    const [AllVoter, setAllVoter] = useState([{ CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }, { CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }, { CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }, { CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }, { CandidateId: "1001", FirstName: "Ritesh", LastName: "Padalwar", Occupation: "Minsiter" }])
    return <>
        <HeadNav></HeadNav>

        <div className="container">

            <div>
                <div><center><big>Search Voter By Name</big></center></div>
                <br></br>
                <input type="text" placeholder="Enter Voter Name" className="form-control"></input>
            </div>

            <br></br>
            <br></br>

            <table className='table table-bordered myTable'>
                    <tbody>
                        {
                            AllVoter.map((voter) => {
                                    return <TableRows key={voter.CandidateId}
                                        voter={voter}
                                        />
                            })
                        }
                    </tbody>
                </table>
        </div>

        



    </>
}

export default BlockVoter;