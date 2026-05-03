# OpenClaw Source Performance

Generated: 2026-05-03T12:47:51.067Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2067.6ms | 2227.9ms | 1953.3ms | 1908.7ms | 29.1ms | 531.6MB | 1.347 |
| skipChannels | gateway, skip channels | 2177.9ms | 2354.9ms | 2115.9ms | 2068.2ms | 35.4ms | 557.0MB | 1.401 |
| oneInternalHook | gateway, one configured internal hook | 2140.6ms | 2159.4ms | 2068.8ms | 1990.9ms | 34.6ms | 562.6MB | 1.401 |
| allInternalHooks | gateway, all internal hooks | 2096.9ms | 2102.0ms | 2031.7ms | 1950.4ms | 32.2ms | 561.1MB | 0.954 |
| fiftyPlugins | gateway, 50 manifest plugins | 1877.8ms | 1890.5ms | 1832.5ms | 1799.6ms | 30.7ms | 555.2MB | 1.082 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1849.1ms | 1863.5ms | 1813.3ms | 1779.6ms | 28.3ms | 552.3MB | 1.090 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | gateway.server-impl-import | 994.4ms | 1095.5ms |
| default | gateway.server-impl-import.total | 994.4ms | 1095.5ms |
| default | ready.total | 451.3ms | 464.5ms |
| default | runtime.post-attach.total | 450.7ms | 463.9ms |
| default | sidecars.ready.total | 449.2ms | 462.4ms |
| skipChannels | gateway.server-impl-import | 1100.1ms | 1222.6ms |
| skipChannels | gateway.server-impl-import.total | 1100.1ms | 1222.6ms |
| skipChannels | ready.total | 490.7ms | 504.6ms |
| skipChannels | runtime.post-attach.total | 489.9ms | 503.9ms |
| skipChannels | sidecars.ready.total | 488.4ms | 502.4ms |
| oneInternalHook | gateway.server-impl-import | 1067.0ms | 1069.0ms |
| oneInternalHook | gateway.server-impl-import.total | 1067.0ms | 1069.0ms |
| oneInternalHook | ready.total | 502.0ms | 526.9ms |
| oneInternalHook | runtime.post-attach.total | 501.5ms | 526.3ms |
| oneInternalHook | sidecars.ready.total | 500.2ms | 525.1ms |
| allInternalHooks | gateway.server-impl-import | 1013.4ms | 1016.9ms |
| allInternalHooks | gateway.server-impl-import.total | 1013.4ms | 1016.9ms |
| allInternalHooks | ready.total | 517.9ms | 531.6ms |
| allInternalHooks | runtime.post-attach.total | 517.3ms | 531.0ms |
| allInternalHooks | sidecars.ready.total | 516.1ms | 529.6ms |
| fiftyPlugins | gateway.server-impl-import | 961.5ms | 970.3ms |
| fiftyPlugins | gateway.server-impl-import.total | 961.5ms | 970.3ms |
| fiftyPlugins | cli.main.gateway-run-imports.total | 444.0ms | 462.9ms |
| fiftyPlugins | ready.total | 348.0ms | 353.5ms |
| fiftyPlugins | runtime.post-attach.total | 347.5ms | 353.0ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import | 947.2ms | 966.3ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import.total | 947.2ms | 966.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-imports.total | 443.3ms | 446.8ms |
| fiftyStartupLazyPlugins | ready.total | 335.9ms | 345.1ms |
| fiftyStartupLazyPlugins | runtime.post-attach.total | 335.4ms | 344.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 22468.0ms | 0.356 | 531.3MB | 728.9MB | 197.6MB | mock-openai/gpt-5.4 |
| run-002 | pass | 1/1 | 14501.0ms | 0.552 | 532.5MB | 713.1MB | 180.6MB | mock-openai/gpt-5.4 |
| run-003 | pass | 1/1 | 16321.0ms | 0.490 | 551.2MB | 808.5MB | 257.2MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 1482.1ms | 1508.2ms | 55.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 560.4ms | 565.4ms | 55.8MB | code:0 x3 |

## Observations

No data.

