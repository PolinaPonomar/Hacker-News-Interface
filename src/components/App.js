import { useEffect, useState } from 'react';
import * as api from '../utils/Api';
import Story from './Story';

function App() {
    const [storiesIds, setStoriesIds] = useState([]);
    useEffect(() => {
        api.getIdsOfNewStories()
        .then((ids) => {
            setStoriesIds(ids);
            storiesIds.sort((a, b) =>  b - a);

        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
      
    // console.log(storiesIds.slice(0,100));
    return (
        <>
        {
            storiesIds.slice(0,100).map(id => 
                ( <Story id={id} key={id}/> )
            )
        }
        </>
    );
}

export default App;
