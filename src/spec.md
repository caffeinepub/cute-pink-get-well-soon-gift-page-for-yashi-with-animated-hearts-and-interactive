# Specification

## Summary
**Goal:** Fix hash-based routing so `/#/` renders only `Home` and `/#/wishes` renders only `AdminWishes`, using `react-router-dom` `HashRouter`.

**Planned changes:**
- Replace the TanStack Router setup in `frontend/src/App.tsx` with `react-router-dom` by importing and using `HashRouter`, `Routes`, and `Route`.
- Define exactly two routes in `App.tsx`: `/` → `Home`, and `/wishes` → `AdminWishes`.
- Verify/fix the render behavior so `/#/wishes` (including hard refresh) does not render or fall back to any `Home`-only content (e.g., GiftBox/fireworks).

**User-visible outcome:** Visiting `/#/` shows the Home page, while visiting `/#/wishes` shows only the AdminWishes page with no Home content displayed.
