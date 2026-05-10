# Kova OpenClaw Runtime Report

Generated: 2026-05-10T06:19:09.823Z
Run ID: `kova-2026-05-10T061707Z`
Mode: execution
Platform: linux 6.5.13 (x64) · v24.13.0

## Summary

- Total scenarios: 3
- PASS: 3

## Performance

- Repeat: 3
- Groups: 1
- Unstable groups: 1
- Profiled runs: 0
- agent-cold-warm-message/mock-openai-provider: 3 sample(s); peakRssMb median 840.3MB p95 846.15MB max 846.8MB; cpuPercentMax median 147.9% p95 150.6% max 150.9%; agentTurnMs median 4627ms p95 4790.8ms max 4809ms; coldAgentTurnMs median 4581ms p95 4622.4ms max 4627ms; warmAgentTurnMs median 4467ms p95 4774.8ms max 4809ms

## Resource Roles

- agent-cli: RSS 846.8 MB; CPU 150.9%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 846.8 MB; CPU 150.9%; scenario agent-cold-warm-message/mock-openai-provider
- command-tree: RSS 846.8 MB; CPU 150.9%; scenario agent-cold-warm-message/mock-openai-provider
- status-cli: RSS 440.9 MB; CPU 137.9%; scenario agent-cold-warm-message/mock-openai-provider
- uncategorized: RSS 28 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider
- mock-provider: RSS 22.2 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider
- runtime-management: RSS 4.6 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider

## Target Cleanup

- Runtime: `kova-local-1778393827644`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1778393827644' --json`
- Exit: 0
- Duration: 666ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 846.8 MB
- Max CPU: 147.9%
- Resource samples: 22
- Command tree peak RSS: 846.8 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 846.8 MB; CPU 147.9%
  - agent-process: RSS 846.8 MB; CPU 147.9%
  - command-tree: RSS 846.8 MB; CPU 147.9%
  - uncategorized: RSS 25.7 MB; CPU 0%
  - mock-provider: RSS 22.2 MB; CPU 0%
  - status-cli: RSS 4.6 MB; CPU 0%
- Cold ready: 1086 ms
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
- Slowest OpenClaw span: plugins.metadata.scan 34.17 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 34.17ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: unknown ms
- Agent turn: 4627 ms (true)
- Agent cold/warm: cold 4627 ms; warm 4312 ms; delta 315 ms
- Agent pre-provider: cold 4383 ms; warm 4106 ms; delta 277 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 4611.25 ms; max 4627 ms; pre-provider p95 4369.15 ms
- Provider evidence: 1 request(s); provider work 2 ms; pre-provider 4383 ms; post-provider 242 ms
- Agent latency diagnosis: cold agent turn 4627ms; pre-provider 4383ms; provider 2ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 4627 ms; pre-provider 4383 ms; provider 2 ms; post-provider 242 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 4383ms; provider 2ms; post-provider 242ms; unknown 4383ms; source none
  - warm: total 4312 ms; pre-provider 4106 ms; provider 1 ms; post-provider 205 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 4106ms; provider 1ms; post-provider 205ms; unknown 4106ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1105ms; RSS at 4113ms
- Diagnostic correlation:
  - CPU peaked at 147.9% around 1105ms
  - RSS peaked at 846.8 MB around 4113ms
  - Slowest OpenClaw span: plugins.metadata.scan 34.17ms
- Top CPU process: pid 16249 146% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 16249 785.8 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1778393827644' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1778393827644' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 78908ms
  - resource samples: 80
  - peak sampled RSS: 7007.5 MB
  - max sampled CPU: 336%
  - role peaks: 
  - top CPU: pid 8428 226% build-tooling,command-tree,runtime-management /home/runner/_work/openclaw/openclaw/node_modules/@typescript/native-preview-linux-x64/...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/resource-samples/target-setup-1.jsonl

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 150ms
  - resource samples: 2
  - peak sampled RSS: 22.2 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 14279 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z' --runtime 'kova-local-1778393827644' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z' --runtime 'kova-local-1778393827644' --no-service --json`
  - status: 0
  - duration: 1086ms
  - resource samples: 2
  - peak sampled RSS: 4.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 14531 0% command-tree,runtime-management ocm start kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z ...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/resource-samples/provision-1.jsonl

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

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/port'`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 25.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 14784 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t06170...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/resource-samples/auth-setup-1.jsonl

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

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 4627ms
  - resource samples: 6
  - peak sampled RSS: 639.1 MB
  - max sampled CPU: 133.9%
  - role peaks: 
  - top CPU: pid 15273 133% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 34.17ms
