
import Like from '../Admin/AdminHome/imgs/Like.png';
import Dislike from '../Admin/AdminHome/imgs/Dislike.png';
import Exclamatry from '../Admin/AdminHome/imgs/Exclamatry.png';

function CommentCard(props) {


    return <>

        <div class="CommentBox" style={{ 'borderRadius': '10px', boxShadow: '3px 2px 9px maroon', backgroundColor: "lightpurple", paddingLeft: '10px', paddingRight: '10px' }}>


            <div className="card" style={{ innerWidth: "18rem" }}>
                <div className="card-body">
                    <br></br>
                    <b style={{ color: "red", fontSize: "20px" }}>{props.comment.CandidateName}</b>
                    <img src={Exclamatry} style={{ display: props.comment.sensational =="true"? "inline":"none", width: 30, height: 30,float:"right" }} ></img>
                    <hr></hr>
                    <div style={{ color: '#1427B5',fontSize:"16px" }}>
                        {props.comment.Comment}
                    </div>
                    <b style={{ float: "right" }}>By {props.comment.Commenter}{" "} - {props.comment.DateTime}</b>
                    <div className="row content">
                        <br></br>
                        <div className="col-lg-2 sidenav" style={{ fontSize: "12px", 'borderRadius': '10px' }}>
                            <img src={Like} style={{ width: 15, height: 15 }}></img>{' '}{' '} <b style={{ color: "black" }}>{props.comment.Like}</b>
                        </div>
                        <div className="col-lg-2 sidenav" style={{ fontSize: "12px", }}>
                            <center><img src={Dislike} style={{ width: 15, height: 15 }}></img>{' '} <b style={{ color: "black" }}>{" "}{props.comment.Dislike}</b></center>


                        </div>
                        <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                            <br></br>
                            <button type="button" class="btn btn-warning" style={{ float: "left" }} onClick={props.CandidateProfile}>View</button>
                            <button type="button" class="btn btn-danger" style={{ float: "right" ,marginLeft:"1%"}}>Dislike</button>
                            <button type="button" class="btn btn-success" style={{ float: "right",marginLeft:"2%" }}>Like</button>
                            <br></br>
                            <br></br>
                        </div>

                    </div>



                </div>
            </div>

        </div>

        <br></br>







    </>
}

export default CommentCard;