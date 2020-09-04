import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import {Comment, Favorite} from "@material-ui/icons";
import "./index.css"

const Card = ({item}) => {

    return (
        <div className="card">
            <div>
                {item.image && <img
                    className="card_image"
                    src={item.image}
                    alt={item.text}
                />}
            </div>
            <div className="card_info">
                <p className="card_text">
                    {item.text}
                </p>
                <div
                    className="card_additional"
                >
                    <div className="card_owner">
                        <Avatar
                            src={item.ownerImage}
                            style={{
                                width: 18,
                                height: 18,
                                marginRight: 7
                            }}
                        />
                        <span>{item.ownerName}</span>
                    </div>
                    <div className="card_icons_container">
                        <div className="card_icons_numbers">
                            <Favorite className="favorite_icon"/>
                            <span>{item.likes}</span>
                        </div>
                        <div className="card_icons_numbers">
                            <Comment className="comment_icon"/>
                            <span>{item.comments}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card