- most expensive repeated span: plugins.metadata.scan 80x 1556.93ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 4312ms
  - resource samples: 6
  - peak sampled RSS: 846.8 MB
  - max sampled CPU: 147.9%
  - role peaks: 
  - top CPU: pid 16249 146% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 34.17ms
- most expensive repeated span: plugins.metadata.scan 160x 3020.05ms
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
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z' -- status`
  - status: 0
  - duration: 969ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 17010 0% command-tree,status-cli ocm @kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z -- st...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 34.17ms
- most expensive repeated span: plugins.metadata.scan 169x 3195.01ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 5ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 60ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 17303 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 34.17ms
- most expensive repeated span: plugins.metadata.scan 169x 3195.01ms
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

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-10t061707z' --yes`
- cleanup status: 0
- cleanup duration: 809ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 653.5 MB
- Max CPU: 147.9%
- Resource samples: 22
- Command tree peak RSS: 653.5 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 653.5 MB; CPU 147.9%
  - agent-process: RSS 653.5 MB; CPU 147.9%
  - command-tree: RSS 653.5 MB; CPU 147.9%
  - status-cli: RSS 440.9 MB; CPU 137.9%
  - uncategorized: RSS 24.4 MB; CPU 0%
  - mock-provider: RSS 21.3 MB; CPU 0%
- Cold ready: 59 ms
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
- Slowest OpenClaw span: plugins.metadata.scan 38.99 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 38.99ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: unknown ms
- Agent turn: 4809 ms (true)
- Agent cold/warm: cold 4004 ms; warm 4809 ms; delta 0 ms
- Agent pre-provider: cold 3806 ms; warm 4600 ms; delta 0 ms
- Agent provider final: cold 1 ms; warm 2 ms
- Agent turn stats: count 2; p95 4768.75 ms; max 4809 ms; pre-provider p95 4560.3 ms
- Provider evidence: 1 request(s); provider work 2 ms; pre-provider 4600 ms; post-provider 207 ms
- Agent latency diagnosis: warm agent turn 4809ms; pre-provider 4600ms; provider 2ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 4004 ms; pre-provider 3806 ms; provider 1 ms; post-provider 197 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 3806ms; provider 1ms; post-provider 197ms; unknown 3806ms; source none
  - warm: total 4809 ms; pre-provider 4600 ms; provider 2 ms; post-provider 207 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 4600ms; provider 2ms; post-provider 207ms; unknown 4600ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1110ms; RSS at 3100ms
- Diagnostic correlation:
  - CPU peaked at 147.9% around 1110ms
  - RSS peaked at 653.5 MB around 3100ms
  - Slowest OpenClaw span: plugins.metadata.scan 38.99ms
- Top CPU process: pid 18858 146% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 18858 592.3 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 137ms
  - resource samples: 2
  - peak sampled RSS: 21.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 17876 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z" does not exist
- collectors:
  - service: FAIL, 1ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z' --runtime 'kova-local-1778393827644' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z' --runtime 'kova-local-1778393827644' --no-service --json`
  - status: 0
  - duration: 59ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 18128 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/resource-samples/provision-1.jsonl

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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/port'`
  - status: 0
  - duration: 54ms
  - resource samples: 2
  - peak sampled RSS: 24.4 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 18381 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t06170...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/resource-samples/auth-setup-1.jsonl

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

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 4004ms
  - resource samples: 5
  - peak sampled RSS: 653.5 MB
  - max sampled CPU: 147.9%
  - role peaks: 
  - top CPU: pid 18858 146% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 29.28ms
- most expensive repeated span: plugins.metadata.scan 80x 1456.18ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 4809ms
  - resource samples: 6
  - peak sampled RSS: 651.6 MB
  - max sampled CPU: 141.8%
  - role peaks: 
  - top CPU: pid 19722 140% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 38.99ms
- most expensive repeated span: plugins.metadata.scan 160x 3272.79ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z' -- status`
  - status: 0
  - duration: 1120ms
  - resource samples: 3
  - peak sampled RSS: 440.9 MB
  - max sampled CPU: 137.9%
  - role peaks: 
  - top CPU: pid 20590 136% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 38.99ms
