# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-162457-ffa00c
- Generated: 2026-07-24T16:34:51.108Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 16, FAIL: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 943 MB | 968 MB | 970 MB |
| fresh-install | fresh | Gateway RSS | 943 MB | 968 MB | 970 MB |
| fresh-install | fresh | Max CPU | 159 % | 160 % | 160 % |
| fresh-install | fresh | Event Loop Max | 23.9 ms | 26.6 ms | 26.9 ms |
| fresh-install | onboarded-user | Primary RSS | 934 MB | 943 MB | 944 MB |
| fresh-install | onboarded-user | Gateway RSS | 934 MB | 943 MB | 944 MB |
| fresh-install | onboarded-user | Max CPU | 154 % | 156 % | 156 % |
| fresh-install | onboarded-user | Event Loop Max | 11.6 ms | 15 ms | 15.4 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 922 MB | 925 MB | 926 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 922 MB | 925 MB | 926 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 156 % | 157 % | 157 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 24.9 ms | 27.4 ms | 27.7 ms |
| bundled-plugin-startup | fresh | Primary RSS | 947 MB | 956 MB | 957 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 947 MB | 956 MB | 957 MB |
| bundled-plugin-startup | fresh | Max CPU | 160 % | 163 % | 163 % |
| bundled-plugin-startup | fresh | Event Loop Max | 22.5 ms | 24.5 ms | 24.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 995 MB | 1,012 MB | 1,014 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 174 % | 176 % | 176 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,282 ms | 7,174 ms | 7,273 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,162 ms | 6,818 ms | 6,891 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,288 ms | 7,193 ms | 7,293 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,905 ms | 6,684 ms | 6,770 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 943 MB | 961 MB | 963 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 943 MB | 961 MB | 963 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 155 % | 155 % | 155 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 21 ms | 31.2 ms | 32.3 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 957 | <= 950 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,014 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,014 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,014 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 84ed32e1ee870bed556de5b6391f73b5db25854b
- Tested SHA: 84ed32e1ee870bed556de5b6391f73b5db25854b
- Workflow ref: main
- Workflow SHA: f41e28202fa797bd190ef53e596a27781c9bb494
- Kova repository: openclaw/Kova
- Kova ref: 1bf080f6dbf8800a3187591493f2551824e4ccc7
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8602951147](https://github.com/openclaw/openclaw/actions/runs/30108849443/artifacts/8602951147); its checksum is published under the bundles directory.
