# OpenClaw Source Performance

Generated: 2026-07-10T00:20:07.819Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4389.9ms | 4396.8ms | 4389.8ms | 4182.9ms | 4284.9ms | 39.9ms | 839.1MB | 1.201 |
| skipChannels | gateway, skip channels | 4452.8ms | 4545.8ms | 4452.3ms | 4382.7ms | 4424.9ms | 42.2ms | 825.0MB | 1.211 |
| oneInternalHook | gateway, one configured internal hook | 4174.3ms | 4552.7ms | 4171.0ms | 4116.4ms | 4150.4ms | 45.4ms | 813.3MB | 1.230 |
| allInternalHooks | gateway, all internal hooks | 4128.2ms | 4291.6ms | 4125.6ms | 4071.4ms | 4107.0ms | 38.3ms | 815.4MB | 1.211 |
| fiftyPlugins | gateway, 50 manifest plugins | 4115.3ms | 4285.1ms | 4111.9ms | 3953.6ms | 4018.2ms | 35.5ms | 792.5MB | 1.291 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3809.1ms | 3854.5ms | 3807.6ms | 3667.9ms | 3752.7ms | 35.4ms | 768.4MB | 1.297 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 447.0MB | 403.8MB | ok |
| xai | 435.4MB | 392.2MB | ok |
| migrate-hermes | 424.4MB | 381.2MB | ok |
| llm-task | 408.6MB | 365.4MB | ok |
| active-memory | 402.6MB | 359.4MB | ok |
| openai | 388.3MB | 345.1MB | ok |
| voice-call | 368.9MB | 325.7MB | ok |
| minimax | 356.8MB | 313.6MB | ok |
| google | 337.8MB | 294.6MB | ok |
| vydra | 320.6MB | 277.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 3143.4ms | 3217.3ms |
| default | cli.main.gateway-run-bootstrap | 2564.7ms | 2572.7ms |
| default | post-attach.update-sentinel.total | 953.0ms | 1004.4ms |
| default | sidecars.restart-sentinel.total | 952.4ms | 1003.8ms |
| default | sidecars.session-locks.total | 951.8ms | 1003.0ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 3181.3ms | 3362.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2583.3ms | 2730.0ms |
| skipChannels | post-attach.update-sentinel.total | 1094.5ms | 1140.2ms |
| skipChannels | sidecars.restart-sentinel.total | 1093.9ms | 1139.5ms |
| skipChannels | sidecars.session-locks.total | 1093.2ms | 1138.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3064.5ms | 3406.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2517.0ms | 2750.1ms |
| oneInternalHook | post-attach.update-sentinel.total | 1091.5ms | 1091.5ms |
| oneInternalHook | sidecars.restart-sentinel.total | 1090.9ms | 1090.9ms |
| oneInternalHook | sidecars.session-locks.total | 1090.2ms | 1090.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3133.7ms | 3135.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2572.6ms | 2582.0ms |
| allInternalHooks | memory.ready.rssMb | 788.4ms | 801.5ms |
| allInternalHooks | post-attach.update-check.total | 768.1ms | 907.8ms |
| allInternalHooks | ready.total | 760.4ms | 897.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3105.8ms | 3116.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2517.5ms | 2560.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 837.6ms | 938.7ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 836.9ms | 937.7ms |
| fiftyPlugins | sidecars.session-locks.total | 836.1ms | 936.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3050.9ms | 3093.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2490.1ms | 2529.8ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 749.5ms | 762.5ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 607.8ms | 626.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 560.8ms | 563.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8828.0ms | 0.113 | 797.0MB | 823.0MB | 26.0MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 8164.0ms | 0.122 | 780.7MB | 835.3MB | 54.5MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 9303.0ms | 0.107 | 748.2MB | 777.8MB | 29.5MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2890.4ms | 3109.3ms | 57.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 639.0ms | 641.3ms | 57.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.0ms | 41.2ms |

## Observations

No data.

