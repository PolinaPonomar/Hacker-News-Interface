import { useState } from 'react';
import { Card, ListGroup, Spinner } from 'react-bootstrap';
import * as api from '../utils/Api';
import Comments from './Comments';
import {timeConverter} from '../utils/utils';

function Comment(props) {
    const [isShowMoreButtonClick, setIsShowMoreButtonClick] = useState(false);
    const [openComments, setOpenComments] = useState([]);
    const [isSpinnerActive, setIsSpinnerActive] = useState(false);

    function handleClick() {
        setIsShowMoreButtonClick(!isShowMoreButtonClick);
        setIsSpinnerActive(true);
        api.getComments(props.comment.kids)
        .then((comments) => {
            setIsSpinnerActive(false);
            setOpenComments(comments);
        })
        .catch((err) => {
            setIsSpinnerActive(false);
            console.log(err);
        });
    };

    return (
        <ListGroup.Item>
            <Card.Text>{props.comment.text}</Card.Text>
            <div className="comment-info">
                <Card.Text>
                    <span className="text-accent">by</span> {props.comment.by} 
                    <span className="text-accent"> at</span> {timeConverter(props.comment.time)}
                </Card.Text>
                { props.comment.kids &&
                    (<>
                        <button type="button" className="show-more-button" onClick={handleClick}></button>
                    </>)
                }
            </div>
            { (props.comment.kids && isShowMoreButtonClick) && 
                <>
                {isSpinnerActive ? (
                    <Spinner animation="border" variant="dark"/>
                ) : (
                    <Comments kidsComments={openComments}></Comments>
                )}
                </>
            }
        </ListGroup.Item>
    );
}

export default Comment;
