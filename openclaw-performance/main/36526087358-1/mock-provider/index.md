# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260929-052703-d41474
- Generated: 2026-09-29T05:32:21.035Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,635 MB | 1,644 MB | 1,646 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,635 MB | 1,644 MB | 1,646 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 317 % | 322 % | 322 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.6 ms | 19.3 ms | 19.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,189 MB | 1,202 MB | 1,204 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 223 % | 227 % | 227 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,984 ms | 6,833 ms | 6,927 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,875 ms | 6,870 ms | 6,980 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,919 ms | 5,996 ms | 6,004 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,685 ms | 6,577 ms | 6,676 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,635 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,808 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 963 | <= 900 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,634 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,807 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,646 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,818 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 938 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,204 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,189 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,183 | <= 1150 |

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
- Tested SHA: ec101d561e2c852a7e3c419c1df9a5f0f620861c
- Workflow ref: main
- Workflow SHA: ec101d561e2c852a7e3c419c1df9a5f0f620861c
- Kova repository: openclaw/Kova
- Kova ref: 4b8b1681446b868a44193ed6e97253a6c8bcbbbf
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11015055990](https://github.com/openclaw/openclaw/actions/runs/36526087358/artifacts/11015055990); its checksum is published under the bundles directory.
