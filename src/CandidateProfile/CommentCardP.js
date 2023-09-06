
import Like from '../Admin/AdminHome/imgs/Like.png';
import Dislike from '../Admin/AdminHome/imgs/Dislike.png';
import Exclamatry from '../Admin/AdminHome/imgs/Exclamatry.png';
function CommentCardP(props) {

    return <>


        <div class="CommentBox" style={{ 'borderRadius': '10px', boxShadow: '3px 2px 9px maroon', backgroundColor: "lightpurple", paddingLeft: '10px', paddingRight: '10px' }}>

            <div className="card" style={{ innerWidth: "18rem" }}>
                <div className="card-body">
                    <br></br>
                    <b style={{ fontSize: "20px" }}>{" "}{props.comment.CandidateName}</b>
                    <img src={Exclamatry} style={{ display: props.comment.sensational =="true"? "inline":"none", width: 30, height: 30,float:"right" }} ></img>
                    <hr></hr>
                    <div style={{ color: '#1427B5',fontSize:"17px" }}>
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
                            <button type="button" class="btn btn-warning" style={{ float: "left" }} >Like</button>
                            <button type="button" class="btn btn-danger" style={{ float: "left",marginLeft:"1%" }} >Dislike</button>
                            
                            
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <br></br>


{/* 
        <br></br>
        <div class="CommentBox" style={{ 'borderRadius': '10px', boxShadow: '3px 2px 9px maroon', backgroundColor: "lightpurple", paddingLeft: '10px', paddingRight: '10px' }}>

            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                
                <Card.Body>
                    <Card.Title style={{fontSize:"25px" ,textAlign:"left"}}>{props.comment.CandidateName}</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>


        </div>
        <br></br> */}




    </>
}

export default CommentCardP;