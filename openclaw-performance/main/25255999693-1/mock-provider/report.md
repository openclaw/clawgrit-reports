# Kova OpenClaw Runtime Report

Generated: 2026-05-02T16:05:59.975Z
Run ID: `kova-2026-05-02T160513Z`
Mode: execution
Platform: linux 6.5.13 (x64) · v24.13.0

## Summary

- Total scenarios: 1
- BLOCKED: 1

## Failure Cards

- BLOCKED agent-cold-warm-message/mock-openai-provider: peak RSS 2381 MB exceeded threshold 900 MB
  - likely owner: OpenClaw
  - command: `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z' -...`
  - evidence: peakRssMb: 2381
  - evidence: cpuPercentMax: 362.4
  - evidence: build-tooling: 2381MB RSS, 362.4% CPU
  - evidence: command-tree: 2381MB RSS, 362.4% CPU

## Performance

- Repeat: 1
- Groups: 1
- Unstable groups: 0
- Profiled runs: 0
- agent-cold-warm-message/mock-openai-provider: 1 sample(s); peakRssMb median 2381MB p95 2381MB max 2381MB; cpuPercentMax median 362.4% p95 362.4% max 362.4%; resourcePeakGatewayRssMb median 0MB p95 0MB max 0MB

## Resource Roles

- build-tooling: RSS 2381 MB; CPU 362.4%; scenario agent-cold-warm-message/mock-openai-provider
- command-tree: RSS 2381 MB; CPU 362.4%; scenario agent-cold-warm-message/mock-openai-provider
- runtime-management: RSS 2381 MB; CPU 362.4%; scenario agent-cold-warm-message/mock-openai-provider
- runtime-staging: RSS 1309.3 MB; CPU 152.4%; scenario agent-cold-warm-message/mock-openai-provider
- package-manager: RSS 795.6 MB; CPU 203%; scenario agent-cold-warm-message/mock-openai-provider
- browser-sidecar: RSS 375 MB; CPU 100%; scenario agent-cold-warm-message/mock-openai-provider
- plugin-cli: RSS 321.9 MB; CPU 142%; scenario agent-cold-warm-message/mock-openai-provider
- mock-provider: RSS 24.7 MB; CPU 0%; scenario agent-cold-warm-message/mock-openai-provider

## Target Cleanup

- Runtime: `kova-local-1777737913756`
- Result: removed
- Command: `ocm runtime remove 'kova-local-1777737913756' --json`
- Exit: 0
- Duration: 390ms

## Agent CLI Local Cold/Warm Message

- Scenario: `agent-cold-warm-message`
- Result: BLOCKED
- OpenClaw target: `local-build:/home/runner/_work/openclaw/openclaw`
- State: `mock-openai-provider` (Mock OpenAI Provider)
- Auth: mock (default-mock; provider openai)
- Mock provider mode: normal
- Harness env: `kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z`
- Likely owner on failure: OpenClaw
- Objective: Send cold and warm simple messages through `openclaw agent --local`, verify mock-provider responses, and attribute latency before, during, and after provider work.
- Peak RSS: 2381 MB
- Max CPU: 362.4%
- Resource samples: 55
- Command tree peak RSS: 2381 MB
- Gateway peak RSS: 0 MB
- Resource by role:
  - build-tooling: RSS 2381 MB; CPU 362.4%
  - command-tree: RSS 2381 MB; CPU 362.4%
  - runtime-management: RSS 2381 MB; CPU 362.4%
  - runtime-staging: RSS 1309.3 MB; CPU 152.4%
  - package-manager: RSS 795.6 MB; CPU 203%
  - browser-sidecar: RSS 375 MB; CPU 100%
- Cold ready: 44 ms
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
- Resource peaks: CPU at 2125ms; RSS at 3133ms
- Diagnostic correlation:
  - CPU peaked at 362.4% around 2125ms
  - RSS peaked at 2381 MB around 3133ms
- Top CPU process: pid 4325 318% build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean
- Top RSS process: pid 4325 1862.6 MB build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean

### Violations

- peak RSS 2381 MB exceeded threshold 900 MB

### Phases

#### Target Runtime Setup

Prepare the target OpenClaw runtime selector for the scenario.

Commands:

- `ocm runtime build-local 'kova-local-1777737913756' --repo '/home/runner/_work/openclaw/openclaw' --force`

