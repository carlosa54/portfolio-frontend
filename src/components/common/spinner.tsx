import * as React from 'react';

interface State {
    slowRequest: boolean;
    dots: string;
}

export default class Spinner extends React.PureComponent<any, State> {
    interval: number;
    constructor(props) {
        super(props);
        this.state = {
            slowRequest: false,
            dots: ''
        };
    }
    componentDidMount() {
        const stopper = '...';
        setTimeout(() => {
            this.setState({ slowRequest: true });
            this.interval = window.setInterval(() => {
                if (this.state.dots === stopper) {
                    this.setState({dots: ''});
                } else {
                    this.setState((prevState) => ({dots: prevState.dots + '.'}));
                }
            },                                 300);
        },         2000);
    }
    componentWillUnmount() {
        window.clearInterval(this.interval);
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <p><i className="fa fa-refresh fa-spin fa-3x fa-fw" /></p>
                {this.state.slowRequest && <p>Waking up server{this.state.dots}</p>}
            </div>
        );
    }
}