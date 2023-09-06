
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../../Common/Styles.css"
import axios from "../../DataAccess/AxiosTemp";



function AssemblyDtl() {

    const history = useHistory();


    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState("region");


    const [AssemblyDtl, setAssemblyDtl] = useState({
        email: "",
        image: "",
        region: "",
        occpation: "",
        assembly: "",
        work: "",
        socialHandel: "",
        quote: ""
    });

    useEffect(() => {
        debugger;
        AssemblyDtl.email = localStorage.getItem("emailforCandidateSignUpUses");
    }, [])

    const AssemblyDtlChange = (args) => {
        var copyofassembly = { ...AssemblyDtl };

        copyofassembly[args.target.name] = args.target.value;
        setAssemblyDtl(copyofassembly);
    }

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

    useEffect(() => {

        AssemblyDtl.region = selectedOption.region;
    }, [selectedOption])


    const process = () => {


        console.log(AssemblyDtl);
        debugger;
        AssemblyDtl.region = selectedOption;
        addAssembly();
        history.push("/ApplicationStatus");
    }

    const addAssembly = async () => {
        try {

            const result = await axios.post('/authorize/addCandidateDetail', AssemblyDtl, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })


        }
        catch (error) {
            console.log("Error Occured" + error);
        }
    }







    const handleSelectChange = event => {
        setSelectedOption(event.target.value);
    };



    return <>

        <div>
            <div className="jumbotron" style={{ backgroundColor: 'rgb(250, 248, 228)' }} >
                <center><h1>Candidate Sign Up</h1></center>
                <center><h2>Enter Details</h2></center>
                <center><h2>3/3</h2></center>

            </div>
        </div>




        <div className="container-fluid text-center">

            <div className="row content">
                <div className="col-lg-5 sidenav">

                    <div>
                        <div><center><big>Assembly Name</big></center></div>
                        <input type="text" placeholder="Enter The Assembly name" className=" custom-select" name="assembly" value={AssemblyDtl.assembly} onChange={AssemblyDtlChange}></input>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <div><center><big>Occupation</big></center></div>
                        <input type="text" placeholder="Enter Your Occupation" className=" custom-select" name="occpation" value={AssemblyDtl.occpation} onChange={AssemblyDtlChange}></input>
                    </div>
                    <br></br>
                    <br></br><b>Select The Region (Where You Were Elected)</b><br></br><br></br>
                    <div>
                        <select value={AssemblyDtl.region} onChange={handleSelectChange} className="custom-select">
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
                <div className="col-lg-2 text-center">

                </div>
                <div className="col-lg-5 sidenav">

                    <div>
                        <div><center><big>Your Quote</big></center></div>
                        <input type="text" placeholder="Enter The Valid Proof Of Legislation" className="custom-select" name="quote" value={AssemblyDtl.quote} onChange={AssemblyDtlChange}></input>
                    </div>
                    <br></br>

                    <br></br>
                    <div>
                        <div><center><big>Social Handel</big></center></div>
                        <input type="text" placeholder="Enter The Social handel" className="custom-select" name="socialHandel" value={AssemblyDtl.socialHandel} onChange={AssemblyDtlChange}></input>
                    </div>
                    <br></br>   <br></br>
                    <br></br>
                    <div className="lg-3">
                        Upload Profile Picture <span className="font-css top">*</span>
                        <div className="">
                            <input type="file" id="file-input" name="ImageStyle" />
                        </div>
                    </div>

                </div>
            </div>
            <br></br><br></br>
            <div><button type="button" class="btn btn-success"  onClick={process}>Submit</button></div>
        </div>


    </>
}

export default AssemblyDtl;