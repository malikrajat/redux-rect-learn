import React from 'react';

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.eleRef = React.createRef();
    }

	state = {term: ''};
    onInputChange(event) {
        console.log(event.target.value);
	 }
	 componentDidMount () {
        //  console.log(this.eleRef);
        this.eleRef.current.addEventListener('load', this.setSpans)
     }
     setSpans = () => {
        console.log(this.eleRef);
     }
	 onFormSubmit = e => {
		 e.preventDefault();
		 this.props.onSubmit(this.state.term);
	 }

    render () {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                    <input type="text" ref={this.eleRef}
								value={this.state.term} 
								onChange={ e => this.setState({ term : e.target.value})}
						  />
                    </div>
                </form>
            </div>
        )
    };
}
export default SearchBar;