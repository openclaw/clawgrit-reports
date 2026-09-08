# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260908-052444-3198fa
- Generated: 2026-09-08T05:26:10.856Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 615 MB | 615 MB | 615 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 139 % | 139 % | 139 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,031 ms | 5,031 ms | 5,031 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,585 ms | 4,585 ms | 4,585 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,054 ms | 5,054 ms | 5,054 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,353 ms | 2,353 ms | 2,353 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: bd49ac0b6c43ac0693f0bf8f6ba96d4deb333536
- Workflow ref: main
- Workflow SHA: bd49ac0b6c43ac0693f0bf8f6ba96d4deb333536
- Kova repository: openclaw/Kova
- Kova ref: 065d2ffd535f12fd0f3a15c412a08a456f580260
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10042059725](https://github.com/openclaw/openclaw/actions/runs/34190397606/artifacts/10042059725); its checksum is published under the bundles directory.
