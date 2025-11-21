import { useState } from "react"

const IsLike = () => {
  const [isLike, setIsLike] = useState(false);
  return (
    <div className="is-like">
      <p>현재 좋아요 : {isLike?"ON":"OFF"}</p>
      {isLike && <p>💕</p>}
      <button onClick={()=>{setIsLike(!isLike)}}>좋아요 토글</button>
    </div>
  )}

export default IsLike