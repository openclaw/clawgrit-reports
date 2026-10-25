# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261025-052259-7722fe
- Generated: 2026-10-25T05:44:52.151Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,871 MB | 1,957 MB | 1,967 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,871 MB | 1,957 MB | 1,967 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 255 % | 261 % | 261 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 173 ms | 185 ms | 187 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,392 MB | 1,401 MB | 1,402 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 231 % | 233 % | 234 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,516 ms | 7,546 ms | 7,549 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,776 ms | 6,784 ms | 6,785 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,554 ms | 7,586 ms | 7,590 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,276 ms | 7,307 ms | 7,311 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,871 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,083 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 917 | <= 900 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,862 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,075 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 949 | <= 900 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,967 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,180 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 973 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,402 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,588 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,392 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,578 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,372 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,559 | <= 1400 |

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
- Tested SHA: ebbe13ef1cb81bce3df81bae4332668a3a4ce236
- Workflow ref: main
- Workflow SHA: ebbe13ef1cb81bce3df81bae4332668a3a4ce236
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

The complete Kova bundle remains in [Actions artifact 12588193682](https://github.com/openclaw/openclaw/actions/runs/40165246438/artifacts/12588193682); its checksum is published under the bundles directory.
