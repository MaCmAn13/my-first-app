# PROJ-1: Bloomberg Terminal Dashboard

**Status:** In Progress
**Created:** 2026-03-05

## Overview
A Bloomberg Terminal-style financial dashboard built with Next.js, featuring real-time market data visualization, news feeds, and an interactive command line interface.

## Features
- Dark theme mimicking classic Bloomberg Terminal aesthetic
- Equity monitor with 12 major US stocks
- Interactive price chart with volume overlay (recharts)
- World indices and FX/Crypto rates with tab switching
- Live news feed with categorized headlines
- Security detail panel with day range visualization
- Bloomberg-style command line input (ticker lookup, HELP, TOP, NEWS)
- Scrolling ticker bar with market indices

## Tech Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui (Table, ScrollArea, Tabs, Badge)
- recharts for chart visualization
- Mock data (no external API dependencies)

## Acceptance Criteria
- [x] Terminal renders in dark Bloomberg theme
- [x] Stock table is clickable and updates chart + detail panel
- [x] Chart displays price area + volume bars
- [x] News feed scrollable with categorized items
- [x] Indices/FX tabs switch correctly
- [x] Command line accepts ticker input and navigates
- [x] Responsive grid layout fills viewport
- [x] Build passes without TypeScript errors
