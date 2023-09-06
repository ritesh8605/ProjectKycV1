import { useState } from "react";
import TableRowNewAdmin from "./TableRowNewAdmin";
import HeadNav from "../../Common/HeadNav";



function NewAdmin() {

    

    const [AllAdmin, setAllAdmin] = useState([{ UserId: '10023', FirstName: "Ritesh", LastName: "Padalwar", Roll: "System Admin" }, { UserId: '10023', FirstName: "Ritesh", LastName: "Padalwar", Roll: "System Admin" }, { UserId: '10023', FirstName: "Ritesh", LastName: "Padalwar", Roll: "System Admin" }, { UserId: '10023', FirstName: "Ritesh", LastName: "Padalwar", Roll: "System Admin" }, { UserId: '10023', FirstName: "Ritesh", LastName: "Padalwar", Roll: "System Admin" }, { UserId: '10023', FirstName: "Ritesh", LastName: "Padalwar", Roll: "System Admin" }, { UserId: '10023', FirstName: "Ritesh", LastName: "Padalwar", Roll: "System Admin" }, { UserId: '10023', FirstName: "Ritesh", LastName: "Padalwar", Roll: "System Admin" }, { UserId: '10023', FirstName: "Ritesh", LastName: "Padalwar", Roll: "System Admin" }])

    const Approve = () => {
        console.log("Approved")
    }


    const Discard = () => {
        console.log("Approved")
    }


    return <>

<HeadNav></HeadNav>


<br></br><br></br>

        <center>
            <h3>
                New Admin List
            </h3>
        </center>

<br></br><br></br>
        <div className="row content">
            <div className="col-lg-2 ">
            </div>
            <div className="col-lg-8 ">
                <table className='table table-striped myTable'>
                    <thead>
                        <th><center>Full Name</center></th>
                        <th><center>Roll</center></th>
                        <th><center>Approve</center></th>
                        <th><center>Discard</center></th>
                    </thead>
                    <tbody>
                        {
                            AllAdmin.map((admin) => {

                                return <TableRowNewAdmin key={admin.UserId}
                                    admin={admin}
                                    Approve={Approve}
                                    Discard={Discard}
                                />


                            }

                            )
                        }
                    </tbody>
                </table>


            </div>
            <div className="col-lg-2 ">
            </div>
        </div>




    </>
}

export default NewAdmin;