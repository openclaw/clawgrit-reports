# Kova OpenClaw Runtime Report

Generated: 2026-07-09T22:57:37.453Z
Run ID: `kova-2026-07-09T225045Z`
Mode: execution
Platform: linux 6.6.141 (x64) · v24.13.0

## Release Decision

- Verdict: PARTIAL
- Coverage: partial
- Blocking / warnings / info: 0 / 26 / 64
- Markdown report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-2026-07-09T225045Z-release.md
- JSON report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-2026-07-09T225045Z-release.json
- Retained gate artifacts: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/release-gates/kova-2026-07-09t225045z

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
- fresh-install/fresh: 3 sample(s); timeToHealthReadyMs median 7159ms p95 7292.2ms max 7307ms; peakRssMb median 868.5MB p95 872.91MB max 873.4MB; cpuPercentMax median 100% p95 122.5% max 125% unstable; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 7052ms p95 7257.2ms max 7280ms
- fresh-install/onboarded-user: 3 sample(s); timeToHealthReadyMs median 5843ms p95 6039.2ms max 6061ms; peakRssMb median 856.3MB p95 866.83MB max 868MB; cpuPercentMax median 67.9% p95 69.7% max 69.9%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 5770ms p95 6007.6ms max 6034ms
- bundled-runtime-deps/missing-plugin-index: 3 sample(s); timeToHealthReadyMs median 5779ms p95 6742ms max 6849ms; peakRssMb median 865.1MB p95 866.99MB max 867.2MB; cpuPercentMax median 68.9% p95 69.26% max 69.3%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 5777ms p95 6673.4ms max 6773ms
- bundled-plugin-startup/fresh: 3 sample(s); timeToHealthReadyMs median 2008ms p95 2530.9ms max 2589ms unstable; peakRssMb median 638.9MB p95 758.87MB max 772.2MB; cpuPercentMax median 136% p95 142.3% max 143%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 2006ms p95 2462.3ms max 2513ms unstable
- agent-cold-warm-message/mock-openai-provider: 3 sample(s); peakRssMb median 724.1MB p95 750.56MB max 753.5MB; cpuPercentMax median 139.8% p95 140.7% max 140.8%; agentTurnMs median 2540ms p95 2552.6ms max 2554ms; coldAgentTurnMs median 2527ms p95 2538.7ms max 2540ms; warmAgentTurnMs median 2459ms p95 2544.5ms max 2554ms
- gateway-performance/many-bundled-plugins: 3 sample(s); timeToHealthReadyMs median 6119ms p95 6156.8ms max 6161ms; peakRssMb median 872.3MB p95 884.09MB max 885.4MB; cpuPercentMax median 120% p95 136.2% max 138% unstable; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 6024ms p95 6024.9ms max 6025ms

## Resource Roles

- gateway: RSS 885.4 MB; CPU 143%; scenario gateway-performance/many-bundled-plugins
- gateway-tree: RSS 885.4 MB; CPU 142%; scenario gateway-performance/many-bundled-plugins
- command-tree: RSS 753.5 MB; CPU 148.8%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 753.5 MB; CPU 140.8%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 753.5 MB; CPU 140.8%; scenario agent-cold-warm-message/mock-openai-provider
- plugin-cli: RSS 714.4 MB; CPU 148.8%; scenario fresh-install/fresh
- status-cli: RSS 635.7 MB; CPU 142.8%; scenario fresh-install/fresh
- model-cli: RSS 532.3 MB; CPU 142.8%; scenario fresh-install/onboarded-user

## Target Cleanup

- Runtime: `kova-local-1783637445040`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1783637445040' --json`
- Exit: 0
- Duration: 387ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r1-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 795.6 MB
- Tracked total peak RSS: 1448.9 MB
- Max CPU: 125%
- Resource samples: 29
- Command tree peak RSS: 666.6 MB
- Gateway peak RSS: 795.6 MB
- Resource by role:
  - gateway: RSS 795.6 MB; CPU 125%
  - gateway-tree: RSS 795.6 MB; CPU 125%
  - command-tree: RSS 666.6 MB; CPU 142.7%
  - plugin-cli: RSS 666.6 MB; CPU 141.8%
  - status-cli: RSS 635.7 MB; CPU 126.8%
  - model-cli: RSS 526.5 MB; CPU 142.7%
- Cold ready: 828 ms
- Warm ready: unknown ms
- Time to listening: 7052 ms
- Time to health ready: 7159 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 56 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 197.84 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 197.84ms open 0; plugins.metadata.scan max 47.2ms open 0; config.normalize max 3.38ms open 0
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
- Resource peaks: CPU at 1060ms; RSS at 2068ms
- Diagnostic correlation:
  - CPU peaked at 189.8% around 1060ms
  - RSS peaked at 1448.9 MB around 2068ms
  - Slowest OpenClaw span: gateway.ready 197.84ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 22228 139% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 21506 795.6 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1783637445040' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1783637445040' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 129620ms
  - resource samples: 131
  - peak sampled RSS: 13203.2 MB
  - max sampled CPU: 486.6%
  - role peaks: 
  - top CPU: pid 5291 250% build-tooling,command-tree,runtime-management /home/runner/_work/openclaw/openclaw/node_modules/@esbuild/linux-x64/bin/esbuild --serv...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/resource-samples/target-setup-1.jsonl

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 140ms
  - resource samples: 2
  - peak sampled RSS: 23.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 21096 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r1-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 828ms
  - resource samples: 2
  - peak sampled RSS: 274.4 MB
  - max sampled CPU: 125%
  - role peaks: 
  - top CPU: pid 21506 125% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 21506
- gateway port: 18789
- RSS: 279.1 MB
- CPU: 125%
- readiness: ready after 29 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 7052ms
- time to health ready: 7159ms
- tcp listening: ok in 1ms
- health: ok (200) in 2ms
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
- slowest OpenClaw span: gateway.ready 197.84ms
- most expensive repeated span: plugins.metadata.scan 4x 83.08ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 7159ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 714.4 MB
  - max sampled CPU: 50.9%
  - role peaks: 
  - top CPU: pid 21506 50.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 21506
- gateway port: 18789
- RSS: 687.6 MB
- CPU: 50.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 56ms
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
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 197.84ms
- most expensive repeated span: plugins.metadata.scan 5x 100.53ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 3ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' --json`
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 100ms
  - resource samples: 2
  - peak sampled RSS: 702.8 MB
  - max sampled CPU: 51.2%
  - role peaks: 
  - top CPU: pid 21506 51.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' -- status`
  - status: 0
  - duration: 2296ms
  - resource samples: 4
  - peak sampled RSS: 1431.2 MB
  - max sampled CPU: 184.4%
  - role peaks: 
  - top CPU: pid 21992 125% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 21506
- gateway port: 18789
- RSS: 795.5 MB
- CPU: 54.6%
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
- slowest OpenClaw span: gateway.ready 197.84ms
- most expensive repeated span: plugins.metadata.scan 10x 200.53ms
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

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' -- plugins list`
  - status: 0
  - duration: 1786ms
  - resource samples: 3
  - peak sampled RSS: 1333.1 MB
  - max sampled CPU: 189.8%
  - role peaks: 
  - top CPU: pid 22228 139% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5632ms
  - resource samples: 7
  - peak sampled RSS: 1448.9 MB
  - max sampled CPU: 180.8%
  - role peaks: 
  - top CPU: pid 22377 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 21506
- gateway port: 18789
- RSS: 378.5 MB
- CPU: 34.5%
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
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 197.84ms
- most expensive repeated span: plugins.metadata.scan 13x 262.54ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' -- models list`
  - status: 0
  - duration: 1153ms
  - resource samples: 3
  - peak sampled RSS: 905 MB
  - max sampled CPU: 174.6%
  - role peaks: 
  - top CPU: pid 22640 139% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 21506
- gateway port: 18789
- RSS: 378.5 MB
- CPU: 31.8%
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
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 197.84ms
- most expensive repeated span: plugins.metadata.scan 18x 356.46ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' --tail 200 --raw`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 378.5 MB
  - max sampled CPU: 31%
  - role peaks: 
  - top CPU: pid 21506 31% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 21506
- gateway port: 18789
- RSS: 378.5 MB
- CPU: 30.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 1ms
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
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 197.84ms
- most expensive repeated span: plugins.metadata.scan 18x 356.46ms
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

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 378.5 MB
  - max sampled CPU: 29.5%
  - role peaks: 
  - top CPU: pid 21506 29.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r1-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 21506
- gateway port: 18789
- RSS: 378.5 MB
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
- slowest OpenClaw span: gateway.ready 197.84ms
- most expensive repeated span: plugins.metadata.scan 18x 356.46ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r1-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 1271ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r2-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 873.4 MB
- Tracked total peak RSS: 1587.4 MB
- Max CPU: 60.4%
- Resource samples: 28
- Command tree peak RSS: 714.4 MB
- Gateway peak RSS: 873.4 MB
- Resource by role:
  - gateway: RSS 873.4 MB; CPU 60.4%
  - gateway-tree: RSS 873.4 MB; CPU 60.4%
  - command-tree: RSS 714.4 MB; CPU 138.8%
  - plugin-cli: RSS 714.4 MB; CPU 138.8%
  - status-cli: RSS 564.8 MB; CPU 128.6%
  - model-cli: RSS 523.8 MB; CPU 133.8%
- Cold ready: 52 ms
- Warm ready: unknown ms
- Time to listening: 7280 ms
- Time to health ready: 7307 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 29
- Health p95: 23 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 156.7 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 156.7ms open 0; plugins.metadata.scan max 39.61ms open 0; config.normalize max 3.03ms open 0
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
- Resource peaks: CPU at 1116ms; RSS at 4061ms
- Diagnostic correlation:
  - CPU peaked at 189% around 1116ms
  - RSS peaked at 1587.4 MB around 4061ms
  - Slowest OpenClaw span: gateway.ready 156.7ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 24437 136% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 23829 873.4 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 137ms
  - resource samples: 2
  - peak sampled RSS: 25.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 23323 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r2-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 23575 0% command-tree,runtime-management ocm start kova-fresh-install-fresh-r2-kova-2026-07-09t225045z --runtime kova-local-1783...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 30 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 7280ms
