import React,{Component} from 'react';
import {connect} from 'react-redux';
import Page from './page';


class Results extends Component{
    render(){
        const {results}= this.props;
       
        return(
            <Page
            results={results}/>
        );
    }
}
const mapStatetoProps=(state)=>{

    return{
        results:state.results,

    };
};
const component = connect(mapStatetoProps)(Results);

export default component