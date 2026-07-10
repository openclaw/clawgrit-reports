# OpenClaw Source Performance

Generated: 2026-07-10T02:57:44.708Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3901.0ms | 3947.2ms | 3900.1ms | 3764.8ms | 3852.8ms | 35.1ms | 823.5MB | 1.288 |
| skipChannels | gateway, skip channels | 3847.2ms | 3898.7ms | 3847.2ms | 3784.9ms | 3825.9ms | 35.1ms | 801.9MB | 1.282 |
| oneInternalHook | gateway, one configured internal hook | 3865.2ms | 3868.7ms | 3864.8ms | 3784.2ms | 3823.9ms | 35.4ms | 818.5MB | 1.294 |
| allInternalHooks | gateway, all internal hooks | 3780.1ms | 3845.9ms | 3777.7ms | 3729.6ms | 3758.9ms | 35.0ms | 812.4MB | 1.067 |
| fiftyPlugins | gateway, 50 manifest plugins | 3668.0ms | 3686.2ms | 3686.0ms | 3571.6ms | 3630.3ms | 33.0ms | 801.1MB | 1.095 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3469.1ms | 3473.0ms | 3467.6ms | 3390.1ms | 3452.7ms | 38.4ms | 754.0MB | 1.197 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| xai | 449.8MB | 406.8MB | ok |
| codex | 442.3MB | 399.3MB | ok |
| migrate-hermes | 425.4MB | 382.4MB | ok |
| llm-task | 405.4MB | 362.4MB | ok |
| active-memory | 404.1MB | 361.1MB | ok |
| openai | 388.6MB | 345.6MB | ok |
| voice-call | 380.2MB | 337.3MB | ok |
| google | 356.9MB | 313.9MB | ok |
| minimax | 351.9MB | 308.9MB | ok |
| xiaomi | 316.1MB | 273.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 2852.1ms | 2863.4ms |
| default | cli.main.gateway-run-bootstrap | 2326.9ms | 2355.5ms |
| default | post-attach.update-sentinel.total | 843.0ms | 843.2ms |
| default | sidecars.restart-sentinel.total | 842.4ms | 842.7ms |
| default | sidecars.session-locks.total | 841.8ms | 842.0ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 2860.6ms | 2884.7ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2330.6ms | 2351.6ms |
| skipChannels | post-attach.update-sentinel.total | 884.1ms | 892.6ms |
| skipChannels | sidecars.restart-sentinel.total | 883.5ms | 892.0ms |
| skipChannels | sidecars.session-locks.total | 882.8ms | 891.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2886.0ms | 2899.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2364.1ms | 2377.1ms |
| oneInternalHook | sidecars.internal-hooks.total | 892.6ms | 909.5ms |
| oneInternalHook | memory.ready.rssMb | 814.5ms | 815.8ms |
| oneInternalHook | post-attach.update-check.total | 756.8ms | 759.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2821.1ms | 2877.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2299.1ms | 2357.1ms |
| allInternalHooks | memory.ready.rssMb | 800.8ms | 808.5ms |
| allInternalHooks | post-attach.update-check.total | 751.5ms | 752.0ms |
| allInternalHooks | ready.total | 742.7ms | 743.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2810.4ms | 2833.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2283.8ms | 2323.6ms |
| fiftyPlugins | memory.ready.rssMb | 792.4ms | 799.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 733.6ms | 763.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 732.4ms | 762.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2841.2ms | 2865.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2328.0ms | 2328.2ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 736.2ms | 751.7ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 569.4ms | 608.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 512.9ms | 537.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8449.0ms | 0.118 | 794.5MB | 820.7MB | 26.3MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 8314.0ms | 0.120 | 785.3MB | 804.1MB | 18.8MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 8189.0ms | 0.122 | 792.0MB | 819.1MB | 27.1MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2867.1ms | 2891.9ms | 57.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 628.3ms | 661.5ms | 57.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.1MB | 0.0MB | 0.0ms | 42.9ms |

## Observations

No data.

