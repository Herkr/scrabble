import React, {useState, useEffect} from 'react';
import firebase from '../scrabble/Firebase';

function useScore() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase
        .firestore()
        .collection('data')
        .orderBy('score','desc')
        .limit(10)
        .onSnapshot((snapshot) => {
            const newScores = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setScores(newScores);
        })
        return () => unsubscribe()
    }, [])
    return scores;
}

const ScoreList = () => {
    const scores = useScore([]);
    var count = 1;

    return (
        <div>
            <table align='center'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Score</td>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((s) =>
                    <tr key={s.id}>
                        <td>{count++}</td>
                        <td>{s.name}</td>
                        <td>{s.score}</td>
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
