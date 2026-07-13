# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260713-233736-0f3350
- Generated: 2026-07-13T23:45:01.323Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 7, PASS: 11
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 836 MB | 840 MB | 841 MB |
| fresh-install | fresh | Gateway RSS | 836 MB | 840 MB | 841 MB |
| fresh-install | fresh | Max CPU | 158 % | 159 % | 159 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 835 MB | 835 MB | 835 MB |
| fresh-install | onboarded-user | Gateway RSS | 835 MB | 835 MB | 835 MB |
| fresh-install | onboarded-user | Max CPU | 160 % | 160 % | 160 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 823 MB | 828 MB | 828 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 823 MB | 828 MB | 828 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 158 % | 163 % | 163 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 9.8 ms | 10.9 ms | 11 ms |
| bundled-plugin-startup | fresh | Primary RSS | 834 MB | 840 MB | 841 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 834 MB | 840 MB | 841 MB |
| bundled-plugin-startup | fresh | Max CPU | 162 % | 166 % | 166 % |
| bundled-plugin-startup | fresh | Event Loop Max | 9.2 ms | 11.2 ms | 11.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 921 MB | 925 MB | 926 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 169 % | 174 % | 174 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,874 ms | 4,290 ms | 4,336 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,879 ms | 3,979 ms | 3,990 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,851 ms | 4,304 ms | 4,354 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,702 ms | 4,125 ms | 4,172 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 833 MB | 833 MB | 834 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 833 MB | 833 MB | 834 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 142 % | 158 % | 160 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 849 | <= 800 |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 844 | <= 800 |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 825 | <= 800 |
| fresh-install | onboarded-user | resourceByRole.plugin-cli.peakRssMb | 825 | <= 800 |
| bundled-plugin-startup | fresh | resourceByRole.plugin-cli.peakRssMb | 817 | <= 800 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 926 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 926 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 926 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 921 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 921 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 921 | <= 900 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 46c2706c01ea8c634a082d4caca8f3aa96ae17e5
- Tested SHA: 46c2706c01ea8c634a082d4caca8f3aa96ae17e5
- Workflow ref: release/2026.7.2
- Workflow SHA: 46c2706c01ea8c634a082d4caca8f3aa96ae17e5
- Kova repository: openclaw/Kova
- Kova ref: 2b02b7d33418db0c6952c4cf8fe8a608e7964859
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8296043342](https://github.com/openclaw/openclaw/actions/runs/29293551461/artifacts/8296043342); its checksum is published under the bundles directory.
