# Kova OpenClaw Runtime Report

Generated: 2026-07-09T22:47:11.906Z
Run ID: `kova-2026-07-09T224004Z`
Mode: execution
Platform: linux 6.6.141 (x64) · v24.13.0

## Release Decision

- Verdict: PARTIAL
- Coverage: partial
- Blocking / warnings / info: 0 / 26 / 64
- Markdown report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-2026-07-09T224004Z-release.md
- JSON report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-2026-07-09T224004Z-release.json
- Retained gate artifacts: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/release-gates/kova-2026-07-09t224004z

Top findings:
- WARNING gate: Required release gate surface coverage failure-containment was not present in the report.
- WARNING gate: Required release gate surface coverage soak was not present in the report.
- WARNING gate: Required release gate surface coverage workspace-scan was not present in the report.

This is a filtered gate slice. It can reject a release from selected-scenario failures, but it cannot approve the full release gate.

## Summary

- Total scenarios: 18
- PASS: 18

## Release Gate

- Verdict: PARTIAL
- Complete: no
- Partial: yes
- Missing required coverage/items: 64
- Blocking: 0
- Warnings: 26
- Info: 64

### Subsystems

- Kova: 0 blocking, 26 warning
  - primary: Required release gate surface coverage failure-containment was not present in the report.

### Fixer Briefs

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

Info cards omitted from Markdown: 64. See JSON report for full gate coverage details.

## Performance

- Repeat: 3
- Groups: 6
- Unstable groups: 5
- Profiled runs: 0
- fresh-install/fresh: 3 sample(s); timeToHealthReadyMs median 6794ms p95 6804.8ms max 6806ms; peakRssMb median 830.3MB p95 898.52MB max 906.1MB; cpuPercentMax median 64.7% p95 117.17% max 123% unstable; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 6774ms p95 6784.8ms max 6786ms
- fresh-install/onboarded-user: 3 sample(s); timeToHealthReadyMs median 6556ms p95 6812.5ms max 6841ms; peakRssMb median 855.7MB p95 869.11MB max 870.6MB; cpuPercentMax median 67.1% p95 78.26% max 79.5%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 6539ms p95 6765.8ms max 6791ms
- bundled-runtime-deps/missing-plugin-index: 3 sample(s); timeToHealthReadyMs median 6076ms p95 7335.1ms max 7475ms; peakRssMb median 872.7MB p95 893.94MB max 896.3MB; cpuPercentMax median 73.6% p95 75.49% max 75.7%; openclawEventLoopMaxMs median 0ms p95 19.66ms max 21.84ms unstable; timeToListeningMs median 6028ms p95 7170.1ms max 7297ms
- bundled-plugin-startup/fresh: 3 sample(s); timeToHealthReadyMs median 2555ms p95 2919.5ms max 2960ms unstable; peakRssMb median 740.5MB p95 772.63MB max 776.2MB; cpuPercentMax median 142% p95 142% max 142%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 2511ms p95 2737.8ms max 2763ms unstable
- agent-cold-warm-message/mock-openai-provider: 3 sample(s); peakRssMb median 725.6MB p95 813.98MB max 823.8MB; cpuPercentMax median 138.9% p95 141.51% max 141.8%; agentTurnMs median 3145ms p95 3190ms max 3195ms; coldAgentTurnMs median 2898ms p95 2929.5ms max 2933ms; warmAgentTurnMs median 3145ms p95 3190ms max 3195ms
- gateway-performance/many-bundled-plugins: 3 sample(s); timeToHealthReadyMs median 5943ms p95 7155.3ms max 7290ms; peakRssMb median 864.6MB p95 868.47MB max 868.9MB; cpuPercentMax median 110% p95 123.5% max 125% unstable; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 5778ms p95 7135.2ms max 7286ms

## Resource Roles

- gateway: RSS 906.1 MB; CPU 142%; scenario fresh-install/fresh
- gateway-tree: RSS 906.1 MB; CPU 142%; scenario fresh-install/fresh
- command-tree: RSS 823.8 MB; CPU 147.6%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 823.8 MB; CPU 141.8%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 823.8 MB; CPU 141.8%; scenario agent-cold-warm-message/mock-openai-provider
- plugin-cli: RSS 718.5 MB; CPU 146.8%; scenario fresh-install/onboarded-user
- status-cli: RSS 665.8 MB; CPU 146.7%; scenario fresh-install/fresh
- model-cli: RSS 529.8 MB; CPU 147.6%; scenario fresh-install/fresh

## Target Cleanup

- Runtime: `kova-local-1783636804623`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1783636804623' --json`
- Exit: 0
- Duration: 451ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r1-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 800.4 MB
- Tracked total peak RSS: 1513.2 MB
- Max CPU: 123%
- Resource samples: 29
- Command tree peak RSS: 715.1 MB
- Gateway peak RSS: 800.4 MB
- Resource by role:
  - gateway: RSS 800.4 MB; CPU 123%
  - gateway-tree: RSS 800.4 MB; CPU 123%
  - command-tree: RSS 715.1 MB; CPU 141.8%
  - plugin-cli: RSS 715.1 MB; CPU 141.8%
  - status-cli: RSS 665.8 MB; CPU 124.8%
  - model-cli: RSS 522 MB; CPU 141.8%
- Cold ready: 941 ms
- Warm ready: unknown ms
- Time to listening: 6786 ms
- Time to health ready: 6794 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 28 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 171.18 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 171.18ms open 0; plugins.metadata.scan max 34.22ms open 0; config.normalize max 3.12ms open 0
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
- Resource peaks: CPU at 1062ms; RSS at 3071ms
- Diagnostic correlation:
  - CPU peaked at 185.6% around 1062ms
  - RSS peaked at 1513.2 MB around 3071ms
  - Slowest OpenClaw span: gateway.ready 171.18ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 21416 139% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 20693 800.4 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1783636804623' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1783636804623' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 122258ms
  - resource samples: 124
  - peak sampled RSS: 13050.7 MB
  - max sampled CPU: 351.9%
  - role peaks: 
  - top CPU: pid 17561 261% build-tooling,command-tree,runtime-management node /home/runner/_work/openclaw/openclaw/node_modules/.bin/vite build
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/resource-samples/target-setup-1.jsonl

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 138ms
  - resource samples: 2
  - peak sampled RSS: 20.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 20283 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r1-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 941ms
  - resource samples: 2
  - peak sampled RSS: 315 MB
  - max sampled CPU: 123%
  - role peaks: 
  - top CPU: pid 20693 123% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 20693
- gateway port: 18789
- RSS: 322.5 MB
- CPU: 125%
- readiness: ready after 28 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6786ms
- time to health ready: 6794ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 28ms / 28ms
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
- slowest OpenClaw span: gateway.ready 171.18ms
- most expensive repeated span: plugins.metadata.scan 4x 67.44ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 6794ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 657 MB
  - max sampled CPU: 47.7%
  - role peaks: 
  - top CPU: pid 20693 47.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 20693
- gateway port: 18789
- RSS: 628.9 MB
- CPU: 47.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 25ms
- health samples: 3/3 ok
- health latency p95/max: 25ms / 25ms
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
- slowest OpenClaw span: gateway.ready 171.18ms
- most expensive repeated span: plugins.metadata.scan 5x 79.34ms
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
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' --json`
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 82ms
  - resource samples: 2
  - peak sampled RSS: 642.4 MB
  - max sampled CPU: 47.6%
  - role peaks: 
  - top CPU: pid 20693 47.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' -- status`
  - status: 0
  - duration: 2352ms
  - resource samples: 4
  - peak sampled RSS: 1466.1 MB
  - max sampled CPU: 178.8%
  - role peaks: 
  - top CPU: pid 21216 123% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 20693
- gateway port: 18789
- RSS: 800.3 MB
- CPU: 50.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 0ms
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
- slowest OpenClaw span: gateway.ready 171.18ms
- most expensive repeated span: plugins.metadata.scan 10x 171.04ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' -- plugins list`
  - status: 0
  - duration: 1746ms
  - resource samples: 3
  - peak sampled RSS: 1326.3 MB
  - max sampled CPU: 185.6%
  - role peaks: 
  - top CPU: pid 21416 139% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5338ms
  - resource samples: 7
  - peak sampled RSS: 1513.2 MB
  - max sampled CPU: 175.2%
  - role peaks: 
  - top CPU: pid 21534 133% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 20693
- gateway port: 18789
- RSS: 379.1 MB
- CPU: 31.9%
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
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 171.18ms
- most expensive repeated span: plugins.metadata.scan 13x 235.76ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' -- models list`
  - status: 0
  - duration: 1138ms
  - resource samples: 3
  - peak sampled RSS: 901.2 MB
  - max sampled CPU: 171.3%
  - role peaks: 
  - top CPU: pid 21826 139% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 20693
- gateway port: 18789
- RSS: 379.2 MB
- CPU: 29.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 1ms
- tcp listening: ok in 1ms
- health: ok (200) in 0ms
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
- slowest OpenClaw span: gateway.ready 171.18ms
- most expensive repeated span: plugins.metadata.scan 18x 322.54ms
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

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' --tail 200 --raw`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 379.2 MB
  - max sampled CPU: 28.6%
  - role peaks: 
  - top CPU: pid 20693 28.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 20693
- gateway port: 18789
- RSS: 379.2 MB
- CPU: 28.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 0ms
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
- slowest OpenClaw span: gateway.ready 171.18ms
- most expensive repeated span: plugins.metadata.scan 18x 322.54ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 379.2 MB
  - max sampled CPU: 27.1%
  - role peaks: 
  - top CPU: pid 20693 27.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r1-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 20693
- gateway port: 18789
- RSS: 379.2 MB
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
- slowest OpenClaw span: gateway.ready 171.18ms
- most expensive repeated span: plugins.metadata.scan 18x 322.54ms
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
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r1-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 1308ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r2-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 830.3 MB
- Tracked total peak RSS: 1526.5 MB
- Max CPU: 59.3%
- Resource samples: 27
- Command tree peak RSS: 696.2 MB
- Gateway peak RSS: 830.3 MB
- Resource by role:
  - gateway: RSS 830.3 MB; CPU 59.3%
  - gateway-tree: RSS 830.3 MB; CPU 59.3%
  - command-tree: RSS 696.2 MB; CPU 138.8%
  - plugin-cli: RSS 696.2 MB; CPU 138.8%
  - model-cli: RSS 522.2 MB; CPU 135.7%
  - status-cli: RSS 518.5 MB; CPU 120.6%
