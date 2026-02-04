import "../Home.css"

const Comments = () => {
    const commentsData = [
        {
            id: 1,
            name: "Fadia Karrar",
            image: "assets/person1.png",
            comment: "صراحه مميزين..دقة والتزام ومتابعه واهتمام ..والمس اسلوبها حلو وممتع وجاذب ..وبنتي استفادت جدا مس رنا فعلا اسلوبها وشرحها حلووو جدا ومجتهدة وبتتعب معاهم ربنا يبارك لها"
        },
        {
            id: 2,
            name: "Amany Darwesh",
            image: "assets/person2.png",
            comment: "“الكورس مميز جدا الصراحه وأحدث عندي طفره مع أولادي في اللغه. نشكر كل القائمين علي هذه المنظومة، كل الميسات رائعات، ونخص بالذكر مس ريهام بدر، مستمره معنا منذ اكتر من باتش رائعة ممتازه حبوبة. الأسلوب في التعلم شيق لايدع مجال للطفل لعدم الانتباه لانه تعلم عن طريق المنافسه واللعب وهناك تشجيع دائم للاولاد.نشكركم جدا ومزيد من التقدم والنجاح..”"
        },
        {
            id: 3,
            name: "Yasmen Mohamed",
            image: "assets/person3.png",
            comment: "حقيقي كل شئ في الكورس رائع وطريقة الشرح وتنوع طرق الشرح وإيصال المعلومة وكمان المتابعة بعد السيشن وإرسال الكلمات بتسجيل صوتي وان الطالب يقوم بتسجيلها أيضا حقيقي إضافة كبيرة وكل مرة بحس بتحسن في مستوى بنتي خديجة حتى انها اتعلقت جدا بمس امل وباسلوبها وبطريقتها في جذب الطلاب وتشجيعهم وادارتها للسيشن ومستمرين معاكم بإذن الله 🌷🌷"
        }
    ]
    return (
    <section className="comments-section">
      <div className="comment-title section-title">
        <h2>What Our Families Say</h2>
        <p>Join thousands of happy parents and students who trust English Taxo.</p>
      </div>
      <div className="comment-swipper">
        <div className="angles">
          <i className="fa-solid fa-angle-left"></i>
          <i className="fa-solid fa-angle-right"></i>
        </div>
        {commentsData.map(({ id, name , image, comment }) => (
          <div key={id} className="comment-card">
            <img src="assets/quets.png" alt="" />
            <p className="comment-text">"{comment}"</p>

            <div className="comment-user">
              <img src={image} alt={name} />
              <h3>{name}</h3>
            </div>
          </div>
        ))}

        <div className="dots">
          <div className="active"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      
    </section>
  );
};


export default Comments
