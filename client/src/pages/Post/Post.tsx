import {posts} from "../../data";
import "./post.css";
import {useLocation} from "react-router-dom";
export interface Post {
    id: number;
    title: string;
    img: string;
    desc: string;
    longDesc: string;
}

export const Post = () => {

    const location = useLocation();

    const path = location.pathname.split("/")[2];

    const post = posts.find(post => post.id.toString() === path);

    return (
        <div className={"post"}>
            <img src={post?.img} alt="" className="post-img"/>
            <h1 className="post-title">{post?.title}</h1>
            <p className="post-description">{post?.desc}</p>
            <p className="post-long-description">{post?.longDesc}</p>
        </div>
    )
}