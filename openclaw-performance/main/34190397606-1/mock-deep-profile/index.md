# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260908-052444-07c7ae
- Generated: 2026-09-08T05:26:47.008Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 610 MB | 610 MB | 610 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 610 MB | 610 MB | 610 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 993 % | 993 % | 993 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.3 ms | 10.3 ms | 10.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 760 MB | 760 MB | 760 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 292 % | 292 % | 292 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,495 ms | 4,495 ms | 4,495 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,507 ms | 4,507 ms | 4,507 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,268 ms | 4,268 ms | 4,268 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,031 ms | 4,031 ms | 4,031 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":128.5,"upper":992.8} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.command-tree.maxCpuPercent | {"lower":152,"upper":496.4} | <= 450 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":128.5,"upper":992.8} | <= 300 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: bd49ac0b6c43ac0693f0bf8f6ba96d4deb333536
- Workflow ref: main
- Workflow SHA: bd49ac0b6c43ac0693f0bf8f6ba96d4deb333536
- Kova repository: openclaw/Kova
- Kova ref: 065d2ffd535f12fd0f3a15c412a08a456f580260
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10042076200](https://github.com/openclaw/openclaw/actions/runs/34190397606/artifacts/10042076200); its checksum is published under the bundles directory.
