# OpenClaw Source Performance

Generated: 2026-05-03T12:47:54.594Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2172.0ms | 2233.0ms | 2171.7ms | 1693.3ms | 30.2ms | 513.4MB | 1.384 |
| skipChannels | gateway, skip channels | 2082.3ms | 2113.7ms | 1756.9ms | 1683.8ms | 34.3ms | 512.0MB | 0.966 |
| oneInternalHook | gateway, one configured internal hook | 2058.1ms | 2243.4ms | 2057.5ms | 1652.4ms | 29.5ms | 492.8MB | 1.337 |
| allInternalHooks | gateway, all internal hooks | 2125.6ms | 2157.5ms | 1808.8ms | 1669.5ms | 34.1ms | 502.4MB | 1.411 |
| fiftyPlugins | gateway, 50 manifest plugins | 1958.8ms | 2128.0ms | 1958.4ms | 1553.2ms | 31.1ms | 564.6MB | 1.410 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1827.2ms | 1865.0ms | 1826.8ms | 1446.5ms | 31.4ms | 570.0MB | 1.132 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-attach.update-sentinel.total | 935.9ms | 960.8ms |
| default | gateway.server-impl-import | 764.4ms | 776.5ms |
| default | gateway.server-impl-import.total | 764.4ms | 776.5ms |
| default | ready.total | 546.2ms | 559.9ms |
| default | runtime.post-attach.total | 545.1ms | 559.3ms |
| skipChannels | post-attach.update-sentinel.total | 794.2ms | 873.6ms |
| skipChannels | gateway.server-impl-import | 758.6ms | 779.0ms |
| skipChannels | gateway.server-impl-import.total | 758.6ms | 779.0ms |
| skipChannels | ready.total | 517.4ms | 571.8ms |
| skipChannels | runtime.post-attach.total | 516.6ms | 571.2ms |
| oneInternalHook | post-attach.update-sentinel.total | 832.3ms | 894.5ms |
| oneInternalHook | gateway.server-impl-import | 779.1ms | 837.3ms |
| oneInternalHook | gateway.server-impl-import.total | 779.1ms | 837.3ms |
| oneInternalHook | ready.total | 769.5ms | 831.2ms |
| oneInternalHook | runtime.post-attach.total | 768.9ms | 830.5ms |
| allInternalHooks | post-attach.update-sentinel.total | 896.2ms | 932.2ms |
| allInternalHooks | ready.total | 831.6ms | 863.1ms |
| allInternalHooks | runtime.post-attach.total | 830.9ms | 862.4ms |
| allInternalHooks | sidecars.ready.total | 829.3ms | 860.9ms |
| allInternalHooks | sidecars.total.total | 828.4ms | 860.2ms |
| fiftyPlugins | gateway.server-impl-import | 733.8ms | 811.7ms |
| fiftyPlugins | gateway.server-impl-import.total | 733.8ms | 811.7ms |
| fiftyPlugins | post-attach.update-sentinel.total | 723.8ms | 749.5ms |
| fiftyPlugins | cli.main.gateway-run-imports.total | 390.6ms | 401.5ms |
| fiftyPlugins | ready.total | 349.9ms | 425.6ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import | 687.5ms | 726.9ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import.total | 687.5ms | 726.9ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 653.5ms | 666.0ms |
| fiftyStartupLazyPlugins | ready.total | 360.5ms | 366.0ms |
| fiftyStartupLazyPlugins | runtime.post-attach.total | 359.9ms | 365.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 21411.0ms | 0.374 | 579.7MB | 824.7MB | 245.0MB | mock-openai/gpt-5.4 |
| run-002 | pass | 1/1 | 13842.0ms | 0.578 | 581.4MB | 830.2MB | 248.8MB | mock-openai/gpt-5.4 |
| run-003 | pass | 1/1 | 14121.0ms | 0.567 | 526.2MB | 756.3MB | 230.1MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 1255.7ms | 1271.8ms | 55.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 423.1ms | 426.9ms | 56.0MB | code:0 x3 |

## Observations

No data.

