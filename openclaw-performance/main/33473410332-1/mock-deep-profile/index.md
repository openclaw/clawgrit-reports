# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260901-052613-2858fa
- Generated: 2026-09-01T05:28:32.845Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 596 MB | 596 MB | 596 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 596 MB | 596 MB | 596 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 147 % | 147 % | 147 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 733 MB | 733 MB | 733 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,901 ms | 8,901 ms | 8,901 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 9,017 ms | 9,017 ms | 9,017 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,693 ms | 6,693 ms | 6,693 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,740 ms | 6,740 ms | 6,740 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 85df957dd28e8433687f97f63581c00829045591
- Workflow ref: main
- Workflow SHA: 85df957dd28e8433687f97f63581c00829045591
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9787412311](https://github.com/openclaw/openclaw/actions/runs/33473410332/artifacts/9787412311); its checksum is published under the bundles directory.
