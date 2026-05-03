# Kova OpenClaw Runtime Report

Generated: 2026-05-03T13:14:42.464Z
Run ID: `kova-2026-05-03T130714Z`
Mode: execution
Platform: linux 6.5.13 (x64) · v24.13.0

## Summary

- Total scenarios: 3
- FAIL: 3

## Failure Cards

- FAIL agent-cold-warm-message/mock-openai-provider: ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json took 80080ms, over threshold 45000ms
  - likely owner: OpenClaw
  - evidence: peakRssMb: 3591
  - evidence: cpuPercentMax: 301.3
  - evidence: coldAgentTurnMs: 80080
  - evidence: warmAgentTurnMs: 50517
- FAIL agent-cold-warm-message/mock-openai-provider: ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json took 71311ms, over threshold 45000ms
  - likely owner: OpenClaw
  - evidence: peakRssMb: 3317.6
  - evidence: cpuPercentMax: 319.7
  - evidence: coldAgentTurnMs: 71311
  - evidence: warmAgentTurnMs: 46853
- FAIL agent-cold-warm-message/mock-openai-provider: ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json took 70908ms, over threshold 45000ms
  - likely owner: OpenClaw
  - evidence: peakRssMb: 3529
  - evidence: cpuPercentMax: 304.2
  - evidence: coldAgentTurnMs: 70908
  - evidence: warmAgentTurnMs: 45861

## Performance

- Repeat: 3
- Groups: 1
- Unstable groups: 0
- Profiled runs: 0
- agent-cold-warm-message/mock-openai-provider: 3 sample(s); peakRssMb median 3529MB p95 3584.8MB max 3591MB; cpuPercentMax median 304.2% p95 318.15% max 319.7%; agentTurnMs median 71311ms p95 79203.1ms max 80080ms; coldAgentTurnMs median 71311ms p95 79203.1ms max 80080ms; warmAgentTurnMs median 46853ms p95 50150.6ms max 50517ms

## Resource Roles

- agent-cli: RSS 3591 MB; CPU 319.7%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 3591 MB; CPU 319.7%; scenario agent-cold-warm-message/mock-openai-provider
- command-tree: RSS 3591 MB; CPU 319.7%; scenario agent-cold-warm-message/mock-openai-provider
- package-manager: RSS 2809 MB; CPU 273%; scenario agent-cold-warm-message/mock-openai-provider
- runtime-management: RSS 2809 MB; CPU 273%; scenario agent-cold-warm-message/mock-openai-provider
- status-cli: RSS 432 MB; CPU 146.7%; scenario agent-cold-warm-message/mock-openai-provider
- uncategorized: RSS 31.3 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider
- mock-provider: RSS 24.9 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider

## Target Cleanup

- Runtime: `kova-local-1777813634656`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1777813634656' --json`
- Exit: 0
- Duration: 487ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: FAIL
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 3591 MB
- Max CPU: 301.3%
- Resource samples: 144
- Command tree peak RSS: 3591 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 3591 MB; CPU 301.3%
  - agent-process: RSS 3591 MB; CPU 301.3%
  - command-tree: RSS 3591 MB; CPU 301.3%
  - package-manager: RSS 2809 MB; CPU 260%
  - runtime-management: RSS 2809 MB; CPU 260%
  - status-cli: RSS 422 MB; CPU 135.8%
- Cold ready: 1004 ms
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
- OpenClaw timeline: available (36 events, 0 parse errors)
- Slowest OpenClaw span: runtimeDeps.stage 6030.67 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: runtimeDeps.stage max 6030.67ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: 6030.67 ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: unknown ms
- Agent turn: 80080 ms (true)
- Agent cold/warm: cold 80080 ms; warm 50517 ms; delta 29563 ms
- Agent pre-provider: cold 79777 ms; warm 50348 ms; delta 29429 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 78601.85 ms; max 80080 ms; pre-provider p95 78305.55 ms
- Provider evidence: 1 request(s); provider work 2 ms; pre-provider 79777 ms; post-provider 301 ms
- Agent latency diagnosis: cold provider was fast (2ms), but OpenClaw spent 79777ms before provider work.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent fixer evidence:
  - pre-provider-stall: cold provider was fast (2ms), but OpenClaw spent 79777ms before provider work.
