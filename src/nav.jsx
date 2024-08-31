import './nav.css';
const Nav = ()=>{
return(
    <>
 <div className="navbar">
         <i><h1>LAKME</h1></i>
          <b><ul type="none">
            <li>categories</li>
            <li>brands</li>
            <li>luxe</li>
            <li>Nykaa fashion</li>
            <li>beauti advice</li>
         </ul></b>
          <div><input  type="text" placeholder="search on Nykaa"/> </div>
     <div><button >sign in</button></div>
     </div>
    </>
)
}
export default Nav;