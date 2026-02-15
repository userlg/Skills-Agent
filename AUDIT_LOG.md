# Audit Log - Bugs & Solutions

This log tracks bugs, technical challenges, and their validated solutions with dates.

## [2026-01-27]

### Bug: GlassIt "Command Not Found"

- **Problem**: The user encountered `command 'glassit.increase' not found` despite the extension being installed.
- **Root Cause**: The GlassIt extension was either not correctly initialized by the editor or required specific alpha settings to trigger visual changes.
- **Solution**: Manually configured `glassit.alpha` in `settings.json`. Verified that higher alpha values (e.g., 245) or lower (e.g., 150) apply transparency correctly.
- **Status**: ✅ Validated by User

### Challenge: Browser Tool Failures (Playwright)

- **Problem**: `browser_subagent` failed with `$HOME is not defined`.
- **Root Cause**: PowerShell environment missing required variables for Playwright in this specific session.
- **Solution**: Switched to `Invoke-WebRequest` to fetch HTML content and parsed it using PowerShell regex. This allowed listing the 179+ skills from the GitHub repository without relying on the browser tool.
- **Status**: ✅ Workaround successful

## [2026-02-15]

### Achievement: Skills Ecosystem Expansion (skills.sh)

- **Objective**: Integrate and optimize high-value skills from https://skills.sh/.
- **Solution**: Added 7 new specialized skills (TanStack Query v5, Convex, Better Auth, Vercel Composition Patterns, Baoyu Content Pro, Mastra, Agent Browser) and updated Next.js/React best practices to the latest versions (Next.js 15).
- **Status**: ✅ Implementation complete and documentation updated.
