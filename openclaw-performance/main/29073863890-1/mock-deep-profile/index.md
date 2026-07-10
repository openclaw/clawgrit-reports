# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-2026-07-10T062750Z
- Generated: 2026-07-10T06:30:55.539Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Health Ready | 10,020 ms | 10,020 ms | 10,020 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 9,192 ms | 9,192 ms | 9,192 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 924 ms | 924 ms | 924 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 696 MB | 696 MB | 696 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 696 MB | 696 MB | 696 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 131 % | 131 % | 131 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 928 MB | 928 MB | 928 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 149 % | 149 % | 149 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,205 ms | 4,205 ms | 4,205 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,209 ms | 4,209 ms | 4,209 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,123 ms | 4,123 ms | 4,123 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,638 ms | 3,638 ms | 3,638 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.plugin-cli.peakRssMb | 816 | <= 800 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 928 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 928 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 928 | <= 900 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 20bc552590b2e1f31b8dd8534446011661d009d2
- Workflow ref: main
- Workflow SHA: 20bc552590b2e1f31b8dd8534446011661d009d2
- Kova repository: openclaw/Kova
- Kova ref: a2dd84e7d65507e614afaff850d3932d18c859b6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message
