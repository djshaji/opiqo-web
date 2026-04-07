# opiqo-web

Marketing and landing page website for [Opiqo](https://github.com/djshaji/opiqo) — a professional cross-platform LV2 guitar multi-effects pedalboard for Android, Windows, and Linux.

## About

Opiqo is a free and open-source LV2 plugin host that turns any device into a real-time guitar effects studio. The app ships with 54 bundled effects, supports chaining up to 4 plugins simultaneously, and records the processed signal in multiple audio formats.

This repository contains the static marketing site (`index.html`) built with vanilla HTML, CSS, and JavaScript — no build step required.

## Site Structure

```
index.html          # Main landing page
css/style.css       # Dark guitar theme (electric orange accent, Inter font)
js/main.js          # Navbar toggle, smooth scroll, tab switcher, scroll reveal
assets/
  icons/            # App icons
  screenshots/      # App screenshots used in the page
Android.md          # Android implementation notes
Windows.md          # Windows implementation roadmap
Linux.md            # Linux implementation plan
```

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | App overview, platform download links |
| **Features** | LV2 host, real-time DSP, 4-slot chain, recording, presets, cross-platform |
| **Platforms** | Tabbed detail view for Android, Windows, and Linux editions |
| **Plugins** | 54 bundled guitar effects browser |
| **How It Works** | Signal flow walkthrough |
| **Download** | Per-platform download cards |

## Platform Highlights

- **Android** — Google Oboe full-duplex audio, API 31+, arm64-v8a / armeabi-v7a / x86 / x86_64 ABIs
- **Windows** — WASAPI shared & exclusive streams, Win32 native 2×2 slot grid UI
- **Linux** — JACK audio backend, GTK4 desktop UI, XDG settings storage

## Running Locally

Open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

## License

MIT

