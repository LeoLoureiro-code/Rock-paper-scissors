import Board from './components/Board'
import './App.css';


const Styles = {
  scissorsGradient: "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));",
  paperGradient: "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));",
  rockGradient: "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));",
  darkText: "hsl(229, 25%, 31%)",
  scoreText: "hsl(229, 64%, 46%)",
  headerOutline: "hsl(217, 16%, 45%)",
  family: "Barlow Semi Condensed', sans-serif;",
  font400: "400",
  font600: "600",

}

const App = () =>{
  return(
    <div className ="container">
        <Board boardStyles = {Styles}>
          <PlayZone>
            
          </PlayZone>
        </Board>
    </div>
  )
}

export default App;
