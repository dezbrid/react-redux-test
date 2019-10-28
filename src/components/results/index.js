import React,{Component} from 'react';
import {connect} from 'react-redux';
import Page from './page';


class Results extends Component{
    render(){
        const {suggestions}= this.props;
        console.log (suggestions)
        return(
            <Page/>
        );
    }
}
const mapStatetoProps=(state)=>{

    return{
        suggestions:state.suggestions,

    };
};
const component = connect(mapStatetoProps)(Results);

export default component