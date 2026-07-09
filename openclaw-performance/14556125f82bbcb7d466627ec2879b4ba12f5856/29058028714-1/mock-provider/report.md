# Kova OpenClaw Runtime Report

Generated: 2026-07-09T23:49:29.296Z
Run ID: `kova-2026-07-09T234224Z`
Mode: execution
Platform: linux 6.6.141 (x64) · v24.13.0

## Release Decision

- Verdict: DO_NOT_SHIP
- Coverage: partial
- Blocking / warnings / info: 2 / 26 / 64
- Markdown report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-2026-07-09T234224Z-release.md
- JSON report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-2026-07-09T234224Z-release.json
- Retained gate artifacts: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/release-gates/kova-2026-07-09t234224z

Top findings:
- WARNING gate: Required release gate surface coverage failure-containment was not present in the report.
- WARNING gate: Required release gate surface coverage soak was not present in the report.
- WARNING gate: Required release gate surface coverage workspace-scan was not present in the report.

This is a filtered gate slice. It can reject a release from selected-scenario failures, but it cannot approve the full release gate.

## Summary

- Total scenarios: 18
- PASS: 16
- FAIL: 2

## Release Gate

- Verdict: DO_NOT_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 64
- Blocking: 2
- Warnings: 26
- Info: 64

### Subsystems

- OpenClaw: 2 blocking, 0 warning
  - primary: 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 134ms
- Kova: 0 blocking, 26 warning
  - primary: Required release gate surface coverage failure-containment was not present in the report.

### Fixer Briefs

- OpenClaw: 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 134ms
- Kova: Required release gate surface coverage failure-containment was not present in the report.

### Failure Cards