- time to health ready: 7307ms
- tcp listening: ok in 0ms
- health: ok (200) in 27ms
- health samples: 1/30 ok
- health latency p95/max: 1ms / 27ms
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
- slowest OpenClaw span: gateway.ready 156.7ms
- most expensive repeated span: plugins.metadata.scan 4x 75.41ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: PASS, 7307ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 721.8 MB
  - max sampled CPU: 50.8%
  - role peaks: 
  - top CPU: pid 23829 50.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 23829
- gateway port: 18789
- RSS: 692.3 MB
- CPU: 50.4%
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
- slowest OpenClaw span: gateway.ready 156.7ms
- most expensive repeated span: plugins.metadata.scan 5x 87.04ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' --json`
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 73ms
  - resource samples: 2
  - peak sampled RSS: 703.3 MB
  - max sampled CPU: 50.6%
  - role peaks: 
  - top CPU: pid 23829 50.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' -- status`
  - status: 0
  - duration: 2005ms
  - resource samples: 3
  - peak sampled RSS: 1437.9 MB
  - max sampled CPU: 189%
  - role peaks: 
  - top CPU: pid 24238 125% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 23829
- gateway port: 18789
- RSS: 873.4 MB
- CPU: 57.1%
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
- slowest OpenClaw span: gateway.ready 156.7ms
- most expensive repeated span: plugins.metadata.scan 10x 173.31ms
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

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' -- plugins list`
  - status: 0
  - duration: 1662ms
  - resource samples: 3
  - peak sampled RSS: 1398.1 MB
  - max sampled CPU: 188.1%
  - role peaks: 
  - top CPU: pid 24437 136% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5376ms
  - resource samples: 7
  - peak sampled RSS: 1587.4 MB
  - max sampled CPU: 180%
  - role peaks: 
  - top CPU: pid 24570 134% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 23829
- gateway port: 18789
- RSS: 651.1 MB
- CPU: 32.8%
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
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 156.7ms
- most expensive repeated span: plugins.metadata.scan 13x 234.38ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' -- models list`
  - status: 0
  - duration: 1172ms
  - resource samples: 3
  - peak sampled RSS: 906.9 MB
  - max sampled CPU: 165.9%
  - role peaks: 
  - top CPU: pid 24849 131% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 23829
- gateway port: 18789
- RSS: 383.1 MB
- CPU: 31.9%
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
- slowest OpenClaw span: gateway.ready 156.7ms
- most expensive repeated span: plugins.metadata.scan 18x 328.28ms
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

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' --tail 200 --raw`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 383.2 MB
  - max sampled CPU: 31.1%
  - role peaks: 
  - top CPU: pid 23829 31.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 23829
- gateway port: 18789
- RSS: 383.2 MB
- CPU: 31%
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
- slowest OpenClaw span: gateway.ready 156.7ms
- most expensive repeated span: plugins.metadata.scan 18x 328.28ms
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

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 383.3 MB
  - max sampled CPU: 29.4%
  - role peaks: 
  - top CPU: pid 23829 29.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r2-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 23829
- gateway port: 18789
- RSS: 383.3 MB
- CPU: 29.3%
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
- slowest OpenClaw span: gateway.ready 156.7ms
- most expensive repeated span: plugins.metadata.scan 18x 328.28ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r2-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 1251ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r3-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 868.5 MB
- Tracked total peak RSS: 1552.1 MB
- Max CPU: 100%
- Resource samples: 27
- Command tree peak RSS: 683.6 MB
- Gateway peak RSS: 868.5 MB
- Resource by role:
  - gateway: RSS 868.5 MB; CPU 100%
  - gateway-tree: RSS 868.5 MB; CPU 67.5%
  - command-tree: RSS 683.6 MB; CPU 144.8%
  - plugin-cli: RSS 683.6 MB; CPU 144.8%
  - model-cli: RSS 531.4 MB; CPU 139.8%
  - status-cli: RSS 495.2 MB; CPU 132.7%
- Cold ready: 56 ms
- Warm ready: unknown ms
- Time to listening: 5525 ms
- Time to health ready: 5552 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 58 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 174.37 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 174.37ms open 0; plugins.metadata.scan max 38.94ms open 0; config.normalize max 3.31ms open 0
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
- Resource peaks: CPU at 1114ms; RSS at 4062ms
- Diagnostic correlation:
  - CPU peaked at 200.2% around 1114ms
  - RSS peaked at 1552.1 MB around 4062ms
  - Slowest OpenClaw span: gateway.ready 174.37ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 26633 141% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 25980 868.5 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 137ms
  - resource samples: 2
  - peak sampled RSS: 32.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 25521 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r3-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 25773 0% command-tree,runtime-management ocm start kova-fresh-install-fresh-r3-kova-2026-07-09t225045z --runtime kova-local-1783...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 25980
- gateway port: 18789
- RSS: 56.6 MB
- CPU: 100%
- readiness: ready after 23 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 5525ms
- time to health ready: 5552ms
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
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 174.37ms
- most expensive repeated span: plugins.metadata.scan 4x 70.04ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 5552ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 705.4 MB
  - max sampled CPU: 58.8%
  - role peaks: 
  - top CPU: pid 25980 58.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 25980
- gateway port: 18789
- RSS: 676.8 MB
- CPU: 58.1%
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
- slowest OpenClaw span: gateway.ready 174.37ms
- most expensive repeated span: plugins.metadata.scan 5x 82.28ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' --json`
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 93ms
  - resource samples: 2
  - peak sampled RSS: 688 MB
  - max sampled CPU: 57.5%
  - role peaks: 
  - top CPU: pid 25980 57.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' -- status`
  - status: 0
  - duration: 2053ms
  - resource samples: 3
  - peak sampled RSS: 1363.3 MB
  - max sampled CPU: 200.2%
  - role peaks: 
  - top CPU: pid 26429 130% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 25980
- gateway port: 18789
- RSS: 868.4 MB
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
- slowest OpenClaw span: gateway.ready 174.37ms
- most expensive repeated span: plugins.metadata.scan 10x 181.9ms
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

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' -- plugins list`
  - status: 0
  - duration: 1661ms
  - resource samples: 3
  - peak sampled RSS: 1398.1 MB
  - max sampled CPU: 196.4%
  - role peaks: 
  - top CPU: pid 26633 141% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 4749ms
  - resource samples: 6
  - peak sampled RSS: 1552.1 MB
  - max sampled CPU: 183.4%
  - role peaks: 
  - top CPU: pid 26760 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 25980
- gateway port: 18789
- RSS: 643.9 MB
- CPU: 35.5%
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
- slowest OpenClaw span: gateway.ready 174.37ms
- most expensive repeated span: plugins.metadata.scan 13x 248.29ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
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

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' -- models list`
  - status: 0
  - duration: 1101ms
  - resource samples: 3
  - peak sampled RSS: 1175.3 MB
  - max sampled CPU: 172.1%
  - role peaks: 
  - top CPU: pid 27027 137% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 25980
- gateway port: 18789
- RSS: 643.9 MB
- CPU: 32.2%
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
- slowest OpenClaw span: gateway.ready 174.37ms
- most expensive repeated span: plugins.metadata.scan 18x 333.92ms
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

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' --tail 200 --raw`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 643.9 MB
  - max sampled CPU: 31.2%
  - role peaks: 
  - top CPU: pid 25980 31.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 25980
- gateway port: 18789
- RSS: 643.9 MB
- CPU: 31.1%
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
- slowest OpenClaw span: gateway.ready 174.37ms
- most expensive repeated span: plugins.metadata.scan 18x 333.92ms
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

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 643.9 MB
  - max sampled CPU: 29.4%
  - role peaks: 
  - top CPU: pid 25980 29.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-fresh-r3-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 25980
- gateway port: 18789
- RSS: 643.9 MB
- CPU: 29.3%
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
- slowest OpenClaw span: gateway.ready 174.37ms
- most expensive repeated span: plugins.metadata.scan 18x 333.92ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r3-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 1108ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 868 MB
- Tracked total peak RSS: 1539 MB
- Max CPU: 69.9%
- Resource samples: 29
- Command tree peak RSS: 684.8 MB
- Gateway peak RSS: 868 MB
- Resource by role:
  - gateway: RSS 868 MB; CPU 69.9%
  - gateway-tree: RSS 868 MB; CPU 69.9%
  - command-tree: RSS 684.8 MB; CPU 140.9%
  - plugin-cli: RSS 684.8 MB; CPU 140.9%
  - model-cli: RSS 525.9 MB; CPU 138.8%
  - status-cli: RSS 524.4 MB; CPU 140.8%
- Cold ready: 49 ms
- Warm ready: unknown ms
- Time to listening: 5769 ms
- Time to health ready: 5771 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 23
- Health p95: 24 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 166.6 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 166.6ms open 0; plugins.metadata.scan max 41.71ms open 0; config.normalize max 3.15ms open 0
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
- Resource peaks: CPU at 1062ms; RSS at 2064ms
- Diagnostic correlation:
  - CPU peaked at 201.4% around 1062ms
  - RSS peaked at 1539 MB around 2064ms
  - Slowest OpenClaw span: gateway.ready 166.6ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 29088 139% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 28224 868 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 133ms
  - resource samples: 2
  - peak sampled RSS: 32.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 27718 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 49ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 27970 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/resource-samples/provision-1.jsonl

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
- time to health ready: 5771ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 1/24 ok
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
- slowest OpenClaw span: gateway.ready 166.6ms
- most expensive repeated span: plugins.metadata.scan 4x 82.43ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: PASS, 5772ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 47ms
  - resource samples: 2
  - peak sampled RSS: 803.1 MB
  - max sampled CPU: 60.2%
  - role peaks: 
  - top CPU: pid 28224 60.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 28224
- gateway port: 18789
- RSS: 774.8 MB
- CPU: 59.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 24ms
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
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 166.6ms
- most expensive repeated span: plugins.metadata.scan 5x 93.94ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 76ms
  - resource samples: 2
  - peak sampled RSS: 805.9 MB
  - max sampled CPU: 58.8%
  - role peaks: 
  - top CPU: pid 28224 58.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 28224
