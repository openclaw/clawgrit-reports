# Kova OpenClaw Runtime Report

Generated: 2026-07-10T06:31:31.418Z
Run ID: `kova-2026-07-10T062756Z`
Mode: execution
Platform: linux 6.6.141 (x64) · v24.13.0

## Summary

- Total scenarios: 1
- FAIL: 1

## Failure Cards

- FAIL agent-cold-warm-message/mock-openai-provider: warm provider work took 3988ms, over threshold 3000ms
  - likely owner: OpenClaw
  - evidence: resourceScope: product; resourceContract: primary-role-product-scope-v2
  - evidence: agent-cliRssMb: 862.1
  - evidence: cpuPercentMax: 150.7
  - evidence: coldAgentTurnMs: 5726

## Performance

- Repeat: 1
- Groups: 1
- Unstable groups: 0
- Profiled runs: 0
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- agent-cold-warm-message/mock-openai-provider: 1 sample(s); peakRssMb median 862.1MB p95 862.1MB max 862.1MB; cpuPercentMax median 150.7% p95 150.7% max 150.7%; agentTurnMs median 7573ms p95 7573ms max 7573ms; coldAgentTurnMs median 5726ms p95 5726ms max 5726ms; warmAgentTurnMs median 7573ms p95 7573ms max 7573ms

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 862.1 MB; CPU 150.7%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 862.1 MB; CPU 150.7%; scenario agent-cold-warm-message/mock-openai-provider
- command-tree: RSS 862.1 MB; CPU 150.7%; scenario agent-cold-warm-message/mock-openai-provider
- status-cli: RSS 637.3 MB; CPU 138.6%; scenario agent-cold-warm-message/mock-openai-provider

## Target Cleanup

- Runtime: `kova-local-1783664876070`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1783664876070' --json`
- Exit: 0
- Duration: 494ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: FAIL
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: live (env-only; provider openai)
- Live provider lane: environment-dependent; compare separately from deterministic mock baselines.
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- agent-cli RSS: 862.1 MB
- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`
- Tracked total peak RSS: 862.1 MB
- Max CPU: 150.7%
- Resource samples: 20
- Command tree peak RSS: 862.1 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - agent-cli: RSS 862.1 MB; CPU 150.7%
  - agent-process: RSS 862.1 MB; CPU 150.7%
  - command-tree: RSS 862.1 MB; CPU 150.7%
  - status-cli: RSS 637.3 MB; CPU 138.6%
- Cold ready: 873 ms
- Warm ready: unknown ms
- Time to listening: unknown ms
- Time to health ready: unknown ms
- Readiness classification: not-applicable
- Readiness reason: gateway process is not expected to be running for this phase
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
- OpenClaw timeline: available (48 events, 0 parse errors)
- Slowest OpenClaw span: plugins.metadata.scan 65.63 ms
- Open OpenClaw spans: 0 (0 required)
- Key OpenClaw spans: plugins.metadata.scan max 65.63ms open 0
- OpenClaw event-loop max: unknown ms
- OpenClaw provider request max: 3988 ms
- Structured event-loop delay: unknown ms
- Runtime deps staging: unknown ms
- Runtime deps warm reuse: unknown (cold installs 0; warm restages unknown; warm max unknown ms)
- Provider/model timing: 3988 ms
- Agent turn: 7573 ms (true)
- Agent cold/warm: cold 5726 ms; warm 7573 ms; delta 0 ms
- Agent pre-provider: cold 3662 ms; warm 3472 ms; delta 190 ms
- Agent provider final: cold 1932 ms; warm 3988 ms
- Agent turn stats: count 2; p95 7480.65 ms; max 7573 ms; pre-provider p95 3652.5 ms
- Provider evidence: 1 request(s); provider work 3988 ms; pre-provider 3472 ms; post-provider 113 ms
- Agent latency diagnosis: Provider work took 3988ms; investigate provider/mock-provider route before blaming OpenClaw pre-provider work.
- Agent containment: process leaks 0; gateway healthy true; status works true
- Agent turns:
  - cold: total 5726 ms; pre-provider 3662 ms; provider 1932 ms; post-provider 132 ms; route openai-responses; status unknown; issue unknown; response true; leaks 0
    - breakdown: pre-provider 3662ms; provider 1932ms; post-provider 132ms; unknown 3662ms; source none
  - warm: total 7573 ms; pre-provider 3472 ms; provider 3988 ms; post-provider 113 ms; route openai-responses; status unknown; issue unknown; response true; leaks 0
    - breakdown: pre-provider 3472ms; provider 3988ms; post-provider 113ms; unknown 3472ms; source none
- Profiling: off (normal user-path resource measurements)
- V8 reports / heap snapshots: 0 / 0
- Node CPU/heap/trace profiles: 0 / 0 / 0
- Node profile top function: unknown unknown ms
- Node heap top function: unknown unknown MB
- Diagnostic / heap bytes: 0 / 0
- Diagnostic reports: 0 (0 bytes)
- Node profile bytes: 0
- Resource peaks: CPU at 1152ms; RSS at 6143ms
- Diagnostic correlation:
  - CPU peaked at 150.7% around 1152ms
  - RSS peaked at 862.1 MB around 6143ms
  - Slowest OpenClaw span: plugins.metadata.scan 65.63ms
  - Provider/model timing max: 3988ms
- Top CPU process: pid 29651 146% agent-cli,agent-process,command-tree openclaw-agent
- Top RSS process: pid 30750 799 MB agent-cli,agent-process,command-tree openclaw-agent

### Violations

- warm provider work took 3988ms, over threshold 3000ms

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1783664876070' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1783664876070' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 179183ms
  - resource samples: 180
  - peak sampled RSS: 10815.9 MB
  - max sampled CPU: 350.3%
  - role peaks: 
  - top CPU: pid 24070 236% build-tooling,command-tree,runtime-management node /home/runner/_work/openclaw/openclaw/node_modules/.bin/vite build
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-2026-07-10T062756Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z/resource-samples/target-setup-1.jsonl

#### Provision Agent Env

Create a disposable OpenClaw env before wiring the model provider and sending local agent messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z' --runtime 'kova-local-1783664876070' --no-service --json`

