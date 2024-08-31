const Middle = ()=>{
    const para = {border:"2px solid",
        backgroundColor:"lightblue" ,
         height:'100px', 
         width:'500px'

    }
    return(
        <>
        <div>
            <h1 style={{color: 'yellow',backgroundColor:'red'}}>this is middil content</h1>
            <p style={para}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br></br>
      Hic consequatur asperiores laboriosam provident vel excepturi iure,<br></br>
       delectus perferendis, at tempora natus assumenda inventore quam amet quas ratione. <br></br>
       Ipsum, cumque non.100</p>
      
       <button>click here</button>
        </div>
        </>
    )
}
export default Middle;