import React from 'react';
import '../css/About.css';
import { ReactTyped } from "react-typed";
import ScrollToTopButton  from './typewriter';

const About = () => {
  return (
    <div className="about-container">
      <h1><strong>  ACHARYA CHANAKYA  </strong></h1>
      <div className="about-content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Chanakya_artistic_depiction.jpg" alt="Chanakya" className="about-image"/>
        <div className="about-text">
          <p>Chanakya, also known as Kautilya or Vishnugupta, was an ancient Indian teacher, philosopher, economist, jurist, and royal advisor. He is traditionally identified as the author of the ancient Indian political treatise, the Arthashastra.</p>
          <p>Born in 350 BCE in India, Chanakya played a crucial role in the establishment of the Maurya Empire. He was the chief advisor to both Emperor Chandragupta and his son, Bindusara.</p>
          <blockquote>
          <ReactTyped
              strings={[
                "शक्तिशाली मन को कोई नहीं हरा सकता।",
                "Man is great by deeds, not by birth.",
                "विनम्रता आत्मसंयम का मूल है।",
		            "Humility is the core of self-control. ",
              ]}
              typeSpeed={100}
              loop
              backSpeed={30}
              cursorChar=">"
              showCursor={true}
            />
          </blockquote>
          <p>Chanakya's work is considered pioneering in the fields of political science and economics. His strategies and principles are still studied and revered in modern times.</p>
          <p>His notable works include:</p>
          <ul>
            <li><b>Arthashastra:</b> A treatise on statecraft, economic policy, and military strategy.</li>
            <li><b>Chanakya Niti:</b> A collection of aphorisms offering guidance on various aspects of life.</li>
          </ul>
          <p>Chanakya's wisdom and teachings continue to influence and inspire leaders and scholars around the world.</p>
          <blockquote>
            "Learn from the mistakes of others. You can't live long enough to make them all yourselves."
          </blockquote>
          <p>He is often credited with having played a significant role in creating one of the largest empires in ancient India.</p>
          <p>Chanakya was a brilliant strategist, and his works emphasize the importance of strong governance and strategic planning.</p>
          <p>Many of his sayings and aphorisms are still quoted and provide timeless wisdom on politics, leadership, and life.</p>
          <blockquote>
          <ReactTyped
              strings={[
              "जैसे ही भय आपके करीब आए, उस पर हमला करें और उसे नष्ट कर दें।",
                "As soon as the fear approaches near, attack and destroy it.",
                "दुनिया की सबसे बड़ी शक्ति युवा और एक महिला की सुंदरता है।",
		"The world's biggest power is the youth and beauty of a woman",
              ]}
              typeSpeed={100}
              loop
              backSpeed={30}
              cursorChar="."
              showCursor={true}
            />
          </blockquote>
          <p>His life and teachings are a source of inspiration for those studying political science, economics, and leadership.</p>
          <p>Other notable aspects of Chanakya's life include:</p>
          <ul>
            <li><b>Role in Chandragupta's Rise:</b> Chanakya's strategies were pivotal in helping Chandragupta overthrow the Nanda dynasty and establish the Maurya Empire.</li>
            <li><b>Educational Contributions:</b> He was a professor at Takshashila University, one of the earliest universities in the world.</li>
            <li><b>Diplomatic Skills:</b> Chanakya was a master of diplomacy and used his skills to forge alliances that were crucial for the expansion of the Maurya Empire.</li>
          </ul>
          <p>Chanakya's influence extended beyond his lifetime, and his teachings have been passed down through generations.</p>
          <blockquote>
        <ReactTyped
              strings={[
               "यह केवल मनुष्य का मन है जो उसके बंधन या स्वतंत्रता का कारण है। ",
               "It is the mind of man alone that is the cause of his bondage or freedom.",
                "अन्यायपूर्ण तरीकों से अर्जित धन निश्चित रूप से नष्ट हो जाएगा।",
                "The wealth earned by unjust means will perish for sure.",
              ]}
              typeSpeed={100}
              loop
              backSpeed={30}
              cursorChar="."
              showCursor={true}
            />
          </blockquote>
          <p>Here are some more of his notable teachings:</p>
          <ul>
            <li>"A person should not be too honest. Straight trees are cut first and honest people are screwed first."</li>
            <li>"The world's biggest power is the youth and beauty of a woman."</li>
            <li>"As soon as the fear approaches near, attack and destroy it."</li>
          </ul>
          <p>Chanakya's principles on leadership and governance are still relevant in today's world:</p>
          <ul>
            <li><b>Focus on Strength:</b> A ruler should always focus on building and maintaining strength to protect and expand the kingdom.</li>
            <li><b>Importance of Allies:</b> Strong alliances are crucial for a kingdom's security and prosperity.</li>
            <li><b>Manage Resources:</b> Efficient management of resources is key to the economic stability of the state.</li>
          </ul>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default About;
