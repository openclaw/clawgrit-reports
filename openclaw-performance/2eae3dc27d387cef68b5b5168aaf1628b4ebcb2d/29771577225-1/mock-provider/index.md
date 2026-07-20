# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260720-192149-968e14
- Generated: 2026-07-20T19:28:58.470Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 817 MB | 841 MB | 844 MB |
| fresh-install | fresh | Gateway RSS | 817 MB | 841 MB | 844 MB |
| fresh-install | fresh | Max CPU | 141 % | 151 % | 152 % |
| fresh-install | fresh | Event Loop Max | 495 ms | 513 ms | 515 ms |
| fresh-install | onboarded-user | Primary RSS | 817 MB | 832 MB | 834 MB |
| fresh-install | onboarded-user | Gateway RSS | 817 MB | 832 MB | 834 MB |
| fresh-install | onboarded-user | Max CPU | 135 % | 136 % | 136 % |
| fresh-install | onboarded-user | Event Loop Max | 535 ms | 542 ms | 543 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 791 MB | 804 MB | 806 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 791 MB | 804 MB | 806 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 149 % | 152 % | 152 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 545 ms | 604 ms | 611 ms |
| bundled-plugin-startup | fresh | Primary RSS | 838 MB | 838 MB | 838 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 838 MB | 838 MB | 838 MB |
| bundled-plugin-startup | fresh | Max CPU | 152 % | 153 % | 153 % |
| bundled-plugin-startup | fresh | Event Loop Max | 685 ms | 736 ms | 741 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 851 MB | 883 MB | 887 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 160 % | 161 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,128 ms | 4,412 ms | 4,444 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,135 ms | 4,417 ms | 4,448 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,034 ms | 4,332 ms | 4,365 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,880 ms | 4,143 ms | 4,173 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 817 MB | 829 MB | 831 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 817 MB | 829 MB | 831 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 149 % | 152 % | 152 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 633 ms | 658 ms | 661 ms |

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
- Tested ref: 2eae3dc27d387cef68b5b5168aaf1628b4ebcb2d
- Tested SHA: 2eae3dc27d387cef68b5b5168aaf1628b4ebcb2d
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

The complete Kova bundle remains in [Actions artifact 8473179028](https://github.com/openclaw/openclaw/actions/runs/29771577225/artifacts/8473179028); its checksum is published under the bundles directory.
