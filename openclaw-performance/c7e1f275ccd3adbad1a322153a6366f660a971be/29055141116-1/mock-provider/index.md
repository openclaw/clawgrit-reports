# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-09T224004Z
- Generated: 2026-07-09T22:47:11.906Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 6,794 ms | 6,805 ms | 6,806 ms |
| fresh-install | fresh | TCP Listening | 6,774 ms | 6,785 ms | 6,786 ms |
| fresh-install | fresh | Health p95 | 28 ms | 52.3 ms | 55 ms |
| fresh-install | fresh | Primary RSS | 830 MB | 899 MB | 906 MB |
| fresh-install | fresh | Gateway RSS | 830 MB | 899 MB | 906 MB |
| fresh-install | fresh | Max CPU | 64.7 % | 117 % | 123 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 6,556 ms | 6,813 ms | 6,841 ms |
| fresh-install | onboarded-user | TCP Listening | 6,539 ms | 6,766 ms | 6,791 ms |
| fresh-install | onboarded-user | Health p95 | 51 ms | 180 ms | 194 ms |
| fresh-install | onboarded-user | Primary RSS | 856 MB | 869 MB | 871 MB |
| fresh-install | onboarded-user | Gateway RSS | 856 MB | 869 MB | 871 MB |
| fresh-install | onboarded-user | Max CPU | 67.1 % | 78.3 % | 79.5 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 6,076 ms | 7,335 ms | 7,475 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 6,028 ms | 7,170 ms | 7,297 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 76 ms | 99.4 ms | 102 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 873 MB | 894 MB | 896 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 873 MB | 894 MB | 896 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 73.6 % | 75.5 % | 75.7 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 19.7 ms | 21.8 ms |
| bundled-plugin-startup | fresh | Health Ready | 2,555 ms | 2,920 ms | 2,960 ms |
| bundled-plugin-startup | fresh | TCP Listening | 2,511 ms | 2,738 ms | 2,763 ms |
| bundled-plugin-startup | fresh | Health p95 | 38 ms | 50.6 ms | 52 ms |
| bundled-plugin-startup | fresh | Primary RSS | 741 MB | 773 MB | 776 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 741 MB | 773 MB | 776 MB |
| bundled-plugin-startup | fresh | Max CPU | 142 % | 142 % | 142 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 726 MB | 814 MB | 824 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 139 % | 142 % | 142 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,134 ms | 3,176 ms | 3,180 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,898 ms | 2,930 ms | 2,933 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,145 ms | 3,190 ms | 3,195 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,965 ms | 3,050 ms | 3,060 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 5,943 ms | 7,155 ms | 7,290 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 5,778 ms | 7,135 ms | 7,286 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 81 ms | 115 ms | 119 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 865 MB | 868 MB | 869 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 865 MB | 868 MB | 869 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 110 % | 124 % | 125 % |
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
- Tested ref: c7e1f275ccd3adbad1a322153a6366f660a971be
- Tested SHA: c7e1f275ccd3adbad1a322153a6366f660a971be
- Workflow ref: codex/perf-baseline-publisher-v2
- Workflow SHA: c7e1f275ccd3adbad1a322153a6366f660a971be
- Kova repository: openclaw/Kova
- Kova ref: b20d3b35118841db050a14f241098169aff4b9a2
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).
