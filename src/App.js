import './App.css';
import Card from "./day2/Card";
import State from './day2/State';
import ListWrap from './day3/ListWrap';
import Parent from './day3/Parent';
import Event from './day4/Event';
import Style from './day5/Style';
import Effect from './day6/Effect';

const App = ()=>{
  return (
    // 화면에 보여지는 영역 : JSX
    // <div className="card-wrap">
    //   <Card file='day1' title='day1' />
    //   <Card file='day2' title='day2' />
    //   <Card file='krewday' title='day3' />
    // </div>
    // <State />
    <div className='app'>
      {/* <Parent /> */}
      {/* <ListWrap /> */}
      {/* <Event /> */}
      {/* <Style /> */}
      <Effect />
    </div>    
  );
}
export default App;