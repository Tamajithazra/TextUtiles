import React,{useState} from 'react'


export default function TextForm(props) {
  const getStyle=(mode)=>{
    if(mode==="dark")
    {
      return{
        backgroundColor: "#121212",
          color: "white"
      };
    }else if(mode==="red-dark")
    {
       return{
        backgroundColor:"#730000",
        color:"#FFFACD"
      };
    }else if(mode==="blue-dark"){
        return{
          backgroundColor: "#111184",
          color: "#E0FFFF"
        }
    }
    else{
      return{
         backgroundColor:"white",
        color:"black"
      };
    }
  };
  const myStyle=getStyle(props.mode);
    const handleCopy=()=>{
      let text=document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleupClick=()=>{
        let newtext=Text.toUpperCase();
        setText(newtext);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handlelwClick=()=>{
      let newText=Text.toLowerCase();
      setText(newText);
    }
    const handleclearClick=()=>{
      let newText="";
      setText(newText);
    }
    const handleExtraSpaces=()=>{
      let newText=Text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    const handleinverseClick=()=>{
      let newText="";
      for(let i=Text.length-1;i>=0;i--)
          newText+=Text[i];
      setText(newText);
    }
    const[Text,setText]=useState(" ");
  return (
    <>
  <div className="container" style={myStyle}>
   <h1 className="my-2 mb-2" style={myStyle}>{props.heading}</h1>
  <div className="mb-3" style={myStyle}>
  <label htmlFor="mybox" className="form-label" style={myStyle}>Text Area</label>
  <textarea className="form-control" value={Text} onChange={handleOnChange} id="mybox" rows="10"style={myStyle}></textarea>
  <div className="mt-3">
  <button disabled={Text.length===0} className="btn-btn-uppercase mx-3 my-3" onClick={handleupClick} style={myStyle}>Upper Case</button>
  <button disabled={Text.length===0}className="btn-btn-lowerCase mx-3 my-3" onClick={handlelwClick} style={myStyle}>Lower Case</button>
  <button disabled={Text.length===0} className="btn-btn-inverse mx-3 my-3" onClick={handleinverseClick} style={myStyle}>Inverse</button>
  <button disabled={Text.length===0} className="btn-btn-clearText mx-3 my-3" onClick={handleclearClick} style={myStyle}>Clear</button>
  <button disabled={Text.length===0}className="btn-btn-DarkMode mx-3 my-3" onClick={handleCopy} style={myStyle}>Copy Text</button>
  <button disabled={Text.length===0}className="btn-btn-DarkMode mx-3 my-3" onClick={handleExtraSpaces} style={myStyle}>Remove Extra Spaces</button>
  </div>
</div></div>
<div className="container my-3" style={myStyle}>
  <h1 style={myStyle}>Your Text Summary</h1>
  <p style={myStyle}>{Text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {Text.length} Characters</p>
  <p style={myStyle}> Time to read this text={0.007*Text.split(" ").filter((element)=>{return element.length!==0}).length} mins</p>
  <h2 style={myStyle}>Preview</h2>
  <p style={myStyle}>{Text}</p>
</div>
</>
  )
}
