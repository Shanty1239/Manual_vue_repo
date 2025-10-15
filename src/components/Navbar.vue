<template>
  <nav class="navbar">
    <router-link to="/">
      <span><img src="../assets/icons/icons1.png" alt="" /></span>
      Introducción
    </router-link>

    <router-link to="/instalacion">
      <span><img src="../assets/icons/icons2.png" alt="" /></span>
      Instalación
    </router-link>

    <router-link to="/estructura">
      <span><img src="../assets/icons/icons3.png" alt="" /></span>
      Estructura del <br>Proyecto Vue
    </router-link>

  </nav>
</template>

<style scoped>

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1f2937;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 120px; 
  left: 0;
  width: 100%;
  z-index: 1000;
 
}

/* === IMÁGENES DE ICONOS === */
.navbar img {
  height: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.navbar img:hover {
  transform: scale(1.2);
}

/* === ENLACES === */
.navbar a {
  text-decoration: none;
  color: #d1d5db;
  font-size: 12px;
  text-align: center;
  transition: color 0.2s ease;
  font-family: "Courier New", Courier, monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar a:hover {
  color: #42b883;
}

/* === TEXTO E ICONO === */
.navbar a span {
  display: block;
  font-size: 20px;
  margin-bottom: 3px;
}

/* 🔧 TRUCO: evita que el contenido se tape */
:deep(body) {
  padding-top: 180px; /* header + navbar */
}
</style>
