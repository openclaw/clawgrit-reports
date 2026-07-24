# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-205900-8be1f3
- Generated: 2026-07-24T21:09:01.603Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 15, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 977 MB | 980 MB | 981 MB |
| fresh-install | fresh | Gateway RSS | 977 MB | 980 MB | 981 MB |
| fresh-install | fresh | Max CPU | 157 % | 160 % | 160 % |
| fresh-install | fresh | Event Loop Max | 10.5 ms | 10.7 ms | 10.7 ms |
| fresh-install | onboarded-user | Primary RSS | 966 MB | 975 MB | 976 MB |
| fresh-install | onboarded-user | Gateway RSS | 966 MB | 975 MB | 976 MB |
| fresh-install | onboarded-user | Max CPU | 155 % | 159 % | 159 % |
| fresh-install | onboarded-user | Event Loop Max | 12.3 ms | 14.8 ms | 15 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 951 MB | 961 MB | 962 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 951 MB | 961 MB | 962 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 154 % | 155 % | 155 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 20.8 ms | 21.5 ms | 21.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 975 MB | 976 MB | 976 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 975 MB | 976 MB | 976 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 157 % | 157 % |
| bundled-plugin-startup | fresh | Event Loop Max | 23.5 ms | 26.1 ms | 26.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 966 MB | 976 MB | 977 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 158 % | 159 % | 159 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,045 ms | 5,124 ms | 5,133 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,019 ms | 5,136 ms | 5,149 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,950 ms | 5,045 ms | 5,056 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,657 ms | 4,675 ms | 4,677 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 963 MB | 977 MB | 979 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 963 MB | 977 MB | 979 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 154 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20.9 ms | 28 ms | 28.8 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 976 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 959 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 975 | <= 950 |

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
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: c562637406cdd786865d111240f3da4716cae329
- Tested SHA: c562637406cdd786865d111240f3da4716cae329
- Workflow ref: main
- Workflow SHA: c0c12da9f25bd91fe91d54cf5d1ec999b6eebcdf
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

The complete Kova bundle remains in [Actions artifact 8609497215](https://github.com/openclaw/openclaw/actions/runs/30126007458/artifacts/8609497215); its checksum is published under the bundles directory.
