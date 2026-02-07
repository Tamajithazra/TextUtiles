import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props){
  const getnavbarStyle=(mode)=>{
      if(mode ==='dark')
      {
       return{
         backgroundColor:"black",
         color:"white"
       }
      }else if(mode ==="red-dark")
      {
       return{
         backgroundColor:"#730000",
         color:"#FFFACD"
       }
      }else if(mode==="blue-dark")
      {
        return{
          backgroundColor: "#111184",
          color: "#E0FFFF"
        }
      }
      else
      {
       return{
        backgroundColor:"white",
         color:"black"
       }
      }
  };
  const myStyle=getnavbarStyle(props.mode);
  return (
   <nav className={`navbar navbar-expand-lg`} style={myStyle}>
  <div className='container-fluid'>
  {/*LEFT SECTION*/}
  <div className='brand'>{props.title}</div>
  {/*MIDDLE SECTION*/}
  <div className='Links'>
    <Link className='home' to='/'>HOME</Link>
    <Link className='about' to='/about'>{props.about}</Link>
    <a className='link' href='/'>LINK</a>
  </div>
  {/*Right Section*/}
  <div className='search-space'>
    <input type='text' placeholder='search'/>
    <button>search</button>
  </div>
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleRedDarkMode}/>
  <label className="form-check-label" for="switchCheckDefault">RedDarkMode</label>
</div>
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleBlueDarkMode}/>
  <label className="form-check-label" for="switchCheckDefault">BlueDarkMode</label>
</div>
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" for="switchCheckDefault">DarkMode</label>
</div>
  </div>
</nav>
  )
}
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    about: PropTypes.string
};

{/* in react 18++ versions we can not add default props for the function components like this.
 it is obsolate in react*/}
{/*Navbar.defaultProps={
  title: 'enter title here',
  about: 'enter about here'
};*/}