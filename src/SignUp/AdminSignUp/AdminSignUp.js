


function AdminSignUp() {
    return <>

        <div>
            <div className="jumbotron" style={{ backgroundColor: 'rgb(250, 248, 228)' }} >
                <center><h1>Admin Sign Up</h1></center>
                <center><h2>Enter Details</h2></center>
            </div>
        </div>




        <div className="container-fluid text-center">

            <div className="row content">
                <div className="col-lg-5 sidenav">

                    <div>
                        <div><center><big>First Name</big></center></div>
                        <input type="text" className="form-control"></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Last Name</big></center></div>
                        <input type="text" className="form-control"></input>
                    </div>

                    <br></br><br></br>
                    <select class="form-select form-select-lg lg-3" aria-label=".form-select-lg example">
                        <option selected disabled>Open this select menu</option>
                        <option value="1">Admin</option>
                        <option value="2">System User</option>
                        <option value="3">Data Handler</option>
                    </select>

                </div>
                <div className="col-lg-2 text-center">

                </div>
                <div className="col-lg-5 sidenav">

                    <div>
                        <div><center><big>Enter A Valid Email</big></center></div>
                        <input type="text" className="form-control"></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Password</big></center></div>
                        <input type="text" className="form-control"></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Confirm Password</big></center></div>
                        <input type="text" className="form-control"></input>
                    </div>

                </div>
            </div>
            <br></br><br></br>
            <div><button type="button" class="btn btn-success">Submit</button></div>
        </div>


    </>
}

export default AdminSignUp;