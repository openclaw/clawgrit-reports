# OpenClaw Source Performance

Generated: 2026-07-10T03:41:04.752Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4032.7ms | 4056.1ms | 3956.5ms | 3878.1ms | 3980.3ms | 29.8ms | 823.8MB | 1.244 |
| skipChannels | gateway, skip channels | 3865.2ms | 3866.6ms | 3863.8ms | 3786.4ms | 3840.3ms | 29.1ms | 814.8MB | 1.293 |
| oneInternalHook | gateway, one configured internal hook | 3720.0ms | 3745.8ms | 3717.6ms | 3667.9ms | 3699.5ms | 29.6ms | 826.2MB | 1.083 |
| allInternalHooks | gateway, all internal hooks | 3895.5ms | 3956.6ms | 3895.1ms | 3839.5ms | 3873.2ms | 29.5ms | 820.8MB | 1.264 |
| fiftyPlugins | gateway, 50 manifest plugins | 3889.2ms | 3906.1ms | 3888.9ms | 3737.0ms | 3798.0ms | 28.8ms | 790.3MB | 1.286 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3471.6ms | 3486.9ms | 3465.4ms | 3391.1ms | 3450.1ms | 28.4ms | 766.6MB | 1.176 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 449.5MB | 406.3MB | ok |
| xai | 423.1MB | 379.9MB | ok |
| migrate-hermes | 416.7MB | 373.5MB | ok |
| active-memory | 405.6MB | 362.4MB | ok |
| llm-task | 401.4MB | 358.2MB | ok |
| openai | 393.3MB | 350.1MB | ok |
| voice-call | 368.1MB | 324.9MB | ok |
| google | 353.9MB | 310.7MB | ok |
| minimax | 350.8MB | 307.6MB | ok |
| volcengine | 345.6MB | 302.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 2953.2ms | 2955.3ms |
| default | cli.main.gateway-run-bootstrap | 2394.3ms | 2401.5ms |
| default | post-attach.update-sentinel.total | 874.8ms | 897.4ms |
| default | sidecars.restart-sentinel.total | 874.2ms | 896.8ms |
| default | sidecars.session-locks.total | 873.5ms | 896.1ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 2866.8ms | 2914.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2335.3ms | 2375.0ms |
| skipChannels | sidecars.plugin-services.total | 894.9ms | 894.9ms |
| skipChannels | sidecars.plugin-services.phone-control.phone-control-expiry.total | 893.7ms | 893.7ms |
| skipChannels | sidecars.plugin-services.device-pair.device-pair-notifier.total | 892.9ms | 892.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2771.0ms | 2778.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2256.0ms | 2259.3ms |
| oneInternalHook | sidecars.ready.total | 895.1ms | 895.1ms |
| oneInternalHook | sidecars.total.total | 892.8ms | 892.8ms |
| oneInternalHook | sidecars.memory.total | 892.2ms | 892.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2898.6ms | 2968.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2370.8ms | 2439.8ms |
| allInternalHooks | memory.ready.rssMb | 793.6ms | 820.4ms |
| allInternalHooks | post-attach.update-check.total | 770.4ms | 780.9ms |
| allInternalHooks | ready.total | 757.4ms | 771.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2947.0ms | 2957.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2394.5ms | 2422.4ms |
| fiftyPlugins | memory.ready.rssMb | 781.4ms | 785.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 748.3ms | 776.9ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 747.6ms | 776.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2880.0ms | 2898.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2344.3ms | 2358.6ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 759.0ms | 765.5ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 623.9ms | 625.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 537.6ms | 539.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8360.0ms | 0.120 | 799.7MB | 855.8MB | 56.0MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 8189.0ms | 0.122 | 845.5MB | 872.9MB | 27.3MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 8254.0ms | 0.121 | 792.0MB | 804.4MB | 12.4MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2831.9ms | 2888.9ms | 56.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 613.2ms | 619.3ms | 56.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.0ms | 42.5ms |

## Observations

No data.

