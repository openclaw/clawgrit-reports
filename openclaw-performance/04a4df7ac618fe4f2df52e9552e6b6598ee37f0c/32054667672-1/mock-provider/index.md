# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260817-182449-9560a4
- Generated: 2026-08-17T18:33:43.044Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 12, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 1,256 MB | 1,263 MB | 1,264 MB |
| fresh-install | fresh | Gateway RSS | 1,256 MB | 1,263 MB | 1,264 MB |
| fresh-install | fresh | Max CPU | 164 % | 164 % | 164 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 1,200 MB | 1,238 MB | 1,243 MB |
| fresh-install | onboarded-user | Gateway RSS | 1,200 MB | 1,238 MB | 1,243 MB |
| fresh-install | onboarded-user | Max CPU | 161 % | 161 % | 161 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,260 MB | 1,271 MB | 1,273 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,260 MB | 1,271 MB | 1,273 MB |
| bundled-plugin-startup | fresh | Max CPU | 169 % | 173 % | 173 % |
| bundled-plugin-startup | fresh | Event Loop Max | 10 ms | 11.4 ms | 11.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 890 MB | 898 MB | 899 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,901 ms | 4,207 ms | 4,241 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,903 ms | 4,249 ms | 4,287 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,374 ms | 3,816 ms | 3,865 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,723 ms | 4,032 ms | 4,067 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,240 MB | 1,241 MB | 1,242 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,240 MB | 1,241 MB | 1,242 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 159 % | 161 % | 161 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 9.6 ms | 9.6 ms | 9.6 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | peakRssMb | 1,256 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,264 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,206 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,200 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,194 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,243 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,273 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,260 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,241 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,242 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,235 | <= 1200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,240 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,240 | <= 1200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,235 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,212 | <= 1200 |

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
- Tested ref: 04a4df7ac618fe4f2df52e9552e6b6598ee37f0c
- Tested SHA: 04a4df7ac618fe4f2df52e9552e6b6598ee37f0c
- Workflow ref: main
- Workflow SHA: 5fe5d26007cc53ccd4818d9bc2b36c8c2da7a5f2
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9296228513](https://github.com/openclaw/openclaw/actions/runs/32054667672/artifacts/9296228513); its checksum is published under the bundles directory.
