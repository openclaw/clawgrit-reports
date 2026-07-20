# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260720-190039-c996aa
- Generated: 2026-07-20T19:08:31.967Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 814 MB | 836 MB | 839 MB |
| fresh-install | fresh | Gateway RSS | 814 MB | 836 MB | 839 MB |
| fresh-install | fresh | Max CPU | 101 % | 135 % | 139 % |
| fresh-install | fresh | Event Loop Max | 594 ms | 697 ms | 709 ms |
| fresh-install | onboarded-user | Primary RSS | 814 MB | 818 MB | 818 MB |
| fresh-install | onboarded-user | Gateway RSS | 814 MB | 818 MB | 818 MB |
| fresh-install | onboarded-user | Max CPU | 137 % | 149 % | 150 % |
| fresh-install | onboarded-user | Event Loop Max | 486 ms | 657 ms | 676 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 830 MB | 838 MB | 838 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 830 MB | 838 MB | 838 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 141 % | 145 % | 145 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 485 ms | 506 ms | 509 ms |
| bundled-plugin-startup | fresh | Primary RSS | 809 MB | 812 MB | 812 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 809 MB | 812 MB | 812 MB |
| bundled-plugin-startup | fresh | Max CPU | 149 % | 149 % | 149 % |
| bundled-plugin-startup | fresh | Event Loop Max | 549 ms | 577 ms | 580 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 843 MB | 846 MB | 846 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 160 % | 163 % | 163 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,396 ms | 3,959 ms | 4,022 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,306 ms | 3,967 ms | 4,040 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,403 ms | 3,643 ms | 3,670 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,163 ms | 3,739 ms | 3,803 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 837 MB | 844 MB | 845 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 837 MB | 844 MB | 845 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 146 % | 148 % | 148 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 526 ms | 599 ms | 607 ms |

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
- Tested ref: c3501f4befbf1a440519365e8470ac0b7adc24fe
- Tested SHA: c3501f4befbf1a440519365e8470ac0b7adc24fe
- Workflow ref: main
- Workflow SHA: cadad3b7bd12f8caee09924b1c7bb35fc27d19b8
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

The complete Kova bundle remains in [Actions artifact 8472631624](https://github.com/openclaw/openclaw/actions/runs/29770112838/artifacts/8472631624); its checksum is published under the bundles directory.
