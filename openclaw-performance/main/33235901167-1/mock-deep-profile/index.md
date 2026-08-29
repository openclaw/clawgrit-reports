# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260829-052022-fb1548
- Generated: 2026-08-29T05:22:26.846Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 584 MB | 584 MB | 584 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 584 MB | 584 MB | 584 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 142 % | 142 % | 142 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 670 MB | 670 MB | 670 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 138 % | 138 % | 138 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,733 ms | 3,733 ms | 3,733 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,742 ms | 3,742 ms | 3,742 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,556 ms | 3,556 ms | 3,556 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,077 ms | 3,077 ms | 3,077 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 4ee2216cd76ba9cedcb8e62d81dd02e0b531ffb5
- Workflow ref: main
- Workflow SHA: 4ee2216cd76ba9cedcb8e62d81dd02e0b531ffb5
- Kova repository: openclaw/Kova
- Kova ref: 1fe2f4081877bb12b7f7ed355349f98b8a0a6882
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9709936008](https://github.com/openclaw/openclaw/actions/runs/33235901167/artifacts/9709936008); its checksum is published under the bundles directory.
