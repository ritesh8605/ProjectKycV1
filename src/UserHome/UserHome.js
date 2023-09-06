import { useEffect, useState } from "react";
import HeadNav from "../Common/HeadNav";
import ColumnChart from "../Launch/Charts/ColumnChart";
import LineChart from "../Launch/Charts/LineChart";
import PieChart from "../Launch/Charts/PieChart";
import CommentCard from "./CommentCard";
import ProblemCard from "./ProblemCard";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "../DataAccess/AxiosTemp";


function UserHome() {

    var [AllProblems, setAllProblem] = useState([{ CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "true" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "false" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "true" }, { CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "true" }]);



    var [AllComment, setAllComment] = useState([{ CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "true" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "false" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "false" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "true" }, { CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452", sensational: "false" },]);


    const history = useHistory();
    const SearchCandidate = () => {
        history.push("/Candidates");
    }
    const CandidateProfile = () => {
        history.push("/CandidateProfile");
    }

    const UserData = sessionStorage.getItem("LoggedUserData");
    const User = JSON.parse(UserData);


    const [UserEmail,setUserEmail] = useState({email:User.email});


    const [UserAllData, setUserAllData] = useState({userId: "",
    firstName: " ",
    lastName: " ",
    email: "",
    usertype: "",
    candidatedetail: "",
    address: {
      state: "",
      country: "",
      region: "",
      district: "",
      city: "",
      pincode:"" ,
      addressId: ""
    },
    exdetail: "",
    roles: [],
    dob: [
    ],
    contact: "",
    ageProof: "",
    blockStatus:"" });

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    };


    const GetUserData = async () => {
       await axios.post('/authorize/getUserDtl',UserEmail, config)
            .then(response => {
                setUserAllData(response.data)
               console.log(response.data);
               sessionStorage.setItem("LoggedInUserData",JSON.stringify(response.data));

            })
            .catch(error => {
                // Handle errors here
                console.error('Error:', error);
            });
    }


    useEffect(() => {

        GetUserData();
    }, []);




 

    return <>

        <HeadNav></HeadNav>

        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ marginLeft: "8%", marginRight: "2%" }}><ColumnChart messasge={"Your Region Most Popular Candidate"}></ColumnChart></div>
            <div style={{ marginLeft: "10%" }}><LineChart message={"Your Region Most Liked Candidate"}></LineChart></div>
            <div style={{ marginLeft: "13%" }}><LineChart message={"Your Region Most Unliked Candidate"}></LineChart></div>

        </div>


        <br></br>
        <br></br>

        <div className="container">
            <div><center><h3><b>Search Candidate By his/her Name</b></h3></center></div>
            <br></br>
            <div>
               
                <br></br>
                <center>
                   
                    <button className="btn btn-primary btn-lg"  onClick={SearchCandidate}>Search Here</button>
                </center>
            </div>
        </div>

        <br></br>
        <br></br>


        <div class="jumbotron">
            <div class="container">
                <center><h2>Analysis</h2></center>
                <center>

                    <h4>
                        -- This Analysis Belong To Your Region Only
                    </h4>
                    <h3 style={{ color: "darkblue" }}>{UserAllData.address.region}</h3>

                </center>
            </div>
        </div>



        <div className=" sidenav">

            <div className="col-lg-12 sidenav">

                <div className="col-lg-6 sidenav">
                    <center><h2>Problem Section</h2></center>
                    <br></br>
                    <div>
                        <div style={{ textAlign: "center" }}>
                            <a class="btn btn-success btn-lg">Most Liked</a>
                            {" "}{" "}
                            <a class="btn btn-success btn-lg">Most UnLiked</a>
                            {" "}{" "}
                            <a class="btn btn-info btn-lg">Most Recent</a>
                            {" "}{" "}
                            <a class="btn btn-warning btn-lg">sensational</a>
                            {" "}{" "}
                            <a class="btn btn-danger btn-lg">Top Liked Among All</a>
                        </div>
                        <br></br>


                        {
                            AllProblems.map((problem) => {

                                return <ProblemCard key={problem.CandidateName}
                                    problem={problem}
                                    CandidateProfile={CandidateProfile}
                                />
                            }
                            )
                        }
                    </div>
                </div>

                <div className="col-lg-6 sidenav">
                    <center><h2>Comment Section</h2></center>
                    <br></br>
                    <div style={{ textAlign: "center" }}>
                        <a class="btn btn-success btn-lg">Most Liked</a>
                        {" "}{" "}
                        <a class="btn btn-success btn-lg">Most UnLiked</a>
                        {" "}{" "}
                        <a class="btn btn-info btn-lg">Most Recent</a>
                        {" "}{" "}
                        <a class="btn btn-warning btn-lg">sensational</a>
                        {" "}{" "}
                        <a class="btn btn-danger btn-lg">Top Liked Among All</a>
                    </div>
                    <br></br>
                    <div>
                        {
                            AllComment.map((comment) => {

                                return <CommentCard key={comment.CandidateName}
                                    comment={comment}
                                    CandidateProfile={CandidateProfile}
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

export default UserHome;
