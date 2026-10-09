# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261009-053022-8c1daa
- Generated: 2026-10-09T05:53:17.327Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,436 MB | 1,441 MB | 1,441 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,436 MB | 1,441 MB | 1,441 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 207 % | 233 % | 236 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 25.2 ms | 25.5 ms | 25.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,484 MB | 1,525 MB | 1,530 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 162 % | 165 % | 165 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,173 ms | 7,235 ms | 7,242 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,150 ms | 7,178 ms | 7,181 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,029 ms | 7,225 ms | 7,247 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,952 ms | 7,000 ms | 7,005 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,423 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,710 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,441 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,728 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,436 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,721 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,484 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,584 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,530 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,630 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,423 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,524 | <= 1400 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e825e5918c2e98aaaa98c5a84417635256ef2025
- Workflow ref: main
- Workflow SHA: e825e5918c2e98aaaa98c5a84417635256ef2025
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11598277685](https://github.com/openclaw/openclaw/actions/runs/37888680604/artifacts/11598277685); its checksum is published under the bundles directory.
