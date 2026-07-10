# Kova OpenClaw Runtime Report

Generated: 2026-07-10T06:30:55.539Z
Run ID: `kova-2026-07-10T062750Z`
Mode: execution
Platform: linux 6.6.141 (x64) · v24.13.0

## Summary

- Total scenarios: 2
- FAIL: 2

## Failure Cards

- FAIL gateway-performance/many-bundled-plugins: plugin-cli peak RSS 816.3 MB exceeded threshold 800 MB
  - likely owner: OpenClaw
  - evidence: resourceScope: product; resourceContract: primary-role-product-scope-v2
  - evidence: timeToHealthReadyMs: 10020
  - evidence: timeToListeningMs: 9192
  - evidence: gatewayRssMb: 695.7
- FAIL agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 928.4 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 928.4 MB, agent-process 928.4 MB, command-tree 928.4 MB
  - likely owner: OpenClaw
  - evidence: resourceScope: product; resourceContract: primary-role-product-scope-v2
  - evidence: agent-cliRssMb: 928.4
  - evidence: cpuPercentMax: 149
  - evidence: coldAgentTurnMs: 4209

## Performance

- Repeat: 1
- Groups: 2
- Unstable groups: 0
- Profiled runs: 2
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- gateway-performance/many-bundled-plugins: 1 sample(s); instrumented resources; timeToHealthReadyMs median 10020ms p95 10020ms max 10020ms; peakRssMb median 695.7MB p95 695.7MB max 695.7MB; cpuPercentMax median 131% p95 131% max 131%; openclawEventLoopMaxMs median 0ms p95 0ms max 0ms; timeToListeningMs median 9192ms p95 9192ms max 9192ms
- agent-cold-warm-message/mock-openai-provider: 1 sample(s); instrumented resources; peakRssMb median 928.4MB p95 928.4MB max 928.4MB; cpuPercentMax median 149% p95 149% max 149%; agentTurnMs median 4209ms p95 4209ms max 4209ms; coldAgentTurnMs median 4209ms p95 4209ms max 4209ms; warmAgentTurnMs median 4123ms p95 4123ms max 4123ms

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 928.4 MB; CPU 153.7%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 928.4 MB; CPU 149%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 928.4 MB; CPU 149%; scenario agent-cold-warm-message/mock-openai-provider
- status-cli: RSS 832.8 MB; CPU 145%; scenario gateway-performance/many-bundled-plugins
- plugin-cli: RSS 816.3 MB; CPU 146.2%; scenario gateway-performance/many-bundled-plugins
- gateway: RSS 695.7 MB; CPU 131%; scenario gateway-performance/many-bundled-plugins
- gateway-tree: RSS 695.7 MB; CPU 131%; scenario gateway-performance/many-bundled-plugins
- model-cli: RSS 621.5 MB; CPU 153.7%; scenario gateway-performance/many-bundled-plugins

## Target Cleanup

- Runtime: `kova-local-1783664870777`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1783664870777' --json`
- Exit: 0
- Duration: 419ms

## Gateway Startup And Runtime Performance

