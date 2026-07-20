# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260720-061833-e92c9f
- Generated: 2026-07-20T06:19:35.467Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 2,361 MB | 2,361 MB | 2,361 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 170 % | 170 % | 170 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 16,107 ms | 16,107 ms | 16,107 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 16,107 ms | 16,107 ms | 16,107 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 2,361 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 2,361 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 2,361 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 2,361 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | missingDependencyErrors | 2 | <= 0 |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | providerFinalMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | null | finite non-negative turn measurement |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 401ef9770e2554b577ab86beabd49503babb414e
- Workflow ref: main
- Workflow SHA: 401ef9770e2554b577ab86beabd49503babb414e
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8452473771](https://github.com/openclaw/openclaw/actions/runs/29721260869/artifacts/8452473771); its checksum is published under the bundles directory.
