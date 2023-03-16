// import logo from './logo.svg';
import forward from './forward.svg';
import play from './play.svg';
import rewind from './rewind.svg';
import './App.css';

function revindClick(e){
  e.preventDefault();
  console.log("revind click ho gaya")
}

function playClick(e){
  e.preventDefault();
  console.log("play click ho gaya")
}

function forwardClick(e){
  e.preventDefault();
  console.log("forward click ho gaya")
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <div className="Main">
        <div onClick={revindClick}>
          <img src={rewind} className="App-logo Align-left" alt="logo" />
        </div>
        <div onClick={playClick}>
          <img src={play} className="App-logo Align-center" alt="logo" />
        </div>
        <div onClick={forwardClick}>
          <img src={forward} className="App-logo Align-right" alt="logo" />
        </div>
      </div>

    </div>
  );
}

export default App;
