---
layout: post
title: "Agent Evidence Chain: From OSS Incidents to Reproducible Engineering Artifacts"
date: 2026-08-14 10:00:00 +0800
categories: [tech-project]
description: "An incident-driven evidence-chain template for agent platform engineering: real OSS incidents → Cases/SOPs → five engineering lifelines → offline mock CLI artifacts for interview-ready claims."
---

This project is an open-source **[agent platform engineering evidence-chain template](https://github.com/Zoe-B-Zhang/agent-evidence-chain)** — not a production agent runtime, but a structured path from real OSS incidents to reproducible artifacts you can cite in interviews or on a resume.

## Project Overview

Agent Evidence Chain reverse-engineers agent reliability from **real OSS incidents** into structured **Cases + SOPs**, maps them to **five engineering lifelines** (M1–M5: control plane, tool boundary, config rollout, eval gate, on-call SOP), and produces **offline mock CLI artifacts** (trace, harness, eval reports) as inspectable evidence.

The evidence chain works as:

```
OSS incident / PR  →  Case + SOP  →  K-point + module exit  →  mock CLI artifact  →  interview claim
```

Key deliverables include 18 incident Cases with formal SOPs (429 rate limits, RAG stale index, secret leakage, HITL fatigue, and more), curriculum notes in `track-a-notes/`, and portfolio templates for resume bullets and case studies.

## Technology Stack

- **Language:** Python
- **Mock Runtime:** TrackARuntime — agent loop with persisted state/trace, allowlist, schema, HITL stub
- **Harness & Eval:** prompt versioning, guardrails, gray rollout, rollback; 22 eval scenarios with regression gate
- **Documentation:** Case library, SOPs, knowledge cards (M1–M5), portfolio templates
- **License:** MIT

## Quick Repro

```bash
cd TrackARuntime && pip install -r requirements.txt && python cli.py eval --baseline auto
```

## Project Repository

For the full curriculum, Case index, and source code, visit the project on GitHub:

**[Agent Evidence Chain - GitHub Repository](https://github.com/Zoe-B-Zhang/agent-evidence-chain)**

## Scope & Boundaries

This is a **teaching simulation for interview evidence**, not a production agent platform. It does not include live LLM providers, distributed queues, OTel backends, or vector indexes. P1–P6 extension demos are documented and designed but not all implemented — see the repo's BACKLOG for the current status.
