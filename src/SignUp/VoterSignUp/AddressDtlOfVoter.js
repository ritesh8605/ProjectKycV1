import { useEffect, useState } from "react";

import axios from "../../DataAccess/AxiosTemp";
import '../../Common//Styles.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function AddressDtlOfVoter() {

    const history= useHistory();


   

    const [userAddress, setuserAddress] = useState({
        email: "",
        state: "",
        country: "",
        region: "",
        district: "",
        city: "",
        pincode: 0
    });

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState("region");


    useEffect(()=>{

        userAddress.region = selectedOption.region;
    },[selectedOption])

    useEffect(() => {

        axios.get('/authorize/getRegion', {
            headers: {
                Accept: 'application/json',
            },
        })
            .then(response => {
                setOptions(response.data);
                
            })
            .catch(error => {
                console.error('Error fetching options:', error);
            });
    }, []);

    const handleSelectChange = event => {
        setSelectedOption(event.target.value);
    };


    const userAddresschange = (args) => {
        var copyofaddress = { ...userAddress };

        copyofaddress[args.target.name] = args.target.value;
        setuserAddress(copyofaddress);
    }
    userAddress.email = localStorage.getItem("emailforVoterAddressAddUses");

    const processs = ()=>{

         userAddress.region= selectedOption;
         debugger;
        addAddress();
        history.push("/Login")

    }
    const addAddress = async () => {
        try {
            console.log(userAddress)
            const result = await axios.post('/authorize/addAddress', userAddress, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })


        }
        catch (error) {
            console.log("Error Occured" + error);
        }
    }

    

    return <>

        <div>
            <div className="jumbotron" style={{ backgroundColor: 'rgb(250, 248, 228)' }} >
                <center><h1>Voter Sign Up</h1></center>
                <center><h2>Enter Details</h2></center>
                <center><h2>2/2</h2></center>
            </div>
        </div>




        <div className="container-fluid text-center">

            <div className="row content">
                <div className="col-lg-5 sidenav">

                    <div>
                        <div><center><big><b>Conutry</b></big></center></div>
                        <input type="text" placeholder="Enter First Name" className="custom-select" name="country" value={userAddress.country} onChange={userAddresschange}></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big><b>State</b></big></center></div>
                        <input type="text" placeholder="Enter Last Name" className="custom-select" name="state" value={userAddress.state} onChange={userAddresschange}></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big><b>District</b></big></center></div>
                        <input type="text" placeholder="District" className="custom-select" name="district" value={userAddress.district} onChange={userAddresschange}></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big><b>City</b></big></center></div>
                        <input type="text" placeholder="Enter A Valid Id number" className="custom-select" name="city" value={userAddress.city} onChange={userAddresschange}></input>
                    </div>


                </div>
                <div className="col-lg-2 text-center">

                </div>
                <div className="col-lg-5 sidenav">



                    <div>
                        <div><center><big><b>Pincode</b></big></center></div>
                        <input type="number" placeholder="Enter the Password" className="custom-select" name="pincode" value={userAddress.pincode} onChange={userAddresschange}></input>
                    </div>

                    <br></br>
                    <br></br><b>Select The Region (Where Your VoterId Issued)</b><br></br><br></br>
                    <div>
                        <select value={userAddress.region} onChange={handleSelectChange} className="custom-select">
                            <option value="">Select an option</option>
                            {options.map(option => (
                                <option key={option.regionId} value={option.regionName}>
                                    {option.regionName}
                                </option>
                            ))}
                        </select>
                        <br></br>
                        <h4><p>Selected option: {selectedOption}</p></h4>
                    </div>



                </div>
            </div>
            <br></br><br></br>
            <div><button type="button" class="btn btn-success" onClick={processs}>Next</button></div>
        </div>


    </>
}

export default AddressDtlOfVoter;