import React from 'react'
import "../../styles/Blog-post/SaaS.css"

const SaaS = () =>  {
  return (
    <section className="product">
      <div className="money">
        <div className="image-container">
          <img
            src="public/images/Ejara-assets/images_blogpost/money-2168003_1920.jpg"
            alt="money(usd)"
          />
        </div>
        <h2>Our Saas product just launched</h2>
        <div>
          <p>
            Remote work has massively improved my design skills by giving me
            freedom to experiment, focus and learn at my own pace.
          </p>
        </div>
      </div>

      <div className="boy">
        <div className="image-container">
          <img
            src="public/images/Ejara-assets/images_blogpost/laptop-2561505_1920.jpg "
            alt="a boy using his laptop"
          />
        </div>

        <h2>Our Saas product just launched</h2>
        <div>
          <p>
            Remote work has massively improved my design skills by giving me
            freedom to experiment, focus and learn at my own pace.
          </p>
        </div>
      </div>

      <div className="AI">
        <div className="image-container">
          <img
            src="public/images/Ejara-assets/images_blogpost/ai-generated-8258066_1920.jpg"
            alt="Ai generated image"
          />
        </div>

        <h2>Our Saas product just launched</h2>
      </div>
      <div>
        <p>
          Remote work has massively improved my design skills by giving me
          freedom to experiment, focus and learn at my own pace.
        </p>
      </div>
    </section>
  );
}

export default SaaS 