- Scenario: `gateway-performance`
- Result: FAIL
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `many-bundled-plugins` (Many Bundled Plugins Enabled)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z`
- Likely owner on failure: OpenClaw
- Objective: Measure cold start, warm start, health latency, memory, CPU, and user-facing command latency for a target OpenClaw runtime.
- Gateway RSS: 695.7 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 1402.1 MB
- Max CPU: 131%
- Resource samples: 49
- Command tree peak RSS: 832.8 MB
- Gateway peak RSS: 695.7 MB
- Resource by role:
  - command-tree: RSS 832.8 MB; CPU 153.7%
  - status-cli: RSS 832.8 MB; CPU 139.8%
  - plugin-cli: RSS 816.3 MB; CPU 146.2%
  - gateway: RSS 695.7 MB; CPU 131%
  - gateway-tree: RSS 695.7 MB; CPU 131%
  - model-cli: RSS 621.5 MB; CPU 153.7%
- Cold ready: 908 ms
- Warm ready: 59 ms
- Time to listening: 9192 ms
- Time to health ready: 10020 ms
- Readiness classification: ready
- Readiness reason: gateway became healthy within the readiness threshold
- TCP connect max: 1 ms
- Missing dependency errors: 0
- Final gateway state: running
- Health failures: 0
- Health p95: 924 ms
- Readiness failures: 0
- Gateway restarts: 2
- Plugin load failures: 0
- Metadata scan mentions: 0
- Config normalization mentions: 0
- Provider/model timeout mentions: 0
- Event-loop delay mentions: 0
- OpenClaw timeline: available (226 events, 0 parse errors)
- Slowest OpenClaw span: gateway.ready 391.11 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: gateway.ready max 391.11ms open 0; plugins.metadata.scan max 44.52ms open 0; config.normalize max 19.43ms open 0
- OpenClaw event-loop max: 0 ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: 0 ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: true (cold installs 0; warm restages 0; warm max unknown ms)
- Provider/model timing: unknown ms
- Agent turn: unknown ms (not-run)
- Agent containment: process leaks 0; gateway healthy n/a; status works n/a
- Profiling: enabled (instrumented run; CPU/RSS can include profiler and diagnostic overhead)
- V8 reports / heap snapshots: 1 / 1
- Node CPU/heap/trace profiles: 14 / 14 / 12
- Node profile top function: (idle) 82486.55 ms
- Node heap top function: decode 42.9 MB
- Diagnostic / heap bytes: 160222611 / 160163620
- Diagnostic reports: 1 (58991 bytes)
- Node profile bytes: 322792845
- Resource peaks: CPU at 583ms; RSS at 2624ms
- Diagnostic correlation:
  - CPU peaked at 201.8% around 583ms
  - RSS peaked at 1402.1 MB around 2624ms
  - Top sampled CPU function: (idle) 82486.55ms
  - Top sampled heap allocation function: decode 42.9 MB
  - Slowest OpenClaw span: gateway.ready 391.11ms
  - Max structured event-loop delay: 0ms
- Top CPU process: pid 64351 145% command-tree,model-cli openclaw
- Top RSS process: pid 63438 764.5 MB command-tree,status-cli openclaw

### Violations

- plugin-cli peak RSS 816.3 MB exceeded threshold 800 MB

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1783664870777' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1783664870777' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 121898ms
  - resource samples: 486
  - peak sampled RSS: 12959.4 MB
  - max sampled CPU: 374%
  - role peaks: 
  - top CPU: pid 49150 250% build-tooling,command-tree,runtime-management node /home/runner/_work/openclaw/openclaw/node_modules/.bin/vite build
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/resource-samples/target-setup-1.jsonl

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 152ms
  - resource samples: 2
  - peak sampled RSS: 23.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 62286 0% command-tree,mock-provider,plugin-cli,runtime-staging /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-d...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Cold Start

Start a fresh gateway and capture readiness timing, process state, and logs.

Commands:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' --runtime 'kova-local-1783664870777' --json`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' --json`

Evidence to capture:

- ready time
- PID
- RSS
- CPU
- startup logs

Results:

- `ocm start 'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' --runtime 'kova-local-1783664870777' --json`
  - status: 0
  - duration: 908ms
  - resource samples: 2
  - peak sampled RSS: 305.3 MB
  - max sampled CPU: 130%
  - role peaks: 
  - top CPU: pid 62705 130% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/resource-samples/cold-start-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' --json`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 336.8 MB
  - max sampled CPU: 131%
  - role peaks: 
  - top CPU: pid 62705 131% gateway,gateway-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/resource-samples/cold-start-2.jsonl

Metrics:

- gateway state: running
- child pid: 62705
- gateway port: 18789
- RSS: 340.7 MB
- CPU: 131%
- readiness: ready after 92 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 9192ms
- time to health ready: 10020ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 10/10 ok
- health latency p95/max: 127ms / 127ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 10
- Node CPU profiles: 3
- Node heap profiles: 3
- Node trace events: 4
- Node profile artifact bytes: 113387995
- Node top CPU function: (idle) 1375.09ms :-1
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
- slowest OpenClaw span: gateway.ready 391.11ms
- most expensive repeated span: plugins.metadata.scan 4x 77.35ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 10021ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: PASS, 6ms, artifacts 10

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/port'`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 866.7 MB
  - max sampled CPU: 58.2%
  - role peaks: 
  - top CPU: pid 62705 58.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/resource-samples/auth-setup-1.jsonl

Metrics:

