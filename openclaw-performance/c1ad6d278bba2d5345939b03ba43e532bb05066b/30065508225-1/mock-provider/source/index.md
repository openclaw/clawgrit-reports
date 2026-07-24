# OpenClaw Source Performance

Generated: 2026-07-24T04:03:31.070Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6381.5ms | 6454.7ms | 6327.9ms | 3268.0ms | 6318.9ms | 45.8ms | 998.5MB | 1.264 |
| skipChannels | gateway, skip channels | 6587.9ms | 6965.8ms | 6587.8ms | 3361.6ms | 3407.1ms | 45.9ms | 930.5MB | 1.319 |
| oneInternalHook | gateway, one configured internal hook | 6574.4ms | 6683.4ms | 6574.4ms | 4366.3ms | 4427.2ms | 42.2ms | 971.7MB | 1.221 |
| allInternalHooks | gateway, all internal hooks | 4324.5ms | 4438.2ms | 4324.5ms | 4230.5ms | 4278.9ms | 42.5ms | 935.9MB | 1.352 |
| fiftyPlugins | gateway, 50 manifest plugins | 8274.2ms | 8532.1ms | 8298.5ms | 4190.4ms | 4268.3ms | 44.0ms | 1131.7MB | 1.228 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8150.8ms | 8869.6ms | 8150.8ms | 3904.0ms | 3994.5ms | 42.4ms | 1158.0MB | 1.244 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 534.1MB | 487.7MB | ok |
| llm-task | 509.9MB | 463.4MB | ok |
| memory-lancedb | 509.9MB | 463.4MB | ok |
| codex | 506.5MB | 460.0MB | ok |
| anthropic | 505.5MB | 459.0MB | ok |
| workboard | 505.4MB | 459.0MB | ok |
| google-meet | 505.0MB | 458.6MB | ok |
| voice-call | 504.9MB | 458.5MB | ok |
| teams-meetings | 504.2MB | 457.8MB | ok |
| migrate-hermes | 503.8MB | 457.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4051.4ms | 4068.9ms |
| default | post-ready.agent-runtime-plugins.total | 4038.6ms | 4049.3ms |
| default | post-attach.update-check.total | 4035.6ms | 4046.3ms |
| default | post-attach.update-sentinel.total | 4026.6ms | 4037.3ms |
| default | sidecars.restart-sentinel.total | 4025.4ms | 4036.1ms |
| skipChannels | sidecars.session-locks.total | 4358.1ms | 4499.2ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4356.3ms | 4497.2ms |
| skipChannels | post-attach.update-sentinel.total | 4350.9ms | 4492.5ms |
| skipChannels | sidecars.restart-sentinel.total | 4349.7ms | 4491.3ms |
| skipChannels | sidecars.ready.total | 4328.3ms | 4473.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3341.3ms | 3356.9ms |
| oneInternalHook | sidecars.session-locks.total | 2934.0ms | 3004.0ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 2932.5ms | 3002.6ms |
| oneInternalHook | post-attach.update-sentinel.total | 2928.3ms | 2998.1ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2927.4ms | 2997.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3220.2ms | 3350.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2579.9ms | 2639.4ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2554.6ms | 2609.2ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2553.7ms | 2608.1ms |
| allInternalHooks | memory.ready.rssMb | 898.3ms | 921.2ms |
| fiftyPlugins | sidecars.session-locks.total | 4849.4ms | 5064.6ms |
| fiftyPlugins | post-ready.maintenance.total | 4755.4ms | 4965.6ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4719.4ms | 4916.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4515.8ms | 4695.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4514.9ms | 4694.4ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4779.3ms | 5297.1ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4687.9ms | 5191.8ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4650.9ms | 5146.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4439.5ms | 4859.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4438.5ms | 4858.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10141.0ms | 0.000 | 2525.2MB | 960.5MB | -1564.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9681.0ms | 0.207 | 815.9MB | 1012.9MB | 197.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9559.0ms | 0.105 | 873.4MB | 946.7MB | 73.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3362.5ms | 3378.6ms | 61.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 808.3ms | 814.0ms | 61.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 60.4ms |

## Observations

No data.