Evidence to capture:

- gateway port
- runtime binding
- env created without service

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z' --runtime 'kova-local-1783664876070' --no-service --json`
  - status: 0
  - duration: 873ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 26793 0% command-tree,runtime-management [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-2026-07-10T062756Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z/resource-samples/provision-1.jsonl

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

Configure the disposable OpenClaw env through OpenClaw's own non-interactive onboarding/auth path using env-backed SecretRefs where applicable.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z' -- 'onboard' '--non-interactive' '--accept-risk' '--mode' 'local' '--auth-choice' 'openai-api-key' '--skip-health' '--skip-ui' '--skip-search' '--skip-skills' '--skip-channels' '--skip-bootstrap' '--no-install-daemon' '--json' '--secret-input-mode' 'ref'`

Evidence to capture:

- OpenClaw onboard command completed
- OpenClaw config references live auth env vars or selected external CLI
- live auth is environment-dependent

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z' -- 'onboard' '--non-interactive' '--accept-risk' '--mode' 'local' '--auth-choice' 'openai-api-key' '--skip-health' '--skip-ui' '--skip-search' '--skip-skills' '--skip-channels' '--skip-bootstrap' '--no-install-daemon' '--json' '--secret-input-mode' 'ref'`
  - status: 0
  - duration: 12294ms
  - resource samples: 14
  - peak sampled RSS: 1483.4 MB
  - max sampled CPU: 230.4%
  - role peaks: 
  - top CPU: pid 27711 167% command-tree,package-manager npm install
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-2026-07-10T062756Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z/resource-samples/auth-setup-1.jsonl

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
- slowest OpenClaw span: plugins.metadata.scan 63.46ms
- most expensive repeated span: plugins.metadata.scan 9x 267.69ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 9ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 2ms, artifacts 1
  - diagnostics: PASS, 11ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### State Setup After provision

Apply Kova state 'mock-openai-provider' setup after scenario phase 'provision'.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z' -- config set models.providers.openai.agentRuntime.id openclaw`

Evidence to capture:

- OpenAI provider runtime is pinned to the OpenClaw harness

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z' -- config set models.providers.openai.agentRuntime.id openclaw`
  - status: 0
  - duration: 2490ms
  - resource samples: 4
  - peak sampled RSS: 730 MB
  - max sampled CPU: 146.9%
  - role peaks: 
  - top CPU: pid 28996 145% command-tree,uncategorized openclaw-config
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-2026-07-10T062756Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z/resource-samples/state-provision-1.jsonl

Metrics:

- gateway state: disabled
- child pid: none
- gateway port: 18789
- readiness: not-ready after 0 attempt(s)
- readiness classification: not-applicable
- readiness reason: gateway process is not expected to be running for this phase
- readiness threshold/deadline: 30000ms / 90000ms
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
- OpenClaw timeline events: 26
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 64.23ms
- most expensive repeated span: plugins.metadata.scan 13x 408.33ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: unknownms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 11ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 1ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Cold Agent Turn

Send the first simple message through OpenClaw's real local embedded agent CLI command in a fresh session.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- cold command duration
- final assistant text
- mock provider request timing
- gateway health after cold turn
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 5726ms
  - resource samples: 7
  - peak sampled RSS: 759.7 MB
  - max sampled CPU: 150.7%
  - role peaks: 
  - top CPU: pid 29651 146% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-2026-07-10T062756Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z/resource-samples/cold-agent-turn-1.jsonl

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
- OpenClaw timeline events: 33
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 64.23ms
- most expensive repeated span: plugins.metadata.scan 16x 498.27ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 1932ms
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

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`

Evidence to capture:

- warm command duration
- final assistant text
- mock provider request timing
- cold/warm delta
- role resource samples

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
  - status: 0
  - duration: 7573ms
  - resource samples: 9
  - peak sampled RSS: 862.1 MB
  - max sampled CPU: 141.9%
  - role peaks: 
  - top CPU: pid 30750 140% agent-cli,agent-process,command-tree openclaw-agent
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-2026-07-10T062756Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z/resource-samples/warm-agent-turn-1.jsonl

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
- OpenClaw timeline events: 40
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 65.63ms
- most expensive repeated span: plugins.metadata.scan 19x 597.29ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 3988ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 10ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 10ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

#### Post-Agent Env Status

Verify the env remains usable after both local agent turns and capture plugin diagnostics.

Commands:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z' -- status`

Evidence to capture:

- env status
- plugin errors
- memory after agent turns

Results:

- `ocm @'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z' -- status`
  - status: 0
  - duration: 2524ms
  - resource samples: 4
  - peak sampled RSS: 637.3 MB
  - max sampled CPU: 138.6%
  - role peaks: 
  - top CPU: pid 31962 136% command-tree,status-cli openclaw
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-2026-07-10T062756Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z/resource-samples/post-agent-health-1.jsonl

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
- OpenClaw timeline events: 48
- OpenClaw timeline parse errors: 0
- slowest OpenClaw span: plugins.metadata.scan 65.63ms
- most expensive repeated span: plugins.metadata.scan 23x 709.6ms
- OpenClaw event-loop max: unknownms
- OpenClaw provider request max: 3988ms
- OpenClaw child process failures: 0
- collectors:
  - service: PASS, 8ms, artifacts 0
  - readiness: INFO, 0ms, artifacts 0
  - logs: FAIL, 3ms, artifacts 1
  - openclaw-diagnostics: INFO, 0ms, artifacts 0 (structured diagnostics unavailable; using log-pattern fallback)
  - timeline: PASS, 0ms, artifacts 1
  - diagnostics: PASS, 9ms, artifacts 0
  - node-profiles: INFO, 0ms, artifacts 0 (node profile artifacts not emitted)

### Cleanup

- destroyed
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-07-10t062756z' --yes`
- cleanup status: 0
- cleanup duration: 1223ms

