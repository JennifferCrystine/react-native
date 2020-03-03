import React from 'react';

export default class Tweets extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tweets: []
        }
    }

    async componentDidMount(){
        try{
            const resp = await fetch("https://api-tweets-neymar.herokuapp.com/tweets#index");
            const json = await resp.json();
            this.props.updateContador(json.length)
            this.setState({tweets: json})
        } catch(e){
            console.error(e);
        }
    }

    render() {
       return(
            <div>
                {this.state.tweets.map(tweet => <h2 key={tweet.id}>{tweet.conteudo}</h2>)}
            </div>
       );
    }
}