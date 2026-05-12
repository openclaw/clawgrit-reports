# Kova OpenClaw Runtime Report

Generated: 2026-05-12T06:19:07.785Z
Run ID: `kova-2026-05-12T061745Z`
Mode: execution
Platform: linux 6.5.13 (x64) · v24.13.0

## Summary

- Total scenarios: 1
- PASS: 1

## Performance

- Repeat: 1
- Groups: 1
- Unstable groups: 0
- Profiled runs: 1
- agent-cold-warm-message/mock-openai-provider: 1 sample(s); instrumented resources; peakRssMb median 769.5MB p95 769.5MB max 769.5MB; cpuPercentMax median 146.8% p95 146.8% max 146.8%; agentTurnMs median 7292ms p95 7292ms max 7292ms; coldAgentTurnMs median 7292ms p95 7292ms max 7292ms; warmAgentTurnMs median 6449ms p95 6449ms max 6449ms

## Resource Roles

- agent-cli: RSS 769.5 MB; CPU 146.8%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 769.5 MB; CPU 146.8%; scenario agent-cold-warm-message/mock-openai-provider
- command-tree: RSS 769.5 MB; CPU 146.8%; scenario agent-cold-warm-message/mock-openai-provider
- status-cli: RSS 533.8 MB; CPU 142.7%; scenario agent-cold-warm-message/mock-openai-provider
- uncategorized: RSS 26 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider
- mock-provider: RSS 23.2 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider
- runtime-management: RSS 4.5 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider

## Target Cleanup

- Runtime: `kova-local-1778566665487`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1778566665487' --json`
- Exit: 0
- Duration: 440ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 769.5 MB
- Max CPU: 146.8%
- Resource samples: 72
- Command tree peak RSS: 769.5 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 769.5 MB; CPU 146.8%
  - agent-process: RSS 769.5 MB; CPU 146.8%
  - command-tree: RSS 769.5 MB; CPU 146.8%
  - status-cli: RSS 533.8 MB; CPU 142.7%
  - uncategorized: RSS 26 MB; CPU 0%
  - mock-provider: RSS 23.2 MB; CPU 0%
- Cold ready: 1120 ms
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
- OpenClaw timeline: available (816 events, 0 parse errors)
- Slowest OpenClaw span: plugins.metadata.scan 61.69 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 61.69ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: unknown ms
- Agent turn: 7292 ms (true)
- Agent cold/warm: cold 7292 ms; warm 6449 ms; delta 843 ms
- Agent pre-provider: cold 6766 ms; warm 6028 ms; delta 738 ms
- Agent provider final: cold 3 ms; warm 1 ms
- Agent turn stats: count 2; p95 7249.85 ms; max 7292 ms; pre-provider p95 6729.1 ms
- Provider evidence: 1 request(s); provider work 3 ms; pre-provider 6766 ms; post-provider 523 ms
- Agent latency diagnosis: cold agent turn 7292ms; pre-provider 6766ms; provider 3ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 7292 ms; pre-provider 6766 ms; provider 3 ms; post-provider 523 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 6766ms; provider 3ms; post-provider 523ms; unknown 6766ms; source none
  - warm: total 6449 ms; pre-provider 6028 ms; provider 1 ms; post-provider 420 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 6028ms; provider 1ms; post-provider 420ms; unknown 6028ms; source none
- Profiling: enabled (instrumented run; CPU/RSS can include profiler and diagnostic overhead)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 8 / 8 / 8
- Node profile top function: (idle) 15119.99 ms
- Node heap top function: decode 19.5 MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 194861922
- Resource peaks: CPU at 1350ms; RSS at 6347ms
- Diagnostic correlation:
  - CPU peaked at 146.8% around 1350ms
  - RSS peaked at 769.5 MB around 6347ms
  - Top sampled CPU function: (idle) 15119.99ms
  - Top sampled heap allocation function: decode 19.5 MB
  - Slowest OpenClaw span: plugins.metadata.scan 61.69ms
- Top CPU process: pid 38280 143% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 38280 703.2 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1778566665487' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1778566665487' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 61643ms
  - resource samples: 246
  - peak sampled RSS: 7234.9 MB
  - max sampled CPU: 276.7%
  - role peaks: 
  - top CPU: pid 16206 221% build-tooling,command-tree,runtime-management [tsgo]
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/resource-samples/target-setup-1.jsonl

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 151ms
  - resource samples: 2
  - peak sampled RSS: 23.2 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 33432 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-d...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z' --runtime 'kova-local-1778566665487' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z' --runtime 'kova-local-1778566665487' --no-service --json`
  - status: 0
  - duration: 1120ms
  - resource samples: 2
  - peak sampled RSS: 4.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 33692 0% command-tree,runtime-management ocm start kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/resource-samples/provision-1.jsonl

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
- Node profile artifact bytes: 59181
- Node top CPU function: (program) 5.11ms :-1
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
  - node-profiles: PASS, 1ms, artifacts 3

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/port'`
  - status: 0
  - duration: 51ms
  - resource samples: 2
  - peak sampled RSS: 26 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 33945 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z ...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/resource-samples/auth-setup-1.jsonl

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
- Node profile artifact bytes: 98570
- Node top CPU function: (program) 10.47ms :-1
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: PASS, 1ms, artifacts 6

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 7292ms
  - resource samples: 30
  - peak sampled RSS: 768.6 MB
  - max sampled CPU: 146%
  - role peaks: 
  - top CPU: pid 34458 142% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/resource-samples/cold-agent-turn-1.jsonl

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
- Node profile artifact bytes: 80852982
- Node top CPU function: (idle) 7327.09ms :-1
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 394
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 39.76ms
- most expensive repeated span: plugins.metadata.scan 197x 3592.61ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: PASS, 29ms, artifacts 12

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 6449ms
  - resource samples: 27
  - peak sampled RSS: 769.5 MB
  - max sampled CPU: 146.8%
  - role peaks: 
  - top CPU: pid 38280 143% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/resource-samples/warm-agent-turn-1.jsonl

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
- Node profile artifact bytes: 160845966
- Node top CPU function: (idle) 13720.88ms :-1
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 788
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 39.76ms
- most expensive repeated span: plugins.metadata.scan 394x 7013.77ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 5ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: PASS, 40ms, artifacts 18

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z' -- status`
  - status: 0
  - duration: 1394ms
  - resource samples: 7
  - peak sampled RSS: 533.8 MB
  - max sampled CPU: 142.7%
  - role peaks: 
  - top CPU: pid 41630 139% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/resource-samples/post-agent-health-1.jsonl

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
- Node profile artifact bytes: 194861922
- Node top CPU function: (idle) 15119.99ms :-1
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 816
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 61.69ms
- most expensive repeated span: plugins.metadata.scan 408x 7326.66ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 4ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: PASS, 42ms, artifacts 24

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 49ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 42393 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-12T061745Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z/resource-samples/auth-cleanup-1.jsonl

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
- Node profile artifact bytes: 194861922
- Node top CPU function: (idle) 15119.99ms :-1
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 816
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 61.69ms
- most expensive repeated span: plugins.metadata.scan 408x 7326.66ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: PASS, 45ms, artifacts 24

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-12t061745z' --yes`
- cleanup status: 0
- cleanup duration: 716ms

