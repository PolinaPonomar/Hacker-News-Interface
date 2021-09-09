import { Card, ListGroup } from 'react-bootstrap';
import {timeConverter} from '../utils/utils';

function Comment(props) {
    console.log(props.comment);
    function handleClick() {
        console.log("на меня нажали");
    };

    return (
        <ListGroup.Item>
            <Card.Text >{props.comment.text}</Card.Text>
            <div className="comment-info">
                <Card.Text >by {props.comment.by} at {timeConverter(props.comment.time)}</Card.Text>
                { props.comment.kids &&
                    (<>
                        <button type="button" className="show-more-button" onClick={handleClick}></button>
                    </>)
                }
            </div>
        </ListGroup.Item>
    );
}

export default Comment;
