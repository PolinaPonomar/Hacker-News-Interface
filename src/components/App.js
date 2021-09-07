import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as api from '../utils/Api';
import Header from './Header';
import Main from './Main';
import StoryPage from './StoryPage';
import Footer from './Footer';


function App() {
    const [stories, setStories] = useState([]);
    const [openStory, setOpenStory] = useState({});

    useEffect(() => {
        api.getNewStories()
        .then((stories) => {
            setStories(stories);
        })
        .catch((err) => {
            console.log(err);
        });

    }, []);

    const handleOpenStory = (story) => {
        console.log('я работаю');
        setOpenStory(story);
    };

    return (
        <div className="page">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Main
                        stories={stories}
                        onOpenStory={handleOpenStory}
                    />
                </Route>
                <Route path="/story">
                    <StoryPage openStory={openStory}/>
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
