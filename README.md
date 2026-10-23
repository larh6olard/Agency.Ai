# Agency AI

A modern, responsive agency landing page built with React and Tailwind CSS. It features smooth scroll animations, a light/dark theme toggle, a custom animated cursor, and working contact and newsletter forms.

**Live demo:** [https://agency-ai-xi-opal.vercel.app/](https://agency-ai-xi-opal.vercel.app/)

## Features

- **Responsive layout** that adapts from mobile to large desktop screens
- **Light and dark mode** with the user's choice saved in `localStorage`
- **Custom cursor** with a smoothly trailing ring and dot, driven by `requestAnimationFrame`
- **Scroll-triggered animations** powered by Motion
- **Contact form** that sends messages to your inbox via Web3Forms
- **Newsletter subscription** form in the footer, also powered by Web3Forms
- **Toast notifications** for loading, success, and error states
- **Smooth section navigation** through anchor links

## Sections

1. Navbar
2. Hero
3. Trusted By
4. Services
5. Our Work
6. Team
7. Contact Us
8. Footer

## Tech Stack

- [React](https://react.dev/) with [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (`motion/react`) for animations
- [React Router](https://reactrouter.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Web3Forms](https://web3forms.com/) for form handling
- [Vercel](https://vercel.com/) for deployment

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <your-project-folder>

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root and add your Web3Forms access key:

```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

You can get a free key at [web3forms.com](https://web3forms.com/).

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images, icons, and the assets index
├── components/      # Navbar, Hero, TrustedBy, Services, OurWork,
│                    # Team, ContactUs, Footer, Title
├── App.jsx          # Root component: theme state and custom cursor
├── main.jsx         # App entry point
└── index.css        # Global styles and Tailwind setup
```

## Deployment

The project is deployed on Vercel. To deploy your own copy:

1. Push the repository to GitHub.
2. Import it into [Vercel](https://vercel.com/new).
3. Add `VITE_WEB3FORMS_KEY` under **Settings → Environment Variables**.
4. Deploy.

## Customization

- **Branding:** replace the logos in `src/assets/` and update the copy in the Footer and Hero components.
- **Colors:** change the `primary` color in your Tailwind theme configuration.
- **Content:** edit the data arrays in the Services, OurWork, and Team components.

## License

This project is open source and available under the [MIT License](LICENSE).
