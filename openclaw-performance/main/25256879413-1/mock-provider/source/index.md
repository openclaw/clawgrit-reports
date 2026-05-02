# OpenClaw Source Performance

Generated: 2026-05-02T16:52:41.017Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 1847.5ms | 1847.5ms | 1747.1ms | 1702.8ms | 30.7ms | 560.6MB | 1.083 |
| skipChannels | gateway, skip channels | 1787.6ms | 1787.6ms | 1750.2ms | 1706.4ms | 26.6ms | 560.8MB | 1.119 |
| oneInternalHook | gateway, one configured internal hook | 1903.5ms | 1903.5ms | 1854.0ms | 1784.6ms | 28.0ms | 543.4MB | 1.051 |
| allInternalHooks | gateway, all internal hooks | 1864.9ms | 1864.9ms | 1807.8ms | 1739.2ms | 25.3ms | 525.7MB | 1.072 |
| fiftyPlugins | gateway, 50 manifest plugins | 1726.0ms | 1726.0ms | 1688.0ms | 1660.9ms | 32.0ms | 555.0MB | 1.159 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1957.1ms | 1957.1ms | 1917.7ms | 1892.1ms | 29.1ms | 549.0MB | 1.022 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | gateway.server-impl-import | 884.3ms | 884.3ms |
| default | gateway.server-impl-import.total | 884.3ms | 884.3ms |
| default | ready.total | 397.4ms | 397.4ms |
| default | runtime.post-attach.total | 396.9ms | 396.9ms |
| default | sidecars.ready.total | 395.7ms | 395.7ms |
| skipChannels | gateway.server-impl-import | 879.8ms | 879.8ms |
| skipChannels | gateway.server-impl-import.total | 879.8ms | 879.8ms |
| skipChannels | ready.total | 409.2ms | 409.2ms |
| skipChannels | runtime.post-attach.total | 408.5ms | 408.5ms |
| skipChannels | sidecars.ready.total | 407.4ms | 407.4ms |
| oneInternalHook | gateway.server-impl-import | 934.6ms | 934.6ms |
| oneInternalHook | gateway.server-impl-import.total | 934.6ms | 934.6ms |
| oneInternalHook | ready.total | 428.8ms | 428.8ms |
| oneInternalHook | runtime.post-attach.total | 428.3ms | 428.3ms |
| oneInternalHook | sidecars.ready.total | 427.1ms | 427.1ms |
| allInternalHooks | gateway.server-impl-import | 919.1ms | 919.1ms |
| allInternalHooks | gateway.server-impl-import.total | 919.1ms | 919.1ms |
| allInternalHooks | ready.total | 454.1ms | 454.1ms |
| allInternalHooks | runtime.post-attach.total | 453.5ms | 453.5ms |
| allInternalHooks | sidecars.ready.total | 452.3ms | 452.3ms |
| fiftyPlugins | gateway.server-impl-import | 887.7ms | 887.7ms |
| fiftyPlugins | gateway.server-impl-import.total | 887.7ms | 887.7ms |
| fiftyPlugins | cli.main.gateway-run-imports.total | 415.5ms | 415.5ms |
| fiftyPlugins | ready.total | 314.7ms | 314.7ms |
| fiftyPlugins | runtime.post-attach.total | 314.1ms | 314.1ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import | 1028.3ms | 1028.3ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import.total | 1028.3ms | 1028.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-imports.total | 477.4ms | 477.4ms |
| fiftyStartupLazyPlugins | ready.total | 328.1ms | 328.1ms |
| fiftyStartupLazyPlugins | runtime.post-attach.total | 327.6ms | 327.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 17253.0ms | 0.406 | 531.4MB | 698.2MB | 166.8MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 1288.8ms | 1288.8ms | 55.9MB | code:0 x1 |
| configGetGatewayPort | config get gateway.port | 498.8ms | 498.8ms | 55.7MB | code:0 x1 |

## Observations

No data.