- WARNING gate: Required release gate surface coverage failure-containment was not present in the report.
  - expected: surface coverage failure-containment
  - actual: 5 surface(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate surface coverage soak was not present in the report.
  - expected: surface coverage soak
  - actual: 5 surface(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate surface coverage workspace-scan was not present in the report.
  - expected: surface coverage workspace-scan
  - actual: 5 surface(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate surface coverage mcp-runtime was not present in the report.
  - expected: surface coverage mcp-runtime
  - actual: 5 surface(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate surface coverage browser-automation was not present in the report.
  - expected: surface coverage browser-automation
  - actual: 5 surface(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate surface coverage media-understanding was not present in the report.
  - expected: surface coverage media-understanding
  - actual: 5 surface(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate surface coverage network-offline was not present in the report.
  - expected: surface coverage network-offline
  - actual: 5 surface(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate surface coverage cross-platform-smoke was not present in the report.
  - expected: surface coverage cross-platform-smoke
  - actual: 5 surface(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate platform coverage linux-arm64 was not present in the report.
  - expected: platform coverage linux-arm64
  - actual: linux/x64
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate platform coverage wsl2 was not present in the report.
  - expected: platform coverage wsl2
  - actual: linux/x64
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING workspace-scan-pressure: Required release gate scenario coverage workspace-scan-pressure was not present in the report.
  - expected: scenario coverage workspace-scan-pressure
  - actual: 5 scenario(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING mcp-runtime-start-stop: Required release gate scenario coverage mcp-runtime-start-stop was not present in the report.
  - expected: scenario coverage mcp-runtime-start-stop
  - actual: 5 scenario(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING browser-automation-smoke: Required release gate scenario coverage browser-automation-smoke was not present in the report.
  - expected: scenario coverage browser-automation-smoke
  - actual: 5 scenario(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING media-understanding-timeout: Required release gate scenario coverage media-understanding-timeout was not present in the report.
  - expected: scenario coverage media-understanding-timeout
  - actual: 5 scenario(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING agent-network-offline: Required release gate scenario coverage agent-network-offline was not present in the report.
  - expected: scenario coverage agent-network-offline
  - actual: 5 scenario(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate trait coverage filesystem-pressure was not present in the report.
  - expected: trait coverage filesystem-pressure
  - actual: 11 state trait(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate trait coverage memory-pressure was not present in the report.
  - expected: trait coverage memory-pressure
  - actual: 11 state trait(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate trait coverage failure-state was not present in the report.
  - expected: trait coverage failure-state
  - actual: 11 state trait(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate/broken-plugin-deps: Required release gate state-surface coverage failure-containment:broken-plugin-deps was not present in the report.
  - expected: state-surface coverage failure-containment:broken-plugin-deps
  - actual: 6 state/surface pair(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate/large-workspace: Required release gate state-surface coverage soak:large-workspace was not present in the report.
  - expected: state-surface coverage soak:large-workspace
  - actual: 6 state/surface pair(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate/large-workspace: Required release gate state-surface coverage workspace-scan:large-workspace was not present in the report.
  - expected: state-surface coverage workspace-scan:large-workspace
  - actual: 6 state/surface pair(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate/fresh: Required release gate state-surface coverage mcp-runtime:fresh was not present in the report.
  - expected: state-surface coverage mcp-runtime:fresh
  - actual: 6 state/surface pair(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate/fresh: Required release gate state-surface coverage browser-automation:fresh was not present in the report.
  - expected: state-surface coverage browser-automation:fresh
  - actual: 6 state/surface pair(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate/fresh: Required release gate state-surface coverage media-understanding:fresh was not present in the report.
  - expected: state-surface coverage media-understanding:fresh
  - actual: 6 state/surface pair(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate/fresh: Required release gate state-surface coverage network-offline:fresh was not present in the report.
  - expected: state-surface coverage network-offline:fresh
  - actual: 6 state/surface pair(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate/slow-filesystem: Required release gate state-surface coverage cross-platform-smoke:slow-filesystem was not present in the report.
  - expected: state-surface coverage cross-platform-smoke:slow-filesystem
  - actual: 6 state/surface pair(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- BLOCKING bundled-plugin-startup/fresh: 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 134ms
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 154ms
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw

Info cards omitted from Markdown: 64. See JSON report for full gate coverage details.

## Performance

- Repeat: 3
- Groups: 6
- Unstable groups: 4
- Profiled runs: 0
- fresh-install/fresh: 3 sample(s); timeToHealthReadyMs median 6335ms p95 6755.3ms max 6802ms; peakRssMb median 864.8MB p95 868.13MB max 868.5MB; cpuPercentMax median 80% p95 122.3% max 127% unstable; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 6278ms p95 6744.2ms max 6796ms
- fresh-install/onboarded-user: 3 sample(s); timeToHealthReadyMs median 6026ms p95 6088.1ms max 6095ms; peakRssMb median 827.5MB p95 858.37MB max 861.8MB; cpuPercentMax median 100% p95 100% max 100%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 6024ms p95 6029.4ms max 6030ms
- bundled-runtime-deps/missing-plugin-index: 3 sample(s); timeToHealthReadyMs median 6058ms p95 6483.7ms max 6531ms; peakRssMb median 829.6MB p95 863.62MB max 867.4MB; cpuPercentMax median 71.8% p95 82.15% max 83.3%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 6025ms p95 6478.6ms max 6529ms
- bundled-plugin-startup/fresh: 3 sample(s); timeToHealthReadyMs median 6141ms p95 6358.8ms max 6383ms; peakRssMb median 661.6MB p95 848.53MB max 869.3MB; cpuPercentMax median 61.4% p95 110.54% max 116% unstable; openclawEventLoopMaxMs median 0ms p95 24.45ms max 27.17ms unstable; timeToListeningMs median 6031ms p95 6252.4ms max 6277ms
- agent-cold-warm-message/mock-openai-provider: 3 sample(s); peakRssMb median 782.9MB p95 808.82MB max 811.7MB; cpuPercentMax median 140.8% p95 146.11% max 146.7%; agentTurnMs median 3310ms p95 3517ms max 3540ms; coldAgentTurnMs median 3310ms p95 3434.2ms max 3448ms; warmAgentTurnMs median 2954ms p95 3481.4ms max 3540ms
- gateway-performance/many-bundled-plugins: 3 sample(s); timeToHealthReadyMs median 6200ms p95 6803ms max 6870ms; peakRssMb median 858.6MB p95 874.08MB max 875.8MB; cpuPercentMax median 100% p95 100% max 100%; openclawEventLoopMaxMs median 0ms p95 18.01ms max 20.01ms unstable; timeToListeningMs median 6034ms p95 6711.7ms max 6787ms

## Resource Roles

- gateway: RSS 875.8 MB; CPU 127%; scenario gateway-performance/many-bundled-plugins
- gateway-tree: RSS 875.8 MB; CPU 127%; scenario gateway-performance/many-bundled-plugins
- command-tree: RSS 811.7 MB; CPU 152.4%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 811.7 MB; CPU 146.7%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 811.7 MB; CPU 146.7%; scenario agent-cold-warm-message/mock-openai-provider
- plugin-cli: RSS 742.5 MB; CPU 152.4%; scenario bundled-plugin-startup/fresh
- status-cli: RSS 683.9 MB; CPU 145.7%; scenario agent-cold-warm-message/mock-openai-provider
- model-cli: RSS 535.5 MB; CPU 144.8%; scenario gateway-performance/many-bundled-plugins

## Target Cleanup

- Runtime: `kova-local-1783640544668`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1783640544668' --json`
- Exit: 0
- Duration: 451ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r1-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 804.1 MB
- Tracked total peak RSS: 1495.6 MB
- Max CPU: 127%
- Resource samples: 28
- Command tree peak RSS: 692 MB
- Gateway peak RSS: 804.1 MB
- Resource by role:
  - gateway: RSS 804.1 MB; CPU 127%
  - gateway-tree: RSS 804.1 MB; CPU 127%
  - command-tree: RSS 692 MB; CPU 145.8%
  - plugin-cli: RSS 692 MB; CPU 145.8%
  - status-cli: RSS 644.8 MB; CPU 124.8%
  - model-cli: RSS 472.9 MB; CPU 144.8%
- Cold ready: 883 ms
- Warm ready: unknown ms
- Time to listening: 6796 ms
- Time to health ready: 6802 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 29 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 181.88 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 181.88ms open 0; plugins.metadata.scan max 47.26ms open 0; config.normalize max 3.14ms open 0
- OpenClaw event-loop max: 0 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 0 ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
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
- Resource peaks: CPU at 1067ms; RSS at 3076ms
- Diagnostic correlation:
  - CPU peaked at 192.4% around 1067ms
  - RSS peaked at 1495.6 MB around 3076ms
  - Slowest OpenClaw span: gateway.ready 181.88ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 20735 143% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 19891 804.1 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1783640544668' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1783640544668' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 115321ms
  - resource samples: 117
  - peak sampled RSS: 10635.6 MB
  - max sampled CPU: 388.3%
  - role peaks: 
  - top CPU: pid 17106 274% build-tooling,command-tree,runtime-management node /home/runner/_work/openclaw/openclaw/node_modules/.bin/vite build
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/resource-samples/target-setup-1.jsonl

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 140ms
  - resource samples: 2
  - peak sampled RSS: 28.2 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 19480 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r1-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 883ms
  - resource samples: 2
  - peak sampled RSS: 281.2 MB
  - max sampled CPU: 127%
  - role peaks: 
  - top CPU: pid 19891 127% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 19891
- gateway port: 18789
- RSS: 297.9 MB
- CPU: 124%
- readiness: ready after 28 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6796ms
- time to health ready: 6802ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 22ms / 22ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 181.88ms
- most expensive repeated span: plugins.metadata.scan 4x 82.32ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 6802ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 722.9 MB
  - max sampled CPU: 52.6%
  - role peaks: 
  - top CPU: pid 19891 52.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 19891
- gateway port: 18789
- RSS: 692.1 MB
- CPU: 52.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 29ms
- health samples: 3/3 ok
- health latency p95/max: 29ms / 29ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 199
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 181.88ms
- most expensive repeated span: plugins.metadata.scan 5x 94.66ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' --json`
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 702.5 MB
  - max sampled CPU: 50.4%
  - role peaks: 
  - top CPU: pid 19891 50.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' -- status`
  - status: 0
  - duration: 2354ms
  - resource samples: 4
  - peak sampled RSS: 1448.8 MB
  - max sampled CPU: 180.5%
  - role peaks: 
  - top CPU: pid 20410 123% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 19891
- gateway port: 18789
- RSS: 804 MB
- CPU: 54.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 2ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 181.88ms
- most expensive repeated span: plugins.metadata.scan 10x 184.78ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' -- plugins list`
  - status: 0
  - duration: 1725ms
  - resource samples: 3
  - peak sampled RSS: 1322.2 MB
  - max sampled CPU: 192.4%
  - role peaks: 
  - top CPU: pid 20609 142% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 4700ms
  - resource samples: 6
  - peak sampled RSS: 1495.6 MB
  - max sampled CPU: 187.7%
  - role peaks: 
  - top CPU: pid 20735 143% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 19891
- gateway port: 18789
- RSS: 375.6 MB
- CPU: 35.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 2ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 181.88ms
- most expensive repeated span: plugins.metadata.scan 13x 255.62ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' -- models list`
  - status: 0
  - duration: 1216ms
  - resource samples: 3
  - peak sampled RSS: 848.6 MB
  - max sampled CPU: 177.7%
  - role peaks: 
  - top CPU: pid 21033 141% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 19891
- gateway port: 18789
- RSS: 375.7 MB
- CPU: 32.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 181.88ms
- most expensive repeated span: plugins.metadata.scan 18x 355.23ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' --tail 200 --raw`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 375.7 MB
  - max sampled CPU: 31.8%
  - role peaks: 
  - top CPU: pid 19891 31.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 19891
- gateway port: 18789
- RSS: 375.7 MB
- CPU: 31.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 2ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 181.88ms
- most expensive repeated span: plugins.metadata.scan 18x 355.23ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 375.7 MB
  - max sampled CPU: 30.1%
  - role peaks: 
  - top CPU: pid 19891 30.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r1-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 19891
- gateway port: 18789
- RSS: 375.7 MB
- CPU: 30.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 1ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 181.88ms
- most expensive repeated span: plugins.metadata.scan 18x 355.23ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r1-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1491ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r2-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 868.5 MB
- Tracked total peak RSS: 1577.6 MB
- Max CPU: 75%
- Resource samples: 28
- Command tree peak RSS: 709.6 MB
- Gateway peak RSS: 868.5 MB
- Resource by role:
  - gateway: RSS 868.5 MB; CPU 75%
  - gateway-tree: RSS 868.5 MB; CPU 61.3%
  - command-tree: RSS 709.6 MB; CPU 140.8%
  - plugin-cli: RSS 709.6 MB; CPU 139.8%
  - status-cli: RSS 522.1 MB; CPU 131.6%
  - model-cli: RSS 519.5 MB; CPU 140.8%
- Cold ready: 50 ms
- Warm ready: unknown ms
- Time to listening: 6278 ms
- Time to health ready: 6335 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 27 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 183.65 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 183.65ms open 0; plugins.metadata.scan max 39.23ms open 0; config.normalize max 3.24ms open 0
- OpenClaw event-loop max: 0 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 0 ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
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
- Resource peaks: CPU at 1125ms; RSS at 4060ms
- Diagnostic correlation:
  - CPU peaked at 192.9% around 1125ms
  - RSS peaked at 1577.6 MB around 4060ms
  - Slowest OpenClaw span: gateway.ready 183.65ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 23251 138% command-tree,model-cli openclaw
- Top RSS process: pid 22147 868.5 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 142ms
  - resource samples: 2
  - peak sampled RSS: 32.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 21706 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r2-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 21958 0% command-tree,runtime-management ocm start kova-fresh-install-fresh-r2-kova-2026-07-09t234224z --runtime kova-local-1783...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 22147
- gateway port: 18789
- RSS: 57.3 MB
- CPU: 75%
- readiness: ready after 26 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6278ms
- time to health ready: 6335ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 183.65ms
- most expensive repeated span: plugins.metadata.scan 4x 73.92ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 6335ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 701.2 MB
  - max sampled CPU: 52.1%
  - role peaks: 
  - top CPU: pid 22147 52.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 22147
- gateway port: 18789
- RSS: 671.2 MB
- CPU: 51.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 27ms
- health samples: 3/3 ok
- health latency p95/max: 27ms / 27ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 183.65ms
- most expensive repeated span: plugins.metadata.scan 5x 87.39ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 14ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' --json`
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 83ms
  - resource samples: 2
  - peak sampled RSS: 680.7 MB
  - max sampled CPU: 51.6%
  - role peaks: 
  - top CPU: pid 22147 51.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' -- status`
  - status: 0
  - duration: 1967ms
  - resource samples: 3
  - peak sampled RSS: 1390.2 MB
  - max sampled CPU: 192.9%
  - role peaks: 
  - top CPU: pid 22599 129% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 22147
- gateway port: 18789
- RSS: 868.4 MB
- CPU: 56.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 183.65ms
- most expensive repeated span: plugins.metadata.scan 10x 177.18ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' -- plugins list`
  - status: 0
  - duration: 1671ms
  - resource samples: 3
  - peak sampled RSS: 1389.2 MB
  - max sampled CPU: 188.1%
  - role peaks: 
  - top CPU: pid 22820 137% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5597ms
  - resource samples: 7
  - peak sampled RSS: 1577.6 MB
  - max sampled CPU: 180.8%
  - role peaks: 
  - top CPU: pid 22955 136% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 22147
- gateway port: 18789
- RSS: 647.8 MB
- CPU: 32.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 2ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 2ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 183.65ms
- most expensive repeated span: plugins.metadata.scan 13x 237.76ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 3ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' -- models list`
  - status: 0
  - duration: 1141ms
  - resource samples: 3
  - peak sampled RSS: 1167.3 MB
  - max sampled CPU: 170.4%
  - role peaks: 
  - top CPU: pid 23251 138% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 22147
- gateway port: 18789
- RSS: 647.8 MB
- CPU: 29.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 183.65ms
- most expensive repeated span: plugins.metadata.scan 18x 324.63ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' --tail 200 --raw`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 647.8 MB
  - max sampled CPU: 28.6%
  - role peaks: 
  - top CPU: pid 22147 28.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 22147
- gateway port: 18789
- RSS: 647.8 MB
- CPU: 28.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 183.65ms
- most expensive repeated span: plugins.metadata.scan 18x 324.63ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 65ms
  - resource samples: 2
  - peak sampled RSS: 647.8 MB
  - max sampled CPU: 27.1%
  - role peaks: 
  - top CPU: pid 22147 27.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r2-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 22147
- gateway port: 18789
- RSS: 647.8 MB
- CPU: 27%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 183.65ms
- most expensive repeated span: plugins.metadata.scan 18x 324.63ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r2-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1284ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r3-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 864.8 MB
- Tracked total peak RSS: 1572.8 MB
- Max CPU: 80%
- Resource samples: 27
- Command tree peak RSS: 708 MB
- Gateway peak RSS: 864.8 MB
- Resource by role:
  - gateway: RSS 864.8 MB; CPU 80%
  - gateway-tree: RSS 864.8 MB; CPU 67.2%
  - command-tree: RSS 708 MB; CPU 140.8%
  - plugin-cli: RSS 708 MB; CPU 140.8%
  - status-cli: RSS 544.5 MB; CPU 131.5%
  - model-cli: RSS 473.9 MB; CPU 140.8%
- Cold ready: 66 ms
- Warm ready: unknown ms
- Time to listening: 5775 ms
- Time to health ready: 5830 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 7 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 155.04 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 155.04ms open 0; plugins.metadata.scan max 38.09ms open 0; config.normalize max 4.8ms open 0
- OpenClaw event-loop max: 0 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 0 ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
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
- Resource peaks: CPU at 1135ms; RSS at 4058ms
- Diagnostic correlation:
  - CPU peaked at 198.7% around 1135ms
  - RSS peaked at 1572.8 MB around 4058ms
  - Slowest OpenClaw span: gateway.ready 155.04ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 24902 138% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 24235 864.8 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 138ms
  - resource samples: 2
  - peak sampled RSS: 25.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 23910 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r3-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 66ms
  - resource samples: 2
  - peak sampled RSS: 56.6 MB
  - max sampled CPU: 66.6%
  - role peaks: 
  - top CPU: pid 24235 66.6% gateway,gateway-tree node /home/runner/.ocm/runtimes/kova-local-1783640544668/files/node_modules/openclaw/op...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 24235
- gateway port: 18789
- RSS: 59.4 MB
- CPU: 80%
- readiness: ready after 24 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 5775ms
- time to health ready: 5830ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 155.04ms
- most expensive repeated span: plugins.metadata.scan 4x 73.88ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 5830ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 741.3 MB
  - max sampled CPU: 57.8%
  - role peaks: 
  - top CPU: pid 24235 57.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 24235
- gateway port: 18789
- RSS: 712.2 MB
- CPU: 57.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 7ms
- health samples: 3/3 ok
- health latency p95/max: 7ms / 7ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 199
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 155.04ms
- most expensive repeated span: plugins.metadata.scan 5x 88.27ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' --json`
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 71ms
  - resource samples: 2
  - peak sampled RSS: 722.5 MB
  - max sampled CPU: 55.3%
  - role peaks: 
  - top CPU: pid 24235 55.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' -- status`
  - status: 0
  - duration: 2050ms
  - resource samples: 3
  - peak sampled RSS: 1408.8 MB
  - max sampled CPU: 198.7%
  - role peaks: 
  - top CPU: pid 24692 128% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 24235
- gateway port: 18789
- RSS: 864.7 MB
- CPU: 60.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 155.04ms
- most expensive repeated span: plugins.metadata.scan 10x 176.52ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' -- plugins list`
  - status: 0
  - duration: 1698ms
  - resource samples: 3
  - peak sampled RSS: 1391.6 MB
  - max sampled CPU: 192.6%
  - role peaks: 
  - top CPU: pid 24902 138% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 4391ms
  - resource samples: 6
  - peak sampled RSS: 1572.8 MB
  - max sampled CPU: 182.5%
  - role peaks: 
  - top CPU: pid 25046 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 24235
- gateway port: 18789
- RSS: 704.8 MB
- CPU: 35.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 2ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 155.04ms
- most expensive repeated span: plugins.metadata.scan 13x 238.55ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' -- models list`
  - status: 0
  - duration: 1166ms
  - resource samples: 3
  - peak sampled RSS: 1184.8 MB
  - max sampled CPU: 173.9%
  - role peaks: 
  - top CPU: pid 25319 138% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 24235
- gateway port: 18789
- RSS: 710.9 MB
- CPU: 32.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 2ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 155.04ms
- most expensive repeated span: plugins.metadata.scan 18x 332.27ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' --tail 200 --raw`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 710.9 MB
  - max sampled CPU: 32%
  - role peaks: 
  - top CPU: pid 24235 32% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 24235
- gateway port: 18789
- RSS: 710.9 MB
- CPU: 31.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 155.04ms
- most expensive repeated span: plugins.metadata.scan 18x 332.27ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 710.9 MB
  - max sampled CPU: 30.1%
  - role peaks: 
  - top CPU: pid 24235 30.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-fresh-r3-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 24235
- gateway port: 18789
- RSS: 710.9 MB
- CPU: 30.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 155.04ms
- most expensive repeated span: plugins.metadata.scan 18x 332.27ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r3-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1353ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 827.5 MB
- Tracked total peak RSS: 1377.1 MB
- Max CPU: 73.7%
- Resource samples: 30
- Command tree peak RSS: 693.6 MB
- Gateway peak RSS: 827.5 MB
- Resource by role:
  - gateway: RSS 827.5 MB; CPU 73.7%
  - gateway-tree: RSS 827.5 MB; CPU 73.7%
  - command-tree: RSS 693.6 MB; CPU 142.8%
  - plugin-cli: RSS 693.6 MB; CPU 142.8%
  - status-cli: RSS 549.9 MB; CPU 136.8%
  - model-cli: RSS 467.2 MB; CPU 139.8%
- Cold ready: 59 ms
- Warm ready: unknown ms
- Time to listening: 6024 ms
- Time to health ready: 6026 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 24
- Health p95: 37 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (228 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 177.74 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 177.74ms open 0; plugins.metadata.scan max 45.16ms open 0; config.normalize max 4.15ms open 0
- OpenClaw event-loop max: 0 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 0 ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
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
- Resource peaks: CPU at 1063ms; RSS at 1063ms
- Diagnostic correlation:
  - CPU peaked at 201.2% around 1063ms
  - RSS peaked at 1377.1 MB around 1063ms
  - Slowest OpenClaw span: gateway.ready 177.74ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 27382 140% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 26490 827.5 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 140ms
  - resource samples: 2
  - peak sampled RSS: 27.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 25984 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 26236 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6024ms
- time to health ready: 6026ms
- tcp listening: ok in 1ms
- health: ok (200) in 2ms
- health samples: 1/25 ok
- health latency p95/max: 1ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 193
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 177.74ms
- most expensive repeated span: plugins.metadata.scan 4x 90.44ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: PASS, 6026ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 796.4 MB
  - max sampled CPU: 64.9%
  - role peaks: 
  - top CPU: pid 26490 64.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 26490
- gateway port: 18789
- RSS: 769.4 MB
- CPU: 64.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 36ms
- health samples: 3/3 ok
- health latency p95/max: 36ms / 36ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 199
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 177.74ms
- most expensive repeated span: plugins.metadata.scan 5x 102.94ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 68ms
  - resource samples: 2
  - peak sampled RSS: 798.8 MB
  - max sampled CPU: 61.7%
  - role peaks: 
  - top CPU: pid 26490 61.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 26490
- gateway port: 18789
- RSS: 777.3 MB
- CPU: 62.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 493ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 37ms / 37ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 203
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 177.74ms
- most expensive repeated span: plugins.metadata.scan 6x 138.45ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 12ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 493ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 831.8 MB
  - max sampled CPU: 73.7%
  - role peaks: 
  - top CPU: pid 26490 73.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' -- status`
  - status: 0
  - duration: 1957ms
  - resource samples: 3
  - peak sampled RSS: 1377.1 MB
  - max sampled CPU: 201.2%
  - role peaks: 
  - top CPU: pid 27067 134% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 26490
- gateway port: 18789
- RSS: 827.4 MB
- CPU: 58.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 209
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 177.74ms
- most expensive repeated span: plugins.metadata.scan 9x 184.97ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' -- plugins list`
  - status: 0
  - duration: 1745ms
  - resource samples: 3
  - peak sampled RSS: 1365 MB
  - max sampled CPU: 188.3%
  - role peaks: 
  - top CPU: pid 27238 134% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5824ms
  - resource samples: 7
  - peak sampled RSS: 1363.4 MB
  - max sampled CPU: 186.5%
  - role peaks: 
  - top CPU: pid 27382 140% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 26490
- gateway port: 18789
- RSS: 391.1 MB
- CPU: 34.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 2ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 218
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 177.74ms
- most expensive repeated span: plugins.metadata.scan 12x 250.42ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' -- models list`
  - status: 0
  - duration: 1183ms
  - resource samples: 3
  - peak sampled RSS: 858.3 MB
  - max sampled CPU: 171.6%
  - role peaks: 
  - top CPU: pid 27660 137% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 26490
- gateway port: 18789
- RSS: 391.1 MB
- CPU: 31.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 177.74ms
- most expensive repeated span: plugins.metadata.scan 17x 339.6ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' --tail 200 --raw`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 391.1 MB
  - max sampled CPU: 30.8%
  - role peaks: 
  - top CPU: pid 26490 30.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 26490
- gateway port: 18789
- RSS: 391.1 MB
- CPU: 30.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 177.74ms
- most expensive repeated span: plugins.metadata.scan 17x 339.6ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 391.1 MB
  - max sampled CPU: 29.1%
  - role peaks: 
  - top CPU: pid 26490 29.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 26490
- gateway port: 18789
- RSS: 391.1 MB
- CPU: 29.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 1ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 177.74ms
- most expensive repeated span: plugins.metadata.scan 17x 339.6ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1180ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 861.8 MB
- Tracked total peak RSS: 1544.1 MB
- Max CPU: 100%
- Resource samples: 30
- Command tree peak RSS: 689.4 MB
- Gateway peak RSS: 861.8 MB
- Resource by role:
  - gateway: RSS 861.8 MB; CPU 100%
  - gateway-tree: RSS 861.8 MB; CPU 66.1%
  - command-tree: RSS 689.4 MB; CPU 144.8%
  - plugin-cli: RSS 689.4 MB; CPU 144.8%
  - status-cli: RSS 566.6 MB; CPU 141.7%
  - model-cli: RSS 522.2 MB; CPU 134.8%
- Cold ready: 62 ms
- Warm ready: unknown ms
- Time to listening: 6030 ms
- Time to health ready: 6095 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 52 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 175.07 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 175.07ms open 0; plugins.metadata.scan max 37.23ms open 0; config.normalize max 3.68ms open 0
- OpenClaw event-loop max: 0 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 0 ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
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
- Resource peaks: CPU at 1062ms; RSS at 3060ms
- Diagnostic correlation:
  - CPU peaked at 200.1% around 1062ms
  - RSS peaked at 1544.1 MB around 3060ms
  - Slowest OpenClaw span: gateway.ready 175.07ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 29577 142% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 28714 861.8 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 141ms
  - resource samples: 2
  - peak sampled RSS: 23.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 28320 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 4.8 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 28572 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 28714
- gateway port: 18789
- RSS: 76.6 MB
- CPU: 100%
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6030ms
- time to health ready: 6095ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 52ms / 52ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 175.07ms
- most expensive repeated span: plugins.metadata.scan 4x 73.85ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 8ms, artifacts 0
  - readiness: PASS, 6095ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 666.5 MB
  - max sampled CPU: 56%
  - role peaks: 
  - top CPU: pid 28714 56% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 28714
- gateway port: 18789
- RSS: 642 MB
- CPU: 55.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 22ms
- health samples: 3/3 ok
- health latency p95/max: 22ms / 22ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 175.07ms
- most expensive repeated span: plugins.metadata.scan 5x 86.06ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 75ms
  - resource samples: 2
  - peak sampled RSS: 670.9 MB
  - max sampled CPU: 54.9%
  - role peaks: 
  - top CPU: pid 28714 54.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 28714
- gateway port: 18789
- RSS: 654.8 MB
- CPU: 55.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 407ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 38ms / 38ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 175.07ms
- most expensive repeated span: plugins.metadata.scan 7x 131.25ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 407ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 64ms
  - resource samples: 2
  - peak sampled RSS: 866.5 MB
  - max sampled CPU: 66.1%
  - role peaks: 
  - top CPU: pid 28714 66.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' -- status`
  - status: 0
  - duration: 1955ms
  - resource samples: 3
  - peak sampled RSS: 1428.2 MB
  - max sampled CPU: 200.1%
  - role peaks: 
  - top CPU: pid 29411 138% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 28714
- gateway port: 18789
- RSS: 861.7 MB
- CPU: 53.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 1ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 175.07ms
- most expensive repeated span: plugins.metadata.scan 10x 174.16ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' -- plugins list`
  - status: 0
  - duration: 1733ms
  - resource samples: 3
  - peak sampled RSS: 1382.7 MB
  - max sampled CPU: 191.3%
  - role peaks: 
  - top CPU: pid 29577 142% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5274ms
  - resource samples: 7
  - peak sampled RSS: 1544.1 MB
  - max sampled CPU: 181.5%
  - role peaks: 
  - top CPU: pid 29718 138% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 28714
- gateway port: 18789
- RSS: 644.8 MB
- CPU: 32.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 175.07ms
- most expensive repeated span: plugins.metadata.scan 13x 242.99ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' -- models list`
  - status: 0
  - duration: 1197ms
  - resource samples: 3
  - peak sampled RSS: 1167 MB
  - max sampled CPU: 164.4%
  - role peaks: 
  - top CPU: pid 29964 132% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 28714
- gateway port: 18789
- RSS: 644.8 MB
- CPU: 29.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 2ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 175.07ms
- most expensive repeated span: plugins.metadata.scan 18x 342.37ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' --tail 200 --raw`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 644.8 MB
  - max sampled CPU: 28.7%
  - role peaks: 
  - top CPU: pid 28714 28.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 28714
- gateway port: 18789
- RSS: 644.8 MB
- CPU: 28.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 175.07ms
- most expensive repeated span: plugins.metadata.scan 18x 342.37ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 644.8 MB
  - max sampled CPU: 27.2%
  - role peaks: 
  - top CPU: pid 28714 27.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 28714
- gateway port: 18789
- RSS: 644.8 MB
- CPU: 27.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 1ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 175.07ms
- most expensive repeated span: plugins.metadata.scan 18x 342.37ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1208ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 814.4 MB
- Tracked total peak RSS: 1506.7 MB
- Max CPU: 100%
- Resource samples: 29
- Command tree peak RSS: 692.8 MB
- Gateway peak RSS: 814.4 MB
- Resource by role:
  - gateway: RSS 814.4 MB; CPU 100%
  - gateway-tree: RSS 814.4 MB; CPU 68.8%
  - command-tree: RSS 692.8 MB; CPU 143.8%
  - plugin-cli: RSS 692.8 MB; CPU 140.8%
  - status-cli: RSS 524.7 MB; CPU 143.7%
  - model-cli: RSS 522.9 MB; CPU 143.8%
- Cold ready: 61 ms
- Warm ready: unknown ms
- Time to listening: 5775 ms
- Time to health ready: 5823 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 50 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (228 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 167.88 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 167.88ms open 0; plugins.metadata.scan max 44.98ms open 0; config.normalize max 3.39ms open 0
- OpenClaw event-loop max: 0 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 0 ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
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
- Resource peaks: CPU at 1068ms; RSS at 3058ms
- Diagnostic correlation:
  - CPU peaked at 204% around 1068ms
  - RSS peaked at 1506.7 MB around 3058ms
  - Slowest OpenClaw span: gateway.ready 167.88ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 31737 140% command-tree,status-cli openclaw
- Top RSS process: pid 31055 814.4 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 136ms
  - resource samples: 2
  - peak sampled RSS: 23 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 30656 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 30908 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 31055
- gateway port: 18789
- RSS: 77 MB
- CPU: 100%
- readiness: ready after 24 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 5775ms
- time to health ready: 5823ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 31ms / 31ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 167.88ms
- most expensive repeated span: plugins.metadata.scan 4x 83.07ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 5823ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 4ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 728.6 MB
  - max sampled CPU: 60.4%
  - role peaks: 
  - top CPU: pid 31055 60.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 31055
- gateway port: 18789
- RSS: 699.9 MB
- CPU: 59.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 22ms
- health samples: 3/3 ok
- health latency p95/max: 22ms / 22ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 167.88ms
- most expensive repeated span: plugins.metadata.scan 5x 95.79ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 73ms
  - resource samples: 2
  - peak sampled RSS: 733.3 MB
  - max sampled CPU: 58.9%
  - role peaks: 
  - top CPU: pid 31055 58.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 31055
- gateway port: 18789
- RSS: 717.3 MB
- CPU: 59.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 409ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 50ms / 50ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 203
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 167.88ms
- most expensive repeated span: plugins.metadata.scan 6x 125.34ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 409ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 818.9 MB
  - max sampled CPU: 68.8%
  - role peaks: 
  - top CPU: pid 31055 68.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' -- status`
  - status: 0
  - duration: 1901ms
  - resource samples: 3
  - peak sampled RSS: 1338.9 MB
  - max sampled CPU: 204%
  - role peaks: 
  - top CPU: pid 31737 140% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 31055
- gateway port: 18789
- RSS: 814.4 MB
- CPU: 55.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 209
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 167.88ms
- most expensive repeated span: plugins.metadata.scan 9x 175.01ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' -- plugins list`
  - status: 0
  - duration: 1673ms
  - resource samples: 3
  - peak sampled RSS: 1341.9 MB
  - max sampled CPU: 188.9%
  - role peaks: 
  - top CPU: pid 31911 138% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 4738ms
  - resource samples: 6
  - peak sampled RSS: 1506.7 MB
  - max sampled CPU: 181.8%
  - role peaks: 
  - top CPU: pid 32055 136% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 31055
- gateway port: 18789
- RSS: 638.2 MB
- CPU: 34.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 218
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 167.88ms
- most expensive repeated span: plugins.metadata.scan 12x 241.39ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' -- models list`
  - status: 0
  - duration: 1171ms
  - resource samples: 3
  - peak sampled RSS: 1161.1 MB
  - max sampled CPU: 175.2%
  - role peaks: 
  - top CPU: pid 32327 140% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 31055
- gateway port: 18789
- RSS: 638.2 MB
- CPU: 31.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 167.88ms
- most expensive repeated span: plugins.metadata.scan 17x 335.58ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' --tail 200 --raw`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 638.2 MB
  - max sampled CPU: 30.4%
  - role peaks: 
  - top CPU: pid 31055 30.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 31055
- gateway port: 18789
- RSS: 638.2 MB
- CPU: 30.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 2ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 167.88ms
- most expensive repeated span: plugins.metadata.scan 17x 335.58ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 638.2 MB
  - max sampled CPU: 28.7%
  - role peaks: 
  - top CPU: pid 31055 28.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 31055
- gateway port: 18789
- RSS: 638.2 MB
- CPU: 28.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 167.88ms
- most expensive repeated span: plugins.metadata.scan 17x 335.58ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1372ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 867.4 MB
- Tracked total peak RSS: 872.5 MB
- Max CPU: 62.8%
- Resource samples: 14
- Command tree peak RSS: 31.9 MB
- Gateway peak RSS: 867.4 MB
- Resource by role:
  - gateway: RSS 867.4 MB; CPU 62.8%
  - gateway-tree: RSS 867.4 MB; CPU 62.8%
  - command-tree: RSS 31.9 MB; CPU 0%
  - runtime-staging: RSS 31.9 MB; CPU 0%
  - mock-provider: RSS 25.9 MB; CPU 0%
  - plugin-cli: RSS 6.8 MB; CPU 0%
- Cold ready: 64 ms
- Warm ready: 61 ms
- Time to listening: 6529 ms
- Time to health ready: 6531 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 53 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (205 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 154.91 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 154.91ms open 0; plugins.metadata.scan max 44.86ms open 0; config.normalize max 3.25ms open 0
- OpenClaw event-loop max: 0 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 0 ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: true (cold installs 0; warm restages 0; warm max unknown ms)
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
- Resource peaks: CPU at 60ms; RSS at 60ms
- Diagnostic correlation:
  - CPU peaked at 62.8% around 60ms
  - RSS peaked at 872.5 MB around 60ms
  - Slowest OpenClaw span: gateway.ready 154.91ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 33649 62.8% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 33649 867.4 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 142ms
  - resource samples: 2
  - peak sampled RSS: 25.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 33265 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 64ms
  - resource samples: 2
  - peak sampled RSS: 33.1 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 33517 0% command-tree,runtime-management ocm start kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 33649
- gateway port: 18789
- RSS: 51.5 MB
- CPU: 50%
- readiness: ready after 27 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 6529ms
- time to health ready: 6531ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 18ms / 18ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 154.91ms
- most expensive repeated span: plugins.metadata.scan 4x 86.09ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 6531ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 768.2 MB
  - max sampled CPU: 52.9%
  - role peaks: 
  - top CPU: pid 33649 52.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 33649
- gateway port: 18789
- RSS: 736.3 MB
- CPU: 52.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 18ms
- health samples: 3/3 ok
- health latency p95/max: 18ms / 18ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 154.91ms
- most expensive repeated span: plugins.metadata.scan 5x 98.75ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'missing-plugin-index' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 87ms
  - resource samples: 2
  - peak sampled RSS: 749.6 MB
  - max sampled CPU: 52.3%
  - role peaks: 
  - top CPU: pid 33649 52.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 33649
- gateway port: 18789
- RSS: 752.1 MB
- CPU: 52.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 0ms
- time to health ready: 391ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 53ms / 53ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 154.91ms
- most expensive repeated span: plugins.metadata.scan 7x 142.49ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 13ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 391ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z'`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 872.5 MB
  - max sampled CPU: 62.8%
  - role peaks: 
  - top CPU: pid 33649 62.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 872.3 MB
  - max sampled CPU: 62.4%
  - role peaks: 
  - top CPU: pid 33649 62.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 33649
- gateway port: 18789
- RSS: 867.3 MB
- CPU: 61.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 20000ms / 60000ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 154.91ms
- most expensive repeated span: plugins.metadata.scan 7x 142.49ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 867.4 MB
  - max sampled CPU: 55.2%
  - role peaks: 
  - top CPU: pid 33649 55.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 33649
- gateway port: 18789
- RSS: 867.4 MB
- CPU: 54.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 154.91ms
- most expensive repeated span: plugins.metadata.scan 7x 142.49ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1133ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 829.6 MB
- Tracked total peak RSS: 834.7 MB
- Max CPU: 83.3%
- Resource samples: 14
- Command tree peak RSS: 25.7 MB
- Gateway peak RSS: 829.6 MB
- Resource by role:
  - gateway: RSS 829.6 MB; CPU 83.3%
  - gateway-tree: RSS 829.6 MB; CPU 69.6%
  - command-tree: RSS 25.7 MB; CPU 0%
  - runtime-staging: RSS 25.7 MB; CPU 0%
  - mock-provider: RSS 22.8 MB; CPU 0%
  - plugin-cli: RSS 6.8 MB; CPU 0%
- Cold ready: 66 ms
- Warm ready: 57 ms
- Time to listening: 5777 ms
- Time to health ready: 5943 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 38 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (205 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 196.48 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 196.48ms open 0; plugins.metadata.scan max 37.41ms open 0; config.normalize max 3.34ms open 0
- OpenClaw event-loop max: 0 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 0 ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: true (cold installs 0; warm restages 0; warm max unknown ms)
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
- Resource peaks: CPU at 56ms; RSS at 56ms
- Diagnostic correlation:
  - CPU peaked at 69.6% around 56ms
  - RSS peaked at 834.7 MB around 56ms
  - Slowest OpenClaw span: gateway.ready 196.48ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 35143 69.6% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 35143 829.6 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 139ms
  - resource samples: 2
  - peak sampled RSS: 22.8 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 34749 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 66ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 35001 0% command-tree,runtime-management ocm start kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 35143
- gateway port: 18789
- RSS: 80 MB
- CPU: 83.3%
- readiness: ready after 24 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 5777ms
- time to health ready: 5943ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 36ms / 36ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 196.48ms
- most expensive repeated span: plugins.metadata.scan 4x 76.08ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 5943ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 709.3 MB
  - max sampled CPU: 61%
  - role peaks: 
  - top CPU: pid 35143 61% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 35143
- gateway port: 18789
- RSS: 683.6 MB
- CPU: 60.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 17ms
- health samples: 3/3 ok
- health latency p95/max: 17ms / 17ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 196.48ms
- most expensive repeated span: plugins.metadata.scan 5x 88.63ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'missing-plugin-index' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 80ms
  - resource samples: 2
  - peak sampled RSS: 697.2 MB
  - max sampled CPU: 59.6%
  - role peaks: 
  - top CPU: pid 35143 59.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 35143
- gateway port: 18789
- RSS: 696.3 MB
- CPU: 59.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 0ms
- time to health ready: 409ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 38ms / 38ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 196.48ms
- most expensive repeated span: plugins.metadata.scan 7x 129.6ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 409ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z'`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 834.7 MB
  - max sampled CPU: 69.6%
  - role peaks: 
  - top CPU: pid 35143 69.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 49ms
  - resource samples: 2
  - peak sampled RSS: 834.4 MB
  - max sampled CPU: 69.3%
  - role peaks: 
  - top CPU: pid 35143 69.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 35143
- gateway port: 18789
- RSS: 829.5 MB
- CPU: 68.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 20000ms / 60000ms
- time to listening: 1ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 196.48ms
- most expensive repeated span: plugins.metadata.scan 7x 129.6ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 829.6 MB
  - max sampled CPU: 61%
  - role peaks: 
  - top CPU: pid 35143 61% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 35143
- gateway port: 18789
- RSS: 829.6 MB
- CPU: 60.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 196.48ms
- most expensive repeated span: plugins.metadata.scan 7x 129.6ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1035ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 815.2 MB
- Tracked total peak RSS: 820.2 MB
- Max CPU: 71.8%
- Resource samples: 14
- Command tree peak RSS: 30.3 MB
- Gateway peak RSS: 815.2 MB
- Resource by role:
  - gateway: RSS 815.2 MB; CPU 71.8%
  - gateway-tree: RSS 815.2 MB; CPU 71.8%
  - command-tree: RSS 30.3 MB; CPU 0%
  - runtime-staging: RSS 30.3 MB; CPU 0%
  - mock-provider: RSS 23.2 MB; CPU 0%
  - plugin-cli: RSS 6.6 MB; CPU 0%
- Cold ready: 65 ms
- Warm ready: 57 ms
- Time to listening: 6025 ms
- Time to health ready: 6058 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 24
- Health p95: 55 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (205 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 163.51 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 163.51ms open 0; plugins.metadata.scan max 46.82ms open 0; config.normalize max 3.12ms open 0
- OpenClaw event-loop max: 0 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 0 ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: true (cold installs 0; warm restages 0; warm max unknown ms)
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
- Resource peaks: CPU at 54ms; RSS at 54ms
- Diagnostic correlation:
  - CPU peaked at 71.8% around 54ms
  - RSS peaked at 820.2 MB around 54ms
  - Slowest OpenClaw span: gateway.ready 163.51ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 36849 71.8% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 36849 815.2 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 137ms
  - resource samples: 2
  - peak sampled RSS: 23.2 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 36343 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 65ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 36595 0% command-tree,runtime-management ocm start kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 6025ms
- time to health ready: 6058ms
- tcp listening: ok in 1ms
- health: ok (200) in 33ms
- health samples: 1/25 ok
- health latency p95/max: 1ms / 33ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 193
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 163.51ms
- most expensive repeated span: plugins.metadata.scan 4x 83.58ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: PASS, 6058ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 728.1 MB
  - max sampled CPU: 62.3%
  - role peaks: 
  - top CPU: pid 36849 62.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 36849
- gateway port: 18789
- RSS: 697.8 MB
- CPU: 61.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 17ms
- health samples: 3/3 ok
- health latency p95/max: 17ms / 17ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 163.51ms
- most expensive repeated span: plugins.metadata.scan 5x 95.55ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'missing-plugin-index' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 79ms
  - resource samples: 2
  - peak sampled RSS: 714.4 MB
  - max sampled CPU: 61%
  - role peaks: 
  - top CPU: pid 36849 61% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 36849
- gateway port: 18789
- RSS: 717.8 MB
- CPU: 61.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 1ms
- time to health ready: 371ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 55ms / 55ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 163.51ms
- most expensive repeated span: plugins.metadata.scan 7x 134.22ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 13ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 371ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 13ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z'`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 820.2 MB
  - max sampled CPU: 71.8%
  - role peaks: 
  - top CPU: pid 36849 71.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 820 MB
  - max sampled CPU: 71.2%
  - role peaks: 
  - top CPU: pid 36849 71.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 36849
- gateway port: 18789
- RSS: 815.1 MB
- CPU: 70.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 20000ms / 60000ms
- time to listening: 1ms
- time to health ready: 2ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 163.51ms
- most expensive repeated span: plugins.metadata.scan 7x 134.22ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 815.2 MB
  - max sampled CPU: 62.3%
  - role peaks: 
  - top CPU: pid 36849 62.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 36849
- gateway port: 18789
- RSS: 815.2 MB
- CPU: 61.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 2ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 163.51ms
- most expensive repeated span: plugins.metadata.scan 7x 134.22ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1226ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: FAIL
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 640.1 MB
- Tracked total peak RSS: 1382.4 MB
- Max CPU: 54.4%
- Resource samples: 23
- Command tree peak RSS: 742.5 MB
- Gateway peak RSS: 640.1 MB
- Resource by role:
  - command-tree: RSS 742.5 MB; CPU 152.4%
  - plugin-cli: RSS 742.5 MB; CPU 152.4%
  - gateway: RSS 640.1 MB; CPU 54.4%
  - gateway-tree: RSS 640.1 MB; CPU 54.4%
  - runtime-staging: RSS 24.8 MB; CPU 0%
  - mock-provider: RSS 21.6 MB; CPU 0%
- Cold ready: 53 ms
- Warm ready: 51 ms
- Time to listening: 6277 ms
- Time to health ready: 6383 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 25
- Health p95: 2 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (203 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 161.78 ms
- Open OpenClaw spans: 4 (1 required)
- Slowest open span: gateway.ready 134 ms
- Key OpenClaw spans: gateway.ready max 161.78ms open 1; plugins.metadata.scan max 39.18ms open 0; config.normalize max 3.16ms open 0
- OpenClaw event-loop max: 0 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 0 ms
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
- Resource peaks: CPU at 1066ms; RSS at 2069ms
- Diagnostic correlation:
  - CPU peaked at 195.2% around 1066ms
  - RSS peaked at 1382.4 MB around 2069ms
  - Slowest OpenClaw span: gateway.ready 161.78ms
  - Open OpenClaw span: gateway.ready age 134ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 38753 151% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 38753 679.4 MB command-tree,plugin-cli openclaw-plugins

### Violations

- 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 134ms

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 138ms
  - resource samples: 2
  - peak sampled RSS: 21.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 37944 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 38196 0% command-tree,runtime-management ocm start kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/resource-samples/gateway-start-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 26 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 6277ms
- time to health ready: 6383ms
- tcp listening: ok in 1ms
- health: ok (200) in 106ms
- health samples: 1/26 ok
- health latency p95/max: 2ms / 106ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 156
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.runtime-post-bind 93.89ms
- most expensive repeated span: plugins.metadata.scan 4x 73.15ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: PASS, 6383ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 17ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 76ms
  - resource samples: 2
  - peak sampled RSS: 663.9 MB
  - max sampled CPU: 54.4%
  - role peaks: 
  - top CPU: pid 38450 54.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 38450
- gateway port: 18789
- RSS: 639.8 MB
- CPU: 54.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 161.78ms
- most expensive repeated span: plugins.metadata.scan 4x 73.15ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' -- plugins list`
  - status: 0
  - duration: 2269ms
  - resource samples: 4
  - peak sampled RSS: 1382.4 MB
  - max sampled CPU: 195.2%
  - role peaks: 
  - top CPU: pid 38753 151% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1948ms
  - resource samples: 3
  - peak sampled RSS: 1116.2 MB
  - max sampled CPU: 176.8%
  - role peaks: 
  - top CPU: pid 38883 137% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' --tail 400 --raw`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 640 MB
  - max sampled CPU: 31.9%
  - role peaks: 
  - top CPU: pid 38450 31.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 38450
- gateway port: 18789
- RSS: 640 MB
- CPU: 31.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 2ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 2ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 203
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 161.78ms
- most expensive repeated span: plugins.metadata.scan 7x 140.65ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z'`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 645.2 MB
  - max sampled CPU: 30.4%
  - role peaks: 
  - top CPU: pid 38450 30.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 645.1 MB
  - max sampled CPU: 30.3%
  - role peaks: 
  - top CPU: pid 38450 30.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' --tail 400 --raw`
  - status: 0
  - duration: 49ms
  - resource samples: 2
  - peak sampled RSS: 640.1 MB
  - max sampled CPU: 30.1%
  - role peaks: 
  - top CPU: pid 38450 30.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 38450
- gateway port: 18789
- RSS: 640.1 MB
- CPU: 30%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 203
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 161.78ms
- most expensive repeated span: plugins.metadata.scan 7x 140.65ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 640.1 MB
  - max sampled CPU: 27.6%
  - role peaks: 
  - top CPU: pid 38450 27.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 38450
- gateway port: 18789
- RSS: 640.1 MB
- CPU: 27.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 203
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 161.78ms
- most expensive repeated span: plugins.metadata.scan 7x 140.65ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 12ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1051ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: FAIL
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 661.6 MB
- Tracked total peak RSS: 1175.4 MB
- Max CPU: 61.4%
- Resource samples: 22
- Command tree peak RSS: 513.9 MB
- Gateway peak RSS: 661.6 MB
- Resource by role:
  - gateway: RSS 661.6 MB; CPU 61.4%
  - gateway-tree: RSS 661.6 MB; CPU 61.4%
  - command-tree: RSS 513.9 MB; CPU 141.8%
  - plugin-cli: RSS 513.9 MB; CPU 141.8%
  - runtime-staging: RSS 27.9 MB; CPU 0%
  - mock-provider: RSS 25.4 MB; CPU 0%
- Cold ready: 54 ms
- Warm ready: 53 ms
- Time to listening: 6026 ms
- Time to health ready: 6141 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 24
- Health p95: 10 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (203 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 200.41 ms
- Open OpenClaw spans: 4 (1 required)
- Slowest open span: gateway.ready 154 ms
- Key OpenClaw spans: gateway.ready max 200.41ms open 1; plugins.metadata.scan max 36.28ms open 0; config.normalize max 3.44ms open 0
- OpenClaw event-loop max: 0 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 0 ms
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
- Resource peaks: CPU at 1059ms; RSS at 1059ms
- Diagnostic correlation:
  - CPU peaked at 191.4% around 1059ms
  - RSS peaked at 1175.4 MB around 1059ms
  - Slowest OpenClaw span: gateway.ready 200.41ms
  - Open OpenClaw span: gateway.ready age 154ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 40749 139% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 40433 661.6 MB gateway,gateway-tree openclaw-gateway

### Violations

- 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 154ms

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 146ms
  - resource samples: 2
  - peak sampled RSS: 25.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 39927 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 40179 0% command-tree,runtime-management ocm start kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/resource-samples/gateway-start-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 6026ms
- time to health ready: 6141ms
- tcp listening: ok in 0ms
- health: ok (200) in 115ms
- health samples: 1/25 ok
- health latency p95/max: 1ms / 115ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 156
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.runtime-post-bind 106.36ms
- most expensive repeated span: plugins.metadata.scan 4x 74.5ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: PASS, 6141ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 4ms, artifacts 1
  - diagnostics: PASS, 18ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 69ms
  - resource samples: 2
  - peak sampled RSS: 688.9 MB
  - max sampled CPU: 61.4%
  - role peaks: 
  - top CPU: pid 40433 61.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 40433
- gateway port: 18789
- RSS: 661.3 MB
- CPU: 61.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 2ms
- tcp listening: ok in 1ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 10ms / 10ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 200.41ms
- most expensive repeated span: plugins.metadata.scan 4x 74.5ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' -- plugins list`
  - status: 0
  - duration: 1852ms
  - resource samples: 3
  - peak sampled RSS: 1175.4 MB
  - max sampled CPU: 191.4%
  - role peaks: 
  - top CPU: pid 40749 139% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1801ms
  - resource samples: 3
  - peak sampled RSS: 1142.4 MB
  - max sampled CPU: 181.7%
  - role peaks: 
  - top CPU: pid 40887 138% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' --tail 400 --raw`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 661.6 MB
  - max sampled CPU: 37.1%
  - role peaks: 
  - top CPU: pid 40433 37.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 40433
- gateway port: 18789
- RSS: 661.6 MB
- CPU: 36.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 2ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 203
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 200.41ms
- most expensive repeated span: plugins.metadata.scan 7x 142.11ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z'`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 666.6 MB
  - max sampled CPU: 35.2%
  - role peaks: 
  - top CPU: pid 40433 35.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 666.3 MB
  - max sampled CPU: 35%
  - role peaks: 
  - top CPU: pid 40433 35% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' --tail 400 --raw`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 661.6 MB
  - max sampled CPU: 34.8%
  - role peaks: 
  - top CPU: pid 40433 34.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 40433
- gateway port: 18789
- RSS: 661.6 MB
- CPU: 34.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 2ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 203
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 200.41ms
- most expensive repeated span: plugins.metadata.scan 7x 142.11ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 661.6 MB
  - max sampled CPU: 31.7%
  - role peaks: 
  - top CPU: pid 40433 31.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 40433
- gateway port: 18789
- RSS: 661.6 MB
- CPU: 31.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 203
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 200.41ms
- most expensive repeated span: plugins.metadata.scan 7x 142.11ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1145ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 869.3 MB
- Tracked total peak RSS: 1425.9 MB
- Max CPU: 116%
- Resource samples: 22
- Command tree peak RSS: 556.8 MB
- Gateway peak RSS: 869.3 MB
- Resource by role:
  - gateway: RSS 869.3 MB; CPU 116%
  - gateway-tree: RSS 869.3 MB; CPU 68.1%
  - command-tree: RSS 556.8 MB; CPU 141.8%
  - plugin-cli: RSS 556.8 MB; CPU 141.8%
  - runtime-staging: RSS 28.6 MB; CPU 0%
  - mock-provider: RSS 28.5 MB; CPU 0%
- Cold ready: 62 ms
- Warm ready: 56 ms
- Time to listening: 6031 ms
- Time to health ready: 6094 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 54 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (211 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 234.96 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 234.96ms open 0; plugins.metadata.scan max 45.52ms open 0; config.normalize max 3.88ms open 0
- OpenClaw event-loop max: 27.17 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 27.17 ms
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
- Resource peaks: CPU at 1060ms; RSS at 1134ms
- Diagnostic correlation:
  - CPU peaked at 197.8% around 1060ms
  - RSS peaked at 1425.9 MB around 1134ms
  - Slowest OpenClaw span: gateway.ready 234.96ms
  - Max structured event-loop delay: 27.17ms
- Top CPU process: pid 42876 139% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 42297 869.3 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 140ms
  - resource samples: 2
  - peak sampled RSS: 28.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 41911 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 42163 0% command-tree,runtime-management ocm start kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/resource-samples/gateway-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 42297
- gateway port: 18789
- RSS: 77.6 MB
- CPU: 116%
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 6031ms
- time to health ready: 6094ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 54ms / 54ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 234.96ms
- most expensive repeated span: plugins.metadata.scan 4x 79.05ms
- OpenClaw event-loop max: 27.17ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 6094ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 678.1 MB
  - max sampled CPU: 59.1%
  - role peaks: 
  - top CPU: pid 42297 59.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 42297
- gateway port: 18789
- RSS: 649.5 MB
- CPU: 58.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 23ms
- health samples: 3/3 ok
- health latency p95/max: 23ms / 23ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 234.96ms
- most expensive repeated span: plugins.metadata.scan 5x 91.91ms
- OpenClaw event-loop max: 27.17ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' -- plugins list`
  - status: 0
  - duration: 1906ms
  - resource samples: 3
  - peak sampled RSS: 1425.9 MB
  - max sampled CPU: 192.6%
  - role peaks: 
  - top CPU: pid 42671 121% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1682ms
  - resource samples: 3
  - peak sampled RSS: 1410.8 MB
  - max sampled CPU: 197.8%
  - role peaks: 
  - top CPU: pid 42876 139% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' --tail 400 --raw`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 869.2 MB
  - max sampled CPU: 52.8%
  - role peaks: 
  - top CPU: pid 42297 52.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 42297
- gateway port: 18789
- RSS: 869.2 MB
- CPU: 52.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 234.96ms
- most expensive repeated span: plugins.metadata.scan 10x 213.25ms
- OpenClaw event-loop max: 27.17ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z'`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 874.4 MB
  - max sampled CPU: 50.1%
  - role peaks: 
  - top CPU: pid 42297 50.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 874.2 MB
  - max sampled CPU: 49.8%
  - role peaks: 
  - top CPU: pid 42297 49.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' --tail 400 --raw`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 869.3 MB
  - max sampled CPU: 49.6%
  - role peaks: 
  - top CPU: pid 42297 49.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 42297
- gateway port: 18789
- RSS: 869.3 MB
- CPU: 49.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 234.96ms
- most expensive repeated span: plugins.metadata.scan 10x 213.25ms
- OpenClaw event-loop max: 27.17ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 869.3 MB
  - max sampled CPU: 45.3%
  - role peaks: 
  - top CPU: pid 42297 45.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 42297
- gateway port: 18789
- RSS: 869.3 MB
- CPU: 45.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 234.96ms
- most expensive repeated span: plugins.metadata.scan 10x 213.25ms
- OpenClaw event-loop max: 27.17ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1225ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 705.2 MB
- Tracked total peak RSS: 705.2 MB
- Max CPU: 140.8%
- Resource samples: 21
- Command tree peak RSS: 705.2 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 705.2 MB; CPU 140.8%
  - agent-process: RSS 705.2 MB; CPU 140.8%
  - command-tree: RSS 705.2 MB; CPU 140.9%
  - status-cli: RSS 683.9 MB; CPU 140.9%
  - uncategorized: RSS 26.7 MB; CPU 0%
  - mock-provider: RSS 23.9 MB; CPU 0%
- Cold ready: 55 ms
- Warm ready: unknown ms
- Time to listening: unknown ms
- Time to health ready: unknown ms
- Readiness classification: unknown
- TCP connect max: unknown ms
- Missing dependency errors: 0
- Final gateway state: disabled
- Health failures: 0
- Health p95: unknown ms
- Readiness failures: 0
- Gateway restarts: 0
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (28 events, 0 parse errors)
- Slowest OpenClaw span: plugins.metadata.scan 48.18 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 48.18ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 41 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 41 ms
- Agent turn: 3135 ms (true)
- Agent cold/warm: cold 3135 ms; warm 2848 ms; delta 287 ms
- Agent pre-provider: cold 2914 ms; warm 2738 ms; delta 176 ms
- Agent provider final: cold 1 ms; warm 1 ms
- Agent turn stats: count 2; p95 3120.65 ms; max 3135 ms; pre-provider p95 2905.2 ms
- Provider evidence: 1 request(s); provider work 1 ms; pre-provider 2914 ms; post-provider 220 ms
- Agent latency diagnosis: cold agent turn 3135ms; pre-provider 2914ms; provider 1ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 3135 ms; pre-provider 2914 ms; provider 1 ms; post-provider 220 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2914ms; provider 1ms; post-provider 220ms; unknown 2914ms; source none
  - warm: total 2848 ms; pre-provider 2738 ms; provider 1 ms; post-provider 109 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2738ms; provider 1ms; post-provider 109ms; unknown 2738ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 2140ms; RSS at 2133ms
- Diagnostic correlation:
  - CPU peaked at 140.9% around 2140ms
  - RSS peaked at 705.2 MB around 2133ms
  - Slowest OpenClaw span: plugins.metadata.scan 48.18ms
  - Provider/model timing max: 41ms
- Top CPU process: pid 46368 139% command-tree,status-cli openclaw
- Top RSS process: pid 45763 642.1 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 138ms
  - resource samples: 2
  - peak sampled RSS: 23.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 43896 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --no-service --json`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 44148 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: unavailable
- OpenClaw timeline events: 0
- OpenClaw timeline parse errors: 0
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 26.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 44401 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t23422...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: unavailable
- OpenClaw timeline events: 0
- OpenClaw timeline parse errors: 0
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 3135ms
  - resource samples: 5
  - peak sampled RSS: 691.8 MB
  - max sampled CPU: 140.8%
  - role peaks: 
  - top CPU: pid 44900 138% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/resource-samples/cold-agent-turn-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 11
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 47.4ms
- most expensive repeated span: plugins.metadata.scan 5x 88.67ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 41ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2848ms
  - resource samples: 4
  - peak sampled RSS: 705.2 MB
  - max sampled CPU: 137.8%
  - role peaks: 
  - top CPU: pid 45763 135% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/resource-samples/warm-agent-turn-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 22
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 48.18ms
- most expensive repeated span: plugins.metadata.scan 10x 181.9ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 41ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z' -- status`
  - status: 0
  - duration: 2181ms
  - resource samples: 4
  - peak sampled RSS: 683.9 MB
  - max sampled CPU: 140.9%
  - role peaks: 
  - top CPU: pid 46368 139% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/resource-samples/post-agent-health-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 28
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 48.18ms
- most expensive repeated span: plugins.metadata.scan 13x 250.93ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 41ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 12ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 70ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 46802 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 28
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 48.18ms
- most expensive repeated span: plugins.metadata.scan 13x 250.93ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 41ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1368ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 782.9 MB
- Tracked total peak RSS: 782.9 MB
- Max CPU: 146.7%
- Resource samples: 22
- Command tree peak RSS: 782.9 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 782.9 MB; CPU 146.7%
  - agent-process: RSS 782.9 MB; CPU 146.7%
  - command-tree: RSS 782.9 MB; CPU 146.7%
  - status-cli: RSS 611.2 MB; CPU 139.9%
  - uncategorized: RSS 27.6 MB; CPU 0%
  - mock-provider: RSS 23.6 MB; CPU 0%
- Cold ready: 71 ms
- Warm ready: unknown ms
- Time to listening: unknown ms
- Time to health ready: unknown ms
- Readiness classification: unknown
- TCP connect max: unknown ms
- Missing dependency errors: 0
- Final gateway state: disabled
- Health failures: 0
- Health p95: unknown ms
- Readiness failures: 0
- Gateway restarts: 0
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (28 events, 0 parse errors)
- Slowest OpenClaw span: plugins.metadata.scan 68.65 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 68.65ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 48 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 48 ms
- Agent turn: 3540 ms (true)
- Agent cold/warm: cold 3448 ms; warm 3540 ms; delta 0 ms
- Agent pre-provider: cold 3316 ms; warm 3377 ms; delta 0 ms
- Agent provider final: cold 3 ms; warm 1 ms
- Agent turn stats: count 2; p95 3535.4 ms; max 3540 ms; pre-provider p95 3373.95 ms
- Provider evidence: 1 request(s); provider work 1 ms; pre-provider 3377 ms; post-provider 162 ms
- Agent latency diagnosis: warm agent turn 3540ms; pre-provider 3377ms; provider 1ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 3448 ms; pre-provider 3316 ms; provider 3 ms; post-provider 129 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 3316ms; provider 3ms; post-provider 129ms; unknown 3316ms; source none
  - warm: total 3540 ms; pre-provider 3377 ms; provider 1 ms; post-provider 162 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 3377ms; provider 1ms; post-provider 162ms; unknown 3377ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1166ms; RSS at 3217ms
- Diagnostic correlation:
  - CPU peaked at 146.7% around 1166ms
  - RSS peaked at 782.9 MB around 3217ms
  - Slowest OpenClaw span: plugins.metadata.scan 68.65ms
  - Provider/model timing max: 48ms
- Top CPU process: pid 48362 143% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 49226 719.8 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 142ms
  - resource samples: 2
  - peak sampled RSS: 23.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 47373 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --no-service --json`
  - status: 0
  - duration: 71ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 47625 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: unavailable
- OpenClaw timeline events: 0
- OpenClaw timeline parse errors: 0
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 67ms
  - resource samples: 2
  - peak sampled RSS: 27.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 47878 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t23422...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: unavailable
- OpenClaw timeline events: 0
- OpenClaw timeline parse errors: 0
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 3448ms
  - resource samples: 5
  - peak sampled RSS: 700.7 MB
  - max sampled CPU: 146.7%
  - role peaks: 
  - top CPU: pid 48362 143% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/resource-samples/cold-agent-turn-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 11
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 68.65ms
- most expensive repeated span: plugins.metadata.scan 5x 116.24ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 45ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 15ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 12ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 3540ms
  - resource samples: 5
  - peak sampled RSS: 782.9 MB
  - max sampled CPU: 141.8%
  - role peaks: 
  - top CPU: pid 49226 139% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/resource-samples/warm-agent-turn-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 22
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 68.65ms
- most expensive repeated span: plugins.metadata.scan 10x 231.36ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 48ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 15ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z' -- status`
  - status: 0
  - duration: 2355ms
  - resource samples: 4
  - peak sampled RSS: 611.2 MB
  - max sampled CPU: 139.9%
  - role peaks: 
  - top CPU: pid 49970 138% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/resource-samples/post-agent-health-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 28
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 68.65ms
- most expensive repeated span: plugins.metadata.scan 13x 317.79ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 48ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 64ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 50398 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 28
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 68.65ms
- most expensive repeated span: plugins.metadata.scan 13x 317.79ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 48ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 977ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 811.7 MB
- Tracked total peak RSS: 811.7 MB
- Max CPU: 138.3%
- Resource samples: 20
- Command tree peak RSS: 811.7 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 811.7 MB; CPU 138.3%
  - agent-process: RSS 811.7 MB; CPU 138.3%
  - command-tree: RSS 811.7 MB; CPU 138.3%
  - status-cli: RSS 538.1 MB; CPU 137.7%
  - uncategorized: RSS 26.8 MB; CPU 0%
  - mock-provider: RSS 21.7 MB; CPU 0%
- Cold ready: 56 ms
- Warm ready: unknown ms
- Time to listening: unknown ms
- Time to health ready: unknown ms
- Readiness classification: unknown
- TCP connect max: unknown ms
- Missing dependency errors: 0
- Final gateway state: disabled
- Health failures: 0
- Health p95: unknown ms
- Readiness failures: 0
- Gateway restarts: 0
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (28 events, 0 parse errors)
- Slowest OpenClaw span: plugins.metadata.scan 52.43 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 52.43ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 54 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 54 ms
- Agent turn: 3310 ms (true)
- Agent cold/warm: cold 3310 ms; warm 2954 ms; delta 356 ms
- Agent pre-provider: cold 3173 ms; warm 2841 ms; delta 332 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 3292.2 ms; max 3310 ms; pre-provider p95 3156.4 ms
- Provider evidence: 1 request(s); provider work 2 ms; pre-provider 3173 ms; post-provider 135 ms
- Agent latency diagnosis: cold agent turn 3310ms; pre-provider 3173ms; provider 2ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 3310 ms; pre-provider 3173 ms; provider 2 ms; post-provider 135 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 3173ms; provider 2ms; post-provider 135ms; unknown 3173ms; source none
  - warm: total 2954 ms; pre-provider 2841 ms; provider 1 ms; post-provider 112 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2841ms; provider 1ms; post-provider 112ms; unknown 2841ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 3142ms; RSS at 3142ms
- Diagnostic correlation:
  - CPU peaked at 138.3% around 3142ms
  - RSS peaked at 811.7 MB around 3142ms
  - Slowest OpenClaw span: plugins.metadata.scan 52.43ms
  - Provider/model timing max: 54ms
- Top CPU process: pid 51970 137% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 51970 748.4 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 146ms
  - resource samples: 2
  - peak sampled RSS: 21.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 50969 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --no-service --json`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 51221 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: unavailable
- OpenClaw timeline events: 0
- OpenClaw timeline parse errors: 0
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 1ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 26.8 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 51474 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t23422...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: unavailable
- OpenClaw timeline events: 0
- OpenClaw timeline parse errors: 0
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 3310ms
  - resource samples: 5
  - peak sampled RSS: 811.7 MB
  - max sampled CPU: 138.3%
  - role peaks: 
  - top CPU: pid 51970 137% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/resource-samples/cold-agent-turn-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 11
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 50.29ms
- most expensive repeated span: plugins.metadata.scan 5x 109.68ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 54ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2954ms
  - resource samples: 4
  - peak sampled RSS: 685.3 MB
  - max sampled CPU: 136.9%
  - role peaks: 
  - top CPU: pid 52819 135% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/resource-samples/warm-agent-turn-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 22
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 52.43ms
- most expensive repeated span: plugins.metadata.scan 10x 205.1ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 54ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z' -- status`
  - status: 0
  - duration: 1907ms
  - resource samples: 3
  - peak sampled RSS: 538.1 MB
  - max sampled CPU: 137.7%
  - role peaks: 
  - top CPU: pid 53448 134% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/resource-samples/post-agent-health-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 28
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 52.43ms
- most expensive repeated span: plugins.metadata.scan 13x 266.96ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 54ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 53757 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 0
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 28
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 52.43ms
- most expensive repeated span: plugins.metadata.scan 13x 266.96ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 54ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 837ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 875.8 MB
- Tracked total peak RSS: 1447.1 MB
- Max CPU: 100%
- Resource samples: 25
- Command tree peak RSS: 571.6 MB
- Gateway peak RSS: 875.8 MB
- Resource by role:
  - gateway: RSS 875.8 MB; CPU 100%
  - gateway-tree: RSS 875.8 MB; CPU 71%
  - command-tree: RSS 571.6 MB; CPU 143.8%
  - status-cli: RSS 571.6 MB; CPU 140.8%
  - plugin-cli: RSS 517.6 MB; CPU 142.7%
  - model-cli: RSS 493.4 MB; CPU 143.8%
- Cold ready: 60 ms
- Warm ready: 91 ms
- Time to listening: 6034 ms
- Time to health ready: 6200 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 58 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (225 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 182.83 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 182.83ms open 0; plugins.metadata.scan max 37.27ms open 0; config.normalize max 5.8ms open 0
- OpenClaw event-loop max: 0 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 0 ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: true (cold installs 0; warm restages 0; warm max unknown ms)
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
- Resource peaks: CPU at 1064ms; RSS at 1064ms
- Diagnostic correlation:
  - CPU peaked at 204% around 1064ms
  - RSS peaked at 1447.1 MB around 1064ms
  - Slowest OpenClaw span: gateway.ready 182.83ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 55812 141% command-tree,model-cli openclaw
- Top RSS process: pid 54953 875.8 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 141ms
  - resource samples: 2
  - peak sampled RSS: 24.2 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 54328 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 54580 0% command-tree,runtime-management ocm start kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z --ru...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 17.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 54831 0% command-tree,status-cli ocm service status kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 54953
- gateway port: 18789
- RSS: 85.2 MB
- CPU: 100%
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6034ms
- time to health ready: 6200ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 35ms / 35ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 182.83ms
- most expensive repeated span: plugins.metadata.scan 4x 76.32ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 6200ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 738.9 MB
  - max sampled CPU: 61.7%
  - role peaks: 
  - top CPU: pid 54953 61.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 54953
- gateway port: 18789
- RSS: 708.7 MB
- CPU: 61.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 32ms
- health samples: 3/3 ok
- health latency p95/max: 32ms / 32ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 182.83ms
- most expensive repeated span: plugins.metadata.scan 5x 89.88ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 94ms
  - resource samples: 2
  - peak sampled RSS: 738.3 MB
  - max sampled CPU: 60.6%
  - role peaks: 
  - top CPU: pid 54953 60.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 54953
- gateway port: 18789
- RSS: 731.3 MB
- CPU: 61.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 415ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 58ms / 58ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 182.83ms
- most expensive repeated span: plugins.metadata.scan 7x 131.38ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 11ms, artifacts 0
  - readiness: PASS, 415ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' -- status`
  - status: 0
  - duration: 1985ms
  - resource samples: 3
  - peak sampled RSS: 1447.1 MB
  - max sampled CPU: 204%
  - role peaks: 
  - top CPU: pid 55532 138% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' -- plugins list`
  - status: 0
  - duration: 1827ms
  - resource samples: 3
  - peak sampled RSS: 1393.3 MB
  - max sampled CPU: 195.3%
  - role peaks: 
  - top CPU: pid 55672 139% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' -- models list`
  - status: 0
  - duration: 1183ms
  - resource samples: 3
  - peak sampled RSS: 1369.1 MB
  - max sampled CPU: 189.3%
  - role peaks: 
  - top CPU: pid 55812 141% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 54953
- gateway port: 18789
- RSS: 875.7 MB
- CPU: 45%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 2ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 182.83ms
- most expensive repeated span: plugins.metadata.scan 17x 311.83ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 14ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z'`
  - status: 0
  - duration: 91ms
  - resource samples: 2
  - peak sampled RSS: 880.8 MB
  - max sampled CPU: 43.3%
  - role peaks: 
  - top CPU: pid 54953 43.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 91ms
  - resource samples: 2
  - peak sampled RSS: 880.7 MB
  - max sampled CPU: 43%
  - role peaks: 
  - top CPU: pid 54953 43% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 54953
- gateway port: 18789
- RSS: 875.8 MB
- CPU: 42.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 15000ms / 45000ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 2ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 182.83ms
- most expensive repeated span: plugins.metadata.scan 17x 311.83ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 16ms, artifacts 0
  - process: PASS, 8ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 12ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 72ms
  - resource samples: 2
  - peak sampled RSS: 875.8 MB
  - max sampled CPU: 39.8%
  - role peaks: 
  - top CPU: pid 54953 39.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 54953
- gateway port: 18789
- RSS: 875.8 MB
- CPU: 39.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 3ms / 3ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 182.83ms
- most expensive repeated span: plugins.metadata.scan 17x 311.83ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 14ms, artifacts 0
  - process: PASS, 9ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1639ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 836.2 MB
- Tracked total peak RSS: 1399.4 MB
- Max CPU: 100%
- Resource samples: 25
- Command tree peak RSS: 563.2 MB
- Gateway peak RSS: 836.2 MB
- Resource by role:
  - gateway: RSS 836.2 MB; CPU 100%
  - gateway-tree: RSS 836.2 MB; CPU 100%
  - command-tree: RSS 563.2 MB; CPU 143.8%
  - plugin-cli: RSS 563.2 MB; CPU 137.8%
  - status-cli: RSS 556.4 MB; CPU 137.8%
  - model-cli: RSS 535.5 MB; CPU 143.8%
- Cold ready: 79 ms
- Warm ready: 59 ms
- Time to listening: 6787 ms
- Time to health ready: 6870 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 44 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (223 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 201.31 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 201.31ms open 0; plugins.metadata.scan max 42.37ms open 0; config.normalize max 3.86ms open 0
- OpenClaw event-loop max: 20.01 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 20.01 ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: true (cold installs 0; warm restages 0; warm max unknown ms)
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
- Resource peaks: CPU at 1063ms; RSS at 1059ms
- Diagnostic correlation:
  - CPU peaked at 195.8% around 1063ms
  - RSS peaked at 1399.4 MB around 1059ms
  - Slowest OpenClaw span: gateway.ready 201.31ms
  - Max structured event-loop delay: 20.01ms
- Top CPU process: pid 57989 141% command-tree,model-cli openclaw
- Top RSS process: pid 57132 836.2 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 164ms
  - resource samples: 2
  - peak sampled RSS: 30.1 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 56607 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 79ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 56859 0% command-tree,runtime-management ocm start kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z --ru...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 71ms
  - resource samples: 2
  - peak sampled RSS: 58.7 MB
  - max sampled CPU: 100%
  - role peaks: 
  - top CPU: pid 57132 100% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 57132
- gateway port: 18789
- RSS: 73.9 MB
- CPU: 100%
- readiness: ready after 28 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6787ms
- time to health ready: 6870ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 36ms / 36ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 201.31ms
- most expensive repeated span: plugins.metadata.scan 4x 80.18ms
- OpenClaw event-loop max: 20.01ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 6870ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 687.6 MB
  - max sampled CPU: 55%
  - role peaks: 
  - top CPU: pid 57132 55% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 57132
- gateway port: 18789
- RSS: 657.8 MB
- CPU: 54.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 27ms
- health samples: 3/3 ok
- health latency p95/max: 27ms / 27ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 201.31ms
- most expensive repeated span: plugins.metadata.scan 5x 93.42ms
- OpenClaw event-loop max: 20.01ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 96ms
  - resource samples: 2
  - peak sampled RSS: 688.5 MB
  - max sampled CPU: 54.6%
  - role peaks: 
  - top CPU: pid 57132 54.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 57132
- gateway port: 18789
- RSS: 674.8 MB
- CPU: 55%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 472ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 44ms / 44ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 203
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 201.31ms
- most expensive repeated span: plugins.metadata.scan 6x 126.07ms
- OpenClaw event-loop max: 20.01ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 13ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 472ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' -- status`
  - status: 0
  - duration: 2001ms
  - resource samples: 3
  - peak sampled RSS: 1392.3 MB
  - max sampled CPU: 195.8%
  - role peaks: 
  - top CPU: pid 57682 135% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' -- plugins list`
  - status: 0
  - duration: 1711ms
  - resource samples: 3
  - peak sampled RSS: 1399.4 MB
  - max sampled CPU: 186.7%
  - role peaks: 
  - top CPU: pid 57834 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' -- models list`
  - status: 0
  - duration: 1151ms
  - resource samples: 3
  - peak sampled RSS: 1371.7 MB
  - max sampled CPU: 186.8%
  - role peaks: 
  - top CPU: pid 57989 141% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 57132
- gateway port: 18789
- RSS: 836.2 MB
- CPU: 42.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 2ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 223
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 201.31ms
- most expensive repeated span: plugins.metadata.scan 16x 297.39ms
- OpenClaw event-loop max: 20.01ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z'`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 841.3 MB
  - max sampled CPU: 41.1%
  - role peaks: 
  - top CPU: pid 57132 41.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 841.2 MB
  - max sampled CPU: 40.9%
  - role peaks: 
  - top CPU: pid 57132 40.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 57132
- gateway port: 18789
- RSS: 836.2 MB
- CPU: 40.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 15000ms / 45000ms
- time to listening: 1ms
- time to health ready: 1ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 223
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 201.31ms
- most expensive repeated span: plugins.metadata.scan 16x 297.39ms
- OpenClaw event-loop max: 20.01ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 836.2 MB
  - max sampled CPU: 38%
  - role peaks: 
  - top CPU: pid 57132 38% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 57132
- gateway port: 18789
- RSS: 836.2 MB
- CPU: 37.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 223
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 201.31ms
- most expensive repeated span: plugins.metadata.scan 16x 297.39ms
- OpenClaw event-loop max: 20.01ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1196ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 858.6 MB
- Tracked total peak RSS: 1430.6 MB
- Max CPU: 100%
- Resource samples: 26
- Command tree peak RSS: 572.3 MB
- Gateway peak RSS: 858.6 MB
- Resource by role:
  - gateway: RSS 858.6 MB; CPU 100%
  - gateway-tree: RSS 858.6 MB; CPU 75%
  - command-tree: RSS 572.3 MB; CPU 145.7%
  - status-cli: RSS 572.3 MB; CPU 145.7%
  - plugin-cli: RSS 504.1 MB; CPU 143.4%
  - model-cli: RSS 467.5 MB; CPU 140.7%
- Cold ready: 52 ms
- Warm ready: 66 ms
- Time to listening: 5770 ms
- Time to health ready: 5797 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 42 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (228 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 150.1 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 150.1ms open 0; plugins.metadata.scan max 43.15ms open 0; config.normalize max 4.71ms open 0
- OpenClaw event-loop max: 0 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 0 ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: true (cold installs 0; warm restages 0; warm max unknown ms)
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
- Resource peaks: CPU at 1071ms; RSS at 1071ms
- Diagnostic correlation:
  - CPU peaked at 205.6% around 1071ms
  - RSS peaked at 1430.6 MB around 1071ms
  - Slowest OpenClaw span: gateway.ready 150.1ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 59843 142% command-tree,status-cli openclaw
- Top RSS process: pid 59291 858.6 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 132ms
  - resource samples: 2
  - peak sampled RSS: 24.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 58764 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z" does not exist
- collectors:
  - service: FAIL, 1ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' --runtime 'kova-local-1783640544668' --json`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 59016 0% command-tree,runtime-management ocm start kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z --ru...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 68.5 MB
  - max sampled CPU: 75%
  - role peaks: 
  - top CPU: pid 59291 75% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 59291
- gateway port: 18789
- RSS: 78.7 MB
- CPU: 100%
- readiness: ready after 24 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 5770ms
- time to health ready: 5797ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 32ms / 32ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 150.1ms
- most expensive repeated span: plugins.metadata.scan 4x 78.8ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 5797ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/port'`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 743.5 MB
  - max sampled CPU: 55.4%
  - role peaks: 
  - top CPU: pid 59291 55.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 59291
- gateway port: 18789
- RSS: 717.5 MB
- CPU: 54.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 12ms
- health samples: 3/3 ok
- health latency p95/max: 12ms / 12ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 150.1ms
- most expensive repeated span: plugins.metadata.scan 5x 90.83ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 86ms
  - resource samples: 2
  - peak sampled RSS: 760.2 MB
  - max sampled CPU: 54.3%
  - role peaks: 
  - top CPU: pid 59291 54.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 59291
- gateway port: 18789
- RSS: 734.5 MB
- CPU: 54.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 368ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 42ms / 42ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 150.1ms
- most expensive repeated span: plugins.metadata.scan 7x 131.01ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 13ms, artifacts 0
  - process: PASS, 8ms, artifacts 0
  - readiness: PASS, 368ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' -- status`
  - status: 0
  - duration: 1967ms
  - resource samples: 3
  - peak sampled RSS: 1430.6 MB
  - max sampled CPU: 205.6%
  - role peaks: 
  - top CPU: pid 59843 142% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' -- plugins list`
  - status: 0
  - duration: 2097ms
  - resource samples: 4
  - peak sampled RSS: 1362.7 MB
  - max sampled CPU: 191.3%
  - role peaks: 
  - top CPU: pid 59992 142% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' -- models list`
  - status: 0
  - duration: 1357ms
  - resource samples: 3
  - peak sampled RSS: 1326.1 MB
  - max sampled CPU: 182.4%
  - role peaks: 
  - top CPU: pid 60138 137% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 59291
- gateway port: 18789
- RSS: 858.6 MB
- CPU: 40.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 150.1ms
- most expensive repeated span: plugins.metadata.scan 17x 333.7ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 12ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z'`
  - status: 0
  - duration: 66ms
  - resource samples: 2
  - peak sampled RSS: 863.8 MB
  - max sampled CPU: 39.2%
  - role peaks: 
  - top CPU: pid 59291 39.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' --json`
  - status: 0
  - duration: 65ms
  - resource samples: 2
  - peak sampled RSS: 863.4 MB
  - max sampled CPU: 39%
  - role peaks: 
  - top CPU: pid 59291 39% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 59291
- gateway port: 18789
- RSS: 858.6 MB
- CPU: 38.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 15000ms / 45000ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 1ms / 1ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 150.1ms
- most expensive repeated span: plugins.metadata.scan 17x 333.7ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 68ms
  - resource samples: 2
  - peak sampled RSS: 858.6 MB
  - max sampled CPU: 36.2%
  - role peaks: 
  - top CPU: pid 59291 36.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T234224Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 59291
- gateway port: 18789
- RSS: 858.6 MB
- CPU: 36%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 29ms
- health samples: 3/3 ok
- health latency p95/max: 29ms / 29ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
- Node profile artifact bytes: 0
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 150.1ms
- most expensive repeated span: plugins.metadata.scan 17x 333.7ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t234224z' --yes`
- cleanup status: 0
- cleanup duration: 1727ms

