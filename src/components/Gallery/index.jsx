import * as React from 'react';
import Masonry from 'react-masonry-component';
import Card from "../Card";
import {Container} from "@material-ui/core";
import {useMappedState} from "redux-react-hook";
import usePosts from "../../hooks/usePosts";
import "./index.css"

const Gallery = () => {

    usePosts();

    const {posts} = useMappedState((state) => state);

    return (
        <Container>
            {
                posts.length > 0 ?
                    <Masonry
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={true}
                        style={{
                            height: 500,
                        }}
                    >
                        {
                            posts.map((item) => {
                                return (
                                    <Card item={item} key={"item" + item.id}/>
                                )
                            })
                        }
                    </Masonry> :
                    <div
                        className="no_items"
                    >
                        <p>No post</p>
                    </div>

            }

        </Container>
    );
}

export default Gallery;