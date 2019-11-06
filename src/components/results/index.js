import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Page from './page';


class Results extends Component{
    render(){
        const {results}= this.props;
       console.log (results)
        return(
            <Page
                results={results}
                goTo={(path)=>{
                        this.props.history.push(path);
                        }}
            />
        );
    }
}
const mapStatetoProps=(state)=>{

    return{
        results:state.results,

    };
};
const component = withRouter(connect(mapStatetoProps)(Results));

export default component