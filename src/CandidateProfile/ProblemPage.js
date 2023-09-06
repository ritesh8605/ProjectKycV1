import { useState } from "react";
import HeadNav from "../Common/HeadNav";
import ProblemCard from "./ProblemCard";
import PieChart from "../Launch/Charts/PieChart";
import ColumnChart from "../Launch/Charts/ColumnChart";




function ProfilePage() {

    var [AllProblems, setAllProblem] = useState([{ CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" ,sensational:"false" },{ CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" ,sensational:"true" },{ CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" ,sensational:"false" },{ CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" ,sensational:"false" },{ CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" ,sensational:"true" },{ CandidateName: "patil", Problem: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452" ,sensational:"true" }]);
    return <>

        <HeadNav></HeadNav>




        <div class="jumbotron" style={{ marginTop: "-21px" }}>
            <div class="container">
                <center><h3>Problems Analysis</h3></center>
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

            </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ marginLeft: "8%", marginRight: "2%" }}><ColumnChart message={"Most Liked Region"}></ColumnChart></div>


        </div>



        <div className="col-lg-3 sidenav">
        </div>
        <div className="col-lg-6 sidenav">
            <center><h3>Problems</h3></center>
            {
                AllProblems.map((problem) => {

                    return <ProblemCard key={problem.CandidateName}
                        problem={problem}
                    />
                }
                )
            }

        </div>

    </>
}

export default ProfilePage;