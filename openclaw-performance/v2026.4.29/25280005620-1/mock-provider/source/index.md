# OpenClaw Source Performance

Generated: 2026-05-03T13:19:15.992Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2524.4ms | 2663.7ms | 2374.8ms | 2344.4ms | 29.6ms | 616.9MB | 1.204 |
| skipChannels | gateway, skip channels | 2506.8ms | 2591.3ms | 2371.2ms | 2340.0ms | 31.0ms | 596.2MB | 1.237 |
| oneInternalHook | gateway, one configured internal hook | 2469.0ms | 2487.5ms | 2280.3ms | 2251.0ms | 27.6ms | 582.1MB | 1.225 |
| allInternalHooks | gateway, all internal hooks | 2504.1ms | 2509.2ms | 2327.7ms | 2295.6ms | 31.6ms | 613.1MB | 1.246 |
| fiftyPlugins | gateway, 50 manifest plugins | 2461.3ms | 2471.3ms | 2327.8ms | 2293.1ms | 28.6ms | 601.8MB | 1.270 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 2193.4ms | 2205.1ms | 2073.4ms | 2041.6ms | 29.9ms | 595.2MB | 1.360 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | gateway.server-impl-import | 897.9ms | 993.5ms |
| default | gateway.server-impl-import.total | 897.9ms | 993.5ms |
| default | ready.total | 701.5ms | 729.4ms |
| default | runtime.post-attach.total | 701.0ms | 728.9ms |
| default | sidecars.ready.total | 699.7ms | 727.7ms |
| skipChannels | gateway.server-impl-import | 919.9ms | 1018.3ms |
| skipChannels | gateway.server-impl-import.total | 919.9ms | 1018.3ms |
| skipChannels | ready.total | 622.5ms | 712.0ms |
| skipChannels | runtime.post-attach.total | 621.9ms | 711.4ms |
| skipChannels | sidecars.ready.total | 620.7ms | 710.2ms |
| oneInternalHook | gateway.server-impl-import | 903.6ms | 907.8ms |
| oneInternalHook | gateway.server-impl-import.total | 903.6ms | 907.8ms |
| oneInternalHook | ready.total | 662.9ms | 697.9ms |
| oneInternalHook | runtime.post-attach.total | 662.4ms | 697.3ms |
| oneInternalHook | sidecars.ready.total | 661.2ms | 696.0ms |
| allInternalHooks | gateway.server-impl-import | 930.5ms | 936.2ms |
| allInternalHooks | gateway.server-impl-import.total | 930.5ms | 936.2ms |
| allInternalHooks | ready.total | 689.5ms | 709.3ms |
| allInternalHooks | runtime.post-attach.total | 689.0ms | 708.8ms |
| allInternalHooks | sidecars.ready.total | 687.9ms | 707.6ms |
| fiftyPlugins | gateway.server-impl-import | 942.6ms | 960.3ms |
| fiftyPlugins | gateway.server-impl-import.total | 942.6ms | 960.3ms |
| fiftyPlugins | ready.total | 589.9ms | 590.8ms |
| fiftyPlugins | runtime.post-attach.total | 589.4ms | 590.4ms |
| fiftyPlugins | sidecars.ready.total | 588.5ms | 589.4ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import | 876.6ms | 895.6ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import.total | 876.6ms | 895.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-imports.total | 551.2ms | 563.4ms |
| fiftyStartupLazyPlugins | ready.total | 457.5ms | 467.8ms |
| fiftyStartupLazyPlugins | runtime.post-attach.total | 457.1ms | 467.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 65160.0ms | 0.491 | 614.2MB | 952.8MB | 338.6MB | mock-openai/gpt-5.4 |
| run-002 | pass | 1/1 | 46778.0ms | 0.663 | 637.8MB | 783.7MB | 145.9MB | mock-openai/gpt-5.4 |
| run-003 | pass | 1/1 | 45587.0ms | 0.680 | 623.8MB | 1363.1MB | 739.3MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 1210.4ms | 1285.8ms | 56.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 696.4ms | 702.4ms | 55.9MB | code:0 x3 |

## Observations

No data.

