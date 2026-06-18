# Sombrita - Sitio Web

Este es el repositorio base para el desarrollo del sitio web **sombrita.com.mx**. Está configurado utilizando un entorno moderno y rápido con **Vite** y **HTML/CSS/JS Vanilla**, optimizado para el despliegue continuo en **Vercel**.

## 🚀 Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior) en tu computadora.

## 🛠️ Comandos de Desarrollo

Primero, clona o abre este directorio en tu terminal e instala las dependencias:

```bash
npm install
```

### Iniciar Servidor de Desarrollo
Para correr la página localmente con recarga rápida (HMR):

```bash
npm run dev
```
Abre la dirección [http://localhost:5173](http://localhost:5173) en tu navegador.

### Compilar para Producción
Para generar los archivos listos para producción (minificados y optimizados en la carpeta `/dist`):

```bash
npm run build
```

---

## ☁️ Despliegue en Vercel paso a paso

Vercel detectará automáticamente este proyecto como un sitio de **Vite** y manejará la compilación sin configuraciones adicionales.

### Paso 1: Sube tu código a GitHub
1. Crea un repositorio en tu cuenta de GitHub (puede ser público o privado).
2. Sigue las instrucciones de GitHub para subir este código local:
   ```bash
   git init
   git add .
   git commit -m "initial skeleton setup"
   git branch -M main
   git remote add origin <tu-url-de-github-repo>
   git push -u origin main
   ```

### Paso 2: Importar en Vercel
1. Ve a [Vercel](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New"** > **"Project"**.
3. Importa el repositorio de GitHub que acabas de subir.
4. Vercel detectará el framework automáticamente como **Vite**. No cambies los valores predeterminados (Build command: `vite build`, Output directory: `dist`).
5. Haz clic en **"Deploy"**. En unos segundos, tu sitio estará en línea en una URL temporal de vercel (ejemplo: `sombrita.vercel.app`).

### Paso 3: Configurar tu dominio `sombrita.com.mx`
1. Dentro del panel de tu proyecto en Vercel, ve a la pestaña **Settings** (Configuración) > **Domains** (Dominios).
2. Añade `sombrita.com.mx` (y opcionalmente `www.sombrita.com.mx`).
3. Vercel te mostrará los registros DNS que necesitas configurar en tu registrador de dominios (donde compraste el dominio):
   - Un registro **A** apuntando a la IP de Vercel (`76.76.21.21`).
   - O un registro **CNAME** para la redirección de `www`.
4. Una vez guardados los registros en tu registrador, Vercel validará el dominio y generará un certificado SSL gratuito automáticamente. ¡Tu página estará lista!
