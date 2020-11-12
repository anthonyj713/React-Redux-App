import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchMeme } from '../actions/memesActions';

const TrumpMeme = props => {
    useEffect(() => {
        props.fetchMeme();
    }, []);

    return (
        <div>
          <h1>Trumpism</h1>
          {props.isFetching && (
            <Loader type="Rings" color="#CC5500" height={500} width={500} />
          )}
          {props.meme && <h2>"{props.meme}"</h2>}
          {props.error && <p className="error">{props.error}</p>}
          <button onClick={props.fetchMeme}>Get Trump Quote</button>
        </div>
      );
    };

const mapStateToProps = state => {
    return {
        meme: state.memes.meme,
        isFetching: state.memes.isFetching,
        error: state.memes.error
    };
};

export default connect(
    mapStateToProps, { fetchMeme }
)(TrumpMeme);


