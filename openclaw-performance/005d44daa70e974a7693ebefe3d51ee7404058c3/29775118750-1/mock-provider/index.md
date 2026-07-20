# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260720-201325-2381df
- Generated: 2026-07-20T20:21:03.453Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 809 MB | 829 MB | 831 MB |
| fresh-install | fresh | Gateway RSS | 809 MB | 829 MB | 831 MB |
| fresh-install | fresh | Max CPU | 142 % | 149 % | 150 % |
| fresh-install | fresh | Event Loop Max | 604 ms | 669 ms | 676 ms |
| fresh-install | onboarded-user | Primary RSS | 818 MB | 828 MB | 829 MB |
| fresh-install | onboarded-user | Gateway RSS | 818 MB | 828 MB | 829 MB |
| fresh-install | onboarded-user | Max CPU | 148 % | 149 % | 149 % |
| fresh-install | onboarded-user | Event Loop Max | 576 ms | 732 ms | 749 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 811 MB | 813 MB | 814 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 811 MB | 813 MB | 814 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 145 % | 146 % | 146 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 612 ms | 627 ms | 628 ms |
| bundled-plugin-startup | fresh | Primary RSS | 817 MB | 834 MB | 836 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 817 MB | 834 MB | 836 MB |
| bundled-plugin-startup | fresh | Max CPU | 145 % | 154 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 645 ms | 767 ms | 780 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 881 MB | 899 MB | 901 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 169 % | 174 % | 175 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,216 ms | 5,320 ms | 5,331 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,234 ms | 5,352 ms | 5,365 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,763 ms | 4,855 ms | 4,865 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,782 ms | 4,934 ms | 4,951 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 814 MB | 817 MB | 817 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 814 MB | 817 MB | 817 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 710 ms | 788 ms | 797 ms |

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
- Tested ref: 005d44daa70e974a7693ebefe3d51ee7404058c3
- Tested SHA: 005d44daa70e974a7693ebefe3d51ee7404058c3
- Workflow ref: main
- Workflow SHA: a52eb2134b25935955aca086e334573807c5129d
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

The complete Kova bundle remains in [Actions artifact 8474552403](https://github.com/openclaw/openclaw/actions/runs/29775118750/artifacts/8474552403); its checksum is published under the bundles directory.
