# OpenClaw Source Performance

Generated: 2026-07-10T15:01:52.255Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4689.1ms | 5225.8ms | 4688.8ms | 4548.6ms | 4626.3ms | 39.5ms | 821.1MB | 1.297 |
| skipChannels | gateway, skip channels | 4693.2ms | 4810.1ms | 4692.8ms | 4619.6ms | 4657.2ms | 39.3ms | 809.2MB | 1.247 |
| oneInternalHook | gateway, one configured internal hook | 4135.8ms | 4214.6ms | 4135.8ms | 4070.4ms | 4108.0ms | 36.5ms | 805.4MB | 1.215 |
| allInternalHooks | gateway, all internal hooks | 4768.3ms | 5384.5ms | 4767.1ms | 4657.9ms | 4692.2ms | 41.1ms | 810.5MB | 1.270 |
| fiftyPlugins | gateway, 50 manifest plugins | 5498.3ms | 5499.4ms | 5484.5ms | 5241.1ms | 5340.3ms | 55.8ms | 796.4MB | 1.350 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5128.8ms | 5196.0ms | 5126.6ms | 4949.6ms | 5038.3ms | 44.7ms | 777.0MB | 1.170 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 442.2MB | 399.1MB | ok |
| xai | 438.2MB | 395.1MB | ok |
| llm-task | 422.6MB | 379.6MB | ok |
| migrate-hermes | 405.4MB | 362.3MB | ok |
| active-memory | 403.9MB | 360.8MB | ok |
| openai | 386.9MB | 343.9MB | ok |
| voice-call | 371.0MB | 327.9MB | ok |
| google | 338.8MB | 295.7MB | ok |
| minimax | 332.9MB | 289.8MB | ok |
| xiaomi | 312.3MB | 269.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 3442.2ms | 3894.0ms |
| default | cli.main.gateway-run-bootstrap | 2803.3ms | 3182.4ms |
| default | post-attach.update-sentinel.total | 998.7ms | 1043.9ms |
| default | sidecars.restart-sentinel.total | 998.1ms | 1043.2ms |
| default | sidecars.session-locks.total | 997.3ms | 1042.5ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 3468.9ms | 3586.3ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2855.5ms | 3023.4ms |
| skipChannels | post-attach.update-sentinel.total | 1101.2ms | 1153.3ms |
| skipChannels | sidecars.restart-sentinel.total | 1100.5ms | 1152.6ms |
| skipChannels | sidecars.session-locks.total | 1099.6ms | 1151.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3071.9ms | 3114.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2509.8ms | 2565.1ms |
| oneInternalHook | post-attach.update-sentinel.total | 1004.7ms | 1004.7ms |
| oneInternalHook | sidecars.restart-sentinel.total | 1004.1ms | 1004.1ms |
| oneInternalHook | sidecars.session-locks.total | 1003.4ms | 1003.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3582.9ms | 3890.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2904.7ms | 2952.4ms |
| allInternalHooks | post-attach.update-check.total | 1095.7ms | 1153.0ms |
| allInternalHooks | ready.total | 1084.3ms | 1134.6ms |
| allInternalHooks | runtime.post-attach.total | 1082.0ms | 1131.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3968.4ms | 4136.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 3187.7ms | 3386.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 1056.9ms | 1321.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 1055.9ms | 1319.7ms |
| fiftyPlugins | sidecars.session-locks.total | 1054.9ms | 1300.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 4097.4ms | 4319.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 3313.6ms | 3551.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 768.9ms | 783.7ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 743.8ms | 770.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-imports.total | 695.1ms | 697.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9231.0ms | 0.108 | 814.5MB | 841.7MB | 27.2MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 8646.0ms | 0.116 | 784.1MB | 805.5MB | 21.4MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 8414.0ms | 0.119 | 782.8MB | 809.5MB | 26.8MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3115.1ms | 3165.4ms | 57.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 694.2ms | 700.7ms | 57.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.1MB | 0.0MB | 0.0ms | 43.0ms |

## Observations

No data.

