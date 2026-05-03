# Kova OpenClaw Runtime Report

Generated: 2026-05-03T06:13:08.100Z
Run ID: `kova-2026-05-03T061222Z`
Mode: execution
Platform: linux 6.5.13 (x64) · v24.13.0

## Summary

- Total scenarios: 3
- BLOCKED: 3

## Failure Cards

- BLOCKED agent-cold-warm-message/mock-openai-provider: peak RSS 2585.7 MB exceeded threshold 900 MB
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-1777788742151' --repo '/home/runner/_work/openclaw/...`
  - evidence: peakRssMb: 2585.7
  - evidence: cpuPercentMax: 365.6
  - evidence: build-tooling: 2585.7MB RSS, 365.6% CPU
  - evidence: command-tree: 2585.7MB RSS, 365.6% CPU
- BLOCKED agent-cold-warm-message/mock-openai-provider: peak RSS 2521.8 MB exceeded threshold 900 MB
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-1777788742151' --repo '/home/runner/_work/openclaw/...`
  - evidence: peakRssMb: 2521.8
  - evidence: cpuPercentMax: 350.7
  - evidence: build-tooling: 2521.8MB RSS, 350.7% CPU
  - evidence: command-tree: 2521.8MB RSS, 350.7% CPU
- BLOCKED agent-cold-warm-message/mock-openai-provider: peak RSS 2076.7 MB exceeded threshold 900 MB
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-1777788742151' --repo '/home/runner/_work/openclaw/...`
  - evidence: peakRssMb: 2076.7
  - evidence: cpuPercentMax: 367.7
  - evidence: build-tooling: 2076.7MB RSS, 367.7% CPU
  - evidence: command-tree: 2076.7MB RSS, 367.7% CPU

## Performance

- Repeat: 3
- Groups: 1
- Unstable groups: 0
- Profiled runs: 0
- agent-cold-warm-message/mock-openai-provider: 3 sample(s); peakRssMb median 2521.8MB p95 2579.31MB max 2585.7MB; cpuPercentMax median 365.6% p95 367.49% max 367.7%; resourcePeakGatewayRssMb median 0MB p95 0MB max 0MB

## Resource Roles

- build-tooling: RSS 2585.7 MB; CPU 367.7%; scenario agent-cold-warm-message/mock-openai-provider
- command-tree: RSS 2585.7 MB; CPU 367.7%; scenario agent-cold-warm-message/mock-openai-provider
- runtime-management: RSS 2585.7 MB; CPU 367.7%; scenario agent-cold-warm-message/mock-openai-provider
- runtime-staging: RSS 1259.9 MB; CPU 154%; scenario agent-cold-warm-message/mock-openai-provider
- browser-sidecar: RSS 546.6 MB; CPU 139%; scenario agent-cold-warm-message/mock-openai-provider
- package-manager: RSS 361.6 MB; CPU 139.5%; scenario agent-cold-warm-message/mock-openai-provider
- plugin-cli: RSS 176.5 MB; CPU 133%; scenario agent-cold-warm-message/mock-openai-provider
- uncategorized: RSS 0 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider

## Target Cleanup

- Runtime: `kova-local-1777788742151`
- Result: already-absent
- Command: `ocm runtime remove 'kova-local-1777788742151' --json`
- Reason: target runtime was not present when cleanup ran
- Exit: 1
- Duration: 1ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: BLOCKED
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t061222z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 2585.7 MB
- Max CPU: 365.6%
- Resource samples: 29
- Command tree peak RSS: 2585.7 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - build-tooling: RSS 2585.7 MB; CPU 365.6%
  - command-tree: RSS 2585.7 MB; CPU 365.6%
  - runtime-management: RSS 2585.7 MB; CPU 365.6%
  - runtime-staging: RSS 1259.9 MB; CPU 154%
  - browser-sidecar: RSS 546.6 MB; CPU 98%
  - package-manager: RSS 296.4 MB; CPU 108.4%
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
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 2152ms; RSS at 3113ms
- Diagnostic correlation:
  - CPU peaked at 365.6% around 2152ms
  - RSS peaked at 2585.7 MB around 3113ms
- Top CPU process: pid 4279 319% build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean
- Top RSS process: pid 4279 2065 MB build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean

### Violations

- peak RSS 2585.7 MB exceeded threshold 900 MB
- command-tree peak RSS 2585.7 MB exceeded threshold 1400 MB
- runtime-staging peak RSS 1259.9 MB exceeded threshold 900 MB
- OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1777788742151' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1777788742151' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 1
  - duration: 25763ms
  - resource samples: 27
  - peak sampled RSS: 2585.7 MB
  - max sampled CPU: 365.6%
  - role peaks: 
  - top CPU: pid 4279 319% build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t061222z/resource-samples/target-setup-1.jsonl
  - stderr:

  ```text
  ocm: failed to pack local OpenClaw build: [build-all] canvas:a2ui:bundle
  [build-all] tsdown
  [build-all] check-cli-bootstrap-imports
  [build-all] runtime-postbuild
  runtime-postbuild: plugin SDK root alias completed in 0ms
  runtime-postbuild: bundled plugin metadata completed in 58ms
  runtime-postbuild: official channel catalog completed in 1ms
  runtime-postbuild: bundled plugin runtime overlay completed in 38ms
  runtime-postbuild: stable root runtime aliases completed in 5ms
  runtime-postbuild: legacy CLI exit compat chunks completed in 0ms
  runtime-postbuild: static extension assets completed in 6ms
  [build-all] build-stamp
  Run "ocm help" for usage.
  ```


#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t061222z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t061222z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t061222z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t061222z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 7616 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t061222z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t061222z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

### Cleanup

- already-absent
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t061222z' --yes`
- cleanup status: 1
- cleanup duration: 2ms