Results:

- `ocm runtime build-local 'kova-local-1777737913756' --repo '/home/runner/_work/openclaw/openclaw' --force`
  - status: 0
  - duration: 45304ms
  - resource samples: 47
  - peak sampled RSS: 2381 MB
  - max sampled CPU: 362.4%
  - role peaks: 
  - top CPU: pid 4325 318% build-tooling,command-tree,runtime-management node ./node_modules/.bin/tsdown --config-loader unrun --logLevel warn --no-clean
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/resource-samples/target-setup-1.jsonl

#### Auth Prepare

Start Kova's deterministic mock provider for the disposable OpenClaw env.

Commands:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/server.log' >&2; exit 1`

Evidence to capture:

- mock provider port
- mock provider request log
- mock provider behavior mode
- mock provider health

Results:

- `mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai'; node '/home/runner/_work/_temp/kova-src/support/mock-openai-server.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/port' '--request-log' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/requests.jsonl' '--marker' 'KOVA_AGENT_OK' '--mode' 'normal' >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/server.log' 2>&1 & echo $! >'/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/pid'; for i in $(seq 1 100); do test -s '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/port' && node -e 'fetch("http://127.0.0.1:"+process.argv[1]+"/health").then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))' "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/port')" && exit 0; sleep 0.1; done; cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/server.log' >&2; exit 1`
  - status: 0
  - duration: 135ms
  - resource samples: 2
  - peak sampled RSS: 24.7 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 10053 0% command-tree,mock-provider /bin/bash -c mkdir -p '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-p...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/resource-samples/auth-prepare-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Provision Agent Env

Start a disposable OpenClaw gateway before wiring the model provider and sending messages.

Commands:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z' --runtime 'kova-local-1777737913756' --json`

Evidence to capture:

- gateway port
- runtime binding
- startup readiness

Results:

- `ocm start 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z' --runtime 'kova-local-1777737913756' --json`
  - status: 1
  - duration: 44ms
  - resource samples: 2
  - peak sampled RSS: 4.5 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 10305 0% command-tree,runtime-management ocm start kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z --r...
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/resource-samples/provision-1.jsonl
  - stderr:

  ```text
  ocm: managed services require a usable systemctl --user session on this machine; run OpenClaw directly inside the env for now
  Run "ocm help" for usage.
  ```


Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Auth Setup

Configure the disposable OpenClaw env with Kova's mock provider auth.

Commands:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/port'`

Evidence to capture:

- OpenClaw config points to mock provider
- default agent model is openai/gpt-5.5

Results:

- `ocm env exec 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z' -- 'node' '/home/runner/_work/_temp/kova-src/support/configure-openclaw-mock-auth.mjs' '--port-file' '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/port'`
  - status: 1
  - duration: 39ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 10540 0% command-tree,uncategorized [ocm] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/resource-samples/auth-setup-1.jsonl
  - stderr:

  ```text
  ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z" does not exist
  Run "ocm help" for usage.
  ```


Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z" does not exist
- collectors:
  - service: FAIL, 2ms, artifacts 0

#### Auth Cleanup

Stop Kova's deterministic mock provider.

Commands:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/pid')" 2>/dev/null || true; fi`

Evidence to capture:

- mock provider stopped

Results:

- `if test -f '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/pid'; then kill "$(cat '/home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/mock-openai/pid')" 2>/dev/null || true; fi`
  - status: 0
  - duration: 39ms
  - resource samples: 2
  - peak sampled RSS: 0 MB
  - max sampled CPU: 0%
  - role peaks: 
  - top CPU: pid 10775 0% command-tree,uncategorized [bash] <defunct>
  - resource artifact: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-2026-05-02T160513Z/kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z/resource-samples/auth-cleanup-1.jsonl

Metrics:

- unavailable: ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z" does not exist
- collectors:
  - service: FAIL, 1ms, artifacts 0

### Cleanup

- already-absent
- cleanup command: `ocm env destroy 'kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z' --yes`
- cleanup status: 1
- cleanup duration: 2ms

Cleanup stderr:

  ```text
  ocm: environment "kova-agent-cold-warm-message-mock-openai-provider-kova-2026-05-02t160513z" does not exist
  Run "ocm help" for usage.
  ```

