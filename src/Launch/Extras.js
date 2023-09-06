import './Launch.css';
import logo from './imgs/VoterAppQR.png';
import instagram from './imgs/instagram.png';
import facebook from './imgs/facebook.png';
import twitter from './imgs/twitter.png';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Extras() {

    const history=useHistory();


    const RequestCred =()=>{
        console.log("hi in request cred")
        history.push('/RequestCred');
    }
    const AddCandidate =()=>{
        history.push('/AddCandidate');
    }
    const GiveFeedback =()=>{
        history.push('/GiveFeedback');
    }
    const ContactUs =()=>{
        history.push('/ContactUs');
    }
    const ApplicationStatus =()=>{
        history.push('/ApplicationStatus');
    }
    return<>
    
   

    <div className="extras" style={{display:'flex',flexDirection:'row'}}>

    <div style={{width:"20%",marginLeft:20}}> 
    <br/>
        <div style={{fontSize:17}}>Voter Helpline Number</div>
            <p style={{color:'blue',fontSize:20}}>1950</p>

            <img src={logo} style={{width:120,height:120}}></img>
            <br/><br/>
                <div style={{fontFamily:"monospace"}}> Download Voter App<br/>
                    with Given QR   </div>
    </div>

    <div className='middiv'>
            <br/>
            <br/>

            <div className="table-responsive" style={{width:200,height:220,marginLeft:10}}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Resources...</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>PIB</td>
                    </tr>
                    <tr>
                        <td>Govt. Websites</td>
                    </tr>
                    <tr>
                        <td>Govt. Official Docx</td>
                    </tr>
                    <tr>
                        <td>Govt. Agencies</td>
                    </tr>
                    
                    </tbody>
                </table>
            </div>
    </div>
   
    <div>
        <br/>
        <a href='https://www.facebook.com/NVSPINDIA/' target='_blank'><img src={facebook} className="images" ></img></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href='https://www.instagram.com/p/Cm8abv9L9Uw/?img_index=1' target='_blank'><img src={instagram} className="images"></img></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href='https://twitter.com/ecisveep/status/1156202790412115970' target='_blank'><img src={twitter} className="images"></img></a>

        <br/><br/>

        <div><a className='links' onClick={RequestCred}>Request Credentials</a></div>
        {/* <br/>
        <div><a style={{color:"blue",fontSize:"18px" ,fontStyle:"italic"}}href="https://paytm.com/helpinghand/breakthrough-trust" target='_blank'>Contribute Us</a></div> */}
        <br/>
        <div><a className='links' onClick={GiveFeedback}>Feedback Us</a></div>
        <br/>
        <div><a style={{color:"blue",fontSize:"18px" ,fontStyle:"italic"}}href="https://www.kychub.com/contact-us/" target='_blank'>Contact Us</a></div>
        <br/>
        <div><a className='links' onClick={ApplicationStatus}>Show Application Status</a></div>
     <br></br>
        <div><a className='links' onClick={AddCandidate}>Create Candidate Account</a></div>
        
    </div>

    </div>



        </>
}

export default Extras;