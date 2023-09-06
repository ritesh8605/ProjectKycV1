import { useState } from "react";
import HeadNav from "../Common/HeadNav";
import ProblemCard from "./ProblemCard";
import PieChart from "../Launch/Charts/PieChart";
import CommentCard from "./CommentCard";
import ColumnChart from "../Launch/Charts/ColumnChart";




function CommentPage() {

    var [AllComment, setAllComment] = useState([{ CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452",sensational:"true" },{ CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452",sensational:"false" },{ CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452",sensational:"true" },{ CandidateName: "Shree Mali", Comment: "Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent..", Commenter: "Ritesh", DateTime: "12/12/2020 12:12:34", Like: "1234", Dislike: "3452",sensational:"true" },]);


    return <>

        <HeadNav></HeadNav>




        <div class="jumbotron" style={{ marginTop: "-21px" }}>
            <div class="container">
                <center><h3>Comment Analysis</h3></center>
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


        <br></br>

        <div style={{ display: "flex", flexDirection: "row", width: "100%"}}>
            <div style={{ marginLeft: "8%", marginRight: "2%" }}><ColumnChart message={"Most Liked region"}></ColumnChart></div>
            

        </div>


        <div className="col-lg-3 sidenav">
        </div>
        <div className="col-lg-6 sidenav" style={{position:""}}>
            <center><h3>Comments</h3></center>
            <br></br>
            {
                AllComment.map((comment) => {

                    return <CommentCard key={comment.CandidateName}
                        comment={comment}
                    />
                }
                )
            }
        </div>

    </>
}

export default CommentPage;