- Cold ready: 51 ms
- Warm ready: unknown ms
- Time to listening: 6774 ms
- Time to health ready: 6806 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 55 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 152.68 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 152.68ms open 0; plugins.metadata.scan max 47.02ms open 0; config.normalize max 3.31ms open 0
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
- Resource peaks: CPU at 1060ms; RSS at 4066ms
- Diagnostic correlation:
  - CPU peaked at 184.3% around 1060ms
  - RSS peaked at 1526.5 MB around 4066ms
  - Slowest OpenClaw span: gateway.ready 152.68ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 23758 136% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 23016 830.3 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 134ms
  - resource samples: 2
  - peak sampled RSS: 25.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 22511 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r2-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 22763 0% command-tree,runtime-management ocm start kova-fresh-install-fresh-r2-kova-2026-07-09t224004z --runtime kova-local-1783...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 23016
- gateway port: 18789
- RSS: 36.6 MB
- CPU: 0%
- readiness: ready after 28 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6774ms
- time to health ready: 6806ms
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
- slowest OpenClaw span: gateway.ready 152.68ms
- most expensive repeated span: plugins.metadata.scan 4x 75.94ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 6806ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 682.3 MB
  - max sampled CPU: 46.6%
  - role peaks: 
  - top CPU: pid 23016 46.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 23016
- gateway port: 18789
- RSS: 653.8 MB
- CPU: 46.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 55ms
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
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 152.68ms
- most expensive repeated span: plugins.metadata.scan 5x 91.33ms
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

- `ocm service status 'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' --json`
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 74ms
  - resource samples: 2
  - peak sampled RSS: 664.9 MB
  - max sampled CPU: 48.1%
  - role peaks: 
  - top CPU: pid 23016 48.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' -- status`
  - status: 0
  - duration: 2099ms
  - resource samples: 3
  - peak sampled RSS: 1348.4 MB
  - max sampled CPU: 179.9%
  - role peaks: 
  - top CPU: pid 23397 117% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 23016
- gateway port: 18789
- RSS: 830.2 MB
- CPU: 53.7%
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
- slowest OpenClaw span: gateway.ready 152.68ms
- most expensive repeated span: plugins.metadata.scan 10x 201.29ms
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
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' -- plugins list`
  - status: 0
  - duration: 1746ms
  - resource samples: 3
  - peak sampled RSS: 1365.1 MB
  - max sampled CPU: 184.3%
  - role peaks: 
  - top CPU: pid 23620 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 4881ms
  - resource samples: 6
  - peak sampled RSS: 1526.5 MB
  - max sampled CPU: 179.3%
  - role peaks: 
  - top CPU: pid 23758 136% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 23016
- gateway port: 18789
- RSS: 382.9 MB
- CPU: 33.8%
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
- slowest OpenClaw span: gateway.ready 152.68ms
- most expensive repeated span: plugins.metadata.scan 13x 266.36ms
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

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' -- models list`
  - status: 0
  - duration: 1182ms
  - resource samples: 3
  - peak sampled RSS: 905.1 MB
  - max sampled CPU: 166.7%
  - role peaks: 
  - top CPU: pid 24011 132% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 23016
- gateway port: 18789
- RSS: 382.9 MB
- CPU: 30.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 0ms
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
- slowest OpenClaw span: gateway.ready 152.68ms
- most expensive repeated span: plugins.metadata.scan 18x 359.5ms
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

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' --tail 200 --raw`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 382.9 MB
  - max sampled CPU: 30%
  - role peaks: 
  - top CPU: pid 23016 30% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 23016
- gateway port: 18789
- RSS: 382.9 MB
- CPU: 29.9%
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
- slowest OpenClaw span: gateway.ready 152.68ms
- most expensive repeated span: plugins.metadata.scan 18x 359.5ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 382.9 MB
  - max sampled CPU: 28.4%
  - role peaks: 
  - top CPU: pid 23016 28.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r2-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 23016
- gateway port: 18789
- RSS: 382.9 MB
- CPU: 28.3%
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
- slowest OpenClaw span: gateway.ready 152.68ms
- most expensive repeated span: plugins.metadata.scan 18x 359.5ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r2-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 1176ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r3-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 906.1 MB
- Tracked total peak RSS: 1590.4 MB
- Max CPU: 64.7%
- Resource samples: 28
- Command tree peak RSS: 690.7 MB
- Gateway peak RSS: 906.1 MB
- Resource by role:
  - gateway: RSS 906.1 MB; CPU 64.7%
  - gateway-tree: RSS 906.1 MB; CPU 64.7%
  - command-tree: RSS 690.7 MB; CPU 144.8%
  - plugin-cli: RSS 690.7 MB; CPU 140.8%
  - status-cli: RSS 541.8 MB; CPU 129.7%
  - model-cli: RSS 529.8 MB; CPU 144.8%
- Cold ready: 50 ms
- Warm ready: unknown ms
- Time to listening: 5769 ms
- Time to health ready: 5875 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 23
- Health p95: 18 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 144.33 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 144.33ms open 0; plugins.metadata.scan max 39.47ms open 0; config.normalize max 4.35ms open 0
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
- Resource peaks: CPU at 1107ms; RSS at 4064ms
- Diagnostic correlation:
  - CPU peaked at 194.4% around 1107ms
  - RSS peaked at 1590.4 MB around 4064ms
  - Slowest OpenClaw span: gateway.ready 144.33ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 26245 142% command-tree,model-cli openclaw
- Top RSS process: pid 25216 906.1 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 136ms
  - resource samples: 2
  - peak sampled RSS: 21.1 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 24710 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r3-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 24962 0% command-tree,runtime-management ocm start kova-fresh-install-fresh-r3-kova-2026-07-09t224004z --runtime kova-local-1783...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 24 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 5769ms
- time to health ready: 5875ms
- tcp listening: ok in 0ms
- health: ok (200) in 106ms
- health samples: 1/24 ok
- health latency p95/max: 1ms / 106ms
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
- slowest OpenClaw span: gateway.ready 144.33ms
- most expensive repeated span: plugins.metadata.scan 4x 72.67ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: PASS, 5875ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 681.1 MB
  - max sampled CPU: 55.1%
  - role peaks: 
  - top CPU: pid 25216 55.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 25216
- gateway port: 18789
- RSS: 653.5 MB
- CPU: 54.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 1ms
- tcp listening: ok in 1ms
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
- slowest OpenClaw span: gateway.ready 144.33ms
- most expensive repeated span: plugins.metadata.scan 5x 85.34ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' --json`
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 68ms
  - resource samples: 2
  - peak sampled RSS: 692.1 MB
  - max sampled CPU: 54.2%
  - role peaks: 
  - top CPU: pid 25216 54.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' -- status`
  - status: 0
  - duration: 1888ms
  - resource samples: 3
  - peak sampled RSS: 1447.5 MB
  - max sampled CPU: 194.4%
  - role peaks: 
  - top CPU: pid 25591 127% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 25216
- gateway port: 18789
- RSS: 905.9 MB
- CPU: 58.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 0ms
- health samples: 3/3 ok
- health latency p95/max: 0ms / 0ms
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
- slowest OpenClaw span: gateway.ready 144.33ms
- most expensive repeated span: plugins.metadata.scan 10x 172.52ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' -- plugins list`
  - status: 0
  - duration: 1640ms
  - resource samples: 3
  - peak sampled RSS: 1422.4 MB
  - max sampled CPU: 188.7%
  - role peaks: 
  - top CPU: pid 25826 136% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5314ms
  - resource samples: 7
  - peak sampled RSS: 1590.4 MB
  - max sampled CPU: 183.5%
  - role peaks: 
  - top CPU: pid 25957 138% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 25216
- gateway port: 18789
- RSS: 706.9 MB
- CPU: 32.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 0ms
- health samples: 3/3 ok
- health latency p95/max: 0ms / 0ms
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
- slowest OpenClaw span: gateway.ready 144.33ms
- most expensive repeated span: plugins.metadata.scan 13x 237.78ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' -- models list`
  - status: 0
  - duration: 1111ms
  - resource samples: 3
  - peak sampled RSS: 1236.7 MB
  - max sampled CPU: 174.6%
  - role peaks: 
  - top CPU: pid 26245 142% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 25216
- gateway port: 18789
- RSS: 706.9 MB
- CPU: 29.7%
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
- slowest OpenClaw span: gateway.ready 144.33ms
- most expensive repeated span: plugins.metadata.scan 18x 324.79ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' --tail 200 --raw`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 706.9 MB
  - max sampled CPU: 28.8%
  - role peaks: 
  - top CPU: pid 25216 28.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 25216
- gateway port: 18789
- RSS: 706.9 MB
- CPU: 28.7%
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
- slowest OpenClaw span: gateway.ready 144.33ms
- most expensive repeated span: plugins.metadata.scan 18x 324.79ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 706.9 MB
  - max sampled CPU: 27.2%
  - role peaks: 
  - top CPU: pid 25216 27.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-fresh-r3-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 25216
- gateway port: 18789
- RSS: 706.9 MB
- CPU: 27.1%
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
- slowest OpenClaw span: gateway.ready 144.33ms
- most expensive repeated span: plugins.metadata.scan 18x 324.79ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r3-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 1147ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 870.6 MB
- Tracked total peak RSS: 1573.8 MB
- Max CPU: 67.1%
- Resource samples: 29
- Command tree peak RSS: 703.7 MB
- Gateway peak RSS: 870.6 MB
- Resource by role:
  - gateway: RSS 870.6 MB; CPU 67.1%
  - gateway-tree: RSS 870.6 MB; CPU 67.1%
  - command-tree: RSS 703.7 MB; CPU 142.7%
  - plugin-cli: RSS 703.7 MB; CPU 141.8%
  - status-cli: RSS 572.4 MB; CPU 142.7%
  - model-cli: RSS 502.7 MB; CPU 141.7%
- Cold ready: 58 ms
- Warm ready: unknown ms
- Time to listening: 6019 ms
- Time to health ready: 6180 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 42 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 202.03 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 202.03ms open 0; plugins.metadata.scan max 44.33ms open 0; config.normalize max 3.29ms open 0
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
- Resource peaks: CPU at 1068ms; RSS at 3072ms
- Diagnostic correlation:
  - CPU peaked at 202% around 1068ms
  - RSS peaked at 1573.8 MB around 3072ms
  - Slowest OpenClaw span: gateway.ready 202.03ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 27995 139% command-tree,status-cli openclaw
- Top RSS process: pid 27379 870.6 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 135ms
  - resource samples: 2
  - peak sampled RSS: 25.2 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 26910 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 27162 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 27379
- gateway port: 18789
- RSS: 54.8 MB
- CPU: 66.6%
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6019ms
- time to health ready: 6180ms
- tcp listening: ok in 1ms
- health: ok (200) in 2ms
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
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 202.03ms
- most expensive repeated span: plugins.metadata.scan 4x 98.88ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 6180ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 66ms
  - resource samples: 2
  - peak sampled RSS: 806.1 MB
  - max sampled CPU: 57.9%
  - role peaks: 
  - top CPU: pid 27379 57.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 27379
