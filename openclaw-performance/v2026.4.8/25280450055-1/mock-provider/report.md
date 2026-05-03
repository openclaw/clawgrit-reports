# Kova OpenClaw Runtime Report

Generated: 2026-05-03T13:31:37.913Z
Run ID: `kova-2026-05-03T132849Z`
Mode: execution
Platform: linux 6.5.13 (x64) · v24.13.0

## Summary

- Total scenarios: 3
- FAIL: 3

## Failure Cards

- FAIL agent-cold-warm-message/mock-openai-provider: OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z' -- ...`
  - evidence: peakRssMb: 402.3
  - evidence: cpuPercentMax: 160.6
  - evidence: coldAgentTurnMs: 1767
  - evidence: No provider request happened during the agent turn.
- FAIL agent-cold-warm-message/mock-openai-provider: OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z' -- ...`
  - evidence: peakRssMb: 459.6
  - evidence: cpuPercentMax: 166.9
  - evidence: coldAgentTurnMs: 1553
  - evidence: No provider request happened during the agent turn.
- FAIL agent-cold-warm-message/mock-openai-provider: OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z' -- ...`
  - evidence: peakRssMb: 490.6
  - evidence: cpuPercentMax: 164.2
  - evidence: coldAgentTurnMs: 1285
  - evidence: No provider request happened during the agent turn.

## Performance

- Repeat: 3
- Groups: 1
- Unstable groups: 0
- Profiled runs: 0
- agent-cold-warm-message/mock-openai-provider: 3 sample(s); peakRssMb median 459.6MB p95 487.5MB max 490.6MB; cpuPercentMax median 164.2% p95 166.63% max 166.9%; agentTurnMs median 1553ms p95 1745.6ms max 1767ms; coldAgentTurnMs median 1553ms p95 1745.6ms max 1767ms; resourcePeakGatewayRssMb median 0MB p95 0MB max 0MB

## Resource Roles

- agent-cli: RSS 490.6 MB; CPU 166.9%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 490.6 MB; CPU 166.9%; scenario agent-cold-warm-message/mock-openai-provider
- command-tree: RSS 490.6 MB; CPU 166.9%; scenario agent-cold-warm-message/mock-openai-provider
- mock-provider: RSS 28.3 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider
- uncategorized: RSS 25 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider
- runtime-management: RSS 0 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider

## Target Cleanup

- Runtime: `kova-local-1777814929109`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1777814929109' --json`
- Exit: 0
- Duration: 2288ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: FAIL
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 402.3 MB
- Max CPU: 160.6%
- Resource samples: 11
- Command tree peak RSS: 402.3 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 402.3 MB; CPU 160.6%
  - agent-process: RSS 402.3 MB; CPU 160.6%
  - command-tree: RSS 402.3 MB; CPU 160.6%
  - mock-provider: RSS 28.3 MB; CPU 0%
  - uncategorized: RSS 21.9 MB; CPU 0%
  - runtime-management: RSS 0 MB; CPU 0%
- Cold ready: 1213 ms
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
- OpenClaw timeline: unavailable (0 events, 0 parse errors)
- Slowest OpenClaw span: unknown unknown ms
- Open OpenClaw spans: 0 (0 required)
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: unknown ms
- Agent turn: 1767 ms (false)
- Agent cold/warm: cold 1767 ms; warm unknown ms; delta unknown ms
- Agent pre-provider: cold unknown ms; warm unknown ms; delta unknown ms
- Agent provider final: cold unknown ms; warm unknown ms
- Agent turn stats: count 1; p95 1767 ms; max 1767 ms; pre-provider p95 unknown ms
- Provider evidence: 0 request(s); provider work unknown ms; pre-provider unknown ms; post-provider unknown ms
- Agent latency diagnosis: No provider request happened during the agent turn.
- Agent containment: process leaks 0; gateway healthy true; status works n/a
- Agent turns:
  - cold: total 1767 ms; pre-provider unknown ms; provider unknown ms; post-provider unknown ms; route unknown; status unknown; issue none; response false; leaks 0
    - breakdown: pre-provider 0ms; provider 0ms; post-provider 0ms; unknown 0ms; source missing
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1148ms; RSS at 1148ms
- Diagnostic correlation:
  - CPU peaked at 160.6% around 1148ms
  - RSS peaked at 402.3 MB around 1148ms
- Top CPU process: pid 31165 144% agent-cli,agent-process,command-tree openclaw
- Top RSS process: pid 31165 320.7 MB agent-cli,agent-process,command-tree openclaw

### Violations

- OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted
- agent message command finished without a usable assistant response
- cold agent turn did not produce the expected assistant response
- cold agent turn response did not include expected marker KOVA_AGENT_OK
- cold agent turn ran with mock auth but no mock provider request was captured
- No provider request happened during the agent turn.

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1777814929109' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1777814929109' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 151339ms
  - resource samples: 153
  - peak sampled RSS: 3167.4 MB
  - max sampled CPU: 364.3%
  - role peaks: 
  - top CPU: pid 8651 305% build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/resource-samples/target-setup-1.jsonl

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 151ms
  - resource samples: 2
  - peak sampled RSS: 28.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 30155 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z" does not exist
- collectors:
  - service: FAIL, 5ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z' --runtime 'kova-local-1777814929109' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z' --runtime 'kova-local-1777814929109' --no-service --json`
  - status: 0
  - duration: 1213ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 30407 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/resource-samples/provision-1.jsonl

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
  - timeline: INFO, 1ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/port'`
  - status: 0
  - duration: 67ms
  - resource samples: 2
  - peak sampled RSS: 21.9 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 30660 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t13284...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/resource-samples/auth-setup-1.jsonl

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
  - diagnostics: PASS, 12ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 1
  - duration: 1767ms
  - resource samples: 3
  - peak sampled RSS: 402.3 MB
  - max sampled CPU: 160.6%
  - role peaks: 
  - top CPU: pid 31165 144% agent-cli,agent-process,command-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/resource-samples/cold-agent-turn-1.jsonl
  - stderr:

  ```text
  Config invalid
  File: $OPENCLAW_HOME/.openclaw/openclaw.json
  Problem:
    - models.providers.openai.request: Unrecognized key: "allowPrivateNetwork"
  
  Run: openclaw doctor --fix
  ```


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
  - service: PASS, 10ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 67ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 31562 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z/resource-samples/auth-cleanup-1.jsonl

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
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r1-kova-2026-05-03t132849z' --yes`
- cleanup status: 0
- cleanup duration: 1235ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: FAIL
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 459.6 MB
- Max CPU: 166.9%
- Resource samples: 11
- Command tree peak RSS: 459.6 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 459.6 MB; CPU 166.9%
  - agent-process: RSS 459.6 MB; CPU 166.9%
  - command-tree: RSS 459.6 MB; CPU 166.9%
  - mock-provider: RSS 24.3 MB; CPU 0%
  - uncategorized: RSS 4.6 MB; CPU 0%
  - runtime-management: RSS 0 MB; CPU 0%
- Cold ready: 64 ms
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
- OpenClaw timeline: unavailable (0 events, 0 parse errors)
- Slowest OpenClaw span: unknown unknown ms
- Open OpenClaw spans: 0 (0 required)
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: unknown ms
- Agent turn: 1553 ms (false)
- Agent cold/warm: cold 1553 ms; warm unknown ms; delta unknown ms
- Agent pre-provider: cold unknown ms; warm unknown ms; delta unknown ms
- Agent provider final: cold unknown ms; warm unknown ms
- Agent turn stats: count 1; p95 1553 ms; max 1553 ms; pre-provider p95 unknown ms
- Provider evidence: 0 request(s); provider work unknown ms; pre-provider unknown ms; post-provider unknown ms
- Agent latency diagnosis: No provider request happened during the agent turn.
- Agent containment: process leaks 0; gateway healthy true; status works n/a
- Agent turns:
  - cold: total 1553 ms; pre-provider unknown ms; provider unknown ms; post-provider unknown ms; route unknown; status unknown; issue none; response false; leaks 0
    - breakdown: pre-provider 0ms; provider 0ms; post-provider 0ms; unknown 0ms; source missing
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1159ms; RSS at 1159ms
- Diagnostic correlation:
  - CPU peaked at 166.9% around 1159ms
  - RSS peaked at 459.6 MB around 1159ms
- Top CPU process: pid 33145 150% agent-cli,agent-process,command-tree openclaw
- Top RSS process: pid 33145 376.8 MB agent-cli,agent-process,command-tree openclaw

### Violations

- OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted
- agent message command finished without a usable assistant response
- cold agent turn did not produce the expected assistant response
- cold agent turn response did not include expected marker KOVA_AGENT_OK
- cold agent turn ran with mock auth but no mock provider request was captured
- No provider request happened during the agent turn.

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 152ms
  - resource samples: 2
  - peak sampled RSS: 24.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 32135 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z' --runtime 'kova-local-1777814929109' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z' --runtime 'kova-local-1777814929109' --no-service --json`
  - status: 0
  - duration: 64ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 32387 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/resource-samples/provision-1.jsonl

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
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/port'`
  - status: 0
  - duration: 68ms
  - resource samples: 2
  - peak sampled RSS: 4.6 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 32640 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t13284...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/resource-samples/auth-setup-1.jsonl

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
  - service: PASS, 11ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 2ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 1
  - duration: 1553ms
  - resource samples: 3
  - peak sampled RSS: 459.6 MB
  - max sampled CPU: 166.9%
  - role peaks: 
  - top CPU: pid 33145 150% agent-cli,agent-process,command-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/resource-samples/cold-agent-turn-1.jsonl
  - stderr:

  ```text
  Config invalid
  File: $OPENCLAW_HOME/.openclaw/openclaw.json
  Problem:
    - models.providers.openai.request: Unrecognized key: "allowPrivateNetwork"
  
  Run: openclaw doctor --fix
  ```


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

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 65ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 33543 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z/resource-samples/auth-cleanup-1.jsonl

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
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 1ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r2-kova-2026-05-03t132849z' --yes`
- cleanup status: 0
- cleanup duration: 1194ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: FAIL
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 490.6 MB
- Max CPU: 164.2%
- Resource samples: 11
- Command tree peak RSS: 490.6 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 490.6 MB; CPU 164.2%
  - agent-process: RSS 490.6 MB; CPU 164.2%
  - command-tree: RSS 490.6 MB; CPU 164.2%
  - uncategorized: RSS 25 MB; CPU 0%
  - mock-provider: RSS 21.3 MB; CPU 0%
  - runtime-management: RSS 0 MB; CPU 0%
- Cold ready: 78 ms
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
- OpenClaw timeline: unavailable (0 events, 0 parse errors)
- Slowest OpenClaw span: unknown unknown ms
- Open OpenClaw spans: 0 (0 required)
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: unknown ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: unknown ms
- Agent turn: 1285 ms (false)
- Agent cold/warm: cold 1285 ms; warm unknown ms; delta unknown ms
- Agent pre-provider: cold unknown ms; warm unknown ms; delta unknown ms
- Agent provider final: cold unknown ms; warm unknown ms
- Agent turn stats: count 1; p95 1285 ms; max 1285 ms; pre-provider p95 unknown ms
- Provider evidence: 0 request(s); provider work unknown ms; pre-provider unknown ms; post-provider unknown ms
- Agent latency diagnosis: No provider request happened during the agent turn.
- Agent containment: process leaks 0; gateway healthy true; status works n/a
- Agent turns:
  - cold: total 1285 ms; pre-provider unknown ms; provider unknown ms; post-provider unknown ms; route unknown; status unknown; issue none; response false; leaks 0
    - breakdown: pre-provider 0ms; provider 0ms; post-provider 0ms; unknown 0ms; source missing
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1135ms; RSS at 1135ms
- Diagnostic correlation:
  - CPU peaked at 164.2% around 1135ms
  - RSS peaked at 490.6 MB around 1135ms
- Top CPU process: pid 35126 151% agent-cli,agent-process,command-tree openclaw
- Top RSS process: pid 35126 409.1 MB agent-cli,agent-process,command-tree openclaw

### Violations

- OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted
- agent message command finished without a usable assistant response
- cold agent turn did not produce the expected assistant response
- cold agent turn response did not include expected marker KOVA_AGENT_OK
- cold agent turn ran with mock auth but no mock provider request was captured
- No provider request happened during the agent turn.

### Phases

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 157ms
  - resource samples: 2
  - peak sampled RSS: 21.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 34116 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z" does not exist
- collectors:
  - service: FAIL, 3ms, artifacts 0

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z' --runtime 'kova-local-1777814929109' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z' --runtime 'kova-local-1777814929109' --no-service --json`
  - status: 0
  - duration: 78ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 34368 0% command-tree,runtime-management [ocm]
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/resource-samples/provision-1.jsonl

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
  - service: PASS, 11ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/port'`
  - status: 0
  - duration: 88ms
  - resource samples: 2
  - peak sampled RSS: 25 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 34621 0% command-tree,uncategorized ocm env exec kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t13284...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/resource-samples/auth-setup-1.jsonl

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
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: INFO, 0ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 8ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 1
  - duration: 1285ms
  - resource samples: 3
  - peak sampled RSS: 490.6 MB
  - max sampled CPU: 164.2%
  - role peaks: 
  - top CPU: pid 35126 151% agent-cli,agent-process,command-tree openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/resource-samples/cold-agent-turn-1.jsonl
  - stderr:

  ```text
  Config invalid
  File: $OPENCLAW_HOME/.openclaw/openclaw.json
  Problem:
    - models.providers.openai.request: Unrecognized key: "allowPrivateNetwork"
  
  Run: openclaw doctor --fix
  ```


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

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 57ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 35523 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-03T132849Z/kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z/resource-samples/auth-cleanup-1.jsonl

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
  - timeline: INFO, 1ms, artifacts 0 (OpenClaw timeline not emitted)
  - diagnostics: PASS, 7ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-r3-kova-2026-05-03t132849z' --yes`
- cleanup status: 0
- cleanup duration: 960ms

