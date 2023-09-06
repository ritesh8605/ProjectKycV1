
import { useState } from "react";
import HeadNav from "../../Common/HeadNav";
import FeedbackRows from "./FeedbackRows";

function ShowFeedback() {



    const [AllFeedback, setAllFeedback] = useState([{ UserId: "1001", FirstName: "ritesh", LastName: "padalwar", Feedback: "jhsbfk srjkghkjdfgjkl sjbjksbdbj jhsbfk srjkghkjdfgjkl sjbjksbdbjjhsbfk srjkghkjdfgjkl sjbjksbdbjjhsbfk srjkghkjdfgjkl sjbjksbdbjjhsbfk srjkghkjdfgjkl sjbjksbdbjjhsbfk srjkghkjdfgjkl sjbjksbdbj" }, { UserId: "1001", FirstName: "ritesh", LastName: "padalwar", Feedback: "jhsbfk srjkghkjdfgjkl sjbjksbdbj " }, { UserId: "1001", FirstName: "ritesh", LastName: "padalwar", Feedback: "jhsbfk srjkghkjdfgjkl sjbjksbdbj " }]);
    return <>

        <HeadNav></HeadNav>

        <div className="container-fluid text-center">

            <div className="row content">
                <div className="col-lg-12 sidenav">
                    <br></br><br></br>
                    <table className='table table-responsive'>
                        <thead>
                            <th>
                                <center>Voter</center>
                            </th>
                            <th>
                                <center>First name</center>
                            </th>
                        </thead>
                        <tbody>
                            {
                                AllFeedback.map((feedback) => {
                                    return <FeedbackRows key={feedback.UserId}
                                        feedback={feedback}

                                    />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>

    </>
}

export default ShowFeedback;