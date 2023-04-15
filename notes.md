---
import Tag from "../components/Tag.astro";
import Ga from "../components/Ga.astro";
import BaseHead from "../components/BaseHead.astro";
import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";
import { SITE_TITLE, SITE_DESCRIPTION, AUTHOR } from "../config";
---

<html lang="en">
  <head>
    <Tag />
  </head>
  <div>
    <BaseHead
      title={SITE_TITLE}
      description={SITE_DESCRIPTION}
      author={AUTHOR}
    />
  </div>
  <body>
    <Ga />
    <p></p>
    <img
      src="https://pbs.twimg.com/profile_images/1586447193900204035/fLZqjQLG_400x400.jpg"
      alt="Miguel Gargallo"
      class="profile"
    />
    <Header />
  </body>
  <main class="content">
    <text class="bio">
      <div>
        <h2>Featured Articles</h2>
        <a
          class="featured"
          href="/blog-es/inteligencias-artificiales-legisladas-censuradas"
          ><div>
            Porque las Inteligencias Artificiales deben ser legisladas y no
            censuradas o prohibidas
          </div></a
        >
        <a class="featured" href="/blog-es/chatgpt-quedarse-gobiernos"
          ><div>
            ChatGPT ha venido para quedarse: Por que los gobiernos no podran
            ganar la batalla
          </div></a
        >
        <a class="featured" href="/blog-es/despido-adapta-trabajo-ia"
          ><div>Evita el despido y adapta tu trabajo con IA ahora</div></a
        >
        <a class="featured" href="/blog-ita/soluzione-definitiva-Italia-chatgpt"
          ><div>
            Accedere a ChatGPT in Italia con NordVPN la soluzione definitiva
          </div></a
        >
        <a class="featured" href="/blog/job-adaptation-ai"
          ><div>Job Adaptation to AI</div></a
        >
      </div>
      <div>
        <div>
          <h2>About me</h2>
          <h2>👨‍💻 Miguel Gargallo - AI Expert</h2>

<p><strong>Website:</strong> <a href="https://miguelgargallo.com/">https://miguelgargallo.com/</a></p>
<p><strong>Hire:</strong> <a href="https://cal.com/miguelgargallo">https://cal.com/miguelgargallo</a></p>

<p><strong>Github:</strong> <a href="https://github.com/miguelgargallo">https://github.com/miguelgargallo</a></p>

<p><strong>Apple:</strong></p>
<ul>
  <li>Apps: 📱 <a href="http://apple.co/3o5FzDp">http://apple.co/3o5FzDp</a></li>
  <li>Books: 📚 <a href="http://apple.co/3NJArA2">http://apple.co/3NJArA2</a></li>
</ul>

<p><strong>NPM:</strong> (Total active users per month: 2,508)</p>
<ul>
  <li>Zenix: 📦 <a href="https://www.npmjs.com/package/zenix">https://www.npmjs.com/package/zenix</a> (52 users/week)</li>
  <li>Sushis: 📦 <a href="https://www.npmjs.com/package/sushis">https://www.npmjs.com/package/sushis</a> (195 users/week)</li>
  <li>Sushis-demo: 📦 <a href="https://www.npmjs.com/package/sushis-demo">https://www.npmjs.com/package/sushis-demo</a> (380 users/week)</li>
</ul>

<p><strong>Companies:</strong></p>
<ul>
  <li>Pylar.org: 🏢 <a href="https://pylar.org/">https://pylar.org/</a></li>
  <li>Pencil.li: 🏢 <a href="https://pencil.li/">https://pencil.li/</a></li>
</ul>
  

          <!--    <p>
            My name is Miguel Gargallo and I am a software developer and
            entrepreneur. I have a passion for creating innovative products and
            solving complex problems. I have a background in computer science
            and have experience working on a variety of projects, including web
            and mobile apps, data analysis and visualization, and machine
            learning. In my free time, I enjoy participating in hackathons,
            learning new technologies, and streaming on Twitch. Feel free to
            reach out to me on Twitter or GitHub if you have any questions or
            want to collaborate on a project.
          </p> -->
          <!-- <h2>English</h2>
          <code
            >Hello, my name is Miguel Gargallo. I'm an AI expert with over 5
            years of experience in implementing AI solutions across various
            sectors, helping businesses grow and innovate. I have successfully
            led projects like Zenix and Sushis on npm, founded companies such as
            Pylar.org and Pencil.li, and developed apps and written books to
            promote AI's potential in our society. With a creative and visionary
            mindset, I am dedicated to identifying new opportunities and
            applying AI-based solutions to revolutionize the market. I'm excited
            to collaborate with you, bringing your projects to the next level
            and driving growth and success through AI. Let's work together to
            make a lasting impact on the world.
          </code>
          <h2>Spanish</h2>
          <code
            >Hola, mi nombre es Miguel Gargallo. Soy un experto en Inteligencia
            Artificial (IA) con más de 5 años de experiencia en la
            implementación de soluciones de IA en diversos sectores, ayudando a
            las empresas a crecer e innovar. He liderado con éxito proyectos
            como Zenix y Sushis en npm, fundado compañías como Pylar.org y
            Pencil.li, y desarrollado aplicaciones y escrito libros para
            promover el potencial de la IA en nuestra sociedad. Con una
            mentalidad creativa y visionaria, estoy dedicado a identificar
            nuevas oportunidades y aplicar soluciones basadas en IA para
            revolucionar el mercado. Estoy emocionado de colaborar contigo,
            llevando tus proyectos al siguiente nivel e impulsando el
            crecimiento y el éxito a través de la IA. Trabajemos juntos para
            causar un impacto duradero en el mundo.
          </code> -->
        </div>
      </div>
    </text>
    <Footer />
  </main>
</html>


<!-- 👨‍💻 Miguel Gargallo - AI Expert

🌐 Website: https://miguelgargallo.com/
🤝 Hire: https://cal.com/miguelgargallo

🐙 Github: https://github.com/miguelgargallo

🍎 Apple:

    Apps: 📱 http://apple.co/3o5FzDp
    Books: 📚 http://apple.co/3NJArA2

📦 NPM: (Total active users per month: 2,508)

    Zenix: 📦 https://www.npmjs.com/package/zenix (52 users/week)
    Sushis: 📦 https://www.npmjs.com/package/sushis (195 users/week)
    Sushis-demo: 📦 https://www.npmjs.com/package/sushis-demo (380 users/week)

🏢 Companies:

    Pylar.org: 🏢 https://pylar.org/
    Pencil.li: 🏢 https://pencil.li/

Now with this info I want to create html to show on my github description -->