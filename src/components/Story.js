import { useEffect, useState } from 'react';
import * as api from '../utils/Api';
import {timeConverter} from '../utils/utils';

function Story(props) {
    const [story, setStory] = useState({});

    useEffect(() => {
        api.getStorieById(props.id)
        .then((story) => {
            setStory({
                title: story.title,
                score: story.score,
                author: story.by,
                time: timeConverter(story.time),
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    
    // console.log(story);

    return (
        <p>{story.title}{story.time}</p>
    );
}

export default Story;
