# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T021802Z
- Generated: 2026-07-10T02:25:32.782Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 7,874 ms | 13,456 ms | 14,076 ms |
| fresh-install | fresh | TCP Listening | 7,782 ms | 13,415 ms | 14,041 ms |
| fresh-install | fresh | Health p95 | 19 ms | 40.6 ms | 43 ms |
| fresh-install | fresh | Primary RSS | 835 MB | 869 MB | 873 MB |
| fresh-install | fresh | Gateway RSS | 835 MB | 869 MB | 873 MB |
| fresh-install | fresh | Max CPU | 51.9 % | 116 % | 123 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 7,069 ms | 7,589 ms | 7,647 ms |
| fresh-install | onboarded-user | TCP Listening | 7,035 ms | 7,482 ms | 7,532 ms |
| fresh-install | onboarded-user | Health p95 | 40 ms | 48.1 ms | 49 ms |
| fresh-install | onboarded-user | Primary RSS | 820 MB | 869 MB | 875 MB |
| fresh-install | onboarded-user | Gateway RSS | 820 MB | 869 MB | 875 MB |
| fresh-install | onboarded-user | Max CPU | 62.4 % | 96.2 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 8,398 ms | 8,577 ms | 8,597 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 8,282 ms | 8,503 ms | 8,527 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 43 ms | 60.1 ms | 62 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 862 MB | 893 MB | 897 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 862 MB | 893 MB | 897 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 100 % | 100 % | 100 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 9,177 ms | 9,264 ms | 9,274 ms |
| bundled-plugin-startup | fresh | TCP Listening | 9,044 ms | 9,249 ms | 9,272 ms |
| bundled-plugin-startup | fresh | Health p95 | 13 ms | 28.3 ms | 30 ms |
| bundled-plugin-startup | fresh | Primary RSS | 862 MB | 896 MB | 900 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 862 MB | 896 MB | 900 MB |
| bundled-plugin-startup | fresh | Max CPU | 47.9 % | 57 % | 58 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 763 MB | 775 MB | 777 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 139 % | 141 % | 141 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,479 ms | 2,510 ms | 2,513 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,450 ms | 2,511 ms | 2,518 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,445 ms | 2,479 ms | 2,483 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,381 ms | 2,408 ms | 2,411 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 8,605 ms | 9,714 ms | 9,837 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 8,524 ms | 9,653 ms | 9,778 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 45 ms | 45 ms | 45 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 859 MB | 877 MB | 879 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 859 MB | 877 MB | 879 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 100 % | 109 % | 110 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | onboarded-user | providerTimeoutMentions | 1 | <= 0 |

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
- Tested ref: 58de4dcdf14a364f1532060c589d61d96abaed0c
- Tested SHA: 58de4dcdf14a364f1532060c589d61d96abaed0c
- Workflow ref: main
- Workflow SHA: 6b90610cdb985e7413d43efd9ea64c7c4fd5ad89
- Kova repository: openclaw/Kova
- Kova ref: 6a1c20bf818f71f93d6d4cad7dabac74a2996bc0
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message
