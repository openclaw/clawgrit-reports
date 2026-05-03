# OpenClaw Source Performance

Generated: 2026-05-03T11:48:11.249Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2042.5ms | 2042.5ms | 1931.4ms | 1888.6ms | 35.5ms | 531.0MB | 0.979 |
| skipChannels | gateway, skip channels | 1935.0ms | 1935.0ms | 1894.6ms | 1847.4ms | 33.9ms | 567.7MB | 1.034 |
| oneInternalHook | gateway, one configured internal hook | 1946.9ms | 1946.9ms | 1896.2ms | 1824.1ms | 28.0ms | 564.7MB | 1.027 |
| allInternalHooks | gateway, all internal hooks | 1814.5ms | 1814.5ms | 1760.7ms | 1692.6ms | 30.6ms | 528.5MB | 1.102 |
| fiftyPlugins | gateway, 50 manifest plugins | 1808.7ms | 1808.7ms | 1771.5ms | 1743.1ms | 26.4ms | 515.4MB | 1.106 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1669.8ms | 1669.8ms | 1632.1ms | 1606.0ms | 27.6ms | 558.7MB | 1.198 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | gateway.server-impl-import | 967.3ms | 967.3ms |
| default | gateway.server-impl-import.total | 967.3ms | 967.3ms |
| default | cli.main.gateway-run-imports.total | 456.5ms | 456.5ms |
| default | ready.total | 421.9ms | 421.9ms |
| default | runtime.post-attach.total | 421.3ms | 421.3ms |
| skipChannels | gateway.server-impl-import | 932.9ms | 932.9ms |
| skipChannels | gateway.server-impl-import.total | 932.9ms | 932.9ms |
| skipChannels | cli.main.gateway-run-imports.total | 440.0ms | 440.0ms |
| skipChannels | ready.total | 438.0ms | 438.0ms |
| skipChannels | runtime.post-attach.total | 437.4ms | 437.4ms |
| oneInternalHook | gateway.server-impl-import | 947.1ms | 947.1ms |
| oneInternalHook | gateway.server-impl-import.total | 947.1ms | 947.1ms |
| oneInternalHook | ready.total | 471.1ms | 471.1ms |
| oneInternalHook | runtime.post-attach.total | 470.5ms | 470.5ms |
| oneInternalHook | sidecars.ready.total | 469.3ms | 469.3ms |
| allInternalHooks | gateway.server-impl-import | 887.2ms | 887.2ms |
| allInternalHooks | gateway.server-impl-import.total | 887.2ms | 887.2ms |
| allInternalHooks | ready.total | 438.9ms | 438.9ms |
| allInternalHooks | runtime.post-attach.total | 438.3ms | 438.3ms |
| allInternalHooks | sidecars.ready.total | 437.0ms | 437.0ms |
| fiftyPlugins | gateway.server-impl-import | 956.0ms | 956.0ms |
| fiftyPlugins | gateway.server-impl-import.total | 956.0ms | 956.0ms |
| fiftyPlugins | cli.main.gateway-run-imports.total | 408.0ms | 408.0ms |
| fiftyPlugins | ready.total | 335.8ms | 335.8ms |
| fiftyPlugins | runtime.post-attach.total | 335.3ms | 335.3ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import | 866.3ms | 866.3ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import.total | 866.3ms | 866.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-imports.total | 396.1ms | 396.1ms |
| fiftyStartupLazyPlugins | ready.total | 299.7ms | 299.7ms |
| fiftyStartupLazyPlugins | runtime.post-attach.total | 299.3ms | 299.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 18569.0ms | 0.377 | 536.5MB | 725.6MB | 189.0MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 1298.6ms | 1298.6ms | 55.8MB | code:0 x1 |
| configGetGatewayPort | config get gateway.port | 468.9ms | 468.9ms | 55.9MB | code:0 x1 |

## Observations

No data.

