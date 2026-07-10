# Kova OpenClaw Runtime Report

Generated: 2026-07-10T03:07:51.760Z
Run ID: `kova-2026-07-10T030036Z`
Mode: execution
Platform: linux 6.6.141 (x64) · v24.13.0

## Release Decision

- Verdict: DO_NOT_SHIP
- Coverage: partial
- Blocking / warnings / info: 1 / 26 / 64
- Markdown report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-2026-07-10T030036Z-release.md
- JSON report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-2026-07-10T030036Z-release.json
- Retained gate artifacts: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/release-gates/kova-2026-07-10t030036z

Top findings:
- WARNING gate: Required release gate surface coverage failure-containment was not present in the report.
- WARNING gate: Required release gate surface coverage soak was not present in the report.
- WARNING gate: Required release gate surface coverage workspace-scan was not present in the report.

This is a filtered gate slice. It can reject a release from selected-scenario failures, but it cannot approve the full release gate.

## Summary

- Total scenarios: 18
- PASS: 17
- FAIL: 1

## Release Gate

- Verdict: DO_NOT_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 64
- Blocking: 1
- Warnings: 26
- Info: 64

### Subsystems

- OpenClaw: 1 blocking, 0 warning
  - primary: gateway peak RSS 1013.5 MB exceeded threshold 950 MB
- Kova: 0 blocking, 26 warning
  - primary: Required release gate surface coverage failure-containment was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1013.5 MB exceeded threshold 950 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1013.5 MB exceeded threshold 950 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw

Info cards omitted from Markdown: 64. See JSON report for full gate coverage details.

## Performance

- Repeat: 3
- Groups: 6
- Unstable groups: 6
- Profiled runs: 0
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- fresh-install/fresh: 3 sample(s); timeToHealthReadyMs median 9467ms p95 10088ms max 10157ms; peakRssMb median 853MB p95 865.69MB max 867.1MB; cpuPercentMax median 130% p95 132.7% max 133%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 9302ms p95 10019.3ms max 10099ms
- fresh-install/onboarded-user: 3 sample(s); timeToHealthReadyMs median 7172ms p95 7188.2ms max 7190ms; peakRssMb median 868.5MB p95 873.99MB max 874.6MB; cpuPercentMax median 55.3% p95 60.16% max 60.7%; openclawEventLoopMaxMs median 0ms p95 9.4ms max 10.44ms unstable; timeToListeningMs median 7022ms p95 7030.1ms max 7031ms
- bundled-runtime-deps/missing-plugin-index: 3 sample(s); timeToHealthReadyMs median 7051ms p95 7825ms max 7911ms; peakRssMb median 889.6MB p95 900.94MB max 902.2MB; cpuPercentMax median 55.7% p95 59.3% max 59.7%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 7020ms p95 7707.6ms max 7784ms
- bundled-plugin-startup/fresh: 3 sample(s); timeToHealthReadyMs median 8781ms p95 10259.7ms max 10424ms unstable; peakRssMb median 853.6MB p95 997.51MB max 1013.5MB; cpuPercentMax median 49.5% p95 94.95% max 100% unstable; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 8778ms p95 10126.2ms max 10276ms unstable
- agent-cold-warm-message/mock-openai-provider: 3 sample(s); peakRssMb median 747.4MB p95 773.05MB max 775.9MB; cpuPercentMax median 138.9% p95 139.71% max 139.8%; agentTurnMs median 2501ms p95 2520.8ms max 2523ms; coldAgentTurnMs median 2496ms p95 2520.3ms max 2523ms; warmAgentTurnMs median 2479ms p95 2498.8ms max 2501ms
- gateway-performance/many-bundled-plugins: 3 sample(s); timeToHealthReadyMs median 8054ms p95 8083.7ms max 8087ms; peakRssMb median 875.5MB p95 879.37MB max 879.8MB; cpuPercentMax median 118% p95 191.8% max 200% unstable; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 8017ms p95 8020.6ms max 8021ms

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1013.5 MB; CPU 200%; scenario bundled-plugin-startup/fresh
- gateway-tree: RSS 1013.5 MB; CPU 200%; scenario bundled-plugin-startup/fresh
- command-tree: RSS 775.9 MB; CPU 144.7%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 775.9 MB; CPU 139.8%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 775.9 MB; CPU 139.8%; scenario agent-cold-warm-message/mock-openai-provider
- plugin-cli: RSS 740.6 MB; CPU 143.3%; scenario fresh-install/onboarded-user
- status-cli: RSS 618.5 MB; CPU 142.9%; scenario fresh-install/onboarded-user
- model-cli: RSS 548.9 MB; CPU 144.7%; scenario gateway-performance/many-bundled-plugins

## Target Cleanup

- Runtime: `kova-local-1783652436578`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1783652436578' --json`
- Exit: 0
- Duration: 382ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r1-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 817.7 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 1507.4 MB
- Max CPU: 130%
- Resource samples: 25
- Command tree peak RSS: 689.7 MB
- Gateway peak RSS: 817.7 MB
- Resource by role:
  - gateway: RSS 817.7 MB; CPU 130%
  - gateway-tree: RSS 817.7 MB; CPU 126%
  - command-tree: RSS 689.7 MB; CPU 144.7%
  - plugin-cli: RSS 689.7 MB; CPU 139.4%
  - status-cli: RSS 616.1 MB; CPU 130.3%
  - model-cli: RSS 531.7 MB; CPU 144.7%
- Cold ready: 906 ms
- Warm ready: unknown ms
- Time to listening: 10099 ms
- Time to health ready: 10157 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 59 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 244 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 244ms open 0; plugins.metadata.scan max 61.46ms open 0; config.normalize max 5.43ms open 0
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
- Resource peaks: CPU at 2172ms; RSS at 2076ms
- Diagnostic correlation:
  - CPU peaked at 187.3% around 2172ms
  - RSS peaked at 1507.4 MB around 2076ms
  - Slowest OpenClaw span: gateway.ready 244ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 19964 141% command-tree,model-cli openclaw
- Top RSS process: pid 18838 817.7 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1783652436578' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1783652436578' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 107101ms
  - resource samples: 108
  - peak sampled RSS: 10674.8 MB
  - max sampled CPU: 346.7%
  - role peaks: 
  - top CPU: pid 14568 226% build-tooling,command-tree,runtime-management node /home/runner/_work/openclaw/openclaw/node_modules/.bin/vite build
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/resource-samples/target-setup-1.jsonl

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 151ms
  - resource samples: 2
  - peak sampled RSS: 21.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 18428 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r1-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 906ms
  - resource samples: 2
  - peak sampled RSS: 273.9 MB
  - max sampled CPU: 126%
  - role peaks: 
  - top CPU: pid 18838 126% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 18838
- gateway port: 18789
- RSS: 291.4 MB
- CPU: 130%
- readiness: ready after 41 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 10099ms
- time to health ready: 10157ms
- tcp listening: ok in 1ms
- health: ok (200) in 2ms
- health samples: 3/3 ok
- health latency p95/max: 59ms / 59ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 244ms
- most expensive repeated span: plugins.metadata.scan 4x 109.54ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 15ms, artifacts 0
  - process: PASS, 8ms, artifacts 0
  - readiness: PASS, 10157ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 13ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 98ms
  - resource samples: 2
  - peak sampled RSS: 727.1 MB
  - max sampled CPU: 48.2%
  - role peaks: 
  - top CPU: pid 18838 48.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 18838
- gateway port: 18789
- RSS: 699 MB
- CPU: 47.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 2ms
- tcp listening: ok in 1ms
- health: ok (200) in 51ms
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
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 244ms
- most expensive repeated span: plugins.metadata.scan 5x 133.59ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 13ms, artifacts 0
  - process: PASS, 8ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 12ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' --json`
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 92ms
  - resource samples: 2
  - peak sampled RSS: 709.7 MB
  - max sampled CPU: 48.5%
  - role peaks: 
  - top CPU: pid 18838 48.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' -- status`
  - status: 0
  - duration: 3124ms
  - resource samples: 4
  - peak sampled RSS: 1433.4 MB
  - max sampled CPU: 187.3%
  - role peaks: 
  - top CPU: pid 19326 128% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 18838
- gateway port: 18789
- RSS: 817.6 MB
- CPU: 53.6%
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
- slowest OpenClaw span: gateway.ready 244ms
- most expensive repeated span: plugins.metadata.scan 10x 277.74ms
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
  - diagnostics: PASS, 15ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' -- plugins list`
  - status: 0
  - duration: 2178ms
  - resource samples: 4
  - peak sampled RSS: 1507.4 MB
  - max sampled CPU: 185.3%
  - role peaks: 
  - top CPU: pid 19520 138% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5620ms
  - resource samples: 7
  - peak sampled RSS: 1234.3 MB
  - max sampled CPU: 178.3%
  - role peaks: 
  - top CPU: pid 19663 131% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 18838
- gateway port: 18789
- RSS: 378 MB
- CPU: 37.4%
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
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 244ms
- most expensive repeated span: plugins.metadata.scan 13x 367.44ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 7ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' -- models list`
  - status: 0
  - duration: 2301ms
  - resource samples: 4
  - peak sampled RSS: 909.7 MB
  - max sampled CPU: 179.8%
  - role peaks: 
  - top CPU: pid 19964 141% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 18838
- gateway port: 18789
- RSS: 378 MB
- CPU: 33.5%
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
- slowest OpenClaw span: gateway.ready 244ms
- most expensive repeated span: plugins.metadata.scan 18x 459.45ms
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

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' --tail 200 --raw`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 378 MB
  - max sampled CPU: 32.9%
  - role peaks: 
  - top CPU: pid 18838 32.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 18838
- gateway port: 18789
- RSS: 378 MB
- CPU: 32.8%
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
- slowest OpenClaw span: gateway.ready 244ms
- most expensive repeated span: plugins.metadata.scan 18x 459.45ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 378 MB
  - max sampled CPU: 31.5%
  - role peaks: 
  - top CPU: pid 18838 31.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r1-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 18838
- gateway port: 18789
- RSS: 378 MB
- CPU: 31.5%
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
- slowest OpenClaw span: gateway.ready 244ms
- most expensive repeated span: plugins.metadata.scan 18x 459.45ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 5ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r1-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 2265ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r2-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 853 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 1461 MB
- Max CPU: 112%
- Resource samples: 24
- Command tree peak RSS: 705.9 MB
- Gateway peak RSS: 853 MB
- Resource by role:
  - gateway: RSS 853 MB; CPU 112%
  - gateway-tree: RSS 853 MB; CPU 56.3%
  - command-tree: RSS 705.9 MB; CPU 143.3%
  - plugin-cli: RSS 705.9 MB; CPU 143.3%
  - status-cli: RSS 605.8 MB; CPU 142.9%
  - model-cli: RSS 519.8 MB; CPU 141.8%
