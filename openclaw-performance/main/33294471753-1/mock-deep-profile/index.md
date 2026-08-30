# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260830-052130-4bf53a
- Generated: 2026-08-30T05:23:19.199Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 583 MB | 583 MB | 583 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 583 MB | 583 MB | 583 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 141 % | 141 % | 141 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 679 MB | 679 MB | 679 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 144 % | 144 % | 144 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,657 ms | 3,657 ms | 3,657 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,670 ms | 3,670 ms | 3,670 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,413 ms | 3,413 ms | 3,413 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,941 ms | 2,941 ms | 2,941 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: cfddfc2f700ea456c66b887d70716b83d3ac0ea2
- Workflow ref: main
- Workflow SHA: cfddfc2f700ea456c66b887d70716b83d3ac0ea2
- Kova repository: openclaw/Kova
- Kova ref: 1fe2f4081877bb12b7f7ed355349f98b8a0a6882
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9727001138](https://github.com/openclaw/openclaw/actions/runs/33294471753/artifacts/9727001138); its checksum is published under the bundles directory.
