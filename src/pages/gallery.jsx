import img1 from '../gallery-img/img1.JPG';
import img2 from '../gallery-img/img2.JPG';
import img3 from '../gallery-img/img3.JPG';
import img4 from '../gallery-img/img4.JPG';
import img5 from '../gallery-img/img5.JPG';
import img6 from '../gallery-img/img6.JPG';
import img7 from '../gallery-img/img7.JPG';
import img8 from '../gallery-img/img8.jpg';
import img9 from '../gallery-img/img9.JPG';

import './gallery.css';




export const Gallery = () => {


    const showThumbnail = (href, title) => {
        const largeImg = document.querySelector('#largeImg');
        largeImg.src = href;
        largeImg.alt = title;
    }


    return (
        <div class="swiper-desktop-container">
            <p><img id="largeImg" src={img1} alt="Large image"></img></p>
            <div class="thumbs-container">
                <div id="thumbs" onClick={(event => {
                    let thumbnail = event.target.closest('a');

                    if (!thumbnail) return;
                    showThumbnail(thumbnail.href, thumbnail.title);
                    event.preventDefault();
                })}>
                    <a href={img1} title="pic1"><img src={img1} class="thumbs-item"></img></a>
                    <a href={img2} title="pic2"><img src={img2} class="thumbs-item"></img></a>
                    <a href={img3} title="pic3"><img src={img3} class="thumbs-item"></img></a>
                    <a href={img4} title="pic4"><img src={img4} class="thumbs-item"></img></a>
                    <a href={img5} title="pic5"><img src={img5} class="thumbs-item"></img></a>
                    <a href={img6} title="pic6"><img src={img6} class="thumbs-item"></img></a>
                    <a href={img7} title="pic7"><img src={img7} class="thumbs-item"></img></a>
                    <a href={img8} title="pic8"><img src={img8} class="thumbs-item"></img></a>
                    <a href={img9} title="pic9"><img src={img9} class="thumbs-item"></img></a>
                </div>
            </div>
            <h3>Gallery taken and adapted from my previous project
                <button className="anchor-btn">
                    <a href="https://fringe-studio.netlify.app/fringe-style.html" target="_blank" className="href-class">fringe-studio.netlify.app</a>
                </button>
            </h3>
            <footer></footer>
        </div>
    )
}