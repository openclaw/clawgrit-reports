# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-080412-790657
- Generated: 2026-07-26T08:11:57.614Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 906 MB | 957 MB | 963 MB |
| fresh-install | fresh | Gateway RSS | 906 MB | 957 MB | 963 MB |
| fresh-install | fresh | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 11.3 ms | 11.7 ms | 11.7 ms |
| fresh-install | onboarded-user | Primary RSS | 905 MB | 906 MB | 906 MB |
| fresh-install | onboarded-user | Gateway RSS | 905 MB | 906 MB | 906 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 155 % | 155 % |
| fresh-install | onboarded-user | Event Loop Max | 15.3 ms | 16.1 ms | 16.2 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 988 MB | 991 MB | 991 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 988 MB | 991 MB | 991 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 14.9 ms | 17.9 ms | 18.2 ms |
| bundled-plugin-startup | fresh | Primary RSS | 952 MB | 976 MB | 978 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 952 MB | 976 MB | 978 MB |
| bundled-plugin-startup | fresh | Max CPU | 155 % | 155 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 19.2 ms | 20.6 ms | 20.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 890 MB | 936 MB | 941 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,730 ms | 4,756 ms | 4,759 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,703 ms | 4,729 ms | 4,732 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,730 ms | 4,759 ms | 4,762 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,234 ms | 4,253 ms | 4,255 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 951 MB | 953 MB | 953 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 951 MB | 953 MB | 953 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 17.3 ms | 18.8 ms | 18.9 ms |

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
- Tested ref: d3764f44948869d048adc5581c849b6b5e807f04
- Tested SHA: d3764f44948869d048adc5581c849b6b5e807f04
- Workflow ref: main
- Workflow SHA: 0c8f070c92a8bbc3a9d967415a9d031ee1212e69
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8629567054](https://github.com/openclaw/openclaw/actions/runs/30193903158/artifacts/8629567054); its checksum is published under the bundles directory.
