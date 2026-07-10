# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T032821Z
- Generated: 2026-07-10T03:36:05.066Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 8,131 ms | 8,760 ms | 8,830 ms |
| fresh-install | fresh | TCP Listening | 8,023 ms | 8,720 ms | 8,797 ms |
| fresh-install | fresh | Health p95 | 31 ms | 39.1 ms | 40 ms |
| fresh-install | fresh | Primary RSS | 855 MB | 893 MB | 898 MB |
| fresh-install | fresh | Gateway RSS | 855 MB | 893 MB | 898 MB |
| fresh-install | fresh | Max CPU | 52.8 % | 122 % | 130 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 8,774 ms | 11,257 ms | 11,533 ms |
| fresh-install | onboarded-user | TCP Listening | 8,772 ms | 11,255 ms | 11,531 ms |
| fresh-install | onboarded-user | Health p95 | 35 ms | 55.7 ms | 58 ms |
| fresh-install | onboarded-user | Primary RSS | 880 MB | 899 MB | 901 MB |
| fresh-install | onboarded-user | Gateway RSS | 880 MB | 899 MB | 901 MB |
| fresh-install | onboarded-user | Max CPU | 66.6 % | 74.2 % | 75 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 7,271 ms | 7,355 ms | 7,364 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 7,269 ms | 7,273 ms | 7,273 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 20 ms | 54.2 ms | 58 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 856 MB | 861 MB | 861 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 856 MB | 861 MB | 861 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 59 % | 95.9 % | 100 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 7,573 ms | 8,246 ms | 8,321 ms |
| bundled-plugin-startup | fresh | TCP Listening | 7,526 ms | 8,205 ms | 8,280 ms |
| bundled-plugin-startup | fresh | Health p95 | 11 ms | 27.2 ms | 29 ms |
| bundled-plugin-startup | fresh | Primary RSS | 827 MB | 863 MB | 867 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 827 MB | 863 MB | 867 MB |
| bundled-plugin-startup | fresh | Max CPU | 52.8 % | 55.8 % | 56.1 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 717 MB | 732 MB | 734 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 143 % | 144 % | 144 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,152 ms | 3,745 ms | 3,811 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,702 ms | 3,743 ms | 3,859 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,899 ms | 3,148 ms | 3,176 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,975 ms | 3,596 ms | 3,665 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 8,345 ms | 14,740 ms | 15,450 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 8,292 ms | 14,626 ms | 15,330 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 51 ms | 77.1 ms | 80 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 864 MB | 869 MB | 869 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 864 MB | 869 MB | 869 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 100 % | 113 % | 114 % |
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
- Tested ref: 510b34d3d213b9f007c825c4f1631196b8a0afcb
- Tested SHA: 510b34d3d213b9f007c825c4f1631196b8a0afcb
- Workflow ref: main
- Workflow SHA: 6db586a388c639796e312811b4d9801ca6ce1806
- Kova repository: openclaw/Kova
- Kova ref: a2dd84e7d65507e614afaff850d3932d18c859b6
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).
