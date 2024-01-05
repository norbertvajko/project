import "./card.css";
import {Post} from "../../pages/Post/Post";
import {Link} from "react-router-dom";
import {APP_ROUTES} from "../../routes";

interface CardProps {
    post: Post;
}

export const Card = (props: CardProps) => {
    const {post} = props;

    return (
        <div className={"card"}>
            <Link to={`${APP_ROUTES.POST}/${post.id}`} className={"link"}>
                <span className="title">{post.title}</span>
                <img src={post.img} alt="" className="img"/>
                <p className={"desc"}>{post.desc}</p>
                <button className="card-button">Read More</button>
            </Link>
        </div>
    )
}