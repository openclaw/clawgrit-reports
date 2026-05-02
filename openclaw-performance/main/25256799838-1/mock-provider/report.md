# Kova OpenClaw Runtime Report

Generated: 2026-05-02T16:47:35.746Z
Run ID: `kova-2026-05-02T164645Z`
Mode: execution
Platform: linux 6.5.13 (x64) · v24.13.0

## Summary

- Total scenarios: 1
- BLOCKED: 1

## Failure Cards

- BLOCKED agent-cold-warm-message/mock-openai-provider: peak RSS 2455.7 MB exceeded threshold 900 MB
  - likely owner: OpenClaw
  - command: `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z' -...`
  - evidence: peakRssMb: 2455.7
  - evidence: cpuPercentMax: 369.7
  - evidence: build-tooling: 2455.7MB RSS, 369.7% CPU
  - evidence: command-tree: 2455.7MB RSS, 369.7% CPU

## Performance

- Repeat: 1
- Groups: 1
- Unstable groups: 0
- Profiled runs: 0
- agent-cold-warm-message/mock-openai-provider: 1 sample(s); peakRssMb median 2455.7MB p95 2455.7MB max 2455.7MB; cpuPercentMax median 369.7% p95 369.7% max 369.7%; resourcePeakGatewayRssMb median 0MB p95 0MB max 0MB

## Resource Roles

- build-tooling: RSS 2455.7 MB; CPU 369.7%; scenario agent-cold-warm-message/mock-openai-provider
- command-tree: RSS 2455.7 MB; CPU 369.7%; scenario agent-cold-warm-message/mock-openai-provider
- runtime-management: RSS 2455.7 MB; CPU 369.7%; scenario agent-cold-warm-message/mock-openai-provider
- runtime-staging: RSS 1643 MB; CPU 166.4%; scenario agent-cold-warm-message/mock-openai-provider
- package-manager: RSS 738 MB; CPU 196%; scenario agent-cold-warm-message/mock-openai-provider
- browser-sidecar: RSS 364.4 MB; CPU 104%; scenario agent-cold-warm-message/mock-openai-provider
- plugin-cli: RSS 281.3 MB; CPU 136%; scenario agent-cold-warm-message/mock-openai-provider
- mock-provider: RSS 24.3 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider

## Target Cleanup

- Runtime: `kova-local-1777740405277`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1777740405277' --json`
- Exit: 0
- Duration: 392ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: BLOCKED
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 2455.7 MB
- Max CPU: 369.7%
- Resource samples: 59
- Command tree peak RSS: 2455.7 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - build-tooling: RSS 2455.7 MB; CPU 369.7%
  - command-tree: RSS 2455.7 MB; CPU 369.7%
  - runtime-management: RSS 2455.7 MB; CPU 369.7%
  - runtime-staging: RSS 1643 MB; CPU 166.4%
  - package-manager: RSS 738 MB; CPU 196%
  - browser-sidecar: RSS 364.4 MB; CPU 104%
- Cold ready: 48 ms
- Warm ready: unknown ms
- Time to listening: unknown ms
- Time to health ready: unknown ms
- Readiness classification: unknown
- TCP connect max: unknown ms
- Missing dependency errors: 0
- Final gateway state: unknown
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
- Resource peaks: CPU at 2237ms; RSS at 3324ms
- Diagnostic correlation:
  - CPU peaked at 369.7% around 2237ms
  - RSS peaked at 2455.7 MB around 3324ms
- Top CPU process: pid 4321 323% build-tooling,command-tree,runtime-management [MainThread] <defunct>
- Top RSS process: pid 4321 1936.4 MB build-tooling,command-tree,runtime-management [MainThread] <defunct>

### Violations

- peak RSS 2455.7 MB exceeded threshold 900 MB

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1777740405277' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1777740405277' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 49542ms
  - resource samples: 51
  - peak sampled RSS: 2455.7 MB
  - max sampled CPU: 369.7%
  - role peaks: 
  - top CPU: pid 4321 323% build-tooling,command-tree,runtime-management [MainThread] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/resource-samples/target-setup-1.jsonl

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 137ms
  - resource samples: 2
  - peak sampled RSS: 24.3 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 10533 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Start a disposable OpenClaw gateway before wiring the model provider and sending messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z' --runtime 'kova-local-1777740405277' --json`

Evidence to capture:

- gateway port
- runtime binding
- startup readiness

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z' --runtime 'kova-local-1777740405277' --json`
  - status: 1
  - duration: 48ms
  - resource samples: 2
  - peak sampled RSS: 4.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 10785 0% command-tree,runtime-management [ocm]
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/resource-samples/provision-1.jsonl
  - stderr:

  ```text
  ocm: managed services require a usable systemctl --user session on this machine; run OpenClaw directly inside the env for now
  Run "ocm help" for usage.
  ```


Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/port'`
  - status: 1
  - duration: 42ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 11020 0% command-tree,uncategorized [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/resource-samples/auth-setup-1.jsonl
  - stderr:

  ```text
  ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z" does not exist
  Run "ocm help" for usage.
  ```


Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 39ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 11255 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T164645Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

### Cleanup

- already-absent
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z' --yes`
- cleanup status: 1
- cleanup duration: 1ms

Cleanup stderr:

  ```text
  ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t164645z" does not exist
  Run "ocm help" for usage.
  ```

