# Kova OpenClaw Runtime Report

Generated: 2026-05-06T06:13:54.059Z
Run ID: `kova-2026-05-06T061227Z`
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
- agent-cold-warm-message/mock-openai-provider: 1 sample(s); instrumented resources; peakRssMb median 796.2MB p95 796.2MB max 796.2MB; cpuPercentMax median 157.2% p95 157.2% max 157.2%; agentTurnMs median 5702ms p95 5702ms max 5702ms; coldAgentTurnMs median 5702ms p95 5702ms max 5702ms; warmAgentTurnMs median 5358ms p95 5358ms max 5358ms

## Resource Roles

- agent-cli: RSS 796.2 MB; CPU 150.2%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 796.2 MB; CPU 150.2%; scenario agent-cold-warm-message/mock-openai-provider
- command-tree: RSS 796.2 MB; CPU 157.2%; scenario agent-cold-warm-message/mock-openai-provider
- status-cli: RSS 696.2 MB; CPU 157.2%; scenario agent-cold-warm-message/mock-openai-provider
- uncategorized: RSS 24.5 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider
- mock-provider: RSS 22.8 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider
- runtime-management: RSS 4.4 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider

## Target Cleanup

- Runtime: `kova-local-1778047947645`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1778047947645' --json`
- Exit: 0
- Duration: 615ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 796.2 MB
- Max CPU: 157.2%
- Resource samples: 64
- Command tree peak RSS: 796.2 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 796.2 MB; CPU 150.2%
  - agent-process: RSS 796.2 MB; CPU 150.2%
  - command-tree: RSS 796.2 MB; CPU 157.2%
  - status-cli: RSS 696.2 MB; CPU 157.2%
  - uncategorized: RSS 24.5 MB; CPU 0%
  - mock-provider: RSS 22.8 MB; CPU 0%
- Cold ready: 5012 ms
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
- OpenClaw timeline: available (298 events, 0 parse errors)
- Slowest OpenClaw span: plugins.metadata.scan 50.65 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 50.65ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: unknown ms
- Agent turn: 5702 ms (true)
- Agent cold/warm: cold 5702 ms; warm 5358 ms; delta 344 ms
- Agent pre-provider: cold 5105 ms; warm 4843 ms; delta 262 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 5684.8 ms; max 5702 ms; pre-provider p95 5091.9 ms
- Provider evidence: 1 request(s); provider work 2 ms; pre-provider 5105 ms; post-provider 595 ms
- Agent latency diagnosis: cold agent turn 5702ms; pre-provider 5105ms; provider 2ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 5702 ms; pre-provider 5105 ms; provider 2 ms; post-provider 595 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 5105ms; provider 2ms; post-provider 595ms; unknown 5105ms; source none
  - warm: total 5358 ms; pre-provider 4843 ms; provider 1 ms; post-provider 514 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 4843ms; provider 1ms; post-provider 514ms; unknown 4843ms; source none
- Profiling: enabled (instrumented run; CPU/RSS can include profiler and diagnostic overhead)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 8 / 8 / 8
- Node profile top function: (idle) 13094.11 ms
- Node heap top function: decode 22.6 MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 182287297
- Resource peaks: CPU at 869ms; RSS at 5131ms
- Diagnostic correlation:
  - CPU peaked at 157.2% around 869ms
  - RSS peaked at 796.2 MB around 5131ms
  - Top sampled CPU function: (idle) 13094.11ms
  - Top sampled heap allocation function: decode 22.6 MB
  - Slowest OpenClaw span: plugins.metadata.scan 50.65ms
- Top CPU process: pid 33449 151% command-tree,status-cli openclaw
- Top RSS process: pid 30571 730.1 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1778047947645' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1778047947645' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 46170ms
  - resource samples: 186
  - peak sampled RSS: 2509 MB
  - max sampled CPU: 356.9%
  - role peaks: 
  - top CPU: pid 5365 302% build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/resource-samples/target-setup-1.jsonl

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 164ms
  - resource samples: 2
  - peak sampled RSS: 22.8 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 26426 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-d...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z' --runtime 'kova-local-1778047947645' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z' --runtime 'kova-local-1778047947645' --no-service --json`
  - status: 0
  - duration: 5012ms
  - resource samples: 2
  - peak sampled RSS: 4.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 26686 0% command-tree,runtime-management ocm start kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/resource-samples/provision-1.jsonl

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
- Node profile artifact bytes: 66772
- Node top CPU function: (program) 6.33ms :-1
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
  - timeline: INFO, 1ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: PASS, 1ms, artifacts 3

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/port'`
  - status: 0
  - duration: 5012ms
  - resource samples: 2
  - peak sampled RSS: 24.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 26944 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z ...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/resource-samples/auth-setup-1.jsonl

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
- Node profile artifact bytes: 105927
- Node top CPU function: (program) 11.66ms :-1
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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: PASS, 1ms, artifacts 6

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 5702ms
  - resource samples: 24
  - peak sampled RSS: 792.7 MB
  - max sampled CPU: 144.7%
  - role peaks: 
  - top CPU: pid 27458 139% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/resource-samples/cold-agent-turn-1.jsonl

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
- Node profile artifact bytes: 69154900
- Node top CPU function: (idle) 5752.51ms :-1
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 140
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 37.3ms
- most expensive repeated span: plugins.metadata.scan 70x 1410.27ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: PASS, 29ms, artifacts 12

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 5358ms
  - resource samples: 23
  - peak sampled RSS: 796.2 MB
  - max sampled CPU: 150.2%
  - role peaks: 
  - top CPU: pid 30571 144% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/resource-samples/warm-agent-turn-1.jsonl

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
- Node profile artifact bytes: 140143131
- Node top CPU function: (idle) 11061.86ms :-1
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 280
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 42.67ms
- most expensive repeated span: plugins.metadata.scan 140x 2936.9ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: PASS, 49ms, artifacts 18

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z' -- status`
  - status: 0
  - duration: 2051ms
  - resource samples: 9
  - peak sampled RSS: 696.2 MB
  - max sampled CPU: 157.2%
  - role peaks: 
  - top CPU: pid 33449 151% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/resource-samples/post-agent-health-1.jsonl

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
- Node profile artifact bytes: 182287297
- Node top CPU function: (idle) 13094.11ms :-1
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 298
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 50.65ms
- most expensive repeated span: plugins.metadata.scan 149x 3166.6ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: PASS, 50ms, artifacts 24

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 49ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 34448 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-2026-05-06T061227Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z/resource-samples/auth-cleanup-1.jsonl

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
- Node profile artifact bytes: 182287297
- Node top CPU function: (idle) 13094.11ms :-1
- OpenClaw diagnostics source: log-pattern-fallback
- OpenClaw diagnostic events: 0
- plugin metadata scans: 0
- config normalizations: 0
- runtime deps staging: unknownms
- event-loop delay: unknownms
- provider/model timing: unknownms
- OpenClaw timeline: available
- OpenClaw timeline events: 298
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 50.65ms
- most expensive repeated span: plugins.metadata.scan 149x 3166.6ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: PASS, 53ms, artifacts 24

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-06t061227z' --yes`
- cleanup status: 0
- cleanup duration: 796ms