- gateway state: running
- child pid: 62705
- gateway port: 18789
- RSS: 838.4 MB
- CPU: 57.8%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 1ms
- tcp listening: ok in 0ms
- health: ok (200) in 2ms
- health samples: 10/10 ok
- health latency p95/max: 924ms / 924ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 0
- V8 reports: 0
- heap snapshots: 0
- diagnostic artifact bytes: 0
- Node profile artifacts: 15
- Node CPU profiles: 5
- Node heap profiles: 5
- Node trace events: 5
- Node profile artifact bytes: 91794516
- Node top CPU function: (idle) 1375.98ms :-1
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
- slowest OpenClaw span: gateway.ready 391.11ms
- most expensive repeated span: plugins.metadata.scan 6x 125.44ms
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
  - node-profiles: PASS, 14ms, artifacts 15

#### State Setup After cold-start

Apply Kova state 'many-bundled-plugins' setup after scenario phase 'cold-start'.

Commands:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`

Evidence to capture:

- large plugin install index written

Results:

- `ocm env exec 'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' -- node -e 'const fs=require("fs"), path=require("path"); const home=process.env.OPENCLAW_HOME; const entries=Array.from({length:80},(_,i)=>({id:`kova-bundled-${i}`,name:`kova-bundled-${i}`,source:"bundled",enabled:true,version:"0.0.0",manifest:{id:`kova-bundled-${i}`,runtimeDependencies:["zod","ws","undici","chokidar"]}})); for (const rel of ["plugins",".openclaw/plugins"]) { const dir=path.join(home,rel); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,"installs.json"), JSON.stringify({schemaVersion:"kova.fixture.plugins.v1",plugins:entries}, null, 2)); }'`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 1119.1 MB
  - max sampled CPU: 67.2%
  - role peaks: 
  - top CPU: pid 62705 67.2% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/resource-samples/state-cold-start-1.jsonl

Metrics:

- gateway state: running
- child pid: 62705
- gateway port: 18789
- RSS: 1094.1 MB
- CPU: 66.9%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 30000ms / 90000ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 0ms
- health samples: 10/10 ok
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
- Node profile artifacts: 18
- Node CPU profiles: 6
- Node heap profiles: 6
- Node trace events: 6
- Node profile artifact bytes: 102864924
- Node top CPU function: (idle) 1375.98ms :-1
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
- slowest OpenClaw span: gateway.ready 391.11ms
- most expensive repeated span: plugins.metadata.scan 6x 125.44ms
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
  - node-profiles: PASS, 7ms, artifacts 18

#### API Latency

Run user-facing status, plugin, and model commands and capture duration and gateway health after each.

Commands:

- `ocm @'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' -- status`
- `ocm @'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' -- plugins list`
- `ocm @'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' -- models list`

Evidence to capture:

- command durations
- health after each command
- logs

Results:

- `ocm @'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' -- status`
  - status: 0
  - duration: 4094ms
  - resource samples: 18
  - peak sampled RSS: 1402.1 MB
  - max sampled CPU: 199.1%
  - role peaks: 
  - top CPU: pid 63438 136% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/resource-samples/api-latency-1.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' -- plugins list`
  - status: 0
  - duration: 2529ms
  - resource samples: 11
  - peak sampled RSS: 1371.4 MB
  - max sampled CPU: 198.5%
  - role peaks: 
  - top CPU: pid 63962 140% command-tree,plugin-cli openclaw-plugins
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/resource-samples/api-latency-2.jsonl
- `ocm @'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' -- models list`
  - status: 0
  - duration: 2722ms
  - resource samples: 12
  - peak sampled RSS: 1176.8 MB
  - max sampled CPU: 201.8%
  - role peaks: 
  - top CPU: pid 64351 145% command-tree,model-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/resource-samples/api-latency-3.jsonl

Metrics:

- gateway state: running
- child pid: 62705
- gateway port: 18789
- RSS: 555.3 MB
- CPU: 44.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 10/10 ok
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
- Node profile artifacts: 36
- Node CPU profiles: 12
- Node heap profiles: 12
- Node trace events: 12
- Node profile artifact bytes: 322733854
- Node top CPU function: (idle) 11733.14ms :-1
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 226
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 391.11ms
- most expensive repeated span: plugins.metadata.scan 16x 353.23ms
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
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: PASS, 34ms, artifacts 36

#### Warm Restart

Restart the gateway after runtime deps and registries are warm, then compare readiness and memory.

Commands:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z'`
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' --json`

Evidence to capture:

- warm ready time
- RSS delta
- startup log delta

Results:

- `ocm service restart 'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z'`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 560.7 MB
  - max sampled CPU: 41.7%
  - role peaks: 
  - top CPU: pid 62705 41.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/resource-samples/warm-restart-1.jsonl
