# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260712-092210-d004b4
- Generated: 2026-07-12T09:27:45.772Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 15, BLOCKED: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 688 MB | 751 MB | 758 MB |
| fresh-install | fresh | Gateway RSS | 688 MB | 751 MB | 758 MB |
| fresh-install | fresh | Max CPU | 128 % | 135 % | 136 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 752 MB | 766 MB | 767 MB |
| fresh-install | onboarded-user | Gateway RSS | 752 MB | 766 MB | 767 MB |
| fresh-install | onboarded-user | Max CPU | 132 % | 132 % | 132 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 757 MB | 759 MB | 759 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 757 MB | 759 MB | 759 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 132 % | 163 % | 166 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 758 MB | 762 MB | 763 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 758 MB | 762 MB | 763 MB |
| bundled-plugin-startup | fresh | Max CPU | 118 % | 133 % | 135 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 716 MB | 746 MB | 750 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 140 % | 143 % | 143 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,709 ms | 2,748 ms | 2,752 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,609 ms | 2,703 ms | 2,713 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,624 ms | 2,746 ms | 2,760 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,584 ms | 2,650 ms | 2,658 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 760 MB | 763 MB | 763 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 760 MB | 763 MB | 763 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 131 % | 134 % | 134 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | cleanupMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | cleanupMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | cleanupMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | cleanupMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | cleanupMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | cleanupMs | null | finite non-negative turn measurement |

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
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 59507712e783d7a83530154f7b43665976b2f026
- Tested SHA: 59507712e783d7a83530154f7b43665976b2f026
- Workflow ref: main
- Workflow SHA: de4d4079ad25c6de015877f39d38b85b3ab42175
- Kova repository: openclaw/Kova
- Kova ref: 4dde6b6022d94058abced883343de7ee8ce69917
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8258462714](https://github.com/openclaw/openclaw/actions/runs/29187306844/artifacts/8258462714); its checksum is published under the bundles directory.