- Agent turns:
  - cold: total 80080 ms; pre-provider 79777 ms; provider 2 ms; post-provider 301 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 79777ms; provider 2ms; post-provider 301ms; unknown 23600.89ms; source runtimeDeps.stage 56176.11ms
  - warm: total 50517 ms; pre-provider 50348 ms; provider 1 ms; post-provider 168 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 50348ms; provider 1ms; post-provider 168ms; unknown 0ms; source runtimeDeps.stage 56176.11ms
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 21260ms; RSS at 69247ms
- Diagnostic correlation:
  - CPU peaked at 301.3% around 21260ms
  - RSS peaked at 3591 MB around 69247ms
  - Slowest OpenClaw span: runtimeDeps.stage 6030.67ms
  - Runtime dependency staging max: 6030.67ms
- Top CPU process: pid 14673 260% agent-cli,agent-process,command-tree,package-manager,runtime-management node /opt/hostedtoolcache/node/24.13.0/x64/bin/pnpm install --prod --ignore-scripts --i...
- Top RSS process: pid 14673 2809 MB agent-cli,agent-process,command-tree,package-manager,runtime-management node /opt/hostedtoolcache/node/24.13.0/x64/bin/pnpm install --prod --ignore-scripts --i...

### Violations

- ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json took 80080ms, over threshold 45000ms
- ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json took 50517ms, over threshold 45000ms
- peak RSS 3591 MB exceeded threshold 900 MB
- command-tree peak RSS 3591 MB exceeded threshold 1400 MB
- package-manager peak RSS 2809 MB exceeded threshold 900 MB
- agent-cli peak RSS 3591 MB exceeded threshold 900 MB
- agent-cli max CPU 301.3% exceeded threshold 300%
- agent-process peak RSS 3591 MB exceeded threshold 900 MB
- agent-process max CPU 301.3% exceeded threshold 300%
- cold agent spent 79777ms before provider work, over threshold 10000ms
- warm agent spent 50348ms before provider work, over threshold 10000ms
- cold agent turn took 80080ms, over threshold 45000ms
- warm agent turn took 50517ms, over threshold 15000ms
- cold pre-provider latency was 79777ms, over threshold 10000ms
- warm pre-provider latency was 50348ms, over threshold 10000ms
- cold provider was fast (2ms), but OpenClaw spent 79777ms before provider work.

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1777813634656' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1777813634656' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 60226ms
  - resource samples: 62
  - peak sampled RSS: 2007.8 MB
  - max sampled CPU: 370.4%
  - role peaks: 
  - top CPU: pid 4616 304% build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/resource-samples/target-setup-1.jsonl

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 143ms
  - resource samples: 2
  - peak sampled RSS: 23.2 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 12102 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z' --runtime 'kova-local-1777813634656' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z' --runtime 'kova-local-1777813634656' --no-service --json`
  - status: 0
  - duration: 1004ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 12354 0% command-tree,runtime-management ocm start kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z ...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/resource-samples/provision-1.jsonl

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
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/port'`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 24.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 12607 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t13071...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/resource-samples/auth-setup-1.jsonl

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
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 80080ms
  - resource samples: 81
  - peak sampled RSS: 3591 MB
  - max sampled CPU: 301.3%
  - role peaks: 
  - top CPU: pid 14673 260% agent-cli,agent-process,command-tree,package-manager,runtime-management node /opt/hostedtoolcache/node/24.13.0/x64/bin/pnpm install --prod --ignore-scripts --i...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/resource-samples/cold-agent-turn-1.jsonl

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
- OpenClaw timeline events: 18
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: runtimeDeps.stage 6030.67ms
- most expensive repeated span: runtimeDeps.stage 9x 11222.35ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- slowest runtime deps stage: 6030.67ms (acpx)
- runtime deps by plugin: acpx:6032.23ms/2x, amazon-bedrock:3090.73ms/1x, runway:2093.65ms/2x
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 23ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 50517ms
  - resource samples: 52
  - peak sampled RSS: 1065.8 MB
  - max sampled CPU: 149.8%
  - role peaks: 
  - top CPU: pid 23083 147% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/resource-samples/warm-agent-turn-1.jsonl

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
- OpenClaw timeline events: 36
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: runtimeDeps.stage 6030.67ms
- most expensive repeated span: runtimeDeps.stage 18x 11238.44ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- slowest runtime deps stage: 6030.67ms (acpx)
- runtime deps by plugin: acpx:6037.61ms/4x, amazon-bedrock:3092.87ms/2x, runway:2097ms/4x
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 19ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z' -- status`
  - status: 0
  - duration: 1196ms
  - resource samples: 3
  - peak sampled RSS: 422 MB
  - max sampled CPU: 135.8%
  - role peaks: 
  - top CPU: pid 29335 133% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/resource-samples/post-agent-health-1.jsonl

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
- OpenClaw timeline events: 36
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: runtimeDeps.stage 6030.67ms
- most expensive repeated span: runtimeDeps.stage 18x 11238.44ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- slowest runtime deps stage: 6030.67ms (acpx)
- runtime deps by plugin: acpx:6037.61ms/4x, amazon-bedrock:3092.87ms/2x, runway:2097ms/4x
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 19ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 29684 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z/resource-samples/auth-cleanup-1.jsonl

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
- OpenClaw timeline events: 36
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: runtimeDeps.stage 6030.67ms
- most expensive repeated span: runtimeDeps.stage 18x 11238.44ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- slowest runtime deps stage: 6030.67ms (acpx)
- runtime deps by plugin: acpx:6037.61ms/4x, amazon-bedrock:3092.87ms/2x, runway:2097ms/4x
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 17ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t130714z' --yes`
- cleanup status: 0
- cleanup duration: 2426ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: FAIL
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 3317.6 MB
- Max CPU: 319.7%
- Resource samples: 132
- Command tree peak RSS: 3317.6 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 3317.6 MB; CPU 319.7%
  - agent-process: RSS 3317.6 MB; CPU 319.7%
  - command-tree: RSS 3317.6 MB; CPU 319.7%
  - package-manager: RSS 2497.1 MB; CPU 273%
  - runtime-management: RSS 2497.1 MB; CPU 273%
  - status-cli: RSS 399 MB; CPU 146.7%
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
- OpenClaw timeline: available (36 events, 0 parse errors)
- Slowest OpenClaw span: runtimeDeps.stage 4370.28 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: runtimeDeps.stage max 4370.28ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: 4370.28 ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: unknown ms
- Agent turn: 71311 ms (true)
- Agent cold/warm: cold 71311 ms; warm 46853 ms; delta 24458 ms
- Agent pre-provider: cold 71095 ms; warm 46641 ms; delta 24454 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 70088.1 ms; max 71311 ms; pre-provider p95 69872.3 ms
- Provider evidence: 1 request(s); provider work 2 ms; pre-provider 71095 ms; post-provider 214 ms
- Agent latency diagnosis: cold provider was fast (2ms), but OpenClaw spent 71095ms before provider work.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent fixer evidence:
  - pre-provider-stall: cold provider was fast (2ms), but OpenClaw spent 71095ms before provider work.
