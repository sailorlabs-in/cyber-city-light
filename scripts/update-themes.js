const fs = require('fs');
const path = require('path');

const THEMES_DIR = path.join(__dirname, '..', 'themes');

const themeEnhancements = {
  'cyber-city-light.json': {
    colors: {
      // Bracket Pair Colorization (Rainbow Brackets)
      "editorBracketHighlight.foreground1": "#c21d93",
      "editorBracketHighlight.foreground2": "#007b99",
      "editorBracketHighlight.foreground3": "#a86a00",
      "editorBracketHighlight.foreground4": "#008754",
      "editorBracketHighlight.foreground5": "#6f42c1",
      "editorBracketHighlight.foreground6": "#d03f35",
      "editorBracketHighlight.unexpectedBracket.foreground": "#fe4450",
      "editorBracketPairGuide.activeBackground1": "#c21d9366",
      "editorBracketPairGuide.activeBackground2": "#007b9966",
      "editorBracketPairGuide.activeBackground3": "#a86a0066",
      "editorBracketPairGuide.activeBackground4": "#00875466",
      "editorBracketPairGuide.activeBackground5": "#6f42c166",
      "editorBracketPairGuide.activeBackground6": "#d03f3566",
      "editorBracketPairGuide.background1": "#c21d9320",
      "editorBracketPairGuide.background2": "#007b9920",
      "editorBracketPairGuide.background3": "#a86a0020",
      "editorBracketPairGuide.background4": "#00875420",
      "editorBracketPairGuide.background5": "#6f42c120",
      "editorBracketPairGuide.background6": "#d03f3520",

      // Sticky Scroll
      "editorStickyScroll.background": "#fdfcff",
      "editorStickyScrollHover.background": "#ebe7f3",
      "editorStickyScroll.shadow": "#dcd7eb60",

      // Inlay Hints
      "editorInlayHint.background": "#ebe8f2cc",
      "editorInlayHint.foreground": "#6a677a",
      "editorInlayHint.typeForeground": "#006b80",
      "editorInlayHint.parameterForeground": "#c21d93",

      // Command Center
      "commandCenter.background": "#f3f1f7",
      "commandCenter.activeBackground": "#ebe7f3",
      "commandCenter.border": "#dcd7eb",
      "commandCenter.foreground": "#2c283c",
      "commandCenter.activeForeground": "#c21d93",

      // Quick Input
      "quickInput.background": "#ffffff",
      "quickInput.foreground": "#2c283c",
      "quickInputTitle.background": "#f3f1f7",
      "quickInputList.focusBackground": "#e1dde9",
      "quickInputList.focusForeground": "#2c283c",

      // Notifications
      "notifications.background": "#ffffff",
      "notifications.foreground": "#2c283c",
      "notifications.border": "#d5d0e5",
      "notificationCenterHeader.background": "#ebe8f2",
      "notificationCenterHeader.foreground": "#2c283c",
      "notificationToast.border": "#d5d0e5",
      "notificationsErrorIcon.foreground": "#fe4450",
      "notificationsWarningIcon.foreground": "#008754",
      "notificationsInfoIcon.foreground": "#006b80",

      // TitleBar
      "titleBar.activeForeground": "#2c283c",
      "titleBar.inactiveForeground": "#a8a3c3",

      // Panel
      "panel.background": "#ebe8f2",
      "panel.border": "#d5d0e5",
      "panelTitle.activeForeground": "#2c283c",
      "panelTitle.inactiveForeground": "#2c283ca0",

      // Keybinding Label
      "keybindingLabel.background": "#ffffff",
      "keybindingLabel.foreground": "#2c283c",
      "keybindingLabel.border": "#d5d0e5",
      "keybindingLabel.bottomBorder": "#c21d9380",

      // Testing
      "testing.iconPassed": "#008754",
      "testing.iconFailed": "#fe4450",
      "testing.iconErrored": "#fe4450",
      "testing.iconQueued": "#ffd875",
      "testing.iconSkipped": "#a8a3c3",
      "testing.runAction": "#c21d93"
    },
    semanticTokenColors: {
      "newOperator": "#855a00",
      "stringLiteral": "#b84e00",
      "customLiteral": "#006b80",
      "numberLiteral": "#a82216",
      "interface": { "foreground": "#006f75", "italic": true },
      "class": "#9e002a",
      "type": "#006f75",
      "typeParameter": "#006b80",
      "enum": "#006f75",
      "enumMember": "#a82216",
      "parameter": { "foreground": "#00733d", "italic": true },
      "variable.readonly": "#a00070",
      "property.readonly": "#a00070",
      "namespace": "#006f75",
      "macro": "#9e002a"
    }
  },

  'cyber-city-dark.json': {
    colors: {
      // Bracket Pair Colorization (Rainbow Brackets)
      "editorBracketHighlight.foreground1": "#ff7edb",
      "editorBracketHighlight.foreground2": "#36f9f6",
      "editorBracketHighlight.foreground3": "#ffd875",
      "editorBracketHighlight.foreground4": "#72f1b8",
      "editorBracketHighlight.foreground5": "#b893ce",
      "editorBracketHighlight.foreground6": "#f97e72",
      "editorBracketHighlight.unexpectedBracket.foreground": "#fe4450",
      "editorBracketPairGuide.activeBackground1": "#ff7edb66",
      "editorBracketPairGuide.activeBackground2": "#36f9f666",
      "editorBracketPairGuide.activeBackground3": "#ffd87566",
      "editorBracketPairGuide.activeBackground4": "#72f1b866",
      "editorBracketPairGuide.activeBackground5": "#b893ce66",
      "editorBracketPairGuide.activeBackground6": "#f97e7266",
      "editorBracketPairGuide.background1": "#ff7edb20",
      "editorBracketPairGuide.background2": "#36f9f620",
      "editorBracketPairGuide.background3": "#ffd87520",
      "editorBracketPairGuide.background4": "#72f1b820",
      "editorBracketPairGuide.background5": "#b893ce20",
      "editorBracketPairGuide.background6": "#f97e7220",

      // Sticky Scroll
      "editorStickyScroll.background": "#262335",
      "editorStickyScrollHover.background": "#34294f",
      "editorStickyScroll.shadow": "#17152080",

      // Inlay Hints
      "editorInlayHint.background": "#34294f99",
      "editorInlayHint.foreground": "#848bbd",
      "editorInlayHint.typeForeground": "#36f9f6",
      "editorInlayHint.parameterForeground": "#ff7edb",

      // Command Center
      "commandCenter.background": "#232530",
      "commandCenter.activeBackground": "#2a2139",
      "commandCenter.border": "#49549580",
      "commandCenter.foreground": "#ffffffcc",
      "commandCenter.activeForeground": "#ff7edb",

      // Quick Input
      "quickInput.background": "#232530",
      "quickInput.foreground": "#ffffff",
      "quickInputTitle.background": "#171520",
      "quickInputList.focusBackground": "#ffffff20",
      "quickInputList.focusForeground": "#ffffff",

      // Notifications
      "notifications.background": "#232530",
      "notifications.foreground": "#ffffff",
      "notifications.border": "#49549580",
      "notificationCenterHeader.background": "#171520",
      "notificationCenterHeader.foreground": "#ffffff",
      "notificationToast.border": "#49549580",
      "notificationsErrorIcon.foreground": "#fe4450",
      "notificationsWarningIcon.foreground": "#72f1b8",
      "notificationsInfoIcon.foreground": "#36f9f6",

      // TitleBar
      "titleBar.activeForeground": "#ffffff",
      "titleBar.inactiveForeground": "#ffffff73",

      // Panel
      "panel.background": "#241b2f",
      "panel.border": "#49549580",
      "panelTitle.activeForeground": "#ffffff",
      "panelTitle.inactiveForeground": "#ffffff80",

      // Keybinding Label
      "keybindingLabel.background": "#34294f",
      "keybindingLabel.foreground": "#ffffff",
      "keybindingLabel.border": "#495495",
      "keybindingLabel.bottomBorder": "#ff7edb80",

      // Testing
      "testing.iconPassed": "#72f1b8",
      "testing.iconFailed": "#fe4450",
      "testing.iconErrored": "#fe4450",
      "testing.iconQueued": "#ffd875",
      "testing.iconSkipped": "#848bbd",
      "testing.runAction": "#ff7edb"
    },
    semanticTokenColors: {
      "newOperator": "#fed875",
      "stringLiteral": "#ff8b39",
      "customLiteral": "#36f9f6",
      "numberLiteral": "#f97e72",
      "interface": { "foreground": "#36f9f6", "italic": true },
      "class": "#fe4450",
      "type": "#36f9f6",
      "typeParameter": "#2ee2fa",
      "enum": "#36f9f6",
      "enumMember": "#f97e72",
      "parameter": { "foreground": "#72f1b8", "italic": true },
      "variable.readonly": "#ff7edb",
      "property.readonly": "#ff7edb",
      "namespace": "#36f9f6",
      "macro": "#fe4450"
    }
  },

  'cyber-city-dusk.json': {
    colors: {
      // Bracket Pair Colorization (Rainbow Brackets)
      "editorBracketHighlight.foreground1": "#ff75c3",
      "editorBracketHighlight.foreground2": "#4dd0e1",
      "editorBracketHighlight.foreground3": "#ffd875",
      "editorBracketHighlight.foreground4": "#81c784",
      "editorBracketHighlight.foreground5": "#ba68c8",
      "editorBracketHighlight.foreground6": "#ff8a65",
      "editorBracketHighlight.unexpectedBracket.foreground": "#fe4450",
      "editorBracketPairGuide.activeBackground1": "#ff75c366",
      "editorBracketPairGuide.activeBackground2": "#4dd0e166",
      "editorBracketPairGuide.activeBackground3": "#ffd87566",
      "editorBracketPairGuide.activeBackground4": "#81c78466",
      "editorBracketPairGuide.activeBackground5": "#ba68c866",
      "editorBracketPairGuide.activeBackground6": "#ff8a6566",
      "editorBracketPairGuide.background1": "#ff75c320",
      "editorBracketPairGuide.background2": "#4dd0e120",
      "editorBracketPairGuide.background3": "#ffd87520",
      "editorBracketPairGuide.background4": "#81c78420",
      "editorBracketPairGuide.background5": "#ba68c820",
      "editorBracketPairGuide.background6": "#ff8a6520",

      // Sticky Scroll
      "editorStickyScroll.background": "#261a28",
      "editorStickyScrollHover.background": "#342236",
      "editorStickyScroll.shadow": "#1c121e80",

      // Inlay Hints
      "editorInlayHint.background": "#34223699",
      "editorInlayHint.foreground": "#9c819e",
      "editorInlayHint.typeForeground": "#4dd0e1",
      "editorInlayHint.parameterForeground": "#ff75c3",

      // Command Center
      "commandCenter.background": "#221624",
      "commandCenter.activeBackground": "#2a1c2c",
      "commandCenter.border": "#5c3d6080",
      "commandCenter.foreground": "#ebd9eccc",
      "commandCenter.activeForeground": "#ff75c3",

      // Quick Input
      "quickInput.background": "#221624",
      "quickInput.foreground": "#ebd9ec",
      "quickInputTitle.background": "#1c121e",
      "quickInputList.focusBackground": "#ffffff20",
      "quickInputList.focusForeground": "#ebd9ec",

      // Notifications
      "notifications.background": "#221624",
      "notifications.foreground": "#ebd9ec",
      "notifications.border": "#5c3d6080",
      "notificationCenterHeader.background": "#1c121e",
      "notificationCenterHeader.foreground": "#ebd9ec",
      "notificationToast.border": "#5c3d6080",
      "notificationsErrorIcon.foreground": "#fe4450",
      "notificationsWarningIcon.foreground": "#81c784",
      "notificationsInfoIcon.foreground": "#4dd0e1",

      // TitleBar
      "titleBar.activeForeground": "#ebd9ec",
      "titleBar.inactiveForeground": "#ebd9ec73",

      // Panel
      "panel.background": "#221624",
      "panel.border": "#5c3d6080",
      "panelTitle.activeForeground": "#ebd9ec",
      "panelTitle.inactiveForeground": "#ebd9ec80",

      // Keybinding Label
      "keybindingLabel.background": "#342236",
      "keybindingLabel.foreground": "#ebd9ec",
      "keybindingLabel.border": "#5c3d60",
      "keybindingLabel.bottomBorder": "#ff75c380",

      // Testing
      "testing.iconPassed": "#81c784",
      "testing.iconFailed": "#fe4450",
      "testing.iconErrored": "#fe4450",
      "testing.iconQueued": "#ffd875",
      "testing.iconSkipped": "#9c819e",
      "testing.runAction": "#ff75c3"
    },
    semanticTokenColors: {
      "newOperator": "#ffd066",
      "stringLiteral": "#ffa852",
      "customLiteral": "#4dd0e1",
      "numberLiteral": "#ff6267",
      "interface": { "foreground": "#4dd0e1", "italic": true },
      "class": "#fe4450",
      "type": "#4dd0e1",
      "typeParameter": "#80deea",
      "enum": "#4dd0e1",
      "enumMember": "#ff6267",
      "parameter": { "foreground": "#81c784", "italic": true },
      "variable.readonly": "#ff75c3",
      "property.readonly": "#ff75c3",
      "namespace": "#4dd0e1",
      "macro": "#fe4450"
    }
  },

  'cyber-city-midnight.json': {
    colors: {
      // Bracket Pair Colorization (Rainbow Brackets)
      "editorBracketHighlight.foreground1": "#ff007f",
      "editorBracketHighlight.foreground2": "#00e5ff",
      "editorBracketHighlight.foreground3": "#ffee00",
      "editorBracketHighlight.foreground4": "#00ff66",
      "editorBracketHighlight.foreground5": "#d500f9",
      "editorBracketHighlight.foreground6": "#ff6d00",
      "editorBracketHighlight.unexpectedBracket.foreground": "#ff1744",
      "editorBracketPairGuide.activeBackground1": "#ff007f66",
      "editorBracketPairGuide.activeBackground2": "#00e5ff66",
      "editorBracketPairGuide.activeBackground3": "#ffee0066",
      "editorBracketPairGuide.activeBackground4": "#00ff6666",
      "editorBracketPairGuide.activeBackground5": "#d500f966",
      "editorBracketPairGuide.activeBackground6": "#ff6d0066",
      "editorBracketPairGuide.background1": "#ff007f20",
      "editorBracketPairGuide.background2": "#00e5ff20",
      "editorBracketPairGuide.background3": "#ffee0020",
      "editorBracketPairGuide.background4": "#00ff6620",
      "editorBracketPairGuide.background5": "#d500f920",
      "editorBracketPairGuide.background6": "#ff6d0020",

      // Sticky Scroll
      "editorStickyScroll.background": "#12101f",
      "editorStickyScrollHover.background": "#1d1a33",
      "editorStickyScroll.shadow": "#09081099",

      // Inlay Hints
      "editorInlayHint.background": "#1d1a3399",
      "editorInlayHint.foreground": "#787299",
      "editorInlayHint.typeForeground": "#00e5ff",
      "editorInlayHint.parameterForeground": "#ff007f",

      // Command Center
      "commandCenter.background": "#161427",
      "commandCenter.activeBackground": "#1e1b36",
      "commandCenter.border": "#3c356b80",
      "commandCenter.foreground": "#f4f2f7cc",
      "commandCenter.activeForeground": "#ff007f",

      // Quick Input
      "quickInput.background": "#161427",
      "quickInput.foreground": "#f4f2f7",
      "quickInputTitle.background": "#0f0d1a",
      "quickInputList.focusBackground": "#ffffff20",
      "quickInputList.focusForeground": "#f4f2f7",

      // Notifications
      "notifications.background": "#161427",
      "notifications.foreground": "#f4f2f7",
      "notifications.border": "#3c356b80",
      "notificationCenterHeader.background": "#0f0d1a",
      "notificationCenterHeader.foreground": "#f4f2f7",
      "notificationToast.border": "#3c356b80",
      "notificationsErrorIcon.foreground": "#ff1744",
      "notificationsWarningIcon.foreground": "#00ff66",
      "notificationsInfoIcon.foreground": "#00e5ff",

      // TitleBar
      "titleBar.activeForeground": "#f4f2f7",
      "titleBar.inactiveForeground": "#f4f2f773",

      // Panel
      "panel.background": "#161427",
      "panel.border": "#3c356b80",
      "panelTitle.activeForeground": "#f4f2f7",
      "panelTitle.inactiveForeground": "#f4f2f780",

      // Keybinding Label
      "keybindingLabel.background": "#1d1a33",
      "keybindingLabel.foreground": "#f4f2f7",
      "keybindingLabel.border": "#3c356b",
      "keybindingLabel.bottomBorder": "#ff007f80",

      // Testing
      "testing.iconPassed": "#00ff66",
      "testing.iconFailed": "#ff1744",
      "testing.iconErrored": "#ff1744",
      "testing.iconQueued": "#ffee00",
      "testing.iconSkipped": "#787299",
      "testing.runAction": "#ff007f"
    },
    semanticTokenColors: {
      "newOperator": "#e5ff00",
      "stringLiteral": "#ffaa00",
      "customLiteral": "#00e5ff",
      "numberLiteral": "#ff3333",
      "interface": { "foreground": "#00e5ff", "italic": true },
      "class": "#fe4450",
      "type": "#00e5ff",
      "typeParameter": "#69f0ae",
      "enum": "#00e5ff",
      "enumMember": "#ff3333",
      "parameter": { "foreground": "#00ff66", "italic": true },
      "variable.readonly": "#ff007f",
      "property.readonly": "#ff007f",
      "namespace": "#00e5ff",
      "macro": "#fe4450"
    }
  }
};

for (const [filename, enhancement] of Object.entries(themeEnhancements)) {
  const filePath = path.join(THEMES_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    continue;
  }
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Merge colors
  content.colors = {
    ...content.colors,
    ...enhancement.colors
  };

  // Add semanticTokenColors
  content.semanticTokenColors = enhancement.semanticTokenColors;

  fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8');
  console.log(`Successfully updated ${filename}`);
}

