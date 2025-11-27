import { useState } from "react"

const InputData = ({title}) => {
  const [text,setText] = useState('');
  return (
    <div className="input-data">
      <input
        placeholder="값을 입력"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
      <label>{title}</label>
    </div>
  )
}

export default InputData