- Agent turns:
  - cold: total 71311 ms; pre-provider 71095 ms; provider 2 ms; post-provider 214 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 71095ms; provider 2ms; post-provider 214ms; unknown 24210.28ms; source runtimeDeps.stage 46884.72ms
  - warm: total 46853 ms; pre-provider 46641 ms; provider 1 ms; post-provider 211 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 46641ms; provider 1ms; post-provider 211ms; unknown 0ms; source runtimeDeps.stage 46884.72ms
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 17294ms; RSS at 61192ms
- Diagnostic correlation:
  - CPU peaked at 319.7% around 17294ms
  - RSS peaked at 3317.6 MB around 61192ms
  - Slowest OpenClaw span: runtimeDeps.stage 4370.28ms
  - Runtime dependency staging max: 4370.28ms
- Top CPU process: pid 32588 273% agent-cli,agent-process,command-tree,package-manager,runtime-management node /opt/hostedtoolcache/node/24.13.0/x64/bin/pnpm install --prod --ignore-scripts --i...
- Top RSS process: pid 32588 2497.1 MB agent-cli,agent-process,command-tree,package-manager,runtime-management node /opt/hostedtoolcache/node/24.13.0/x64/bin/pnpm install --prod --ignore-scripts --i...

### Violations

- ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json took 71311ms, over threshold 45000ms
- ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json took 46853ms, over threshold 45000ms
- peak RSS 3317.6 MB exceeded threshold 900 MB
- command-tree peak RSS 3317.6 MB exceeded threshold 1400 MB
- package-manager peak RSS 2497.1 MB exceeded threshold 900 MB
- agent-cli peak RSS 3317.6 MB exceeded threshold 900 MB
- agent-cli max CPU 319.7% exceeded threshold 300%
- agent-process peak RSS 3317.6 MB exceeded threshold 900 MB
- agent-process max CPU 319.7% exceeded threshold 300%
- cold agent spent 71095ms before provider work, over threshold 10000ms
- warm agent spent 46641ms before provider work, over threshold 10000ms
- cold agent turn took 71311ms, over threshold 45000ms
- warm agent turn took 46853ms, over threshold 15000ms
- cold pre-provider latency was 71095ms, over threshold 10000ms
- warm pre-provider latency was 46641ms, over threshold 10000ms
- cold provider was fast (2ms), but OpenClaw spent 71095ms before provider work.

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 139ms
  - resource samples: 2
  - peak sampled RSS: 24.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 30255 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z' --runtime 'kova-local-1777813634656' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z' --runtime 'kova-local-1777813634656' --no-service --json`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 30507 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/resource-samples/provision-1.jsonl

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
  - timeline: INFO, 1ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/port'`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 27 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 30760 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t13071...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/resource-samples/auth-setup-1.jsonl

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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 71311ms
  - resource samples: 73
  - peak sampled RSS: 3317.6 MB
  - max sampled CPU: 319.7%
  - role peaks: 
  - top CPU: pid 32588 273% agent-cli,agent-process,command-tree,package-manager,runtime-management node /opt/hostedtoolcache/node/24.13.0/x64/bin/pnpm install --prod --ignore-scripts --i...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/resource-samples/cold-agent-turn-1.jsonl

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
- OpenClaw timeline events: 18
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: runtimeDeps.stage 4370.28ms
- most expensive repeated span: runtimeDeps.stage 9x 9365.84ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- slowest runtime deps stage: 4370.28ms (acpx)
- runtime deps by plugin: acpx:4371.89ms/2x, runway:2588.26ms/2x, amazon-bedrock:2401.28ms/1x
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 18ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 46853ms
  - resource samples: 48
  - peak sampled RSS: 1008.7 MB
  - max sampled CPU: 141.8%
  - role peaks: 
  - top CPU: pid 40203 139% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/resource-samples/warm-agent-turn-1.jsonl

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
- OpenClaw timeline events: 36
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: runtimeDeps.stage 4370.28ms
- most expensive repeated span: runtimeDeps.stage 18x 9379.72ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- slowest runtime deps stage: 4370.28ms (acpx)
- runtime deps by plugin: acpx:4375.54ms/4x, runway:2591.24ms/4x, amazon-bedrock:2403.93ms/2x
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 22ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z' -- status`
  - status: 0
  - duration: 1411ms
  - resource samples: 3
  - peak sampled RSS: 399 MB
  - max sampled CPU: 146.7%
  - role peaks: 
  - top CPU: pid 47104 143% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/resource-samples/post-agent-health-1.jsonl

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
- OpenClaw timeline events: 36
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: runtimeDeps.stage 4370.28ms
- most expensive repeated span: runtimeDeps.stage 18x 9379.72ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- slowest runtime deps stage: 4370.28ms (acpx)
- runtime deps by plugin: acpx:4375.54ms/4x, runway:2591.24ms/4x, amazon-bedrock:2403.93ms/2x
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 21ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 62ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 47419 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z/resource-samples/auth-cleanup-1.jsonl

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
- OpenClaw timeline events: 36
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: runtimeDeps.stage 4370.28ms
- most expensive repeated span: runtimeDeps.stage 18x 9379.72ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- slowest runtime deps stage: 4370.28ms (acpx)
- runtime deps by plugin: acpx:4375.54ms/4x, runway:2591.24ms/4x, amazon-bedrock:2403.93ms/2x
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 21ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t130714z' --yes`
- cleanup status: 0
- cleanup duration: 2590ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: FAIL
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 3529 MB
- Max CPU: 304.2%
- Resource samples: 130
- Command tree peak RSS: 3529 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 3529 MB; CPU 304.2%
  - agent-process: RSS 3529 MB; CPU 304.2%
  - command-tree: RSS 3529 MB; CPU 304.2%
  - package-manager: RSS 2761.7 MB; CPU 258%
  - runtime-management: RSS 2761.7 MB; CPU 258%
  - status-cli: RSS 432 MB; CPU 137.8%
