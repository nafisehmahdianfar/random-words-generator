import React, {Component} from 'react';

class RandomWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    render() {
        const{number}=this.state
        return (
            <div style={{position: 'absolute', top: '50%', left: '50%'}}>
                <textarea style={{resize: 'none', margin: '-25px 0px 40px -65px'}}></textarea>
                <div style={{margin: '-25px 0px 0px -25px'}}>
                    <button onClick={() => {if(number>=1)
                        this.setState({number:number - 1})
                    }}
                        style={{
                            color: 'white',
                            backgroundColor: '#d9534f',
                            borderRadius: "4px 0px 0px 4px",
                            fontSize: '20px',
                            width: '30px'
                        }}>-
                    </button>
                    <input style={{width: '30px', textAlign: 'center', fontSize: '20px'}} value={number}
                    ></input>
                    <button onClick={() => {this.setState({number:number + 1})
                    }}
                        style={{
                            color: 'white',
                            backgroundColor: '#5cb85c',
                            borderRadius: "0px 4px 4px 0px",
                            fontSize: '20px',
                            width: '30px'
                        }}>+
                    </button>
                </div>
            </div>
        );
    }

}

export default RandomWords;