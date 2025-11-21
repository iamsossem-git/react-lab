import './state.css';
import Like from "./Like";
import Mode from "./Mode";
import StateBase from "./StateBase";
import Toggle from "./Toggle";
import IsLike from './IsLike';

const State = ()=>{
  return (
    <div className="state">
      {/* <StateBase />
      <Like />
      <Mode /> */}
      {/* <Toggle /> */}
      <IsLike />
    </div>
  );
}
export default State;