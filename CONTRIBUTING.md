# Contributing to Cyber City Light

We're excited that you want to contribute to **Cyber City Light**! Whether you want to improve language syntax coverage, adjust UI contrast, or propose new cyberpunk-inspired theme variants, your contributions are welcome.

To ensure a smooth collaboration, please follow the guidelines below.

---

## 🛠️ How to Contribute

### 1. Propose Changes
If you've spotted a bug (e.g., text that is hard to read in a specific language) or want to suggest a new feature, please open an Issue first to discuss it with the maintainers.

### 2. Local Setup
1. Fork and clone the repository.
2. Open the project in VS Code.
3. Run the extension in the Extension Development Host (`F5` or via the Run & Debug panel) to visually inspect your changes in real time.

### 3. Modifying Themes
* Cyber City Light uses declarative, static JSON theme files located in the `themes/` folder.
* **Web IDE Compatibility**: This extension is 100% web-compatible (`vscode.dev`, `github.dev`). Do **not** introduce any Node.js runtime code, native dependencies, or experimental DOM/CSS injections into the extension.
* To apply bulk token updates across all themes, edit [scripts/update-themes.js](file:///d:/Workspace/POCS/cyber-city/scripts/update-themes.js) and run:
  ```bash
  npm run build
  ```
* When editing the light theme (`cyber-city-light.json`), ensure all colors maintain high contrast and legibility (WCAG AA compliant) on the light background.
* Avoid using pure neon colors directly in light mode text tokens; use their darkened, high-contrast equivalents instead.

### 4. Verify & Package
Before submitting a PR, verify packaging succeeds without warnings:
```bash
npm run package
```

### 5. Submit a Pull Request
1. Create a new branch for your changes (e.g., `feature/improve-rust-syntax`).
2. Make your edits and ensure `npm run package` succeeds.
3. Push to your fork and submit a Pull Request.
4. **Please include before/after screenshots** of code snippets showing your improvements.

---

## 🤝 Code of Conduct

We are committed to providing a friendly, safe, and welcoming environment for all contributors.

* **Be Respectful**: Treat everyone with respect, empathy, and professionalism.
* **Accept Feedback**: Gracefully accept constructive criticism and be open to different opinions.
* **Keep it Cyberpunk**: Make sure all themes align with our vibrant, neon-retro, or clean light cyberpunk aesthetic.

If you observe unacceptable behavior, please reach out to the project owner at `contact@sailorlabs.in`.
