# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260828-074959-400ce8
- Generated: 2026-08-28T07:52:37.546Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 586 MB | 586 MB | 586 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 586 MB | 586 MB | 586 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 131 % | 131 % | 131 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 79.6 ms | 79.6 ms | 79.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 700 MB | 700 MB | 700 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 145 % | 145 % | 145 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,127 ms | 5,127 ms | 5,127 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,160 ms | 5,160 ms | 5,160 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,502 ms | 4,502 ms | 4,502 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,170 ms | 4,170 ms | 4,170 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: dfa21af9d7b92283a44c89084f911b4f4cf7a3bc
- Workflow ref: main
- Workflow SHA: dfa21af9d7b92283a44c89084f911b4f4cf7a3bc
- Kova repository: openclaw/Kova
- Kova ref: 1fe2f4081877bb12b7f7ed355349f98b8a0a6882
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9678501219](https://github.com/openclaw/openclaw/actions/runs/33152881591/artifacts/9678501219); its checksum is published under the bundles directory.
