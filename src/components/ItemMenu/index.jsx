import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { CardFood } from "../../components/CardFood";

import { Container } from "./styles";

export function ItemMenu({ title, dataCardFood = [] }) {
  useEffect(() => {
    console.log(dataCardFood);
  }, []);

  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <div>
          <Swiper
            slidesPerView={3}
            // centeredSlides={true}
            spaceBetween={27}
            loop={true}
            navigation={true}
            modules={[Navigation]}
          >
            {dataCardFood.length > 0 &&
              dataCardFood.map((food) => (
                <SwiperSlide key={food.id}>
                  <CardFood dataFood={food} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
}
