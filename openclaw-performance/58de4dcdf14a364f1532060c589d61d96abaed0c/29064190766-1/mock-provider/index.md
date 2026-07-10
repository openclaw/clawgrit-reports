# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T021450Z
- Generated: 2026-07-10T02:22:13.615Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 7,731 ms | 8,241 ms | 8,298 ms |
| fresh-install | fresh | TCP Listening | 7,537 ms | 8,202 ms | 8,276 ms |
| fresh-install | fresh | Health p95 | 13 ms | 26.5 ms | 28 ms |
| fresh-install | fresh | Primary RSS | 874 MB | 884 MB | 886 MB |
| fresh-install | fresh | Gateway RSS | 874 MB | 884 MB | 886 MB |
| fresh-install | fresh | Max CPU | 54.4 % | 123 % | 131 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 10,132 ms | 10,543 ms | 10,589 ms |
| fresh-install | onboarded-user | TCP Listening | 10,062 ms | 10,508 ms | 10,557 ms |
| fresh-install | onboarded-user | Health p95 | 88 ms | 96.1 ms | 97 ms |
| fresh-install | onboarded-user | Primary RSS | 811 MB | 876 MB | 883 MB |
| fresh-install | onboarded-user | Gateway RSS | 811 MB | 876 MB | 883 MB |
| fresh-install | onboarded-user | Max CPU | 100 % | 100 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 7,815 ms | 9,217 ms | 9,373 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 7,789 ms | 9,144 ms | 9,295 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 74 ms | 86.6 ms | 88 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 869 MB | 873 MB | 874 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 869 MB | 873 MB | 874 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 77.7 % | 97.8 % | 100 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 9,939 ms | 11,094 ms | 11,222 ms |
| bundled-plugin-startup | fresh | TCP Listening | 9,788 ms | 11,079 ms | 11,222 ms |
| bundled-plugin-startup | fresh | Health p95 | 19 ms | 51.4 ms | 55 ms |
| bundled-plugin-startup | fresh | Primary RSS | 901 MB | 976 MB | 984 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 901 MB | 976 MB | 984 MB |
| bundled-plugin-startup | fresh | Max CPU | 52.1 % | 77.2 % | 80 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 741 MB | 752 MB | 753 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 139 % | 140 % | 140 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,497 ms | 2,505 ms | 2,505 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,471 ms | 2,503 ms | 2,507 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,476 ms | 2,497 ms | 2,499 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,404 ms | 2,408 ms | 2,409 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 8,054 ms | 8,255 ms | 8,277 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 8,022 ms | 8,250 ms | 8,275 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 31 ms | 55.3 ms | 58 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 876 MB | 881 MB | 882 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 876 MB | 881 MB | 882 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 75 % | 110 % | 114 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 984 | <= 950 |

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
- Tested ref: 58de4dcdf14a364f1532060c589d61d96abaed0c
- Tested SHA: 58de4dcdf14a364f1532060c589d61d96abaed0c
- Workflow ref: main
- Workflow SHA: fbc73ca1b7cddd40849917f5033322100d614b5d
- Kova repository: openclaw/Kova
- Kova ref: 6a1c20bf818f71f93d6d4cad7dabac74a2996bc0
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message
