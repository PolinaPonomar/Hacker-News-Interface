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
    const [openStoryComments, setOpenStoryComments] = useState([]);
    const [isSpinnerActive, setIsSpinnerActive] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('openStory')) {
            // чтобы при обновлении старницы с новостью, новость не терялась
            setOpenStory(JSON.parse(sessionStorage.getItem('openStory')));
        }
        if (sessionStorage.getItem('openStoryComments')) {
            // чтобы при обновлении старницы с новостью, новость не терялась
            setOpenStoryComments(JSON.parse(sessionStorage.getItem('openStoryComments')));
        }
        setIsSpinnerActive(true);
        api.getNewStories()
        .then((stories) => {
            setIsSpinnerActive(false);
            setStories(stories);
        })
        .catch((err) => {
            setIsSpinnerActive(false);
            console.log(err);
        });

    }, []);

    const handleOpenStory = (story) => {
        setOpenStory(story);
        sessionStorage.setItem('openStory', JSON.stringify(story));
        if (story.kids) {
            api.getComments(story.kids)
            .then((comments) => {
                setOpenStoryComments(comments);
                sessionStorage.setItem('openStoryComments', JSON.stringify(comments));
            })
        }
    };

    return (
        <div className="page">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Main
                        stories={stories}
                        onOpenStory={handleOpenStory}
                        isSpinnerActive={isSpinnerActive}
                    />
                </Route>
                <Route path="/story">
                    <StoryPage 
                    openStory={openStory}
                    openStoryComments={openStoryComments}
                />
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