- Cold ready: 61 ms
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
- OpenClaw timeline: available (36 events, 0 parse errors)
- Slowest OpenClaw span: runtimeDeps.stage 4631.53 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: runtimeDeps.stage max 4631.53ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: 4631.53 ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: unknown ms
- Agent turn: 70908 ms (true)
- Agent cold/warm: cold 70908 ms; warm 45861 ms; delta 25047 ms
- Agent pre-provider: cold 70676 ms; warm 45713 ms; delta 24963 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 69655.65 ms; max 70908 ms; pre-provider p95 69427.85 ms
- Provider evidence: 1 request(s); provider work 2 ms; pre-provider 70676 ms; post-provider 230 ms
- Agent latency diagnosis: cold provider was fast (2ms), but OpenClaw spent 70676ms before provider work.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent fixer evidence:
  - pre-provider-stall: cold provider was fast (2ms), but OpenClaw spent 70676ms before provider work.
- Agent turns:
  - cold: total 70908 ms; pre-provider 70676 ms; provider 2 ms; post-provider 230 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 70676ms; provider 2ms; post-provider 230ms; unknown 25533.13ms; source runtimeDeps.stage 45142.87ms
  - warm: total 45861 ms; pre-provider 45713 ms; provider 1 ms; post-provider 147 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 45713ms; provider 1ms; post-provider 147ms; unknown 570.13ms; source runtimeDeps.stage 45142.87ms
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 18203ms; RSS at 61178ms
- Diagnostic correlation:
  - CPU peaked at 304.2% around 18203ms
  - RSS peaked at 3529 MB around 61178ms
  - Slowest OpenClaw span: runtimeDeps.stage 4631.53ms
  - Runtime dependency staging max: 4631.53ms
