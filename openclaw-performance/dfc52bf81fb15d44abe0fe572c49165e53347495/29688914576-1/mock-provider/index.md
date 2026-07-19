# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260719-132854-e6acf0
- Generated: 2026-07-19T13:34:52.861Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 925 MB | 948 MB | 951 MB |
| fresh-install | fresh | Gateway RSS | 925 MB | 948 MB | 951 MB |
| fresh-install | fresh | Max CPU | 153 % | 155 % | 155 % |
| fresh-install | fresh | Event Loop Max | 10.4 ms | 11.6 ms | 11.7 ms |
| fresh-install | onboarded-user | Primary RSS | 909 MB | 925 MB | 927 MB |
| fresh-install | onboarded-user | Gateway RSS | 909 MB | 925 MB | 927 MB |
| fresh-install | onboarded-user | Max CPU | 151 % | 155 % | 155 % |
| fresh-install | onboarded-user | Event Loop Max | 10.9 ms | 10.9 ms | 10.9 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 910 MB | 942 MB | 946 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 910 MB | 942 MB | 946 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 150 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 11.6 ms | 11.7 ms | 11.7 ms |
| bundled-plugin-startup | fresh | Primary RSS | 908 MB | 913 MB | 914 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 908 MB | 913 MB | 914 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 10.6 ms | 10.9 ms | 10.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 958 MB | 958 MB | 958 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 160 % | 164 % | 164 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,328 ms | 3,370 ms | 3,374 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,330 ms | 3,341 ms | 3,342 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,298 ms | 3,368 ms | 3,376 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,151 ms | 3,191 ms | 3,195 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 942 MB | 944 MB | 944 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 942 MB | 944 MB | 944 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 151 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 11.7 ms | 12.4 ms | 12.5 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | onboarded-user | resourceByRole.plugin-cli.peakRssMb | 912 | <= 900 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: dfc52bf81fb15d44abe0fe572c49165e53347495
- Tested SHA: dfc52bf81fb15d44abe0fe572c49165e53347495
- Workflow ref: main
- Workflow SHA: 0cc182844a8d5e749aed55e5c0eb0a1976cc98b1
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8443013745](https://github.com/openclaw/openclaw/actions/runs/29688914576/artifacts/8443013745); its checksum is published under the bundles directory.
