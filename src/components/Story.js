import { Link } from 'react-router-dom';
import scoreIcon from '../images/score-icon.svg';
import {timeConverter} from '../utils/utils';

function Story(props) {
    function handleClick() {
        props.onOpenStory(props.story);
    };

    return (
        <Link to="/story" className="story" onClick={handleClick}>
            {/* <article className="story"> */}
                <div className="story__top-wrapper">
                    <h2 className="story__title">{props.story.title}</h2>
                    <p className="story__text">
                        <img className="story__score-icon" src={scoreIcon} alt="Иконка рейтинга"/>
                        {props.story.score}
                    </p>
                </div>
                <div className="story__down-wrapper">
                    <p className="story__text"><span className="story__text-accent">By: </span>{props.story.by}</p>
                    <p className="story__text"><span className="story__text-accent">Posted at: </span>{timeConverter(props.story.time)}</p>
                </div>
            {/* </article> */}
        </Link>
    );
}

export default Story;
