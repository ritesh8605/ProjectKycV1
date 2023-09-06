import { useState } from "react";
import CommentCard from './CommentCard';
import ProblemCard from "./ProblemCard";
import HeadNav from "../../Common/HeadNav";
import { useHistory } from "react-router-dom";
import ColumnChart from "../../Launch/Charts/ColumnChart";
import PieChart from "../../Launch/Charts/PieChart";
import LineChart from "../../Launch/Charts/LineChart";

function AdminHome() {

    var [AdminDtl, setAdminDtl] = useState({ FirstName: "Ritesh", LastName: "Padalwar" });


    var [AllProblems, setAllProblem] = useState([{ CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }]);



    var [AllComment, setAllComment] = useState([{ CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }]);


    const history = useHistory();

    var [Check ,setCheck] =useState("false");

    const ChangeCheck=()=>{
        setCheck("true");
    }

    const Sensitional = () => {
        console.log("sensual clicked")
    }

    const Warning = () => {
        console.log("warning clicked...")
    }

    const ApproveCandidate = () => {
        history.push('/ApproveCandidate');
    }
    const CWarning = () => {
        history.push('/CWarning');
    }
    const PWarning = () => {
        history.push('/PWarning');
    }
    const RMCandidate = () => {
        history.push('/RMCandidate');
    }
    const AddCandidate = () => {
        history.push('/AddCandidate');
    }
    const Feedback = () => {
        history.push('/Feedback');
    }
    const BlockVoter = () => {
        history.push('/BlockVoter');
    }
    const Candidates = () => {
        history.push('/Candidates');
    }
    const ExList = () => {
        history.push('/ExList');
    }
    const Authorize = () => {
        history.push('/Authorize');
    }


    return <>


        <HeadNav></HeadNav>

        <div className="container-fluid text-center">

            <div className="row content">

                <div className="col-lg-2 sidenav">

                    <table class="table" >
                        <thead>

                        </thead>
                        <tbody>
                            <tr>
                                <td><button type="button" onClick={ApproveCandidate} class="btn btn-lg btn-success btn-block">Approve Candidate</button></td>
                            </tr>
                            <tr>
                                <td><button type="button" onClick={CWarning} class="btn btn-lg btn-success btn-block">Comment Section</button></td>
                            </tr>
                            <tr>
                                <td><button type="button" onClick={PWarning} class="btn btn-lg btn-success btn-block">Problem Section</button></td>
                            </tr>

                            <tr>
                                <td><button type="button" onClick={RMCandidate} class="btn btn-lg btn-success btn-block">Remove Candidate</button></td>
                            </tr>
                            <tr>
                                <td><button type="button" onClick={AddCandidate} class="btn btn-lg btn-success btn-block">Add Exclusively a Candidate</button></td>
                            </tr>
                            <tr>
                                <td><button type="button" onClick={Feedback} class="btn btn-lg btn-success btn-block">Feedback Section</button></td>
                            </tr>
                            <tr>
                                <td><button type="button" onClick={BlockVoter} class="btn btn-lg btn-success btn-block">Block Voter</button></td>
                            </tr>
                            <tr>
                                <td><button type="button" onClick={Candidates} class="btn btn-lg btn-success btn-block">Candidates</button></td>
                            </tr>
                            <tr>
                                <td><button type="button" onClick={ExList} class="btn btn-lg btn-success btn-block">List of Ex</button></td>
                            </tr>
                            <tr>
                                <td><button type="button" onClick={Authorize} class="btn btn-lg btn-success btn-block">Authorize Admin</button></td>
                            </tr>
                            <tr>
                                <td><button type="button" onClick={Authorize} class="btn btn-lg btn-success btn-block">Add Regions</button></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div className="column content">

                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ marginLeft: "8%", marginRight: "-5%" }}><ColumnChart message={"Candidate Popularity"}></ColumnChart></div>
                        <div style={{ marginLeft: "10%" }}><PieChart message={"Most Liked candidate"}></PieChart></div>
                        <div style={{ marginLeft: "10%" }}><LineChart message={"Most Disliked Candidate"}></LineChart></div>

                    </div><div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ marginLeft: "8%", marginRight: "-5%" }}><ColumnChart message={"sensational Comment"}></ColumnChart></div>
                        <div style={{ marginLeft: "45%" }}><LineChart message={"sensational Problem"}></LineChart></div>
                    </div>
                </div>



                <div class="jumbotron">
                    <div class="container">
                        <h2>Analyze</h2>
                    </div>
                </div>

                <div className=" sidenav">
                    <div className="col-lg-12 sidenav">

                        <div className="col-lg-4 sidenav">


                            <h3>Problem</h3>
                            <br></br>
                            <div style={{ textAlign: "center" }}>
                            <a class="btn btn-success btn-lg">Most Liked</a>
                            {" "}{" "}
                            <a class="btn btn-success btn-lg">Most UnLiked</a>
                            {" "}{" "}
                            <a class="btn btn-info btn-lg">Most Recent</a>
                            <br></br>
                            <br></br>
                        </div>
                            {
                                AllProblems.map((problem) => {

                                    return <ProblemCard key={problem.CandidateName}
                                        problem={problem}
                                        ChangeCheck={ChangeCheck}
                                    />
                                }
                                )
                            }

                        </div>

                        <div className="col-lg-4 sidenav">
                            <h3>Comment</h3>
                            <br></br>
                            <div style={{ textAlign: "center" }}>
                            <a class="btn btn-success btn-lg">Most Liked</a>
                            {" "}{" "}
                            <a class="btn btn-success btn-lg">Most UnLiked</a>
                            {" "}{" "}
                            <a class="btn btn-info btn-lg">Most Recent</a>
                            <br></br>
                            <br></br>
                        </div>
                            {
                                AllComment.map((comment) => {

                                    return <CommentCard key={comment.CandidateName}
                                        comment={comment}
                                        ChangeCheck={ChangeCheck}
                                    />
                                }
                                )
                            }

                        </div>
                        <div className="col-lg-4 sidenav">
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
            </div>
        </div>
    </>
}

export default AdminHome;