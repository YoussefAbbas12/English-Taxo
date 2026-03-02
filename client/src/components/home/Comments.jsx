import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Home.css";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Comments = () => {
  const commentsData = [
    {
      id: 1,
      name: "Fadia Karrar",
      image: "assets/person1.png",
      comment:
        "صراحه مميزين..دقة والتزام ومتابعه واهتمام ..والمس اسلوبها حلو وممتع وجاذب ..وبنتي استفادت جدا مس رنا فعلا اسلوبها وشرحها حلووو جدا ومجتهدة وبتتعب معاهم ربنا يبارك لها",
    },
    {
      id: 2,
      name: "Amany Darwesh",
      image: "assets/person2.png",
      comment:
        "الكورس مميز جدا الصراحه وأحدث عندي طفره مع أولادي في اللغه. نشكر كل القائمين علي هذه المنظومة، كل الميسات رائعات، ونخص بالذكر مس ريهام بدر، مستمره معنا منذ اكتر من باتش رائعة ممتازه حبوبة. الأسلوب في التعلم شيق لايدع مجال للطفل لعدم الانتباه لانه تعلم عن طريق المنافسه واللعب وهناك تشجيع دائم للاولاد.نشكركم جدا ومزيد من التقدم والنجاح..",
    },
    {
      id: 3,
      name: "Yasmen Mohamed",
      image: "assets/person3.png",
      comment:
        "حقيقي كل شئ في الكورس رائع وطريقة الشرح وتنوع طرق الشرح وإيصال المعلومة وكمان المتابعة بعد السيشن وإرسال الكلمات بتسجيل صوتي وان الطالب يقوم بتسجيلها أيضا حقيقي إضافة كبيرة وكل مرة بحس بتحسن في مستوى بنتي خديجة حتى انها اتعلقت جدا بمس امل وباسلوبها وبطريقتها في جذب الطلاب وتشجيعهم وادارتها للسيشن ومستمرين معاكم بإذن الله 🌷🌷",
    },
    {
      id: 4,
      name: "Gogo Adel",
      image: "https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/560316107_2160006511190698_6075995847210763999_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=BXtW9J3L0tgQ7kNvwEXDSXn&_nc_oc=Adlrn5dypI8LCJQM3oovCOhic9m5zeTlMcVBjsu0a-1svHCHNXyVUb33DP085GnM9uM&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=_t_a-ubXfj6mTVA-Y0WD6g&oh=00_AftwGPsQ4YKZoN7WqNViwn5wG6enCqKOfkyK6x9Q-DCGzw&oe=69A68541",
      comment:
        "من أفضل الاكاديميات الى تعاملت معاهم ماشاء الله بشكرا حضراتكم جدا وبالاخص بشكر مس ريهام بدر من كل قلبى من أحسن واشطر وامهر المسات الى فرقت مع ولادى جدا سواء فى القرأه او المحادثه معاها من رمضان الى فات وان شاء الله مكملين معاكم ديما من نجاح لنجاح",
    },
    {
      id: 5,
      name: "Mona Rashed",
      image: "https://scontent.fcai20-6.fna.fbcdn.net/v/t1.6435-9/134989016_3589739957776011_2132852070760626395_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=nJd1jhvVngwQ7kNvwEsap2d&_nc_oc=AdnjrBptPYlepuBlMPN4hwn1h413ZnZbZ3vrlGrhHrxvIjlscYHH8boKRXO5N0fuDCo&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=ixNDAz4jqxMyIbLcHEsyOQ&oh=00_AfvmGbXAihnI-YSe8iTsqPMTyPrYJHaO9LlXOZHds453Vg&oe=69C807AD",
      comment:
        "فعليا أكثر من رائعة نظام متابعة التزام دقة و طاقم متمكن متميز جدا ورائع ادارة اكثر من رائعة فعليا كل الشكر والتقدير كل باتش أفضل من زي قبل",
    },
    {
      id: 6,
      name: "Yasmen Mohamed Abd Elraouf",
      image: "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-1/575094391_10234073389598843_7678517632618162973_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=bEKLOuzKs-4Q7kNvwEFAbLj&_nc_oc=AdkCUmZwiVonfjjnr_CddaBIb7M8ZE4OhoMyKNfrgwQIqtJ8EUz1VZ_oswymJvGY-wY&_nc_zt=24&_nc_ht=scontent.fcai20-4.fna&_nc_gid=0nvEUj471RbwqYXtLA5BFQ&oh=00_Aft0stD_xm_5L2t7W4WEO3GERh8sVXV2eijDwd26dBvrEA&oe=69A678DB",
      comment:
        "حقيقي كل شئ في الكورس رائع وطريقة الشرح وتنوع طرق الشرح وإيصال المعلومة وكمان المتابعة بعد السيشن وإرسال الكلمات بتسجيل صوتي وان الطالب يقوم بتسجيلها أيضا حقيقي إضافة كبيرة وكل مرة بحس بتحسن في مستوى بنتي خديجة حتى انها اتعلقت جدا بمس امل وباسلوبها وبطريقتها في جذب الطلاب وتشجيعهم وادارتها للسيشن ومستمرين معاكم بإذن الله 🌷🌷",
    },
    {
      id: 7,
      name: "Marwa Lashen",
      image: "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-1/641052803_3291406627704714_4663839081284277379_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ajj_pPaZLgsQ7kNvwEwfWZx&_nc_oc=Adk4-ZYDmA7KtzROMqrJIVwVsTozQQDl236drzyJ0PG4jY2VX3SGQy0ZJgp2cBCux-I&_nc_zt=24&_nc_ht=scontent.fcai20-6.fna&_nc_gid=PMcoD7XCsUMibJEPSsYarQ&oh=00_Afui4OglxKMSrhE-oH7Qwrhvod4X7dVOYkbYZBMsYqQNeQ&oe=69A6890F",
      comment:
        "أفضل أكاديمية أشتركنا معاها مس منه أكثر من رائعه رغم ان الاونلاين للسن الصغير صعب بس مس منه بتدير السيشن بإحترافية كأنه حضورى شكراً مس منه وكل الكادر 🌹🌹🌹🌹🌹🌹",
    },
    {
      id: 8,
      name: "Abair Mokhtar",
      image: "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/316947115_2633769563424203_2391762358667703849_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=MAnXF-Kb0ssQ7kNvwHXCGzc&_nc_oc=AdmOrpC2V1jhdoyNh5RxWnPsA7YZGcRlE-PrG_CTrA-p8Bi1pS3e3kZQyCP2kDYJvUA&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=jnuVVqkDjvdmomXzxpjE5Q&oh=00_Afv_Qv6gdsX3X3CKBMS-6hjYATR-lJApLLoM9PoaxFLm-g&oe=69A68BE0",
      comment:
        "صراحة ما شاء الله كورس التأسيس إستفيدنا كتير كان ممتع وواضح والطريقة ممتازة المعلمة روان بارك الله فيك شكرا لكم جميعا على التعامل الراقي والمنظم",
    },
  ];

  return (
    <section className="comments-section">
      <div className="comment-title section-title">
        <h2>What Our Families Say</h2>
        <p>Join thousands of happy parents and students who trust English Taxo.</p>
      </div>
      <div className="comment-swipper swiper">
        
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
          {commentsData.map(({ id, name, image, comment }) => (
            <SwiperSlide key={id} className="comment-card swiper-slide" style={{width:"400px !important"}}>
              <img src="assets/quets.png" alt="" />
              <p className="comment-text">"{comment}"</p>
              <div className="comment-user">
                <img src={image} alt={name} />
                <h3>{name}</h3>
              </div>
            </SwiperSlide>
          ))}
          <li className="swiper-slide" style={{ visibility: "hidden" }}></li>
        </Swiper>

      </div>
    </section>
  );
};

export default Comments;