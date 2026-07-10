# Kova OpenClaw Runtime Report

Generated: 2026-07-10T00:15:05.799Z
Run ID: `kova-2026-07-10T000725Z`
Mode: execution
Platform: linux 6.6.141 (x64) · v24.13.0

## Release Decision

- Verdict: PARTIAL
- Coverage: partial
- Blocking / warnings / info: 0 / 26 / 64
- Markdown report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-2026-07-10T000725Z-release.md
- JSON report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-2026-07-10T000725Z-release.json
- Retained gate artifacts: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/release-gates/kova-2026-07-10t000725z

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
- fresh-install/fresh: 3 sample(s); timeToHealthReadyMs median 7227ms p95 8553.6ms max 8701ms; peakRssMb median 863MB p95 870.74MB max 871.6MB; cpuPercentMax median 83.4% p95 117.24% max 121%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 7053ms p95 8445.3ms max 8600ms
- fresh-install/onboarded-user: 3 sample(s); timeToHealthReadyMs median 6366ms p95 7351.5ms max 7461ms; peakRssMb median 844MB p95 856.06MB max 857.4MB; cpuPercentMax median 74.2% p95 97.42% max 100%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 6282ms p95 7203.6ms max 7306ms
- bundled-runtime-deps/missing-plugin-index: 3 sample(s); timeToHealthReadyMs median 6198ms p95 7243.8ms max 7360ms; peakRssMb median 862.6MB p95 875.56MB max 877MB; cpuPercentMax median 68.7% p95 96.87% max 100%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 6045ms p95 7167.3ms max 7292ms
- bundled-plugin-startup/fresh: 3 sample(s); timeToHealthReadyMs median 6170ms p95 6270.8ms max 6282ms; peakRssMb median 839.8MB p95 906.58MB max 914MB; cpuPercentMax median 83.3% p95 98.33% max 100%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 6026ms p95 6253.7ms max 6279ms
- agent-cold-warm-message/mock-openai-provider: 3 sample(s); peakRssMb median 714.6MB p95 716.67MB max 716.9MB; cpuPercentMax median 143.7% p95 144.6% max 144.7%; agentTurnMs median 3006ms p95 3015ms max 3016ms; coldAgentTurnMs median 3006ms p95 3015ms max 3016ms; warmAgentTurnMs median 2779ms p95 2813.2ms max 2817ms
- gateway-performance/many-bundled-plugins: 3 sample(s); timeToHealthReadyMs median 6880ms p95 7157.2ms max 7188ms; peakRssMb median 865.2MB p95 895.44MB max 898.8MB; cpuPercentMax median 122% p95 138.2% max 140%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 6806ms p95 7016.6ms max 7040ms

## Resource Roles

- gateway: RSS 914 MB; CPU 140%; scenario bundled-plugin-startup/fresh
- gateway-tree: RSS 914 MB; CPU 140%; scenario bundled-plugin-startup/fresh
- command-tree: RSS 749.7 MB; CPU 154.2%; scenario gateway-performance/many-bundled-plugins
- status-cli: RSS 749.7 MB; CPU 148.7%; scenario gateway-performance/many-bundled-plugins
- plugin-cli: RSS 723 MB; CPU 154.2%; scenario gateway-performance/many-bundled-plugins
- agent-cli: RSS 716.9 MB; CPU 144.7%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 716.9 MB; CPU 144.7%; scenario agent-cold-warm-message/mock-openai-provider
- model-cli: RSS 507.9 MB; CPU 153.6%; scenario fresh-install/onboarded-user

## Target Cleanup

- Runtime: `kova-local-1783642044975`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1783642044975' --json`
- Exit: 0
- Duration: 454ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r1-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 808.7 MB
- Tracked total peak RSS: 1490.6 MB
- Max CPU: 121%
- Resource samples: 28
- Command tree peak RSS: 682.5 MB
- Gateway peak RSS: 808.7 MB
- Resource by role:
  - gateway: RSS 808.7 MB; CPU 121%
  - gateway-tree: RSS 808.7 MB; CPU 120%
  - command-tree: RSS 682.5 MB; CPU 143.8%
  - plugin-cli: RSS 682.5 MB; CPU 140.7%
  - status-cli: RSS 561.2 MB; CPU 128.8%
  - model-cli: RSS 462.4 MB; CPU 143.8%
