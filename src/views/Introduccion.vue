<template>
  <section>
    <Header />
    <NavBar />

    <div class="contenido">

      <div class="style1">
        <div class="intro_img">
          <img src="../assets/introduccion/img1.png" alt="imagen vue" />
        </div>

        <div class="text1">
          <h2>¿Qué es Vue?</h2>
          <h3>
            Vue es un framework progresivo de JavaScript utilizado para construir
            interfaces de usuario interactivas. Su enfoque principal es la vista,
            permitiendo crear componentes reutilizables y reactivos.
          </h3>
        </div>
      </div>

      <div class="style2">
        <div class="intro_img">
          <img src="../assets/introduccion/img2.png" alt="imagen quasar" />
        </div>
        <div class="text2">
          <h2>¿Qué es Quasar?</h2>
          <h3>
            Quasar es un framework basado en Vue que te permite crear aplicaciones
            web, móviles y de escritorio con un solo código base.
          </h3>
          <p>Con Vue puedes crear:</p>
          <h3>
            - Páginas que muestren listas de tareas.<br>
            - Formularios que guarden información.<br>
            - Aplicaciones completas, como redes sociales, tiendas en línea o paneles de administración.<br>
          </h3>
        </div>
      </div>

      <div class="style1">
        <div class="intro_img">
          <img src="../assets/introduccion/img3.png" alt="imagen vue" />
        </div>

        <div class="text1">
          <h2>¿Cómo funciona Vue por dentro?</h2>
          <h3>
            Vue usa algo que se llama “reactividad”.
            Eso significa que cuando cambias un dato, Vue actualiza automáticamente la parte de la página que
            depende de ese dato.
          </h3>
          <p>Ejemplo simple de cómo funciona la reactividad:</p>
          <h3>Si tienes un dato que dice “nombre = Juan”, y lo muestras en la pantalla, Vue hará que si cambias ese
            nombre a “María”, automáticamente aparezca “María” en la página sin que tú recargues.
            Esa es la magia de Vue: conecta los datos con lo que se ve en pantalla.</h3>
        </div>
      </div>

      <div class="style2">
        <div class="intro_img">
          <img src="../assets/introduccion/img4.png" alt="imagen quasar" />
        </div>
        <div class="text2">
          <h2>¿Por qué usar Vue?</h2>
          <h3>
            Porque es fácil de aprender, rápido y ordenado.
            Otras herramientas (como React o Angular) también sirven para lo mismo, pero Vue es más amigable
            para comenzar.
            Además, su sintaxis se parece mucho a HTML y CSS, que son los lenguajes que ya usan los sitios
            web.
          </h3>
          <p>Ventajas de Vue:</p>
          <h3>
            - Es liviano y rápido. <br>
            - Es fácil de entender para principiantes.<br>
            - Permite dividir tu página en piezas pequeñas llamadas “componentes”.<br>
            - Tiene una gran comunidad y documentación.
          </h3>
        </div>
      </div>

      <div class="style1">
        <div class="intro_img">
          <img src="../assets/introduccion/img5.png" alt="imagen vue" />
        </div>

        <div class="text1">
          <h2>Comparaciones simples</h2>
          <h3>
            Si HTML fuera como una hoja de papel donde dibujas tus ideas,
            Vue sería un marcador mágico que actualiza los dibujos por ti cuando cambias algo en tu mente.
            Por eso, Vue ahorra tiempo y evita errores.
          </h3>
        </div>
      </div>

      <div class="style2">
        <div class="intro_img">
          <img src="../assets/introduccion/img6.png" alt="imagen quasar" />
        </div>
        <div class="text2">
          <h2>Resumen</h2>
          <h3>
            - Vue es una herramienta que hace que las páginas web sean vivas e interactivas.<br>
            - Es ideal para empezar porque es simple y poderosa.<br>
            - Se aprende paso a paso: primero lo básico, luego componentes, rutas y APIs.<br>
            - Todo lo que escribas en Vue se conecta con tus datos sin recargar la página.
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from '../components/header.vue'
import NavBar from '../components/Navbar.vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        } else {
          entry.target.classList.remove('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

 
  document.querySelectorAll('.intro_img img').forEach((img) => observer.observe(img))

  
  document.querySelectorAll('.text1 h2, .text2 h2').forEach((title) => observer.observe(title))
  document.querySelectorAll('.text1 h3, .text2 h3').forEach((subtitle) => observer.observe(subtitle))
  document.querySelectorAll('.text1 p, .text2 p').forEach((paragraph) => observer.observe(paragraph))
})
</script>

<style scoped>
section {
  min-height: 100vh;
  background: radial-gradient(circle at top left, #1e293b, #0f172a);
  color: white;
  font-family: "Courier New", Courier, monospace;
  padding-bottom: 60px;
}

.contenido {
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-top: 20%;
}

.style1,
.style2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  margin-bottom: 25px;
}

.style2 {
  flex-direction: row-reverse;
}


.intro_img img {
  width: 350px;
  max-width: 100%;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  opacity: 0;
  transform: scale(0.9) translateY(40px);
  filter: blur(5px);
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.intro_img img.visible {
  opacity: 1;
  transform: scale(1) translateY(0);
  filter: blur(0);
}

.intro_img img:hover {
  transform: scale(1.05) rotateZ(1deg);
  transition: transform 0.6s ease;
}


.text1,
.text2 {
  max-width: 600px;
}


.text1 h2,
.text2 h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 25px;
  color: #38bdf8;
  opacity: 0;
  transform: translateY(50px) scale(0.95);
  filter: blur(4px);
  transition: all 1s ease;
}

.text1 h2.visible,
.text2 h2.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

.text1 h3,
.text2 h3 {
  font-weight: normal;
  font-size: 15px;
  line-height: 1.6;
  text-align: justify;
  opacity: 0;
  transform: translateY(40px);
  filter: blur(4px);
  transition: all 1s ease-out;
}

.text1 h3.visible,
.text2 h3.visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}


.text1 p,
.text2 p {
  color: #41B783;
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: justify;
  opacity: 0;
  transform: translateY(30px);
  filter: blur(5px);
  transition: all 1s ease-out;
}

.text1 p.visible,
.text2 p.visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
</style>
