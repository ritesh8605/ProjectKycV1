
import "./Style.css";
import Like from './imgs/Like.png';
import Dislike from './imgs/Dislike.png';
function Demo() {
    return <>

        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>




        <div className="row content">
            <div className="col-lg-4 sidenav">

            </div>

            <div class="CommentBox jumbotron col-lg-3" style={{ 'borderRadius': '10px', boxShadow: '3px 2px 9px maroon', backgroundColor: "lightpurple" }}>
                <div >


                    <text>
                        <b style={{ color: "red", fontSize: "20px" }}>Candidate Name</b>
                        <br></br>
                        Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent...
                        <br></br>

                        <b style={{ float: "right" }}>By Commenter Name - 12/10/2012 12:23:60</b>
                    </text>
                </div>
                <br></br>
                <div className="row content">
                    <br></br>

                    <div className="col-lg-2 sidenav" style={{ fontSize: "12px", 'borderRadius': '10px' }}>
                        <img src={Like} style={{ width: 15, height: 15 }}></img><b style={{ color: "black" }}>11256</b>
                    </div>
                    <div className="col-lg-2 sidenav" style={{ fontSize: "12px", }}>
                        <center><img src={Dislike} style={{ width: 15, height: 15 }}></img> <b style={{ color: "black" }}>{" "}5695</b></center>
                    </div>

                </div>
                <br></br>
                <button type="button" class="btn btn-warning">Sensitional</button>
                <button type="button" class="btn btn-success" style={{ float: "right" }}>Warning</button>

            </div>




        </div>



        <div className="row content">
            <div className="col-lg-4 sidenav">
            </div>
            <div class="CommentBox  col-lg-3" style={{ 'borderRadius': '10px', boxShadow: '3px 2px 9px maroon', backgroundColor: "lightpurple" }}>
                <div >
                    <br></br>
                    <text>
                        <b style={{ color: "red", fontSize: "20px" }}>Candidate Name</b>
                        <hr></hr>
                        <div style={{ color: '#1427B5' }}>
                            Hi, In our Region the street light is not working properly and the problem of loadshading is very frequent...
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
            </div>
        </div>








    </>
}

export default Demo;