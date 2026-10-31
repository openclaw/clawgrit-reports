# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261031-051610-8d65bf
- Generated: 2026-10-31T05:39:42.301Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,550 MB | 1,556 MB | 1,556 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,550 MB | 1,556 MB | 1,556 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 209 % | 215 % | 215 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 39.8 ms | 41.7 ms | 41.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,465 MB | 1,530 MB | 1,537 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 198 % | 216 % | 218 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,006 ms | 7,545 ms | 7,604 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,342 ms | 7,495 ms | 7,623 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,047 ms | 7,231 ms | 7,251 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,748 ms | 7,274 ms | 7,333 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,423 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,682 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,465 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,743 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,537 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,719 | <= 1600 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: b924498923dff81a02fb8a89d57828717c6e160d
- Workflow ref: main
- Workflow SHA: b924498923dff81a02fb8a89d57828717c6e160d
- Kova repository: openclaw/Kova
- Kova ref: 7bd7c2f9531476bf86b9bd13c63f748182c727bb
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13032122236](https://github.com/openclaw/openclaw/actions/runs/41171744968/artifacts/13032122236); its checksum is published under the bundles directory.