- Cold ready: 97 ms
- Warm ready: unknown ms
- Time to listening: 9302 ms
- Time to health ready: 9467 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 542 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 188.45 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 188.45ms open 0; plugins.metadata.scan max 45.19ms open 0; config.normalize max 3.81ms open 0
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
- Resource peaks: CPU at 2090ms; RSS at 2114ms
- Diagnostic correlation:
  - CPU peaked at 193% around 2090ms
  - RSS peaked at 1461 MB around 2114ms
  - Slowest OpenClaw span: gateway.ready 188.45ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 21553 141% command-tree,status-cli openclaw
- Top RSS process: pid 21098 853 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 161ms
  - resource samples: 2
  - peak sampled RSS: 30.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 20664 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r2-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 97ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 20916 0% command-tree,runtime-management ocm start kova-fresh-install-fresh-r2-kova-2026-07-10t030036z --runtime kova-local-1783...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 21098
- gateway port: 18789
- RSS: 86.5 MB
- CPU: 112%
- readiness: ready after 38 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 9302ms
- time to health ready: 9467ms
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
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 188.45ms
- most expensive repeated span: plugins.metadata.scan 4x 97.46ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 15ms, artifacts 0
  - process: PASS, 8ms, artifacts 0
  - readiness: PASS, 9467ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 95ms
  - resource samples: 2
  - peak sampled RSS: 671.5 MB
  - max sampled CPU: 45.1%
  - role peaks: 
  - top CPU: pid 21098 45.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 21098
- gateway port: 18789
- RSS: 647.5 MB
- CPU: 44.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 3ms
- tcp listening: ok in 0ms
- health: ok (200) in 542ms
- health samples: 3/3 ok
- health latency p95/max: 542ms / 542ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 188.45ms
- most expensive repeated span: plugins.metadata.scan 5x 111.56ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 17ms, artifacts 0
  - process: PASS, 9ms, artifacts 0
  - readiness: PASS, 3ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 14ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' --json`
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 118ms
  - resource samples: 2
  - peak sampled RSS: 836.9 MB
  - max sampled CPU: 55.9%
  - role peaks: 
  - top CPU: pid 21098 55.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' -- status`
  - status: 0
  - duration: 2474ms
  - resource samples: 4
  - peak sampled RSS: 1448 MB
  - max sampled CPU: 193%
  - role peaks: 
  - top CPU: pid 21553 141% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 21098
- gateway port: 18789
- RSS: 842.4 MB
- CPU: 48.8%
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
- OpenClaw timeline events: 211
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 188.45ms
- most expensive repeated span: plugins.metadata.scan 10x 219.33ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 14ms, artifacts 0
  - process: PASS, 9ms, artifacts 0
  - readiness: PASS, 3ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' -- plugins list`
  - status: 0
  - duration: 2384ms
  - resource samples: 4
  - peak sampled RSS: 1461 MB
  - max sampled CPU: 185.2%
  - role peaks: 
  - top CPU: pid 21734 141% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5462ms
  - resource samples: 7
  - peak sampled RSS: 1289.4 MB
  - max sampled CPU: 181.1%
  - role peaks: 
  - top CPU: pid 21878 139% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 21098
- gateway port: 18789
- RSS: 392.6 MB
- CPU: 33.4%
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
- slowest OpenClaw span: gateway.ready 188.45ms
- most expensive repeated span: plugins.metadata.scan 13x 287.28ms
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

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' -- models list`
  - status: 0
  - duration: 1130ms
  - resource samples: 3
  - peak sampled RSS: 912.4 MB
  - max sampled CPU: 173.1%
  - role peaks: 
  - top CPU: pid 22173 139% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 21098
- gateway port: 18789
- RSS: 392.6 MB
- CPU: 31.2%
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
- slowest OpenClaw span: gateway.ready 188.45ms
- most expensive repeated span: plugins.metadata.scan 18x 372.23ms
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

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' --tail 200 --raw`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 392.6 MB
  - max sampled CPU: 30.5%
  - role peaks: 
  - top CPU: pid 21098 30.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 21098
- gateway port: 18789
- RSS: 392.6 MB
- CPU: 30.4%
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
- slowest OpenClaw span: gateway.ready 188.45ms
- most expensive repeated span: plugins.metadata.scan 18x 372.23ms
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

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 392.6 MB
  - max sampled CPU: 29.2%
  - role peaks: 
  - top CPU: pid 21098 29.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r2-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 21098
- gateway port: 18789
- RSS: 392.6 MB
- CPU: 29.1%
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
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 188.45ms
- most expensive repeated span: plugins.metadata.scan 18x 372.23ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r2-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 1416ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-fresh-r3-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 867.1 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 1572.4 MB
- Max CPU: 133%
- Resource samples: 22
- Command tree peak RSS: 705.5 MB
- Gateway peak RSS: 867.1 MB
- Resource by role:
  - gateway: RSS 867.1 MB; CPU 133%
  - gateway-tree: RSS 867.1 MB; CPU 133%
  - command-tree: RSS 705.5 MB; CPU 141.8%
  - plugin-cli: RSS 705.5 MB; CPU 141.8%
  - status-cli: RSS 566.3 MB; CPU 133.7%
  - model-cli: RSS 476.9 MB; CPU 135.8%
- Cold ready: 69 ms
- Warm ready: unknown ms
- Time to listening: 7030 ms
- Time to health ready: 7036 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
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
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 175.98 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 175.98ms open 0; plugins.metadata.scan max 44.46ms open 0; config.normalize max 3.51ms open 0
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
- Resource peaks: CPU at 1124ms; RSS at 4061ms
- Diagnostic correlation:
  - CPU peaked at 191.5% around 1124ms
  - RSS peaked at 1572.4 MB around 4061ms
  - Slowest OpenClaw span: gateway.ready 175.98ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 23827 140% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 23187 867.1 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 140ms
  - resource samples: 2
  - peak sampled RSS: 23.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 22869 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-fresh-r3-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 69ms
  - resource samples: 2
  - peak sampled RSS: 70 MB
  - max sampled CPU: 133%
  - role peaks: 
  - top CPU: pid 23187 133% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 23187
- gateway port: 18789
- RSS: 78.4 MB
- CPU: 80%
- readiness: ready after 29 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 7030ms
- time to health ready: 7036ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 3/3 ok
- health latency p95/max: 34ms / 34ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 175.98ms
- most expensive repeated span: plugins.metadata.scan 4x 80.1ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 7036ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 805.7 MB
  - max sampled CPU: 49.6%
  - role peaks: 
  - top CPU: pid 23187 49.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 23187
- gateway port: 18789
- RSS: 776.1 MB
- CPU: 49.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 38ms
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
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 175.98ms
- most expensive repeated span: plugins.metadata.scan 5x 95.5ms
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

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' --json`
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 81ms
  - resource samples: 2
  - peak sampled RSS: 788.1 MB
  - max sampled CPU: 49.3%
  - role peaks: 
  - top CPU: pid 23187 49.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' -- status`
  - status: 0
  - duration: 1964ms
  - resource samples: 3
  - peak sampled RSS: 1433.1 MB
  - max sampled CPU: 191.5%
  - role peaks: 
  - top CPU: pid 23604 131% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 23187
- gateway port: 18789
- RSS: 867.1 MB
- CPU: 53.3%
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
- slowest OpenClaw span: gateway.ready 175.98ms
- most expensive repeated span: plugins.metadata.scan 10x 180.31ms
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

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' -- plugins list`
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' -- plugins list`
  - status: 0
  - duration: 1616ms
  - resource samples: 3
  - peak sampled RSS: 1393.2 MB
  - max sampled CPU: 188%
  - role peaks: 
  - top CPU: pid 23827 140% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5748ms
  - resource samples: 7
  - peak sampled RSS: 1572.4 MB
  - max sampled CPU: 177.7%
  - role peaks: 
  - top CPU: pid 23969 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 23187
- gateway port: 18789
- RSS: 389.5 MB
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
- OpenClaw timeline events: 220
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 175.98ms
- most expensive repeated span: plugins.metadata.scan 13x 237.84ms
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
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' -- models list`
  - status: 0
  - duration: 1100ms
  - resource samples: 3
  - peak sampled RSS: 866.5 MB
  - max sampled CPU: 165.9%
  - role peaks: 
  - top CPU: pid 24263 133% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 23187
- gateway port: 18789
- RSS: 389.6 MB
- CPU: 30%
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
- slowest OpenClaw span: gateway.ready 175.98ms
- most expensive repeated span: plugins.metadata.scan 18x 322.69ms
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

- `ocm logs 'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' --tail 200 --raw`
  - status: 0
  - duration: 47ms
  - resource samples: 2
  - peak sampled RSS: 389.6 MB
  - max sampled CPU: 29.2%
  - role peaks: 
  - top CPU: pid 23187 29.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 23187
- gateway port: 18789
- RSS: 389.6 MB
- CPU: 29.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 0ms
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
- slowest OpenClaw span: gateway.ready 175.98ms
- most expensive repeated span: plugins.metadata.scan 18x 322.69ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 0ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 389.6 MB
  - max sampled CPU: 27.8%
  - role peaks: 
  - top CPU: pid 23187 27.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-fresh-r3-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 23187
- gateway port: 18789
- RSS: 389.6 MB
- CPU: 27.7%
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
- slowest OpenClaw span: gateway.ready 175.98ms
- most expensive repeated span: plugins.metadata.scan 18x 322.69ms
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
- cleanup command: `ocm env destroy 'kova-fresh-install-fresh-r3-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 1257ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 874.6 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 1556.9 MB
- Max CPU: 60.7%
- Resource samples: 22
- Command tree peak RSS: 682.8 MB
- Gateway peak RSS: 874.6 MB
- Resource by role:
  - gateway: RSS 874.6 MB; CPU 60.7%
  - gateway-tree: RSS 874.6 MB; CPU 60.7%
  - command-tree: RSS 682.8 MB; CPU 138.9%
  - plugin-cli: RSS 682.8 MB; CPU 138.9%
  - status-cli: RSS 501 MB; CPU 135.9%
  - model-cli: RSS 62.6 MB; CPU 134.8%
- Cold ready: 53 ms
- Warm ready: unknown ms
- Time to listening: 7031 ms
- Time to health ready: 7172 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 28
- Health p95: 34 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 176.29 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 176.29ms open 0; plugins.metadata.scan max 34.11ms open 0; config.normalize max 4.12ms open 0
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
- Resource peaks: CPU at 1056ms; RSS at 3069ms
- Diagnostic correlation:
  - CPU peaked at 189.8% around 1056ms
  - RSS peaked at 1556.9 MB around 3069ms
  - Slowest OpenClaw span: gateway.ready 176.29ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 26176 137% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 25460 874.6 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 137ms
  - resource samples: 2
  - peak sampled RSS: 28.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 24954 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 25206 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 29 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 7031ms
- time to health ready: 7172ms
- tcp listening: ok in 0ms
- health: ok (200) in 141ms
- health samples: 1/29 ok
- health latency p95/max: 1ms / 141ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 176.29ms
- most expensive repeated span: plugins.metadata.scan 4x 72.7ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: PASS, 7172ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 651.5 MB
  - max sampled CPU: 50.6%
  - role peaks: 
  - top CPU: pid 25460 50.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 25460
- gateway port: 18789
- RSS: 621.8 MB
- CPU: 50.1%
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
- slowest OpenClaw span: gateway.ready 176.29ms
- most expensive repeated span: plugins.metadata.scan 5x 84.47ms
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
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 79ms
  - resource samples: 2
  - peak sampled RSS: 662.6 MB
  - max sampled CPU: 50.7%
  - role peaks: 
  - top CPU: pid 25460 50.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 25460
- gateway port: 18789
- RSS: 664.9 MB
- CPU: 50.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 1ms
- time to health ready: 358ms
- tcp listening: ok in 1ms
- health: ok (200) in 0ms
- health samples: 3/3 ok
- health latency p95/max: 34ms / 34ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 176.29ms
- most expensive repeated span: plugins.metadata.scan 7x 130.63ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 358ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 879.1 MB
  - max sampled CPU: 60.7%
  - role peaks: 
  - top CPU: pid 25460 60.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' -- status`
  - status: 0
  - duration: 1830ms
  - resource samples: 3
  - peak sampled RSS: 1375.2 MB
  - max sampled CPU: 189.8%
  - role peaks: 
  - top CPU: pid 26019 134% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 25460
