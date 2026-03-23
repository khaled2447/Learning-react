export const WinMessage = ({moves}) =>{
    return(<div className="win-message">
        <h2>CONGRATULATIONS</h2>
        <p>YOU WON IN {moves} MOVES</p>
    </div>

    )
}