- gateway port: 18789
- RSS: 781.1 MB
- CPU: 57.2%
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
- slowest OpenClaw span: gateway.ready 202.03ms
- most expensive repeated span: plugins.metadata.scan 5x 111.91ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 92ms
  - resource samples: 2
  - peak sampled RSS: 811.7 MB
  - max sampled CPU: 57%
  - role peaks: 
  - top CPU: pid 27379 57% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 27379
- gateway port: 18789
- RSS: 790.1 MB
- CPU: 57.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 389ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 24ms / 24ms
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
- slowest OpenClaw span: gateway.ready 202.03ms
- most expensive repeated span: plugins.metadata.scan 7x 150.86ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: PASS, 389ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 875 MB
  - max sampled CPU: 67.1%
  - role peaks: 
  - top CPU: pid 27379 67.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' -- status`
  - status: 0
  - duration: 1835ms
  - resource samples: 3
  - peak sampled RSS: 1442.7 MB
  - max sampled CPU: 202%
  - role peaks: 
  - top CPU: pid 27995 139% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 27379
- gateway port: 18789
- RSS: 870.5 MB
- CPU: 54.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 0ms
- health samples: 3/3 ok
- health latency p95/max: 0ms / 0ms
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
- slowest OpenClaw span: gateway.ready 202.03ms
- most expensive repeated span: plugins.metadata.scan 10x 192.78ms
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
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' -- plugins list`
  - status: 0
  - duration: 1660ms
  - resource samples: 3
  - peak sampled RSS: 1389.1 MB
  - max sampled CPU: 189.6%
  - role peaks: 
  - top CPU: pid 28169 139% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 4701ms
  - resource samples: 6
  - peak sampled RSS: 1573.8 MB
  - max sampled CPU: 183.7%
  - role peaks: 
  - top CPU: pid 28292 139% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 27379
- gateway port: 18789
- RSS: 663.9 MB
- CPU: 34.3%
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
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 202.03ms
- most expensive repeated span: plugins.metadata.scan 13x 259.89ms
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

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' -- models list`
  - status: 0
  - duration: 1183ms
  - resource samples: 3
  - peak sampled RSS: 1166.6 MB
  - max sampled CPU: 173.1%
  - role peaks: 
  - top CPU: pid 28578 138% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 27379
- gateway port: 18789
- RSS: 663.9 MB
- CPU: 31.2%
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
- slowest OpenClaw span: gateway.ready 202.03ms
- most expensive repeated span: plugins.metadata.scan 18x 353.89ms
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

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' --tail 200 --raw`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 663.9 MB
  - max sampled CPU: 30.4%
  - role peaks: 
  - top CPU: pid 27379 30.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 27379
- gateway port: 18789
- RSS: 663.9 MB
- CPU: 30.3%
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
- slowest OpenClaw span: gateway.ready 202.03ms
- most expensive repeated span: plugins.metadata.scan 18x 353.89ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 663.9 MB
  - max sampled CPU: 28.8%
  - role peaks: 
  - top CPU: pid 27379 28.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 27379
- gateway port: 18789
- RSS: 663.9 MB
- CPU: 28.7%
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
- slowest OpenClaw span: gateway.ready 202.03ms
- most expensive repeated span: plugins.metadata.scan 18x 353.89ms
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
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 1292ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 792.1 MB
- Tracked total peak RSS: 1497.4 MB
- Max CPU: 65.2%
- Resource samples: 30
- Command tree peak RSS: 718.5 MB
- Gateway peak RSS: 792.1 MB
- Resource by role:
  - gateway: RSS 792.1 MB; CPU 65.2%
  - gateway-tree: RSS 792.1 MB; CPU 65.2%
  - command-tree: RSS 718.5 MB; CPU 147.6%
  - plugin-cli: RSS 718.5 MB; CPU 146.8%
  - status-cli: RSS 527.8 MB; CPU 142.8%
  - model-cli: RSS 459.6 MB; CPU 147.6%
