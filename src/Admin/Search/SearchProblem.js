import { useState } from "react";
import HeadNav from "../../Common/HeadNav";
import ProblemCard from "../AdminHome/ProblemCard";

function SearchProblem() {


    var [AllProblems, setAllProblem] = useState([{ CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }]);



    var [Check ,setCheck] =useState("false");

    const ChangeCheck=()=>{
        setCheck("true");
    }

    return <>



        <HeadNav></HeadNav>


        <div className="container-fluid text-center">

            <div className="row content">
                <div className="col-lg-2 sidenav">
                </div>
                <div className="col-lg-6 text-center">


                    <br></br>
                    <br></br>
                    <div>
                        <div><center><big>Serach Problem by Canddiate or Region name </big></center></div>
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
                                AllProblems.map((problem) => {

                                    return <ProblemCard key={problem.CandidateName}
                                        problem={problem}
                                        ChangeCheck={ChangeCheck}
                                    />
                                }
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4 sidenav">
                    <br></br>
                    <br></br>
                    <br></br>
                            <h3>Warning</h3>
                            <div className="container" style={{ textAlign: "center", width: "100%" }}>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div class="form-outline lg-4">
                                    <textarea class="form-control" rows="7"></textarea>
                                    <br></br>
                                    <button className="btn btn-danger" style={{display:Check=="true"?"inline":"none"}}>Warn</button>
                                </div></div>
                        </div>
            </div>
        </div>
    </>
}

export default SearchProblem;