import React, { useState, useEffect } from 'react';
import Todos from './Todos';

import axios from 'axios'
import Form from './Form';

function App() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://react-cnestor.herokuapp.com')
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <Form />
                <Todos data={data} />
            </header>
        </div>
    );
}

export default App;
