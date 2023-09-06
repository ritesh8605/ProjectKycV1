import { useState } from "react";
import HeadNav from "../Common/HeadNav";
import CandidateRow from "./CandidateRow";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../Common/Styles.css";
import axios from '../DataAccess/AxiosTemp'
function SearchCandidate() {






   

    const history = useHistory();

    const ViewCandidate = () => {
        history.push("/CandidateProfile");
    }

    const [AllCandidate, setAllCandidate] = useState([

    ]);

    const [FirstName,setFirstName] =  useState("firstName");

    const FirstNameChange = (args) => {
        var copyofname = { ...FirstName };
    
        copyofname[args.target.name] = args.target.value;
        setFirstName(copyofname);
      }

      const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    };

    const GetCandidate= async()=>{
        await axios.post('/candidate/searchByName', FirstName, config)
        .then(response => {
            debugger;
            setAllCandidate(response.data)
        })
        .catch(error => {
            // Handle errors here
            console.error('Error:', error);
        });
    }
     


    return <>


        <HeadNav></HeadNav>


        <div class="jumbotron" style={{ marginTop: "-20px" }}>
            <div class="container">
                <center>
                    <p>Search Candidate</p>
                </center>
            </div>
        </div>

        <div className="col-lg-3" ></div>
        <div className="col-lg-6" >
            <center>
                <input type="text" placeholder="Enter The First Name of Candidate" className="custom-select" value={FirstName.firstName} name="firstName" onChange={FirstNameChange}></input>
                <br></br><br></br><br></br>
                <button className="btn btn-primary btn-lg" onClick={GetCandidate}>Search Here</button>
            </center>
        </div>



        <div className="container-fluid text-center">
            <div className="row content">
                <div className="col-lg-12 sidenav">
                    <br /><br />
                    <div className="table-responsive">
                        <table className='table table-bordered table-striped'>
                            <thead className="thead-dark">
                                <tr>

                                    <th>Name</th>
                                    <th>Occupation</th>
                                    <th>Region</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    AllCandidate.map((candidate) => (
                                        <CandidateRow key={candidate.email} candidate={candidate}  />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>



    </>
}

export default SearchCandidate;