- gateway port: 18789
- RSS: 783.8 MB
- CPU: 59.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 359ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
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
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 166.6ms
- most expensive repeated span: plugins.metadata.scan 7x 134.41ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 359ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 872.7 MB
  - max sampled CPU: 69.9%
  - role peaks: 
  - top CPU: pid 28224 69.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' -- status`
  - status: 0
  - duration: 1780ms
  - resource samples: 3
  - peak sampled RSS: 1392.1 MB
  - max sampled CPU: 201.4%
  - role peaks: 
  - top CPU: pid 28787 138% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 28224
- gateway port: 18789
- RSS: 867.9 MB
- CPU: 56.1%
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
- slowest OpenClaw span: gateway.ready 166.6ms
- most expensive repeated span: plugins.metadata.scan 10x 175.52ms
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

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' -- plugins list`
  - status: 0
  - duration: 1582ms
  - resource samples: 3
  - peak sampled RSS: 1399.2 MB
  - max sampled CPU: 185.7%
  - role peaks: 
  - top CPU: pid 28943 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 4952ms
  - resource samples: 6
  - peak sampled RSS: 1539 MB
  - max sampled CPU: 182.7%
  - role peaks: 
  - top CPU: pid 29088 139% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 28224
- gateway port: 18789
- RSS: 397.1 MB
- CPU: 34.4%
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
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 166.6ms
- most expensive repeated span: plugins.metadata.scan 13x 238.94ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' -- models list`
  - status: 0
  - duration: 1130ms
  - resource samples: 3
  - peak sampled RSS: 923.1 MB
  - max sampled CPU: 170.2%
  - role peaks: 
  - top CPU: pid 29370 136% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 28224
- gateway port: 18789
- RSS: 397.2 MB
- CPU: 31.3%
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
- slowest OpenClaw span: gateway.ready 166.6ms
- most expensive repeated span: plugins.metadata.scan 18x 325.77ms
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

- `ocm logs 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' --tail 200 --raw`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 397.2 MB
  - max sampled CPU: 30.4%
  - role peaks: 
  - top CPU: pid 28224 30.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 28224
- gateway port: 18789
- RSS: 397.2 MB
- CPU: 30.3%
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
- slowest OpenClaw span: gateway.ready 166.6ms
- most expensive repeated span: plugins.metadata.scan 18x 325.77ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 397.2 MB
  - max sampled CPU: 28.7%
  - role peaks: 
  - top CPU: pid 28224 28.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 28224
- gateway port: 18789
- RSS: 397.2 MB
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
- slowest OpenClaw span: gateway.ready 166.6ms
- most expensive repeated span: plugins.metadata.scan 18x 325.77ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r1-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 1101ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 706.2 MB
- Tracked total peak RSS: 1388.4 MB
- Max CPU: 60.8%
- Resource samples: 31
- Command tree peak RSS: 696.1 MB
- Gateway peak RSS: 706.2 MB
- Resource by role:
  - gateway: RSS 706.2 MB; CPU 60.8%
  - gateway-tree: RSS 706.2 MB; CPU 60.8%
  - command-tree: RSS 696.1 MB; CPU 142.8%
  - plugin-cli: RSS 696.1 MB; CPU 142.8%
  - status-cli: RSS 565 MB; CPU 142.8%
  - model-cli: RSS 532.3 MB; CPU 142.8%
