# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T144430Z
- Generated: 2026-07-10T14:52:07.866Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 7,351 ms | 7,365 ms | 7,367 ms |
| fresh-install | fresh | TCP Listening | 7,058 ms | 7,269 ms | 7,292 ms |
| fresh-install | fresh | Health p95 | 47 ms | 57.8 ms | 59 ms |
| fresh-install | fresh | Primary RSS | 846 MB | 864 MB | 866 MB |
| fresh-install | fresh | Gateway RSS | 846 MB | 864 MB | 866 MB |
| fresh-install | fresh | Max CPU | 100 % | 123 % | 126 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 6,450 ms | 6,872 ms | 6,919 ms |
| fresh-install | onboarded-user | TCP Listening | 6,284 ms | 6,738 ms | 6,788 ms |
| fresh-install | onboarded-user | Health p95 | 104 ms | 111 ms | 112 ms |
| fresh-install | onboarded-user | Primary RSS | 878 MB | 887 MB | 888 MB |
| fresh-install | onboarded-user | Gateway RSS | 878 MB | 887 MB | 888 MB |
| fresh-install | onboarded-user | Max CPU | 78.3 % | 97.8 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 6,775 ms | 6,903 ms | 6,917 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 6,532 ms | 6,757 ms | 6,782 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 63 ms | 81.9 ms | 84 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 853 MB | 930 MB | 938 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 853 MB | 930 MB | 938 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 76.4 % | 97.6 % | 100 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 6,449 ms | 7,358 ms | 7,459 ms |
| bundled-plugin-startup | fresh | TCP Listening | 6,292 ms | 7,205 ms | 7,306 ms |
| bundled-plugin-startup | fresh | Health p95 | 40 ms | 62.5 ms | 65 ms |
| bundled-plugin-startup | fresh | Primary RSS | 865 MB | 895 MB | 898 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 865 MB | 895 MB | 898 MB |
| bundled-plugin-startup | fresh | Max CPU | 80 % | 98 % | 100 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 703 MB | 728 MB | 730 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 145 % | 145 % | 145 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,788 ms | 2,895 ms | 2,907 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,799 ms | 2,898 ms | 2,909 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,761 ms | 2,849 ms | 2,859 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,675 ms | 2,765 ms | 2,775 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 6,560 ms | 7,834 ms | 7,975 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 6,538 ms | 7,665 ms | 7,790 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 131 ms | 155 ms | 158 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 888 MB | 889 MB | 889 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 888 MB | 889 MB | 889 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 100 % | 121 % | 123 % |
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
- Tested ref: b2c1db4b5eb601c498f36f649dda1155448476f6
- Tested SHA: b2c1db4b5eb601c498f36f649dda1155448476f6
- Workflow ref: release-ci/perf-b2c1db4b5eb6-20260710144320
- Workflow SHA: b2c1db4b5eb601c498f36f649dda1155448476f6
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
