import React,{Component} from 'react';
import {connect} from 'react-redux';
import Page from './page';


class Results extends Component{
    render(){
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
connect(mapStatetoProps);

export default Results