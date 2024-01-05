import {posts} from "../../data";
import {Card} from "../../components/Card/Card";
import "./home.css";

export const Home = () => {
    return (
        <div className={"home"}>
                {posts.map((post) => {
                    return <Card key={post.id} post={post} />
                })}
        </div>
    )
}