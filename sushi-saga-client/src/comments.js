import React from 'react';

class Comments extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: null
        }
    }

    funcName = () => {
        this.setState({
            name: null
        }, () => console.log(`Runs after setState`));
    }

    render() {
        return (

            <div>
                {this.funcName}
            </div>
        )
    }
}

export default Comments;


/* 
   renderPlates takes an array 
   and renders an empty plate
   for every element in the array
*/

