import { useEffect, useState } from "react";
import ColumnChart from "../Launch/Charts/ColumnChart";
import LineChart from "../Launch/Charts/LineChart";
import PieChart from "../Launch/Charts/PieChart";
import profilepic from "../imgs/spiderman.png"
import HeadNav from "../Common/HeadNav";
import ProblemCard from "./ProblemCard";
import CommentCard from "./CommentCard";
import ProblemCardP from "./ProblemCardP";
import CommentCardP from "./CommentCardP";
import axios from "../DataAccess/AxiosTemp";
function CandidateProfile() {

    var [candidate, setcandidate] = useState({ CandidateName: "Ritesh Padalwar", Occupation: "Minister", Assembly: "Maharashtra", CandidateQuote: "Hi Young Generation", CandidaateRegion: "Pune-Hinjawadi-2" })

    var [AllProblems, setAllProblem] = useState([{ CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "true" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "true" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "false" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "true" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "false" },]);



    var [AllComment, setAllComment] = useState([{ CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "false" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "true" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "true" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "true" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "false" },]);

    var [Check, setCheck] = useState("true");



    const [EmailOfCandidate, setEmailOfCandidate] = useState({ email: "" });
    const [CandidateProfile, setCandidateProfile] = useState({
        "userId": 112,
        "firstName": "sdds",
        "lastName": "sdfsdf",
        "email": "ggg",
        "usertype": "CANDIDATE",
        "candidatedetail": {
            "region": "HINJAWADI PHASE-2",
            "image": "",
            "polularity": 20,
            "messageForLogin": "YOUR APPLICATION IS IN PROCESS...",
            "occupation": "asdsa",
            "assembly": "asdas",
            "work": "",
            "socialHandel": "asdad",
            "quote": "asdasd",
            "candidateDetailId": 104,
            "candidateApproval": false
        },
        "address": {
            "state": null,
            "country": null,
            "region": "SADASHIV-PETH",
            "district": null,
            "city": null,
            "pincode": null,
            "addressId": 25
        },
        "exdetail": null,
        "roles": [],
        "dob": null,
        "contact": "",
        "ageProof": "",
        "blockStatus": true
    });

    const loadUser = async () => {

        try {
            const result = await axios.post('/authorize/getUserDtl', EmailOfCandidate, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });

            setCandidateProfile(result.data);


        }
        catch (error) {
            console.log("Error Occured" + error);
        }
    }


    useEffect(async () => {
        EmailOfCandidate.email = localStorage.getItem("emailOfCandidateForViewByVoter");
        loadUser();
    }, [])

    const VoteCandidate = async() => {
        try {
            const result = await axios.post('/candidate/voteCandidate', EmailOfCandidate, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });

            loadUser();
            setCheck("false");


        }
        catch (error) {
            console.log("Error Occured" + error);
        }
    }
 




    return <>


        <HeadNav></HeadNav>

        <br></br>


        <div style={{ display: "flex", flexDirection: "row" }}>

            <div className="col-lg-1 sidenav">
            </div>
            <div className="col-lg-2 sidenav">
                <img src={profilepic} alt="www.google.com" style={{ backgroundColor: "black " }}></img>
            </div>
            <div className="col-lg-3 sidenav">
            </div>
            <div className="col-lg-4 sidenav">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div><h4>Candidate Name : <b>{CandidateProfile.firstName}{""} {CandidateProfile.lastName}</b></h4></div>
                    <br></br>
                    <div><h4>Occupation : <b>{CandidateProfile.candidatedetail.occupation}</b></h4></div>
                    <br></br>
                    <div><h4>Assembly :<b>{CandidateProfile.candidatedetail.assembly}</b></h4></div>
                    <br></br>
                    <div><h4>Candidate Quote :<b>{CandidateProfile.candidatedetail.quote}</b></h4></div>
                    <br></br>
                    <div><h4>Candidate Region : <b>{CandidateProfile.candidatedetail.region}</b></h4></div>
                    <br></br>
                    <div><h4>Popularity : <b>{CandidateProfile.candidatedetail.polularity.toFixed(1)}%</b></h4></div>
                </div>
            </div>
            <button type="button" class="btn btn-warning" style={{ float: "left", marginLeft: "10%", color: "blue", display: Check == "true" ? "inline" : "none" }} onClick={VoteCandidate}>Vote</button>
        </div>


        <br></br>
        <br></br>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ marginLeft: "8%", marginRight: "2%" }}><ColumnChart message={"popularity of candidate"}></ColumnChart></div>

            <div style={{ marginLeft: "40%" }}><LineChart message={"Most Sensational Problems"}></LineChart></div>

        </div>


        <br></br>



        <br></br>
        <br></br>



        <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="container" style={{ textAlign: "center", width: "600px", display: Check == "true" ? "inline" : "none" }}>
                <div class="form-outline lg-4">
                    <h4>Comment Your Thought's</h4>
                    <textarea class="form-control" rows="7"></textarea>
                </div>
                <br></br>
                <button className="btn btn-primary">Comment</button>
            </div>
            <div className="container" style={{ textAlign: "center", width: "600px", display: Check == "true" ? "inline" : "none" }}>
                <div class="form-outline lg-4">
                    <h4>Write Your Problem</h4>
                    <textarea class="form-control" rows="7"></textarea>
                </div>
                <br></br>
                <button className="btn btn-primary">Problem</button>
            </div>
        </div>

        <br></br>
        <br></br>


        <div class="jumbotron">
            <div class="container">

                <center><h2>Analysis</h2></center>
            </div>
        </div>

        <div className=" sidenav">

            <div className="col-lg-12 sidenav">

                <div className="col-lg-6 sidenav">
                    <div>
                        <div style={{ textAlign: "center" }}>


                            <a class="btn btn-info btn-lg">Most Recent</a>
                            {" "}{" "}
                            <a class="btn btn-warning btn-lg">sensational</a>
                            {" "}{" "}
                            <a class="btn btn-warning btn-lg">Your Problem's</a>
                            {" "}{" "}

                        </div>
                        <br></br>
                        <center><h2>Problem Section</h2></center>
                        <br></br>
                        {
                            AllProblems.map((problem) => {

                                return <ProblemCardP key={problem.CandidateName}
                                    problem={problem}
                                />
                            }
                            )
                        }
                    </div>
                </div>

                <div className="col-lg-6 sidenav">
                    <div>
                        <div style={{ textAlign: "center" }}>


                            <a class="btn btn-info btn-lg">Most Recent</a>
                            {" "}{" "}
                            <a class="btn btn-warning btn-lg">sensational</a>
                            {" "}{" "}
                            <a class="btn btn-warning btn-lg">Your Comment's</a>
                            {" "}{" "}

                        </div>
                        <br></br>
                        <center><h2>Comment Section</h2></center>
                        <br></br>
                        {
                            AllComment.map((comment) => {

                                return <CommentCardP key={comment.CandidateName}
                                    comment={comment}
                                />
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>



    </>
}

export default CandidateProfile;


