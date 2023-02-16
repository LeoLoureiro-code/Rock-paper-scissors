import './Board.css'

const Board = () =>{
    return(
        <div>
            <div className="title-div">
                <p>Rock</p>
                <p>Paper</p>
                <p>Scissors</p>
            </div>
            <div className="Score">
                <p>Score</p>
                <p>0</p>
            </div>
        </div>
    )
}

export default Board