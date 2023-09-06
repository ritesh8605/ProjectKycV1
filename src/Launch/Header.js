
import '/node_modules/bootstrap/dist/css/bootstrap.css';

import {useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Header() {

  const history=useHistory();

  const GoToLogin=()=>{
    history.push('/Login');
  }

    return<>
    <nav className="navbar navbar-default" style={{backgroundColor:'Cornsilk',color:"white"}}>
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">PROJECT KYC</a>
    </div>
    <ul className="nav navbar-nav">
      {/* <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li> */}

      
      <button style={{position: 'absolute', right: 10,margin: 5}} type="button" onClick={GoToLogin} className="btn btn-success">Login</button>

    </ul>
  </div>
</nav>
        </> 
}

export default Header;  