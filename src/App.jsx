// ════════════════════════════════════════════════════════════════════════════
// App.jsx — Root component
// ════════════════════════════════════════════════════════════════════════════

import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import ChatPage from './components/HeroSection';

// ──────────────────── LESSON 4 ────────────────────
// TODO: Import MovieModal from './components/MovieModal'
// import MovieModal from './components/MovieModal';
// ──────────────────── END ─────────────────────────

function AppInner() {
  // ──────────────────── LESSON 4 ────────────────────
  // TODO: Get showModal from useApp() context
  // const { showModal } = useApp();
  // ──────────────────── END ─────────────────────────

  return (
    <div className="app-root">
      <Navbar />
      <ChatPage />
      {/* ──────────────────── LESSON 4 ──────────────────── */}
      {/* TODO: Render MovieModal here when showModal is true */}
      {/* {showModal && <MovieModal />} */}
      {/* ──────────────────── END ─────────────────────────── */}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  );
}