- `ocm service status 'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' --json`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 560.5 MB
  - max sampled CPU: 41.7%
  - role peaks: 
  - top CPU: pid 62705 41.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/resource-samples/warm-restart-2.jsonl

Metrics:

- gateway state: running
- child pid: 62705
- gateway port: 18789
- RSS: 555.6 MB
- CPU: 41.6%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 15000ms / 45000ms
- time to listening: 0ms
- time to health ready: 2ms
- tcp listening: ok in 0ms
- health: ok (200) in 1ms
- health samples: 10/10 ok
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
- Node profile artifacts: 36
- Node CPU profiles: 12
- Node heap profiles: 12
- Node trace events: 12
- Node profile artifact bytes: 322733854
- Node top CPU function: (idle) 11733.14ms :-1
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 226
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 391.11ms
- most expensive repeated span: plugins.metadata.scan 16x 353.23ms
- OpenClaw event-loop max: 0ms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - process: PASS, 4ms, artifacts 0
  - readiness: PASS, 2ms, artifacts 0
  - logs: PASS, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: PASS, 31ms, artifacts 36

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 1049.4 MB
  - max sampled CPU: 37.7%
  - role peaks: 
  - top CPU: pid 62705 37.7% gateway,gateway-tree openclaw-gateway
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- gateway state: running
- child pid: 62705
- gateway port: 18789
- RSS: 1049.4 MB
- CPU: 37.7%
- readiness: ready after 1 attempt(s)
- readiness classification: ready
- readiness reason: gateway became healthy within the readiness threshold
- readiness threshold/deadline: 0ms / 0ms
- time to listening: 1ms
- time to health ready: 2ms
- tcp listening: ok in 1ms
- health: ok (200) in 1ms
- health samples: 10/10 ok
- health latency p95/max: 2ms / 2ms
- log missing dependency errors: 0
- log plugin load failures: 0
- log metadata scan mentions: 0
- log config normalization mentions: 0
- log gateway restart mentions: 1
- log provider/model timeout mentions: 0
- log event-loop delay mentions: 0
- diagnostic files: 2
- V8 reports: 1
- heap snapshots: 1
- diagnostic artifact bytes: 160222611
- Node profile artifacts: 37
- Node CPU profiles: 12
- Node heap profiles: 12
- Node trace events: 12
- Node profile artifact bytes: 322792845
- Node top CPU function: (idle) 11733.14ms :-1
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 226
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: gateway.ready 391.11ms
- most expensive repeated span: plugins.metadata.scan 16x 353.23ms
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
  - diagnostics: PASS, 8ms, artifacts 2
  - node-profiles: PASS, 35ms, artifacts 37

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-gateway-performance-many-bundled-plugins-kova-2026-07-10t062750z' --yes`
- cleanup status: 0
- cleanup duration: 1992ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: FAIL
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 928.4 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 928.4 MB
- Max CPU: 149%
- Resource samples: 49
- Command tree peak RSS: 928.4 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 928.4 MB; CPU 149%
  - agent-process: RSS 928.4 MB; CPU 149%
  - command-tree: RSS 928.4 MB; CPU 149%
  - status-cli: RSS 752.6 MB; CPU 145%
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
- Slowest OpenClaw span: plugins.metadata.scan 43.33 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 43.33ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 48 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 48 ms
- Agent turn: 4209 ms (true)
- Agent cold/warm: cold 4209 ms; warm 4123 ms; delta 86 ms
- Agent pre-provider: cold 3642 ms; warm 3562 ms; delta 80 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 4204.7 ms; max 4209 ms; pre-provider p95 3638 ms
- Provider evidence: 1 request(s); provider work 2 ms; pre-provider 3642 ms; post-provider 565 ms
- Agent latency diagnosis: cold agent turn 4209ms; pre-provider 3642ms; provider 2ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 4209 ms; pre-provider 3642 ms; provider 2 ms; post-provider 565 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 3642ms; provider 2ms; post-provider 565ms; unknown 3642ms; source none
  - warm: total 4123 ms; pre-provider 3562 ms; provider 1 ms; post-provider 560 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 3562ms; provider 1ms; post-provider 560ms; unknown 3562ms; source none
- Profiling: enabled (instrumented run; CPU/RSS can include profiler and diagnostic overhead)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 8 / 8 / 8
- Node profile top function: (idle) 11099.46 ms
- Node heap top function: decode 33.4 MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 125575517
- Resource peaks: CPU at 617ms; RSS at 3874ms
- Diagnostic correlation:
  - CPU peaked at 149% around 617ms
  - RSS peaked at 928.4 MB around 3874ms
  - Top sampled CPU function: (idle) 11099.46ms
  - Top sampled heap allocation function: decode 33.4 MB
  - Slowest OpenClaw span: plugins.metadata.scan 43.33ms
  - Provider/model timing max: 48ms
