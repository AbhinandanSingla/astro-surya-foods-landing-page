# Surya Foods — Project Documentation

> **For AI Agents & Developers**: This directory contains comprehensive reference documentation for the Surya Foods corporate website. Read these files before making any changes to the codebase.

---

## 📖 Documentation Index

| # | Document | Purpose | Read When... |
|---|---|---|---|
| 1 | [architecture.md](./architecture.md) | Project structure, tech stack, routing, deployment | Starting any task on this project |
| 2 | [theme.md](./theme.md) | Design system — colors, typography, spacing, animations | Modifying UI, adding components, styling |
| 3 | [components.md](./components.md) | Component API reference — props, usage, behavior | Using or modifying existing components |
| 4 | [pages.md](./pages.md) | Page structure — sections, layout, content placement | Building or editing pages |
| 5 | [content.md](./content.md) | All text copy, product data, company information | Changing any visible text or data |
| 6 | [forms.md](./forms.md) | Form specs — fields, validation, payloads | Working on lead generation forms |
| 7 | [ai-guidelines.md](./ai-guidelines.md) | Rules, conventions, checklists, troubleshooting | Before making ANY code changes |

---

## 🚀 Quick Start for AI Agents

1. **Read** `architecture.md` → understand the project
2. **Read** `ai-guidelines.md` → understand the rules
3. **Read** the relevant doc for your task (theme, components, pages, content, or forms)
4. **Make changes** following the documented patterns
5. **Run** `npm run build` to verify
6. **Update** the relevant doc if you changed something significant

---

## 📋 Key Facts

| Fact | Value |
|---|---|
| Framework | Astro v5 (Static Site Generation) |
| Styling | Tailwind CSS v4 (CSS-first config in global.css) |
| Language | TypeScript (strict) |
| Deployment | Cloudflare Workers |
| Pages | 4 (Home, Global Exports, 048 Brand, Heritage) |
| Components | 10 reusable Astro components |
| Forms | 2 lead generation forms (frontend-only) |
| Backend | None (forms to be wired to n8n/AWS SES later) |
