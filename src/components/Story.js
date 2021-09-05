import { useEffect, useState } from 'react';
import scoreIcon from '../images/score-icon.svg';
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

    return (
        <article className="story">
            <div className="story__top-wrapper">
                <h2 className="story__title">{story.title}</h2>
                <p className="story__text">
                    <img className="story__score-icon" src={scoreIcon} alt="Иконка рейтинга"/>
                    {story.score}
                </p>
            </div>
            <div className="story__down-wrapper">
                <p className="story__text"><span className="story__text-accent">By: </span>{story.author}</p>
                <p className="story__text"><span className="story__text-accent">Posted at: </span>{story.time}</p>
            </div>
        </article>
    );
}

export default Story;
