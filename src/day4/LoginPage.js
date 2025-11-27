import "./LoginPage.css";
import InputData from "./InputData"

const LoginPage = () => {
  const handleSubmit = (e)=>{
    //원래 가진 기능이 사용되지 않도록 방지
    e.preventDefault();  
  }
  return (
    <form className="login-page" onSubmit={handleSubmit}>
      <InputData title="아이디 또는 전화번호" />
      <InputData title="비밀번호" />
      <div className="checkbox">
        <input type="checkbox"/>
      </div>
      <button type="submit">로그인</button>
    </form>
  )
}

export default LoginPage