- most expensive repeated span: plugins.metadata.scan 169x 3477.14ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 20898 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 38.99ms
- most expensive repeated span: plugins.metadata.scan 169x 3477.14ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 7ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-10t061707z' --yes`
- cleanup status: 0
- cleanup duration: 777ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: PASS
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 840.3 MB
- Max CPU: 150.9%
- Resource samples: 23
- Command tree peak RSS: 840.3 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 840.3 MB; CPU 150.9%
  - agent-process: RSS 840.3 MB; CPU 150.9%
  - command-tree: RSS 840.3 MB; CPU 150.9%
  - status-cli: RSS 426.4 MB; CPU 137.8%
  - uncategorized: RSS 28 MB; CPU 0%
  - mock-provider: RSS 20.7 MB; CPU 0%
- Cold ready: 47 ms
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
- Slowest OpenClaw span: plugins.metadata.scan 35.35 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 35.35ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: unknown ms
- Agent turn: 4581 ms (true)
- Agent cold/warm: cold 4581 ms; warm 4467 ms; delta 114 ms
- Agent pre-provider: cold 4391 ms; warm 4246 ms; delta 145 ms
- Agent provider final: cold 2 ms; warm 1 ms
- Agent turn stats: count 2; p95 4575.3 ms; max 4581 ms; pre-provider p95 4383.75 ms
- Provider evidence: 1 request(s); provider work 2 ms; pre-provider 4391 ms; post-provider 188 ms
- Agent latency diagnosis: cold agent turn 4581ms; pre-provider 4391ms; provider 2ms.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 4581 ms; pre-provider 4391 ms; provider 2 ms; post-provider 188 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 4391ms; provider 2ms; post-provider 188ms; unknown 4391ms; source none
  - warm: total 4467 ms; pre-provider 4246 ms; provider 1 ms; post-provider 220 ms; route /v1/responses; status 200; issue unknown; response true; leaks 0
    - breakdown: pre-provider 4246ms; provider 1ms; post-provider 220ms; unknown 4246ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1134ms; RSS at 4127ms
- Diagnostic correlation:
  - CPU peaked at 150.9% around 1134ms
  - RSS peaked at 840.3 MB around 4127ms
  - Slowest OpenClaw span: plugins.metadata.scan 35.35ms
- Top CPU process: pid 23436 149% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 23436 779 MB agent-cli,agent-process,command-tree openclaw-agent

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 134ms
  - resource samples: 2
  - peak sampled RSS: 20.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 21471 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z' --runtime 'kova-local-1778393827644' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z' --runtime 'kova-local-1778393827644' --no-service --json`
  - status: 0
  - duration: 47ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 21723 0% command-tree,runtime-management ocm start kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z ...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/resource-samples/provision-1.jsonl

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

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/port'`
  - status: 0
  - duration: 50ms
  - resource samples: 2
  - peak sampled RSS: 28 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 21976 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t06170...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/resource-samples/auth-setup-1.jsonl

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

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 4581ms
  - resource samples: 6
  - peak sampled RSS: 654.6 MB
  - max sampled CPU: 139.9%
  - role peaks: 
  - top CPU: pid 22446 139% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/resource-samples/cold-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 34.24ms
- most expensive repeated span: plugins.metadata.scan 80x 1604.44ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 6ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 1ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 6ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Warm Agent Turn

Send the same simple message in the same session to prove whether cold discovery/cache work disappears.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 4467ms
  - resource samples: 6
  - peak sampled RSS: 840.3 MB
  - max sampled CPU: 150.9%
  - role peaks: 
  - top CPU: pid 23436 149% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/resource-samples/warm-agent-turn-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 34.24ms
- most expensive repeated span: plugins.metadata.scan 160x 3139.69ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
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

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z' -- status`
  - status: 0
  - duration: 1122ms
  - resource samples: 3
  - peak sampled RSS: 426.4 MB
  - max sampled CPU: 137.8%
  - role peaks: 
  - top CPU: pid 24308 135% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/resource-samples/post-agent-health-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 35.35ms
- most expensive repeated span: plugins.metadata.scan 169x 3343.03ms
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
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 53ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 24610 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-10T061707Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z/resource-samples/auth-cleanup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 35.35ms
- most expensive repeated span: plugins.metadata.scan 169x 3343.03ms
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
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-10t061707z' --yes`
- cleanup status: 0
- cleanup duration: 815ms

