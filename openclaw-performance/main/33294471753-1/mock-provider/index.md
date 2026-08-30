# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260830-052108-aa7808
- Generated: 2026-08-30T05:23:47.029Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 586 MB | 589 MB | 590 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 586 MB | 589 MB | 590 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 132 % | 139 % | 140 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 422 MB | 422 MB | 422 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 123 % | 127 % | 127 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 1,775 ms | 1,797 ms | 1,799 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 1,786 ms | 1,806 ms | 1,808 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 1,623 ms | 1,625 ms | 1,625 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 1,639 ms | 1,668 ms | 1,671 ms |

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
- Tested SHA: cfddfc2f700ea456c66b887d70716b83d3ac0ea2
- Workflow ref: main
- Workflow SHA: cfddfc2f700ea456c66b887d70716b83d3ac0ea2
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

The complete Kova bundle remains in [Actions artifact 9727004762](https://github.com/openclaw/openclaw/actions/runs/33294471753/artifacts/9727004762); its checksum is published under the bundles directory.
