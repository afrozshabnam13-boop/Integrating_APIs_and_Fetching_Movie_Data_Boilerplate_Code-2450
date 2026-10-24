// ════════════════════════════════════════════════════════════════════════════
// config.js — API keys (NEW in Lesson 4)
// ════════════════════════════════════════════════════════════════════════════

// ──────────────────── LESSON 4 ────────────────────
// Read API keys from the .env file using import.meta.env
// Define OMDB_API_KEY, GROQ_API_KEY, and GROQ_MODELS
// ──────────────────── STUBS: delete after adding real code ────────────────
export const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY || '';
export const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';
export const GROQ_MODELS  = ['llama-3.1-8b-instant', 'llama-3.3-70b-versatile', 'gemma2-9b-it'];
// ──────────────────── END ─────────────────────────
