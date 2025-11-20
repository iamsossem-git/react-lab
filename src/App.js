import Props from "./day1/Props";
const App = ()=>{
  return (
    <div className="app">
      <h1>리액트 실습</h1>
      <Props user='춘향이' text='첫번째' idx={1} />
      <Props user='홍길동' text='두번째' idx={2} />
      <Props user='갑순이' text='세번째' idx={3} />
    </div>
  );
}
export default App;