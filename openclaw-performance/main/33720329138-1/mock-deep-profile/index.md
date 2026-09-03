# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260903-054856-c656b7
- Generated: 2026-09-03T05:50:52.686Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 613 MB | 613 MB | 613 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 613 MB | 613 MB | 613 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 143 % | 143 % | 143 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 673 MB | 673 MB | 673 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 143 % | 143 % | 143 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,259 ms | 4,259 ms | 4,259 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,272 ms | 4,272 ms | 4,272 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,013 ms | 4,013 ms | 4,013 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,429 ms | 3,429 ms | 3,429 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a828190b2953483a4a181ff5d23c283e92713d47
- Workflow ref: main
- Workflow SHA: a828190b2953483a4a181ff5d23c283e92713d47
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9880076507](https://github.com/openclaw/openclaw/actions/runs/33720329138/artifacts/9880076507); its checksum is published under the bundles directory.
