# 🌍 REST Countries Explorer

Aplicación web interactiva y responsive construida con **React + TypeScript**, que permite explorar información de países a través de una UI limpia y funcional. Basada en el challenge de [Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

Permite buscar países, filtrarlos por región y acceder a su información detallada con una experiencia rica en animaciones y personalización.

---

## ✨ Features

- 🌓 Cambio de tema claro/oscuro con toggle (Zustand).
- 🔍 Búsqueda de países por nombre.
- 🌎 Filtro por región.
- 📄 Detalles del país: capital, población, idioma, moneda, países limítrofes, etc.
- 📱 Responsive (mobile-first).
- 🔁 Skeleton loader mientras carga.
- 🎯 Accesibilidad cuidada.

### 🧪 AGG (Agregados)

- 🌐 Soporte multilenguaje (i18n - Español/Inglés).
- 💫 Animaciones con Framer Motion.
- 🧩 UI profesional con Ant Design.

---

## ⚙️ Tecnologías

- ⚛️ **React** + **TypeScript**
- 🎨 **Tailwind CSS**
- 🧱 **Ant Design**
- 🗺️ **React Router DOM**
- 🔌 **Fetch API**
- 🌙 **Zustand** (dark mode)
- 🌐 **i18next**
- 🎞️ **Framer Motion**
- ⚙️ **Vite**

---

## 🚀 Instalación

```bash
git clone https://github.com/IgnacioGonzalia/rest-countries-explorer.git
cd rest-countries-explorer
npm install
npm run dev
```

---

## 📸 Preview

![App Preview - Light and Dark mode](./public/preview.jpg)

---

## 📁 Estructura del Proyecto

```
src/
├── components/      # Componentes reutilizables (Card, Navbar, etc.)
├── pages/           # Vistas principales (Home, CountryDetail)
├── store/           # Estado global (Zustand)
├── locales/         # Archivos de traducción i18n
├── App.tsx          # Componente raíz y rutas
├── main.tsx         # Punto de entrada
└── index.css        # Tailwind base
```

---

## ✅ Estado del desarrollo

- [x] Setup inicial + dependencias
- [x] Dark mode con Zustand
- [x] Clases base y componentes generales
- [x] Navbar con cambio de tema
- [x] Card de país
- [x] Grid de países
- [x] Búsqueda por nombre
- [x] Filtro por región
- [ ] Página de país (React Router)
- [ ] AGG: Skeleton loader
- [ ] AGG: Traducción i18n
- [ ] AGG: Animaciones (Framer Motion)
