import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CandidateRow(props) {
const history= useHistory();

    return <tr>
        <td>
          <b>  {props.candidate.firstName}{" "}{props.candidate.lastName}</b>
        </td>
        <td>
           <b> {props.candidate.occupation}</b>
        </td>
        <td>
           <b> {props.candidate.region}</b>
        </td>       
        <td>
           <center>
             <button className='btn btn-danger'
                onClick={() => {
                    localStorage.setItem("emailOfCandidateForViewByVoter",props.candidate.email);
                    history.push("/CandidateProfile")
                }}>
                View
            </button>
           </center>
        </td>


    </tr>
}
export default CandidateRow;
