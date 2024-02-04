"use client";

import Slider from "react-slick";
import Card from "../../GenericComponents/Card";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useTheme } from "../../Theme/themes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./FromPDF.module.scss";

interface SlideData {
  iconSrc: string;
  title: string;
  paragraph: string;
  link: string;
}

interface FromPDFProps {
  slidesData: SlideData[];
}

interface ArrowProps {
  className?: string;
  onClick?: () => void;
}

const FromPDF: React.FC<FromPDFProps> = ({ slidesData }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const { theme } = useTheme();

  return (
    <>
      <div
        className={`${styles.frompdf} ${
          theme === "dark" ? styles["dark-theme"] : ""
        }`}
      >
        <h2 className={styles.frompdf_title}>Convert From PDF</h2>
        <Slider {...sliderSettings}>
          {slidesData.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <Card
                iconSrc={slide.iconSrc}
                title={slide.title}
                paragraph={slide.paragraph}
                link={slide.link}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

const CustomPrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => (
  <div
    className={`${className} ${styles.customArrow} slick-prev`}
    onClick={onClick}
  >
    <BiChevronLeft size={30} style={{ fill: "black" }} />
  </div>
);

const CustomNextArrow: React.FC<ArrowProps> = ({ className, onClick }) => (
  <div
    className={`${className} ${styles.customArrow} slick-next`}
    onClick={onClick}
  >
    <BiChevronRight size={30} style={{ fill: "black" }} />
  </div>
);

export default FromPDF;
