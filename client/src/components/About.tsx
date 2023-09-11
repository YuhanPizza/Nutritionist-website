import 'font-awesome/css/font-awesome.min.css';

function About() {
  return (
    <div className="container mt-5">
      {/* Introduction */}
      <div className="card mb-5">
        <div className="card-body">
          <section className="mt-2 mb-2">
            <h2 className="text-center"><strong>About Candace</strong></h2>
            <p>
              Hi, I am Candace. I'm not just your average nutritionist; I'm also a passionate foodie on a mission to help
              you unlock your full wellness potential. My goal is to empower individuals to lead a healthy and vibrant
              life through the magic of nutrition. Here you'll find lots of nourishing and tasty recipes, advice on making
              nutritious choices, and nutrition myths debunked! For more information, check out my bio. Together, we'll
              embark on a flavorful and fulfilling adventure towards a healthier you! For more inspiration, follow me on
              <a href="https://www.instagram.com/flavourofhealth" target="_blank" rel="noopener noreferrer"> Instagram @flavourofhealth</a>.
            </p>
          </section>

          {/* Details */}
          <section className="mb-2">
            <div className="row">
              <div className="col-md-4">
                <img src="https://res.cloudinary.com/dusfrwsg5/image/upload/v1694385866/IMG_0246_cropped_tszvfj.jpg" alt="Candace" className="img-fluid" width="400" />
              </div>
              <div className="col-md-8">
                <h3><strong>My Journey Begins...</strong></h3>
                <p>at the University of Toronto, where I pursued a Bachelor of Science with double majors in Nutritional Science and Chemistry. This diverse academic foundation has empowered me to delve into the intricate chemistry of nutrition and its profound impact on health and disease.
                  To deepen my understanding of dietetic practices within health and food systems, spanning disease prevention, treatment, and recovery, I am completing the Nutrition and Food program at Toronto Metropolitan University in 2023 December.
                  Complementing my educational qualifications, I have gained practical experience as a Nutritionist by providing personalized, health-conscious dietary and lifestyle advice to clients. I excel in tailoring dietary recommendations to meet individual needs, facilitating clients in achieving their health objectives effectively.
                  Furthermore, I've collaborated with the marketing department, contributing to the creation of nutrition-focused materials like flyers and conducting store tours to educate customers on the pivotal role of nutrition in maintaining a healthy lifestyle.
                  To further capture and educate a broader audience, I have actively engaged in creating nutrition articles and maintaining a nutritional blog on Instagram, where I share a wealth of knowledge through healthy recipes, nutrition guides, and inspiration for leading a healthy life.
                  In addition, I am passionate about fitness and its intricate relationship with nutrition. As a dedicated dancer for 3 years, I have witnessed firsthand how making informed dietary choices can improve endurance, strength, and overall well-being.
                  My journey taught me the importance of personalized nutrition plans tailored to individual goals and needs, which is crucial for achieving sustainable results. Additionally, I hold an Advanced FST Certificate in Food Handler Certification (October 2022), demonstrating my understanding of food safety legislation in Ontario.</p>
              </div>
            </div>
          </section>
          {/* Tailored Solutions */}
          <section className="mt-4">
            <h3><b>Tailored Solutions: Prioritizing Your Well-being</b></h3>
            <p>My dedication revolves around empowering you to make lasting, positive shifts in your lifestyle, leading to the desired outcomes: a healthier and stronger body, along with the cultivation of sustaining healthy habits.
              Within my customized nutritional plans, your individual health and dietary preferences take precedence, ensuring that the changes effortlessly integrate into your daily routine.
              I firmly reject the notion of "quick fixes" because they provide merely immediate outcomes. The path to lifelong healthy eating habits should proceed gradually and steadily.
              Clients under my guidance achieve optimal health through consistent support, motivation, and guidance. With this approach, we work together to forge a sustainable, long-term path to better health and well-being.</p>
          </section>
        </div>
      </div>

      {/* Contact Form */}
      <section className="mt-4" style={{ paddingBottom: '50px' }}>
        <div className="container text-center">
          <h3>Get In Touch</h3>
          <p>If you have any questions or would just like to chat, my inbox is always open.</p>
          <a href="mailto:flavourofhealth@outlook.com" className="btn btn-primary mb-2">
            Say Hello
          </a>
          <div className="mt-4">
            <a href="https://www.linkedin.com/in/candace-cheung-a64336274" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin fa-2x mx-2"></i>
            </a>
            <a href="https://www.instagram.com/flavourofhealth" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram fa-2x mx-2"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
