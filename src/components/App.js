import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as api from '../utils/Api';
import Header from './Header';
import Main from './Main';
import StoryPage from './StoryPage';

function App() {
    const [stories, setStories] = useState([]);
    const [openStory, setOpenStory] = useState({});
    const [openStoryComments, setOpenStoryComments] = useState([]);
    const [isSpinnerActive, setIsSpinnerActive] = useState(false);
    const [clickToUpdate, setClickToUpdate] = useState(false);
    const [updateOnceAMinute, setUpdateOnceAMinute] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('openStory')) {
            // чтобы при обновлении старницы с новостью, новость не терялась
            setOpenStory(JSON.parse(sessionStorage.getItem('openStory')));
        }
        if (sessionStorage.getItem('openStoryComments')) {
            // чтобы при обновлении старницы с новостью, комментарии не терялись
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
    }, [clickToUpdate]);

    useEffect(() => {
        setTimeout( () => {
            setUpdateOnceAMinute(!updateOnceAMinute);
            api.getNewStories()
            .then((stories) => {
                setIsSpinnerActive(false);
                setStories(stories);
            })
            .catch((err) => {
                setIsSpinnerActive(false);
                console.log(err);
            });
        }, 60000);
    }, [updateOnceAMinute]);

    const handleStoriesUpdate = () => {
        setClickToUpdate(!clickToUpdate);
    };

    const handleOpenStory = (story) => {
        setOpenStory(story);
        sessionStorage.setItem('openStory', JSON.stringify(story));
        handleUpdateComments(story);
    };

    const handleUpdateComments = (story) => {
        if (story.kids) {
            api.getComments(story.kids)
            .then((comments) => {
                setOpenStoryComments(comments);
                sessionStorage.setItem('openStoryComments', JSON.stringify(comments));
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }

    return (
        <div className="page">
            <Header onStoriesUpdate={handleStoriesUpdate}/>
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
                        onUpdateComments={handleUpdateComments}
                />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
