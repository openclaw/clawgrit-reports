# OpenClaw Source Performance

Generated: 2026-05-03T12:00:54.782Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2787.1ms | 2787.1ms | 2690.8ms | 2566.8ms | 43.8ms | 538.1MB | 1.076 |
| skipChannels | gateway, skip channels | 2553.4ms | 2553.4ms | 2492.1ms | 2431.2ms | 40.4ms | 559.2MB | 1.175 |
| oneInternalHook | gateway, one configured internal hook | 2369.3ms | 2369.3ms | 2296.8ms | 2195.6ms | 37.6ms | 558.8MB | 1.266 |
| allInternalHooks | gateway, all internal hooks | 2402.5ms | 2402.5ms | 2330.7ms | 2241.4ms | 34.4ms | 526.2MB | 1.249 |
| fiftyPlugins | gateway, 50 manifest plugins | 2132.1ms | 2132.1ms | 2083.0ms | 2048.0ms | 36.5ms | 557.2MB | 1.407 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 2087.8ms | 2087.8ms | 2034.0ms | 1998.4ms | 35.6ms | 553.4MB | 0.958 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | gateway.server-impl-import | 1293.3ms | 1293.3ms |
| default | gateway.server-impl-import.total | 1293.3ms | 1293.3ms |
| default | cli.main.gateway-run-imports.total | 657.2ms | 657.2ms |
| default | ready.total | 559.0ms | 559.0ms |
| default | runtime.post-attach.total | 558.2ms | 558.2ms |
| skipChannels | gateway.server-impl-import | 1274.6ms | 1274.6ms |
| skipChannels | gateway.server-impl-import.total | 1274.6ms | 1274.6ms |
| skipChannels | ready.total | 588.3ms | 588.3ms |
| skipChannels | runtime.post-attach.total | 587.6ms | 587.6ms |
| skipChannels | sidecars.ready.total | 586.1ms | 586.1ms |
| oneInternalHook | gateway.server-impl-import | 1116.5ms | 1116.5ms |
| oneInternalHook | gateway.server-impl-import.total | 1116.5ms | 1116.5ms |
| oneInternalHook | ready.total | 585.6ms | 585.6ms |
| oneInternalHook | runtime.post-attach.total | 585.0ms | 585.0ms |
| oneInternalHook | sidecars.ready.total | 583.5ms | 583.5ms |
| allInternalHooks | gateway.server-impl-import | 1155.9ms | 1155.9ms |
| allInternalHooks | gateway.server-impl-import.total | 1155.9ms | 1155.9ms |
| allInternalHooks | ready.total | 642.2ms | 642.2ms |
| allInternalHooks | runtime.post-attach.total | 641.6ms | 641.6ms |
| allInternalHooks | sidecars.ready.total | 640.2ms | 640.2ms |
| fiftyPlugins | gateway.server-impl-import | 1087.0ms | 1087.0ms |
| fiftyPlugins | gateway.server-impl-import.total | 1087.0ms | 1087.0ms |
| fiftyPlugins | cli.main.gateway-run-imports.total | 528.7ms | 528.7ms |
| fiftyPlugins | ready.total | 379.1ms | 379.1ms |
| fiftyPlugins | runtime.post-attach.total | 378.6ms | 378.6ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import | 1046.1ms | 1046.1ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import.total | 1046.1ms | 1046.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-imports.total | 504.0ms | 504.0ms |
| fiftyStartupLazyPlugins | ready.total | 392.1ms | 392.1ms |
| fiftyStartupLazyPlugins | runtime.post-attach.total | 391.5ms | 391.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 22859.0ms | 0.350 | 548.5MB | 813.6MB | 265.0MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 1457.7ms | 1457.7ms | 55.7MB | code:0 x1 |
| configGetGatewayPort | config get gateway.port | 559.0ms | 559.0ms | 55.7MB | code:0 x1 |

## Observations

No data.

