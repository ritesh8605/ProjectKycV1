

function TableRowComment(props)
{
    
    return <tr>
                   

                    <td>
                        {props.comment.Comment}
                    </td>

                    <td>
                        {props.comment.LikeCount}
                    </td>

                    <td>
                        {props.comment.DisLikeCount}
                    </td>

                    <td>
                        {props.comment.DateTime}
                    </td>

                    <td>
                        {props.comment.Sensitional}
                    </td>

                    <td>
                    <button className='btn btn-danger'
                    onClick={()=>{
                     props.deleteProblem(props.comment)
                    }}>
                    Delete
                    </button>
                    </td>
           </tr>
}
export default TableRowComment;