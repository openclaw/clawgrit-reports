# OpenClaw Source Performance

Generated: 2026-07-20T19:05:20.714Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7006.1ms | 7124.6ms | 6574.8ms | 2500.6ms | 6907.4ms | 45.1ms | 897.0MB | 1.285 |
| skipChannels | gateway, skip channels | 2602.6ms | 8419.4ms | 2602.4ms | 2528.6ms | 2572.7ms | 48.2ms | 808.0MB | 1.307 |
| oneInternalHook | gateway, one configured internal hook | 4218.5ms | 4297.2ms | 4214.2ms | 4133.2ms | 4179.5ms | 41.7ms | 795.5MB | 1.238 |
| allInternalHooks | gateway, all internal hooks | 4730.6ms | 8706.8ms | 4730.1ms | 4509.6ms | 4568.5ms | 49.3ms | 1027.8MB | 1.364 |
| fiftyPlugins | gateway, 50 manifest plugins | 7774.7ms | 7994.0ms | 7774.4ms | 4778.6ms | 4916.2ms | 44.8ms | 904.1MB | 1.251 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6465.0ms | 6573.5ms | 4477.1ms | 3961.9ms | 4056.0ms | 46.3ms | 890.6MB | 1.272 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 500.5MB | 454.0MB | ok |
| teams-meetings | 495.2MB | 448.8MB | ok |
| anthropic | 492.1MB | 445.6MB | ok |
| zoom-meetings | 485.2MB | 438.7MB | ok |
| codex | 484.0MB | 437.5MB | ok |
| memory-lancedb | 467.3MB | 420.8MB | ok |
| google-meet | 461.2MB | 414.7MB | ok |
| xai | 456.0MB | 409.6MB | ok |
| active-memory | 430.1MB | 383.7MB | ok |
| llm-task | 428.7MB | 382.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4988.3ms | 5268.1ms |
| default | post-ready.agent-runtime-plugins.total | 4969.1ms | 5251.8ms |
| default | post-attach.update-check.total | 4966.3ms | 5247.4ms |
| default | post-attach.update-sentinel.total | 4959.1ms | 5236.3ms |
| default | sidecars.restart-sentinel.total | 4957.8ms | 5234.6ms |
| skipChannels | sidecars.ready.total | 6572.4ms | 6572.4ms |
| skipChannels | sidecars.total.total | 6565.6ms | 6565.6ms |
| skipChannels | sidecars.memory.total | 6564.8ms | 6564.8ms |
| skipChannels | sidecars.plugin-services.total | 6563.5ms | 6563.5ms |
| skipChannels | sidecars.plugin-services.phone-control.phone-control-expiry.total | 6562.0ms | 6562.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3261.5ms | 3301.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2602.4ms | 2661.7ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2578.3ms | 2637.1ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2577.4ms | 2636.2ms |
| oneInternalHook | sidecars.internal-hooks.total | 789.5ms | 815.6ms |
| allInternalHooks | sidecars.ready.total | 4670.7ms | 4670.7ms |
| allInternalHooks | sidecars.total.total | 4663.6ms | 4663.6ms |
| allInternalHooks | sidecars.memory.total | 4662.9ms | 4662.9ms |
| allInternalHooks | sidecars.plugin-services.total | 4662.2ms | 4662.2ms |
| allInternalHooks | sidecars.plugin-services.phone-control.phone-control-expiry.total | 4661.0ms | 4661.0ms |
| fiftyPlugins | sidecars.session-locks.total | 3537.5ms | 4289.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3533.0ms | 4284.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3411.4ms | 3937.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3328.5ms | 3962.7ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3327.2ms | 3961.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3111.3ms | 3146.3ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3106.6ms | 3161.8ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3101.2ms | 3156.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 2804.2ms | 2885.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 2802.8ms | 2884.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10120.0ms | 0.000 | 2348.0MB | 873.0MB | -1474.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9308.0ms | 0.215 | 769.5MB | 865.7MB | 96.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9089.0ms | 0.220 | 767.4MB | 865.3MB | 98.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3146.9ms | 3165.8ms | 59.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 688.8ms | 697.0ms | 59.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.1ms | 84.2ms |

## Observations

No data.

