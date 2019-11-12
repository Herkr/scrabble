import React, {useState} from 'react';
import firebase from '../scrabble/Firebase';

const AddScoreEntryForm = () => {
    const [name, setName] = useState('');
    const [score, setScore] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        firebase
        .firestore()
        .collection('data')
        .add({
            name,
            score: parseInt(score)
        })
        .then(() => {
            setName('')
            setScore('')
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h4>add score</h4>
            <div>
                <label>Name</label>
                <input type='text' value={name} onChange={e => setName(e.currentTarget.value)} />
            </div>
            <div>
                <label>Score</label>
                <input type="number" value={score} onChange={e => setScore(e.currentTarget.value)} />
            </div>
            <button>Add</button>
        </form>
    )
}
export default AddScoreEntryForm;