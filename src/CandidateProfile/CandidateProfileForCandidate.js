import { useState } from "react";
import ColumnChart from "../Launch/Charts/ColumnChart";
import LineChart from "../Launch/Charts/LineChart";
import PieChart from "../Launch/Charts/PieChart";
import profilepic from "../imgs/spiderman.png"
import HeadNav from "../Common/HeadNav";
import ProblemCard from "./ProblemCard";
import CommentCard from "./CommentCard";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function CandidateProfileForCandidate() {

    var [candidate, setcandidate] = useState({ CandidateName: "Ritesh Padalwar", Occupation: "Minister Of Affairs", Assembly: "Maharashtra", CandidateQuote: "Hi Young Generation", CandidaateRegion: "Pune-Hinjawadi-2", Rating: "48.65" })

    var [AllProblems, setAllProblem] = useState([{ CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }]);



    var [AllComment, setAllComment] = useState([{ CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the probl   em of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" }]);

    const history = useHistory();

    const CommentsAnalysis = () => {
        history.push("/CommentsAnalysis");
    }
    const ProblemAnalysis = () => {
        history.push("/ProblemAnalysis");
    }
    return <>


        <HeadNav></HeadNav>

        <br></br>





        <div style={{ display: "flex", flexDirection: "row" }}>

            <div className="col-lg-1 sidenav">
            </div>
            <div className="col-lg-2 sidenav">
                <img src={profilepic} alt="www.google.com" style={{ backgroundColor: "black ",marginLeft:"-35%" }} height={"300px"} width={"300px"}></img>
            </div>
            <div className="col-lg-3 sidenav">
            </div>
            <div className="col-lg-4 sidenav">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div><h4>Your Name : <b>{candidate.CandidateName}</b></h4></div>
                    <br></br>
                    <div><h4>Occupation : <b>{candidate.Occupation}</b></h4></div>
                    <br></br>
                    <div><h4>Assembly :<b>{candidate.Assembly}</b></h4></div>
                    <br></br>
                    <div><h4>Your Quote :<b>{candidate.CandidateQuote}</b></h4></div>
                    <br></br>
                    <div><h4>Your Region : <b>{candidate.CandidaateRegion}</b></h4></div>
                    <br></br>
                    <div><h4>Your Popularity  : <b>{candidate.Rating} %</b></h4></div>
                </div>
            </div>

        </div>
        <br></br>
        <br></br>
        <center><h2>Analyze Yourself</h2></center>

        <br></br>
        <br></br>
        <div style={{ textAlign: "right" }}>
            <a class="btn btn-success btn-lg" onClick={CommentsAnalysis}>Comments</a>
            {" "}{" "}
            <a class="btn btn-primary btn-lg" onClick={ProblemAnalysis}>Problems</a>
        </div>
        <br></br>


        <div class="jumbotron">
            <div class="container">
                <center><h3>Your Overview</h3></center>
            </div>
        </div>

        <br></br>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ marginLeft: "8%", marginRight: "2%" }}><ColumnChart message={"Recent Most Liked "}></ColumnChart></div>
            <div style={{ marginLeft: "10%" }}><PieChart message={"Recent Most Sensational Liked Comment"}></PieChart></div>
            <div style={{ marginLeft: "10%" }}><LineChart  message={"Recent Most Liked problem"}></LineChart></div>

        </div>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ marginLeft: "8%", marginRight: "2%" }}><ColumnChart message={"Recent Most UnLiked "}></ColumnChart></div>
            <div style={{ marginLeft: "10%" }}><PieChart message={"Recent Most Sensational UnLiked Comment"}></PieChart></div>
            <div style={{ marginLeft: "10%" }}><LineChart  message={"Recent Most UnLiked problem"}></LineChart></div>

        </div>


        <br></br>
        <br></br>
        <div class="jumbotron">
            <div class="container">
                <center><h3>Your Region Analysis</h3></center>
            </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ marginLeft: "8%", marginRight: "2%" }}><ColumnChart message={"Recent Most Liked "}></ColumnChart></div>
            <div style={{ marginLeft: "10%" }}><PieChart message={"Recent Most Sensational Liked Comment"}></PieChart></div>
            <div style={{ marginLeft: "10%" }}><LineChart  message={"Recent Most Liked problem"}></LineChart></div>

        </div>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ marginLeft: "8%", marginRight: "2%" }}><ColumnChart message={"Recent Most UnLiked "}></ColumnChart></div>
            <div style={{ marginLeft: "10%" }}><PieChart message={"Recent Most Sensational UnLiked Comment"}></PieChart></div>
            <div style={{ marginLeft: "10%" }}><LineChart  message={"Recent Most UnLiked problem"}></LineChart></div>

        </div>
        <br></br>
        <br></br>
        <div class="jumbotron">
            <div class="container">
                <center><h3>Global Analysis</h3></center>
            </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ marginLeft: "8%", marginRight: "2%" }}><ColumnChart message={"Recent Most Liked "}></ColumnChart></div>
            <div style={{ marginLeft: "10%" }}><PieChart message={"Recent Most Sensational Liked Comment"}></PieChart></div>
            <div style={{ marginLeft: "10%" }}><LineChart  message={"Recent Most Liked problem"}></LineChart></div>

        </div>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ marginLeft: "8%", marginRight: "2%" }}><ColumnChart message={"Recent Most UnLiked "}></ColumnChart></div>
            <div style={{ marginLeft: "10%" }}><PieChart message={"Recent Most Sensational UnLiked Comment"}></PieChart></div>
            <div style={{ marginLeft: "10%" }}><LineChart  message={"Recent Most UnLiked problem"}></LineChart></div>

        </div>

        {/* <br></br>
        <br></br>

        <div className=" sidenav">

            <div className="col-lg-10 sidenav">

                <div className="col-lg-5 sidenav">
                    <div>


                        {
                            AllProblems.map((problem) => {

                                return <ProblemCard key={problem.CandidateName}
                                    problem={problem}
                                />
                            }
                            )
                        }
                    </div>
                </div>

                <div className="col-lg-5 sidenav">
                    <div>


                        {
                            AllComment.map((comment) => {

                                return <CommentCard key={comment.CandidateName}
                                    comment={comment}
                                />
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
 */}


    </>
}

export default CandidateProfileForCandidate;


