import HeadNav from "../Common/HeadNav";


function GiveFeedback() {
    return<>
    
    <HeadNav></HeadNav>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div class="jumbotron">
        <div class="container">
            <h1>Feedback</h1>
        </div>
    </div>

    <div className="container" style={{textAlign:"center", width:"600px"}}>
    <div class="form-outline lg-4">
        <textarea class="form-control"rows="7"></textarea>
    </div>
    <br></br>
    <button className="btn btn-primary">Submit</button>
    </div>

 
    
    </>
}

export default GiveFeedback;