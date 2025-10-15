<template>
    <section>
        <Header />
        <NavBar />

        <div class="contenido">


            <div class="style1">
                <div class="insta_img">
                    <img src="../assets/instalacion/img1.png" alt="imagen vue" />
                </div>

                <div class="text1">
                    <h2>Qué necesitas antes de empezar</h2>
                    <h3>
                        Antes de poder usar Vue, necesitas algunas herramientas básicas instaladas en tu computadora.
                        Estas herramientas te permitirán crear, ejecutar y ver tus proyectos. Son como los materiales
                        que
                        necesitas antes de construir una casa.
                    </h3>
                    <p>Necesitarás:</p>
                    <h3>- Node.js (el corazón que hace que todo funcione).<br>
                        - NPM (una herramienta que instala paquetes o librerías).<br>
                        - Un editor de texto (como Visual Studio Code).<br>
                        - Una terminal o consola (para escribir comandos).</h3>
                </div>
            </div>

            <div class="style2">
                <div class="insta_img">
                    <img src="../assets/instalacion/img2.png" alt="imagen quasar" />
                </div>
                <div class="text2">
                    <h2>Instalación de Node.js,NPM y PNPM</h2>
                    <h3>
                        Node.js es un programa que te permite ejecutar JavaScript fuera del navegador.
                        También incluye NPM, que sirve para instalar librerías como Vue.
                    </h3>
                    <p>Pasos para instalar Node.js (en Linux o Windows):</p>
                    <h3>
                        1. Entra a la página oficial: https://nodejs.org<br>
                        2. Descarga la versión LTS (es la más estable).<br>
                        3. Instálala siguiendo las instrucciones.<br>
                        4. Cuando termine, abre la terminal (Ctrl + Alt + T en Linux o símbolo del sistema en Windows).
                    </h3>
                    <p>Ahora escribe estos comandos para comprobar que todo funciona:</p>
                    <h3>- (node -v)<br>
                        - (npm -v)<br>
                        - (pnpm -v)<br>
                        Si ves dos números (por ejemplo, v20.5.0 y 10.8.2), ¡todo está bien!</h3>
                </div>
            </div>


            <div class="style1">
                <div class="insta_img">
                    <img src="../assets/instalacion/img3.png" alt="imagen vue" />
                </div>

                <div class="text1">
                    <h2>Crear tu primer proyecto con Vite</h2>
                    <h3>
                        Vite es una herramienta moderna que ayuda a crear proyectos de Vue de manera muy rápida y
                        ligera.
                        Vamos a crear tu primer proyecto con estos pasos (hazlo en orden):

                        1. Abre una carpeta donde quieras guardar tu proyecto.<br>
                        2. Abre la terminal dentro de esa carpeta.<br>
                        3. Escribe estos comandos:<br>
                        mkdir mi-vue-app<br>
                        cd mi-vue-app<br>
                        npm o pnpm create vite@latest . -- --template vue<br>
                        npm o pnpm install<br>
                    </h3>
                    <p>Explicación:</p>
                    <h3>- mkdir crea una carpeta nueva.<br>
                        - cd entra a esa carpeta.<br>
                        - npm create vite@latest . crea un nuevo proyecto Vue usando la plantilla de Vite.<br>
                        - npm install descarga las dependencias necesarias.</h3>
                </div>
            </div>


            <div class="style2">
                <div class="insta_img">
                    <img src="../assets/instalacion/img4.png" alt="imagen quasar" />
                </div>
                <div class="text2">
                    <h2>Estructura del proyecto</h2>
                    <h3>
                        Cuando termines la instalación, verás varias carpetas y archivos. Cada uno tiene una función
                        especial.
                    </h3>
                    <p>La estructura básica es así:</p>
                    <img src="../assets/instalacion/ejemplo4.png" alt="">
                    <p>Qué significa cada cosa:</p>
                    <h3>- index.html → es la página principal del proyecto.<br>
                        - package.json → guarda la información del proyecto y los comandos.<br>
                        - src/ → contiene el código principal (componentes, scripts, estilos).<br>
                        - App.vue → es el componente principal, el corazón de la app.<br>
                        - main.js → es donde Vue conecta todo y empieza a funcionar.<br>
                        - node_modules/ → carpeta donde se guardan todas las librerías instaladas.</h3>
                </div>
            </div>


            <div class="style1">
                <div class="insta_img">
                    <img src="../assets/instalacion/img5.png" alt="imagen vue" />
                </div>

                <div class="text1">
                    <h2> Ejecutar tu aplicación</h2>
                    <h3>
                        Una vez instalado todo, es hora de ver tu proyecto funcionando.
                    </h3>
                    <p>En la terminal, escribe:</p>
                    <h3>npm run dev</h3>
                    <p>Después verás un mensaje que dice algo así como:</p>
                    <h3>- "Local: http://localhost:5173"<br>
                        Eso significa que tu proyecto está corriendo en tu computadora.
                        Abre tu navegador, escribe esa dirección y verás tu primera app de Vue.</h3>
                </div>
            </div>






            <div class="style2">
                <div class="insta_img">
                    <img src="../assets/instalacion/img6.png" alt="imagen quasar" />
                </div>
                <div class="text2">
                    <h2>Qué está pasando detrás</h2>
                    <h3>
                        Cuando ejecutas “npm run dev”, Vite crea un pequeño servidor que muestra tu aplicación.
                        Cada vez que guardes un archivo, el navegador se actualiza automáticamente. Esto se llama “Hot
                        Reload” y hace que trabajar sea mucho más rápido
                    </h3>

                </div>
            </div>


            <div class="style1">
                <div class="insta_img">
                    <img src="../assets/instalacion/img7.png" alt="imagen vue" />
                </div>

                <div class="text1">
                    <h2>Explicación de los comandos</h2>
                    <h3>
                        - npm create vite@latest: crea el proyecto.<br>
                        - npm install: instala todas las dependencias necesarias.<br>
                        - npm run dev: inicia el servidor local.<br>
                        - Ctrl + C: detiene el servidor cuando ya no quieras tenerlo abierto
                    </h3>

                </div>
            </div>


            <div class="style2">
                <div class="insta_img">
                    <img src="../assets/instalacion/img8.png" alt="imagen quasar" />
                </div>
                <div class="text2">
                    <h2>Errores comunes</h2>
                    <h3>
                        A veces pueden aparecer errores al principio. Aquí te dejo los más comunes y cómo
                        resolverlos:<br>
                        ■ Error: “npm: command not found”<br>
                        ➡ Solución: significa que Node.js no está instalado o no está en el PATH. Reinstál<br>
                        ■ Error: “permission denied” (en Linux)<br>
                        ➡ Solución: usa “sudo npm install” para dar permisos de administrador.<br>
                        ■ Pantalla en blanco al abrir el navegador<br>
                        ➡ Solución: revisa la terminal por mensajes de error. A veces faltan dependencias o se olvidó
                        ejecutar
                        “npm install”.
                    </h3>
                </div>
            </div>


            <div class="style1">
                <div class="insta_img">
                    <img src="../assets/instalacion/img9.png" alt="imagen vue" />
                </div>

                <div class="text1">
                    <h2>Ejercicio práctico</h2>
                    <h3>
                        Vamos a hacer tu primer ejercicio con Vue y Vite<br>
                        1. Abre Visual Studio Code.<br>
                        2. Abre la carpeta “mi-vue-app”.<br>
                        3. Busca el archivo “src/App.vue”.<br>
                        4. Dentro del template cambia el texto de “Hello World” por “¡Hola, estoy aprendiendo Vue!”.<br>
                        5. Guarda el archivo y mira el cambio en tu navegador.
                    </h3>
                    <p>Verás que el texto cambia al instante. ¡Eso significa que todo funciona perfectamente!</p>
                </div>
            </div>

            <div class="style2">
                <div class="insta_img">
                    <img src="../assets/instalacion/img10.png" alt="imagen quasar" />
                </div>
                <div class="text2">
                    <h2>Resumen</h2>
                    <h3>
                        - Node.js y NPM son necesarios para trabajar con Vue.<br>
                        - Vite es la herramienta que crea el proyecto.<br>
                        - “npm run dev” abre tu proyecto en el navegador.<br>
                        - Vue actualiza los cambios al instante gracias al sistema de recarga automática.<br>
                        - Ya puedes empezar a editar tu primera aplicación Vue.<br>
                    </h3>
                    <p>Con esto, terminaste la instalación y preparación del entorno.
                        En el siguiente capítulo aprenderás cómo está formado tu proyecto y qué hace cada archivo dentro
                        de
                        él.</p>
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


    document.querySelectorAll('.insta_img img').forEach((img) => observer.observe(img))


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

.insta_img img {
    width: 350px;
    max-width: 100%;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    opacity: 0;
    transform: scale(0.9) translateY(40px);
    filter: blur(5px);
    transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.insta_img img.visible {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: blur(0);
}

.insta_img img:hover {
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

.text2 img {

    height: 200px;
    width: 300px;
}
</style>