# OpenClaw Source Performance

Generated: 2026-07-24T00:59:00.755Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5928.7ms | 5945.4ms | 5928.7ms | 2969.6ms | 5840.3ms | 43.2ms | 988.2MB | 1.222 |
| skipChannels | gateway, skip channels | 2898.2ms | 2964.9ms | 2897.8ms | 2826.1ms | 2866.1ms | 40.9ms | 775.7MB | 1.388 |
| oneInternalHook | gateway, one configured internal hook | 4385.4ms | 4442.4ms | 4385.2ms | 4316.9ms | 4354.0ms | 41.4ms | 947.9MB | 1.368 |
| allInternalHooks | gateway, all internal hooks | 6770.5ms | 7003.0ms | 6770.5ms | 4331.8ms | 4376.5ms | 45.0ms | 963.7MB | 1.285 |
| fiftyPlugins | gateway, 50 manifest plugins | 8979.5ms | 9720.4ms | 8979.5ms | 4601.4ms | 4691.6ms | 43.9ms | 1145.0MB | 1.244 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8385.7ms | 9322.2ms | 8385.7ms | 3965.0ms | 4061.3ms | 43.7ms | 1129.5MB | 1.214 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 537.6MB | 491.2MB | ok |
| workboard | 526.7MB | 480.2MB | ok |
| zoom-meetings | 524.6MB | 478.1MB | ok |
| codex | 517.5MB | 471.0MB | ok |
| memory-lancedb | 510.2MB | 463.7MB | ok |
| migrate-hermes | 506.9MB | 460.4MB | ok |
| llm-task | 505.9MB | 459.4MB | ok |
| anthropic | 505.8MB | 459.4MB | ok |
| active-memory | 505.5MB | 459.1MB | ok |
| teams-meetings | 503.5MB | 457.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3707.4ms | 3730.5ms |
| default | post-ready.agent-runtime-plugins.total | 3688.8ms | 3710.2ms |
| default | post-attach.update-check.total | 3686.3ms | 3707.8ms |
| default | post-attach.update-sentinel.total | 3678.4ms | 3699.9ms |
| default | sidecars.restart-sentinel.total | 3677.4ms | 3699.0ms |
| skipChannels | sidecars.internal-hooks.total | 894.5ms | 900.7ms |
| skipChannels | post-attach.update-check.total | 832.5ms | 837.0ms |
| skipChannels | ready.total | 817.6ms | 822.0ms |
| skipChannels | runtime.post-attach.total | 816.2ms | 820.7ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 816.1ms | 829.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3316.9ms | 3338.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2652.9ms | 2664.0ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2627.2ms | 2638.0ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2626.4ms | 2637.1ms |
| oneInternalHook | memory.ready.rssMb | 903.1ms | 937.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3285.7ms | 3522.9ms |
| allInternalHooks | sidecars.session-locks.total | 3136.8ms | 3154.8ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3135.2ms | 3153.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 3130.8ms | 3148.7ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3129.8ms | 3147.8ms |
| fiftyPlugins | sidecars.session-locks.total | 5269.6ms | 5950.7ms |
| fiftyPlugins | post-ready.maintenance.total | 5147.1ms | 5853.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5099.9ms | 5816.4ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4876.6ms | 5586.7ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4875.5ms | 5585.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4972.5ms | 5466.6ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4879.3ms | 5368.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4841.5ms | 5329.6ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4638.7ms | 5078.2ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4637.8ms | 5077.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10334.0ms | 0.000 | 2494.0MB | 956.5MB | -1537.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9523.0ms | 0.105 | 803.7MB | 1030.8MB | 227.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9609.0ms | 0.104 | 840.7MB | 1047.0MB | 206.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3718.3ms | 3823.8ms | 61.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 877.5ms | 924.7ms | 61.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 75.4ms |

## Observations

No data.

