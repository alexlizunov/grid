import axios from "../utilities/axios";

const PostsService = {
    getPosts: async () => await axios.get('/flow')
}

export default PostsService;