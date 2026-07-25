# OpenClaw Source Performance

Generated: 2026-07-25T01:06:35.100Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5923.7ms | 5933.8ms | 5814.7ms | 3012.4ms | 5869.8ms | 38.9ms | 905.1MB | 1.354 |
| skipChannels | gateway, skip channels | 3157.7ms | 3217.5ms | 3157.3ms | 3085.4ms | 3128.0ms | 40.3ms | 809.2MB | 1.276 |
| oneInternalHook | gateway, one configured internal hook | 4433.2ms | 4474.8ms | 4432.9ms | 4357.3ms | 4399.6ms | 39.3ms | 907.0MB | 1.377 |
| allInternalHooks | gateway, all internal hooks | 4485.4ms | 6603.3ms | 6602.0ms | 4371.7ms | 4419.7ms | 40.0ms | 1005.0MB | 1.338 |
| fiftyPlugins | gateway, 50 manifest plugins | 8589.9ms | 8769.9ms | 8583.4ms | 4440.5ms | 4524.6ms | 42.8ms | 1154.1MB | 1.281 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 10869.5ms | 10972.7ms | 10869.4ms | 4499.9ms | 4601.2ms | 50.5ms | 1190.6MB | 1.288 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 584.1MB | 537.6MB | ok |
| zoom-meetings | 528.9MB | 482.4MB | ok |
| memory-lancedb | 521.1MB | 474.6MB | ok |
| codex | 514.3MB | 467.8MB | ok |
| active-memory | 513.3MB | 466.8MB | ok |
| migrate-hermes | 508.2MB | 461.8MB | ok |
| anthropic | 506.0MB | 459.6MB | ok |
| teams-meetings | 505.2MB | 458.8MB | ok |
| voice-call | 505.2MB | 458.7MB | ok |
| workboard | 505.1MB | 458.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3803.4ms | 3824.4ms |
| default | post-ready.agent-runtime-plugins.total | 3793.8ms | 3815.3ms |
| default | post-attach.update-check.total | 3791.1ms | 3812.8ms |
| default | post-attach.update-sentinel.total | 3782.1ms | 3804.5ms |
| default | sidecars.restart-sentinel.total | 3780.9ms | 3803.4ms |
| skipChannels | sidecars.internal-hooks.total | 1011.0ms | 1012.5ms |
| skipChannels | post-attach.update-check.total | 940.0ms | 940.9ms |
| skipChannels | ready.total | 927.4ms | 927.8ms |
| skipChannels | runtime.post-attach.total | 925.8ms | 926.2ms |
| skipChannels | post-attach.log.total | 924.8ms | 925.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3318.1ms | 3355.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2646.5ms | 2663.3ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2621.1ms | 2627.2ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2620.3ms | 2626.4ms |
| oneInternalHook | sidecars.internal-hooks.total | 899.1ms | 900.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3311.4ms | 3361.2ms |
| allInternalHooks | sidecars.session-locks.total | 2973.4ms | 3005.2ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2972.0ms | 3003.8ms |
| allInternalHooks | post-attach.update-sentinel.total | 2967.6ms | 2999.2ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2966.6ms | 2998.1ms |
| fiftyPlugins | sidecars.session-locks.total | 4942.5ms | 5184.8ms |
| fiftyPlugins | post-ready.maintenance.total | 4850.9ms | 5086.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4814.2ms | 5049.7ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4609.4ms | 4851.2ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4608.4ms | 4850.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 6067.8ms | 7274.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5931.4ms | 6078.8ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5888.4ms | 7264.2ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 5623.3ms | 6358.8ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 5621.9ms | 6356.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12545.0ms | 0.000 | 2497.8MB | 1101.7MB | -1396.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11467.0ms | 0.174 | 852.6MB | 1113.1MB | 260.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11518.0ms | 0.260 | 833.6MB | 1082.1MB | 248.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4315.9ms | 4408.6ms | 61.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1120.1ms | 1132.5ms | 60.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 149.9ms |

## Observations

No data.