- Cold ready: 887 ms
- Warm ready: unknown ms
- Time to listening: 6053 ms
- Time to health ready: 6171 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 38 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (228 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 170.71 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 170.71ms open 0; plugins.metadata.scan max 54.61ms open 0; config.normalize max 3.72ms open 0
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
- Resource peaks: CPU at 1133ms; RSS at 3077ms
- Diagnostic correlation:
  - CPU peaked at 194.7% around 1133ms
  - RSS peaked at 1490.6 MB around 3077ms
  - Slowest OpenClaw span: gateway.ready 170.71ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 22732 141% command-tree,model-cli openclaw
- Top RSS process: pid 21588 808.7 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1783642044975' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1783642044975' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 129252ms
  - resource samples: 131
  - peak sampled RSS: 10665.5 MB
  - max sampled CPU: 434.3%
  - role peaks: 
  - top CPU: pid 18805 236% build-tooling,command-tree,runtime-management node /home/runner/_work/openclaw/openclaw/node_modules/.bin/vite build
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/resource-samples/target-setup-1.jsonl

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 151ms
  - resource samples: 2
  - peak sampled RSS: 23.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 21178 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r1-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 887ms
  - resource samples: 2
  - peak sampled RSS: 275.5 MB
  - max sampled CPU: 120%
  - role peaks: 
  - top CPU: pid 21588 120% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 21588
- gateway port: 18789
- RSS: 286 MB
- CPU: 121%
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6053ms
- time to health ready: 6171ms
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
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 170.71ms
- most expensive repeated span: plugins.metadata.scan 4x 93.45ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 6171ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 713.1 MB
  - max sampled CPU: 58.9%
  - role peaks: 
  - top CPU: pid 21588 58.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 21588
- gateway port: 18789
- RSS: 685.4 MB
- CPU: 58.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 2ms
- tcp listening: ok in 1ms
- health: ok (200) in 30ms
- health samples: 3/3 ok
- health latency p95/max: 30ms / 30ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 170.71ms
- most expensive repeated span: plugins.metadata.scan 5x 108.8ms
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
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' --json`
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 99ms
  - resource samples: 2
  - peak sampled RSS: 700.6 MB
  - max sampled CPU: 58.4%
  - role peaks: 
  - top CPU: pid 21588 58.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' -- status`
  - status: 0
  - duration: 2806ms
  - resource samples: 4
  - peak sampled RSS: 1369.6 MB
  - max sampled CPU: 194.7%
  - role peaks: 
  - top CPU: pid 22095 127% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 21588
- gateway port: 18789
- RSS: 808.7 MB
- CPU: 60.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 3ms
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
- slowest OpenClaw span: gateway.ready 170.71ms
- most expensive repeated span: plugins.metadata.scan 9x 208.32ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 3ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' -- plugins list`
  - status: 0
  - duration: 1800ms
  - resource samples: 3
  - peak sampled RSS: 1326.1 MB
  - max sampled CPU: 193.4%
  - role peaks: 
  - top CPU: pid 22286 138% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 4884ms
  - resource samples: 6
  - peak sampled RSS: 1490.6 MB
  - max sampled CPU: 184.8%
  - role peaks: 
  - top CPU: pid 22452 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 21588
- gateway port: 18789
- RSS: 661.6 MB
- CPU: 37.4%
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
- OpenClaw timeline events: 218
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 170.71ms
- most expensive repeated span: plugins.metadata.scan 12x 279.34ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' -- models list`
  - status: 0
  - duration: 1242ms
  - resource samples: 3
  - peak sampled RSS: 1124 MB
  - max sampled CPU: 178.3%
  - role peaks: 
  - top CPU: pid 22732 141% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 21588
- gateway port: 18789
- RSS: 661.6 MB
- CPU: 34.2%
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
- slowest OpenClaw span: gateway.ready 170.71ms
- most expensive repeated span: plugins.metadata.scan 17x 371.01ms
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

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' --tail 200 --raw`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 661.6 MB
  - max sampled CPU: 33.3%
  - role peaks: 
  - top CPU: pid 21588 33.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 21588
- gateway port: 18789
- RSS: 661.6 MB
- CPU: 33.2%
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
- slowest OpenClaw span: gateway.ready 170.71ms
- most expensive repeated span: plugins.metadata.scan 17x 371.01ms
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
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 661.6 MB
  - max sampled CPU: 31.6%
  - role peaks: 
  - top CPU: pid 21588 31.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r1-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 21588
- gateway port: 18789
- RSS: 661.6 MB
- CPU: 31.5%
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
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 170.71ms
- most expensive repeated span: plugins.metadata.scan 17x 371.01ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r1-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1579ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r2-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 871.6 MB
- Tracked total peak RSS: 1528.7 MB
- Max CPU: 83.4%
- Resource samples: 33
- Command tree peak RSS: 691.3 MB
- Gateway peak RSS: 871.6 MB
- Resource by role:
  - gateway: RSS 871.6 MB; CPU 83.4%
  - gateway-tree: RSS 871.6 MB; CPU 83.4%
  - command-tree: RSS 691.3 MB; CPU 154.2%
  - plugin-cli: RSS 691.3 MB; CPU 154.2%
  - status-cli: RSS 657.2 MB; CPU 139.1%
  - model-cli: RSS 440.5 MB; CPU 149.1%
- Cold ready: 67 ms
- Warm ready: unknown ms
- Time to listening: 8600 ms
- Time to health ready: 8701 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 34
- Health p95: 55 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 261.79 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 261.79ms open 0; plugins.metadata.scan max 117.96ms open 0; config.normalize max 9.54ms open 0
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
- Resource peaks: CPU at 2223ms; RSS at 3226ms
- Diagnostic correlation:
  - CPU peaked at 216.8% around 2223ms
  - RSS peaked at 1528.7 MB around 3226ms
  - Slowest OpenClaw span: gateway.ready 261.79ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 24496 150% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 23908 871.6 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 143ms
  - resource samples: 2
  - peak sampled RSS: 26.2 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 23402 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r2-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 67ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 23654 0% command-tree,runtime-management ocm start kova-fresh-install-fresh-r2-kova-2026-07-10t000725z --runtime kova-local-1783...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 35 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 8600ms
- time to health ready: 8701ms
- tcp listening: ok in 0ms
- health: ok (200) in 101ms
- health samples: 1/35 ok
- health latency p95/max: 3ms / 101ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 261.79ms
- most expensive repeated span: plugins.metadata.scan 4x 144.04ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 12ms, artifacts 0
  - readiness: PASS, 8701ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 85ms
  - resource samples: 2
  - peak sampled RSS: 720.9 MB
  - max sampled CPU: 69.6%
  - role peaks: 
  - top CPU: pid 23908 69.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 23908
- gateway port: 18789
- RSS: 694.9 MB
- CPU: 68.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
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
- slowest OpenClaw span: gateway.ready 261.79ms
- most expensive repeated span: plugins.metadata.scan 5x 164.47ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 5ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 4ms, artifacts 1
  - diagnostics: PASS, 18ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' --json`
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 188ms
  - resource samples: 2
  - peak sampled RSS: 713 MB
  - max sampled CPU: 71.3%
  - role peaks: 
  - top CPU: pid 23908 71.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' -- status`
  - status: 0
  - duration: 3558ms
  - resource samples: 5
  - peak sampled RSS: 1528.7 MB
  - max sampled CPU: 216.8%
  - role peaks: 
  - top CPU: pid 24312 136% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 23908
- gateway port: 18789
- RSS: 871.5 MB
- CPU: 70.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 6ms
- tcp listening: ok in 0ms
- health: ok (200) in 5ms
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
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 261.79ms
- most expensive repeated span: plugins.metadata.scan 10x 298.21ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 27ms, artifacts 0
  - process: PASS, 18ms, artifacts 0
  - readiness: PASS, 6ms, artifacts 0
  - logs: PASS, 9ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 20ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' -- plugins list`
  - status: 0
  - duration: 4724ms
  - resource samples: 6
  - peak sampled RSS: 1429.4 MB
  - max sampled CPU: 216.5%
  - role peaks: 
  - top CPU: pid 24496 150% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5643ms
  - resource samples: 7
  - peak sampled RSS: 1086.4 MB
  - max sampled CPU: 203.2%
  - role peaks: 
  - top CPU: pid 24749 140% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 23908
- gateway port: 18789
- RSS: 395.1 MB
- CPU: 44.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 3ms
- tcp listening: ok in 0ms
- health: ok (200) in 6ms
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
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 261.79ms
- most expensive repeated span: plugins.metadata.scan 13x 489.87ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 42ms, artifacts 0
  - process: PASS, 13ms, artifacts 0
  - readiness: PASS, 3ms, artifacts 0
  - logs: PASS, 10ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 4ms, artifacts 1
  - diagnostics: PASS, 28ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' -- models list`
  - status: 0
  - duration: 2028ms
  - resource samples: 3
  - peak sampled RSS: 835.7 MB
  - max sampled CPU: 191%
  - role peaks: 
  - top CPU: pid 25000 140% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 23908
- gateway port: 18789
- RSS: 395.2 MB
- CPU: 40.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 3ms
- tcp listening: ok in 0ms
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
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 261.79ms
- most expensive repeated span: plugins.metadata.scan 18x 619.89ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 28ms, artifacts 0
  - process: PASS, 11ms, artifacts 0
  - readiness: PASS, 3ms, artifacts 0
  - logs: PASS, 17ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 3ms, artifacts 1
  - diagnostics: PASS, 29ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' --tail 200 --raw`
  - status: 0
  - duration: 242ms
  - resource samples: 2
  - peak sampled RSS: 395.2 MB
  - max sampled CPU: 39.7%
  - role peaks: 
  - top CPU: pid 23908 39.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 23908
- gateway port: 18789
- RSS: 395.2 MB
- CPU: 39.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 5ms
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
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 261.79ms
- most expensive repeated span: plugins.metadata.scan 18x 619.89ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 43ms, artifacts 0
  - process: PASS, 19ms, artifacts 0
  - readiness: PASS, 5ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 212ms
  - resource samples: 2
  - peak sampled RSS: 395.2 MB
  - max sampled CPU: 37.9%
  - role peaks: 
  - top CPU: pid 23908 37.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r2-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 23908
- gateway port: 18789
- RSS: 395.2 MB
- CPU: 37.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 4ms
- tcp listening: ok in 1ms
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
- slowest OpenClaw span: gateway.ready 261.79ms
- most expensive repeated span: plugins.metadata.scan 18x 619.89ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 24ms, artifacts 0
  - process: PASS, 13ms, artifacts 0
  - readiness: PASS, 5ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r2-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1946ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r3-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 863 MB
- Tracked total peak RSS: 1577.7 MB
- Max CPU: 82.8%
- Resource samples: 30
- Command tree peak RSS: 714.7 MB
- Gateway peak RSS: 863 MB
- Resource by role:
  - gateway: RSS 863 MB; CPU 82.8%
  - gateway-tree: RSS 863 MB; CPU 82.8%
  - command-tree: RSS 714.7 MB; CPU 150.7%
  - plugin-cli: RSS 714.7 MB; CPU 142.9%
  - status-cli: RSS 714.7 MB; CPU 137.3%
  - model-cli: RSS 435.6 MB; CPU 150.7%
- Cold ready: 75 ms
- Warm ready: unknown ms
- Time to listening: 7053 ms
- Time to health ready: 7227 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 28
- Health p95: 21 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 284.14 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 284.14ms open 0; plugins.metadata.scan max 74.83ms open 0; config.normalize max 6.19ms open 0
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
- Resource peaks: CPU at 1112ms; RSS at 2082ms
- Diagnostic correlation:
  - CPU peaked at 213.3% around 1112ms
  - RSS peaked at 1577.7 MB around 2082ms
  - Slowest OpenClaw span: gateway.ready 284.14ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 27241 147% command-tree,model-cli openclaw
- Top RSS process: pid 26231 863 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 171ms
  - resource samples: 2
  - peak sampled RSS: 23.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 25725 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r3-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 75ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 25977 0% command-tree,runtime-management ocm start kova-fresh-install-fresh-r3-kova-2026-07-10t000725z --runtime kova-local-1783...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 29 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 7053ms
- time to health ready: 7227ms
- tcp listening: ok in 0ms
- health: ok (200) in 174ms
- health samples: 1/29 ok
- health latency p95/max: 2ms / 174ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 284.14ms
- most expensive repeated span: plugins.metadata.scan 4x 133.88ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: PASS, 7227ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 13ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 88ms
  - resource samples: 2
  - peak sampled RSS: 643.2 MB
  - max sampled CPU: 69.1%
  - role peaks: 
  - top CPU: pid 26231 69.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 26231
- gateway port: 18789
- RSS: 617.4 MB
- CPU: 68.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 21ms
- health samples: 3/3 ok
- health latency p95/max: 21ms / 21ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 284.14ms
- most expensive repeated span: plugins.metadata.scan 5x 151.21ms
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
  - diagnostics: PASS, 13ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' --json`
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 114ms
  - resource samples: 2
  - peak sampled RSS: 662.7 MB
  - max sampled CPU: 68.9%
  - role peaks: 
  - top CPU: pid 26231 68.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' -- status`
  - status: 0
  - duration: 2586ms
  - resource samples: 4
  - peak sampled RSS: 1577.4 MB
  - max sampled CPU: 213.3%
  - role peaks: 
  - top CPU: pid 26630 135% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 26231
- gateway port: 18789
- RSS: 862.9 MB
- CPU: 71.8%
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
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 284.14ms
- most expensive repeated span: plugins.metadata.scan 10x 278.3ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 14ms, artifacts 0
  - process: PASS, 8ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' -- plugins list`
  - status: 0
  - duration: 2131ms
  - resource samples: 4
  - peak sampled RSS: 1577.7 MB
  - max sampled CPU: 203.3%
  - role peaks: 
  - top CPU: pid 26814 141% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5287ms
  - resource samples: 7
  - peak sampled RSS: 1509.2 MB
  - max sampled CPU: 192%
  - role peaks: 
  - top CPU: pid 26965 140% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 26231
- gateway port: 18789
- RSS: 709.6 MB
- CPU: 43.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 3ms
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
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 284.14ms
- most expensive repeated span: plugins.metadata.scan 13x 360.98ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 3ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' -- models list`
  - status: 0
  - duration: 1669ms
  - resource samples: 3
  - peak sampled RSS: 1145.2 MB
  - max sampled CPU: 190.9%
  - role peaks: 
  - top CPU: pid 27241 147% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 26231
- gateway port: 18789
- RSS: 709.6 MB
- CPU: 39%
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
- slowest OpenClaw span: gateway.ready 284.14ms
- most expensive repeated span: plugins.metadata.scan 18x 508.17ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 5ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' --tail 200 --raw`
  - status: 0
  - duration: 73ms
  - resource samples: 2
  - peak sampled RSS: 709.6 MB
  - max sampled CPU: 38.1%
  - role peaks: 
  - top CPU: pid 26231 38.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 26231
- gateway port: 18789
- RSS: 709.6 MB
- CPU: 37.9%
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
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 284.14ms
- most expensive repeated span: plugins.metadata.scan 18x 508.17ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 13ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 90ms
  - resource samples: 2
  - peak sampled RSS: 709.6 MB
  - max sampled CPU: 36.1%
  - role peaks: 
  - top CPU: pid 26231 36.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-fresh-r3-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 26231
- gateway port: 18789
- RSS: 709.6 MB
- CPU: 36%
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
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 284.14ms
- most expensive repeated span: plugins.metadata.scan 18x 508.17ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r3-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 2170ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 857.4 MB
- Tracked total peak RSS: 1545.7 MB
- Max CPU: 100%
- Resource samples: 31
- Command tree peak RSS: 701.7 MB
- Gateway peak RSS: 857.4 MB
- Resource by role:
  - gateway: RSS 857.4 MB; CPU 100%
  - gateway-tree: RSS 857.4 MB; CPU 77.8%
  - command-tree: RSS 701.7 MB; CPU 147.7%
  - plugin-cli: RSS 701.7 MB; CPU 141.8%
  - status-cli: RSS 614.9 MB; CPU 144.8%
  - model-cli: RSS 457.7 MB; CPU 147.7%
- Cold ready: 106 ms
- Warm ready: unknown ms
- Time to listening: 7306 ms
- Time to health ready: 7461 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 149 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (228 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 221.03 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 221.03ms open 0; plugins.metadata.scan max 62.89ms open 0; config.normalize max 4.31ms open 0
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
- Resource peaks: CPU at 1094ms; RSS at 2072ms
- Diagnostic correlation:
  - CPU peaked at 212.3% around 1094ms
  - RSS peaked at 1545.7 MB around 2072ms
  - Slowest OpenClaw span: gateway.ready 221.03ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 29589 144% command-tree,model-cli openclaw
- Top RSS process: pid 28418 857.4 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 168ms
  - resource samples: 2
  - peak sampled RSS: 22.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 27924 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 4ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 106ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 28176 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 28418
- gateway port: 18789
- RSS: 55 MB
- CPU: 100%
- readiness: ready after 30 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 7306ms
- time to health ready: 7461ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 49ms / 49ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 221.03ms
- most expensive repeated span: plugins.metadata.scan 4x 119.51ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 17ms, artifacts 0
  - process: PASS, 10ms, artifacts 0
  - readiness: PASS, 7461ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 19ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 84ms
  - resource samples: 2
  - peak sampled RSS: 660.5 MB
  - max sampled CPU: 67.6%
  - role peaks: 
  - top CPU: pid 28418 67.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 28418
- gateway port: 18789
- RSS: 632.2 MB
- CPU: 66.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
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
- slowest OpenClaw span: gateway.ready 221.03ms
- most expensive repeated span: plugins.metadata.scan 5x 136.08ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 13ms, artifacts 0
  - process: PASS, 10ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 17ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 92ms
  - resource samples: 2
  - peak sampled RSS: 670.4 MB
  - max sampled CPU: 66.1%
  - role peaks: 
  - top CPU: pid 28418 66.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 28418
- gateway port: 18789
- RSS: 674.3 MB
- CPU: 66.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 1ms
- time to health ready: 603ms
- tcp listening: ok in 1ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 149ms / 149ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 221.03ms
- most expensive repeated span: plugins.metadata.scan 6x 167.04ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 16ms, artifacts 0
  - process: PASS, 10ms, artifacts 0
  - readiness: PASS, 603ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 83ms
  - resource samples: 2
  - peak sampled RSS: 862.1 MB
  - max sampled CPU: 77.8%
  - role peaks: 
  - top CPU: pid 28418 77.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' -- status`
  - status: 0
  - duration: 2499ms
  - resource samples: 4
  - peak sampled RSS: 1472.1 MB
  - max sampled CPU: 212.3%
  - role peaks: 
  - top CPU: pid 29016 142% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 28418
- gateway port: 18789
- RSS: 857.4 MB
- CPU: 62.3%
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
- OpenClaw timeline events: 209
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 221.03ms
- most expensive repeated span: plugins.metadata.scan 9x 219.27ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' -- plugins list`
  - status: 0
  - duration: 1833ms
  - resource samples: 3
  - peak sampled RSS: 1365.6 MB
  - max sampled CPU: 197.1%
  - role peaks: 
  - top CPU: pid 29169 138% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5982ms
  - resource samples: 7
  - peak sampled RSS: 1545.7 MB
  - max sampled CPU: 190.9%
  - role peaks: 
  - top CPU: pid 29309 139% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 28418
- gateway port: 18789
- RSS: 712.9 MB
- CPU: 39%
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
- slowest OpenClaw span: gateway.ready 221.03ms
- most expensive repeated span: plugins.metadata.scan 12x 284.08ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' -- models list`
  - status: 0
  - duration: 1456ms
  - resource samples: 3
  - peak sampled RSS: 1170.6 MB
  - max sampled CPU: 184%
  - role peaks: 
  - top CPU: pid 29589 144% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 28418
- gateway port: 18789
- RSS: 712.9 MB
- CPU: 35.6%
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
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 221.03ms
- most expensive repeated span: plugins.metadata.scan 17x 414.34ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 12ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' --tail 200 --raw`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 712.9 MB
  - max sampled CPU: 34.8%
  - role peaks: 
  - top CPU: pid 28418 34.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 28418
- gateway port: 18789
- RSS: 712.9 MB
- CPU: 34.7%
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
- slowest OpenClaw span: gateway.ready 221.03ms
- most expensive repeated span: plugins.metadata.scan 17x 414.34ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 712.9 MB
  - max sampled CPU: 33.2%
  - role peaks: 
  - top CPU: pid 28418 33.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 28418
- gateway port: 18789
- RSS: 712.9 MB
- CPU: 33.1%
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
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 221.03ms
- most expensive repeated span: plugins.metadata.scan 17x 414.34ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1740ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 844 MB
- Tracked total peak RSS: 1590.4 MB
- Max CPU: 74.2%
- Resource samples: 30
- Command tree peak RSS: 746.5 MB
- Gateway peak RSS: 844 MB
- Resource by role:
  - gateway: RSS 844 MB; CPU 74.2%
  - gateway-tree: RSS 844 MB; CPU 74.2%
  - command-tree: RSS 746.5 MB; CPU 144.7%
  - status-cli: RSS 746.5 MB; CPU 144.4%
  - plugin-cli: RSS 703.2 MB; CPU 144.7%
  - model-cli: RSS 488.1 MB; CPU 139.8%
- Cold ready: 65 ms
- Warm ready: unknown ms
- Time to listening: 6282 ms
- Time to health ready: 6366 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 25
- Health p95: 111 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (228 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 165.64 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 165.64ms open 0; plugins.metadata.scan max 51.6ms open 0; config.normalize max 5.33ms open 0
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
- Resource peaks: CPU at 1066ms; RSS at 2067ms
- Diagnostic correlation:
  - CPU peaked at 209% around 1066ms
  - RSS peaked at 1590.4 MB around 2067ms
  - Slowest OpenClaw span: gateway.ready 165.64ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 31349 143% command-tree,status-cli openclaw
- Top RSS process: pid 30775 844 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 145ms
  - resource samples: 2
  - peak sampled RSS: 31.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 30269 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 65ms
  - resource samples: 2
  - peak sampled RSS: 4.8 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 30521 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 26 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6282ms
- time to health ready: 6366ms
- tcp listening: ok in 1ms
- health: ok (200) in 84ms
- health samples: 1/26 ok
- health latency p95/max: 1ms / 84ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 165.64ms
- most expensive repeated span: plugins.metadata.scan 4x 87.81ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - readiness: PASS, 6366ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 780.4 MB
  - max sampled CPU: 62.7%
  - role peaks: 
  - top CPU: pid 30775 62.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 30775
- gateway port: 18789
- RSS: 752.4 MB
- CPU: 62.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
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
- slowest OpenClaw span: gateway.ready 165.64ms
- most expensive repeated span: plugins.metadata.scan 5x 101.86ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 85ms
  - resource samples: 2
  - peak sampled RSS: 782.4 MB
  - max sampled CPU: 62%
  - role peaks: 
  - top CPU: pid 30775 62% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 30775
- gateway port: 18789
- RSS: 765.9 MB
- CPU: 62.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 1ms
- time to health ready: 418ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 111ms / 111ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 165.64ms
- most expensive repeated span: plugins.metadata.scan 6x 132.48ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 13ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 418ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 848.7 MB
  - max sampled CPU: 74.2%
  - role peaks: 
  - top CPU: pid 30775 74.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' -- status`
  - status: 0
  - duration: 2171ms
  - resource samples: 4
  - peak sampled RSS: 1590.4 MB
  - max sampled CPU: 209%
  - role peaks: 
  - top CPU: pid 31349 143% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 30775
- gateway port: 18789
- RSS: 843.9 MB
- CPU: 58.5%
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
- slowest OpenClaw span: gateway.ready 165.64ms
- most expensive repeated span: plugins.metadata.scan 9x 185.72ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' -- plugins list`
  - status: 0
  - duration: 1881ms
  - resource samples: 3
  - peak sampled RSS: 1361.3 MB
  - max sampled CPU: 195.4%
  - role peaks: 
  - top CPU: pid 31521 141% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5007ms
  - resource samples: 6
  - peak sampled RSS: 1534 MB
  - max sampled CPU: 182.6%
  - role peaks: 
  - top CPU: pid 31657 136% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 30775
- gateway port: 18789
- RSS: 643.5 MB
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
- OpenClaw timeline events: 218
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 165.64ms
- most expensive repeated span: plugins.metadata.scan 12x 256.54ms
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

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' -- models list`
  - status: 0
  - duration: 1335ms
  - resource samples: 3
  - peak sampled RSS: 1131.6 MB
  - max sampled CPU: 172.4%
  - role peaks: 
  - top CPU: pid 32206 137% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 30775
- gateway port: 18789
- RSS: 643.5 MB
- CPU: 32.1%
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
- slowest OpenClaw span: gateway.ready 165.64ms
- most expensive repeated span: plugins.metadata.scan 17x 368.46ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 8ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' --tail 200 --raw`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 643.5 MB
  - max sampled CPU: 31.4%
  - role peaks: 
  - top CPU: pid 30775 31.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 30775
- gateway port: 18789
- RSS: 643.5 MB
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
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 165.64ms
- most expensive repeated span: plugins.metadata.scan 17x 368.46ms
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
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 643.5 MB
  - max sampled CPU: 29.7%
  - role peaks: 
  - top CPU: pid 30775 29.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 30775
- gateway port: 18789
- RSS: 643.5 MB
- CPU: 29.6%
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
- slowest OpenClaw span: gateway.ready 165.64ms
- most expensive repeated span: plugins.metadata.scan 17x 368.46ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1384ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 805.6 MB
- Tracked total peak RSS: 1488.6 MB
- Max CPU: 69.8%
- Resource samples: 32
- Command tree peak RSS: 698.7 MB
- Gateway peak RSS: 805.6 MB
- Resource by role:
  - gateway: RSS 805.6 MB; CPU 69.8%
  - gateway-tree: RSS 805.6 MB; CPU 69.8%
  - command-tree: RSS 698.7 MB; CPU 144.8%
  - plugin-cli: RSS 698.7 MB; CPU 141.7%
  - status-cli: RSS 644.6 MB; CPU 137.9%
  - model-cli: RSS 507.9 MB; CPU 144.8%
- Cold ready: 62 ms
- Warm ready: unknown ms
- Time to listening: 6030 ms
- Time to health ready: 6213 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 54 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (228 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 169.22 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 169.22ms open 0; plugins.metadata.scan max 49.48ms open 0; config.normalize max 3.51ms open 0
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
- Resource peaks: CPU at 1073ms; RSS at 2069ms
- Diagnostic correlation:
  - CPU peaked at 197.2% around 1073ms
  - RSS peaked at 1488.6 MB around 2069ms
  - Slowest OpenClaw span: gateway.ready 169.22ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 34531 142% command-tree,model-cli openclaw
- Top RSS process: pid 33340 805.6 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 137ms
  - resource samples: 2
  - peak sampled RSS: 25.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 32879 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 33131 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 33340
- gateway port: 18789
- RSS: 56.6 MB
- CPU: 66.6%
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6030ms
- time to health ready: 6213ms
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
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 169.22ms
- most expensive repeated span: plugins.metadata.scan 4x 102.25ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 6213ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 63ms
  - resource samples: 2
  - peak sampled RSS: 796.3 MB
  - max sampled CPU: 61.7%
  - role peaks: 
  - top CPU: pid 33340 61.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 33340
- gateway port: 18789
- RSS: 770.3 MB
- CPU: 61%
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
- slowest OpenClaw span: gateway.ready 169.22ms
- most expensive repeated span: plugins.metadata.scan 5x 115.65ms
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
  - diagnostics: PASS, 12ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 87ms
  - resource samples: 2
  - peak sampled RSS: 805.9 MB
  - max sampled CPU: 60.3%
  - role peaks: 
  - top CPU: pid 33340 60.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 33340
- gateway port: 18789
- RSS: 779.1 MB
- CPU: 60.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 419ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
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
- OpenClaw timeline events: 203
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 169.22ms
- most expensive repeated span: plugins.metadata.scan 6x 145.79ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 13ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 419ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 810.2 MB
  - max sampled CPU: 69.8%
  - role peaks: 
  - top CPU: pid 33340 69.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' -- status`
  - status: 0
  - duration: 2253ms
  - resource samples: 4
  - peak sampled RSS: 1450.2 MB
  - max sampled CPU: 197.2%
  - role peaks: 
  - top CPU: pid 33972 136% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 33340
- gateway port: 18789
- RSS: 805.6 MB
- CPU: 55%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
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
- OpenClaw timeline events: 209
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 169.22ms
- most expensive repeated span: plugins.metadata.scan 9x 196.18ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' -- plugins list`
  - status: 0
  - duration: 2072ms
  - resource samples: 4
  - peak sampled RSS: 1254.8 MB
  - max sampled CPU: 189.8%
  - role peaks: 
  - top CPU: pid 34137 138% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5402ms
  - resource samples: 7
  - peak sampled RSS: 1488.6 MB
  - max sampled CPU: 175%
  - role peaks: 
  - top CPU: pid 34274 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 33340
- gateway port: 18789
- RSS: 664.8 MB
- CPU: 33.1%
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
- OpenClaw timeline events: 218
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 169.22ms
- most expensive repeated span: plugins.metadata.scan 12x 270.08ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' -- models list`
  - status: 0
  - duration: 1209ms
  - resource samples: 3
  - peak sampled RSS: 1172.7 MB
  - max sampled CPU: 175.3%
  - role peaks: 
  - top CPU: pid 34531 142% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 33340
- gateway port: 18789
- RSS: 664.8 MB
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
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 169.22ms
- most expensive repeated span: plugins.metadata.scan 17x 375.85ms
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

- `ocm logs 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' --tail 200 --raw`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 664.8 MB
  - max sampled CPU: 29.5%
  - role peaks: 
  - top CPU: pid 33340 29.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 33340
- gateway port: 18789
- RSS: 664.8 MB
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
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 169.22ms
- most expensive repeated span: plugins.metadata.scan 17x 375.85ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 664.8 MB
  - max sampled CPU: 28.1%
  - role peaks: 
  - top CPU: pid 33340 28.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 33340
- gateway port: 18789
- RSS: 664.8 MB
- CPU: 28%
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
- slowest OpenClaw span: gateway.ready 169.22ms
- most expensive repeated span: plugins.metadata.scan 17x 375.85ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1266ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 838.7 MB
- Tracked total peak RSS: 843.7 MB
- Max CPU: 68.7%
- Resource samples: 14
- Command tree peak RSS: 32 MB
- Gateway peak RSS: 838.7 MB
- Resource by role:
  - gateway: RSS 838.7 MB; CPU 68.7%
  - gateway-tree: RSS 838.7 MB; CPU 68.7%
  - command-tree: RSS 32 MB; CPU 0%
  - mock-provider: RSS 32 MB; CPU 0%
  - runtime-staging: RSS 30 MB; CPU 0%
  - plugin-cli: RSS 6.6 MB; CPU 0%
- Cold ready: 57 ms
- Warm ready: 50 ms
- Time to listening: 5776 ms
- Time to health ready: 5939 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 48 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (205 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 156.17 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 156.17ms open 0; plugins.metadata.scan max 40.03ms open 0; config.normalize max 3.17ms open 0
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
- Resource peaks: CPU at 50ms; RSS at 50ms
- Diagnostic correlation:
  - CPU peaked at 68.7% around 50ms
  - RSS peaked at 843.7 MB around 50ms
  - Slowest OpenClaw span: gateway.ready 156.17ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 35728 68.7% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 35728 838.7 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 138ms
  - resource samples: 2
  - peak sampled RSS: 32 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 35223 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 35475 0% command-tree,runtime-management ocm start kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 35728
- gateway port: 18789
- RSS: 42.5 MB
- CPU: 0%
- readiness: ready after 24 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 5776ms
- time to health ready: 5939ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
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
- slowest OpenClaw span: gateway.ready 156.17ms
- most expensive repeated span: plugins.metadata.scan 4x 77.75ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 5939ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 49ms
  - resource samples: 2
  - peak sampled RSS: 652.9 MB
  - max sampled CPU: 58.8%
  - role peaks: 
  - top CPU: pid 35728 58.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 35728
- gateway port: 18789
- RSS: 626.7 MB
- CPU: 58.2%
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
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 156.17ms
- most expensive repeated span: plugins.metadata.scan 5x 90.69ms
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

Apply Kova state 'missing-plugin-index' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 73ms
  - resource samples: 2
  - peak sampled RSS: 639.3 MB
  - max sampled CPU: 57.1%
  - role peaks: 
  - top CPU: pid 35728 57.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 35728
- gateway port: 18789
- RSS: 644.2 MB
- CPU: 57.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 0ms
- time to health ready: 448ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 48ms / 48ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 156.17ms
- most expensive repeated span: plugins.metadata.scan 7x 134.23ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 449ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z'`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 843.7 MB
  - max sampled CPU: 68.7%
  - role peaks: 
  - top CPU: pid 35728 68.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 843.5 MB
  - max sampled CPU: 68.3%
  - role peaks: 
  - top CPU: pid 35728 68.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 35728
- gateway port: 18789
- RSS: 838.6 MB
- CPU: 67.7%
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
- slowest OpenClaw span: gateway.ready 156.17ms
- most expensive repeated span: plugins.metadata.scan 7x 134.23ms
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

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 838.7 MB
  - max sampled CPU: 60.2%
  - role peaks: 
  - top CPU: pid 35728 60.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 35728
- gateway port: 18789
- RSS: 838.7 MB
- CPU: 59.9%
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
- slowest OpenClaw span: gateway.ready 156.17ms
- most expensive repeated span: plugins.metadata.scan 7x 134.23ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1195ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 877 MB
- Tracked total peak RSS: 882.2 MB
- Max CPU: 100%
- Resource samples: 14
- Command tree peak RSS: 22.7 MB
- Gateway peak RSS: 877 MB
- Resource by role:
  - gateway: RSS 877 MB; CPU 100%
  - gateway-tree: RSS 877 MB; CPU 100%
  - command-tree: RSS 22.7 MB; CPU 0%
  - mock-provider: RSS 22.7 MB; CPU 0%
  - runtime-staging: RSS 22.7 MB; CPU 0%
  - plugin-cli: RSS 6.7 MB; CPU 0%
- Cold ready: 67 ms
- Warm ready: 69 ms
- Time to listening: 6045 ms
- Time to health ready: 6198 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 136 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (205 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 204.26 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 204.26ms open 0; plugins.metadata.scan max 40ms open 0; config.normalize max 4.29ms open 0
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
- Resource peaks: CPU at 72ms; RSS at 68ms
- Diagnostic correlation:
  - CPU peaked at 100% around 72ms
  - RSS peaked at 882.2 MB around 68ms
  - Slowest OpenClaw span: gateway.ready 204.26ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 37189 100% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 37189 877 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 147ms
  - resource samples: 2
  - peak sampled RSS: 22.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 36825 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 67ms
  - resource samples: 2
  - peak sampled RSS: 53.3 MB
  - max sampled CPU: 100%
  - role peaks: 
  - top CPU: pid 37189 100% gateway,gateway-tree node /home/runner/.ocm/runtimes/kova-local-1783642044975/files/node_modules/openclaw/op...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 37189
- gateway port: 18789
- RSS: 57.5 MB
- CPU: 75%
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 6045ms
- time to health ready: 6198ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 64ms / 64ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 204.26ms
- most expensive repeated span: plugins.metadata.scan 4x 87.82ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 6198ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 74ms
  - resource samples: 2
  - peak sampled RSS: 646.1 MB
  - max sampled CPU: 62%
  - role peaks: 
  - top CPU: pid 37189 62% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 37189
- gateway port: 18789
- RSS: 624 MB
- CPU: 61.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 30ms
- health samples: 3/3 ok
- health latency p95/max: 30ms / 30ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 204.26ms
- most expensive repeated span: plugins.metadata.scan 5x 106.68ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 13ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'missing-plugin-index' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 87ms
  - resource samples: 2
  - peak sampled RSS: 662.5 MB
  - max sampled CPU: 60.7%
  - role peaks: 
  - top CPU: pid 37189 60.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 37189
- gateway port: 18789
- RSS: 665.4 MB
- CPU: 61.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 0ms
- time to health ready: 478ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 136ms / 136ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 204.26ms
- most expensive repeated span: plugins.metadata.scan 7x 160.25ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 16ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 478ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z'`
  - status: 0
  - duration: 69ms
  - resource samples: 2
  - peak sampled RSS: 882.2 MB
  - max sampled CPU: 73.1%
  - role peaks: 
  - top CPU: pid 37189 73.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 69ms
  - resource samples: 2
  - peak sampled RSS: 882 MB
  - max sampled CPU: 72.5%
  - role peaks: 
  - top CPU: pid 37189 72.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 37189
- gateway port: 18789
- RSS: 877 MB
- CPU: 71.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 20000ms / 60000ms
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
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 204.26ms
- most expensive repeated span: plugins.metadata.scan 7x 160.25ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 877 MB
  - max sampled CPU: 64.2%
  - role peaks: 
  - top CPU: pid 37189 64.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 37189
- gateway port: 18789
- RSS: 877 MB
- CPU: 63.8%
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
- slowest OpenClaw span: gateway.ready 204.26ms
- most expensive repeated span: plugins.metadata.scan 7x 160.25ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1458ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 862.6 MB
- Tracked total peak RSS: 867.5 MB
- Max CPU: 66.7%
- Resource samples: 14
- Command tree peak RSS: 31.5 MB
- Gateway peak RSS: 862.6 MB
- Resource by role:
  - gateway: RSS 862.6 MB; CPU 66.7%
  - gateway-tree: RSS 862.6 MB; CPU 66.7%
  - command-tree: RSS 31.5 MB; CPU 0%
  - mock-provider: RSS 31.5 MB; CPU 0%
  - runtime-staging: RSS 29.5 MB; CPU 0%
  - plugin-cli: RSS 6.6 MB; CPU 0%
- Cold ready: 78 ms
- Warm ready: 63 ms
- Time to listening: 7292 ms
- Time to health ready: 7360 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 29
- Health p95: 82 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (205 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 182.03 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 182.03ms open 0; plugins.metadata.scan max 46.82ms open 0; config.normalize max 3.93ms open 0
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
- Resource peaks: CPU at 62ms; RSS at 62ms
- Diagnostic correlation:
  - CPU peaked at 66.7% around 62ms
  - RSS peaked at 867.5 MB around 62ms
  - Slowest OpenClaw span: gateway.ready 182.03ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 38818 66.7% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 38818 862.6 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 146ms
  - resource samples: 2
  - peak sampled RSS: 31.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 38312 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 78ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 38564 0% command-tree,runtime-management ocm start kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 30 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 7292ms
- time to health ready: 7360ms
- tcp listening: ok in 0ms
- health: ok (200) in 68ms
- health samples: 1/30 ok
- health latency p95/max: 2ms / 68ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 182.03ms
- most expensive repeated span: plugins.metadata.scan 4x 94.26ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: PASS, 7360ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 735.6 MB
  - max sampled CPU: 55.6%
  - role peaks: 
  - top CPU: pid 38818 55.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 38818
- gateway port: 18789
- RSS: 709 MB
- CPU: 55.2%
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
- slowest OpenClaw span: gateway.ready 182.03ms
- most expensive repeated span: plugins.metadata.scan 5x 108.4ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'missing-plugin-index' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 91ms
  - resource samples: 2
  - peak sampled RSS: 724.5 MB
  - max sampled CPU: 55.8%
  - role peaks: 
  - top CPU: pid 38818 55.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 38818
- gateway port: 18789
- RSS: 726.3 MB
- CPU: 56.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 0ms
- time to health ready: 445ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 82ms / 82ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 182.03ms
- most expensive repeated span: plugins.metadata.scan 7x 158.45ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 445ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z'`
  - status: 0
  - duration: 63ms
  - resource samples: 2
  - peak sampled RSS: 867.5 MB
  - max sampled CPU: 66.7%
  - role peaks: 
  - top CPU: pid 38818 66.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 65ms
  - resource samples: 2
  - peak sampled RSS: 867.4 MB
  - max sampled CPU: 66.1%
  - role peaks: 
  - top CPU: pid 38818 66.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 38818
- gateway port: 18789
- RSS: 862.5 MB
- CPU: 65.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 20000ms / 60000ms
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
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 182.03ms
- most expensive repeated span: plugins.metadata.scan 7x 158.45ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 862.6 MB
  - max sampled CPU: 58.9%
  - role peaks: 
  - top CPU: pid 38818 58.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 38818
- gateway port: 18789
- RSS: 862.6 MB
- CPU: 58.5%
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
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 182.03ms
- most expensive repeated span: plugins.metadata.scan 7x 158.45ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1154ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 827.3 MB
- Tracked total peak RSS: 1356.5 MB
- Max CPU: 100%
- Resource samples: 22
- Command tree peak RSS: 529.4 MB
- Gateway peak RSS: 827.3 MB
- Resource by role:
  - gateway: RSS 827.3 MB; CPU 100%
  - gateway-tree: RSS 827.3 MB; CPU 69%
  - command-tree: RSS 529.4 MB; CPU 144.8%
  - plugin-cli: RSS 529.4 MB; CPU 144.8%
  - runtime-staging: RSS 32.8 MB; CPU 0%
  - mock-provider: RSS 29.8 MB; CPU 0%
- Cold ready: 59 ms
- Warm ready: 66 ms
- Time to listening: 6279 ms
- Time to health ready: 6282 ms
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
- OpenClaw timeline: available (209 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 166.42 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 166.42ms open 0; plugins.metadata.scan max 51.58ms open 0; config.normalize max 3.53ms open 0
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
- Resource peaks: CPU at 1070ms; RSS at 1145ms
- Diagnostic correlation:
  - CPU peaked at 201.3% around 1070ms
  - RSS peaked at 1356.5 MB around 1145ms
  - Slowest OpenClaw span: gateway.ready 166.42ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 40858 142% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 40405 827.3 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 143ms
  - resource samples: 2
  - peak sampled RSS: 29.8 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 39912 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 40164 0% command-tree,runtime-management ocm start kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/resource-samples/gateway-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 40405
- gateway port: 18789
- RSS: 53.7 MB
- CPU: 100%
- readiness: ready after 26 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 6279ms
- time to health ready: 6282ms
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
- slowest OpenClaw span: gateway.ready 166.42ms
- most expensive repeated span: plugins.metadata.scan 4x 91.32ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 6282ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 804 MB
  - max sampled CPU: 59.5%
  - role peaks: 
  - top CPU: pid 40405 59.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 40405
- gateway port: 18789
- RSS: 771.2 MB
- CPU: 58.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 31ms
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
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 166.42ms
- most expensive repeated span: plugins.metadata.scan 5x 106.47ms
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
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' -- plugins list`
  - status: 0
  - duration: 1967ms
  - resource samples: 3
  - peak sampled RSS: 1356.5 MB
  - max sampled CPU: 191.6%
  - role peaks: 
  - top CPU: pid 40653 120% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1824ms
  - resource samples: 3
  - peak sampled RSS: 1335.1 MB
  - max sampled CPU: 201.3%
  - role peaks: 
  - top CPU: pid 40858 142% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' --tail 400 --raw`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 827.3 MB
  - max sampled CPU: 52.7%
  - role peaks: 
  - top CPU: pid 40405 52.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 40405
- gateway port: 18789
- RSS: 827.3 MB
- CPU: 52.4%
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
- OpenClaw timeline events: 209
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 166.42ms
- most expensive repeated span: plugins.metadata.scan 9x 225.43ms
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
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z'`
  - status: 0
  - duration: 66ms
  - resource samples: 2
  - peak sampled RSS: 832.5 MB
  - max sampled CPU: 50%
  - role peaks: 
  - top CPU: pid 40405 50% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 74ms
  - resource samples: 2
  - peak sampled RSS: 832.3 MB
  - max sampled CPU: 49.7%
  - role peaks: 
  - top CPU: pid 40405 49.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' --tail 400 --raw`
  - status: 0
  - duration: 71ms
  - resource samples: 2
  - peak sampled RSS: 827.3 MB
  - max sampled CPU: 49.4%
  - role peaks: 
  - top CPU: pid 40405 49.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 40405
- gateway port: 18789
- RSS: 827.3 MB
- CPU: 49%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
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
- OpenClaw timeline events: 209
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 166.42ms
- most expensive repeated span: plugins.metadata.scan 9x 225.43ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 12ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 66ms
  - resource samples: 2
  - peak sampled RSS: 827.3 MB
  - max sampled CPU: 45.2%
  - role peaks: 
  - top CPU: pid 40405 45.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 40405
- gateway port: 18789
- RSS: 827.3 MB
- CPU: 45%
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
- slowest OpenClaw span: gateway.ready 166.42ms
- most expensive repeated span: plugins.metadata.scan 9x 225.43ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1201ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 914 MB
- Tracked total peak RSS: 1432.6 MB
- Max CPU: 83.3%
- Resource samples: 22
- Command tree peak RSS: 518.7 MB
- Gateway peak RSS: 914 MB
- Resource by role:
  - gateway: RSS 914 MB; CPU 83.3%
  - gateway-tree: RSS 914 MB; CPU 67.4%
  - command-tree: RSS 518.7 MB; CPU 140.8%
  - plugin-cli: RSS 518.7 MB; CPU 140.8%
  - mock-provider: RSS 27.3 MB; CPU 0%
  - runtime-staging: RSS 25.8 MB; CPU 0%
- Cold ready: 54 ms
- Warm ready: 60 ms
- Time to listening: 6026 ms
- Time to health ready: 6170 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 36 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (211 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 170.83 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 170.83ms open 0; plugins.metadata.scan max 49.28ms open 0; config.normalize max 3.85ms open 0
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
- Resource peaks: CPU at 1069ms; RSS at 1069ms
- Diagnostic correlation:
  - CPU peaked at 195.8% around 1069ms
  - RSS peaked at 1432.6 MB around 1069ms
  - Slowest OpenClaw span: gateway.ready 170.83ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 42854 138% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 42298 914 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 142ms
  - resource samples: 2
  - peak sampled RSS: 27.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 41904 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 42156 0% command-tree,runtime-management ocm start kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/resource-samples/gateway-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 42298
- gateway port: 18789
- RSS: 75 MB
- CPU: 83.3%
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 6026ms
- time to health ready: 6170ms
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
- slowest OpenClaw span: gateway.ready 170.83ms
- most expensive repeated span: plugins.metadata.scan 4x 91.74ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 6170ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 691 MB
  - max sampled CPU: 56.7%
  - role peaks: 
  - top CPU: pid 42298 56.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 42298
- gateway port: 18789
- RSS: 665.2 MB
- CPU: 56.1%
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
- slowest OpenClaw span: gateway.ready 170.83ms
- most expensive repeated span: plugins.metadata.scan 5x 105.34ms
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

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' -- plugins list`
  - status: 0
  - duration: 1997ms
  - resource samples: 3
  - peak sampled RSS: 1428.6 MB
  - max sampled CPU: 187%
  - role peaks: 
  - top CPU: pid 42687 117% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1743ms
  - resource samples: 3
  - peak sampled RSS: 1432.6 MB
  - max sampled CPU: 195.8%
  - role peaks: 
  - top CPU: pid 42854 138% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' --tail 400 --raw`
  - status: 0
  - duration: 63ms
  - resource samples: 2
  - peak sampled RSS: 914 MB
  - max sampled CPU: 51.6%
  - role peaks: 
  - top CPU: pid 42298 51.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 42298
- gateway port: 18789
- RSS: 914 MB
- CPU: 51.2%
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
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 170.83ms
- most expensive repeated span: plugins.metadata.scan 10x 228.23ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z'`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 919 MB
  - max sampled CPU: 49.1%
  - role peaks: 
  - top CPU: pid 42298 49.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 918.9 MB
  - max sampled CPU: 48.8%
  - role peaks: 
  - top CPU: pid 42298 48.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' --tail 400 --raw`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 914 MB
  - max sampled CPU: 48.5%
  - role peaks: 
  - top CPU: pid 42298 48.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 42298
- gateway port: 18789
- RSS: 914 MB
- CPU: 48.2%
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
- slowest OpenClaw span: gateway.ready 170.83ms
- most expensive repeated span: plugins.metadata.scan 10x 228.23ms
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

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 914 MB
  - max sampled CPU: 44.4%
  - role peaks: 
  - top CPU: pid 42298 44.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 42298
- gateway port: 18789
- RSS: 914 MB
- CPU: 44.2%
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
- slowest OpenClaw span: gateway.ready 170.83ms
- most expensive repeated span: plugins.metadata.scan 10x 228.23ms
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
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1072ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 839.8 MB
- Tracked total peak RSS: 1372.9 MB
- Max CPU: 73.7%
- Resource samples: 22
- Command tree peak RSS: 533.2 MB
- Gateway peak RSS: 839.8 MB
- Resource by role:
  - gateway: RSS 839.8 MB; CPU 73.7%
  - gateway-tree: RSS 839.8 MB; CPU 73.7%
  - command-tree: RSS 533.2 MB; CPU 136.8%
  - plugin-cli: RSS 533.2 MB; CPU 136.8%
  - runtime-staging: RSS 28.7 MB; CPU 0%
  - mock-provider: RSS 20.9 MB; CPU 0%
- Cold ready: 59 ms
- Warm ready: 63 ms
- Time to listening: 5524 ms
- Time to health ready: 5703 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 22
- Health p95: 22 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (211 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 173.73 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 173.73ms open 0; plugins.metadata.scan max 44.99ms open 0; config.normalize max 3.59ms open 0
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
- Resource peaks: CPU at 1119ms; RSS at 1061ms
- Diagnostic correlation:
  - CPU peaked at 205.4% around 1119ms
  - RSS peaked at 1372.9 MB around 1061ms
  - Slowest OpenClaw span: gateway.ready 173.73ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 44852 134% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 44400 839.8 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 134ms
  - resource samples: 2
  - peak sampled RSS: 20.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 43894 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 4.8 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 44146 0% command-tree,runtime-management ocm start kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/resource-samples/gateway-start-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 23 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 5524ms
- time to health ready: 5703ms
- tcp listening: ok in 0ms
- health: ok (200) in 179ms
- health samples: 1/23 ok
- health latency p95/max: 1ms / 179ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 173.73ms
- most expensive repeated span: plugins.metadata.scan 4x 80.93ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: PASS, 5703ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 49ms
  - resource samples: 2
  - peak sampled RSS: 725.6 MB
  - max sampled CPU: 63.5%
  - role peaks: 
  - top CPU: pid 44400 63.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 44400
- gateway port: 18789
- RSS: 696.9 MB
- CPU: 62.8%
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
- slowest OpenClaw span: gateway.ready 173.73ms
- most expensive repeated span: plugins.metadata.scan 5x 93.07ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' -- plugins list`
  - status: 0
  - duration: 2088ms
  - resource samples: 3
  - peak sampled RSS: 1359.2 MB
  - max sampled CPU: 205.4%
  - role peaks: 
  - top CPU: pid 44688 129% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1884ms
  - resource samples: 3
  - peak sampled RSS: 1372.9 MB
  - max sampled CPU: 194.6%
  - role peaks: 
  - top CPU: pid 44852 134% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' --tail 400 --raw`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 839.7 MB
  - max sampled CPU: 53.2%
  - role peaks: 
  - top CPU: pid 44400 53.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 44400
- gateway port: 18789
- RSS: 839.7 MB
- CPU: 52.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
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
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 173.73ms
- most expensive repeated span: plugins.metadata.scan 10x 221.69ms
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
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z'`
  - status: 0
  - duration: 63ms
  - resource samples: 2
  - peak sampled RSS: 844.8 MB
  - max sampled CPU: 50.3%
  - role peaks: 
  - top CPU: pid 44400 50.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 844.6 MB
  - max sampled CPU: 50%
  - role peaks: 
  - top CPU: pid 44400 50% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' --tail 400 --raw`
  - status: 0
  - duration: 74ms
  - resource samples: 2
  - peak sampled RSS: 839.8 MB
  - max sampled CPU: 49.7%
  - role peaks: 
  - top CPU: pid 44400 49.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 44400
- gateway port: 18789
- RSS: 839.8 MB
- CPU: 49.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
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
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 173.73ms
- most expensive repeated span: plugins.metadata.scan 10x 221.69ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 14ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 47ms
  - resource samples: 2
  - peak sampled RSS: 839.8 MB
  - max sampled CPU: 45.1%
  - role peaks: 
  - top CPU: pid 44400 45.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 44400
- gateway port: 18789
- RSS: 839.8 MB
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
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 173.73ms
- most expensive repeated span: plugins.metadata.scan 10x 221.69ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1105ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 716.9 MB
- Tracked total peak RSS: 716.9 MB
- Max CPU: 142.8%
- Resource samples: 20
- Command tree peak RSS: 716.9 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 716.9 MB; CPU 142.8%
  - agent-process: RSS 716.9 MB; CPU 142.8%
  - command-tree: RSS 716.9 MB; CPU 142.8%
  - status-cli: RSS 660.2 MB; CPU 138.4%
  - uncategorized: RSS 29.4 MB; CPU 0%
  - mock-provider: RSS 25.5 MB; CPU 0%
- Cold ready: 51 ms
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
- Slowest OpenClaw span: plugins.metadata.scan 49.1 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 49.1ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 38 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 38 ms
- Agent turn: 2895 ms (true)
- Agent cold/warm: cold 2895 ms; warm 2779 ms; delta 116 ms
- Agent pre-provider: cold 2771 ms; warm 2674 ms; delta 97 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 2889.2 ms; max 2895 ms; pre-provider p95 2766.15 ms
- Provider evidence: 1 request(s); provider work 2 ms; pre-provider 2771 ms; post-provider 122 ms
- Agent latency diagnosis: cold agent turn 2895ms; pre-provider 2771ms; provider 2ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 2895 ms; pre-provider 2771 ms; provider 2 ms; post-provider 122 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2771ms; provider 2ms; post-provider 122ms; unknown 2771ms; source none
  - warm: total 2779 ms; pre-provider 2674 ms; provider 1 ms; post-provider 104 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2674ms; provider 1ms; post-provider 104ms; unknown 2674ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1109ms; RSS at 2118ms
- Diagnostic correlation:
  - CPU peaked at 142.8% around 1109ms
  - RSS peaked at 716.9 MB around 2118ms
  - Slowest OpenClaw span: plugins.metadata.scan 49.1ms
  - Provider/model timing max: 38ms
- Top CPU process: pid 46893 140% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 46893 653.7 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 139ms
  - resource samples: 2
  - peak sampled RSS: 25.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 45885 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --no-service --json`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 46137 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/resource-samples/provision-1.jsonl

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

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 29.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 46390 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t00072...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

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

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2895ms
  - resource samples: 4
  - peak sampled RSS: 716.9 MB
  - max sampled CPU: 142.8%
  - role peaks: 
  - top CPU: pid 46893 140% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 44.95ms
- most expensive repeated span: plugins.metadata.scan 5x 87.02ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 38ms
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

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2779ms
  - resource samples: 4
  - peak sampled RSS: 698.7 MB
  - max sampled CPU: 142.8%
  - role peaks: 
  - top CPU: pid 47640 139% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 44.95ms
- most expensive repeated span: plugins.metadata.scan 10x 168.17ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 38ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z' -- status`
  - status: 0
  - duration: 2125ms
  - resource samples: 4
  - peak sampled RSS: 660.2 MB
  - max sampled CPU: 138.4%
  - role peaks: 
  - top CPU: pid 48266 137% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 49.1ms
- most expensive repeated span: plugins.metadata.scan 13x 243.37ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 38ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 48674 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 49.1ms
- most expensive repeated span: plugins.metadata.scan 13x 243.37ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 38ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 936ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 711.2 MB
- Tracked total peak RSS: 711.2 MB
- Max CPU: 144.7%
- Resource samples: 19
- Command tree peak RSS: 711.2 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 711.2 MB; CPU 144.7%
  - agent-process: RSS 711.2 MB; CPU 144.7%
  - command-tree: RSS 711.2 MB; CPU 144.7%
  - status-cli: RSS 475.6 MB; CPU 144.7%
  - uncategorized: RSS 31.3 MB; CPU 0%
  - mock-provider: RSS 21.6 MB; CPU 0%
- Cold ready: 63 ms
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
- Slowest OpenClaw span: plugins.metadata.scan 53.46 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 53.46ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 36 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 36 ms
- Agent turn: 3006 ms (true)
- Agent cold/warm: cold 3006 ms; warm 2817 ms; delta 189 ms
- Agent pre-provider: cold 2889 ms; warm 2703 ms; delta 186 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 2996.55 ms; max 3006 ms; pre-provider p95 2879.7 ms
- Provider evidence: 1 request(s); provider work 2 ms; pre-provider 2889 ms; post-provider 115 ms
- Agent latency diagnosis: cold agent turn 3006ms; pre-provider 2889ms; provider 2ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 3006 ms; pre-provider 2889 ms; provider 2 ms; post-provider 115 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2889ms; provider 2ms; post-provider 115ms; unknown 2889ms; source none
  - warm: total 2817 ms; pre-provider 2703 ms; provider 1 ms; post-provider 113 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2703ms; provider 1ms; post-provider 113ms; unknown 2703ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1145ms; RSS at 2140ms
- Diagnostic correlation:
  - CPU peaked at 144.7% around 1145ms
  - RSS peaked at 711.2 MB around 2140ms
  - Slowest OpenClaw span: plugins.metadata.scan 53.46ms
  - Provider/model timing max: 36ms
- Top CPU process: pid 51633 141% command-tree,status-cli openclaw
- Top RSS process: pid 51006 648 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 142ms
  - resource samples: 2
  - peak sampled RSS: 21.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 49252 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --no-service --json`
  - status: 0
  - duration: 63ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 49504 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/resource-samples/provision-1.jsonl

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
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 70ms
  - resource samples: 2
  - peak sampled RSS: 31.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 49757 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t00072...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

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
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 3006ms
  - resource samples: 4
  - peak sampled RSS: 690.2 MB
  - max sampled CPU: 144.7%
  - role peaks: 
  - top CPU: pid 50254 140% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 53.46ms
- most expensive repeated span: plugins.metadata.scan 5x 95.99ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 36ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2817ms
  - resource samples: 4
  - peak sampled RSS: 711.2 MB
  - max sampled CPU: 139.8%
  - role peaks: 
  - top CPU: pid 51006 138% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 53.46ms
- most expensive repeated span: plugins.metadata.scan 10x 181.59ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 36ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z' -- status`
  - status: 0
  - duration: 2015ms
  - resource samples: 3
  - peak sampled RSS: 475.6 MB
  - max sampled CPU: 144.7%
  - role peaks: 
  - top CPU: pid 51633 141% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 53.46ms
- most expensive repeated span: plugins.metadata.scan 13x 250.46ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 36ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 51923 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 53.46ms
- most expensive repeated span: plugins.metadata.scan 13x 250.46ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 36ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1043ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 714.6 MB
- Tracked total peak RSS: 714.6 MB
- Max CPU: 143.7%
- Resource samples: 19
- Command tree peak RSS: 714.6 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 714.6 MB; CPU 143.7%
  - agent-process: RSS 714.6 MB; CPU 143.7%
  - command-tree: RSS 714.6 MB; CPU 143.7%
  - status-cli: RSS 486.3 MB; CPU 141.7%
  - mock-provider: RSS 27.3 MB; CPU 0%
  - uncategorized: RSS 26.4 MB; CPU 0%
- Cold ready: 69 ms
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
- Slowest OpenClaw span: plugins.metadata.scan 50.17 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 50.17ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 44 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 44 ms
- Agent turn: 3016 ms (true)
- Agent cold/warm: cold 3016 ms; warm 2733 ms; delta 283 ms
- Agent pre-provider: cold 2896 ms; warm 2616 ms; delta 280 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 3001.85 ms; max 3016 ms; pre-provider p95 2882 ms
- Provider evidence: 1 request(s); provider work 2 ms; pre-provider 2896 ms; post-provider 118 ms
- Agent latency diagnosis: cold agent turn 3016ms; pre-provider 2896ms; provider 2ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 3016 ms; pre-provider 2896 ms; provider 2 ms; post-provider 118 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2896ms; provider 2ms; post-provider 118ms; unknown 2896ms; source none
  - warm: total 2733 ms; pre-provider 2616 ms; provider 1 ms; post-provider 116 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2616ms; provider 1ms; post-provider 116ms; unknown 2616ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1133ms; RSS at 2130ms
- Diagnostic correlation:
  - CPU peaked at 143.7% around 1133ms
  - RSS peaked at 714.6 MB around 2130ms
  - Slowest OpenClaw span: plugins.metadata.scan 50.17ms
  - Provider/model timing max: 44ms
- Top CPU process: pid 54217 140% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 54217 651.4 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 151ms
  - resource samples: 2
  - peak sampled RSS: 27.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 52500 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --no-service --json`
  - status: 0
  - duration: 69ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 52752 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/resource-samples/provision-1.jsonl

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
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 26.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 53005 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t00072...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

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
  - service: PASS, 14ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 5ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 1ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 3016ms
  - resource samples: 4
  - peak sampled RSS: 686.8 MB
  - max sampled CPU: 136.9%
  - role peaks: 
  - top CPU: pid 53497 135% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 49.18ms
- most expensive repeated span: plugins.metadata.scan 5x 93.65ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 36ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 12ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2733ms
  - resource samples: 4
  - peak sampled RSS: 714.6 MB
  - max sampled CPU: 143.7%
  - role peaks: 
  - top CPU: pid 54217 140% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 49.18ms
- most expensive repeated span: plugins.metadata.scan 10x 173.36ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 44ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z' -- status`
  - status: 0
  - duration: 2069ms
  - resource samples: 3
  - peak sampled RSS: 486.3 MB
  - max sampled CPU: 141.7%
  - role peaks: 
  - top CPU: pid 54855 138% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 50.17ms
- most expensive repeated span: plugins.metadata.scan 13x 246.87ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 44ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 63ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 55170 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 50.17ms
- most expensive repeated span: plugins.metadata.scan 13x 246.87ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 44ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 912ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 898.8 MB
- Tracked total peak RSS: 1648.3 MB
- Max CPU: 114%
- Resource samples: 26
- Command tree peak RSS: 749.7 MB
- Gateway peak RSS: 898.8 MB
- Resource by role:
  - gateway: RSS 898.8 MB; CPU 114%
  - gateway-tree: RSS 898.8 MB; CPU 72.5%
  - command-tree: RSS 749.7 MB; CPU 153.6%
  - status-cli: RSS 749.7 MB; CPU 145.6%
  - plugin-cli: RSS 521.4 MB; CPU 143.7%
  - model-cli: RSS 502.6 MB; CPU 153.6%
- Cold ready: 57 ms
- Warm ready: 58 ms
- Time to listening: 6031 ms
- Time to health ready: 6151 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 77 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (228 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 180.79 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 180.79ms open 0; plugins.metadata.scan max 46.53ms open 0; config.normalize max 5.96ms open 0
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
- Resource peaks: CPU at 1090ms; RSS at 2093ms
- Diagnostic correlation:
  - CPU peaked at 210.1% around 1090ms
  - RSS peaked at 1648.3 MB around 2093ms
  - Slowest OpenClaw span: gateway.ready 180.79ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 57240 149% command-tree,model-cli openclaw
- Top RSS process: pid 56380 898.8 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 150ms
  - resource samples: 2
  - peak sampled RSS: 30.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 55747 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 55999 0% command-tree,runtime-management ocm start kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z --ru...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 65ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 56250 0% command-tree,status-cli ocm service status kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 56380
- gateway port: 18789
- RSS: 81.7 MB
- CPU: 114%
- readiness: ready after 25 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6031ms
- time to health ready: 6151ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 49ms / 49ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 180.79ms
- most expensive repeated span: plugins.metadata.scan 4x 87.03ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 6151ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 18ms, artifacts 0
  - node-profiles: INFO, 2ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 63ms
  - resource samples: 2
  - peak sampled RSS: 678.6 MB
  - max sampled CPU: 60.4%
  - role peaks: 
  - top CPU: pid 56380 60.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 56380
- gateway port: 18789
- RSS: 655.2 MB
- CPU: 59.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 57ms
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
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 180.79ms
- most expensive repeated span: plugins.metadata.scan 5x 104.37ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 12ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 121ms
  - resource samples: 2
  - peak sampled RSS: 702.3 MB
  - max sampled CPU: 60.3%
  - role peaks: 
  - top CPU: pid 56380 60.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 56380
- gateway port: 18789
- RSS: 711.8 MB
- CPU: 61%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 491ms
- tcp listening: ok in 0ms
- health: ok (200) in 3ms
- health samples: 3/3 ok
- health latency p95/max: 77ms / 77ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 180.79ms
- most expensive repeated span: plugins.metadata.scan 7x 146.59ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 20ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: PASS, 491ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' -- status`
  - status: 0
  - duration: 2351ms
  - resource samples: 4
  - peak sampled RSS: 1648.3 MB
  - max sampled CPU: 210.1%
  - role peaks: 
  - top CPU: pid 56945 143% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' -- plugins list`
  - status: 0
  - duration: 2015ms
  - resource samples: 3
  - peak sampled RSS: 1420.2 MB
  - max sampled CPU: 196.1%
  - role peaks: 
  - top CPU: pid 57107 140% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' -- models list`
  - status: 0
  - duration: 1361ms
  - resource samples: 3
  - peak sampled RSS: 1401.4 MB
  - max sampled CPU: 198.5%
  - role peaks: 
  - top CPU: pid 57240 149% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 56380
- gateway port: 18789
- RSS: 898.8 MB
- CPU: 44%
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 180.79ms
- most expensive repeated span: plugins.metadata.scan 17x 356.67ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z'`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 903.8 MB
  - max sampled CPU: 42.5%
  - role peaks: 
  - top CPU: pid 56380 42.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 66ms
  - resource samples: 2
  - peak sampled RSS: 903.6 MB
  - max sampled CPU: 42.3%
  - role peaks: 
  - top CPU: pid 56380 42.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 56380
- gateway port: 18789
- RSS: 898.8 MB
- CPU: 42.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 15000ms / 45000ms
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 180.79ms
- most expensive repeated span: plugins.metadata.scan 17x 356.67ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 78ms
  - resource samples: 2
  - peak sampled RSS: 710.2 MB
  - max sampled CPU: 40.6%
  - role peaks: 
  - top CPU: pid 56380 40.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 56380
- gateway port: 18789
- RSS: 710.2 MB
- CPU: 40.6%
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
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 180.79ms
- most expensive repeated span: plugins.metadata.scan 17x 356.67ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1292ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 842.2 MB
- Tracked total peak RSS: 1565.2 MB
- Max CPU: 140%
- Resource samples: 27
- Command tree peak RSS: 723 MB
- Gateway peak RSS: 842.2 MB
- Resource by role:
  - gateway: RSS 842.2 MB; CPU 140%
  - gateway-tree: RSS 842.2 MB; CPU 140%
  - command-tree: RSS 723 MB; CPU 146.7%
  - plugin-cli: RSS 723 MB; CPU 139.9%
  - status-cli: RSS 548.7 MB; CPU 146.7%
  - model-cli: RSS 470 MB; CPU 138.7%
- Cold ready: 59 ms
- Warm ready: 66 ms
- Time to listening: 7040 ms
- Time to health ready: 7188 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 76 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (228 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 172.18 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 172.18ms open 0; plugins.metadata.scan max 45.52ms open 0; config.normalize max 4.01ms open 0
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
- Resource peaks: CPU at 1072ms; RSS at 2088ms
- Diagnostic correlation:
  - CPU peaked at 206.9% around 1072ms
  - RSS peaked at 1565.2 MB around 2088ms
  - Slowest OpenClaw span: gateway.ready 172.18ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 59116 143% command-tree,status-cli openclaw
- Top RSS process: pid 58412 842.2 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 140ms
  - resource samples: 2
  - peak sampled RSS: 23.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 58025 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 58277 0% command-tree,runtime-management ocm start kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z --ru...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 71ms
  - resource samples: 2
  - peak sampled RSS: 109.5 MB
  - max sampled CPU: 140%
  - role peaks: 
  - top CPU: pid 58412 140% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 58412
- gateway port: 18789
- RSS: 115.8 MB
- CPU: 128%
- readiness: ready after 29 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 7040ms
- time to health ready: 7188ms
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
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 172.18ms
- most expensive repeated span: plugins.metadata.scan 4x 104.13ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 12ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 7188ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 715.3 MB
  - max sampled CPU: 55%
  - role peaks: 
  - top CPU: pid 58412 55% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 58412
- gateway port: 18789
- RSS: 684.2 MB
- CPU: 54.5%
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
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 172.18ms
- most expensive repeated span: plugins.metadata.scan 5x 119.85ms
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

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 104ms
  - resource samples: 2
  - peak sampled RSS: 715 MB
  - max sampled CPU: 55%
  - role peaks: 
  - top CPU: pid 58412 55% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 58412
- gateway port: 18789
- RSS: 695.1 MB
- CPU: 55.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 489ms
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
- slowest OpenClaw span: gateway.ready 172.18ms
- most expensive repeated span: plugins.metadata.scan 7x 162.14ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 14ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: PASS, 489ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' -- status`
  - status: 0
  - duration: 2076ms
  - resource samples: 4
  - peak sampled RSS: 1390.6 MB
  - max sampled CPU: 206.9%
  - role peaks: 
  - top CPU: pid 59116 143% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' -- plugins list`
  - status: 0
  - duration: 2140ms
  - resource samples: 4
  - peak sampled RSS: 1565.2 MB
  - max sampled CPU: 187%
  - role peaks: 
  - top CPU: pid 59245 138% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' -- models list`
  - status: 0
  - duration: 1341ms
  - resource samples: 3
  - peak sampled RSS: 1312.2 MB
  - max sampled CPU: 182.3%
  - role peaks: 
  - top CPU: pid 59401 135% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 58412
- gateway port: 18789
- RSS: 842.2 MB
- CPU: 42.7%
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 172.18ms
- most expensive repeated span: plugins.metadata.scan 17x 364.52ms
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

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z'`
  - status: 0
  - duration: 66ms
  - resource samples: 2
  - peak sampled RSS: 847.2 MB
  - max sampled CPU: 41.3%
  - role peaks: 
  - top CPU: pid 58412 41.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 847.2 MB
  - max sampled CPU: 41.1%
  - role peaks: 
  - top CPU: pid 58412 41.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 58412
- gateway port: 18789
- RSS: 842.2 MB
- CPU: 40.9%
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
- slowest OpenClaw span: gateway.ready 172.18ms
- most expensive repeated span: plugins.metadata.scan 17x 364.52ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 842.2 MB
  - max sampled CPU: 38.4%
  - role peaks: 
  - top CPU: pid 58412 38.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 58412
- gateway port: 18789
- RSS: 842.2 MB
- CPU: 38.3%
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
- slowest OpenClaw span: gateway.ready 172.18ms
- most expensive repeated span: plugins.metadata.scan 17x 364.52ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1340ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 865.2 MB
- Tracked total peak RSS: 1578.6 MB
- Max CPU: 122%
- Resource samples: 26
- Command tree peak RSS: 713.5 MB
- Gateway peak RSS: 865.2 MB
- Resource by role:
  - gateway: RSS 865.2 MB; CPU 122%
  - gateway-tree: RSS 865.2 MB; CPU 122%
  - command-tree: RSS 713.5 MB; CPU 148.7%
  - status-cli: RSS 713.5 MB; CPU 148.7%
  - plugin-cli: RSS 515.4 MB; CPU 144.8%
  - model-cli: RSS 439.1 MB; CPU 146.7%
- Cold ready: 58 ms
- Warm ready: 54 ms
- Time to listening: 6806 ms
- Time to health ready: 6880 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 92 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (228 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 167.68 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 167.68ms open 0; plugins.metadata.scan max 42.85ms open 0; config.normalize max 4.02ms open 0
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
- Resource peaks: CPU at 1076ms; RSS at 2073ms
- Diagnostic correlation:
  - CPU peaked at 208.8% around 1076ms
  - RSS peaked at 1578.6 MB around 2073ms
  - Slowest OpenClaw span: gateway.ready 167.68ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 61259 145% command-tree,status-cli openclaw
- Top RSS process: pid 60591 865.2 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 141ms
  - resource samples: 2
  - peak sampled RSS: 29.1 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 60187 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' --runtime 'kova-local-1783642044975' --json`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 60439 0% command-tree,runtime-management ocm start kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z --ru...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 98.5 MB
  - max sampled CPU: 122%
  - role peaks: 
  - top CPU: pid 60591 122% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 60591
- gateway port: 18789
- RSS: 107.1 MB
- CPU: 118%
- readiness: ready after 28 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 6806ms
- time to health ready: 6880ms
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
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 167.68ms
- most expensive repeated span: plugins.metadata.scan 4x 85.84ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 6880ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/port'`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 645.5 MB
  - max sampled CPU: 56.2%
  - role peaks: 
  - top CPU: pid 60591 56.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 60591
- gateway port: 18789
- RSS: 617.9 MB
- CPU: 55.7%
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
- slowest OpenClaw span: gateway.ready 167.68ms
- most expensive repeated span: plugins.metadata.scan 5x 99.24ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 81ms
  - resource samples: 2
  - peak sampled RSS: 655.7 MB
  - max sampled CPU: 55.2%
  - role peaks: 
  - top CPU: pid 60591 55.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 60591
- gateway port: 18789
- RSS: 658.4 MB
- CPU: 55.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 470ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 92ms / 92ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 167.68ms
- most expensive repeated span: plugins.metadata.scan 7x 147.54ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 470ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' -- status`
  - status: 0
  - duration: 2108ms
  - resource samples: 4
  - peak sampled RSS: 1578.6 MB
  - max sampled CPU: 208.8%
  - role peaks: 
  - top CPU: pid 61259 145% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' -- plugins list`
  - status: 0
  - duration: 1860ms
  - resource samples: 3
  - peak sampled RSS: 1380.5 MB
  - max sampled CPU: 195%
  - role peaks: 
  - top CPU: pid 61427 141% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' -- models list`
  - status: 0
  - duration: 1601ms
  - resource samples: 3
  - peak sampled RSS: 1304.2 MB
  - max sampled CPU: 190.4%
  - role peaks: 
  - top CPU: pid 61539 143% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 60591
- gateway port: 18789
- RSS: 865.1 MB
- CPU: 42.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 3ms
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 167.68ms
- most expensive repeated span: plugins.metadata.scan 17x 356.49ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 14ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 3ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z'`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 870.2 MB
  - max sampled CPU: 40.7%
  - role peaks: 
  - top CPU: pid 60591 40.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' --json`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 870.1 MB
  - max sampled CPU: 40.5%
  - role peaks: 
  - top CPU: pid 60591 40.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 60591
- gateway port: 18789
- RSS: 865.2 MB
- CPU: 40.3%
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
- slowest OpenClaw span: gateway.ready 167.68ms
- most expensive repeated span: plugins.metadata.scan 17x 356.49ms
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

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 64ms
  - resource samples: 2
  - peak sampled RSS: 865.2 MB
  - max sampled CPU: 37.8%
  - role peaks: 
  - top CPU: pid 60591 37.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T000725Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 60591
- gateway port: 18789
- RSS: 711.4 MB
- CPU: 37.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
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
- OpenClaw timeline events: 228
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 167.68ms
- most expensive repeated span: plugins.metadata.scan 17x 356.49ms
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
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t000725z' --yes`
- cleanup status: 0
- cleanup duration: 1340ms

