    import { useState } from 'react';
    import { useHistory } from 'react-router-dom';

    function HeadNav() {

        const UserData = sessionStorage.getItem("LoggedUserData");
        const User = JSON.parse(UserData);


        const history = useHistory();
        var [AdminDtl, setAdminDtl] = useState({ FirstName: "Ritesh", LastName: "Padalwar" })

        const Logout =()=>{
            history.push('/Logout');
        }
        const GiveFeedback=()=>{
            history.push("/GiveFeedback");
        }
        const Profile=()=>{
            history.push("/Profile");
        }
        const AboutUs=()=>{
            history.push("/AboutUs");
        }
        const Home=()=>{
            history.push("/LoggedIn");
        }
        return <>


            <nav className="navbar " style={{ backgroundColor: "aqua" }}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Project KYC</a>
                    </div>
                    <ol className="nav navbar-nav">
                        <li className="active"><button className="btn btn-danger navbar-btn" onClick={Home} style={{marginLeft:'3%'}}>Home</button></li>
                        
                        <li><button className="btn btn-danger navbar-btn" style={{marginLeft:'5%'}} onClick={GiveFeedback}>Feedback</button></li>
                        <li><button className="btn btn-danger navbar-btn" style={{marginLeft:'9%'}} onClick={Profile}>Profile</button></li>
                        <li><button className="btn btn-danger navbar-btn" style={{marginLeft:'10%'}} onClick={AboutUs}>About Us</button></li>
                        <li><button className="btn btn-danger navbar-btn" style={{marginLeft:'11%'}} ><a style={{color:"white"}}href="https://www.kychub.com/contact-us/" target='_blank'>Contact Us</a></button></li>
                        <li><button className="btn btn-danger navbar-btn" style={{marginLeft:'11%'}} ><a style={{color:"white"}}href="https://paytm.com/helpinghand/breakthrough-trust" target='_blank'>Contribute Us</a></button></li>
                        
                    </ol>
                    <div className="text-right">
                      Welcome ! {User.firstName} { } {User.lastName} { " "}

                        <button onClick={Logout} className="btn btn-danger navbar-btn">Logout</button>

                    </div>
                </div>
            </nav>



        </>
    }

    export default HeadNav;