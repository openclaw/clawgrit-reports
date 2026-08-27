# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260827-074842-fe0fe0
- Generated: 2026-08-27T07:51:41.924Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 605 MB | 605 MB | 605 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 605 MB | 605 MB | 605 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 125 % | 125 % | 125 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 84.5 ms | 84.5 ms | 84.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 698 MB | 698 MB | 698 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 148 % | 148 % | 148 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,244 ms | 7,244 ms | 7,244 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,332 ms | 7,332 ms | 7,332 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,564 ms | 5,564 ms | 5,564 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,829 ms | 5,829 ms | 5,829 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: bf6e96d46ee5a88221baa7262032359f54b60c74
- Workflow ref: main
- Workflow SHA: bf6e96d46ee5a88221baa7262032359f54b60c74
- Kova repository: openclaw/Kova
- Kova ref: 1fe2f4081877bb12b7f7ed355349f98b8a0a6882
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9637782138](https://github.com/openclaw/openclaw/actions/runs/33051183432/artifacts/9637782138); its checksum is published under the bundles directory.
