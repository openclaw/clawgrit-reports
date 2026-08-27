# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260827-074850-12aacd
- Generated: 2026-08-27T07:54:09.589Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 623 MB | 639 MB | 641 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 623 MB | 639 MB | 641 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 135 % | 141 % | 142 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 112 ms | 149 ms | 153 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 495 MB | 511 MB | 512 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 133 % | 158 % | 161 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,313 ms | 4,187 ms | 4,285 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,354 ms | 4,248 ms | 4,347 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,797 ms | 3,069 ms | 3,099 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,157 ms | 3,929 ms | 4,015 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
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
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9637850178](https://github.com/openclaw/openclaw/actions/runs/33051183432/artifacts/9637850178); its checksum is published under the bundles directory.
