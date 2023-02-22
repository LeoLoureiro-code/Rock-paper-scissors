import './Board.css'

const Board = (props) =>{
    return(
        <div className = "board">
            <div className = "">
                <p>Rock</p>
                <p>Paper</p>
                <p>Scissors</p>
            </div>
            <div>
                <p>Score</p>
                <p>0</p>
            </div>
        </div>
    )
}

export default Board