# Kova OpenClaw Runtime Report

Generated: 2026-05-10T06:18:29.348Z
Run ID: `kova-2026-05-10T061710Z`
Mode: execution
Platform: linux 6.5.13 (x64) · v24.13.0

## Summary

- Total scenarios: 1
- PASS: 1

## Performance

- Repeat: 1
- Groups: 1
- Unstable groups: 0
- Profiled runs: 0
- agent-cold-warm-message/mock-openai-provider: 1 sample(s); peakRssMb median 858.9MB p95 858.9MB max 858.9MB; cpuPercentMax median 147.8% p95 147.8% max 147.8%; agentTurnMs median 4117ms p95 4117ms max 4117ms; coldAgentTurnMs median 4117ms p95 4117ms max 4117ms; warmAgentTurnMs median 3962ms p95 3962ms max 3962ms

## Resource Roles

- agent-cli: RSS 858.9 MB; CPU 147.8%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 858.9 MB; CPU 147.8%; scenario agent-cold-warm-message/mock-openai-provider
- command-tree: RSS 858.9 MB; CPU 147.8%; scenario agent-cold-warm-message/mock-openai-provider
- status-cli: RSS 397 MB; CPU 100.9%; scenario agent-cold-warm-message/mock-openai-provider
- uncategorized: RSS 28.2 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider
- mock-provider: RSS 22.9 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider
- runtime-management: RSS 4.5 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider

## Target Cleanup

- Runtime: `kova-local-1778393830742`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1778393830742' --json`
- Exit: 0
- Duration: 429ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 858.9 MB
- Max CPU: 147.8%
- Resource samples: 22
- Command tree peak RSS: 858.9 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 858.9 MB; CPU 147.8%
  - agent-process: RSS 858.9 MB; CPU 147.8%
  - command-tree: RSS 858.9 MB; CPU 147.8%
  - status-cli: RSS 397 MB; CPU 100.9%
  - uncategorized: RSS 28.2 MB; CPU 0%
  - mock-provider: RSS 22.9 MB; CPU 0%
- Cold ready: 857 ms
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
- OpenClaw timeline: available (338 events, 0 parse errors)
- Slowest OpenClaw span: plugins.metadata.scan 41.09 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 41.09ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: unknown ms
- Agent turn: 4117 ms (true)
- Agent cold/warm: cold 4117 ms; warm 3962 ms; delta 155 ms
- Agent pre-provider: cold 3848 ms; warm 3785 ms; delta 63 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 4109.25 ms; max 4117 ms; pre-provider p95 3844.85 ms
- Provider evidence: 1 request(s); provider work 2 ms; pre-provider 3848 ms; post-provider 267 ms
- Agent latency diagnosis: cold agent turn 4117ms; pre-provider 3848ms; provider 2ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 4117 ms; pre-provider 3848 ms; provider 2 ms; post-provider 267 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 3848ms; provider 2ms; post-provider 267ms; unknown 3848ms; source none
  - warm: total 3962 ms; pre-provider 3785 ms; provider 1 ms; post-provider 176 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 3785ms; provider 1ms; post-provider 176ms; unknown 3785ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1115ms; RSS at 3115ms
- Diagnostic correlation:
  - CPU peaked at 147.8% around 1115ms
  - RSS peaked at 858.9 MB around 3115ms
  - Slowest OpenClaw span: plugins.metadata.scan 41.09ms
- Top CPU process: pid 14517 146% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 14517 797.7 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1778393830742' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1778393830742' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 64098ms
  - resource samples: 65
  - peak sampled RSS: 7033.5 MB
  - max sampled CPU: 272.9%
  - role peaks: 
  - top CPU: pid 7642 213% build-tooling,command-tree,runtime-management /home/runner/_work/openclaw/openclaw/node_modules/@typescript/native-preview-linux-x64/...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/resource-samples/target-setup-1.jsonl

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 137ms
  - resource samples: 2
  - peak sampled RSS: 22.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 12564 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-g...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z' --runtime 'kova-local-1778393830742' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z' --runtime 'kova-local-1778393830742' --no-service --json`
  - status: 0
  - duration: 857ms
  - resource samples: 2
  - peak sampled RSS: 4.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 12816 0% command-tree,runtime-management ocm start kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/resource-samples/provision-1.jsonl

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
  - service: PASS, 5ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/port'`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 28.2 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 13069 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z ...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/resource-samples/auth-setup-1.jsonl

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
  - service: PASS, 5ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 4117ms
  - resource samples: 6
  - peak sampled RSS: 656.8 MB
  - max sampled CPU: 130.9%
  - role peaks: 
  - top CPU: pid 13539 130% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/resource-samples/cold-agent-turn-1.jsonl

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
- OpenClaw timeline events: 160
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 31.76ms
- most expensive repeated span: plugins.metadata.scan 80x 1321.51ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 3962ms
  - resource samples: 5
  - peak sampled RSS: 858.9 MB
  - max sampled CPU: 147.8%
  - role peaks: 
  - top CPU: pid 14517 146% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/resource-samples/warm-agent-turn-1.jsonl

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
- OpenClaw timeline events: 320
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 32.65ms
- most expensive repeated span: plugins.metadata.scan 160x 2641.27ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 5ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z' -- status`
  - status: 0
  - duration: 1328ms
  - resource samples: 3
  - peak sampled RSS: 397 MB
  - max sampled CPU: 100.9%
  - role peaks: 
  - top CPU: pid 15268 99% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/resource-samples/post-agent-health-1.jsonl

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
- OpenClaw timeline events: 338
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 41.09ms
- most expensive repeated span: plugins.metadata.scan 169x 2824.67ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 55ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 15585 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-gpt54/artifacts/kova-2026-05-10T061710Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z/resource-samples/auth-cleanup-1.jsonl

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
- OpenClaw timeline events: 338
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 41.09ms
- most expensive repeated span: plugins.metadata.scan 169x 2824.67ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 5ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-10t061710z' --yes`
- cleanup status: 0
- cleanup duration: 791ms

