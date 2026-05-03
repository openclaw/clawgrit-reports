# Kova OpenClaw Runtime Report

Generated: 2026-05-03T06:12:50.768Z
Run ID: `kova-2026-05-03T061214Z`
Mode: execution
Platform: linux 6.5.13 (x64) · v24.13.0

## Summary

- Total scenarios: 1
- BLOCKED: 1

## Failure Cards

- BLOCKED agent-cold-warm-message/mock-openai-provider: peak RSS 2541.1 MB exceeded threshold 900 MB
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-1777788734744' --repo '/home/runner/_work/openclaw/...`
  - evidence: peakRssMb: 2541.1
  - evidence: cpuPercentMax: 364.4
  - evidence: build-tooling: 2541.1MB RSS, 364.4% CPU
  - evidence: command-tree: 2541.1MB RSS, 364.4% CPU

## Performance

- Repeat: 1
- Groups: 1
- Unstable groups: 0
- Profiled runs: 1
- agent-cold-warm-message/mock-openai-provider: 1 sample(s); instrumented resources; peakRssMb median 2541.1MB p95 2541.1MB max 2541.1MB; cpuPercentMax median 364.4% p95 364.4% max 364.4%; resourcePeakGatewayRssMb median 0MB p95 0MB max 0MB

## Resource Roles

- build-tooling: RSS 2541.1 MB; CPU 364.4%; scenario agent-cold-warm-message/mock-openai-provider
- command-tree: RSS 2541.1 MB; CPU 364.4%; scenario agent-cold-warm-message/mock-openai-provider
- runtime-management: RSS 2541.1 MB; CPU 364.4%; scenario agent-cold-warm-message/mock-openai-provider
- runtime-staging: RSS 1262.1 MB; CPU 156.4%; scenario agent-cold-warm-message/mock-openai-provider
- browser-sidecar: RSS 571.6 MB; CPU 143%; scenario agent-cold-warm-message/mock-openai-provider
- package-manager: RSS 504.7 MB; CPU 207%; scenario agent-cold-warm-message/mock-openai-provider
- plugin-cli: RSS 317.1 MB; CPU 147%; scenario agent-cold-warm-message/mock-openai-provider
- uncategorized: RSS 0 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider

## Target Cleanup

- Runtime: `kova-local-1777788734744`
- Result: already-absent
- Command: `ocm runtime remove 'kova-local-1777788734744' --json`
- Reason: target runtime was not present when cleanup ran
- Exit: 1
- Duration: 2ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: BLOCKED
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-03t061214z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 2541.1 MB
- Max CPU: 364.4%
- Resource samples: 145
- Command tree peak RSS: 2541.1 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - build-tooling: RSS 2541.1 MB; CPU 364.4%
  - command-tree: RSS 2541.1 MB; CPU 364.4%
  - runtime-management: RSS 2541.1 MB; CPU 364.4%
  - runtime-staging: RSS 1262.1 MB; CPU 156.4%
  - browser-sidecar: RSS 571.6 MB; CPU 143%
  - package-manager: RSS 504.7 MB; CPU 207%
- Cold ready: unknown ms
- Warm ready: unknown ms
- Time to listening: unknown ms
- Time to health ready: unknown ms
- Readiness classification: unknown
- TCP connect max: unknown ms
- Missing dependency errors: 0
- Final gateway state: unknown
- Health failures: 0
- Health p95: unknown ms
- Readiness failures: 0
- Gateway restarts: 0
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: unavailable (0 events, 0 parse errors)
- Slowest OpenClaw span: unknown unknown ms
- Open OpenClaw spans: 0 (0 required)
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs unknown; warm restages unknown; warm max unknown ms)
- Provider/model timing: unknown ms
- Agent turn: unknown ms (not-run)
- Agent containment: process leaks 0; gateway healthy n/a; status works n/a
- Profiling: enabled (instrumented run; CPU/RSS can include profiler and diagnostic overhead)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 2545ms; RSS at 3996ms
- Diagnostic correlation:
  - CPU peaked at 364.4% around 2545ms
  - RSS peaked at 2541.1 MB around 3996ms
- Top CPU process: pid 4772 315% build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean
- Top RSS process: pid 4772 2021.4 MB build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean

### Violations

- peak RSS 2541.1 MB exceeded threshold 900 MB
- command-tree peak RSS 2541.1 MB exceeded threshold 1400 MB
- runtime-staging peak RSS 1262.1 MB exceeded threshold 900 MB
- OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1777788734744' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1777788734744' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 1
  - duration: 35764ms
  - resource samples: 143
  - peak sampled RSS: 2541.1 MB
  - max sampled CPU: 364.4%
  - role peaks: 
  - top CPU: pid 4772 315% build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-03T061214Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-03t061214z/resource-samples/target-setup-1.jsonl
  - stderr:

  ```text
  ocm: failed to pack local OpenClaw build: [build-all] canvas:a2ui:bundle
  [build-all] tsdown
  [build-all] check-cli-bootstrap-imports
  [build-all] runtime-postbuild
  runtime-postbuild: plugin SDK root alias completed in 0ms
  runtime-postbuild: bundled plugin metadata completed in 66ms
  runtime-postbuild: official channel catalog completed in 2ms
  runtime-postbuild: bundled plugin runtime overlay completed in 47ms
  runtime-postbuild: stable root runtime aliases completed in 6ms
  runtime-postbuild: legacy CLI exit compat chunks completed in 0ms
  runtime-postbuild: static extension assets completed in 12ms
  [build-all] build-stamp
  Run "ocm help" for usage.
  ```


#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-03T061214Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-03t061214z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-03T061214Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-03t061214z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-03T061214Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-03t061214z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-03T061214Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-03t061214z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 73ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 21107 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-03T061214Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-03t061214z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-03t061214z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

### Cleanup

- already-absent
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-03t061214z' --yes`
- cleanup status: 1
- cleanup duration: 3ms

Cleanup stderr:

  ```text
  ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-03t061214z" does not exist
  Run "ocm help" for usage.
  ```

