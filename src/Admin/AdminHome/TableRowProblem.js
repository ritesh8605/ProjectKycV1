

function TableRowProblem(props)
{
    
    return <tr>
                   

                    <td>
                        {props.problem.CandidateName}
                    </td>

                    <td>
                        {props.problem.Problem}
                    </td>

                    <td>
                        {props.problem.Like_count}
                    </td>

                    <td>
                        {props.problem.Dislike_count}
                    </td>

                    <td>
                        {props.problem.DateTime}
                    </td>

                    {/* <td>
                        {props.problem.Sensitional_tag}
                    </td> */}

                    {/* <td>
                        {props.problem.Tweet_by_candidate}
                    </td> */}

                    <td>
                    <button className='btn btn-danger'
                    onClick={()=>{
                     props.deleteProblem(props.emp.ENo)
                    }}>
                    Delete
                    </button>
                    </td>
           </tr>
}
export default TableRowProblem;