

## Plan: Change Accent Background Color to #00BCB0

The `#00BCB0` hex color converts to HSL `174 100% 37%`. I will update the `--accent` CSS variable in `src/index.css` from its current value (`140 20% 50%`) to `174 100% 37%`, and set `--accent-foreground` to white for readability.

### Changes

**`src/index.css`** (light mode):
- `--accent: 140 20% 50%` → `--accent: 174 100% 37%`
- `--accent-foreground: 36 44% 96%` → `--accent-foreground: 0 0% 100%`

