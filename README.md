# OpenClaw Performance Reports

Public performance report archive for [OpenClaw](https://github.com/openclaw/openclaw).

This repository is written by the `OpenClaw Performance` GitHub Actions workflow. It stores generated benchmark reports, source-probe summaries, and latest-run pointers so performance changes on `main` can be inspected without downloading workflow artifacts.

## Latest Reports

- [Mock provider](openclaw-performance/main/latest-mock-provider.json): deterministic fake OpenAI-compatible provider, focused on OpenClaw loop overhead.
- [Mock deep profile](openclaw-performance/main/latest-mock-deep-profile.json): CPU, heap, and trace artifacts for startup, Gateway, and agent-turn hotspots.
- [Live GPT-5.4](openclaw-performance/main/latest-live-gpt54.json): real `openai/gpt-5.4` agent turn when the OpenAI key is available to CI.

Each latest pointer contains the source repository, commit SHA, workflow run id, lane, and report path.

## Layout

Reports are grouped by source ref, workflow run, attempt, and lane:

```text
openclaw-performance/<ref>/<run-id>-<attempt>/<lane>/
```

Typical files:

- `index.md`: human-readable lane summary.
- `report.md`: Kova report summary.
- `report.json`: raw Kova report data.
- `source/index.md`: OpenClaw source-probe summary when available.
- `source/*.json`: raw source-probe data when available.

## What Is Measured

Current reports include:

- Gateway boot timing and memory.
- Startup with default, hook, and plugin-heavy configurations.
- Fake-provider agent turns for pure loop overhead.
- Real GPT-5.4 agent turn latency when live credentials are present.
- CLI startup commands against a booted Gateway.
- CPU, heap, and trace artifacts for hotspot investigation.

The benchmark harness lives in [openclaw/Kova](https://github.com/openclaw/Kova). The workflow configuration lives in [openclaw/openclaw](https://github.com/openclaw/openclaw/blob/main/.github/workflows/openclaw-performance.yml).

