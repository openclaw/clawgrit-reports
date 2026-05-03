# OpenClaw Source Performance

Generated: 2026-05-03T12:15:41.127Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2422.4ms | 2422.4ms | 2328.9ms | 2210.0ms | 37.3ms | 520.8MB | 1.238 |
| skipChannels | gateway, skip channels | 2364.5ms | 2364.5ms | 2358.1ms | 2228.8ms | 45.4ms | 555.8MB | 1.269 |
| oneInternalHook | gateway, one configured internal hook | 3014.0ms | 3014.0ms | 2895.5ms | 2748.3ms | 37.2ms | 557.7MB | 1.327 |
| allInternalHooks | gateway, all internal hooks | 2728.1ms | 2728.1ms | 2644.8ms | 2547.7ms | 40.2ms | 557.1MB | 1.100 |
| fiftyPlugins | gateway, 50 manifest plugins | 2226.0ms | 2226.0ms | 2172.2ms | 2137.5ms | 44.6ms | 560.6MB | 1.348 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1944.7ms | 1944.7ms | 1896.3ms | 1864.6ms | 32.7ms | 522.3MB | 1.028 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | gateway.server-impl-import | 1183.0ms | 1183.0ms |
| default | gateway.server-impl-import.total | 1183.0ms | 1183.0ms |
| default | ready.total | 545.9ms | 545.9ms |
| default | runtime.post-attach.total | 545.1ms | 545.1ms |
| default | sidecars.ready.total | 543.2ms | 543.2ms |
| skipChannels | gateway.server-impl-import | 1166.3ms | 1166.3ms |
| skipChannels | gateway.server-impl-import.total | 1166.3ms | 1166.3ms |
| skipChannels | ready.total | 579.4ms | 579.4ms |
| skipChannels | runtime.post-attach.total | 578.7ms | 578.7ms |
| skipChannels | sidecars.ready.total | 577.3ms | 577.3ms |
| oneInternalHook | gateway.server-impl-import | 1565.7ms | 1565.7ms |
| oneInternalHook | gateway.server-impl-import.total | 1565.7ms | 1565.7ms |
| oneInternalHook | ready.total | 819.8ms | 819.8ms |
| oneInternalHook | runtime.post-attach.total | 818.9ms | 818.9ms |
| oneInternalHook | sidecars.ready.total | 816.6ms | 816.6ms |
| allInternalHooks | gateway.server-impl-import | 1430.9ms | 1430.9ms |
| allInternalHooks | gateway.server-impl-import.total | 1430.9ms | 1430.9ms |
| allInternalHooks | ready.total | 713.5ms | 713.5ms |
| allInternalHooks | runtime.post-attach.total | 712.9ms | 712.9ms |
| allInternalHooks | sidecars.ready.total | 711.5ms | 711.5ms |
| fiftyPlugins | gateway.server-impl-import | 1172.8ms | 1172.8ms |
| fiftyPlugins | gateway.server-impl-import.total | 1172.8ms | 1172.8ms |
| fiftyPlugins | cli.main.gateway-run-imports.total | 461.1ms | 461.1ms |
| fiftyPlugins | ready.total | 428.4ms | 428.4ms |
| fiftyPlugins | runtime.post-attach.total | 427.8ms | 427.8ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import | 1052.8ms | 1052.8ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import.total | 1052.8ms | 1052.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-imports.total | 390.9ms | 390.9ms |
| fiftyStartupLazyPlugins | ready.total | 364.0ms | 364.0ms |
| fiftyStartupLazyPlugins | runtime.post-attach.total | 363.4ms | 363.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 25171.0ms | 0.358 | 559.8MB | 744.3MB | 184.5MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 1346.6ms | 1346.6ms | 55.8MB | code:0 x1 |
| configGetGatewayPort | config get gateway.port | 458.8ms | 458.8ms | 55.8MB | code:0 x1 |

## Observations

No data.

