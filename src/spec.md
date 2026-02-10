# Specification

## Summary
**Goal:** Replace the `/wishes` admin page with a simple, hidden, refreshable list view backed by an upgrade-safe wishes store.

**Planned changes:**
- Update `backend/main.mo` to compile and provide a stable, upgrade-safe wishes store with `submitWish(text : Text) : async ()` and `getAllWishes() : async [Text]` (submission order preserved).
- Replace `frontend/src/pages/WishesPage.tsx` UI to fetch via `getAllWishes()`, render a clean list/table of wishes, and provide a manual "Refresh" button.
- Keep `/wishes` hidden from the main UI by not adding any navigation link/menu item; page remains accessible only by directly visiting the route.
- Regenerate backend Candid/declarations so frontend bindings/types match the updated canister interface.

**User-visible outcome:** Users can submit wishes as before, and an admin can visit `/wishes` directly to view all submitted wishes in order and manually refresh the list (with basic loading/error/empty states), without any password protection and without any link from the main page.
