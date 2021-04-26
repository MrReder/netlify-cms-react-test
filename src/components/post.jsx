import React from 'react';
import '../post.css';
import subscribedicon from '../img/check.svg';
import dot from '../img/dot.svg';
import dots from '../img/dots.svg';
import footerRespIcon from '../img/resp.svg';
import footerRetwIcon from '../img/retw.svg';
import footerLikeIcon from '../img/like.svg';
import footerShareIcon from '../img/share.svg';



export const Post = ({ userAvatar, userName, nick, date, userText, postImg,
    footerRespIconContent, footerRetwIconContent, footerLikeIconContent }) => {
    return (
        <section className="page-style">
            <div className="avatar-wrapper"><img className="avatar" src={userAvatar} alt=" "></img></div>
            <div className="post-head">
                <div className="user-wrapper">
                    <h3 className="user-name">{userName}</h3>
                    <img className={"sub-icon"} src={subscribedicon} style={{ width: 15, height: 15 }} alt=" "></img>
                    <p className="user-nick">{nick}</p>
                    <img className="single-dot" src={dot} style={{ width: 15, height: 15 }} alt=" "></img>
                    <span className="date">{date}</span>
                </div>
                <img className="dots-menu" src={dots} alt=" "></img>
            </div>
            <div className="user-text">{userText}</div>
            <div><img className="postImg" src={postImg} alt=" "></img></div>
            <div className="posts-footer">
                <div className="footer-item">
                    <img className="footerIcon footerRespIcon" src={footerRespIcon} style={{ width: 15, height: 15 }} alt=" "></img>
                    <span className="footerIconContent">{footerRespIconContent}</span>
                </div>
                <div className="footer-item">
                    <img className="footerIcon footerRetwIcon" src={footerRetwIcon} style={{ width: 20, height: 20 }} alt=" "></img>
                    <span className="footerIconContent">{footerRetwIconContent}</span>
                </div><div className="footer-item">
                    <img className="footerIcon footerLikeIcon" src={footerLikeIcon} style={{ width: 15, height: 15 }} alt=" "></img>
                    <span className="footerIconContent">{footerLikeIconContent}</span>
                </div><div className="footer-item">
                    <img className="footerIcon footerShareIcon" src={footerShareIcon} style={{ width: 15, height: 15 }} alt=" "></img>
                </div>
            </div>

        </section>
    )
};

