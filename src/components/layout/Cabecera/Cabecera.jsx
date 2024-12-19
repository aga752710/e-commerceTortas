import { Link } from "react-router-dom";

const Cabecera = () => {
  return (
  
    <div style={{ 
      display:"flex",
      justifyContent:"center",
      background:"https://res.cloudinary.com/dvqc2bb12/image/upload/v1734448621/wp4720671-color-pastel-wallpapers_y4fa2u.jpg",
      backgroundSize:"cover"
    }}>
      <Link to="/">
      <img className='logo' src="https://res.cloudinary.com/dvqc2bb12/image/upload/v1734448621/logoMinamabe_pj1qw7.ico" style={{width:"100px", height:"120px"}} alt="logo" />
      </Link>
    <h1>MINAMABE REPO</h1>
        
        
    </div>
  )
}

export default Cabecera