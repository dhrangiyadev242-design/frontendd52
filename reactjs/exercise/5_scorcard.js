
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
// Bootstrap contextual color per run value
const RUN_BTN_CLASS = {
    6: "btn-primary",
    4: "btn-success",
    3: "btn-info",
    2: "btn-warning",
    1: "btn-secondary",
    0: "btn-dark"
};
const RUN_VALUES = [6, 4, 3, 2, 1, 0];

class PlayerCard extends React.Component {
    static count = 1;

    constructor(props) {
        super(props);
        console.log('constructor is called...');
        this.name = props.name;
        this.playerNo = PlayerCard.count;
        PlayerCard.count = PlayerCard.count + 1;

        this.state = {
            counts: { 6: 0, 4: 0, 3: 0, 2: 0, 1: 0, 0: 0 },
            isOut: false,
            howOut: "",
            total: 0,
            balls: 0,
            sr: 0
        };
    }

    // mounting
    componentWillMount() {
        console.log("componentWillMount method is called...");
    }
    componentDidMount() {
        console.log("componentDidMount method is called...");
    }

    // updating
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate method is called');
        const currentBalls = RUN_VALUES.reduce((s, v) => s + this.state.counts[v], 0);
        const nextBalls = RUN_VALUES.reduce((s, v) => s + nextState.counts[v], 0);
        // block scoring once a player is out
        if (this.state.isOut && nextBalls > currentBalls) {
            return false;
        }
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate method is called...");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate method is called...");
        // only recompute total/balls/sr if a run count actually changed
        const countsChanged = RUN_VALUES.some(
            v => prevState.counts[v] !== this.state.counts[v]
        );
        if (countsChanged) {
            const total = RUN_VALUES.reduce(
                (sum, v) => sum + v * this.state.counts[v], 0
            );
            const balls = RUN_VALUES.reduce(
                (sum, v) => sum + this.state.counts[v], 0
            );
            const sr = balls > 0 ? ((total / balls) * 100).toFixed(1) : 0;
            this.setState({ total, balls, sr });
        }
    }

    // unmounting
    componentWillUnmount() {
        console.log("componentWillUnmount method is called...");
    }

    addRun = (value) => {
        if (this.state.isOut) return;
        this.setState(prev => ({
            counts: { ...prev.counts, [value]: prev.counts[value] + 1 }
        }));
    }

    toggleOut = () => {
        this.setState(prev => ({ isOut: !prev.isOut }));
    }

    handleHowOutChange = (e) => {
        this.setState({ howOut: e.target.value });
    }

    render() {
        const { counts, isOut, howOut, total, balls, sr } = this.state;

        return (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className={`card rounded-4 overflow-hidden ${isOut ? "border-danger" : "border-dark"}`}>
                    <div className={`card-header text-white text-center py-2 border-bottom border-dark border-2 ${isOut ? "bg-danger" : "bg-primary"}`}>
                        <h6 className="m-0 fw-bold">
                            <span className="badge bg-warning text-dark me-1">{this.playerNo}</span>
                            {this.name}
                            {isOut && <span className="badge bg-dark ms-2">OUT</span>}
                        </h6>
                    </div>

                    <div className="card-body bg-white p-3">
                        <div className="row g-2">
                            {RUN_VALUES.map(v => (
                                <div className="col-4" key={v}>
                                    <button
                                        type="button"
                                        disabled={isOut}
                                        onClick={() => this.addRun(v)}
                                        className={`btn ${RUN_BTN_CLASS[v]} w-100 fw-bold mb-2`}
                                    >
                                        {v === 0 ? "•" : v}
                                        <span className="badge bg-dark ms-1">{counts[v]}</span>
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={this.toggleOut}
                            className={`btn w-100 fw-bold mt-1 ${isOut ? "btn-outline-danger" : "btn-danger"}`}
                        >
                            {isOut ? "UNDO OUT" : "OUT"}
                        </button>

                        <input
                            type="text"
                            className="form-control border-dark text-center mt-2"
                            placeholder="How Out"
                            value={howOut}
                            onChange={this.handleHowOutChange}
                        />
                    </div>

                    <div className="card-footer bg-dark text-white text-center py-2 border-top border-dark border-2">
                        <small className="fw-bold">
                            Total: <span className="text-warning">{total}</span>
                            {" | "}Ball: <span className="text-warning">{balls}</span>
                            {" | "}SR: <span className="text-warning">{sr}</span>
                        </small>
                    </div>
                </div>
            </div>
        );
    }
}

class Scoreboard extends React.Component {
    render() {
        const players = Array.from({ length: 11 }, (_, i) => `Player ${i + 1}`);
        return (
            <div className="container py-4">
                <h2 className="fw-bold text-center mb-4">Batting Scoreboard - 11 Players</h2>
                <div className="row g-3">
                    {players.map(name => (
                        <PlayerCard key={name} name={name} />
                    ))}
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Scoreboard />);
