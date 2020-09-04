import {useDispatch} from "redux-react-hook";
import {useEffect} from "react";

const usePosts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: "GET_POSTS"
        })
    }, [dispatch])

}

export default usePosts;