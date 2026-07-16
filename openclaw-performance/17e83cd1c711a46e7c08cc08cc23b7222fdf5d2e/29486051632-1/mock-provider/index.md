# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260716-091016-ef1c39
- Generated: 2026-07-16T09:20:10.815Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 862 MB | 864 MB | 864 MB |
| fresh-install | fresh | Gateway RSS | 862 MB | 864 MB | 864 MB |
| fresh-install | fresh | Max CPU | 154 % | 162 % | 163 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 866 MB | 871 MB | 872 MB |
| fresh-install | onboarded-user | Gateway RSS | 866 MB | 871 MB | 872 MB |
| fresh-install | onboarded-user | Max CPU | 149 % | 155 % | 156 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 858 MB | 921 MB | 928 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 858 MB | 921 MB | 928 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 158 % | 164 % | 165 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 11.8 ms | 18.2 ms | 18.9 ms |
| bundled-plugin-startup | fresh | Primary RSS | 860 MB | 863 MB | 863 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 860 MB | 863 MB | 863 MB |
| bundled-plugin-startup | fresh | Max CPU | 160 % | 167 % | 168 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 922 MB | 951 MB | 954 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 181 % | 183 % | 183 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,706 ms | 6,412 ms | 6,601 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,343 ms | 4,699 ms | 4,739 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,292 ms | 6,487 ms | 6,731 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,503 ms | 6,124 ms | 6,304 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 870 MB | 871 MB | 871 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 870 MB | 871 MB | 871 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 150 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 669 | <= 650 |

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
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 17e83cd1c711a46e7c08cc08cc23b7222fdf5d2e
- Tested SHA: 17e83cd1c711a46e7c08cc08cc23b7222fdf5d2e
- Workflow ref: main
- Workflow SHA: 00d20fb79896e085df90d654a8c1a3d9fb722952
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8370694704](https://github.com/openclaw/openclaw/actions/runs/29486051632/artifacts/8370694704); its checksum is published under the bundles directory.
