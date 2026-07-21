# OpenClaw Source Performance

Generated: 2026-07-21T21:03:47.483Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7782.6ms | 8419.4ms | 7782.4ms | 4755.3ms | 7608.3ms | 70.2ms | 876.7MB | 1.425 |
| skipChannels | gateway, skip channels | 6098.4ms | 6288.6ms | 6092.9ms | 3495.9ms | 3574.6ms | 50.3ms | 919.1MB | 1.313 |
| oneInternalHook | gateway, one configured internal hook | 6617.5ms | 6772.7ms | 6617.5ms | 4947.0ms | 5000.7ms | 52.8ms | 941.2MB | 1.360 |
| allInternalHooks | gateway, all internal hooks | 6076.2ms | 6474.6ms | 6076.2ms | 4498.1ms | 4542.8ms | 46.3ms | 960.7MB | 1.318 |
| fiftyPlugins | gateway, 50 manifest plugins | 6872.4ms | 7432.8ms | 6872.3ms | 4489.5ms | 4579.9ms | 47.4ms | 1098.7MB | 1.337 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6411.2ms | 6868.4ms | 6411.1ms | 4090.7ms | 4178.8ms | 44.6ms | 1085.5MB | 1.310 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 510.7MB | 464.2MB | ok |
| google-meet | 510.1MB | 463.7MB | ok |
| llm-task | 510.0MB | 463.6MB | ok |
| voice-call | 507.2MB | 460.7MB | ok |
| codex | 505.8MB | 459.3MB | ok |
| teams-meetings | 505.7MB | 459.3MB | ok |
| memory-lancedb | 505.6MB | 459.2MB | ok |
| workboard | 504.9MB | 458.5MB | ok |
| anthropic | 503.7MB | 457.3MB | ok |
| migrate-hermes | 501.2MB | 454.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4431.8ms | 4702.6ms |
| default | post-ready.agent-runtime-plugins.total | 4381.4ms | 4685.7ms |
| default | post-attach.update-check.total | 4372.0ms | 4678.6ms |
| default | post-attach.update-sentinel.total | 4343.4ms | 4664.0ms |
| default | sidecars.restart-sentinel.total | 4340.0ms | 4662.2ms |
| skipChannels | sidecars.session-locks.total | 3651.0ms | 3758.9ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3648.7ms | 3756.8ms |
| skipChannels | post-attach.update-sentinel.total | 3639.6ms | 3751.3ms |
| skipChannels | sidecars.restart-sentinel.total | 3638.4ms | 3750.1ms |
| skipChannels | sidecars.ready.total | 3618.5ms | 3730.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3761.8ms | 3878.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3026.1ms | 3147.3ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2995.8ms | 3116.8ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2994.8ms | 3115.7ms |
| oneInternalHook | sidecars.session-locks.total | 2492.5ms | 2515.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3419.5ms | 3644.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2801.6ms | 2955.5ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2775.8ms | 2926.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2774.9ms | 2925.3ms |
| allInternalHooks | sidecars.session-locks.total | 2414.8ms | 2472.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3295.8ms | 3333.3ms |
| fiftyPlugins | sidecars.session-locks.total | 3239.9ms | 3728.4ms |
| fiftyPlugins | post-ready.maintenance.total | 3155.1ms | 3644.0ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3140.9ms | 3629.7ms |
| fiftyPlugins | post-attach.update-sentinel.total | 2948.9ms | 3449.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3238.4ms | 3406.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 2846.6ms | 3076.2ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 2763.4ms | 2989.1ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 2749.2ms | 2974.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2574.1ms | 2766.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9687.0ms | 0.000 | 2399.5MB | 890.6MB | -1508.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9529.0ms | 0.105 | 847.9MB | 920.3MB | 72.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10697.0ms | 0.187 | 910.9MB | 952.9MB | 42.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3433.7ms | 3471.4ms | 60.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 725.4ms | 731.7ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.1ms | 59.0ms |

## Observations

No data.