- Top CPU process: pid 50320 258% agent-cli,agent-process,command-tree,package-manager,runtime-management node /opt/hostedtoolcache/node/24.13.0/x64/bin/pnpm install --prod --ignore-scripts --i...
- Top RSS process: pid 50320 2761.7 MB agent-cli,agent-process,command-tree,package-manager,runtime-management node /opt/hostedtoolcache/node/24.13.0/x64/bin/pnpm install --prod --ignore-scripts --i...

### Violations

- ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json took 70908ms, over threshold 45000ms
- ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json took 45861ms, over threshold 45000ms
- peak RSS 3529 MB exceeded threshold 900 MB
- command-tree peak RSS 3529 MB exceeded threshold 1400 MB
- package-manager peak RSS 2761.7 MB exceeded threshold 900 MB
- agent-cli peak RSS 3529 MB exceeded threshold 900 MB
- agent-cli max CPU 304.2% exceeded threshold 300%
- agent-process peak RSS 3529 MB exceeded threshold 900 MB
- agent-process max CPU 304.2% exceeded threshold 300%
- cold agent spent 70676ms before provider work, over threshold 10000ms
- warm agent spent 45713ms before provider work, over threshold 10000ms
- cold agent turn took 70908ms, over threshold 45000ms
- warm agent turn took 45861ms, over threshold 15000ms
- cold pre-provider latency was 70676ms, over threshold 10000ms
- warm pre-provider latency was 45713ms, over threshold 10000ms
- cold provider was fast (2ms), but OpenClaw spent 70676ms before provider work.

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 140ms
  - resource samples: 2
  - peak sampled RSS: 21.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 47984 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z' --runtime 'kova-local-1777813634656' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z' --runtime 'kova-local-1777813634656' --no-service --json`
  - status: 0
  - duration: 61ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 48236 0% command-tree,runtime-management ocm start kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z ...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/resource-samples/provision-1.jsonl

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
  - timeline: INFO, 1ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/port'`
  - status: 0
  - duration: 73ms
  - resource samples: 2
  - peak sampled RSS: 31.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 48489 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t13071...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/resource-samples/auth-setup-1.jsonl

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

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 70908ms
  - resource samples: 72
  - peak sampled RSS: 3529 MB
  - max sampled CPU: 304.2%
  - role peaks: 
  - top CPU: pid 50320 258% agent-cli,agent-process,command-tree,package-manager,runtime-management node /opt/hostedtoolcache/node/24.13.0/x64/bin/pnpm install --prod --ignore-scripts --i...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/resource-samples/cold-agent-turn-1.jsonl

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
- OpenClaw timeline events: 18
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: runtimeDeps.stage 4631.53ms
- most expensive repeated span: runtimeDeps.stage 9x 9017.75ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- slowest runtime deps stage: 4631.53ms (acpx)
- runtime deps by plugin: acpx:4633.06ms/2x, amazon-bedrock:2976.16ms/1x, runway:1403.94ms/2x
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 22ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 45861ms
  - resource samples: 47
  - peak sampled RSS: 1155.9 MB
  - max sampled CPU: 144.8%
  - role peaks: 
  - top CPU: pid 57825 142% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/resource-samples/warm-agent-turn-1.jsonl

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
- OpenClaw timeline events: 36
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: runtimeDeps.stage 4631.53ms
- most expensive repeated span: runtimeDeps.stage 18x 9031.28ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- slowest runtime deps stage: 4631.53ms (acpx)
- runtime deps by plugin: acpx:4636.62ms/4x, amazon-bedrock:2978.17ms/2x, runway:1407.02ms/4x
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 17ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z' -- status`
  - status: 0
  - duration: 1150ms
  - resource samples: 3
  - peak sampled RSS: 432 MB
  - max sampled CPU: 137.8%
  - role peaks: 
  - top CPU: pid 63515 136% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/resource-samples/post-agent-health-1.jsonl

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
- OpenClaw timeline events: 36
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: runtimeDeps.stage 4631.53ms
- most expensive repeated span: runtimeDeps.stage 18x 9031.28ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- slowest runtime deps stage: 4631.53ms (acpx)
- runtime deps by plugin: acpx:4636.62ms/4x, amazon-bedrock:2978.17ms/2x, runway:1407.02ms/4x
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 18ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 63839 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T130714Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z/resource-samples/auth-cleanup-1.jsonl

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
- OpenClaw timeline events: 36
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: runtimeDeps.stage 4631.53ms
- most expensive repeated span: runtimeDeps.stage 18x 9031.28ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- slowest runtime deps stage: 4631.53ms (acpx)
- runtime deps by plugin: acpx:4636.62ms/4x, amazon-bedrock:2978.17ms/2x, runway:1407.02ms/4x
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 18ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t130714z' --yes`
- cleanup status: 0
- cleanup duration: 2184ms

