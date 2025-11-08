# StatChat

StatChat is a clean, minimalistic chat-based application for exploring sports statistics. The idea behind the app is to make accessing stats easy and interactive — users can ask questions in natural language and get answers in real-time.

This MVP showcases a basic chat interface with football statistics as an example dataset, along with features designed for future expansion.

---

## 🏀 Features

- **Chat Interface:** Type a question and receive a response from the "bot" (currently the MVP returns dummy responses).
- **Top Sport Categories:** Circular category buttons at the top:
  - Football – active and highlighted in blue
  - Ice-Hockey, Basketball, Baseball, and the `+` button – inactive and display **Coming Soon** alerts when clicked
- **Input Field + Send Button:** Send a message either by clicking "Send" or pressing Enter.
- **Future-ready `+` Button:** Designed to allow users to upload and interact with their own datasets in the future.
- **Minimal, responsive UI:** Built with TailwindCSS, mobile-friendly.

---

## ⚡ MVP / Roadmap

Current MVP includes:

1. Basic chat component for sending and displaying messages.
2. Dummy backend returning responses in the format: `"You asked: '…'"`.
3. NHL stats placeholder dataset and active Ice Hockey category.
4. Top sport categories with other sports marked as **Coming Soon**.

Planned future features:

- **OpenAI / LLM integration:** Convert natural language questions into SQL queries to fetch real stats.
- **Database integration:** DuckDB or PostgreSQL to store and query historical sports stats.
- **Charts & visualizations:** Display season comparisons, player stats, and game metrics in graphs.
- **Multi-sport support:** Add more sports and datasets dynamically.
- **User dataset uploads:** Allow users to add their own CSV/Excel data for analysis via chat.