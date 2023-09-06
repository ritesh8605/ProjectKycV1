import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function AboutUs() {


    const history=useHistory();
    const LoggedIn=()=>{
        history.push("/LoggedIn");
    }
    return<>
    
    
    <div class="jumbotron">
        <div class="container">
            
            
            <p>
                <a class="btn btn-primary btn-lg" onClick={LoggedIn}>Home</a>
            </p>
        </div>
    </div>
    
    
    <div style={{textAlign:"center"}}>
    <br></br><br></br>
    <h1>-Our Mission-</h1>
    <br></br>
    <h4>To Spread the awareness Among people about thier right's and their Power</h4>
    <br></br>
    <h2>About</h2>
    <br></br>
    <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim lobortis scelerisque. Lobortis elementum nibh tellus molestie. Lectus proin nibh nisl condimentum id. Senectus et netus et malesuada fames ac turpis. Eu facilisis sed odio morbi quis commodo odio aenean sed. Consequat id porta nibh venenatis cras sed felis eget velit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Pellentesque pulvinar pellentesque habitant morbi tristique. Faucibus pulvinar elementum integer enim neque volutpat ac. Augue eget arcu dictum varius. Imperdiet sed euismod nisi porta lorem mollis. Feugiat in ante metus dictum at tempor commodo ullamcorper. Massa tincidunt dui ut ornare lectus. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Porta non pulvinar neque laoreet suspendisse. Elit sed vulputate mi sit. Quis auctor elit sed vulputate mi sit amet. Scelerisque purus semper eget duis at tellus at urna. Tristique senectus et netus et malesuada fames ac turpis. Praesent elementum facilisis leo vel fringilla est ullamcorper. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Neque viverra justo nec ultrices dui sapien eget mi proin. Varius vel pharetra vel turpis. Eleifend mi in nulla posuere sollicitudin aliquam. At in tellus integer feugiat. Nisl tincidunt eget nullam non nisi est. Eu facilisis sed odio morbi quis commodo. Morbi enim nunc faucibus a pellentesque. Diam sollicitudin tempor id eu. Sit amet mauris commodo quis imperdiet massa. Netus et malesuada fames ac turpis. Non arcu risus quis varius quam quisque id. Diam ut venenatis tellus in metus vulputate eu scelerisque. Tempor orci dapibus ultrices in iaculis nunc sed augue. Euismod nisi porta lorem mollis aliquam. Dui id ornare arcu odio. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Gravida rutrum quisque non tellus orci. Feugiat vivamus at augue eget arcu dictum. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Enim nec dui nunc mattis enim ut tellus. Arcu non odio euismod lacinia at. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Nullam vehicula ipsum a arcu. Tortor condimentum lacinia quis vel eros donec ac odio. Cras pulvinar mattis nunc sed. Ac auctor augue mauris augue neque gravida. Nulla facilisi etiam dignissim diam.</b>
    </div>
    
    </>
}

export default AboutUs;