import React, {useContext, useState} from 'react';
import firebase from '../scrabble/Firebase';
import UserContext from '../scrabble/UserContext';

const AddScoreEntryForm = () => {
    //context state frá App.js
    const scoreContext = useContext(UserContext);

    const [name, setName] = useState('');
    const [score, setScore] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        firebase
        .firestore()
        .collection('data')
        .add({
            name,
            score: parseInt(scoreContext)
        })
        .then(() => {
            setName('')
            setScore('')
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text' value={name} onChange={e => setName(e.currentTarget.value)} className= 'App-input-box' maxLength={20} placeholder='Skriva títt navn her' />
            <input type="hidden" value={score} onChange={e => setScore(e.currentTarget.value)} className= 'App-input-box' placeholder='Skriva score her' />
            <input type="submit" value="Goym" className='App-button' />
        </form>
    )
}
export default AddScoreEntryForm;