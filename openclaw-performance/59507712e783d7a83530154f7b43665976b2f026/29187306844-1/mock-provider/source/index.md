# OpenClaw Source Performance

Generated: 2026-07-12T09:27:08.068Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4071.1ms | 4197.5ms | 4070.4ms | 3903.3ms | 3994.7ms | 29.8ms | 817.8MB | 1.261 |
| skipChannels | gateway, skip channels | 3855.0ms | 3906.0ms | 3854.6ms | 3788.6ms | 3828.8ms | 29.1ms | 826.7MB | 1.044 |
| oneInternalHook | gateway, one configured internal hook | 3870.0ms | 3934.5ms | 3865.0ms | 3802.2ms | 3837.0ms | 29.8ms | 819.5MB | 1.043 |
| allInternalHooks | gateway, all internal hooks | 3744.0ms | 3809.7ms | 3743.3ms | 3691.2ms | 3720.6ms | 28.5ms | 802.0MB | 1.089 |
| fiftyPlugins | gateway, 50 manifest plugins | 3594.0ms | 3641.4ms | 3592.9ms | 3510.9ms | 3569.3ms | 27.5ms | 783.1MB | 1.113 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3550.2ms | 3568.2ms | 3548.7ms | 3464.9ms | 3531.4ms | 30.8ms | 763.5MB | 1.131 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 450.6MB | 407.6MB | ok |
| xai | 440.8MB | 397.8MB | ok |
| llm-task | 426.6MB | 383.6MB | ok |
| migrate-hermes | 419.3MB | 376.4MB | ok |
| active-memory | 405.6MB | 362.6MB | ok |
| openai | 385.9MB | 343.0MB | ok |
| voice-call | 358.6MB | 315.6MB | ok |
| google | 357.2MB | 314.3MB | ok |
| minimax | 354.9MB | 311.9MB | ok |
| xiaomi | 315.6MB | 272.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 2905.4ms | 2964.8ms |
| default | cli.main.gateway-run-bootstrap | 2365.3ms | 2408.3ms |
| default | post-attach.update-sentinel.total | 912.5ms | 981.0ms |
| default | sidecars.restart-sentinel.total | 911.9ms | 980.3ms |
| default | sidecars.session-locks.total | 911.2ms | 979.7ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 2847.1ms | 2888.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2312.3ms | 2356.9ms |
| skipChannels | post-attach.update-sentinel.total | 905.7ms | 957.0ms |
| skipChannels | sidecars.restart-sentinel.total | 905.2ms | 956.0ms |
| skipChannels | sidecars.session-locks.total | 904.4ms | 954.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2859.5ms | 2917.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2323.3ms | 2365.5ms |
| oneInternalHook | sidecars.internal-hooks.total | 936.6ms | 979.4ms |
| oneInternalHook | memory.ready.rssMb | 793.5ms | 799.2ms |
| oneInternalHook | post-attach.update-check.total | 764.3ms | 780.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2788.4ms | 2829.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2273.1ms | 2306.5ms |
| allInternalHooks | memory.ready.rssMb | 790.0ms | 795.8ms |
| allInternalHooks | post-attach.update-check.total | 728.9ms | 750.9ms |
| allInternalHooks | ready.total | 717.9ms | 737.7ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2743.0ms | 2777.7ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2229.5ms | 2264.3ms |
| fiftyPlugins | memory.ready.rssMb | 778.9ms | 781.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 753.2ms | 755.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 752.6ms | 755.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2911.9ms | 2915.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2342.5ms | 2392.7ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 751.0ms | 755.9ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 615.2ms | 620.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 558.5ms | 573.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13618.0ms | 0.661 | 813.5MB | 1283.9MB | 470.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9372.0ms | 0.320 | 810.1MB | 861.2MB | 51.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9522.0ms | 0.315 | 802.5MB | 859.7MB | 57.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2807.1ms | 2866.7ms | 56.6MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 630.9ms | 657.1ms | 56.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.0ms | 44.1ms |

## Observations

No data.

