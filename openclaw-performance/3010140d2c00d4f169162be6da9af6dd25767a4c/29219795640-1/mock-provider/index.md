# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260713-024048-2bfbd5
- Generated: 2026-07-13T02:46:36.911Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 750 MB | 758 MB | 759 MB |
| fresh-install | fresh | Gateway RSS | 750 MB | 758 MB | 759 MB |
| fresh-install | fresh | Max CPU | 136 % | 141 % | 141 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 737 MB | 750 MB | 751 MB |
| fresh-install | onboarded-user | Gateway RSS | 737 MB | 750 MB | 751 MB |
| fresh-install | onboarded-user | Max CPU | 140 % | 143 % | 143 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 765 MB | 765 MB | 765 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 765 MB | 765 MB | 765 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 129 % | 148 % | 150 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 748 MB | 751 MB | 751 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 748 MB | 751 MB | 751 MB |
| bundled-plugin-startup | fresh | Max CPU | 137 % | 141 % | 141 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 699 MB | 721 MB | 723 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 142 % | 144 % | 144 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,853 ms | 2,957 ms | 2,969 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,859 ms | 2,962 ms | 2,973 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,820 ms | 2,880 ms | 2,887 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,733 ms | 2,832 ms | 2,844 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 756 MB | 761 MB | 761 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 756 MB | 761 MB | 761 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 134 % | 135 % | 135 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

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
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 3010140d2c00d4f169162be6da9af6dd25767a4c
- Tested SHA: 3010140d2c00d4f169162be6da9af6dd25767a4c
- Workflow ref: main
- Workflow SHA: c81ae0412cb021a47f9ba26bc55ef4c3e0147b7d
- Kova repository: openclaw/Kova
- Kova ref: 2b02b7d33418db0c6952c4cf8fe8a608e7964859
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8267906885](https://github.com/openclaw/openclaw/actions/runs/29219795640/artifacts/8267906885); its checksum is published under the bundles directory.
