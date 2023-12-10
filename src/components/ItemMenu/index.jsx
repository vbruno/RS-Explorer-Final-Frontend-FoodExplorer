import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { CardFood } from "../../components/CardFood";

import { Container } from "./styles";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { DEVICE_TYPE } from "../../styles/deviceBreakpoints";

export function ItemMenu({ title, dataCardFood = [] }) {
  const isMobile = useMediaQuery(DEVICE_TYPE.MOBILE);

  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <div>
          <Swiper
            slidesPerView={isMobile ? 2 : 3}
            // centeredSlides={true}
            spaceBetween={12}
            loop={isMobile ? false : true}
            navigation={isMobile ? false : true}
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
