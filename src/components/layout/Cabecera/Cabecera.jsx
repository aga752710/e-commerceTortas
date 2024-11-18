import { Link } from "react-router-dom";

const Cabecera = () => {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      background:"url(/images/wp4720671-color-pastel-wallpapers.jpg)",
      backgroundSize:"cover"
    }}>
      <Link to="/">
      <img className='logo' src="/images/logoMinamabe.ico" style={{width:"100px", height:"120px"}} alt="logo" />
      </Link>
    <h1>MINAMABE REPO</h1>
        
        
    </div>
  )
}

export default Cabecera