- Cold ready: 51 ms
- Warm ready: unknown ms
- Time to listening: 6034 ms
- Time to health ready: 6061 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 24
- Health p95: 22 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (222 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 184.55 ms
- Open OpenClaw spans: 4 (0 required)
- Slowest open span: gateway.ready 141 ms
- Key OpenClaw spans: gateway.ready max 184.55ms open 1; plugins.metadata.scan max 42.97ms open 0; config.normalize max 3.12ms open 0
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
- Resource peaks: CPU at 1065ms; RSS at 2059ms
- Diagnostic correlation:
  - CPU peaked at 188% around 1065ms
  - RSS peaked at 1388.4 MB around 2059ms
  - Slowest OpenClaw span: gateway.ready 184.55ms
  - Open OpenClaw span: gateway.ready age 141ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 31134 140% command-tree,status-cli openclaw
- Top RSS process: pid 30565 706.2 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 135ms
  - resource samples: 2
  - peak sampled RSS: 22.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 30059 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 1ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 30311 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6034ms
- time to health ready: 6061ms
- tcp listening: ok in 0ms
- health: ok (200) in 27ms
- health samples: 1/25 ok
- health latency p95/max: 12ms / 27ms
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
- slowest OpenClaw span: plugins.runtime-post-bind 98.46ms
- most expensive repeated span: plugins.metadata.scan 4x 77.33ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: PASS, 6061ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 17ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 78ms
  - resource samples: 2
  - peak sampled RSS: 725.6 MB
  - max sampled CPU: 60.8%
  - role peaks: 
  - top CPU: pid 30565 60.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 30565
- gateway port: 18789
- RSS: 705.4 MB
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
- slowest OpenClaw span: gateway.ready 184.55ms
- most expensive repeated span: plugins.metadata.scan 4x 77.33ms
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
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 736.2 MB
  - max sampled CPU: 56.5%
  - role peaks: 
  - top CPU: pid 30565 56.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 30565
- gateway port: 18789
- RSS: 705.5 MB
- CPU: 55.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
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
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 184.55ms
- most expensive repeated span: plugins.metadata.scan 4x 77.33ms
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

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 710.4 MB
  - max sampled CPU: 51.9%
  - role peaks: 
  - top CPU: pid 30565 51.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' -- status`
  - status: 0
  - duration: 1916ms
  - resource samples: 3
  - peak sampled RSS: 1270.5 MB
  - max sampled CPU: 188%
  - role peaks: 
  - top CPU: pid 31134 140% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 30565
- gateway port: 18789
- RSS: 706.2 MB
- CPU: 41.2%
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
- OpenClaw timeline events: 203
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 184.55ms
- most expensive repeated span: plugins.metadata.scan 7x 118.04ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' -- plugins list`
  - status: 0
  - duration: 1751ms
  - resource samples: 3
  - peak sampled RSS: 1231.1 MB
  - max sampled CPU: 178.1%
  - role peaks: 
  - top CPU: pid 31305 139% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 6965ms
  - resource samples: 8
  - peak sampled RSS: 1388.4 MB
  - max sampled CPU: 171.2%
  - role peaks: 
  - top CPU: pid 31455 138% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 30565
- gateway port: 18789
- RSS: 356.2 MB
- CPU: 23%
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
- OpenClaw timeline events: 212
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 184.55ms
- most expensive repeated span: plugins.metadata.scan 10x 184.34ms
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

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' -- models list`
  - status: 0
  - duration: 1099ms
  - resource samples: 3
  - peak sampled RSS: 888.5 MB
  - max sampled CPU: 164%
  - role peaks: 
  - top CPU: pid 31708 140% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 30565
- gateway port: 18789
- RSS: 356.2 MB
- CPU: 21.1%
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
- OpenClaw timeline events: 222
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 184.55ms
- most expensive repeated span: plugins.metadata.scan 15x 272.51ms
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

- `ocm logs 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' --tail 200 --raw`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 356.5 MB
  - max sampled CPU: 20.6%
  - role peaks: 
  - top CPU: pid 30565 20.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 30565
- gateway port: 18789
- RSS: 356.5 MB
- CPU: 20.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 0ms
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
- OpenClaw timeline events: 222
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 184.55ms
- most expensive repeated span: plugins.metadata.scan 15x 272.51ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 0ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 356.5 MB
  - max sampled CPU: 19.6%
  - role peaks: 
  - top CPU: pid 30565 19.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 30565
- gateway port: 18789
- RSS: 356.5 MB
- CPU: 19.5%
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
- OpenClaw timeline events: 222
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 184.55ms
- most expensive repeated span: plugins.metadata.scan 15x 272.51ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r2-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 1124ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 856.3 MB
- Tracked total peak RSS: 1419.6 MB
- Max CPU: 67.9%
- Resource samples: 29
- Command tree peak RSS: 668.1 MB
- Gateway peak RSS: 856.3 MB
- Resource by role:
  - gateway: RSS 856.3 MB; CPU 67.9%
  - gateway-tree: RSS 856.3 MB; CPU 67.9%
  - command-tree: RSS 668.1 MB; CPU 138.8%
  - plugin-cli: RSS 668.1 MB; CPU 138.8%
  - status-cli: RSS 550.4 MB; CPU 137.9%
  - model-cli: RSS 491 MB; CPU 138.8%
- Cold ready: 49 ms
- Warm ready: unknown ms
- Time to listening: 5770 ms
- Time to health ready: 5843 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 23
- Health p95: 22 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 144.32 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 144.32ms open 0; plugins.metadata.scan max 42.8ms open 0; config.normalize max 3.05ms open 0
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
- Resource peaks: CPU at 1057ms; RSS at 1067ms
- Diagnostic correlation:
  - CPU peaked at 196.9% around 1057ms
  - RSS peaked at 1419.6 MB around 1067ms
  - Slowest OpenClaw span: gateway.ready 144.32ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 33471 136% command-tree,status-cli openclaw
- Top RSS process: pid 32906 856.3 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 135ms
  - resource samples: 2
  - peak sampled RSS: 29.2 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 32399 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 49ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 32651 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 24 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 5770ms
- time to health ready: 5843ms
- tcp listening: ok in 1ms
- health: ok (200) in 73ms
- health samples: 1/24 ok
- health latency p95/max: 1ms / 73ms
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
- slowest OpenClaw span: gateway.ready 144.32ms
- most expensive repeated span: plugins.metadata.scan 4x 75.39ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: PASS, 5843ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 46ms
  - resource samples: 2
  - peak sampled RSS: 793.6 MB
  - max sampled CPU: 58.5%
  - role peaks: 
  - top CPU: pid 32906 58.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 32906
- gateway port: 18789
- RSS: 767.8 MB
- CPU: 58%
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
- slowest OpenClaw span: gateway.ready 144.32ms
- most expensive repeated span: plugins.metadata.scan 5x 86.93ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 80ms
  - resource samples: 2
  - peak sampled RSS: 803.6 MB
  - max sampled CPU: 57.5%
  - role peaks: 
  - top CPU: pid 32906 57.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 32906
- gateway port: 18789
- RSS: 779.1 MB
- CPU: 57.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 353ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
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
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 144.32ms
- most expensive repeated span: plugins.metadata.scan 7x 124.02ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 353ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 860.9 MB
  - max sampled CPU: 67.9%
  - role peaks: 
  - top CPU: pid 32906 67.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' -- status`
  - status: 0
  - duration: 1796ms
  - resource samples: 3
  - peak sampled RSS: 1406.5 MB
  - max sampled CPU: 196.9%
  - role peaks: 
  - top CPU: pid 33471 136% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 32906
- gateway port: 18789
- RSS: 856.3 MB
- CPU: 54.4%
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
- slowest OpenClaw span: gateway.ready 144.32ms
- most expensive repeated span: plugins.metadata.scan 10x 163.26ms
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

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' -- plugins list`
  - status: 0
  - duration: 1606ms
  - resource samples: 3
  - peak sampled RSS: 1375.9 MB
  - max sampled CPU: 185.4%
  - role peaks: 
  - top CPU: pid 33627 136% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 4953ms
  - resource samples: 6
  - peak sampled RSS: 1419.6 MB
  - max sampled CPU: 177.3%
  - role peaks: 
  - top CPU: pid 33760 134% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 32906
- gateway port: 18789
- RSS: 393 MB
- CPU: 33.4%
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
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 144.32ms
- most expensive repeated span: plugins.metadata.scan 13x 226.24ms
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

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' -- models list`
  - status: 0
  - duration: 1098ms
  - resource samples: 3
  - peak sampled RSS: 884 MB
  - max sampled CPU: 169.4%
  - role peaks: 
  - top CPU: pid 34348 136% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 32906
- gateway port: 18789
- RSS: 393 MB
- CPU: 30.5%
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
- slowest OpenClaw span: gateway.ready 144.32ms
- most expensive repeated span: plugins.metadata.scan 18x 310.75ms
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

- `ocm logs 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' --tail 200 --raw`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 393 MB
  - max sampled CPU: 29.6%
  - role peaks: 
  - top CPU: pid 32906 29.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 32906
- gateway port: 18789
- RSS: 393 MB
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
- slowest OpenClaw span: gateway.ready 144.32ms
- most expensive repeated span: plugins.metadata.scan 18x 310.75ms
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

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 393 MB
  - max sampled CPU: 28%
  - role peaks: 
  - top CPU: pid 32906 28% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 32906
- gateway port: 18789
- RSS: 393 MB
- CPU: 27.9%
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
- slowest OpenClaw span: gateway.ready 144.32ms
- most expensive repeated span: plugins.metadata.scan 18x 310.75ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r3-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 1263ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 867.2 MB
- Tracked total peak RSS: 872.1 MB
- Max CPU: 68.9%
- Resource samples: 14
- Command tree peak RSS: 31.7 MB
- Gateway peak RSS: 867.2 MB
- Resource by role:
  - gateway: RSS 867.2 MB; CPU 68.9%
  - gateway-tree: RSS 867.2 MB; CPU 68.9%
  - command-tree: RSS 31.7 MB; CPU 0%
  - runtime-staging: RSS 31.7 MB; CPU 0%
  - mock-provider: RSS 21 MB; CPU 0%
  - plugin-cli: RSS 6.7 MB; CPU 0%
- Cold ready: 48 ms
- Warm ready: 45 ms
- Time to listening: 5771 ms
- Time to health ready: 5774 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 23
- Health p95: 55 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (203 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 183.73 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 183.73ms open 0; plugins.metadata.scan max 41.3ms open 0; config.normalize max 3.04ms open 0
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
- Resource peaks: CPU at 44ms; RSS at 44ms
- Diagnostic correlation:
  - CPU peaked at 68.9% around 44ms
  - RSS peaked at 872.1 MB around 44ms
  - Slowest OpenClaw span: gateway.ready 183.73ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 35526 68.9% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 35526 867.2 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 134ms
  - resource samples: 2
  - peak sampled RSS: 21 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 35020 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 35272 0% command-tree,runtime-management ocm start kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 24 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 5771ms
- time to health ready: 5774ms
- tcp listening: ok in 0ms
- health: ok (200) in 3ms
- health samples: 1/24 ok
- health latency p95/max: 1ms / 3ms
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
- slowest OpenClaw span: gateway.ready 183.73ms
- most expensive repeated span: plugins.metadata.scan 4x 84.78ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: PASS, 5774ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 819.9 MB
  - max sampled CPU: 60.5%
  - role peaks: 
  - top CPU: pid 35526 60.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 35526
- gateway port: 18789
- RSS: 788.2 MB
- CPU: 59.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 46ms
- health samples: 3/3 ok
- health latency p95/max: 46ms / 46ms
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
- slowest OpenClaw span: gateway.ready 183.73ms
- most expensive repeated span: plugins.metadata.scan 5x 96.55ms
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

#### State Setup After cold-start

Apply Kova state 'missing-plugin-index' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 80ms
  - resource samples: 2
  - peak sampled RSS: 800.8 MB
  - max sampled CPU: 58.8%
  - role peaks: 
  - top CPU: pid 35526 58.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 35526
- gateway port: 18789
- RSS: 797.8 MB
- CPU: 59.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 0ms
- time to health ready: 382ms
- tcp listening: ok in 0ms
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
- OpenClaw timeline events: 203
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 183.73ms
- most expensive repeated span: plugins.metadata.scan 6x 124.83ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 382ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z'`
  - status: 0
  - duration: 45ms
  - resource samples: 2
  - peak sampled RSS: 872.1 MB
  - max sampled CPU: 68.9%
  - role peaks: 
  - top CPU: pid 35526 68.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 44ms
  - resource samples: 2
  - peak sampled RSS: 872 MB
  - max sampled CPU: 68.4%
  - role peaks: 
  - top CPU: pid 35526 68.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 35526
- gateway port: 18789
- RSS: 867.1 MB
- CPU: 68.1%
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
- OpenClaw timeline events: 203
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 183.73ms
- most expensive repeated span: plugins.metadata.scan 6x 124.83ms
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
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 867.2 MB
  - max sampled CPU: 59.6%
  - role peaks: 
  - top CPU: pid 35526 59.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 35526
- gateway port: 18789
- RSS: 867.2 MB
- CPU: 59.3%
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
- OpenClaw timeline events: 203
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 183.73ms
- most expensive repeated span: plugins.metadata.scan 6x 124.83ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 1103ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 808.5 MB
- Tracked total peak RSS: 813.4 MB
- Max CPU: 69.3%
- Resource samples: 14
- Command tree peak RSS: 26.2 MB
- Gateway peak RSS: 808.5 MB
- Resource by role:
  - gateway: RSS 808.5 MB; CPU 69.3%
  - gateway-tree: RSS 808.5 MB; CPU 69.3%
  - command-tree: RSS 26.2 MB; CPU 0%
  - runtime-staging: RSS 26.2 MB; CPU 0%
  - mock-provider: RSS 25.5 MB; CPU 0%
  - plugin-cli: RSS 6.6 MB; CPU 0%
- Cold ready: 64 ms
- Warm ready: 55 ms
- Time to listening: 5777 ms
- Time to health ready: 5779 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 31 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (205 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 168.39 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 168.39ms open 0; plugins.metadata.scan max 44.97ms open 0; config.normalize max 3.16ms open 0
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
- Resource peaks: CPU at 53ms; RSS at 53ms
- Diagnostic correlation:
  - CPU peaked at 69.3% around 53ms
  - RSS peaked at 813.4 MB around 53ms
  - Slowest OpenClaw span: gateway.ready 168.39ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 37127 69.3% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 37127 808.5 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 141ms
  - resource samples: 2
  - peak sampled RSS: 25.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 36622 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 1ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 64ms
  - resource samples: 2
  - peak sampled RSS: 4.8 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 36874 0% command-tree,runtime-management ocm start kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 37127
- gateway port: 18789
- RSS: 42 MB
- CPU: 0%
- readiness: ready after 24 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 5777ms
- time to health ready: 5779ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
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
- slowest OpenClaw span: gateway.ready 168.39ms
- most expensive repeated span: plugins.metadata.scan 4x 80.83ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 5779ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 703.8 MB
  - max sampled CPU: 60.2%
  - role peaks: 
  - top CPU: pid 37127 60.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 37127
- gateway port: 18789
- RSS: 677.6 MB
- CPU: 59.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 15ms
- health samples: 3/3 ok
- health latency p95/max: 15ms / 15ms
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
- slowest OpenClaw span: gateway.ready 168.39ms
- most expensive repeated span: plugins.metadata.scan 5x 93.68ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'missing-plugin-index' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 85ms
  - resource samples: 2
  - peak sampled RSS: 693.1 MB
  - max sampled CPU: 59%
  - role peaks: 
  - top CPU: pid 37127 59% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 37127
- gateway port: 18789
- RSS: 694.9 MB
- CPU: 59.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 1ms
- time to health ready: 375ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
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
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 168.39ms
- most expensive repeated span: plugins.metadata.scan 7x 138.07ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 8ms, artifacts 0
  - readiness: PASS, 375ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z'`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 813.4 MB
  - max sampled CPU: 69.3%
  - role peaks: 
  - top CPU: pid 37127 69.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 813.3 MB
  - max sampled CPU: 68.9%
  - role peaks: 
  - top CPU: pid 37127 68.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 37127
- gateway port: 18789
- RSS: 808.4 MB
- CPU: 68.3%
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
- slowest OpenClaw span: gateway.ready 168.39ms
- most expensive repeated span: plugins.metadata.scan 7x 138.07ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 808.5 MB
  - max sampled CPU: 60.5%
  - role peaks: 
  - top CPU: pid 37127 60.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 37127
- gateway port: 18789
- RSS: 808.5 MB
- CPU: 60.1%
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
- slowest OpenClaw span: gateway.ready 168.39ms
- most expensive repeated span: plugins.metadata.scan 7x 138.07ms
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
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 1125ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 865.1 MB
- Tracked total peak RSS: 870 MB
- Max CPU: 61.3%
- Resource samples: 14
- Command tree peak RSS: 28.7 MB
- Gateway peak RSS: 865.1 MB
- Resource by role:
  - gateway: RSS 865.1 MB; CPU 61.3%
  - gateway-tree: RSS 865.1 MB; CPU 61.3%
  - command-tree: RSS 28.7 MB; CPU 0%
  - runtime-staging: RSS 28.7 MB; CPU 0%
  - mock-provider: RSS 21.8 MB; CPU 0%
  - plugin-cli: RSS 6.8 MB; CPU 0%
- Cold ready: 51 ms
- Warm ready: 50 ms
- Time to listening: 6773 ms
- Time to health ready: 6849 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 27
- Health p95: 56 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (205 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 149.76 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 149.76ms open 0; plugins.metadata.scan max 33.44ms open 0; config.normalize max 3.16ms open 0
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
- Resource peaks: CPU at 49ms; RSS at 49ms
- Diagnostic correlation:
  - CPU peaked at 61.3% around 49ms
  - RSS peaked at 870 MB around 49ms
  - Slowest OpenClaw span: gateway.ready 149.76ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 38735 61.3% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 38735 865.1 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 133ms
  - resource samples: 2
  - peak sampled RSS: 21.8 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 38229 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 38481 0% command-tree,runtime-management ocm start kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 28 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 6773ms
- time to health ready: 6849ms
- tcp listening: ok in 0ms
- health: ok (200) in 76ms
- health samples: 1/28 ok
- health latency p95/max: 1ms / 76ms
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
- slowest OpenClaw span: gateway.ready 149.76ms
- most expensive repeated span: plugins.metadata.scan 4x 71.37ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: PASS, 6849ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 667 MB
  - max sampled CPU: 50%
  - role peaks: 
  - top CPU: pid 38735 50% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 38735
- gateway port: 18789
- RSS: 638.3 MB
- CPU: 49.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 26ms
- health samples: 3/3 ok
- health latency p95/max: 26ms / 26ms
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
- slowest OpenClaw span: gateway.ready 149.76ms
- most expensive repeated span: plugins.metadata.scan 5x 84.84ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'missing-plugin-index' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 86ms
  - resource samples: 2
  - peak sampled RSS: 654 MB
  - max sampled CPU: 50.3%
  - role peaks: 
  - top CPU: pid 38735 50.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 38735
- gateway port: 18789
- RSS: 656.6 MB
- CPU: 50.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 0ms
- time to health ready: 409ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
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
- slowest OpenClaw span: gateway.ready 149.76ms
- most expensive repeated span: plugins.metadata.scan 7x 127.06ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 409ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z'`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 870 MB
  - max sampled CPU: 61.3%
  - role peaks: 
  - top CPU: pid 38735 61.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 869.9 MB
  - max sampled CPU: 60.9%
  - role peaks: 
  - top CPU: pid 38735 60.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 38735
- gateway port: 18789
- RSS: 865 MB
- CPU: 60.4%
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
- slowest OpenClaw span: gateway.ready 149.76ms
- most expensive repeated span: plugins.metadata.scan 7x 127.06ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 47ms
  - resource samples: 2
  - peak sampled RSS: 865.1 MB
  - max sampled CPU: 54%
  - role peaks: 
  - top CPU: pid 38735 54% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 38735
- gateway port: 18789
- RSS: 865.1 MB
- CPU: 53.7%
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
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 149.76ms
- most expensive repeated span: plugins.metadata.scan 7x 127.06ms
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
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 1216ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 638.9 MB
- Tracked total peak RSS: 1083 MB
- Max CPU: 143%
- Resource samples: 22
- Command tree peak RSS: 534.3 MB
- Gateway peak RSS: 638.9 MB
- Resource by role:
  - gateway: RSS 638.9 MB; CPU 143%
  - gateway-tree: RSS 638.9 MB; CPU 142%
  - command-tree: RSS 534.3 MB; CPU 136.8%
  - plugin-cli: RSS 534.3 MB; CPU 136.8%
  - mock-provider: RSS 30.3 MB; CPU 0%
  - runtime-staging: RSS 29.5 MB; CPU 0%
- Cold ready: 52 ms
- Warm ready: 51 ms
- Time to listening: 2513 ms
- Time to health ready: 2589 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 9
- Health p95: 35 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (211 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 182.28 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 182.28ms open 0; plugins.metadata.scan max 46.67ms open 0; config.normalize max 45.81ms open 0
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
- Resource peaks: CPU at 1114ms; RSS at 1094ms
- Diagnostic correlation:
  - CPU peaked at 266.8% around 1114ms
  - RSS peaked at 1083 MB around 1094ms
  - Slowest OpenClaw span: gateway.ready 182.28ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 40336 142% gateway,gateway-tree openclaw
- Top RSS process: pid 40644 638.9 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 135ms
  - resource samples: 2
  - peak sampled RSS: 30.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 39831 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 1ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 40083 0% command-tree,runtime-management ocm start kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/resource-samples/startup-1.jsonl

Metrics:

- gateway state: running
- child pid: 40336
- gateway port: 18789
- RSS: 42.3 MB
- CPU: 0%
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
- slowest OpenClaw span: plugins.metadata.scan 46.67ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: FAIL, 1ms, artifacts 0 (readiness deadline expired)
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 16ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 69ms
  - resource samples: 2
  - peak sampled RSS: 333.6 MB
  - max sampled CPU: 142%
  - role peaks: 
  - top CPU: pid 40336 142% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 40336
- gateway port: 18789
- RSS: 316.1 MB
- CPU: 143%
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
- OpenClaw timeline events: 4
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 46.67ms
- most expensive repeated span: plugins.metadata.scan 2x 70.88ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: FAIL, 0ms, artifacts 0 (readiness deadline expired)
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' -- plugins list`
  - status: 0
  - duration: 1678ms
  - resource samples: 3
  - peak sampled RSS: 828 MB
  - max sampled CPU: 266.8%
  - role peaks: 
  - top CPU: pid 40629 134% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1585ms
  - resource samples: 3
  - peak sampled RSS: 1083 MB
  - max sampled CPU: 233.2%
  - role peaks: 
  - top CPU: pid 40859 131% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' --tail 400 --raw`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 586.3 MB
  - max sampled CPU: 81.2%
  - role peaks: 
  - top CPU: pid 40644 81.2% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 40644
- gateway port: 18789
- RSS: 586.3 MB
- CPU: 79.1%
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
- OpenClaw timeline events: 14
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 46.67ms
- most expensive repeated span: plugins.metadata.scan 7x 207.26ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: FAIL, 1ms, artifacts 0 (readiness deadline expired)
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z'`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 591.6 MB
  - max sampled CPU: 66.7%
  - role peaks: 
  - top CPU: pid 40644 66.7% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 591.2 MB
  - max sampled CPU: 65.5%
  - role peaks: 
  - top CPU: pid 40644 65.5% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' --tail 400 --raw`
  - status: 0
  - duration: 44ms
  - resource samples: 2
  - peak sampled RSS: 586.5 MB
  - max sampled CPU: 64.5%
  - role peaks: 
  - top CPU: pid 40644 64.5% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 40644
- gateway port: 18789
- RSS: 586.5 MB
- CPU: 63.3%
- readiness: ready after 11 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 2513ms
- time to health ready: 2589ms
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
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 182.28ms
- most expensive repeated span: plugins.metadata.scan 10x 252.25ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 2589ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 638.9 MB
  - max sampled CPU: 50.6%
  - role peaks: 
  - top CPU: pid 40644 50.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 40644
- gateway port: 18789
- RSS: 638.9 MB
- CPU: 50.2%
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
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 182.28ms
- most expensive repeated span: plugins.metadata.scan 10x 252.25ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 977ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 772.2 MB
- Tracked total peak RSS: 1278.5 MB
- Max CPU: 136%
- Resource samples: 22
- Command tree peak RSS: 562.5 MB
- Gateway peak RSS: 772.2 MB
- Resource by role:
  - gateway: RSS 772.2 MB; CPU 136%
  - gateway-tree: RSS 772.2 MB; CPU 136%
  - command-tree: RSS 562.5 MB; CPU 137.8%
  - plugin-cli: RSS 562.5 MB; CPU 137.8%
  - runtime-staging: RSS 28 MB; CPU 0%
  - mock-provider: RSS 22.6 MB; CPU 0%
- Cold ready: 50 ms
- Warm ready: 58 ms
- Time to listening: 1508 ms
- Time to health ready: 1510 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 6
- Health p95: 6 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (207 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 171.02 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 171.02ms open 0; config.normalize max 44.97ms open 0; plugins.metadata.scan max 42.28ms open 0
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
- Resource peaks: CPU at 1072ms; RSS at 1069ms
- Diagnostic correlation:
  - CPU peaked at 256.8% around 1072ms
  - RSS peaked at 1278.5 MB around 1069ms
  - Slowest OpenClaw span: gateway.ready 171.02ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 42712 136% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 42712 772.2 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 134ms
  - resource samples: 2
  - peak sampled RSS: 22.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 41948 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 42200 0% command-tree,runtime-management ocm start kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/resource-samples/startup-1.jsonl

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

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 28 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 42467 0% command-tree,runtime-staging ocm env exec kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z -- node /home...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 42712
- gateway port: 18789
- RSS: 43.1 MB
- CPU: 100%
- readiness: not-ready after 1 attempt(s)
- readiness classification: hard-failure
- readiness reason: gateway TCP socket never accepted connections before the hard deadline
- readiness threshold/deadline: 0ms / 0ms
- time to listening: not-readyms
- time to health ready: not-readyms
- tcp listening: not-ok in 1ms
- tcp error: connect ECONNREFUSED 127.0.0.1:18789
- health: not-ok in 0ms
- health error: fetch failed
- health samples: 0/3 ok
- health latency p95/max: 0ms / 0ms
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
- slowest OpenClaw span: plugins.metadata.scan 42.28ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: FAIL, 1ms, artifacts 0 (readiness deadline expired)
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' -- plugins list`
  - status: 0
  - duration: 1625ms
  - resource samples: 3
  - peak sampled RSS: 1269.5 MB
  - max sampled CPU: 256.8%
  - role peaks: 
  - top CPU: pid 42712 136% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1501ms
  - resource samples: 3
  - peak sampled RSS: 1278.5 MB
  - max sampled CPU: 205.8%
  - role peaks: 
  - top CPU: pid 42984 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' --tail 400 --raw`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 726.7 MB
  - max sampled CPU: 59.8%
  - role peaks: 
  - top CPU: pid 42712 59.8% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 42712
- gateway port: 18789
- RSS: 726.7 MB
- CPU: 58.7%
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
- health latency p95/max: 0ms / 0ms
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
- slowest OpenClaw span: plugins.metadata.scan 42.28ms
- most expensive repeated span: plugins.metadata.scan 5x 130.46ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: FAIL, 0ms, artifacts 0 (readiness deadline expired)
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z'`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 732 MB
  - max sampled CPU: 51.8%
  - role peaks: 
  - top CPU: pid 42712 51.8% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 732.2 MB
  - max sampled CPU: 51.1%
  - role peaks: 
  - top CPU: pid 42712 51.1% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' --tail 400 --raw`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 733 MB
  - max sampled CPU: 51.1%
  - role peaks: 
  - top CPU: pid 42712 51.1% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 42712
- gateway port: 18789
- RSS: 734.3 MB
- CPU: 51.1%
- readiness: ready after 7 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 1508ms
- time to health ready: 1510ms
- tcp listening: ok in 0ms
- health: ok (200) in 0ms
- health samples: 3/3 ok
- health latency p95/max: 6ms / 6ms
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
- slowest OpenClaw span: gateway.ready 171.02ms
- most expensive repeated span: plugins.metadata.scan 8x 172.84ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 1510ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 14ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 772.2 MB
  - max sampled CPU: 51%
  - role peaks: 
  - top CPU: pid 42712 51% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 42712
- gateway port: 18789
- RSS: 772.2 MB
- CPU: 50.4%
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
- OpenClaw timeline events: 207
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 171.02ms
- most expensive repeated span: plugins.metadata.scan 8x 172.84ms
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
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 989ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 616.3 MB
- Tracked total peak RSS: 1132.4 MB
- Max CPU: 120%
- Resource samples: 22
- Command tree peak RSS: 559.7 MB
- Gateway peak RSS: 616.3 MB
- Resource by role:
  - gateway: RSS 616.3 MB; CPU 120%
  - gateway-tree: RSS 616.3 MB; CPU 120%
  - command-tree: RSS 559.7 MB; CPU 139.8%
  - plugin-cli: RSS 559.7 MB; CPU 139.8%
  - runtime-staging: RSS 29 MB; CPU 0%
  - mock-provider: RSS 28.4 MB; CPU 0%
- Cold ready: 46 ms
- Warm ready: 49 ms
- Time to listening: 2006 ms
- Time to health ready: 2008 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 3
- Health p95: 8 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (207 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 164.21 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 164.21ms open 0; config.normalize max 44.91ms open 0; plugins.metadata.scan max 42.55ms open 0
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
- Resource peaks: CPU at 1063ms; RSS at 1058ms
- Diagnostic correlation:
  - CPU peaked at 251.8% around 1063ms
  - RSS peaked at 1132.4 MB around 1058ms
  - Slowest OpenClaw span: gateway.ready 164.21ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 45102 137% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 44849 616.3 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 134ms
  - resource samples: 2
  - peak sampled RSS: 28.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 44052 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 1ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 46ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 44304 0% command-tree,runtime-management ocm start kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/resource-samples/startup-1.jsonl

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
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 5ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 46ms
  - resource samples: 2
  - peak sampled RSS: 29 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 44571 0% command-tree,runtime-staging ocm env exec kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z -- node /home...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

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
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' -- plugins list`
  - status: 0
  - duration: 1701ms
  - resource samples: 3
  - peak sampled RSS: 1026.6 MB
  - max sampled CPU: 251.8%
  - role peaks: 
  - top CPU: pid 44944 129% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1493ms
  - resource samples: 3
  - peak sampled RSS: 1132.4 MB
  - max sampled CPU: 214.4%
  - role peaks: 
  - top CPU: pid 45102 137% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' --tail 400 --raw`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 572.7 MB
  - max sampled CPU: 64.3%
  - role peaks: 
  - top CPU: pid 44849 64.3% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 44849
- gateway port: 18789
- RSS: 572.8 MB
- CPU: 62.9%
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
- slowest OpenClaw span: plugins.metadata.scan 42.55ms
- most expensive repeated span: plugins.metadata.scan 5x 131.33ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: FAIL, 0ms, artifacts 0 (readiness deadline expired)
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z'`
  - status: 0
  - duration: 49ms
  - resource samples: 2
  - peak sampled RSS: 577.9 MB
  - max sampled CPU: 54.4%
  - role peaks: 
  - top CPU: pid 44849 54.4% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 45ms
  - resource samples: 2
  - peak sampled RSS: 577.7 MB
  - max sampled CPU: 53.6%
  - role peaks: 
  - top CPU: pid 44849 53.6% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' --tail 400 --raw`
  - status: 0
  - duration: 46ms
  - resource samples: 2
  - peak sampled RSS: 572.8 MB
  - max sampled CPU: 52.9%
  - role peaks: 
  - top CPU: pid 44849 52.9% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 44849
- gateway port: 18789
- RSS: 572.8 MB
- CPU: 52.2%
- readiness: ready after 9 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 2006ms
- time to health ready: 2008ms
- tcp listening: ok in 0ms
- health: ok (200) in 0ms
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
- OpenClaw timeline events: 207
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 164.21ms
- most expensive repeated span: plugins.metadata.scan 8x 175.9ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2008ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 47ms
  - resource samples: 2
  - peak sampled RSS: 616.3 MB
  - max sampled CPU: 48%
  - role peaks: 
  - top CPU: pid 44849 48% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 44849
- gateway port: 18789
- RSS: 616.3 MB
- CPU: 47.5%
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
- slowest OpenClaw span: gateway.ready 164.21ms
- most expensive repeated span: plugins.metadata.scan 8x 175.9ms
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
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 1079ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 722.6 MB
- Tracked total peak RSS: 722.6 MB
- Max CPU: 139.8%
- Resource samples: 19
- Command tree peak RSS: 722.6 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 722.6 MB; CPU 139.8%
  - agent-process: RSS 722.6 MB; CPU 139.8%
  - command-tree: RSS 722.6 MB; CPU 139.8%
  - status-cli: RSS 519.1 MB; CPU 138.8%
  - uncategorized: RSS 24.7 MB; CPU 0%
  - mock-provider: RSS 24.5 MB; CPU 0%
- Cold ready: 45 ms
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
- Slowest OpenClaw span: plugins.metadata.scan 43.42 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 43.42ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 32 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 32 ms
- Agent turn: 2527 ms (true)
- Agent cold/warm: cold 2527 ms; warm 2427 ms; delta 100 ms
- Agent pre-provider: cold 2424 ms; warm 2336 ms; delta 88 ms
- Agent provider final: cold 1 ms; warm 1 ms
- Agent turn stats: count 2; p95 2522 ms; max 2527 ms; pre-provider p95 2419.6 ms
- Provider evidence: 1 request(s); provider work 1 ms; pre-provider 2424 ms; post-provider 102 ms
- Agent latency diagnosis: cold agent turn 2527ms; pre-provider 2424ms; provider 1ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 2527 ms; pre-provider 2424 ms; provider 1 ms; post-provider 102 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2424ms; provider 1ms; post-provider 102ms; unknown 2424ms; source none
  - warm: total 2427 ms; pre-provider 2336 ms; provider 1 ms; post-provider 90 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2336ms; provider 1ms; post-provider 90ms; unknown 2336ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1120ms; RSS at 2113ms
- Diagnostic correlation:
  - CPU peaked at 139.8% around 1120ms
  - RSS peaked at 722.6 MB around 2113ms
  - Slowest OpenClaw span: plugins.metadata.scan 43.42ms
  - Provider/model timing max: 32ms
- Top CPU process: pid 47891 137% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 47891 659.5 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 132ms
  - resource samples: 2
  - peak sampled RSS: 24.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 46159 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --no-service --json`
  - status: 0
  - duration: 45ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 46411 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/resource-samples/provision-1.jsonl

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
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 24.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 46664 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t22504...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

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
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2527ms
  - resource samples: 4
  - peak sampled RSS: 698.5 MB
  - max sampled CPU: 137.7%
  - role peaks: 
  - top CPU: pid 47148 135% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 42.56ms
- most expensive repeated span: plugins.metadata.scan 5x 80.64ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 32ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2427ms
  - resource samples: 4
  - peak sampled RSS: 722.6 MB
  - max sampled CPU: 139.8%
  - role peaks: 
  - top CPU: pid 47891 137% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 43.42ms
- most expensive repeated span: plugins.metadata.scan 10x 160.17ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 32ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z' -- status`
  - status: 0
  - duration: 1727ms
  - resource samples: 3
  - peak sampled RSS: 519.1 MB
  - max sampled CPU: 138.8%
  - role peaks: 
  - top CPU: pid 48540 136% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 43.42ms
- most expensive repeated span: plugins.metadata.scan 13x 217.23ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 32ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 49ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 48830 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 43.42ms
- most expensive repeated span: plugins.metadata.scan 13x 217.23ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 32ms
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
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 748ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 724.1 MB
- Tracked total peak RSS: 724.1 MB
- Max CPU: 139.7%
- Resource samples: 19
- Command tree peak RSS: 724.1 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 724.1 MB; CPU 139.7%
  - agent-process: RSS 724.1 MB; CPU 139.7%
  - command-tree: RSS 724.1 MB; CPU 139.7%
  - status-cli: RSS 571.7 MB; CPU 135.8%
  - uncategorized: RSS 28.3 MB; CPU 0%
  - mock-provider: RSS 21 MB; CPU 0%
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
- Slowest OpenClaw span: plugins.metadata.scan 45.88 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 45.88ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 30 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 30 ms
- Agent turn: 2540 ms (true)
- Agent cold/warm: cold 2540 ms; warm 2459 ms; delta 81 ms
- Agent pre-provider: cold 2448 ms; warm 2371 ms; delta 77 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 2535.95 ms; max 2540 ms; pre-provider p95 2444.15 ms
- Provider evidence: 1 request(s); provider work 2 ms; pre-provider 2448 ms; post-provider 90 ms
- Agent latency diagnosis: cold agent turn 2540ms; pre-provider 2448ms; provider 2ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 2540 ms; pre-provider 2448 ms; provider 2 ms; post-provider 90 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2448ms; provider 2ms; post-provider 90ms; unknown 2448ms; source none
  - warm: total 2459 ms; pre-provider 2371 ms; provider 1 ms; post-provider 87 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2371ms; provider 1ms; post-provider 87ms; unknown 2371ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1106ms; RSS at 2106ms
- Diagnostic correlation:
  - CPU peaked at 139.7% around 1106ms
  - RSS peaked at 724.1 MB around 2106ms
  - Slowest OpenClaw span: plugins.metadata.scan 45.88ms
  - Provider/model timing max: 30ms
- Top CPU process: pid 51162 137% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 51162 661 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 137ms
  - resource samples: 2
  - peak sampled RSS: 21 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 49407 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 1ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --no-service --json`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 49659 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/resource-samples/provision-1.jsonl

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

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 28.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 49912 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t22504...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

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

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2540ms
  - resource samples: 4
  - peak sampled RSS: 701.1 MB
  - max sampled CPU: 137.8%
  - role peaks: 
  - top CPU: pid 50415 135% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 43.26ms
- most expensive repeated span: plugins.metadata.scan 5x 79.56ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 30ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2459ms
  - resource samples: 4
  - peak sampled RSS: 724.1 MB
  - max sampled CPU: 139.7%
  - role peaks: 
  - top CPU: pid 51162 137% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 45.88ms
- most expensive repeated span: plugins.metadata.scan 10x 163.87ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 30ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z' -- status`
  - status: 0
  - duration: 1749ms
  - resource samples: 3
  - peak sampled RSS: 571.7 MB
  - max sampled CPU: 135.8%
  - role peaks: 
  - top CPU: pid 51775 133% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 45.88ms
- most expensive repeated span: plugins.metadata.scan 13x 222.5ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 30ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 47ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 52077 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 45.88ms
- most expensive repeated span: plugins.metadata.scan 13x 222.5ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 30ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 726ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 753.5 MB
- Tracked total peak RSS: 753.5 MB
- Max CPU: 140.8%
- Resource samples: 19
- Command tree peak RSS: 753.5 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 753.5 MB; CPU 140.8%
  - agent-process: RSS 753.5 MB; CPU 140.8%
  - command-tree: RSS 753.5 MB; CPU 142.8%
  - status-cli: RSS 522.6 MB; CPU 142.8%
  - uncategorized: RSS 28.4 MB; CPU 0%
  - mock-provider: RSS 21 MB; CPU 0%
- Cold ready: 48 ms
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
- Slowest OpenClaw span: plugins.metadata.scan 44.4 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 44.4ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 31 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 31 ms
- Agent turn: 2554 ms (true)
- Agent cold/warm: cold 2526 ms; warm 2554 ms; delta 0 ms
- Agent pre-provider: cold 2428 ms; warm 2456 ms; delta 0 ms
- Agent provider final: cold 1 ms; warm 1 ms
- Agent turn stats: count 2; p95 2552.6 ms; max 2554 ms; pre-provider p95 2454.6 ms
- Provider evidence: 1 request(s); provider work 1 ms; pre-provider 2456 ms; post-provider 97 ms
- Agent latency diagnosis: warm agent turn 2554ms; pre-provider 2456ms; provider 1ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 2526 ms; pre-provider 2428 ms; provider 1 ms; post-provider 97 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2428ms; provider 1ms; post-provider 97ms; unknown 2428ms; source none
  - warm: total 2554 ms; pre-provider 2456 ms; provider 1 ms; post-provider 97 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2456ms; provider 1ms; post-provider 97ms; unknown 2456ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1111ms; RSS at 2108ms
- Diagnostic correlation:
  - CPU peaked at 142.8% around 1111ms
  - RSS peaked at 753.5 MB around 2108ms
  - Slowest OpenClaw span: plugins.metadata.scan 44.4ms
  - Provider/model timing max: 31ms
- Top CPU process: pid 55012 140% command-tree,status-cli openclaw
- Top RSS process: pid 54409 690.6 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 139ms
  - resource samples: 2
  - peak sampled RSS: 21 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 52654 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --no-service --json`
  - status: 0
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 52906 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/resource-samples/provision-1.jsonl

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

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 49ms
  - resource samples: 2
  - peak sampled RSS: 28.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 53159 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t22504...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

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

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2526ms
  - resource samples: 4
  - peak sampled RSS: 697 MB
  - max sampled CPU: 136.9%
  - role peaks: 
  - top CPU: pid 53662 135% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 44.4ms
- most expensive repeated span: plugins.metadata.scan 5x 81.43ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 31ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2554ms
  - resource samples: 4
  - peak sampled RSS: 753.5 MB
  - max sampled CPU: 140.8%
  - role peaks: 
  - top CPU: pid 54409 137% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 44.4ms
- most expensive repeated span: plugins.metadata.scan 10x 160.1ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 31ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z' -- status`
  - status: 0
  - duration: 1759ms
  - resource samples: 3
  - peak sampled RSS: 522.6 MB
  - max sampled CPU: 142.8%
  - role peaks: 
  - top CPU: pid 55012 140% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 44.4ms
- most expensive repeated span: plugins.metadata.scan 13x 217.81ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 31ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 55324 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 44.4ms
- most expensive repeated span: plugins.metadata.scan 13x 217.81ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 31ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 728ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 872.3 MB
- Tracked total peak RSS: 1423.3 MB
- Max CPU: 138%
- Resource samples: 25
- Command tree peak RSS: 551.4 MB
- Gateway peak RSS: 872.3 MB
- Resource by role:
  - gateway: RSS 872.3 MB; CPU 138%
  - gateway-tree: RSS 872.3 MB; CPU 112%
  - command-tree: RSS 551.4 MB; CPU 139.8%
  - status-cli: RSS 551.4 MB; CPU 135.8%
  - model-cli: RSS 528.2 MB; CPU 137.8%
  - plugin-cli: RSS 523 MB; CPU 139.8%
- Cold ready: 47 ms
- Warm ready: 84 ms
- Time to listening: 5519 ms
- Time to health ready: 5521 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 9
- Health p95: 157 ms
- Readiness failures: 0
- Gateway restarts: 3
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (422 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 198.39 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 198.39ms open 0; config.normalize max 46.66ms open 0; plugins.metadata.scan max 41.62ms open 0
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
  - CPU peaked at 194.9% around 1068ms
  - RSS peaked at 1423.3 MB around 1068ms
  - Slowest OpenClaw span: gateway.ready 198.39ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 57120 137% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 56295 872.3 MB gateway,gateway-tree [openclaw-gatewa] <defunct>

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 135ms
  - resource samples: 2
  - peak sampled RSS: 23.1 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 55901 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 47ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 56153 0% command-tree,runtime-management ocm start kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z --ru...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 101.1 MB
  - max sampled CPU: 111%
  - role peaks: 
  - top CPU: pid 56295 111% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 56295
- gateway port: 18789
- RSS: 110.2 MB
- CPU: 100%
- readiness: ready after 23 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 5519ms
- time to health ready: 5521ms
- tcp listening: ok in 0ms
- health: ok (200) in 0ms
- health samples: 3/3 ok
- health latency p95/max: 19ms / 19ms
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
- slowest OpenClaw span: gateway.ready 169.84ms
- most expensive repeated span: plugins.metadata.scan 4x 82.84ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 5521ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 806.7 MB
  - max sampled CPU: 57.8%
  - role peaks: 
  - top CPU: pid 56295 57.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 56295
- gateway port: 18789
- RSS: 776.2 MB
- CPU: 57.3%
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
- slowest OpenClaw span: gateway.ready 169.84ms
- most expensive repeated span: plugins.metadata.scan 5x 94.69ms
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

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 81ms
  - resource samples: 2
  - peak sampled RSS: 806.8 MB
  - max sampled CPU: 56.4%
  - role peaks: 
  - top CPU: pid 56295 56.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 56295
- gateway port: 18789
- RSS: 785.5 MB
- CPU: 56.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 367ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 72ms / 72ms
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
- slowest OpenClaw span: gateway.ready 169.84ms
- most expensive repeated span: plugins.metadata.scan 7x 134.31ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 367ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' -- status`
  - status: 0
  - duration: 1919ms
  - resource samples: 3
  - peak sampled RSS: 1423.3 MB
  - max sampled CPU: 194.9%
  - role peaks: 
  - top CPU: pid 56967 133% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' -- plugins list`
  - status: 0
  - duration: 1614ms
  - resource samples: 3
  - peak sampled RSS: 1395.3 MB
  - max sampled CPU: 188.7%
  - role peaks: 
  - top CPU: pid 57120 137% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' -- models list`
  - status: 0
  - duration: 1120ms
  - resource samples: 3
  - peak sampled RSS: 1400.5 MB
  - max sampled CPU: 180.3%
  - role peaks: 
  - top CPU: pid 57263 135% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 56295
- gateway port: 18789
- RSS: 872.3 MB
- CPU: 42.3%
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 169.84ms
- most expensive repeated span: plugins.metadata.scan 17x 307.2ms
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
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z'`
  - status: 0
  - duration: 84ms
  - resource samples: 2
  - peak sampled RSS: 877.3 MB
  - max sampled CPU: 41.8%
  - role peaks: 
  - top CPU: pid 56295 41.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 872.8 MB
  - max sampled CPU: 42.3%
  - role peaks: 
  - top CPU: pid 56295 42.3% gateway,gateway-tree [openclaw-gatewa] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 10 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 15000ms / 45000ms
- time to listening: 2259ms
- time to health ready: 2416ms
- tcp listening: ok in 0ms
- health: ok (200) in 157ms
- health samples: 1/10 ok
- health latency p95/max: 157ms / 157ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 2
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
- OpenClaw timeline events: 416
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 198.39ms
- most expensive repeated span: gateway.ready 2x 368.23ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: PASS, 2416ms, artifacts 0
  - logs: PASS, 7ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 16ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 677.8 MB
  - max sampled CPU: 112%
  - role peaks: 
  - top CPU: pid 57567 112% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 57567
- gateway port: 18789
- RSS: 677.8 MB
- CPU: 110%
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
- log gateway restart mentions: 2
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
- OpenClaw timeline events: 422
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 198.39ms
- most expensive repeated span: gateway.ready 2x 368.23ms
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
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 1242ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 863.7 MB
- Tracked total peak RSS: 1434.6 MB
- Max CPU: 80%
- Resource samples: 25
- Command tree peak RSS: 571.2 MB
- Gateway peak RSS: 863.7 MB
- Resource by role:
  - gateway: RSS 863.7 MB; CPU 80%
  - gateway-tree: RSS 863.7 MB; CPU 75%
  - command-tree: RSS 571.2 MB; CPU 148.8%
  - status-cli: RSS 571.2 MB; CPU 136.8%
  - model-cli: RSS 521.6 MB; CPU 136.7%
  - plugin-cli: RSS 517.8 MB; CPU 148.8%
- Cold ready: 59 ms
- Warm ready: 53 ms
- Time to listening: 6024 ms
- Time to health ready: 6119 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 60 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (225 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 202.04 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 202.04ms open 0; plugins.metadata.scan max 45.78ms open 0; config.normalize max 3.61ms open 0
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
- Resource peaks: CPU at 1066ms; RSS at 1061ms
- Diagnostic correlation:
  - CPU peaked at 199.4% around 1066ms
  - RSS peaked at 1434.6 MB around 1061ms
  - Slowest OpenClaw span: gateway.ready 202.04ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 59303 146% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 58618 863.7 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 137ms
  - resource samples: 2
  - peak sampled RSS: 23.2 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 58080 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 58332 0% command-tree,runtime-management ocm start kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z --ru...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 60.2 MB
  - max sampled CPU: 75%
  - role peaks: 
  - top CPU: pid 58618 75% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 58618
- gateway port: 18789
- RSS: 73.3 MB
- CPU: 80%
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6024ms
- time to health ready: 6119ms
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
- slowest OpenClaw span: gateway.ready 202.04ms
- most expensive repeated span: plugins.metadata.scan 4x 84.94ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 6119ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 799.6 MB
  - max sampled CPU: 59.3%
  - role peaks: 
  - top CPU: pid 58618 59.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 58618
- gateway port: 18789
- RSS: 772.7 MB
- CPU: 58.6%
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
- slowest OpenClaw span: gateway.ready 202.04ms
- most expensive repeated span: plugins.metadata.scan 5x 98.1ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 23ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 88ms
  - resource samples: 2
  - peak sampled RSS: 804.4 MB
  - max sampled CPU: 58.3%
  - role peaks: 
  - top CPU: pid 58618 58.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 58618
- gateway port: 18789
- RSS: 784.9 MB
- CPU: 58.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 1ms
- time to health ready: 412ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 60ms / 60ms
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
- slowest OpenClaw span: gateway.ready 202.04ms
- most expensive repeated span: plugins.metadata.scan 7x 142.01ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 12ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 412ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' -- status`
  - status: 0
  - duration: 2030ms
  - resource samples: 3
  - peak sampled RSS: 1434.6 MB
  - max sampled CPU: 197.8%
  - role peaks: 
  - top CPU: pid 59166 134% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' -- plugins list`
  - status: 0
  - duration: 1801ms
  - resource samples: 3
  - peak sampled RSS: 1381.5 MB
  - max sampled CPU: 199.4%
  - role peaks: 
  - top CPU: pid 59303 146% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' -- models list`
  - status: 0
  - duration: 1212ms
  - resource samples: 3
  - peak sampled RSS: 1385.3 MB
  - max sampled CPU: 180.5%
  - role peaks: 
  - top CPU: pid 59460 133% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 58618
- gateway port: 18789
- RSS: 863.7 MB
- CPU: 43.2%
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
- slowest OpenClaw span: gateway.ready 202.04ms
- most expensive repeated span: plugins.metadata.scan 17x 334.84ms
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
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z'`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 868.7 MB
  - max sampled CPU: 41.6%
  - role peaks: 
  - top CPU: pid 58618 41.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 868.6 MB
  - max sampled CPU: 41.5%
  - role peaks: 
  - top CPU: pid 58618 41.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 58618
- gateway port: 18789
- RSS: 863.7 MB
- CPU: 41.3%
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
- slowest OpenClaw span: gateway.ready 202.04ms
- most expensive repeated span: plugins.metadata.scan 17x 334.84ms
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

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 863.7 MB
  - max sampled CPU: 38.4%
  - role peaks: 
  - top CPU: pid 58618 38.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 58618
- gateway port: 18789
- RSS: 863.7 MB
- CPU: 38.2%
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
- slowest OpenClaw span: gateway.ready 202.04ms
- most expensive repeated span: plugins.metadata.scan 17x 334.84ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 1211ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 885.4 MB
- Tracked total peak RSS: 1481 MB
- Max CPU: 120%
- Resource samples: 25
- Command tree peak RSS: 595.9 MB
- Gateway peak RSS: 885.4 MB
- Resource by role:
  - gateway: RSS 885.4 MB; CPU 120%
  - gateway-tree: RSS 885.4 MB; CPU 111%
  - command-tree: RSS 595.9 MB; CPU 141.8%
  - status-cli: RSS 595.9 MB; CPU 138.8%
  - model-cli: RSS 529.2 MB; CPU 141.8%
  - plugin-cli: RSS 520.6 MB; CPU 140.8%
- Cold ready: 69 ms
- Warm ready: 59 ms
- Time to listening: 6025 ms
- Time to health ready: 6161 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 22 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (225 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 145.47 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 145.47ms open 0; plugins.metadata.scan max 35.47ms open 0; config.normalize max 2.97ms open 0
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
- Resource peaks: CPU at 1067ms; RSS at 1067ms
- Diagnostic correlation:
  - CPU peaked at 193.5% around 1067ms
  - RSS peaked at 1481 MB around 1067ms
  - Slowest OpenClaw span: gateway.ready 145.47ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 61492 139% command-tree,model-cli openclaw
- Top RSS process: pid 60616 885.4 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 139ms
  - resource samples: 2
  - peak sampled RSS: 25.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 60248 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' --runtime 'kova-local-1783637445040' --json`
  - status: 0
  - duration: 69ms
  - resource samples: 2
  - peak sampled RSS: 50.6 MB
  - max sampled CPU: 50%
  - role peaks: 
  - top CPU: pid 60616 50% gateway,gateway-tree node /home/runner/.ocm/runtimes/kova-local-1783637445040/files/node_modules/openclaw/op...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 64ms
  - resource samples: 2
  - peak sampled RSS: 94.9 MB
  - max sampled CPU: 111%
  - role peaks: 
  - top CPU: pid 60616 111% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 60616
- gateway port: 18789
- RSS: 100.4 MB
- CPU: 120%
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6025ms
- time to health ready: 6161ms
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
- slowest OpenClaw span: gateway.ready 145.47ms
- most expensive repeated span: plugins.metadata.scan 4x 70.05ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 6161ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/port'`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 648.4 MB
  - max sampled CPU: 51.6%
  - role peaks: 
  - top CPU: pid 60616 51.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 60616
- gateway port: 18789
- RSS: 621.7 MB
- CPU: 51.2%
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
- slowest OpenClaw span: gateway.ready 145.47ms
- most expensive repeated span: plugins.metadata.scan 5x 82.91ms
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

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 89ms
  - resource samples: 2
  - peak sampled RSS: 657.8 MB
  - max sampled CPU: 51.2%
  - role peaks: 
  - top CPU: pid 60616 51.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 60616
- gateway port: 18789
- RSS: 662.6 MB
- CPU: 51.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 366ms
- tcp listening: ok in 0ms
- health: ok (200) in 0ms
- health samples: 3/3 ok
- health latency p95/max: 11ms / 11ms
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
- slowest OpenClaw span: gateway.ready 145.47ms
- most expensive repeated span: plugins.metadata.scan 7x 123.99ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 366ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' -- status`
  - status: 0
  - duration: 1894ms
  - resource samples: 3
  - peak sampled RSS: 1481 MB
  - max sampled CPU: 193.5%
  - role peaks: 
  - top CPU: pid 61196 136% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' -- plugins list`
  - status: 0
  - duration: 1717ms
  - resource samples: 3
  - peak sampled RSS: 1406 MB
  - max sampled CPU: 186.6%
  - role peaks: 
  - top CPU: pid 61364 138% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' -- models list`
  - status: 0
  - duration: 1102ms
  - resource samples: 3
  - peak sampled RSS: 1414.6 MB
  - max sampled CPU: 181.5%
  - role peaks: 
  - top CPU: pid 61492 139% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 60616
- gateway port: 18789
- RSS: 885.4 MB
- CPU: 39.6%
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 145.47ms
- most expensive repeated span: plugins.metadata.scan 17x 299.73ms
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

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z'`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 890.6 MB
  - max sampled CPU: 38%
  - role peaks: 
  - top CPU: pid 60616 38% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' --json`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 890.2 MB
  - max sampled CPU: 37.9%
  - role peaks: 
  - top CPU: pid 60616 37.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 60616
- gateway port: 18789
- RSS: 885.4 MB
- CPU: 37.7%
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 145.47ms
- most expensive repeated span: plugins.metadata.scan 17x 299.73ms
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

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 885.4 MB
  - max sampled CPU: 35.1%
  - role peaks: 
  - top CPU: pid 60616 35.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-09T225045Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 60616
- gateway port: 18789
- RSS: 885.4 MB
- CPU: 34.9%
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
- slowest OpenClaw span: gateway.ready 145.47ms
- most expensive repeated span: plugins.metadata.scan 17x 299.73ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-09t225045z' --yes`
- cleanup status: 0
- cleanup duration: 1021ms

