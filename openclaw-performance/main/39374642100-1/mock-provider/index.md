# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261020-052506-7d5287
- Generated: 2026-10-20T05:48:35.246Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,897 MB | 1,919 MB | 1,922 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,897 MB | 1,919 MB | 1,922 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 257 % | 259 % | 259 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 48.6 ms | 50.8 ms | 51.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,648 MB | 1,734 MB | 1,743 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 234 % | 248 % | 249 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,437 ms | 8,723 ms | 8,754 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 8,212 ms | 8,248 ms | 8,252 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,447 ms | 8,749 ms | 8,783 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 8,187 ms | 8,454 ms | 8,484 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,922 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,140 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 966 | <= 900 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,836 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,054 | <= 1440 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,897 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,117 | <= 1440 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,592 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,776 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,648 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,834 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,743 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,930 | <= 1400 |

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
- Tested SHA: 4763b77ba572eefaef3bed12c0c17c305cd12738
- Workflow ref: main
- Workflow SHA: 4763b77ba572eefaef3bed12c0c17c305cd12738
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

The complete Kova bundle remains in [Actions artifact 12244085306](https://github.com/openclaw/openclaw/actions/runs/39374642100/artifacts/12244085306); its checksum is published under the bundles directory.
