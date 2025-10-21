<template>
    <section>
        <Header />
        <NavBar />

        <div class="contenido">


            <div class="style1">
                <div class="estruct_img">
                    <img src="../assets/estructuras/img1.png" alt="imagen vue" />
                </div>

                <div class="text1">
                    <h2>Qué es la estructura del proyecto</h2>
                    <h3>
                        Cuando creas un proyecto con Vite y Vue, se genera una estructura con carpetas y archivos.
                        Piensa en esto como una casa: las carpetas son los cuartos, y los archivos son los muebles y
                        objetos
                        que hacen que todo funcione
                    </h3>
                    <p>La estructura básica se ve así:</p>
                    <img src="../assets/estructuras/ejemplo1.jpeg" alt="">
                    <h3>Cada una de estas partes tiene una función muy importante. Vamos a explicarlas una por una.</h3>
                </div>
            </div>



            <div class="style2">
                <div class="estruct_img">
                    <img src="../assets/estructuras/img2.png" alt="imagen quasar" />
                </div>
                <div class="text2">
                    <h2>Archivos principales</h2>
                    <p>1. index.html</p>
                    <h3>
                        Este archivo es la puerta principal de tu aplicación. Es el primer archivo que se carga en el
                        navegador.
                        Dentro de él hay una línea que dice algo así como:<br>
                        - Ese “id=app” es el lugar donde Vue colocará tu aplicación.<br>
                        - El archivo “main.js” se encarga de decirle a Vue: “oye, monta la aplicación dentro del div con
                        id app”.
                    </h3>
                </div>

            </div>



            <div class="style1">
                <div class="estruct_img">
                    <img src="../assets/estructuras/img3.png" alt="imagen vue" />
                </div>

                <div class="text1">
                    <p>2. package.json</p>
                    <h3>
                        Este archivo es como la ficha técnica de tu proyecto. Guarda información como:<br>
                        - El nombre del proyecto.<br>
                        - La versión.<br>
                        - Las dependencias (todas las librerías que usa tu aplicación).<br>
                        - Los scripts o comandos (como npm run dev o npm run build)<br>
                    </h3>
                    <p>Ejemplo:</p>
                    <img src="../assets/estructuras/ejemplo3.jpeg" alt="">
                </div>
            </div>




            <div class="style2">
                <div class="estruct_img">
                    <img src="../assets/estructuras/img4.png" alt="imagen quasar" />
                </div>
                <div class="text2">

                    <p>3. vite.config.js</p>
                    <h3>
                        Este archivo pertenece a Vite, y controla cómo se construye y ejecuta tu proyecto.
                        Aquí puedes agregar configuraciones especiales más adelante (por ejemplo, para cambiar puertos,
                        rutas o plugins).
                    </h3>
                </div>

            </div>



            <div class="style1">
                <div class="estruct_img">
                    <img src="../assets/estructuras/img5.png" alt="imagen vue" />
                </div>

                <div class="text1">
                    <h2> La carpeta src (source = fuente)</h2>
                    <h3>
                        Todo el código importante de tu aplicación vive dentro de esta carpeta.
                        Piensa en “src” como el corazón del proyecto.
                    </h3>
                    <p>Ejemplo:</p>
                    <img src="../assets/estructuras/ejemplo5.jpeg" alt="">
                    <h3>Veamos qué hace cada cosa.</h3>
                </div>
            </div>





            <div class="style2">
                <div class="estruct_img">
                    <img src="../assets/estructuras/img6.png" alt="imagen quasar" />
                </div>
                <div class="text2">

                    <p>1. main.js </p>
                    <h3>
                        Este es el primer archivo que se ejecuta. Su tarea principal es “montar” la aplicación de Vue en
                        el
                        navegador.
                    </h3>
                    <p>Ejemplo de su contenido:</p>
                    <img src="../assets/estructuras/ejemplo6.jpeg" alt="">
                    <h3>
                        Esto le dice a Vue: crea una nueva aplicación con el componente principal App.vue y colócala
                        dentro
                        del div con id “app” del archivo index.html.
                    </h3>
                </div>
            </div>


            <div class="style1">
                <div class="estruct_img">
                    <img src="../assets/estructuras/img7.png" alt="imagen vue" />
                </div>

                <div class="text1">
                    <p>2. App.vue</p>
                    <h3>
                        Este es el archivo más importante del proyecto, porque es el componente raíz.
                        Desde aquí se cargan todos los demás componentes.
                    </h3>
                    <p>Ejemplo:</p>
                    <img src="../assets/estructuras/ejemplo7.jpeg" alt="">
                    <h3>Veamos qué hace cada cosa.</h3>
                </div>
            </div>


            <div class="style2">
                <div class="estruct_img">
                    <img src="../assets/estructuras/img8.png" alt="imagen quasar" />
                </div>
                <div class="text2">

                    <p>3. assets/ </p>
                    <h3>
                        Esta carpeta guarda tus imágenes, íconos, o archivos CSS que quieras usar en tu proyecto.
                        Por ejemplo, podrías tener “logo.png” o “estilos.css”.
                    </h3>
                    <p>Ejemplo de su contenido:</p>
                    <img src="../assets/estructuras/ejemplo8.jpeg" alt="">

                </div>
            </div>



            <div class="style1">
                <div class="estruct_img">
                    <img src="../assets/estructuras/img9.png" alt="imagen vue" />
                </div>

                <div class="text1">
                    <p>4. components/</p>
                    <h3>
                        Aquí se guardan los componentes que tú creas.
                        Un componente es como una mini parte de tu aplicación: por ejemplo, una tarjeta, un botón o un
                        formulario.
                    </h3>
                    <p>Ejemplo:</p>
                    <img src="../assets/estructuras/ejemplo9.jpeg" alt="">

                </div>
            </div>


            <div class="style2">
                <div class="estruct_img">
                    <img src="../assets/estructuras/img10.png" alt="imagen quasar" />
                </div>
                <div class="text2">
                    <h2>Cómo Vue usa estos archivos</h2>
                    
                    <p>Cuando ejecutas “npm run dev”, pasa lo siguiente:</p>
                    <h3>
                        1. Vite lee “vite.config.js” para saber cómo iniciar el proyecto.<br>
                        2. Carga “index.html”.<br>
                        3. Encuentra el div con id “app”.<br>
                        4. Va a “main.js”, donde se monta el componente “App.vue”.<br>
                        5. App.vue muestra su contenido y carga los componentes que tenga dentro.<br>
                    </h3>
                    <p>Así, todo está conectado como una cadena: index.html → main.js → App.vue → tus componentes.</p>
                </div>

            </div>


            <div class="style1">
                <div class="estruct_img">
                    <img src="../assets/estructuras/img11.png" alt="imagen vue" />
                </div>

                <div class="text1">
                    <h2>Buenas prácticas para organizar tu proyecto</h2>
                    <h3>
                        ■ Usa nombres claros para tus componentes, por ejemplo “Navbar.vue” o “Footer.vue”.<br>
                        ■ Mantén las imágenes dentro de “assets/”.<br>
                        ■ No pongas toda la lógica en App.vue; crea componentes separados.<br>
                        ■ Si tu proyecto crece, crea carpetas como “views/”, “router/”, o “store/”.<br>
                        ■ Revisa siempre que los imports estén bien escritos (respetando mayúsculas y minúsculas)<br>
                    </h3>


                </div>
            </div>


            <div class="style2">
                <div class="estruct_img">
                    <img src="../assets/estructuras/img12.png" alt="imagen quasar" />
                </div>
                <div class="text2">
                    <h2>Resumen</h2>

                    <h3>
                        - La estructura del proyecto Vue tiene carpetas y archivos con funciones específicas.<br>
                        - “index.html” es la entrada principal.<br>
                        - “main.js” monta la aplicación.<br>
                        - “App.vue” es el componente raíz.<br>
                        - “assets/” guarda recursos estáticos como imágenes.<br>
                        - “components/” guarda tus componentes personalizados.<br>
                        - Todo trabaja junto para formar tu aplicación Vue.<br>
                    </h3>
                    <p>Con esto ya entiendes cómo está formado un proyecto Vue y cómo se conecta todo por dentro.
                        En el siguiente capítulo aprenderás sobre los **componentes** y cómo crear tus propias partes
                        interactivas dentro de la aplicación.</p>
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


    document.querySelectorAll('.estruct_img img').forEach((img) => observer.observe(img))


    document.querySelectorAll('.text1 h2, .text2 h2').forEach((title) => observer.observe(title))
    document.querySelectorAll('.text1 h3, .text2 h3').forEach((subtitle) => observer.observe(subtitle))
    document.querySelectorAll('.text1 p, .text2 p').forEach((paragraph) => observer.observe(paragraph))
})
</script>



<style>
section {
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

.estruct_img img {
    width: 250px;
    max-width: 100%;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    opacity: 0;
    transform: scale(0.9) translateY(40px);
    filter: blur(5px);
    transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.estruct_img img.visible {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: blur(0);
}

.estruct_img img:hover {
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

.text1 img,
.text2 img {

    height: 250px;
    width: 500px;
    border-radius: 20px;
}
</style>