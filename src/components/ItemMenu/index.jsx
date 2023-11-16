import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { CardFood } from "../../components/CardFood";

import { Container } from "./styles";

export function ItemMenu({ title, dataCardFood }) {
  return (
    <Container>
      <div>
        <h1>Refeições</h1>
        <div>
          <Swiper
            slidesPerView={3}
            // centeredSlides={true}
            spaceBetween={27}
            loop={true}
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <CardFood />
            </SwiperSlide>
            <SwiperSlide>
              <CardFood />
            </SwiperSlide>
            <SwiperSlide>
              <CardFood />
            </SwiperSlide>
            <SwiperSlide>
              <CardFood />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
}
