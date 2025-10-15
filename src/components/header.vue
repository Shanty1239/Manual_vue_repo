<template>
  <header class="header">
    <div class="titulo">
      <img src="../assets/vue.png" alt="logo vue" />
      <h1>Manual Vue</h1>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #162032;
  text-align: center;
  color: #42b883;
  font-family: "Courier New", Courier, monospace;
  font-size: 15px;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* === CONTENIDO DEL HEADER === */
.titulo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding-top: 20px;
  padding-bottom: 20px;
}

.titulo img {
  width: 50px;
  height: auto;
  border-radius: 10px;
  margin-right: 3px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.titulo h1 {
  color: white;
  margin-right: 100px;
  font-family: "Courier New", Courier, monospace;
  transition: text-shadow 0.3s ease;
  text-shadow: 0 0 5px #42b883, 0 0 10px #42b883, 0 0 20px #2c9e6f;
}

.titulo h1:hover {
  text-shadow: 0 0 10px #42b883, 0 0 20px #42b883, 0 0 40px #2c9e6f;
}

.titulo img:hover {
  transform: scale(1.2);
}

/* 🔧 agrega espacio para que el contenido no se oculte detrás del header */
:deep(body) {
  padding-top: 180px; /* header + navbar */
}

.header img {
  height: 80px;
  width: 70px;
  vertical-align: middle;
  margin-right: 10px;
}
</style>
