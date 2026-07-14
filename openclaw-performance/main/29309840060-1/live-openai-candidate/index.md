# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260714-055643-6ab04b
- Generated: 2026-07-14T05:57:54.948Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: INCOMPLETE: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 945 MB | 945 MB | 945 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 164 % | 164 % | 164 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,274 ms | 5,274 ms | 5,274 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,276 ms | 5,276 ms | 5,276 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,237 ms | 5,237 ms | 5,237 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,673 ms | 3,673 ms | 3,673 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | INCOMPLETE |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: d3ac854e3101460fd160611a7d30a5e9b890e31f
- Workflow ref: main
- Workflow SHA: d3ac854e3101460fd160611a7d30a5e9b890e31f
- Kova repository: openclaw/Kova
- Kova ref: 678ff0b764b8786c2e436efbe4efac7d9aac10f8
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8301668926](https://github.com/openclaw/openclaw/actions/runs/29309840060/artifacts/8301668926); its checksum is published under the bundles directory.
