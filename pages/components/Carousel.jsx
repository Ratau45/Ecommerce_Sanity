import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import img from '../../public/tai-bui-Q-xGz9NOVOE-unsplash (2).jpg'
const items = [
  {
    src: 'https://i.ibb.co/5YmQZkD/resul-kaya-xx-L1-Fav-YOh0-unsplash-1.jpg',
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: 'https://i.ibb.co/JnTZR2z/tai-bui-Q-x-Gz9-NOVOE-unsplash-2.jpg',
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: 'https://i.ibb.co/QdPVLq8/high-gaming-pc.jpg',
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const Carousel = () => (
  <div className="carousel">
<UncontrolledCarousel items={items} />
  </div>
      
   
);

export default Carousel;