- gateway port: 18789
- RSS: 874.5 MB
- CPU: 50.3%
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
- slowest OpenClaw span: gateway.ready 176.29ms
- most expensive repeated span: plugins.metadata.scan 10x 171.8ms
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

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' -- plugins list`
  - status: 0
  - duration: 1616ms
  - resource samples: 3
  - peak sampled RSS: 1393.5 MB
  - max sampled CPU: 182.7%
  - role peaks: 
  - top CPU: pid 26176 137% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5441ms
  - resource samples: 7
  - peak sampled RSS: 1556.9 MB
  - max sampled CPU: 177.5%
  - role peaks: 
  - top CPU: pid 26307 136% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 25460
- gateway port: 18789
- RSS: 407.5 MB
- CPU: 30.6%
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
- slowest OpenClaw span: gateway.ready 176.29ms
- most expensive repeated span: plugins.metadata.scan 13x 235.21ms
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

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' -- models list`
  - status: 0
  - duration: 1068ms
  - resource samples: 3
  - peak sampled RSS: 470.1 MB
  - max sampled CPU: 163.1%
  - role peaks: 
  - top CPU: pid 26591 133% command-tree,model-cli [openclaw] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 25460
- gateway port: 18789
- RSS: 407.5 MB
- CPU: 28.2%
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
- slowest OpenClaw span: gateway.ready 176.29ms
- most expensive repeated span: plugins.metadata.scan 18x 315.09ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' --tail 200 --raw`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 407.5 MB
  - max sampled CPU: 27.5%
  - role peaks: 
  - top CPU: pid 25460 27.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 25460
- gateway port: 18789
- RSS: 407.5 MB
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
- OpenClaw timeline events: 230
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 176.29ms
- most expensive repeated span: plugins.metadata.scan 18x 315.09ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 407.5 MB
  - max sampled CPU: 26.1%
  - role peaks: 
  - top CPU: pid 25460 26.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 25460
- gateway port: 18789
- RSS: 407.5 MB
- CPU: 26%
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
- slowest OpenClaw span: gateway.ready 176.29ms
- most expensive repeated span: plugins.metadata.scan 18x 315.09ms
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
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r1-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 1274ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 868.5 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 1595.3 MB
- Max CPU: 51.7%
- Resource samples: 22
- Command tree peak RSS: 727.3 MB
- Gateway peak RSS: 868.5 MB
- Resource by role:
  - gateway: RSS 868.5 MB; CPU 51.7%
  - gateway-tree: RSS 868.5 MB; CPU 51.7%
  - command-tree: RSS 727.3 MB; CPU 139.8%
  - plugin-cli: RSS 727.3 MB; CPU 138.8%
  - status-cli: RSS 578.4 MB; CPU 139.8%
  - model-cli: RSS 529.2 MB; CPU 139.8%
- Cold ready: 60 ms
- Warm ready: unknown ms
- Time to listening: 7022 ms
- Time to health ready: 7190 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 33 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 147.17 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 147.17ms open 0; plugins.metadata.scan max 32.58ms open 0; config.normalize max 3.06ms open 0
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
- Resource peaks: CPU at 1067ms; RSS at 3069ms
- Diagnostic correlation:
  - CPU peaked at 185.9% around 1067ms
  - RSS peaked at 1595.3 MB around 3069ms
  - Slowest OpenClaw span: gateway.ready 147.17ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 28348 137% command-tree,status-cli openclaw
- Top RSS process: pid 27803 868.5 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 131ms
  - resource samples: 2
  - peak sampled RSS: 21 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 27298 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 27550 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 27803
- gateway port: 18789
- RSS: 33.1 MB
- CPU: 0%
- readiness: ready after 29 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 7022ms
- time to health ready: 7190ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
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
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 147.17ms
- most expensive repeated span: plugins.metadata.scan 4x 68.38ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 6ms, artifacts 0
  - readiness: PASS, 7190ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 654.5 MB
  - max sampled CPU: 41.6%
  - role peaks: 
  - top CPU: pid 27803 41.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 27803
- gateway port: 18789
- RSS: 626.4 MB
- CPU: 41.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 13ms
- health samples: 3/3 ok
- health latency p95/max: 13ms / 13ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 147.17ms
- most expensive repeated span: plugins.metadata.scan 5x 79.74ms
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
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 665.7 MB
  - max sampled CPU: 41.3%
  - role peaks: 
  - top CPU: pid 27803 41.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 27803
- gateway port: 18789
- RSS: 666 MB
- CPU: 41.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 362ms
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
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 147.17ms
- most expensive repeated span: plugins.metadata.scan 7x 118.99ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 362ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 873.4 MB
  - max sampled CPU: 51.7%
  - role peaks: 
  - top CPU: pid 27803 51.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' -- status`
  - status: 0
  - duration: 1791ms
  - resource samples: 3
  - peak sampled RSS: 1446.9 MB
  - max sampled CPU: 185.9%
  - role peaks: 
  - top CPU: pid 28348 137% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 27803
- gateway port: 18789
- RSS: 868.5 MB
- CPU: 44.8%
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
- slowest OpenClaw span: gateway.ready 147.17ms
- most expensive repeated span: plugins.metadata.scan 10x 164.64ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Plugin Baseline

Verify OpenClaw can inspect installed/bundled plugin state without missing runtime dependency errors.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' -- plugins list`
  - status: 0
  - duration: 1555ms
  - resource samples: 3
  - peak sampled RSS: 1395.1 MB
  - max sampled CPU: 178.1%
  - role peaks: 
  - top CPU: pid 28501 137% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5451ms
  - resource samples: 7
  - peak sampled RSS: 1595.3 MB
  - max sampled CPU: 172.8%
  - role peaks: 
  - top CPU: pid 28640 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 27803
- gateway port: 18789
- RSS: 698.3 MB
- CPU: 27%
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
- slowest OpenClaw span: gateway.ready 147.17ms
- most expensive repeated span: plugins.metadata.scan 13x 223.51ms
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

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' -- models list`
  - status: 0
  - duration: 1104ms
  - resource samples: 3
  - peak sampled RSS: 910.3 MB
  - max sampled CPU: 166.7%
  - role peaks: 
  - top CPU: pid 28936 137% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 27803
- gateway port: 18789
- RSS: 381.1 MB
- CPU: 26.8%
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
- slowest OpenClaw span: gateway.ready 147.17ms
- most expensive repeated span: plugins.metadata.scan 18x 308.99ms
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

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' --tail 200 --raw`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 381.2 MB
  - max sampled CPU: 26.2%
  - role peaks: 
  - top CPU: pid 27803 26.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 27803
- gateway port: 18789
- RSS: 381.2 MB
- CPU: 26.1%
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
- slowest OpenClaw span: gateway.ready 147.17ms
- most expensive repeated span: plugins.metadata.scan 18x 308.99ms
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

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 381.3 MB
  - max sampled CPU: 24.9%
  - role peaks: 
  - top CPU: pid 27803 24.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 27803
- gateway port: 18789
- RSS: 381.3 MB
- CPU: 24.8%
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
- slowest OpenClaw span: gateway.ready 147.17ms
- most expensive repeated span: plugins.metadata.scan 18x 308.99ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r2-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 1156ms

## Fresh OpenClaw Install Baseline

