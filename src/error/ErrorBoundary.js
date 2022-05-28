import React from 'react';

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            haveanerror: false,
            errorMessage: ''
        };
    }

    static getDerivedStateFromError(error) {
        return { 
            haveanerror: true, 
            errorMessage: error.message,
            // errorMessage: 'We are working on it. Please try again later.',
            
         };
    }

    render() {
        if (this.state.haveanerror) {
            return (
                <div className="px-4 py-2 m-4">
                    <h1 className="mt-2 font-bold font-lato-300 text-lg mb-1">An error has occurred:</h1>
                    <p>{this.state.errorMessage}</p>
                    <button
                        className="px-4 py-2 rounded bg-red-warning active:outline text-sm"
                        onClick={() => (window.location.href = '/dashboard')}
                    >
                        Reload the page
                    </button>
                </div>
            );
        } 
        //eslint-disable-next-line
        return this.props.children;
    }
}

export default Error;