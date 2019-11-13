import React, {useState, useEffect} from 'react';
import firebase from '../scrabble/Firebase';

const SORT_OPTIONS = {
    'SCORE_DESC': {column: 'score', direction: 'desc'},
    'SCORE_ASC': {column: 'score', direction: 'asc'}

    
}

function useScore(sortBy = 'SCORE_DESC') {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase
        .firestore()
        .collection('data')
        .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
        .onSnapshot((snapshot) => {
            const newScores = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setScores(newScores);
        })
        return () => unsubscribe()
    }, [sortBy])
    return scores;
}

const ScoreList = () => {
    const [sortBy, setSortBy] = useState('SCORE_DESC');
    const scores = useScore(sortBy);

    return (
        <div>
            <h1 className='App-score'>Top 10 list</h1>
            <div>
                <label>Sort By:</label> {' '}
                <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                    <option value='SCORE_DESC'>score (most)</option>
                    <option value='SCORE_ASC'>score (least)</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Score</td>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((s) =>
                    <tr key={s.id}>
                        <td>{s.name}</td>
                        <td><code>{s.score} stig</code></td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ScoreList;

/*
<ol>
    {scores.map((s) =>
    <li key={s.id}>
        <div>
            {s.name} <code>{s.score} stig</code>
        </div>
    </li>
    )}
</ol>
*/
