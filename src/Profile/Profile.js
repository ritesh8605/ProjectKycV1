import { useState } from "react";
import HeadNav from "../Common/HeadNav";
import axios from "../DataAccess/AxiosTemp";
import "../Common/Styles.css"



function Profile() {

    // const [UserData, setUserData] = useState({ UserId: "1001", FirstName: "ritesh", LastName: "Padalwar", Contact: "80079405655", Email: "r@gmail.com", Passsword: "", State: "maharashtra", City: "pandharkawada", StreetName: "pahse2 road", District: "yavatmal", Pincode: "445302" });

    let UserData;

    const [EmailOfUser, setEmailOfUser] = useState({ email: "" });
    const [UserProfile, setUserProfile] = useState({
        "userId": 112,
        "firstName": "sdds",
        "lastName": "sdfsdf",
        "email": "ggg",
        "address": {
            "state": "",
            "country": "",
            "region": "SADASHIV-PETH",
            "district": "",
            "city": "",
            "pincode": "",
            "addressId": 25
        }
    });


    const getUserProfile = async () => {

        try {
            const result = await axios.post('/authorize/getUserDtl', EmailOfUser, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });

            setUserProfile(result.data);


        }
        catch (error) {
            console.log("Error Occured" + error);
        }
    }


    useState(() => {
        const UserDataTemp = sessionStorage.getItem("LoggedUserData");
         UserData = JSON.parse(UserDataTemp);
         EmailOfUser.email=UserData.email;

        getUserProfile();
    }, [])


    const userProfilechange = (args) => {
        var copyofuser = { ...UserProfile };

        copyofuser[args.target.name] = args.target.value;
        setUserProfile(copyofuser);
    }

    return <>

        <HeadNav></HeadNav>

        <br></br>
        <center>
            <h3>
                Update Your Profile
            </h3>
        </center>

        <br></br>

        <div className="row content">
            <div className="col-lg-2 sidenav">
            </div>
            <div className="col-lg-4 text-center">
                <div>
                    <div><center><big>First Name</big></center></div>
                    <input type="text" value={UserProfile.firstName}onChange={userProfilechange}  name="firstName" className=" custom-select"></input>
                </div>
                <br></br><hr></hr><br></br>
                <div>
                    <div><center><big>Contact</big></center></div>
                    <input type="number" value={UserProfile.contact}onChange={userProfilechange}  name="contact" className="custom-select"></input>
                </div>
                <br></br><hr></hr><br></br>
                <div>
                    <div><center><big>State</big></center></div>
                    <input type="text" value={UserProfile.address.state}name="state"disabled className=" custom-select "></input>
                </div>
                <br></br>
                <div>
                    <div><center><big>City</big></center></div>
                    <input type="text" value={UserProfile.address.city}disabled  name="address.city" className="custom-select "></input>
                </div>
                {/* <br></br>
                <div>
                    <div><center><big>Street Name</big></center></div>
                    <input type="text" value={UserProfile.StreetName} className="custom-select"></input>
                </div> */}
                <br></br><hr></hr><br></br>
                {/* <div>
                    <div><center><big>Old Password</big></center></div>
                    <input type="text" placeholder="Enter Old Password" className="custom-select" value={UserProfile.}></input>
                </div> */}
              
           
                  <div>
                    <div><center><big>New Password</big></center></div>
                    <input type="text" placeholder="New Password" className="custom-select"></input>
                </div>
            </div>
            <div className="col-lg-4 text-center">
                <div>
                    <div><center><big>Last Name</big></center></div>
                    <input type="text" value={UserProfile.lastName}onChange={userProfilechange}  name="lastName" className="custom-select"></input>
                </div>
                <br></br><hr></hr><br></br>
                <div>
                    <div><center><big>Email</big></center></div>
                    <input type="text" value={UserProfile.email} onChange={userProfilechange} className="custom-select" disabled></input>
                </div>
                <br></br><hr></hr><br></br>
                <div>
                    <div><center><big>District</big></center></div>
                    <input type="text" value={UserProfile.address.district} disabled  name="address.district" className="custom-select"></input>
                </div>

                <br></br>


                <div>
                    <div><center><big>Pincode</big></center></div>
                    <input type="number" value={UserProfile.address.pincode}disabled name="address.pincode"  className="custom-select"></input>
                </div>

     


              



                <br></br><hr></hr><br></br>

              
              
                <div>
                    <div><center><big>Verify Password</big></center></div>
                    <input type="text" placeholder="Verify Password" className="custom-select"></input>
                </div>

            </div>  


            <div className="col-lg-2 sidenav">

            </div>
        </div>


        <br></br><br></br>
        <center>
            <div><button type="button" class="btn btn-success">Sumbit</button></div>
        </center>



    </>
}

export default Profile;