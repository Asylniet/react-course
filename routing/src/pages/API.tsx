import { useState } from "react"
import { useGetPosts } from "../hooks/useGetPosts";
import { PostList } from "../components/Post/PostList";

export const API = () => {
    const [isEnabled, setIsEnabled] = useState(false); 
    const query = useGetPosts(isEnabled);

    return(
        <div className="m-5 grid justify-center">
            <h2 className="grid justify-center">API</h2>
            <p className="grid justify-center">data</p>
            <button className="border rounded-xl p-2 hover:bg-gray-300 hover:text-white" type="submit" onClick={() => {setIsEnabled(true)}}>Fetch Posts</button>
            <PostList isEnabled={isEnabled} query={query}></PostList>
        </div>
    )
}