- Scenario: `fresh-install`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `onboarded-user` (Onboarded OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Create a disposable fresh OpenClaw home from the target runtime, start the gateway, and verify basic user-facing commands without onboarding or manual setup.
- Gateway RSS: 807.6 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 1535.6 MB
- Max CPU: 55.3%
- Resource samples: 22
- Command tree peak RSS: 740.6 MB
- Gateway peak RSS: 807.6 MB
- Resource by role:
  - gateway: RSS 807.6 MB; CPU 55.3%
  - gateway-tree: RSS 807.6 MB; CPU 55.3%
  - command-tree: RSS 740.6 MB; CPU 137.8%
  - plugin-cli: RSS 740.6 MB; CPU 137.8%
  - status-cli: RSS 618.5 MB; CPU 137.8%
  - model-cli: RSS 503.4 MB; CPU 134.9%
- Cold ready: 56 ms
- Warm ready: unknown ms
- Time to listening: 7020 ms
- Time to health ready: 7055 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 32 ms
- Readiness failures: 0
- Gateway restarts: 1
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (230 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 167.23 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 167.23ms open 0; plugins.metadata.scan max 41.34ms open 0; config.normalize max 3.07ms open 0
- OpenClaw event-loop max: 10.44 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 10.44 ms
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
- Resource peaks: CPU at 1057ms; RSS at 2063ms
- Diagnostic correlation:
  - CPU peaked at 187.1% around 1057ms
  - RSS peaked at 1535.6 MB around 2063ms
  - Slowest OpenClaw span: gateway.ready 167.23ms
  - Max structured event-loop delay: 10.44ms
- Top CPU process: pid 30704 135% command-tree,status-cli openclaw
- Top RSS process: pid 30148 807.6 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 134ms
  - resource samples: 2
  - peak sampled RSS: 25.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 29642 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Fresh Env

Create a disposable OpenClaw environment with the selected runtime and minimum local config.

Commands:

- `ocm start 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`

Evidence to capture:

- OCM start JSON
- env name
- runtime binding
- gateway port

Results:

- `ocm start 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 29894 0% command-tree,runtime-management ocm start kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/resource-samples/provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 30148
- gateway port: 18789
- RSS: 31.3 MB
- CPU: 0%
- readiness: ready after 29 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 7020ms
- time to health ready: 7055ms
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
- slowest OpenClaw span: gateway.ready 167.23ms
- most expensive repeated span: plugins.metadata.scan 4x 76.2ms
- OpenClaw event-loop max: 10.44ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 7055ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 726 MB
  - max sampled CPU: 46.1%
  - role peaks: 
  - top CPU: pid 30148 46.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 30148
- gateway port: 18789
- RSS: 699.6 MB
- CPU: 45.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
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
- slowest OpenClaw span: gateway.ready 167.23ms
- most expensive repeated span: plugins.metadata.scan 5x 87.86ms
- OpenClaw event-loop max: 10.44ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'onboarded-user' setup after scenario phase 'provision'.

Commands:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`

Evidence to capture:

- onboarding marker files exist
- baseline user folders exist

Results:

- `ocm env exec 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const dirs=["plugins",".openclaw/plugins","sessions","workspace","config"]; for (const dir of dirs) fs.mkdirSync(path.join(home,dir),{recursive:true}); const state={schemaVersion:"kova.fixture.onboarding.v1",onboarded:true,createdAt:new Date().toISOString()}; for (const rel of ["onboarding.json",".openclaw/onboarding.json","config/onboarding.json"]) fs.writeFileSync(path.join(home,rel),JSON.stringify(state,null,2));'`
  - status: 0
  - duration: 87ms
  - resource samples: 2
  - peak sampled RSS: 733.1 MB
  - max sampled CPU: 46.2%
  - role peaks: 
  - top CPU: pid 30148 46.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: running
- child pid: 30148
- gateway port: 18789
- RSS: 720.5 MB
- CPU: 46.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 332ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
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
- slowest OpenClaw span: gateway.ready 167.23ms
- most expensive repeated span: plugins.metadata.scan 7x 122.27ms
- OpenClaw event-loop max: 10.44ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 332ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Gateway Readiness

Confirm the gateway reaches a usable running state within the threshold.

Commands:

- `ocm service status 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' --json`
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' -- status`

Evidence to capture:

- ready time
- gateway state
- gateway PID
- health/status result

Results:

- `ocm service status 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 812.2 MB
  - max sampled CPU: 55.3%
  - role peaks: 
  - top CPU: pid 30148 55.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/resource-samples/readiness-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' -- status`
  - status: 0
  - duration: 1781ms
  - resource samples: 3
  - peak sampled RSS: 1425.8 MB
  - max sampled CPU: 187.1%
  - role peaks: 
  - top CPU: pid 30704 135% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/resource-samples/readiness-2.jsonl

Metrics:

- gateway state: running
- child pid: 30148
- gateway port: 18789
- RSS: 807.5 MB
- CPU: 46.1%
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
- slowest OpenClaw span: gateway.ready 167.23ms
- most expensive repeated span: plugins.metadata.scan 10x 165.26ms
- OpenClaw event-loop max: 10.44ms
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

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' -- plugins list`
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' -- plugins update --all --dry-run`

Evidence to capture:

- plugins list output
- plugin update dry-run output
- missing dependency log scan

Results:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' -- plugins list`
  - status: 0
  - duration: 1655ms
  - resource samples: 3
  - peak sampled RSS: 1363.8 MB
  - max sampled CPU: 178.3%
  - role peaks: 
  - top CPU: pid 30855 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/resource-samples/plugins-1.jsonl
- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' -- plugins update --all --dry-run`
  - status: 0
  - duration: 5775ms
  - resource samples: 7
  - peak sampled RSS: 1535.6 MB
  - max sampled CPU: 172.5%
  - role peaks: 
  - top CPU: pid 31002 135% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/resource-samples/plugins-2.jsonl

Metrics:

- gateway state: running
- child pid: 30148
- gateway port: 18789
- RSS: 400.4 MB
- CPU: 28.2%
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
- slowest OpenClaw span: gateway.ready 167.23ms
- most expensive repeated span: plugins.metadata.scan 13x 223.36ms
- OpenClaw event-loop max: 10.44ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Model Baseline

Verify model discovery does not stall the gateway or hang indefinitely.

Commands:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' -- models list`

Evidence to capture:

- models list duration
- timeout behavior
- gateway health after model list

Results:

- `ocm @'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' -- models list`
  - status: 0
  - duration: 1090ms
  - resource samples: 3
  - peak sampled RSS: 903.9 MB
  - max sampled CPU: 160.9%
  - role peaks: 
  - top CPU: pid 31274 133% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/resource-samples/models-1.jsonl

Metrics:

- gateway state: running
- child pid: 30148
- gateway port: 18789
- RSS: 400.5 MB
- CPU: 26%
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
- slowest OpenClaw span: gateway.ready 167.23ms
- most expensive repeated span: plugins.metadata.scan 18x 307.02ms
- OpenClaw event-loop max: 10.44ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Startup Logs

Capture startup logs for dependency staging, plugin loading, stalls, and warnings.

Commands:

- `ocm logs 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' --tail 200 --raw`

Evidence to capture:

- startup logs
- missing dependency errors
- plugin metadata scan warnings

Results:

- `ocm logs 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' --tail 200 --raw`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 400.6 MB
  - max sampled CPU: 25.3%
  - role peaks: 
  - top CPU: pid 30148 25.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/resource-samples/logs-1.jsonl

Metrics:

- gateway state: running
- child pid: 30148
- gateway port: 18789
- RSS: 400.6 MB
- CPU: 25.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 0ms
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
- slowest OpenClaw span: gateway.ready 167.23ms
- most expensive repeated span: plugins.metadata.scan 18x 307.02ms
- OpenClaw event-loop max: 10.44ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 0ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 400.7 MB
  - max sampled CPU: 24.1%
  - role peaks: 
  - top CPU: pid 30148 24.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 30148
- gateway port: 18789
- RSS: 400.7 MB
- CPU: 24%
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
- slowest OpenClaw span: gateway.ready 167.23ms
- most expensive repeated span: plugins.metadata.scan 18x 307.02ms
- OpenClaw event-loop max: 10.44ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 13ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-fresh-install-onboarded-user-r3-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 1274ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 889.6 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 894.6 MB
- Max CPU: 55.7%
- Resource samples: 6
- Command tree peak RSS: 5 MB
- Gateway peak RSS: 889.6 MB
- Resource by role:
  - gateway: RSS 889.6 MB; CPU 55.7%
  - gateway-tree: RSS 889.6 MB; CPU 55.7%
  - command-tree: RSS 5 MB; CPU 0%
  - status-cli: RSS 5 MB; CPU 0%
  - uncategorized: RSS 5 MB; CPU 0%
  - runtime-management: RSS 4.7 MB; CPU 0%
- Cold ready: 56 ms
- Warm ready: 55 ms
- Time to listening: 7019 ms
- Time to health ready: 7051 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 28
- Health p95: 23 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (205 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 144.2 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 144.2ms open 0; plugins.metadata.scan max 34.51ms open 0; config.normalize max 3.24ms open 0
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
  - CPU peaked at 55.7% around 54ms
  - RSS peaked at 894.6 MB around 54ms
  - Slowest OpenClaw span: gateway.ready 144.2ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 32499 55.7% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 32499 889.6 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 135ms
  - resource samples: 2
  - peak sampled RSS: 21.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 31993 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 1ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 32245 0% command-tree,runtime-management ocm start kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 29 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 7019ms
- time to health ready: 7051ms
- tcp listening: ok in 1ms
- health: ok (200) in 32ms
- health samples: 1/29 ok
- health latency p95/max: 1ms / 32ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 144.2ms
- most expensive repeated span: plugins.metadata.scan 4x 67.48ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: PASS, 7051ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 675.5 MB
  - max sampled CPU: 45.1%
  - role peaks: 
  - top CPU: pid 32499 45.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 32499
- gateway port: 18789
- RSS: 646.9 MB
- CPU: 44.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 1ms
- tcp listening: ok in 1ms
- health: ok (200) in 19ms
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
- OpenClaw timeline events: 201
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 144.2ms
- most expensive repeated span: plugins.metadata.scan 5x 79.19ms
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
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'missing-plugin-index' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 88ms
  - resource samples: 2
  - peak sampled RSS: 694.7 MB
  - max sampled CPU: 45.6%
  - role peaks: 
  - top CPU: pid 32499 45.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 32499
- gateway port: 18789
- RSS: 704.6 MB
- CPU: 46.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 0ms
- time to health ready: 331ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
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
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 144.2ms
- most expensive repeated span: plugins.metadata.scan 7x 120.51ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 12ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 331ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z'`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 894.6 MB
  - max sampled CPU: 55.7%
  - role peaks: 
  - top CPU: pid 32499 55.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 894.6 MB
  - max sampled CPU: 55.2%
  - role peaks: 
  - top CPU: pid 32499 55.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 32499
- gateway port: 18789
- RSS: 889.6 MB
- CPU: 54.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 20000ms / 60000ms
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
- slowest OpenClaw span: gateway.ready 144.2ms
- most expensive repeated span: plugins.metadata.scan 7x 120.51ms
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

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 889.6 MB
  - max sampled CPU: 49.1%
  - role peaks: 
  - top CPU: pid 32499 49.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 32499
- gateway port: 18789
- RSS: 889.6 MB
- CPU: 48.7%
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
- slowest OpenClaw span: gateway.ready 144.2ms
- most expensive repeated span: plugins.metadata.scan 7x 120.51ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r1-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 1072ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 870.3 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 875.3 MB
- Max CPU: 59.7%
- Resource samples: 6
- Command tree peak RSS: 5 MB
- Gateway peak RSS: 870.3 MB
- Resource by role:
  - gateway: RSS 870.3 MB; CPU 59.7%
  - gateway-tree: RSS 870.3 MB; CPU 59.7%
  - command-tree: RSS 5 MB; CPU 0%
  - status-cli: RSS 5 MB; CPU 0%
  - uncategorized: RSS 5 MB; CPU 0%
  - runtime-management: RSS 4.7 MB; CPU 0%
- Cold ready: 56 ms
- Warm ready: 53 ms
- Time to listening: 7020 ms
- Time to health ready: 7022 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 28
- Health p95: 16 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (205 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 168.77 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 168.77ms open 0; plugins.metadata.scan max 41.11ms open 0; config.normalize max 3.07ms open 0
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
  - CPU peaked at 59.7% around 52ms
  - RSS peaked at 875.3 MB around 52ms
  - Slowest OpenClaw span: gateway.ready 168.77ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 34385 59.7% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 34385 870.3 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 136ms
  - resource samples: 2
  - peak sampled RSS: 21 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 33879 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 34131 0% command-tree,runtime-management ocm start kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 29 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 7020ms
- time to health ready: 7022ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 1/29 ok
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
- slowest OpenClaw span: gateway.ready 168.77ms
- most expensive repeated span: plugins.metadata.scan 4x 73.31ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: PASS, 7022ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 813.1 MB
  - max sampled CPU: 50.7%
  - role peaks: 
  - top CPU: pid 34385 50.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 34385
- gateway port: 18789
- RSS: 782.9 MB
- CPU: 50.2%
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
- slowest OpenClaw span: gateway.ready 168.77ms
- most expensive repeated span: plugins.metadata.scan 5x 86.18ms
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

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 72ms
  - resource samples: 2
  - peak sampled RSS: 796 MB
  - max sampled CPU: 50.3%
  - role peaks: 
  - top CPU: pid 34385 50.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 34385
- gateway port: 18789
- RSS: 791.7 MB
- CPU: 50.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 0ms
- time to health ready: 333ms
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
- slowest OpenClaw span: gateway.ready 168.77ms
- most expensive repeated span: plugins.metadata.scan 7x 122.05ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 333ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z'`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 875.3 MB
  - max sampled CPU: 59.7%
  - role peaks: 
  - top CPU: pid 34385 59.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 875.3 MB
  - max sampled CPU: 59.3%
  - role peaks: 
  - top CPU: pid 34385 59.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 34385
- gateway port: 18789
- RSS: 870.3 MB
- CPU: 58.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 20000ms / 60000ms
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
- slowest OpenClaw span: gateway.ready 168.77ms
- most expensive repeated span: plugins.metadata.scan 7x 122.05ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 870.4 MB
  - max sampled CPU: 52.7%
  - role peaks: 
  - top CPU: pid 34385 52.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 34385
- gateway port: 18789
- RSS: 870.4 MB
- CPU: 52.3%
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
- slowest OpenClaw span: gateway.ready 168.77ms
- most expensive repeated span: plugins.metadata.scan 7x 122.05ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 5ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r2-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 1131ms

## Bundled Runtime Dependency Integrity

- Scenario: `bundled-runtime-deps`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `missing-plugin-index` (Missing Plugin Install Index)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Verify bundled plugin runtime dependencies stage correctly, remain reusable on warm starts, and do not produce missing dependency errors.
- Gateway RSS: 902.2 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 907.4 MB
- Max CPU: 51.6%
- Resource samples: 6
- Command tree peak RSS: 5.2 MB
- Gateway peak RSS: 902.2 MB
- Resource by role:
  - gateway: RSS 902.2 MB; CPU 51.6%
  - gateway-tree: RSS 902.2 MB; CPU 51.6%
  - command-tree: RSS 5.2 MB; CPU 0%
  - uncategorized: RSS 5.2 MB; CPU 0%
  - status-cli: RSS 5 MB; CPU 0%
  - runtime-management: RSS 4.7 MB; CPU 0%
- Cold ready: 57 ms
- Warm ready: 53 ms
- Time to listening: 7784 ms
- Time to health ready: 7911 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 31
- Health p95: 25 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (205 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 144.41 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 144.41ms open 0; plugins.metadata.scan max 35.59ms open 0; config.normalize max 3.13ms open 0
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
  - CPU peaked at 51.6% around 52ms
  - RSS peaked at 907.4 MB around 52ms
  - Slowest OpenClaw span: gateway.ready 144.41ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 35986 51.6% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 35986 902.2 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 136ms
  - resource samples: 2
  - peak sampled RSS: 20.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 35480 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Runtime Dependency Start

Start a fresh env and capture bundled runtime dependency staging logs.

Commands:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`

Evidence to capture:

- dependency staging duration
- installed dependency list
- missing dependency errors

Results:

- `ocm start 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 35732 0% command-tree,runtime-management ocm start kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/resource-samples/cold-start-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 32 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 7784ms
- time to health ready: 7911ms
- tcp listening: ok in 0ms
- health: ok (200) in 127ms
- health samples: 1/32 ok
- health latency p95/max: 12ms / 127ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 144.41ms
- most expensive repeated span: plugins.metadata.scan 4x 71.22ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: PASS, 7911ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 688.6 MB
  - max sampled CPU: 41.2%
  - role peaks: 
  - top CPU: pid 35986 41.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 35986
- gateway port: 18789
- RSS: 659.2 MB
- CPU: 40.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 13ms
- health samples: 3/3 ok
- health latency p95/max: 13ms / 13ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 144.41ms
- most expensive repeated span: plugins.metadata.scan 5x 83.16ms
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
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'missing-plugin-index' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`

Evidence to capture:

- removed plugin install index files

Results:

- `ocm env exec 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z' -- sh -lc 'rm -f "$OPENCLAW_HOME/.openclaw/plugins/installs.json" "$OPENCLAW_HOME/plugins/installs.json"'`
  - status: 0
  - duration: 93ms
  - resource samples: 2
  - peak sampled RSS: 709.7 MB
  - max sampled CPU: 42.2%
  - role peaks: 
  - top CPU: pid 35986 42.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 35986
- gateway port: 18789
- RSS: 715.3 MB
- CPU: 42.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 45000ms / 135000ms
- time to listening: 0ms
- time to health ready: 329ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
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
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 144.41ms
- most expensive repeated span: plugins.metadata.scan 7x 122.12ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 329ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Runtime Dependency Restart

Restart with staged dependencies already present and verify no repeated expensive staging or missing dependency errors.

Commands:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z'`
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z' --json`

Evidence to capture:

- warm ready time
- dependency staging reuse
- missing dependency errors

Results:

- `ocm service restart 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z'`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 907.4 MB
  - max sampled CPU: 51.6%
  - role peaks: 
  - top CPU: pid 35986 51.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 907.2 MB
  - max sampled CPU: 51.3%
  - role peaks: 
  - top CPU: pid 35986 51.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 35986
- gateway port: 18789
- RSS: 902.2 MB
- CPU: 51%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 20000ms / 60000ms
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
- slowest OpenClaw span: gateway.ready 144.41ms
- most expensive repeated span: plugins.metadata.scan 7x 122.12ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 5ms, artifacts 0
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

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 902.3 MB
  - max sampled CPU: 46%
  - role peaks: 
  - top CPU: pid 35986 46% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 35986
- gateway port: 18789
- RSS: 902.3 MB
- CPU: 45.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 0ms
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
- slowest OpenClaw span: gateway.ready 144.41ms
- most expensive repeated span: plugins.metadata.scan 7x 122.12ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 0ms, artifacts 0
  - logs: PASS, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-runtime-deps-missing-plugin-index-r3-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 1237ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 853.6 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 1430.7 MB
- Max CPU: 100%
- Resource samples: 16
- Command tree peak RSS: 577.2 MB
- Gateway peak RSS: 853.6 MB
- Resource by role:
  - gateway: RSS 853.6 MB; CPU 100%
  - gateway-tree: RSS 853.6 MB; CPU 43.6%
  - command-tree: RSS 577.2 MB; CPU 137.9%
  - plugin-cli: RSS 577.2 MB; CPU 137.9%
  - status-cli: RSS 5.1 MB; CPU 0%
  - uncategorized: RSS 5 MB; CPU 0%
- Cold ready: 56 ms
- Warm ready: 55 ms
- Time to listening: 8778 ms
- Time to health ready: 8781 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 24 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (211 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 144.48 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 144.48ms open 0; plugins.metadata.scan max 40.91ms open 0; config.normalize max 3.31ms open 0
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
- Resource peaks: CPU at 1063ms; RSS at 1063ms
- Diagnostic correlation:
  - CPU peaked at 175.8% around 1063ms
  - RSS peaked at 1430.7 MB around 1063ms
  - Slowest OpenClaw span: gateway.ready 144.48ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 38008 136% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 37589 853.6 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 134ms
  - resource samples: 2
  - peak sampled RSS: 24.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 37085 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 37337 0% command-tree,runtime-management ocm start kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/resource-samples/gateway-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 37589
- gateway port: 18789
- RSS: 43.2 MB
- CPU: 100%
- readiness: ready after 36 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 8778ms
- time to health ready: 8781ms
- tcp listening: ok in 0ms
- health: ok (200) in 0ms
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
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 144.48ms
- most expensive repeated span: plugins.metadata.scan 4x 75.62ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 8781ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 793.3 MB
  - max sampled CPU: 34.8%
  - role peaks: 
  - top CPU: pid 37589 34.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 37589
- gateway port: 18789
- RSS: 763.5 MB
- CPU: 34.5%
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
- slowest OpenClaw span: gateway.ready 144.48ms
- most expensive repeated span: plugins.metadata.scan 5x 87.44ms
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
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' -- plugins list`
  - status: 0
  - duration: 1734ms
  - resource samples: 3
  - peak sampled RSS: 1386.7 MB
  - max sampled CPU: 172.2%
  - role peaks: 
  - top CPU: pid 37829 126% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1544ms
  - resource samples: 3
  - peak sampled RSS: 1430.7 MB
  - max sampled CPU: 175.8%
  - role peaks: 
  - top CPU: pid 38008 136% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' --tail 400 --raw`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 853.5 MB
  - max sampled CPU: 36.5%
  - role peaks: 
  - top CPU: pid 37589 36.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 37589
- gateway port: 18789
- RSS: 853.5 MB
- CPU: 36.3%
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
- slowest OpenClaw span: gateway.ready 144.48ms
- most expensive repeated span: plugins.metadata.scan 10x 190.01ms
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

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z'`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 858.6 MB
  - max sampled CPU: 35%
  - role peaks: 
  - top CPU: pid 37589 35% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 858.7 MB
  - max sampled CPU: 34.8%
  - role peaks: 
  - top CPU: pid 37589 34.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' --tail 400 --raw`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 853.6 MB
  - max sampled CPU: 34.7%
  - role peaks: 
  - top CPU: pid 37589 34.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 37589
- gateway port: 18789
- RSS: 853.6 MB
- CPU: 34.5%
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
- slowest OpenClaw span: gateway.ready 144.48ms
- most expensive repeated span: plugins.metadata.scan 10x 190.01ms
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
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 853.6 MB
  - max sampled CPU: 32.2%
  - role peaks: 
  - top CPU: pid 37589 32.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 37589
- gateway port: 18789
- RSS: 853.6 MB
- CPU: 32%
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
- slowest OpenClaw span: gateway.ready 144.48ms
- most expensive repeated span: plugins.metadata.scan 10x 190.01ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r1-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 1017ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: FAIL
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 1013.5 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 1586.9 MB
- Max CPU: 40.1%
- Resource samples: 16
- Command tree peak RSS: 573.5 MB
- Gateway peak RSS: 1013.5 MB
- Resource by role:
  - gateway: RSS 1013.5 MB; CPU 40.1%
  - gateway-tree: RSS 1013.5 MB; CPU 40.1%
  - command-tree: RSS 573.5 MB; CPU 138.9%
  - plugin-cli: RSS 573.5 MB; CPU 138.9%
  - status-cli: RSS 5 MB; CPU 0%
  - uncategorized: RSS 5 MB; CPU 0%
- Cold ready: 57 ms
- Warm ready: 55 ms
- Time to listening: 10276 ms
- Time to health ready: 10424 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 41
- Health p95: 13 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (211 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 144.36 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 144.36ms open 0; plugins.metadata.scan max 35.65ms open 0; config.normalize max 3.08ms open 0
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
- Resource peaks: CPU at 1063ms; RSS at 1140ms
- Diagnostic correlation:
  - CPU peaked at 174.1% around 1063ms
  - RSS peaked at 1586.9 MB around 1140ms
  - Slowest OpenClaw span: gateway.ready 144.36ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 39997 137% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 39578 1013.5 MB gateway,gateway-tree openclaw-gateway

### Violations

- gateway peak RSS 1013.5 MB exceeded threshold 950 MB

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 132ms
  - resource samples: 2
  - peak sampled RSS: 24.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 39072 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 39324 0% command-tree,runtime-management ocm start kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/resource-samples/gateway-start-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 42 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 10276ms
- time to health ready: 10424ms
- tcp listening: ok in 0ms
- health: ok (200) in 148ms
- health samples: 1/42 ok
- health latency p95/max: 1ms / 148ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 144.36ms
- most expensive repeated span: plugins.metadata.scan 4x 64.68ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: PASS, 10424ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 769.9 MB
  - max sampled CPU: 29.4%
  - role peaks: 
  - top CPU: pid 39578 29.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 39578
- gateway port: 18789
- RSS: 741.4 MB
- CPU: 29.3%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 13ms
- health samples: 3/3 ok
- health latency p95/max: 13ms / 13ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: gateway.ready 144.36ms
- most expensive repeated span: plugins.metadata.scan 5x 76.25ms
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

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' -- plugins list`
  - status: 0
  - duration: 1782ms
  - resource samples: 3
  - peak sampled RSS: 1586.9 MB
  - max sampled CPU: 165.7%
  - role peaks: 
  - top CPU: pid 39814 123% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1563ms
  - resource samples: 3
  - peak sampled RSS: 1559.2 MB
  - max sampled CPU: 174.1%
  - role peaks: 
  - top CPU: pid 39997 137% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' --tail 400 --raw`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 1013.5 MB
  - max sampled CPU: 34%
  - role peaks: 
  - top CPU: pid 39578 34% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 39578
- gateway port: 18789
- RSS: 1013.5 MB
- CPU: 33.8%
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
- slowest OpenClaw span: gateway.ready 144.36ms
- most expensive repeated span: plugins.metadata.scan 10x 187.36ms
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

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z'`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 1018.5 MB
  - max sampled CPU: 32.6%
  - role peaks: 
  - top CPU: pid 39578 32.6% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 1018.5 MB
  - max sampled CPU: 32.5%
  - role peaks: 
  - top CPU: pid 39578 32.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' --tail 400 --raw`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 1013.5 MB
  - max sampled CPU: 32.4%
  - role peaks: 
  - top CPU: pid 39578 32.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 39578
- gateway port: 18789
- RSS: 1013.5 MB
- CPU: 32.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 0ms
- time to health ready: 0ms
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
- slowest OpenClaw span: gateway.ready 144.36ms
- most expensive repeated span: plugins.metadata.scan 10x 187.36ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 0ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 1013.5 MB
  - max sampled CPU: 30.2%
  - role peaks: 
  - top CPU: pid 39578 30.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 39578
- gateway port: 18789
- RSS: 1013.5 MB
- CPU: 30%
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
- slowest OpenClaw span: gateway.ready 144.36ms
- most expensive repeated span: plugins.metadata.scan 10x 187.36ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r2-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 1111ms

## Bundled Plugin Startup

- Scenario: `bundled-plugin-startup`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `fresh` (Fresh OpenClaw User)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Validate that OpenClaw's bundled plugins load during gateway startup without missing package/module errors or degraded plugin services.
- Gateway RSS: 796.8 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 1381.4 MB
- Max CPU: 49.5%
- Resource samples: 16
- Command tree peak RSS: 584.7 MB
- Gateway peak RSS: 796.8 MB
- Resource by role:
  - gateway: RSS 796.8 MB; CPU 49.5%
  - gateway-tree: RSS 796.8 MB; CPU 49.5%
  - command-tree: RSS 584.7 MB; CPU 136.8%
  - plugin-cli: RSS 584.7 MB; CPU 136.8%
  - status-cli: RSS 5 MB; CPU 0%
  - uncategorized: RSS 5 MB; CPU 0%
- Cold ready: 50 ms
- Warm ready: 56 ms
- Time to listening: 6521 ms
- Time to health ready: 6541 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 26
- Health p95: 1 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (203 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 167.44 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 167.44ms open 0; plugins.metadata.scan max 40.48ms open 0; config.normalize max 3.21ms open 0
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
- Resource peaks: CPU at 1063ms; RSS at 1063ms
- Diagnostic correlation:
  - CPU peaked at 179% around 1063ms
  - RSS peaked at 1381.4 MB around 1063ms
  - Slowest OpenClaw span: gateway.ready 167.44ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 41835 134% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 41569 796.8 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 133ms
  - resource samples: 2
  - peak sampled RSS: 23.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 41063 0% command-tree,mock-provider,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 1ms, artifacts 0

#### Start Bundled Plugin Gateway

Start OpenClaw and let bundled plugin bootstrap run in the same shape users get from the target runtime.

Commands:

- `ocm start 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`

Evidence to capture:

- bundled plugin count
- readiness classification
- dependency staging

Results:

- `ocm start 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 41315 0% command-tree,runtime-management ocm start kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z --runtime kova-l...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/resource-samples/gateway-start-1.jsonl

Metrics:

- gateway state: pending
- child pid: none
- gateway port: 18789
- issue: env gateway is not running under the OCM background service
- readiness: ready after 27 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
- time to listening: 6521ms
- time to health ready: 6541ms
- tcp listening: ok in 1ms
- health: ok (200) in 20ms
- health samples: 1/27 ok
- health latency p95/max: 1ms / 20ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 0
- Node CPU profiles: 0
- Node heap profiles: 0
- Node trace events: 0
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
- slowest OpenClaw span: plugins.runtime-post-bind 88.29ms
- most expensive repeated span: plugins.metadata.scan 4x 74.35ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: PASS, 6541ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 86ms
  - resource samples: 2
  - peak sampled RSS: 820.8 MB
  - max sampled CPU: 52.8%
  - role peaks: 
  - top CPU: pid 41569 52.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 41569
- gateway port: 18789
- RSS: 796.7 MB
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
- OpenClaw timeline events: 197
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 167.44ms
- most expensive repeated span: plugins.metadata.scan 4x 74.35ms
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
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Inspect Bundled Plugins

List and inspect plugin registry state after startup.

Commands:

- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' -- plugins list`
- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' -- plugins registry --refresh --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' --tail 400 --raw`

Evidence to capture:

- plugin list
- registry refresh
- missing package/module errors
- plugin service failures

Results:

- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' -- plugins list`
  - status: 0
  - duration: 1646ms
  - resource samples: 3
  - peak sampled RSS: 1381.4 MB
  - max sampled CPU: 179%
  - role peaks: 
  - top CPU: pid 41835 134% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/resource-samples/inspect-1.jsonl
- `ocm @'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' -- plugins registry --refresh --json`
  - status: 0
  - duration: 1573ms
  - resource samples: 3
  - peak sampled RSS: 1353.6 MB
  - max sampled CPU: 172.7%
  - role peaks: 
  - top CPU: pid 41984 134% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/resource-samples/inspect-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' --tail 400 --raw`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 796.8 MB
  - max sampled CPU: 34.1%
  - role peaks: 
  - top CPU: pid 41569 34.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/resource-samples/inspect-3.jsonl

Metrics:

- gateway state: running
- child pid: 41569
- gateway port: 18789
- RSS: 796.8 MB
- CPU: 33.9%
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
- slowest OpenClaw span: gateway.ready 167.44ms
- most expensive repeated span: plugins.metadata.scan 7x 130.95ms
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
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart Bundled Plugins

Restart after dependency staging should be warm and verify bundled plugin services remain healthy.

Commands:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z'`
- `ocm service status 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' --json`
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' --tail 400 --raw`

Evidence to capture:

- warm readiness
- bundled plugin reload
- runtime dependency reuse

Results:

- `ocm service restart 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z'`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 801.8 MB
  - max sampled CPU: 32.3%
  - role peaks: 
  - top CPU: pid 41569 32.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/resource-samples/restart-1.jsonl
- `ocm service status 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 801.8 MB
  - max sampled CPU: 32.1%
  - role peaks: 
  - top CPU: pid 41569 32.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/resource-samples/restart-2.jsonl
- `ocm logs 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' --tail 400 --raw`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 796.8 MB
  - max sampled CPU: 32%
  - role peaks: 
  - top CPU: pid 41569 32% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/resource-samples/restart-3.jsonl

Metrics:

- gateway state: running
- child pid: 41569
- gateway port: 18789
- RSS: 796.8 MB
- CPU: 31.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 120000ms
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
- slowest OpenClaw span: gateway.ready 167.44ms
- most expensive repeated span: plugins.metadata.scan 7x 130.95ms
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

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 796.9 MB
  - max sampled CPU: 29.1%
  - role peaks: 
  - top CPU: pid 41569 29.1% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 41569
- gateway port: 18789
- RSS: 796.9 MB
- CPU: 29%
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
- slowest OpenClaw span: gateway.ready 167.44ms
- most expensive repeated span: plugins.metadata.scan 7x 130.95ms
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
- cleanup command: `ocm env destroy 'kova-bundled-plugin-startup-fresh-r3-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 1120ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 747.4 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 747.4 MB
- Max CPU: 139.8%
- Resource samples: 11
- Command tree peak RSS: 747.4 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 747.4 MB; CPU 139.8%
  - agent-process: RSS 747.4 MB; CPU 139.8%
  - command-tree: RSS 747.4 MB; CPU 139.8%
  - status-cli: RSS 547 MB; CPU 136.8%
- Cold ready: 54 ms
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
- Slowest OpenClaw span: plugins.metadata.scan 42.12 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 42.12ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 32 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 32 ms
- Agent turn: 2501 ms (true)
- Agent cold/warm: cold 2496 ms; warm 2501 ms; delta 0 ms
- Agent pre-provider: cold 2394 ms; warm 2410 ms; delta 0 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 2500.75 ms; max 2501 ms; pre-provider p95 2409.2 ms
- Provider evidence: 1 request(s); provider work 1 ms; pre-provider 2410 ms; post-provider 90 ms
- Agent latency diagnosis: warm agent turn 2501ms; pre-provider 2410ms; provider 1ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 2496 ms; pre-provider 2394 ms; provider 2 ms; post-provider 100 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2394ms; provider 2ms; post-provider 100ms; unknown 2394ms; source none
  - warm: total 2501 ms; pre-provider 2410 ms; provider 1 ms; post-provider 90 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2410ms; provider 1ms; post-provider 90ms; unknown 2410ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1117ms; RSS at 2121ms
- Diagnostic correlation:
  - CPU peaked at 139.8% around 1117ms
  - RSS peaked at 747.4 MB around 2121ms
  - Slowest OpenClaw span: plugins.metadata.scan 42.12ms
  - Provider/model timing max: 32ms
- Top CPU process: pid 44016 138% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 44760 685 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 132ms
  - resource samples: 2
  - peak sampled RSS: 21.1 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 43050 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 1ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --no-service --json`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 43302 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/resource-samples/provision-1.jsonl

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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 26.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 43555 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t03003...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2496ms
  - resource samples: 4
  - peak sampled RSS: 725.8 MB
  - max sampled CPU: 139.8%
  - role peaks: 
  - top CPU: pid 44016 138% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 36.12ms
- most expensive repeated span: plugins.metadata.scan 5x 72.84ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 30ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2501ms
  - resource samples: 4
  - peak sampled RSS: 747.4 MB
  - max sampled CPU: 139.8%
  - role peaks: 
  - top CPU: pid 44760 138% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 42.12ms
- most expensive repeated span: plugins.metadata.scan 10x 155.95ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 32ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z' -- status`
  - status: 0
  - duration: 1701ms
  - resource samples: 3
  - peak sampled RSS: 547 MB
  - max sampled CPU: 136.8%
  - role peaks: 
  - top CPU: pid 45390 135% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 42.12ms
- most expensive repeated span: plugins.metadata.scan 13x 209.42ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 32ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 45721 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 42.12ms
- most expensive repeated span: plugins.metadata.scan 13x 209.42ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 32ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 753ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 744.1 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 744.1 MB
- Max CPU: 138.9%
- Resource samples: 11
- Command tree peak RSS: 744.1 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 744.1 MB; CPU 138.9%
  - agent-process: RSS 744.1 MB; CPU 138.9%
  - command-tree: RSS 744.1 MB; CPU 138.9%
  - status-cli: RSS 612.4 MB; CPU 138.8%
- Cold ready: 53 ms
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
- Slowest OpenClaw span: plugins.metadata.scan 44.09 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 44.09ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 31 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 31 ms
- Agent turn: 2479 ms (true)
- Agent cold/warm: cold 2424 ms; warm 2479 ms; delta 0 ms
- Agent pre-provider: cold 2331 ms; warm 2388 ms; delta 0 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 2476.25 ms; max 2479 ms; pre-provider p95 2385.15 ms
- Provider evidence: 1 request(s); provider work 1 ms; pre-provider 2388 ms; post-provider 90 ms
- Agent latency diagnosis: warm agent turn 2479ms; pre-provider 2388ms; provider 1ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 2424 ms; pre-provider 2331 ms; provider 2 ms; post-provider 91 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2331ms; provider 2ms; post-provider 91ms; unknown 2331ms; source none
  - warm: total 2479 ms; pre-provider 2388 ms; provider 1 ms; post-provider 90 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2388ms; provider 1ms; post-provider 90ms; unknown 2388ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1120ms; RSS at 2117ms
- Diagnostic correlation:
  - CPU peaked at 138.9% around 1120ms
  - RSS peaked at 744.1 MB around 2117ms
  - Slowest OpenClaw span: plugins.metadata.scan 44.09ms
  - Provider/model timing max: 31ms
- Top CPU process: pid 47996 137% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 47996 681.5 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 133ms
  - resource samples: 2
  - peak sampled RSS: 20.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 46296 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --no-service --json`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 46548 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/resource-samples/provision-1.jsonl

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
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 28.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 46801 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t03003...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

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

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2424ms
  - resource samples: 4
  - peak sampled RSS: 698 MB
  - max sampled CPU: 136.8%
  - role peaks: 
  - top CPU: pid 47249 135% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 42ms
- most expensive repeated span: plugins.metadata.scan 5x 76.14ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 29ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2479ms
  - resource samples: 4
  - peak sampled RSS: 744.1 MB
  - max sampled CPU: 138.9%
  - role peaks: 
  - top CPU: pid 47996 137% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 44.09ms
- most expensive repeated span: plugins.metadata.scan 10x 159.07ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 31ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z' -- status`
  - status: 0
  - duration: 1714ms
  - resource samples: 3
  - peak sampled RSS: 612.4 MB
  - max sampled CPU: 138.8%
  - role peaks: 
  - top CPU: pid 48635 136% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 44.09ms
- most expensive repeated span: plugins.metadata.scan 13x 216.9ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 31ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 48968 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 44.09ms
- most expensive repeated span: plugins.metadata.scan 13x 216.9ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 747ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 775.9 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 775.9 MB
- Max CPU: 138.8%
- Resource samples: 11
- Command tree peak RSS: 775.9 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 775.9 MB; CPU 138.8%
  - agent-process: RSS 775.9 MB; CPU 138.8%
  - command-tree: RSS 775.9 MB; CPU 138.8%
  - status-cli: RSS 527.4 MB; CPU 135.8%
- Cold ready: 53 ms
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
- Slowest OpenClaw span: plugins.metadata.scan 42.83 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 42.83ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 31 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 31 ms
- Agent turn: 2523 ms (true)
- Agent cold/warm: cold 2523 ms; warm 2471 ms; delta 52 ms
- Agent pre-provider: cold 2427 ms; warm 2376 ms; delta 51 ms
- Agent provider final: cold 1 ms; warm 0 ms
- Agent turn stats: count 2; p95 2520.4 ms; max 2523 ms; pre-provider p95 2424.45 ms
- Provider evidence: 1 request(s); provider work 1 ms; pre-provider 2427 ms; post-provider 95 ms
- Agent latency diagnosis: cold agent turn 2523ms; pre-provider 2427ms; provider 1ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 2523 ms; pre-provider 2427 ms; provider 1 ms; post-provider 95 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2427ms; provider 1ms; post-provider 95ms; unknown 2427ms; source none
  - warm: total 2471 ms; pre-provider 2376 ms; provider 0 ms; post-provider 95 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 2376ms; provider 0ms; post-provider 95ms; unknown 2376ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1123ms; RSS at 2121ms
- Diagnostic correlation:
  - CPU peaked at 138.8% around 1123ms
  - RSS peaked at 775.9 MB around 2121ms
  - Slowest OpenClaw span: plugins.metadata.scan 42.83ms
  - Provider/model timing max: 31ms
- Top CPU process: pid 50518 136% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 51232 713.4 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 133ms
  - resource samples: 2
  - peak sampled RSS: 21.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 49543 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 1ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --no-service --json`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 49795 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/resource-samples/provision-1.jsonl

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

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 24.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 50048 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t03003...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

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

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2523ms
  - resource samples: 4
  - peak sampled RSS: 744.4 MB
  - max sampled CPU: 138.8%
  - role peaks: 
  - top CPU: pid 50518 136% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 39.23ms
- most expensive repeated span: plugins.metadata.scan 5x 75.13ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 29ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 2471ms
  - resource samples: 4
  - peak sampled RSS: 775.9 MB
  - max sampled CPU: 137.8%
  - role peaks: 
  - top CPU: pid 51232 136% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 42.83ms
- most expensive repeated span: plugins.metadata.scan 10x 154.19ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 31ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z' -- status`
  - status: 0
  - duration: 1698ms
  - resource samples: 3
  - peak sampled RSS: 527.4 MB
  - max sampled CPU: 135.8%
  - role peaks: 
  - top CPU: pid 51893 133% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 42.83ms
- most expensive repeated span: plugins.metadata.scan 13x 207.83ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 31ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 52214 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 42.83ms
- most expensive repeated span: plugins.metadata.scan 13x 207.83ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 31ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 742ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 875.5 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 1456.5 MB
- Max CPU: 118%
- Resource samples: 17
- Command tree peak RSS: 581.1 MB
- Gateway peak RSS: 875.5 MB
- Resource by role:
  - gateway: RSS 875.5 MB; CPU 118%
  - gateway-tree: RSS 875.5 MB; CPU 118%
  - command-tree: RSS 581.1 MB; CPU 140.8%
  - plugin-cli: RSS 581.1 MB; CPU 138.8%
  - model-cli: RSS 548.9 MB; CPU 140.8%
  - status-cli: RSS 522.8 MB; CPU 135.8%
- Cold ready: 58 ms
- Warm ready: 55 ms
- Time to listening: 7772 ms
- Time to health ready: 7873 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 28 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (225 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 139.16 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 139.16ms open 0; plugins.metadata.scan max 32.83ms open 0; config.normalize max 3.03ms open 0
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
- Resource peaks: CPU at 1062ms; RSS at 1061ms
- Diagnostic correlation:
  - CPU peaked at 179.7% around 1062ms
  - RSS peaked at 1456.5 MB around 1061ms
  - Slowest OpenClaw span: gateway.ready 139.16ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 54135 138% command-tree,model-cli openclaw
- Top RSS process: pid 53183 875.5 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 136ms
  - resource samples: 2
  - peak sampled RSS: 23.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 52789 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 58ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 53041 0% command-tree,runtime-management ocm start kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z --ru...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 113.6 MB
  - max sampled CPU: 118%
  - role peaks: 
  - top CPU: pid 53183 118% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 53183
- gateway port: 18789
- RSS: 119 MB
- CPU: 108%
- readiness: ready after 32 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 7772ms
- time to health ready: 7873ms
- tcp listening: ok in 1ms
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
- slowest OpenClaw span: gateway.ready 139.16ms
- most expensive repeated span: plugins.metadata.scan 4x 64.39ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 7873ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 764.4 MB
  - max sampled CPU: 39.2%
  - role peaks: 
  - top CPU: pid 53183 39.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 53183
- gateway port: 18789
- RSS: 737.2 MB
- CPU: 39%
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
- slowest OpenClaw span: gateway.ready 139.16ms
- most expensive repeated span: plugins.metadata.scan 5x 75.45ms
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
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 71ms
  - resource samples: 2
  - peak sampled RSS: 767.7 MB
  - max sampled CPU: 39.5%
  - role peaks: 
  - top CPU: pid 53183 39.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 53183
- gateway port: 18789
- RSS: 749.5 MB
- CPU: 39.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 332ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
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
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 139.16ms
- most expensive repeated span: plugins.metadata.scan 7x 111.28ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - process: PASS, 5ms, artifacts 0
  - readiness: PASS, 332ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' -- status`
  - status: 0
  - duration: 1809ms
  - resource samples: 3
  - peak sampled RSS: 1398 MB
  - max sampled CPU: 179.7%
  - role peaks: 
  - top CPU: pid 53842 134% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' -- plugins list`
  - status: 0
  - duration: 1648ms
  - resource samples: 3
  - peak sampled RSS: 1456.5 MB
  - max sampled CPU: 176.8%
  - role peaks: 
  - top CPU: pid 54000 136% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' -- models list`
  - status: 0
  - duration: 1078ms
  - resource samples: 3
  - peak sampled RSS: 1424.4 MB
  - max sampled CPU: 174.5%
  - role peaks: 
  - top CPU: pid 54135 138% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 53183
- gateway port: 18789
- RSS: 875.5 MB
- CPU: 33.6%
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 139.16ms
- most expensive repeated span: plugins.metadata.scan 17x 257.79ms
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

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z'`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 880.7 MB
  - max sampled CPU: 32.4%
  - role peaks: 
  - top CPU: pid 53183 32.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 880.5 MB
  - max sampled CPU: 32.3%
  - role peaks: 
  - top CPU: pid 53183 32.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 53183
- gateway port: 18789
- RSS: 875.5 MB
- CPU: 32.2%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 15000ms / 45000ms
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 139.16ms
- most expensive repeated span: plugins.metadata.scan 17x 257.79ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 875.5 MB
  - max sampled CPU: 30.2%
  - role peaks: 
  - top CPU: pid 53183 30.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 53183
- gateway port: 18789
- RSS: 875.5 MB
- CPU: 30.1%
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
- slowest OpenClaw span: gateway.ready 139.16ms
- most expensive repeated span: plugins.metadata.scan 17x 257.79ms
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
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r1-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 1090ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 879.8 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 1462.4 MB
- Max CPU: 100%
- Resource samples: 17
- Command tree peak RSS: 582.8 MB
- Gateway peak RSS: 879.8 MB
- Resource by role:
  - gateway: RSS 879.8 MB; CPU 100%
  - gateway-tree: RSS 879.8 MB; CPU 47.3%
  - command-tree: RSS 582.8 MB; CPU 138.9%
  - status-cli: RSS 582.8 MB; CPU 134.8%
  - plugin-cli: RSS 518.1 MB; CPU 138.9%
  - model-cli: RSS 506 MB; CPU 132.8%
- Cold ready: 56 ms
- Warm ready: 55 ms
- Time to listening: 8017 ms
- Time to health ready: 8054 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
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
- OpenClaw timeline: available (225 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 141.85 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 141.85ms open 0; plugins.metadata.scan max 32.41ms open 0; config.normalize max 3.25ms open 0
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
- Resource peaks: CPU at 1060ms; RSS at 1060ms
- Diagnostic correlation:
  - CPU peaked at 177.6% around 1060ms
  - RSS peaked at 1462.4 MB around 1060ms
  - Slowest OpenClaw span: gateway.ready 141.85ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 56276 137% command-tree,plugin-cli openclaw-plugins
- Top RSS process: pid 55661 879.8 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 132ms
  - resource samples: 2
  - peak sampled RSS: 27.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 54947 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 1ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 55199 0% command-tree,runtime-management ocm start kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z --ru...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 55450 0% command-tree,status-cli ocm service status kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 55661
- gateway port: 18789
- RSS: 56.9 MB
- CPU: 100%
- readiness: ready after 33 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 8017ms
- time to health ready: 8054ms
- tcp listening: ok in 0ms
- health: ok (200) in 0ms
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
- slowest OpenClaw span: gateway.ready 141.85ms
- most expensive repeated span: plugins.metadata.scan 4x 69.74ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 8054ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 663.8 MB
  - max sampled CPU: 37.8%
  - role peaks: 
  - top CPU: pid 55661 37.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 55661
- gateway port: 18789
- RSS: 636.8 MB
- CPU: 37.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
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
- slowest OpenClaw span: gateway.ready 141.85ms
- most expensive repeated span: plugins.metadata.scan 5x 80.77ms
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
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 66ms
  - resource samples: 2
  - peak sampled RSS: 675.1 MB
  - max sampled CPU: 37.9%
  - role peaks: 
  - top CPU: pid 55661 37.9% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 55661
- gateway port: 18789
- RSS: 681.9 MB
- CPU: 38.1%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 340ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
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
- OpenClaw timeline events: 205
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 141.85ms
- most expensive repeated span: plugins.metadata.scan 7x 118.07ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 340ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' -- status`
  - status: 0
  - duration: 1901ms
  - resource samples: 3
  - peak sampled RSS: 1462.4 MB
  - max sampled CPU: 177.6%
  - role peaks: 
  - top CPU: pid 56123 133% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' -- plugins list`
  - status: 0
  - duration: 1629ms
  - resource samples: 3
  - peak sampled RSS: 1397.9 MB
  - max sampled CPU: 177.1%
  - role peaks: 
  - top CPU: pid 56276 137% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' -- models list`
  - status: 0
  - duration: 1074ms
  - resource samples: 3
  - peak sampled RSS: 1385.8 MB
  - max sampled CPU: 166.8%
  - role peaks: 
  - top CPU: pid 56406 131% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 55661
- gateway port: 18789
- RSS: 879.8 MB
- CPU: 34%
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 141.85ms
- most expensive repeated span: plugins.metadata.scan 17x 274.86ms
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
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z'`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 884.8 MB
  - max sampled CPU: 32.8%
  - role peaks: 
  - top CPU: pid 55661 32.8% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 884.8 MB
  - max sampled CPU: 32.7%
  - role peaks: 
  - top CPU: pid 55661 32.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 55661
- gateway port: 18789
- RSS: 879.8 MB
- CPU: 32.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 15000ms / 45000ms
- time to listening: 0ms
- time to health ready: 0ms
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
- slowest OpenClaw span: gateway.ready 141.85ms
- most expensive repeated span: plugins.metadata.scan 17x 274.86ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - process: PASS, 3ms, artifacts 0
  - readiness: PASS, 0ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 14ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 879.8 MB
  - max sampled CPU: 30.5%
  - role peaks: 
  - top CPU: pid 55661 30.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 55661
- gateway port: 18789
- RSS: 879.8 MB
- CPU: 30.4%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 0ms
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 141.85ms
- most expensive repeated span: plugins.metadata.scan 17x 274.86ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 0ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r2-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 1180ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 844.9 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 1407.4 MB
- Max CPU: 200%
- Resource samples: 17
- Command tree peak RSS: 562.5 MB
- Gateway peak RSS: 844.9 MB
- Resource by role:
  - gateway: RSS 844.9 MB; CPU 200%
  - gateway-tree: RSS 844.9 MB; CPU 200%
  - command-tree: RSS 562.5 MB; CPU 140.8%
  - plugin-cli: RSS 562.5 MB; CPU 137.9%
  - status-cli: RSS 552 MB; CPU 140.8%
  - model-cli: RSS 541.1 MB; CPU 139.8%
- Cold ready: 57 ms
- Warm ready: 55 ms
- Time to listening: 8021 ms
- Time to health ready: 8087 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 0 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 26 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (225 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 185.99 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 185.99ms open 0; plugins.metadata.scan max 40.29ms open 0; config.normalize max 3.06ms open 0
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
- Resource peaks: CPU at 58ms; RSS at 1061ms
- Diagnostic correlation:
  - CPU peaked at 200% around 58ms
  - RSS peaked at 1407.4 MB around 1061ms
  - Slowest OpenClaw span: gateway.ready 185.99ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 57817 200% gateway,gateway-tree openclaw-gateway
- Top RSS process: pid 57817 844.9 MB gateway,gateway-tree openclaw-gateway

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 133ms
  - resource samples: 2
  - peak sampled RSS: 24.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 57221 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z" does not exist
- collectors:
  - service: FAIL, 1ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' --runtime 'kova-local-1783652436578' --json`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 4.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 57473 0% command-tree,runtime-management ocm start kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z --ru...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 53.6 MB
  - max sampled CPU: 200%
  - role peaks: 
  - top CPU: pid 57817 200% gateway,gateway-tree node /home/runner/.ocm/runtimes/kova-local-1783652436578/files/node_modules/openclaw/op...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 57817
- gateway port: 18789
- RSS: 62.9 MB
- CPU: 100%
- readiness: ready after 33 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 8021ms
- time to health ready: 8087ms
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
- slowest OpenClaw span: gateway.ready 185.99ms
- most expensive repeated span: plugins.metadata.scan 4x 73.3ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 8087ms, artifacts 0
  - logs: PASS, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/port'`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 816.8 MB
  - max sampled CPU: 42.4%
  - role peaks: 
  - top CPU: pid 57817 42.4% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 57817
- gateway port: 18789
- RSS: 789.4 MB
- CPU: 42.2%
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
- slowest OpenClaw span: gateway.ready 185.99ms
- most expensive repeated span: plugins.metadata.scan 5x 85.01ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 1ms, artifacts 0
  - logs: PASS, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 15ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 89ms
  - resource samples: 2
  - peak sampled RSS: 801.2 MB
  - max sampled CPU: 44.2%
  - role peaks: 
  - top CPU: pid 57817 44.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 57817
- gateway port: 18789
- RSS: 799 MB
- CPU: 44.5%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 356ms
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
- slowest OpenClaw span: gateway.ready 185.99ms
- most expensive repeated span: plugins.metadata.scan 7x 120.28ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 356ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' -- status`
  - status: 0
  - duration: 1788ms
  - resource samples: 3
  - peak sampled RSS: 1396.4 MB
  - max sampled CPU: 188.5%
  - role peaks: 
  - top CPU: pid 58280 138% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' -- plugins list`
  - status: 0
  - duration: 1660ms
  - resource samples: 3
  - peak sampled RSS: 1407.4 MB
  - max sampled CPU: 179.4%
  - role peaks: 
  - top CPU: pid 58433 136% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' -- models list`
  - status: 0
  - duration: 1081ms
  - resource samples: 3
  - peak sampled RSS: 1386 MB
  - max sampled CPU: 176.6%
  - role peaks: 
  - top CPU: pid 58548 137% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 57817
- gateway port: 18789
- RSS: 844.9 MB
- CPU: 36.7%
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
- slowest OpenClaw span: gateway.ready 185.99ms
- most expensive repeated span: plugins.metadata.scan 17x 268.77ms
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

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z'`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 849.9 MB
  - max sampled CPU: 35.5%
  - role peaks: 
  - top CPU: pid 57817 35.5% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' --json`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 849.9 MB
  - max sampled CPU: 35.3%
  - role peaks: 
  - top CPU: pid 57817 35.3% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 57817
- gateway port: 18789
- RSS: 844.9 MB
- CPU: 35.2%
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
- slowest OpenClaw span: gateway.ready 185.99ms
- most expensive repeated span: plugins.metadata.scan 17x 268.77ms
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

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 844.9 MB
  - max sampled CPU: 33%
  - role peaks: 
  - top CPU: pid 57817 33% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-07-10T030036Z/kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 57817
- gateway port: 18789
- RSS: 844.9 MB
- CPU: 32.8%
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
- OpenClaw timeline events: 225
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 185.99ms
- most expensive repeated span: plugins.metadata.scan 17x 268.77ms
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-r3-kova-2026-07-10t030036z' --yes`
- cleanup status: 0
- cleanup duration: 1186ms

