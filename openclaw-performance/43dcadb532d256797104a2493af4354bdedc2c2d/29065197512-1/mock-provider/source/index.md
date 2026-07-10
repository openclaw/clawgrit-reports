# OpenClaw Source Performance

Generated: 2026-07-10T02:54:52.011Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4175.1ms | 4218.0ms | 4169.5ms | 4037.8ms | 4115.1ms | 32.2ms | 835.3MB | 1.199 |
| skipChannels | gateway, skip channels | 4055.2ms | 4110.4ms | 4050.6ms | 3972.0ms | 4009.4ms | 30.0ms | 810.1MB | 1.265 |
| oneInternalHook | gateway, one configured internal hook | 4042.2ms | 4050.9ms | 4041.8ms | 3979.0ms | 4019.6ms | 29.7ms | 812.3MB | 1.237 |
| allInternalHooks | gateway, all internal hooks | 4134.3ms | 4211.1ms | 4134.2ms | 4057.5ms | 4106.0ms | 30.7ms | 814.0MB | 1.213 |
| fiftyPlugins | gateway, 50 manifest plugins | 3934.9ms | 3976.2ms | 3934.6ms | 3807.4ms | 3870.2ms | 29.5ms | 771.4MB | 1.271 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3558.3ms | 3608.9ms | 3552.7ms | 3471.7ms | 3535.7ms | 30.7ms | 767.1MB | 1.164 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| xai | 449.2MB | 406.0MB | ok |
| codex | 443.3MB | 400.1MB | ok |
| migrate-hermes | 422.5MB | 379.3MB | ok |
| llm-task | 409.7MB | 366.5MB | ok |
| active-memory | 401.2MB | 357.9MB | ok |
| openai | 391.9MB | 348.7MB | ok |
| voice-call | 371.6MB | 328.4MB | ok |
| google | 355.9MB | 312.7MB | ok |
| minimax | 319.3MB | 276.1MB | ok |
| vydra | 314.0MB | 270.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 3052.4ms | 3061.9ms |
| default | cli.main.gateway-run-bootstrap | 2480.8ms | 2502.5ms |
| default | post-attach.update-sentinel.total | 907.5ms | 934.2ms |
| default | sidecars.restart-sentinel.total | 906.9ms | 933.5ms |
| default | sidecars.session-locks.total | 906.2ms | 932.8ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 3008.8ms | 3039.3ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2456.8ms | 2463.6ms |
| skipChannels | post-attach.update-sentinel.total | 971.8ms | 982.2ms |
| skipChannels | sidecars.restart-sentinel.total | 971.2ms | 981.6ms |
| skipChannels | sidecars.session-locks.total | 970.2ms | 980.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3019.6ms | 3020.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2455.5ms | 2482.0ms |
| oneInternalHook | sidecars.internal-hooks.total | 945.3ms | 992.0ms |
| oneInternalHook | memory.ready.rssMb | 809.6ms | 811.8ms |
| oneInternalHook | post-attach.update-check.total | 795.1ms | 802.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3078.7ms | 3082.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2505.6ms | 2508.1ms |
| allInternalHooks | post-attach.update-check.total | 815.9ms | 857.8ms |
| allInternalHooks | memory.ready.rssMb | 808.1ms | 813.5ms |
| allInternalHooks | ready.total | 804.2ms | 827.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2972.8ms | 3006.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2430.0ms | 2444.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 751.2ms | 754.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 750.5ms | 754.0ms |
| fiftyPlugins | memory.ready.rssMb | 750.3ms | 766.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2958.6ms | 2977.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2359.3ms | 2429.2ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 760.1ms | 765.2ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 623.4ms | 625.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 548.0ms | 599.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8442.0ms | 0.118 | 716.2MB | 782.6MB | 66.3MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 8158.0ms | 0.245 | 771.8MB | 840.0MB | 68.2MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 8248.0ms | 0.121 | 842.0MB | 870.3MB | 28.3MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2852.8ms | 2895.5ms | 56.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 621.5ms | 629.7ms | 56.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.0ms | 40.9ms |

## Observations

No data.

