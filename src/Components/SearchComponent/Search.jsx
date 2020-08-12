import React, { Component, Fragment } from 'react';
import "./Search.styles.css";

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
    }


    handleChange = (e) => {
        this.setState({ term: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.FromheaderFormSubmit(this.state.term);
    };

    render() { 
        return (
            <Fragment>
                <div className="searchBlock">
                    <form id="form" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.state.term}
                            onChange={this.handleChange}
                        />
                        <button>
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
            </Fragment>
        );
    }
}
 
export default SearchComponent;