- Cold ready: 60 ms
- Warm ready: unknown ms
- Time to listening: 6539 ms
- Time to health ready: 6556 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 51 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (228 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 175.37 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 175.37ms open 0; plugins.metadata.scan max 45.38ms open 0; config.normalize max 3.74ms open 0
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
- Resource peaks: CPU at 1066ms; RSS at 2065ms
- Diagnostic correlation:
  - CPU peaked at 200.7% around 1066ms
  - RSS peaked at 1497.4 MB around 2065ms
  - Slowest OpenClaw span: gateway.ready 175.37ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 30664 143% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 29756 792.1 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 134ms
  - resource samples: 2
  - peak sampled RSS: 29.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 29255 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 29507 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 29756
- gateway port: 18789
- RSS: 52.5 MB
- CPU: 100%
- readiness: ready after 27 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6539ms
- time to health ready: 6556ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 51ms / 51ms
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
- slowest OpenClaw span: gateway.ready 175.37ms
- most expensive repeated span: plugins.metadata.scan 4x 85.11ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 6556ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 737.6 MB
  - max sampled CPU: 55.9%
  - role peaks: 
  - top CPU: pid 29756 55.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 29756
- gateway port: 18789
- RSS: 710 MB
- CPU: 55.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 25ms
- health samples: 3/3 ok
- health latency p95/max: 25ms / 25ms
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
- slowest OpenClaw span: gateway.ready 175.37ms
- most expensive repeated span: plugins.metadata.scan 5x 98.42ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 90ms
  - resource samples: 2
  - peak sampled RSS: 743.4 MB
  - max sampled CPU: 55.1%
  - role peaks: 
  - top CPU: pid 29756 55.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 29756
- gateway port: 18789
- RSS: 725.1 MB
- CPU: 56%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 420ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 47ms / 47ms
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
- slowest OpenClaw span: gateway.ready 175.37ms
- most expensive repeated span: plugins.metadata.scan 6x 128.88ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 9ms, artifacts 0
  - readiness: PASS, 420ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 796.9 MB
  - max sampled CPU: 65.2%
  - role peaks: 
  - top CPU: pid 29756 65.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' -- status`
  - status: 0
  - duration: 2067ms
  - resource samples: 4
  - peak sampled RSS: 1319.7 MB
  - max sampled CPU: 200.7%
  - role peaks: 
  - top CPU: pid 30332 139% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 29756
- gateway port: 18789
- RSS: 792.1 MB
- CPU: 52.8%
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
- OpenClaw timeline events: 209
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 175.37ms
- most expensive repeated span: plugins.metadata.scan 9x 176.47ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
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

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' -- plugins list`
  - status: 0
  - duration: 1978ms
  - resource samples: 3
  - peak sampled RSS: 1254.2 MB
  - max sampled CPU: 190.8%
  - role peaks: 
  - top CPU: pid 30516 140% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 4795ms
  - resource samples: 6
  - peak sampled RSS: 1497.4 MB
  - max sampled CPU: 186.8%
  - role peaks: 
  - top CPU: pid 30664 143% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 29756
- gateway port: 18789
- RSS: 643.2 MB
- CPU: 33%
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
- slowest OpenClaw span: gateway.ready 175.37ms
- most expensive repeated span: plugins.metadata.scan 12x 238.04ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' -- models list`
  - status: 0
  - duration: 1486ms
  - resource samples: 3
  - peak sampled RSS: 1102.8 MB
  - max sampled CPU: 178%
  - role peaks: 
  - top CPU: pid 30943 143% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 29756
- gateway port: 18789
- RSS: 643.2 MB
- CPU: 29.8%
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
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 175.37ms
- most expensive repeated span: plugins.metadata.scan 17x 365.1ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 15ms, artifacts 0
  - process: PASS, 9ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' --tail 200 --raw`
  - status: 0
  - duration: 75ms
  - resource samples: 2
  - peak sampled RSS: 643.2 MB
  - max sampled CPU: 29%
  - role peaks: 
  - top CPU: pid 29756 29% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 29756
- gateway port: 18789
- RSS: 643.2 MB
- CPU: 28.9%
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
- slowest OpenClaw span: gateway.ready 175.37ms
- most expensive repeated span: plugins.metadata.scan 17x 365.1ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 13ms, artifacts 0
  - process: PASS, 8ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 74ms
  - resource samples: 2
  - peak sampled RSS: 643.2 MB
  - max sampled CPU: 27.6%
  - role peaks: 
  - top CPU: pid 29756 27.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 29756
- gateway port: 18789
- RSS: 643.2 MB
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
- slowest OpenClaw span: gateway.ready 175.37ms
- most expensive repeated span: plugins.metadata.scan 17x 365.1ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 8ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 12ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 1666ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 855.7 MB
- Tracked total peak RSS: 1487.3 MB
- Max CPU: 79.5%
- Resource samples: 36
- Command tree peak RSS: 695.3 MB
- Gateway peak RSS: 855.7 MB
- Resource by role:
  - gateway: RSS 855.7 MB; CPU 79.5%
  - gateway-tree: RSS 855.7 MB; CPU 79.5%
  - command-tree: RSS 695.3 MB; CPU 145.8%
  - plugin-cli: RSS 695.3 MB; CPU 145.8%
  - status-cli: RSS 631.8 MB; CPU 141.9%
  - model-cli: RSS 477.2 MB; CPU 143.2%
- Cold ready: 69 ms
- Warm ready: unknown ms
- Time to listening: 6791 ms
- Time to health ready: 6841 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 194 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 191.14 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 191.14ms open 0; plugins.metadata.scan max 80.14ms open 0; config.normalize max 7.64ms open 0
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
- Resource peaks: CPU at 1079ms; RSS at 2083ms
- Diagnostic correlation:
  - CPU peaked at 208.6% around 1079ms
  - RSS peaked at 1487.3 MB around 2083ms
  - Slowest OpenClaw span: gateway.ready 191.14ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 32838 143% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 32025 855.7 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 147ms
  - resource samples: 2
  - peak sampled RSS: 25.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 31619 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 69ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 31871 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 32025
- gateway port: 18789
- RSS: 79.6 MB
- CPU: 87.5%
- readiness: ready after 28 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6791ms
- time to health ready: 6841ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 39ms / 39ms
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
- slowest OpenClaw span: gateway.ready 191.14ms
- most expensive repeated span: plugins.metadata.scan 4x 104.88ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 12ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: PASS, 6841ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 73ms
  - resource samples: 2
  - peak sampled RSS: 777.5 MB
  - max sampled CPU: 66.7%
  - role peaks: 
  - top CPU: pid 32025 66.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 32025
- gateway port: 18789
- RSS: 752.9 MB
- CPU: 65.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 3ms
- tcp listening: ok in 0ms
- health: ok (200) in 43ms
- health samples: 3/3 ok
- health latency p95/max: 43ms / 43ms
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
- slowest OpenClaw span: gateway.ready 191.14ms
- most expensive repeated span: plugins.metadata.scan 5x 128.32ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 13ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 3ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 19ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 121ms
  - resource samples: 2
  - peak sampled RSS: 784.3 MB
  - max sampled CPU: 66.4%
  - role peaks: 
  - top CPU: pid 32025 66.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 32025
- gateway port: 18789
- RSS: 768.2 MB
- CPU: 66.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 503ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 194ms / 194ms
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
- slowest OpenClaw span: gateway.ready 191.14ms
- most expensive repeated span: plugins.metadata.scan 7x 211.12ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 8ms, artifacts 0
  - readiness: PASS, 503ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 69ms
  - resource samples: 2
  - peak sampled RSS: 860.3 MB
  - max sampled CPU: 79.5%
  - role peaks: 
  - top CPU: pid 32025 79.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' -- status`
  - status: 0
  - duration: 2611ms
  - resource samples: 4
  - peak sampled RSS: 1487.3 MB
  - max sampled CPU: 208.6%
  - role peaks: 
  - top CPU: pid 32689 140% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 32025
- gateway port: 18789
- RSS: 855.7 MB
- CPU: 62.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 2ms
- tcp listening: ok in 1ms
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
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 191.14ms
- most expensive repeated span: plugins.metadata.scan 10x 281.95ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 16ms, artifacts 0
  - process: PASS, 9ms, artifacts 0
  - readiness: PASS, 3ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 13ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' -- plugins list`
  - status: 0
  - duration: 3168ms
  - resource samples: 5
  - peak sampled RSS: 1386.5 MB
  - max sampled CPU: 198.1%
  - role peaks: 
  - top CPU: pid 32838 143% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 7431ms
  - resource samples: 9
  - peak sampled RSS: 1331.3 MB
  - max sampled CPU: 189%
  - role peaks: 
  - top CPU: pid 33007 140% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 32025
- gateway port: 18789
- RSS: 636 MB
- CPU: 35.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 3ms
- tcp listening: ok in 0ms
- health: ok (200) in 3ms
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
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 191.14ms
- most expensive repeated span: plugins.metadata.scan 13x 418.09ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 16ms, artifacts 0
  - process: PASS, 9ms, artifacts 0
  - readiness: PASS, 3ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 16ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' -- models list`
  - status: 0
  - duration: 2711ms
  - resource samples: 4
  - peak sampled RSS: 994.9 MB
  - max sampled CPU: 176.3%
  - role peaks: 
  - top CPU: pid 33532 137% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 32025
- gateway port: 18789
- RSS: 385.1 MB
- CPU: 34.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 3ms
- tcp listening: ok in 0ms
- health: ok (200) in 3ms
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
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 191.14ms
- most expensive repeated span: plugins.metadata.scan 18x 660.86ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 22ms, artifacts 0
  - process: PASS, 13ms, artifacts 0
  - readiness: PASS, 3ms, artifacts 0
  - logs: PASS, 7ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 18ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' --tail 200 --raw`
  - status: 0
  - duration: 145ms
  - resource samples: 2
  - peak sampled RSS: 385.3 MB
  - max sampled CPU: 34%
  - role peaks: 
  - top CPU: pid 32025 34% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 32025
- gateway port: 18789
- RSS: 385.3 MB
- CPU: 33.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 3ms
- tcp listening: ok in 1ms
- health: ok (200) in 4ms
- health samples: 3/3 ok
- health latency p95/max: 4ms / 4ms
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
- slowest OpenClaw span: gateway.ready 191.14ms
- most expensive repeated span: plugins.metadata.scan 18x 660.86ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 18ms, artifacts 0
  - process: PASS, 12ms, artifacts 0
  - readiness: PASS, 3ms, artifacts 0
  - logs: PASS, 7ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 21ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 120ms
  - resource samples: 2
  - peak sampled RSS: 385.5 MB
  - max sampled CPU: 32.5%
  - role peaks: 
  - top CPU: pid 32025 32.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 32025
- gateway port: 18789
- RSS: 385.5 MB
- CPU: 32.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 3ms
- tcp listening: ok in 1ms
- health: ok (200) in 4ms
- health samples: 3/3 ok
- health latency p95/max: 5ms / 5ms
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
- slowest OpenClaw span: gateway.ready 191.14ms
- most expensive repeated span: plugins.metadata.scan 18x 660.86ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 21ms, artifacts 0
  - process: PASS, 14ms, artifacts 0
  - readiness: PASS, 3ms, artifacts 0
  - logs: PASS, 10ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 3ms, artifacts 1
  - diagnostics: PASS, 25ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 2824ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 817.7 MB
- Tracked total peak RSS: 822.7 MB
- Max CPU: 75.7%
- Resource samples: 14
- Command tree peak RSS: 30.3 MB
- Gateway peak RSS: 817.7 MB
- Resource by role:
  - gateway: RSS 817.7 MB; CPU 75.7%
  - gateway-tree: RSS 817.7 MB; CPU 75.7%
  - command-tree: RSS 30.3 MB; CPU 0%
  - runtime-staging: RSS 30.3 MB; CPU 0%
  - mock-provider: RSS 30.1 MB; CPU 0%
  - plugin-cli: RSS 6.6 MB; CPU 0%
- Cold ready: 95 ms
- Warm ready: 69 ms
- Time to listening: 7297 ms
- Time to health ready: 7475 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 102 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (205 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 223.91 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 223.91ms open 0; plugins.metadata.scan max 46.24ms open 0; config.normalize max 3.74ms open 0
- OpenClaw event-loop max: 21.84 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 21.84 ms
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
- Resource peaks: CPU at 68ms; RSS at 68ms
- Diagnostic correlation:
  - CPU peaked at 75.7% around 68ms
  - RSS peaked at 822.7 MB around 68ms
  - Slowest OpenClaw span: gateway.ready 223.91ms
  - Max structured event-loop delay: 21.84ms
- Top CPU process: pid 34627 75.7% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 34627 817.7 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 160ms
  - resource samples: 2
  - peak sampled RSS: 30.1 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 34236 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 4ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 95ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 34488 0% command-tree,runtime-management ocm start kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 34627
- gateway port: 18789
- RSS: 97 MB
- CPU: 118%
- readiness: ready after 30 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 7297ms
- time to health ready: 7475ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 62ms / 62ms
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
- slowest OpenClaw span: gateway.ready 223.91ms
- most expensive repeated span: plugins.metadata.scan 4x 89.72ms
- OpenClaw event-loop max: 21.84ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 17ms, artifacts 0
  - process: PASS, 8ms, artifacts 0
  - readiness: PASS, 7475ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 71ms
  - resource samples: 2
  - peak sampled RSS: 656.1 MB
  - max sampled CPU: 66.9%
  - role peaks: 
  - top CPU: pid 34627 66.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 34627
- gateway port: 18789
- RSS: 625.8 MB
- CPU: 66.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 3ms
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
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 223.91ms
- most expensive repeated span: plugins.metadata.scan 5x 103.7ms
- OpenClaw event-loop max: 21.84ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 5ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 15ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'missing-plugin-index' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 111ms
  - resource samples: 2
  - peak sampled RSS: 641.5 MB
  - max sampled CPU: 66.2%
  - role peaks: 
  - top CPU: pid 34627 66.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 34627
- gateway port: 18789
- RSS: 646.8 MB
- CPU: 66.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 0ms
- time to health ready: 411ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 102ms / 102ms
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
- slowest OpenClaw span: gateway.ready 223.91ms
- most expensive repeated span: plugins.metadata.scan 7x 157.95ms
- OpenClaw event-loop max: 21.84ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 15ms, artifacts 0
  - process: PASS, 11ms, artifacts 0
  - readiness: PASS, 411ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z'`
  - status: 0
  - duration: 69ms
  - resource samples: 2
  - peak sampled RSS: 822.7 MB
  - max sampled CPU: 75.7%
  - role peaks: 
  - top CPU: pid 34627 75.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 822.6 MB
  - max sampled CPU: 75.1%
  - role peaks: 
  - top CPU: pid 34627 75.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 34627
- gateway port: 18789
- RSS: 817.7 MB
- CPU: 74.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 20000ms / 60000ms
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
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 223.91ms
- most expensive repeated span: plugins.metadata.scan 7x 157.95ms
- OpenClaw event-loop max: 21.84ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 817.7 MB
  - max sampled CPU: 67.5%
  - role peaks: 
  - top CPU: pid 34627 67.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 34627
- gateway port: 18789
- RSS: 817.7 MB
- CPU: 67.1%
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
- slowest OpenClaw span: gateway.ready 223.91ms
- most expensive repeated span: plugins.metadata.scan 7x 157.95ms
- OpenClaw event-loop max: 21.84ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 1349ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 896.3 MB
- Tracked total peak RSS: 901.3 MB
- Max CPU: 71.6%
- Resource samples: 14
- Command tree peak RSS: 32.4 MB
- Gateway peak RSS: 896.3 MB
- Resource by role:
  - gateway: RSS 896.3 MB; CPU 71.6%
  - gateway-tree: RSS 896.3 MB; CPU 71.6%
  - command-tree: RSS 32.4 MB; CPU 0%
  - runtime-staging: RSS 32.4 MB; CPU 0%
  - mock-provider: RSS 24.5 MB; CPU 0%
  - plugin-cli: RSS 6.8 MB; CPU 0%
- Cold ready: 55 ms
- Warm ready: 53 ms
- Time to listening: 6028 ms
- Time to health ready: 6076 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 24
- Health p95: 76 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (205 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 176.82 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 176.82ms open 0; plugins.metadata.scan max 44.27ms open 0; config.normalize max 3.86ms open 0
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
- Resource peaks: CPU at 52ms; RSS at 52ms
- Diagnostic correlation:
  - CPU peaked at 71.6% around 52ms
  - RSS peaked at 901.3 MB around 52ms
  - Slowest OpenClaw span: gateway.ready 176.82ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 36343 71.6% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 36343 896.3 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 140ms
  - resource samples: 2
  - peak sampled RSS: 24.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 35837 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 36089 0% command-tree,runtime-management ocm start kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 6028ms
- time to health ready: 6076ms
- tcp listening: ok in 1ms
- health: ok (200) in 48ms
- health samples: 1/25 ok
- health latency p95/max: 1ms / 48ms
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
- slowest OpenClaw span: gateway.ready 176.82ms
- most expensive repeated span: plugins.metadata.scan 4x 88.28ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: PASS, 6076ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 70ms
  - resource samples: 2
  - peak sampled RSS: 691.9 MB
  - max sampled CPU: 60%
  - role peaks: 
  - top CPU: pid 36343 60% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 36343
- gateway port: 18789
- RSS: 659.5 MB
- CPU: 59.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 2ms
- tcp listening: ok in 1ms
- health: ok (200) in 8ms
- health samples: 3/3 ok
- health latency p95/max: 8ms / 8ms
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
- slowest OpenClaw span: gateway.ready 176.82ms
- most expensive repeated span: plugins.metadata.scan 5x 100.87ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'missing-plugin-index' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 78ms
  - resource samples: 2
  - peak sampled RSS: 690.7 MB
  - max sampled CPU: 59.2%
  - role peaks: 
  - top CPU: pid 36343 59.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 36343
- gateway port: 18789
- RSS: 700.8 MB
- CPU: 59.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 0ms
- time to health ready: 446ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 76ms / 76ms
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
- slowest OpenClaw span: gateway.ready 176.82ms
- most expensive repeated span: plugins.metadata.scan 7x 143.32ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 13ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: PASS, 446ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z'`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 901.3 MB
  - max sampled CPU: 71.6%
  - role peaks: 
  - top CPU: pid 36343 71.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 901.1 MB
  - max sampled CPU: 71.1%
  - role peaks: 
  - top CPU: pid 36343 71.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 36343
- gateway port: 18789
- RSS: 896.2 MB
- CPU: 70.4%
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
- slowest OpenClaw span: gateway.ready 176.82ms
- most expensive repeated span: plugins.metadata.scan 7x 143.32ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 896.3 MB
  - max sampled CPU: 62.4%
  - role peaks: 
  - top CPU: pid 36343 62.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 36343
- gateway port: 18789
- RSS: 896.3 MB
- CPU: 61.9%
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
- slowest OpenClaw span: gateway.ready 176.82ms
- most expensive repeated span: plugins.metadata.scan 7x 143.32ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 1022ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 872.7 MB
- Tracked total peak RSS: 877.8 MB
- Max CPU: 73.6%
- Resource samples: 14
- Command tree peak RSS: 24.5 MB
- Gateway peak RSS: 872.7 MB
- Resource by role:
  - gateway: RSS 872.7 MB; CPU 73.6%
  - gateway-tree: RSS 872.7 MB; CPU 73.6%
  - command-tree: RSS 24.5 MB; CPU 0%
  - runtime-staging: RSS 24.5 MB; CPU 0%
  - mock-provider: RSS 21.5 MB; CPU 0%
  - uncategorized: RSS 5.2 MB; CPU 0%
- Cold ready: 57 ms
- Warm ready: 57 ms
- Time to listening: 6027 ms
- Time to health ready: 6062 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 24
- Health p95: 56 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (205 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 192.64 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 192.64ms open 0; plugins.metadata.scan max 39.45ms open 0; config.normalize max 3.71ms open 0
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
- Resource peaks: CPU at 55ms; RSS at 55ms
- Diagnostic correlation:
  - CPU peaked at 73.6% around 55ms
  - RSS peaked at 877.8 MB around 55ms
  - Slowest OpenClaw span: gateway.ready 192.64ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 37943 73.6% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 37943 872.7 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 133ms
  - resource samples: 2
  - peak sampled RSS: 21.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 37437 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 37689 0% command-tree,runtime-management ocm start kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 6027ms
- time to health ready: 6062ms
- tcp listening: ok in 0ms
- health: ok (200) in 35ms
- health samples: 1/25 ok
- health latency p95/max: 1ms / 35ms
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
- slowest OpenClaw span: gateway.ready 192.64ms
- most expensive repeated span: plugins.metadata.scan 4x 80.78ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: PASS, 6062ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 65ms
  - resource samples: 2
  - peak sampled RSS: 686.4 MB
  - max sampled CPU: 63.3%
  - role peaks: 
  - top CPU: pid 37943 63.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 37943
- gateway port: 18789
- RSS: 662 MB
- CPU: 62.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 14ms
- health samples: 3/3 ok
- health latency p95/max: 14ms / 14ms
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
- slowest OpenClaw span: gateway.ready 192.64ms
- most expensive repeated span: plugins.metadata.scan 5x 92.8ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 13ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'missing-plugin-index' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 79ms
  - resource samples: 2
  - peak sampled RSS: 672.7 MB
  - max sampled CPU: 62.4%
  - role peaks: 
  - top CPU: pid 37943 62.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 37943
- gateway port: 18789
- RSS: 679.5 MB
- CPU: 62.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 0ms
- time to health ready: 422ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 56ms / 56ms
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
- slowest OpenClaw span: gateway.ready 192.64ms
- most expensive repeated span: plugins.metadata.scan 7x 132.71ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 8ms, artifacts 0
  - readiness: PASS, 422ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z'`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 877.8 MB
  - max sampled CPU: 73.6%
  - role peaks: 
  - top CPU: pid 37943 73.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 877.6 MB
  - max sampled CPU: 73.1%
  - role peaks: 
  - top CPU: pid 37943 73.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 37943
- gateway port: 18789
- RSS: 872.6 MB
- CPU: 72.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 20000ms / 60000ms
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
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 192.64ms
- most expensive repeated span: plugins.metadata.scan 7x 132.71ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 872.7 MB
  - max sampled CPU: 64%
  - role peaks: 
  - top CPU: pid 37943 64% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 37943
- gateway port: 18789
- RSS: 872.7 MB
- CPU: 63.5%
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
- slowest OpenClaw span: gateway.ready 192.64ms
- most expensive repeated span: plugins.metadata.scan 7x 132.71ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 1122ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 740.5 MB
- Tracked total peak RSS: 1241.7 MB
- Max CPU: 141%
- Resource samples: 22
- Command tree peak RSS: 541.3 MB
- Gateway peak RSS: 740.5 MB
- Resource by role:
  - gateway: RSS 740.5 MB; CPU 141%
  - gateway-tree: RSS 740.5 MB; CPU 141%
  - command-tree: RSS 541.3 MB; CPU 137.8%
  - plugin-cli: RSS 541.3 MB; CPU 137.8%
  - runtime-staging: RSS 28.9 MB; CPU 0%
  - mock-provider: RSS 23.6 MB; CPU 0%
- Cold ready: 55 ms
- Warm ready: 52 ms
- Time to listening: 1508 ms
- Time to health ready: 1518 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 6
- Health p95: 37 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (207 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 196.68 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 196.68ms open 0; config.normalize max 50.8ms open 0; plugins.metadata.scan max 48.28ms open 0
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
- Resource peaks: CPU at 1082ms; RSS at 1060ms
- Diagnostic correlation:
  - CPU peaked at 263.7% around 1082ms
  - RSS peaked at 1241.7 MB around 1060ms
  - Slowest OpenClaw span: gateway.ready 196.68ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 39735 141% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 39735 740.5 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 136ms
  - resource samples: 2
  - peak sampled RSS: 23.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 39042 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 39294 0% command-tree,runtime-management ocm start kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/resource-samples/startup-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
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
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 1ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 5ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 28.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 39561 0% command-tree,runtime-staging ocm env exec kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z -- node /home...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 39735
- gateway port: 18789
- RSS: 59.1 MB
- CPU: 100%
- readiness: not-ready after 1 attempt(s)
- readiness classification: hard-failure
- readiness reason: gateway TCP socket never accepted connections before the hard deadline
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- tcp listening: not-ok in 0ms
- tcp error: connect ECONNREFUSED 127.0.0.1:18789
- health: not-ok in 1ms
- health error: fetch failed
- health samples: 0/3 ok
- health latency p95/max: 1ms / 1ms
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
- OpenClaw timeline events: 2
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 48ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: FAIL, 1ms, artifacts 0 (readiness deadline expired)
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' -- plugins list`
  - status: 0
  - duration: 1745ms
  - resource samples: 3
  - peak sampled RSS: 1230.7 MB
  - max sampled CPU: 263.7%
  - role peaks: 
  - top CPU: pid 39735 141% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1567ms
  - resource samples: 3
  - peak sampled RSS: 1241.7 MB
  - max sampled CPU: 209.3%
  - role peaks: 
  - top CPU: pid 40091 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' --tail 400 --raw`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 702.4 MB
  - max sampled CPU: 61.9%
  - role peaks: 
  - top CPU: pid 39735 61.9% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 39735
- gateway port: 18789
- RSS: 702.4 MB
- CPU: 60.8%
- readiness: not-ready after 1 attempt(s)
- readiness classification: hard-failure
- readiness reason: gateway TCP socket never accepted connections before the hard deadline
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- tcp listening: not-ok in 0ms
- tcp error: connect ECONNREFUSED 127.0.0.1:18789
- health: not-ok in 1ms
- health error: fetch failed
- health samples: 0/3 ok
- health latency p95/max: 1ms / 1ms
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
- OpenClaw timeline events: 10
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 48.28ms
- most expensive repeated span: plugins.metadata.scan 5x 151.69ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: FAIL, 1ms, artifacts 0 (readiness deadline expired)
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z'`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 707.5 MB
  - max sampled CPU: 53.9%
  - role peaks: 
  - top CPU: pid 39735 53.9% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 47ms
  - resource samples: 2
  - peak sampled RSS: 707.7 MB
  - max sampled CPU: 53.2%
  - role peaks: 
  - top CPU: pid 39735 53.2% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' --tail 400 --raw`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 704 MB
  - max sampled CPU: 53.3%
  - role peaks: 
  - top CPU: pid 39735 53.3% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 39735
- gateway port: 18789
- RSS: 704.5 MB
- CPU: 53.7%
- readiness: ready after 7 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 1508ms
- time to health ready: 1518ms
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
- OpenClaw timeline events: 207
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 196.68ms
- most expensive repeated span: plugins.metadata.scan 8x 201.36ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1518ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 67ms
  - resource samples: 2
  - peak sampled RSS: 740.5 MB
  - max sampled CPU: 53.3%
  - role peaks: 
  - top CPU: pid 39735 53.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 39735
- gateway port: 18789
- RSS: 740.5 MB
- CPU: 52.7%
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
- OpenClaw timeline events: 207
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 196.68ms
- most expensive repeated span: plugins.metadata.scan 8x 201.36ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 1150ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 776.2 MB
- Tracked total peak RSS: 1279.3 MB
- Max CPU: 142%
- Resource samples: 22
- Command tree peak RSS: 559.2 MB
- Gateway peak RSS: 776.2 MB
- Resource by role:
  - gateway: RSS 776.2 MB; CPU 142%
  - gateway-tree: RSS 776.2 MB; CPU 142%
  - command-tree: RSS 559.2 MB; CPU 137.8%
  - plugin-cli: RSS 559.2 MB; CPU 137.8%
  - runtime-staging: RSS 28.6 MB; CPU 0%
  - mock-provider: RSS 25.6 MB; CPU 0%
- Cold ready: 51 ms
- Warm ready: 54 ms
- Time to listening: 2763 ms
- Time to health ready: 2960 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 6
- Health p95: 38 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (207 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 212.58 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 212.58ms open 0; config.normalize max 50.87ms open 0; plugins.metadata.scan max 49.82ms open 0
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
- Resource peaks: CPU at 1119ms; RSS at 1077ms
- Diagnostic correlation:
  - CPU peaked at 257.6% around 1119ms
  - RSS peaked at 1279.3 MB around 1077ms
  - Slowest OpenClaw span: gateway.ready 212.58ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 41804 142% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 41804 776.2 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 140ms
  - resource samples: 2
  - peak sampled RSS: 25.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 41143 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 4.8 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 41395 0% command-tree,runtime-management ocm start kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/resource-samples/startup-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
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
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 28.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 41662 0% command-tree,runtime-staging ocm env exec kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z -- node /home...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 41804
- gateway port: 18789
- RSS: 69.2 MB
- CPU: 80%
- readiness: not-ready after 1 attempt(s)
- readiness classification: hard-failure
- readiness reason: gateway TCP socket never accepted connections before the hard deadline
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- tcp listening: not-ok in 0ms
- tcp error: connect ECONNREFUSED 127.0.0.1:18789
- health: not-ok in 1ms
- health error: fetch failed
- health samples: 0/3 ok
- health latency p95/max: 1ms / 1ms
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
- OpenClaw timeline events: 2
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 44.84ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: FAIL, 0ms, artifacts 0 (readiness deadline expired)
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' -- plugins list`
  - status: 0
  - duration: 1865ms
  - resource samples: 3
  - peak sampled RSS: 1219.5 MB
  - max sampled CPU: 257.6%
  - role peaks: 
  - top CPU: pid 41804 142% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1714ms
  - resource samples: 3
  - peak sampled RSS: 1279.3 MB
  - max sampled CPU: 208.4%
  - role peaks: 
  - top CPU: pid 42187 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' --tail 400 --raw`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 731.8 MB
  - max sampled CPU: 60%
  - role peaks: 
  - top CPU: pid 41804 60% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 41804
- gateway port: 18789
- RSS: 731.8 MB
- CPU: 59.1%
- readiness: not-ready after 1 attempt(s)
- readiness classification: hard-failure
- readiness reason: gateway TCP socket never accepted connections before the hard deadline
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- tcp listening: not-ok in 0ms
- tcp error: connect ECONNREFUSED 127.0.0.1:18789
- health: not-ok in 1ms
- health error: fetch failed
- health samples: 0/3 ok
- health latency p95/max: 1ms / 1ms
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
- OpenClaw timeline events: 10
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 49.82ms
- most expensive repeated span: plugins.metadata.scan 5x 151.57ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: FAIL, 1ms, artifacts 0 (readiness deadline expired)
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z'`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 736.8 MB
  - max sampled CPU: 52.8%
  - role peaks: 
  - top CPU: pid 41804 52.8% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 737 MB
  - max sampled CPU: 52.2%
  - role peaks: 
  - top CPU: pid 41804 52.2% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' --tail 400 --raw`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 732 MB
  - max sampled CPU: 51.5%
  - role peaks: 
  - top CPU: pid 41804 51.5% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 41804
- gateway port: 18789
- RSS: 732 MB
- CPU: 50.9%
- readiness: ready after 12 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 2763ms
- time to health ready: 2960ms
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
- OpenClaw timeline events: 207
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 212.58ms
- most expensive repeated span: plugins.metadata.scan 8x 202ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2960ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 67ms
  - resource samples: 2
  - peak sampled RSS: 776.2 MB
  - max sampled CPU: 45.2%
  - role peaks: 
  - top CPU: pid 41804 45.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 41804
- gateway port: 18789
- RSS: 776.2 MB
- CPU: 44.8%
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
- OpenClaw timeline events: 207
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 212.58ms
- most expensive repeated span: plugins.metadata.scan 8x 202ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 1389ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 674.7 MB
- Tracked total peak RSS: 1068.4 MB
- Max CPU: 142%
- Resource samples: 23
- Command tree peak RSS: 473.3 MB
- Gateway peak RSS: 674.7 MB
- Resource by role:
  - gateway: RSS 674.7 MB; CPU 142%
  - gateway-tree: RSS 674.7 MB; CPU 142%
  - command-tree: RSS 473.3 MB; CPU 137.8%
  - plugin-cli: RSS 473.3 MB; CPU 137.8%
  - mock-provider: RSS 25.9 MB; CPU 0%
  - runtime-staging: RSS 24.6 MB; CPU 0%
- Cold ready: 62 ms
- Warm ready: 65 ms
- Time to listening: 2511 ms
- Time to health ready: 2555 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 9
- Health p95: 52 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (211 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 243.88 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 243.88ms open 0; plugins.metadata.scan max 53.41ms open 0; config.normalize max 50.98ms open 0
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
- Resource peaks: CPU at 1196ms; RSS at 1098ms
- Diagnostic correlation:
  - CPU peaked at 265.8% around 1196ms
  - RSS peaked at 1068.4 MB around 1098ms
  - Slowest OpenClaw span: gateway.ready 243.88ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 43588 142% gateway,gateway-tree openclaw
- Top RSS process: pid 43939 674.7 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 139ms
  - resource samples: 2
  - peak sampled RSS: 25.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 43247 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 54.8 MB
  - max sampled CPU: 66.6%
  - role peaks: 
  - top CPU: pid 43588 66.6% gateway,gateway-tree node /home/runner/.ocm/runtimes/kova-local-1783636804623/files/node_modules/openclaw/op...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/resource-samples/startup-1.jsonl

Metrics:

- gateway state: running
- child pid: 43588
- gateway port: 18789
- RSS: 59.5 MB
- CPU: 100%
- readiness: not-ready after 1 attempt(s)
- readiness classification: hard-failure
- readiness reason: gateway TCP socket never accepted connections before the hard deadline
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- tcp listening: not-ok in 1ms
- tcp error: connect ECONNREFUSED 127.0.0.1:18789
- health: not-ok in 1ms
- health error: fetch failed
- health samples: 0/3 ok
- health latency p95/max: 1ms / 1ms
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
- OpenClaw timeline events: 2
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 50.32ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: FAIL, 1ms, artifacts 0 (readiness deadline expired)
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 86ms
  - resource samples: 2
  - peak sampled RSS: 327.9 MB
  - max sampled CPU: 142%
  - role peaks: 
  - top CPU: pid 43588 142% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 43588
- gateway port: 18789
- RSS: 316.4 MB
- CPU: 142%
- readiness: not-ready after 1 attempt(s)
- readiness classification: hard-failure
- readiness reason: gateway TCP socket never accepted connections before the hard deadline
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- tcp listening: not-ok in 0ms
- tcp error: connect ECONNREFUSED 127.0.0.1:18789
- health: not-ok in 1ms
- health error: fetch failed
- health samples: 0/3 ok
- health latency p95/max: 1ms / 1ms
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
- OpenClaw timeline events: 4
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 50.32ms
- most expensive repeated span: plugins.metadata.scan 2x 78.22ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: FAIL, 1ms, artifacts 0 (readiness deadline expired)
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' -- plugins list`
  - status: 0
  - duration: 2082ms
  - resource samples: 4
  - peak sampled RSS: 732.7 MB
  - max sampled CPU: 265.8%
  - role peaks: 
  - top CPU: pid 43923 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1779ms
  - resource samples: 3
  - peak sampled RSS: 1068.4 MB
  - max sampled CPU: 238.6%
  - role peaks: 
  - top CPU: pid 44183 134% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' --tail 400 --raw`
  - status: 0
  - duration: 70ms
  - resource samples: 2
  - peak sampled RSS: 607.8 MB
  - max sampled CPU: 80.6%
  - role peaks: 
  - top CPU: pid 43939 80.6% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 43939
- gateway port: 18789
- RSS: 607.8 MB
- CPU: 78.5%
- readiness: not-ready after 1 attempt(s)
- readiness classification: hard-failure
- readiness reason: gateway TCP socket never accepted connections before the hard deadline
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- tcp listening: not-ok in 0ms
- tcp error: connect ECONNREFUSED 127.0.0.1:18789
- health: not-ok in 0ms
- health error: fetch failed
- health samples: 0/3 ok
- health latency p95/max: 1ms / 1ms
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
- OpenClaw timeline events: 14
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 53.41ms
- most expensive repeated span: plugins.metadata.scan 7x 234.72ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: FAIL, 1ms, artifacts 0 (readiness deadline expired)
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z'`
  - status: 0
  - duration: 65ms
  - resource samples: 2
  - peak sampled RSS: 613 MB
  - max sampled CPU: 67.9%
  - role peaks: 
  - top CPU: pid 43939 67.9% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 74ms
  - resource samples: 2
  - peak sampled RSS: 613.1 MB
  - max sampled CPU: 66.7%
  - role peaks: 
  - top CPU: pid 43939 66.7% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' --tail 400 --raw`
  - status: 0
  - duration: 65ms
  - resource samples: 2
  - peak sampled RSS: 608 MB
  - max sampled CPU: 65.5%
  - role peaks: 
  - top CPU: pid 43939 65.5% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 43939
- gateway port: 18789
- RSS: 608 MB
- CPU: 64.3%
- readiness: ready after 11 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 2511ms
- time to health ready: 2555ms
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
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 243.88ms
- most expensive repeated span: plugins.metadata.scan 10x 303.85ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 2555ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 674.7 MB
  - max sampled CPU: 57.6%
  - role peaks: 
  - top CPU: pid 43939 57.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 43939
- gateway port: 18789
- RSS: 674.7 MB
- CPU: 57%
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
- slowest OpenClaw span: gateway.ready 243.88ms
- most expensive repeated span: plugins.metadata.scan 10x 303.85ms
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
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 1041ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 823.8 MB
- Tracked total peak RSS: 823.8 MB
- Max CPU: 137.9%
- Resource samples: 21
- Command tree peak RSS: 823.8 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 823.8 MB; CPU 137.9%
  - agent-process: RSS 823.8 MB; CPU 137.9%
  - command-tree: RSS 823.8 MB; CPU 146.7%
  - status-cli: RSS 507.2 MB; CPU 146.7%
  - uncategorized: RSS 26.7 MB; CPU 0%
  - mock-provider: RSS 25.4 MB; CPU 0%
- Cold ready: 50 ms
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
- Slowest OpenClaw span: plugins.metadata.scan 58.67 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 58.67ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 43 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 43 ms
- Agent turn: 3195 ms (true)
- Agent cold/warm: cold 2898 ms; warm 3195 ms; delta 0 ms
- Agent pre-provider: cold 2773 ms; warm 3075 ms; delta 0 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 3180.15 ms; max 3195 ms; pre-provider p95 3059.9 ms
- Provider evidence: 1 request(s); provider work 1 ms; pre-provider 3075 ms; post-provider 119 ms
- Agent latency diagnosis: warm agent turn 3195ms; pre-provider 3075ms; provider 1ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 2898 ms; pre-provider 2773 ms; provider 2 ms; post-provider 123 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2773ms; provider 2ms; post-provider 123ms; unknown 2773ms; source none
  - warm: total 3195 ms; pre-provider 3075 ms; provider 1 ms; post-provider 119 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 3075ms; provider 1ms; post-provider 119ms; unknown 3075ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1158ms; RSS at 3126ms
- Diagnostic correlation:
  - CPU peaked at 146.7% around 1158ms
  - RSS peaked at 823.8 MB around 3126ms
  - Slowest OpenClaw span: plugins.metadata.scan 58.67ms
  - Provider/model timing max: 43ms
- Top CPU process: pid 47713 143% command-tree,status-cli [openclaw]
- Top RSS process: pid 46992 760.6 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 136ms
  - resource samples: 2
  - peak sampled RSS: 25.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 45241 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --no-service --json`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 45493 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/resource-samples/provision-1.jsonl

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
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 26.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 45746 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t22400...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

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
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2898ms
  - resource samples: 4
  - peak sampled RSS: 697.2 MB
  - max sampled CPU: 136.9%
  - role peaks: 
  - top CPU: pid 46249 135% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 46.13ms
- most expensive repeated span: plugins.metadata.scan 5x 86.19ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 43ms
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

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 3195ms
  - resource samples: 5
  - peak sampled RSS: 823.8 MB
  - max sampled CPU: 137.9%
  - role peaks: 
  - top CPU: pid 46992 137% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 58.67ms
- most expensive repeated span: plugins.metadata.scan 10x 185.6ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 43ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z' -- status`
  - status: 0
  - duration: 2148ms
  - resource samples: 4
  - peak sampled RSS: 507.2 MB
  - max sampled CPU: 146.7%
  - role peaks: 
  - top CPU: pid 47713 143% command-tree,status-cli [openclaw]
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 58.67ms
- most expensive repeated span: plugins.metadata.scan 13x 255.28ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 43ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 68ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 48147 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 58.67ms
- most expensive repeated span: plugins.metadata.scan 13x 255.28ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 43ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 932ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 725.6 MB
- Tracked total peak RSS: 725.6 MB
- Max CPU: 141.8%
- Resource samples: 19
- Command tree peak RSS: 725.6 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 725.6 MB; CPU 141.8%
  - agent-process: RSS 725.6 MB; CPU 141.8%
  - command-tree: RSS 725.6 MB; CPU 141.8%
  - status-cli: RSS 543.2 MB; CPU 135.7%
  - uncategorized: RSS 23.3 MB; CPU 0%
  - mock-provider: RSS 20.8 MB; CPU 0%
- Cold ready: 52 ms
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
- Slowest OpenClaw span: plugins.metadata.scan 47.1 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 47.1ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 35 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 35 ms
- Agent turn: 2740 ms (true)
- Agent cold/warm: cold 2699 ms; warm 2740 ms; delta 0 ms
- Agent pre-provider: cold 2566 ms; warm 2632 ms; delta 0 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 2737.95 ms; max 2740 ms; pre-provider p95 2628.7 ms
- Provider evidence: 1 request(s); provider work 1 ms; pre-provider 2632 ms; post-provider 107 ms
- Agent latency diagnosis: warm agent turn 2740ms; pre-provider 2632ms; provider 1ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 2699 ms; pre-provider 2566 ms; provider 2 ms; post-provider 131 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2566ms; provider 2ms; post-provider 131ms; unknown 2566ms; source none
  - warm: total 2740 ms; pre-provider 2632 ms; provider 1 ms; post-provider 107 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2632ms; provider 1ms; post-provider 107ms; unknown 2632ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1110ms; RSS at 2115ms
- Diagnostic correlation:
  - CPU peaked at 141.8% around 1110ms
  - RSS peaked at 725.6 MB around 2115ms
  - Slowest OpenClaw span: plugins.metadata.scan 47.1ms
  - Provider/model timing max: 35ms
- Top CPU process: pid 50473 139% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 50473 662.4 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 138ms
  - resource samples: 2
  - peak sampled RSS: 20.8 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 48718 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --no-service --json`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 48970 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/resource-samples/provision-1.jsonl

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
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 23.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 49223 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t22400...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

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
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2699ms
  - resource samples: 4
  - peak sampled RSS: 710.1 MB
  - max sampled CPU: 139.8%
  - role peaks: 
  - top CPU: pid 49719 137% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 45.73ms
- most expensive repeated span: plugins.metadata.scan 5x 85.77ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 32ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2740ms
  - resource samples: 4
  - peak sampled RSS: 725.6 MB
  - max sampled CPU: 141.8%
  - role peaks: 
  - top CPU: pid 50473 139% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 47.1ms
- most expensive repeated span: plugins.metadata.scan 10x 170.34ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 35ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z' -- status`
  - status: 0
  - duration: 1888ms
  - resource samples: 3
  - peak sampled RSS: 543.2 MB
  - max sampled CPU: 135.7%
  - role peaks: 
  - top CPU: pid 51093 132% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 47.1ms
- most expensive repeated span: plugins.metadata.scan 13x 229.9ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 35ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 51389 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 47.1ms
- most expensive repeated span: plugins.metadata.scan 13x 229.9ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 35ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 863ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 687.9 MB
- Tracked total peak RSS: 687.9 MB
- Max CPU: 138.9%
- Resource samples: 20
- Command tree peak RSS: 687.9 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 687.9 MB; CPU 138.9%
  - agent-process: RSS 687.9 MB; CPU 138.9%
  - command-tree: RSS 687.9 MB; CPU 143.7%
  - status-cli: RSS 483.2 MB; CPU 143.7%
  - uncategorized: RSS 25.9 MB; CPU 0%
  - mock-provider: RSS 25.4 MB; CPU 0%
- Cold ready: 66 ms
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
- Slowest OpenClaw span: plugins.metadata.scan 61.02 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 61.02ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 37 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 37 ms
- Agent turn: 3145 ms (true)
- Agent cold/warm: cold 2933 ms; warm 3145 ms; delta 0 ms
- Agent pre-provider: cold 2822 ms; warm 2972 ms; delta 0 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 3134.4 ms; max 3145 ms; pre-provider p95 2964.5 ms
- Provider evidence: 1 request(s); provider work 1 ms; pre-provider 2972 ms; post-provider 172 ms
- Agent latency diagnosis: warm agent turn 3145ms; pre-provider 2972ms; provider 1ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 2933 ms; pre-provider 2822 ms; provider 2 ms; post-provider 109 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2822ms; provider 2ms; post-provider 109ms; unknown 2822ms; source none
  - warm: total 3145 ms; pre-provider 2972 ms; provider 1 ms; post-provider 172 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2972ms; provider 1ms; post-provider 172ms; unknown 2972ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1152ms; RSS at 2148ms
- Diagnostic correlation:
  - CPU peaked at 143.7% around 1152ms
  - RSS peaked at 687.9 MB around 2148ms
  - Slowest OpenClaw span: plugins.metadata.scan 61.02ms
  - Provider/model timing max: 37ms
- Top CPU process: pid 54427 140% command-tree,status-cli openclaw
- Top RSS process: pid 52941 624.7 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 147ms
  - resource samples: 2
  - peak sampled RSS: 25.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 51960 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --no-service --json`
  - status: 0
  - duration: 66ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 52212 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/resource-samples/provision-1.jsonl

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
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 71ms
  - resource samples: 2
  - peak sampled RSS: 25.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 52465 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t22400...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

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
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 1ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2933ms
  - resource samples: 4
  - peak sampled RSS: 687.9 MB
  - max sampled CPU: 138.9%
  - role peaks: 
  - top CPU: pid 52941 137% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 51.24ms
- most expensive repeated span: plugins.metadata.scan 5x 98.22ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 37ms
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

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 3145ms
  - resource samples: 5
  - peak sampled RSS: 663.3 MB
  - max sampled CPU: 138.9%
  - role peaks: 
  - top CPU: pid 53690 137% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 61.02ms
- most expensive repeated span: plugins.metadata.scan 10x 203.38ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 37ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z' -- status`
  - status: 0
  - duration: 2065ms
  - resource samples: 3
  - peak sampled RSS: 483.2 MB
  - max sampled CPU: 143.7%
  - role peaks: 
  - top CPU: pid 54427 140% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 61.02ms
- most expensive repeated span: plugins.metadata.scan 13x 275.41ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 37ms
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

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 54750 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 61.02ms
- most expensive repeated span: plugins.metadata.scan 13x 275.41ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 37ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 820ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 868.9 MB
- Tracked total peak RSS: 1414.8 MB
- Max CPU: 110%
- Resource samples: 26
- Command tree peak RSS: 546.3 MB
- Gateway peak RSS: 868.9 MB
- Resource by role:
  - gateway: RSS 868.9 MB; CPU 110%
  - gateway-tree: RSS 868.9 MB; CPU 110%
  - command-tree: RSS 546.3 MB; CPU 144.8%
  - status-cli: RSS 546.3 MB; CPU 135.9%
  - plugin-cli: RSS 493.4 MB; CPU 144.7%
  - model-cli: RSS 483.4 MB; CPU 144.8%
- Cold ready: 70 ms
- Warm ready: 56 ms
- Time to listening: 5778 ms
- Time to health ready: 5943 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 57 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (225 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 178.47 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 178.47ms open 0; plugins.metadata.scan max 37.88ms open 0; config.normalize max 3.56ms open 0
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
- Resource peaks: CPU at 1076ms; RSS at 1076ms
- Diagnostic correlation:
  - CPU peaked at 196.4% around 1076ms
  - RSS peaked at 1414.8 MB around 1076ms
  - Slowest OpenClaw span: gateway.ready 178.47ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 56425 141% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 55692 868.9 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 139ms
  - resource samples: 2
  - peak sampled RSS: 22.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 55321 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 4ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 70ms
  - resource samples: 2
  - peak sampled RSS: 49.7 MB
  - max sampled CPU: 50%
  - role peaks: 
  - top CPU: pid 55692 50% gateway,gateway-tree node /home/runner/.ocm/runtimes/kova-local-1783636804623/files/node_modules/openclaw/op...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 77ms
  - resource samples: 2
  - peak sampled RSS: 95.1 MB
  - max sampled CPU: 110%
  - role peaks: 
  - top CPU: pid 55692 110% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 55692
- gateway port: 18789
- RSS: 103 MB
- CPU: 116%
- readiness: ready after 24 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 5778ms
- time to health ready: 5943ms
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
- slowest OpenClaw span: gateway.ready 178.47ms
- most expensive repeated span: plugins.metadata.scan 4x 82.93ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 5943ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 650.9 MB
  - max sampled CPU: 57.6%
  - role peaks: 
  - top CPU: pid 55692 57.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 55692
- gateway port: 18789
- RSS: 624.7 MB
- CPU: 57%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 20ms
- health samples: 3/3 ok
- health latency p95/max: 20ms / 20ms
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
- slowest OpenClaw span: gateway.ready 178.47ms
- most expensive repeated span: plugins.metadata.scan 5x 95.76ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 12ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 116ms
  - resource samples: 2
  - peak sampled RSS: 682 MB
  - max sampled CPU: 57.5%
  - role peaks: 
  - top CPU: pid 55692 57.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 55692
- gateway port: 18789
- RSS: 703.9 MB
- CPU: 58.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 383ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 57ms / 57ms
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
- slowest OpenClaw span: gateway.ready 178.47ms
- most expensive repeated span: plugins.metadata.scan 7x 138.19ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 383ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' -- status`
  - status: 0
  - duration: 2085ms
  - resource samples: 4
  - peak sampled RSS: 1414.8 MB
  - max sampled CPU: 196.4%
  - role peaks: 
  - top CPU: pid 56285 134% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' -- plugins list`
  - status: 0
  - duration: 1919ms
  - resource samples: 3
  - peak sampled RSS: 1362.2 MB
  - max sampled CPU: 194.7%
  - role peaks: 
  - top CPU: pid 56425 141% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' -- models list`
  - status: 0
  - duration: 1173ms
  - resource samples: 3
  - peak sampled RSS: 1352.2 MB
  - max sampled CPU: 187.7%
  - role peaks: 
  - top CPU: pid 56588 141% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 55692
- gateway port: 18789
- RSS: 868.8 MB
- CPU: 42.4%
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 178.47ms
- most expensive repeated span: plugins.metadata.scan 17x 320.82ms
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

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z'`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 873.9 MB
  - max sampled CPU: 40.8%
  - role peaks: 
  - top CPU: pid 55692 40.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 873.8 MB
  - max sampled CPU: 40.7%
  - role peaks: 
  - top CPU: pid 55692 40.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 55692
- gateway port: 18789
- RSS: 868.9 MB
- CPU: 40.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 15000ms / 45000ms
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 178.47ms
- most expensive repeated span: plugins.metadata.scan 17x 320.82ms
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

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 868.9 MB
  - max sampled CPU: 37.8%
  - role peaks: 
  - top CPU: pid 55692 37.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 55692
- gateway port: 18789
- RSS: 868.9 MB
- CPU: 37.6%
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 178.47ms
- most expensive repeated span: plugins.metadata.scan 17x 320.82ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 1033ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 833 MB
- Tracked total peak RSS: 1380.5 MB
- Max CPU: 68.7%
- Resource samples: 25
- Command tree peak RSS: 547.6 MB
- Gateway peak RSS: 833 MB
- Resource by role:
  - gateway: RSS 833 MB; CPU 68.7%
  - gateway-tree: RSS 833 MB; CPU 68.7%
  - command-tree: RSS 547.6 MB; CPU 145.8%
  - status-cli: RSS 547.6 MB; CPU 139.8%
  - model-cli: RSS 518.2 MB; CPU 138.8%
  - plugin-cli: RSS 516.7 MB; CPU 145.8%
- Cold ready: 55 ms
- Warm ready: 58 ms
- Time to listening: 5777 ms
- Time to health ready: 5912 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 119 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (223 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 158.78 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 158.78ms open 0; plugins.metadata.scan max 45.57ms open 0; config.normalize max 5.19ms open 0
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
- Resource peaks: CPU at 1068ms; RSS at 1068ms
- Diagnostic correlation:
  - CPU peaked at 200.9% around 1068ms
  - RSS peaked at 1380.5 MB around 1068ms
  - Slowest OpenClaw span: gateway.ready 158.78ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 58703 143% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 58067 833 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 136ms
  - resource samples: 2
  - peak sampled RSS: 23.2 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 57365 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 57617 0% command-tree,runtime-management ocm start kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z --ru...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 4.8 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 57868 0% command-tree,status-cli ocm service status kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 58067
- gateway port: 18789
- RSS: 56.5 MB
- CPU: 66.6%
- readiness: ready after 24 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 5777ms
- time to health ready: 5912ms
- tcp listening: ok in 0ms
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
- slowest OpenClaw span: gateway.ready 158.78ms
- most expensive repeated span: plugins.metadata.scan 4x 82.54ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 5912ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 741.7 MB
  - max sampled CPU: 56.9%
  - role peaks: 
  - top CPU: pid 58067 56.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 58067
- gateway port: 18789
- RSS: 709.5 MB
- CPU: 56.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 33ms
- health samples: 3/3 ok
- health latency p95/max: 33ms / 33ms
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
- slowest OpenClaw span: gateway.ready 158.78ms
- most expensive repeated span: plugins.metadata.scan 5x 96.29ms
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

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 79ms
  - resource samples: 2
  - peak sampled RSS: 740.5 MB
  - max sampled CPU: 55.6%
  - role peaks: 
  - top CPU: pid 58067 55.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 58067
- gateway port: 18789
- RSS: 724.1 MB
- CPU: 56%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 454ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 119ms / 119ms
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
- slowest OpenClaw span: gateway.ready 158.78ms
- most expensive repeated span: plugins.metadata.scan 6x 127.52ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 454ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' -- status`
  - status: 0
  - duration: 2051ms
  - resource samples: 3
  - peak sampled RSS: 1380.5 MB
  - max sampled CPU: 200.9%
  - role peaks: 
  - top CPU: pid 58554 137% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' -- plugins list`
  - status: 0
  - duration: 1840ms
  - resource samples: 3
  - peak sampled RSS: 1349.7 MB
  - max sampled CPU: 196.1%
  - role peaks: 
  - top CPU: pid 58703 143% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' -- models list`
  - status: 0
  - duration: 1242ms
  - resource samples: 3
  - peak sampled RSS: 1351.2 MB
  - max sampled CPU: 182.1%
  - role peaks: 
  - top CPU: pid 58843 136% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 58067
- gateway port: 18789
- RSS: 833 MB
- CPU: 42.7%
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
- OpenClaw timeline events: 223
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 158.78ms
- most expensive repeated span: plugins.metadata.scan 16x 319.64ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z'`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 838.2 MB
  - max sampled CPU: 41.1%
  - role peaks: 
  - top CPU: pid 58067 41.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 837.9 MB
  - max sampled CPU: 40.9%
  - role peaks: 
  - top CPU: pid 58067 40.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 58067
- gateway port: 18789
- RSS: 833 MB
- CPU: 40.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 15000ms / 45000ms
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
- OpenClaw timeline events: 223
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 158.78ms
- most expensive repeated span: plugins.metadata.scan 16x 319.64ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 833 MB
  - max sampled CPU: 37.9%
  - role peaks: 
  - top CPU: pid 58067 37.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 58067
- gateway port: 18789
- RSS: 833 MB
- CPU: 37.8%
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
- slowest OpenClaw span: gateway.ready 158.78ms
- most expensive repeated span: plugins.metadata.scan 16x 319.64ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 1158ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 864.6 MB
- Tracked total peak RSS: 1427.4 MB
- Max CPU: 125%
- Resource samples: 25
- Command tree peak RSS: 563 MB
- Gateway peak RSS: 864.6 MB
- Resource by role:
  - gateway: RSS 864.6 MB; CPU 125%
  - gateway-tree: RSS 864.6 MB; CPU 125%
  - command-tree: RSS 563 MB; CPU 145.7%
  - status-cli: RSS 563 MB; CPU 144.7%
  - model-cli: RSS 522.4 MB; CPU 137.7%
  - plugin-cli: RSS 497.7 MB; CPU 145.7%
- Cold ready: 54 ms
- Warm ready: 54 ms
- Time to listening: 7286 ms
- Time to health ready: 7290 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 81 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (225 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 174.81 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 174.81ms open 0; plugins.metadata.scan max 40.81ms open 0; config.normalize max 3.13ms open 0
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
  - CPU peaked at 196.6% around 1071ms
  - RSS peaked at 1427.4 MB around 1071ms
  - Slowest OpenClaw span: gateway.ready 174.81ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 60877 142% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 60117 864.6 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 140ms
  - resource samples: 2
  - peak sampled RSS: 23.1 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 59632 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' --runtime 'kova-local-1783636804623' --json`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 59884 0% command-tree,runtime-management ocm start kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z --ru...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 64ms
  - resource samples: 2
  - peak sampled RSS: 92.1 MB
  - max sampled CPU: 125%
  - role peaks: 
  - top CPU: pid 60117 125% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 60117
- gateway port: 18789
- RSS: 95.6 MB
- CPU: 110%
- readiness: ready after 30 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 7286ms
- time to health ready: 7290ms
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
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 174.81ms
- most expensive repeated span: plugins.metadata.scan 4x 77.76ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 7290ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/port'`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 649 MB
  - max sampled CPU: 46.6%
  - role peaks: 
  - top CPU: pid 60117 46.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 60117
- gateway port: 18789
- RSS: 621.7 MB
- CPU: 46.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 16ms
- health samples: 3/3 ok
- health latency p95/max: 16ms / 16ms
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
- slowest OpenClaw span: gateway.ready 174.81ms
- most expensive repeated span: plugins.metadata.scan 5x 90.27ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 112ms
  - resource samples: 2
  - peak sampled RSS: 666.4 MB
  - max sampled CPU: 47.4%
  - role peaks: 
  - top CPU: pid 60117 47.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 60117
- gateway port: 18789
- RSS: 683.9 MB
- CPU: 47.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 389ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 81ms / 81ms
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
- slowest OpenClaw span: gateway.ready 174.81ms
- most expensive repeated span: plugins.metadata.scan 7x 136.97ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 389ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' -- status`
  - status: 0
  - duration: 1975ms
  - resource samples: 3
  - peak sampled RSS: 1427.4 MB
  - max sampled CPU: 196.6%
  - role peaks: 
  - top CPU: pid 60710 141% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' -- plugins list`
  - status: 0
  - duration: 1816ms
  - resource samples: 3
  - peak sampled RSS: 1362.3 MB
  - max sampled CPU: 189.9%
  - role peaks: 
  - top CPU: pid 60877 142% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' -- models list`
  - status: 0
  - duration: 1250ms
  - resource samples: 3
  - peak sampled RSS: 1387 MB
  - max sampled CPU: 176.3%
  - role peaks: 
  - top CPU: pid 61001 134% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 60117
- gateway port: 18789
- RSS: 864.6 MB
- CPU: 38.1%
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 174.81ms
- most expensive repeated span: plugins.metadata.scan 17x 321.32ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z'`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 869.8 MB
  - max sampled CPU: 36.8%
  - role peaks: 
  - top CPU: pid 60117 36.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' --json`
  - status: 0
  - duration: 47ms
  - resource samples: 2
  - peak sampled RSS: 869.3 MB
  - max sampled CPU: 36.7%
  - role peaks: 
  - top CPU: pid 60117 36.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 60117
- gateway port: 18789
- RSS: 864.6 MB
- CPU: 36.5%
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
- slowest OpenClaw span: gateway.ready 174.81ms
- most expensive repeated span: plugins.metadata.scan 17x 321.32ms
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
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 864.6 MB
  - max sampled CPU: 34.2%
  - role peaks: 
  - top CPU: pid 60117 34.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T224004Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 60117
- gateway port: 18789
- RSS: 864.6 MB
- CPU: 34.1%
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 174.81ms
- most expensive repeated span: plugins.metadata.scan 17x 321.32ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t224004z' --yes`
- cleanup status: 0
- cleanup duration: 1152ms

