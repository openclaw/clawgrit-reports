# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260816-051848-a946b7
- Generated: 2026-08-16T05:25:41.147Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 12, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 1,097 MB | 1,104 MB | 1,105 MB |
| fresh-install | fresh | Gateway RSS | 1,097 MB | 1,104 MB | 1,105 MB |
| fresh-install | fresh | Max CPU | 161 % | 162 % | 162 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 9 ms | 10 ms |
| fresh-install | onboarded-user | Primary RSS | 1,103 MB | 1,108 MB | 1,109 MB |
| fresh-install | onboarded-user | Gateway RSS | 1,103 MB | 1,108 MB | 1,109 MB |
| fresh-install | onboarded-user | Max CPU | 156 % | 159 % | 159 % |
| fresh-install | onboarded-user | Event Loop Max | 9.5 ms | 10 ms | 10 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,104 MB | 1,109 MB | 1,109 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,104 MB | 1,109 MB | 1,109 MB |
| bundled-plugin-startup | fresh | Max CPU | 160 % | 162 % | 162 % |
| bundled-plugin-startup | fresh | Event Loop Max | 10 ms | 10 ms | 10 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 918 MB | 941 MB | 943 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,252 ms | 3,257 ms | 3,257 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,267 ms | 3,272 ms | 3,272 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,966 ms | 2,973 ms | 2,974 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,136 ms | 3,143 ms | 3,143 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,134 MB | 1,141 MB | 1,142 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,134 MB | 1,141 MB | 1,142 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 157 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10 ms | 10 ms | 10 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | peakRssMb | 1,097 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,093 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,105 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,103 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,098 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,109 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,104 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,097 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,109 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,142 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,134 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,091 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
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
- Tested ref: 4a2333e063cd4f56f49465b16aff655cbcb5c1a0
- Tested SHA: 4a2333e063cd4f56f49465b16aff655cbcb5c1a0
- Workflow ref: main
- Workflow SHA: 8cf85e3ceda4a0341afd41e45734c27862519a74
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

The complete Kova bundle remains in [Actions artifact 9258716962](https://github.com/openclaw/openclaw/actions/runs/31928672779/artifacts/9258716962); its checksum is published under the bundles directory.
