"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import TeamSlide from './TeamSlide';
import image1 from '../../../public//assets/images/team/1.jpg'
import image2 from '../../../public//assets/images/team/2.jpg'
import image3 from '../../../public//assets/images/team/3.jpg'
import image4 from '../../../public//assets/images/team/1.jpg'
import SectionTitle from '../SectionTitle/SectionTitle';

const Team = () => {
    
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <SectionTitle subTitle={'Team'} title={"Meet Our Team"} description={"The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. "}></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <TeamSlide image={image1}></TeamSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <TeamSlide image={image2}></TeamSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <TeamSlide image={image3}></TeamSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <TeamSlide image={image4}></TeamSlide>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Team;