import "./props.css";
const Props = ({user,text,idx})=>{  
  // console.log( user );
  return (
    <div className="card">
      <img 
        src={`/images/img-0${idx}.png`} alt="카드이미지01"
      />
      <h2>{user}</h2>
      <p>{text}</p>
      
    </div>
  );
}
export default Props;