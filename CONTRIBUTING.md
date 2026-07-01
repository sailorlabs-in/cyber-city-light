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
3. Install dependencies (if any).
4. Run the extension in the Extension Development Host (`F5` or via the Debug panel) to visually inspect your changes.

### 3. Modifying Themes
* Cyber City Light uses static JSON theme files located in the `themes/` folder.
* When editing the light theme (`cyber-city-light.json`), ensure all colors maintain high contrast and legibility on the light background.
* Avoid using pure primary/neon colors directly in light mode text tokens, as they are hard to read on light backgrounds. Always use their darkened, high-contrast equivalents.

### 4. Submit a Pull Request
1. Create a new branch for your changes (e.g., `feature/improve-rust-syntax`).
2. Make your edits and build the extension using `vsce package` to verify packaging succeeds.
3. Push to your fork and submit a Pull Request.
4. **Please include before/after screenshots** of code snippets showing your improvements.

---

## 🤝 Code of Conduct

We are committed to providing a friendly, safe, and welcoming environment for all contributors.

* **Be Respectful**: Treat everyone with respect, empathy, and professionalism.
* **Accept Feedback**: Gracefully accept constructive criticism and be open to different opinions.
* **Keep it Cyberpunk**: Make sure all themes align with our vibrant, neon-retro, or clean light cyberpunk aesthetic.

If you observe unacceptable behavior, please reach out to the project owner at `contact@sailorlabs.in`.
