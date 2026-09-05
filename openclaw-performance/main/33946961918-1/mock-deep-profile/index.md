# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260905-052231-5320f0
- Generated: 2026-09-05T05:24:25.208Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 590 MB | 590 MB | 590 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 590 MB | 590 MB | 590 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 147 % | 147 % | 147 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 779 MB | 779 MB | 779 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,874 ms | 3,874 ms | 3,874 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,880 ms | 3,880 ms | 3,880 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,763 ms | 3,763 ms | 3,763 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,145 ms | 3,145 ms | 3,145 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6df6aed680f81967f11e7598d08116cc6c015ba0
- Workflow ref: main
- Workflow SHA: 6df6aed680f81967f11e7598d08116cc6c015ba0
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9963674191](https://github.com/openclaw/openclaw/actions/runs/33946961918/artifacts/9963674191); its checksum is published under the bundles directory.