Cleanup stderr:

  ```text
  ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t061222z" does not exist
  Run "ocm help" for usage.
  ```

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: BLOCKED
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t061222z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 2521.8 MB
- Max CPU: 350.7%
- Resource samples: 13
- Command tree peak RSS: 2521.8 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - build-tooling: RSS 2521.8 MB; CPU 350.7%
  - command-tree: RSS 2521.8 MB; CPU 350.7%
  - runtime-management: RSS 2521.8 MB; CPU 350.7%
  - runtime-staging: RSS 521.8 MB; CPU 146%
  - browser-sidecar: RSS 459.3 MB; CPU 139%
  - package-manager: RSS 327.8 MB; CPU 130.8%
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
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1115ms; RSS at 3108ms
- Diagnostic correlation:
  - CPU peaked at 350.7% around 1115ms
  - RSS peaked at 2521.8 MB around 3108ms
- Top CPU process: pid 8054 291% build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean
- Top RSS process: pid 8054 2025.3 MB build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean

### Violations

- peak RSS 2521.8 MB exceeded threshold 900 MB
- command-tree peak RSS 2521.8 MB exceeded threshold 1400 MB
- OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1777788742151' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1777788742151' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 1
  - duration: 9863ms
  - resource samples: 11
  - peak sampled RSS: 2521.8 MB
  - max sampled CPU: 350.7%
  - role peaks: 
  - top CPU: pid 8054 291% build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t061222z/resource-samples/target-setup-1.jsonl
  - stderr:

  ```text
  ocm: failed to pack local OpenClaw build: [build-all] canvas:a2ui:bundle
  [build-all] tsdown
  [build-all] check-cli-bootstrap-imports
  [build-all] runtime-postbuild
  runtime-postbuild: plugin SDK root alias completed in 0ms
  runtime-postbuild: bundled plugin metadata completed in 60ms
  runtime-postbuild: official channel catalog completed in 1ms
  runtime-postbuild: bundled plugin runtime overlay completed in 39ms
  runtime-postbuild: stable root runtime aliases completed in 5ms
  runtime-postbuild: legacy CLI exit compat chunks completed in 0ms
  runtime-postbuild: static extension assets completed in 6ms
  [build-all] build-stamp
  Run "ocm help" for usage.
  ```


#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t061222z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t061222z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t061222z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t061222z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 9428 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t061222z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t061222z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

### Cleanup

- already-absent
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t061222z' --yes`
- cleanup status: 1
- cleanup duration: 1ms

Cleanup stderr:

  ```text
  ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t061222z" does not exist
  Run "ocm help" for usage.
  ```

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: BLOCKED
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t061222z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 2076.7 MB
- Max CPU: 367.7%
- Resource samples: 13
- Command tree peak RSS: 2076.7 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - build-tooling: RSS 2076.7 MB; CPU 367.7%
  - command-tree: RSS 2076.7 MB; CPU 367.7%
  - runtime-management: RSS 2076.7 MB; CPU 367.7%
  - runtime-staging: RSS 551.2 MB; CPU 144%
  - browser-sidecar: RSS 486 MB; CPU 135%
  - package-manager: RSS 361.6 MB; CPU 139.5%
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
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1162ms; RSS at 2257ms
- Diagnostic correlation:
  - CPU peaked at 367.7% around 1162ms
  - RSS peaked at 2076.7 MB around 2257ms
- Top CPU process: pid 9866 303% build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean
- Top RSS process: pid 9866 1572.4 MB build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean

### Violations

- peak RSS 2076.7 MB exceeded threshold 900 MB
- command-tree peak RSS 2076.7 MB exceeded threshold 1400 MB
- OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1777788742151' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1777788742151' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 1
  - duration: 9822ms
  - resource samples: 11
  - peak sampled RSS: 2076.7 MB
  - max sampled CPU: 367.7%
  - role peaks: 
  - top CPU: pid 9866 303% build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t061222z/resource-samples/target-setup-1.jsonl
  - stderr:

  ```text
  ocm: failed to pack local OpenClaw build: [build-all] canvas:a2ui:bundle
  [build-all] tsdown
  [build-all] check-cli-bootstrap-imports
  [build-all] runtime-postbuild
  runtime-postbuild: plugin SDK root alias completed in 0ms
  runtime-postbuild: bundled plugin metadata completed in 58ms
  runtime-postbuild: official channel catalog completed in 1ms
  runtime-postbuild: bundled plugin runtime overlay completed in 37ms
  runtime-postbuild: stable root runtime aliases completed in 5ms
  runtime-postbuild: legacy CLI exit compat chunks completed in 0ms
  runtime-postbuild: static extension assets completed in 6ms
  [build-all] build-stamp
  Run "ocm help" for usage.
  ```


#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t061222z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t061222z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t061222z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t061222z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 49ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 11237 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T061222Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t061222z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t061222z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

### Cleanup

- already-absent
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t061222z' --yes`
- cleanup status: 1
- cleanup duration: 1ms

Cleanup stderr:

  ```text
  ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t061222z" does not exist
  Run "ocm help" for usage.
  ```