- Top CPU process: pid 68887 140% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 68887 860 MB agent-cli,agent-process,command-tree openclaw-agent

### Violations

- agent-cli peak RSS 928.4 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 928.4 MB, agent-process 928.4 MB, command-tree 928.4 MB
- agent-cli peak RSS 928.4 MB exceeded threshold 900 MB
- agent-process peak RSS 928.4 MB exceeded threshold 900 MB

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 151ms
  - resource samples: 2
  - peak sampled RSS: 26 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 65454 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-d...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z' --runtime 'kova-local-1783664870777' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z' --runtime 'kova-local-1783664870777' --no-service --json`
  - status: 0
  - duration: 52ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 65714 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/resource-samples/provision-1.jsonl

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
- Node profile artifacts: 3
- Node CPU profiles: 1
- Node heap profiles: 1
- Node trace events: 1
- Node profile artifact bytes: 56830
- Node top CPU function: (program) 5.75ms :-1
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
  - timeline: INFO, 1ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: PASS, 1ms, artifacts 3

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/port'`
  - status: 0
  - duration: 56ms
  - resource samples: 2
  - peak sampled RSS: 29.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 65967 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z ...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/resource-samples/auth-setup-1.jsonl

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
- Node profile artifacts: 6
- Node CPU profiles: 2
- Node heap profiles: 2
- Node trace events: 2
- Node profile artifact bytes: 90162
- Node top CPU function: (program) 11.53ms :-1
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
  - timeline: INFO, 1ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: PASS, 0ms, artifacts 6

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 4209ms
  - resource samples: 18
  - peak sampled RSS: 922.4 MB
  - max sampled CPU: 143%
  - role peaks: 
  - top CPU: pid 66480 136% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/resource-samples/cold-agent-turn-1.jsonl

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
- Node profile artifacts: 12
- Node CPU profiles: 4
- Node heap profiles: 4
- Node trace events: 4
- Node profile artifact bytes: 20934712
- Node top CPU function: (idle) 4145.34ms :-1
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
- slowest OpenClaw span: plugins.metadata.scan 41.37ms
- most expensive repeated span: plugins.metadata.scan 5x 92.35ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 45ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: PASS, 10ms, artifacts 12

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 4123ms
  - resource samples: 18
  - peak sampled RSS: 928.4 MB
  - max sampled CPU: 149%
  - role peaks: 
  - top CPU: pid 68887 140% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/resource-samples/warm-agent-turn-1.jsonl

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
- Node profile artifacts: 18
- Node CPU profiles: 6
- Node heap profiles: 6
- Node trace events: 6
- Node profile artifact bytes: 38391174
- Node top CPU function: (idle) 8227.52ms :-1
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
- slowest OpenClaw span: plugins.metadata.scan 41.37ms
- most expensive repeated span: plugins.metadata.scan 10x 172.89ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 48ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: PASS, 19ms, artifacts 18

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z' -- status`
  - status: 0
  - duration: 2908ms
  - resource samples: 13
  - peak sampled RSS: 752.6 MB
  - max sampled CPU: 145%
  - role peaks: 
  - top CPU: pid 71173 137% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/resource-samples/post-agent-health-1.jsonl

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
- Node profile artifacts: 24
- Node CPU profiles: 8
- Node heap profiles: 8
- Node trace events: 8
- Node profile artifact bytes: 125575517
- Node top CPU function: (idle) 11099.46ms :-1
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
- slowest OpenClaw span: plugins.metadata.scan 43.33ms
- most expensive repeated span: plugins.metadata.scan 13x 239.14ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 48ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: PASS, 31ms, artifacts 24

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 72664 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-07-10T062750Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z/resource-samples/auth-cleanup-1.jsonl

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
- Node profile artifacts: 24
- Node CPU profiles: 8
- Node heap profiles: 8
- Node trace events: 8
- Node profile artifact bytes: 125575517
- Node top CPU function: (idle) 11099.46ms :-1
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
- slowest OpenClaw span: plugins.metadata.scan 43.33ms
- most expensive repeated span: plugins.metadata.scan 13x 239.14ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 48ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: PASS, 24ms, artifacts 24

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062750z' --yes`
- cleanup status: 0
- cleanup duration: 757ms

