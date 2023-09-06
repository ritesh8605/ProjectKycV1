
import Like from './imgs/Like.png';
import Dislike from './imgs/Dislike.png';
function CommentCard(props) {
    return <>


        {/* <div class="CommentBox" style={{ 'borderRadius': '10px', boxShadow: '3px 2px 9px maroon', backgroundColor: "lightpurple" }}>
            <div >
                <br></br>
                <text>
                    <b style={{ color: "red", fontSize: "20px",float:"left"}}>{props.comment.CandidateName}</b>
                    <br></br>
                    <div style={{ color: '#1427B5' }}>
                       {props.comment.Comment}
                    </div>
                    <br></br>
                    <b style={{ float: "right" }}>By Commenter Name - 12/10/2012 12:23:60</b>
                </text>
            </div>
            <div className="row content">
                <br></br>
                <div className="col-lg-2 sidenav" style={{ fontSize: "12px", 'borderRadius': '10px' }}>
                    <img src={Like} style={{ width: 15, height: 15 }}></img>{' '}{' '} <b style={{ color: "black" }}>11256</b>
                </div>
                <div className="col-lg-2 sidenav" style={{ fontSize: "12px", }}>
                    <center><img src={Dislike} style={{ width: 15, height: 15 }}></img>{' '} <b style={{ color: "black" }}>{" "}5695</b></center>
                </div>
            </div>
            <br></br>
            <button type="button" class="btn btn-warning">Sensitional</button>
            <button type="button" class="btn btn-success" style={{ float: "right" }}>Warning</button>
            <br></br>
            <br></br>
        </div> */}


        <div class="CommentBox" style={{ 'borderRadius': '10px', boxShadow: '3px 2px 9px maroon', backgroundColor: "lightpurple", paddingLeft: '10px', paddingRight: '10px' }}>


            <div className="card" style={{ innerWidth: "18rem" }}>
                <div className="card-body">
                    <br></br>
                    <b style={{ color: "red", fontSize: "20px" }}>{props.comment.CandidateName}</b>
                    <hr></hr>
                    <div style={{ color: '#1427B5' }}>
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
                       <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
                       <br></br>
                        <button type="button" class="btn btn-warning" style={{ float: "left" }}>Sensitional</button>
                        <button type="button" class="btn btn-success" style={{ float: "right" }} onClick={props.ChangeCheck}>Warning</button>
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