import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as api from '../utils/Api';
import Header from './Header';
import Main from './Main';
import StoryPage from './StoryPage';
import Footer from './Footer';
// import {timeConverter} from '../utils/utils';

function App() {
    const [storiesIds, setStoriesIds] = useState([]);
    // const [story, setStory] = useState({});

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

    // const makeStorie = (id) => {
    //     api.getStorieById(id)
    //     .then((story) => {
    //         return {
    //             title: story.title,
    //             score: story.score,
    //             author: story.by,
    //             time: timeConverter(story.time),
    //         }
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });

    // };

    // console.log(storiesIds);
      
    return (
        <div className="page">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Main storiesIds ={storiesIds}/>
                </Route>
                <Route path="/story">
                    <StoryPage/>
                </Route>
                {/* <Route>
                    <NotFoundPage/>
                </Route> */}
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
