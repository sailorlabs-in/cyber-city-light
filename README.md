# Cyber City Light — VS Code Theme Suite

![Cyber City Banner](https://raw.githubusercontent.com/sailorlabs-in/cyber-city-light/refs/heads/main/BANNER.png)

A vibrant, highly readable Cyberpunk-inspired color theme suite for VS Code, fully supporting both desktop and web-based environments (`vscode.dev`, `github.dev`).

This theme is a lightweight fork of the classic neon-inspired theme, redesigned to remove all browser-hacking JavaScript injection (avoiding core corruption warnings and enabling web compatibility) and expanded to include a cool light mode and two new relative dark modes.

---

## 🎨 The Themes

Cyber City Light comes with 4 custom-crafted color palettes designed for different times of the day and developer moods:

### 1. ☀️ Cyber City Light (Light Mode)

A cool, clean light theme utilizing a soft lavender-grey background (`#f7f5fa`) combined with high-contrast, dark-neon accents. Standard neon colors are darkened just enough to satisfy accessibility and legibility rules while retaining their signature vibrant cyber-aesthetic.

### 2. 🌌 Cyber City Dark

The classic dark palette. It features the signature neon pinks, cyans, oranges, and deep indigo backgrounds that defined the original theme, now running as a standard, high-performance static color theme.

### 3. 🌇 Cyber City Dusk

A warm, sunset-themed dark mode variant. Utilizing a deep plum background (`#261a28`) with golden yellow, sunset orange, mint green, and electric blue tones. Perfect for coding as the sun goes down.

### 4. 🌃 Cyber City Midnight

An ultra-dark, high-contrast dark mode. Features a deep midnight black-purple background (`#090810`) with glowing neon rose, lime green, and electric cyan highlights. Designed for late-night coding sessions.

---

## 🚀 Installation & Activation

1. Open **VS Code**.
2. Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3. Search for **Cyber City Light** and install it.
4. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and choose **Preferences: Color Theme**.
5. Select your preferred flavor:
   - `Cyber City Light`
   - `Cyber City Dark`
   - `Cyber City Dusk`
   - `Cyber City Midnight`

---

## 🌐 Full Web Compatibility

Because this extension does not use any experimental JS or CSS injection, it works seamlessly out-of-the-box on:

- **VS Code for the Web** (`https://vscode.dev`)
- **GitHub Dev** (`https://github.dev`)
- Sandboxed and enterprise enterprise environments where admin privileges are restricted.

---

## 🛠️ Customization

If you want to fine-tune the colors, you can easily override them in your VS Code `settings.json`:

```json
"workbench.colorCustomizations": {
    "[Cyber City Light]": {
        "editor.background": "#fbf9fe",
        "statusBar.background": "#dcd7eb"
    }
}
```

---

## 📝 License & Credits

- Licensed under the permissive **MIT License**.
