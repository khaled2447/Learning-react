
export const GameHeader = () => {
    return <div className="game-header">
        <h1>Memory Card Game!!</h1>
        <div className="stats">
            <div className="stat-item">
                <span className="stat-label">score</span> 
                <span className="stat-value">0</span>
            </div>
            <div className="stat-item">
                <span className="stat-label">moves</span> 
                <span className="stat-value">0</span>
            </div>
        </div>
    </div>
}