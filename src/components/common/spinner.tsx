import * as React from 'react';

export default class Spinner extends React.PureComponent {
    render() {
        return (
            <p className="text-center"><i className="fa fa-refresh fa-spin fa-3x fa-fw" /></p>
        );
    }
}