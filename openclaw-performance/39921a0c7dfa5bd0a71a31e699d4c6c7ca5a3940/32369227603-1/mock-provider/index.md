# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260820-123208-5df88e
- Generated: 2026-08-20T12:44:22.159Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 7, FAIL: 8
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 1,044 MB | 1,044 MB | 1,044 MB |
| fresh-install | fresh | Gateway RSS | 1,044 MB | 1,044 MB | 1,044 MB |
| fresh-install | fresh | Max CPU | 160 % | 161 % | 161 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 8.2 ms | 9.1 ms |
| fresh-install | onboarded-user | Primary RSS | 1,064 MB | 1,087 MB | 1,090 MB |
| fresh-install | onboarded-user | Gateway RSS | 1,064 MB | 1,087 MB | 1,090 MB |
| fresh-install | onboarded-user | Max CPU | 151 % | 155 % | 155 % |
| fresh-install | onboarded-user | Event Loop Max | 9.9 ms | 10 ms | 10 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,091 MB | 1,122 MB | 1,125 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,091 MB | 1,122 MB | 1,125 MB |
| bundled-plugin-startup | fresh | Max CPU | 158 % | 159 % | 159 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 8.6 ms | 9.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 926 MB | 939 MB | 941 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 159 % | 159 % | 159 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,644 ms | 5,105 ms | 5,156 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,663 ms | 5,148 ms | 5,202 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,287 ms | 4,287 ms | 4,287 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,443 ms | 4,863 ms | 4,910 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,098 MB | 1,117 MB | 1,119 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,098 MB | 1,117 MB | 1,119 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 158 % | 163 % | 163 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10 ms | 10 ms | 10 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | onboarded-user | peakRssMb | 1,064 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,090 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,125 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,085 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,091 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,098 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,119 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,073 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 39921a0c7dfa5bd0a71a31e699d4c6c7ca5a3940
- Tested SHA: 39921a0c7dfa5bd0a71a31e699d4c6c7ca5a3940
- Workflow ref: main
- Workflow SHA: bb96493ebe58b338511205c42321e84cc643ecec
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9406903146](https://github.com/openclaw/openclaw/actions/runs/32369227603/artifacts/9406903146); its checksum is published under the bundles directory.
