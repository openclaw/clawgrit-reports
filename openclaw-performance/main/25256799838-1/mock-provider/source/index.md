# OpenClaw Source Performance

Generated: 2026-05-02T16:48:33.212Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 1753.5ms | 1753.5ms | 1645.2ms | 1604.0ms | 28.9ms | 525.8MB | 1.141 |
| skipChannels | gateway, skip channels | 1681.0ms | 1681.0ms | 1643.5ms | 1606.6ms | 24.8ms | 521.8MB | 1.190 |
| oneInternalHook | gateway, one configured internal hook | 1711.9ms | 1711.9ms | 1659.1ms | 1594.2ms | 28.4ms | 527.4MB | 1.168 |
| allInternalHooks | gateway, all internal hooks | 1740.1ms | 1740.1ms | 1674.4ms | 1604.6ms | 26.0ms | 526.9MB | 1.149 |
| fiftyPlugins | gateway, 50 manifest plugins | 1633.7ms | 1633.7ms | 1594.9ms | 1568.3ms | 28.7ms | 562.7MB | 1.224 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1676.1ms | 1676.1ms | 1637.1ms | 1613.7ms | 24.9ms | 555.7MB | 1.193 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | gateway.server-impl-import | 854.9ms | 854.9ms |
| default | gateway.server-impl-import.total | 854.9ms | 854.9ms |
| default | ready.total | 360.0ms | 360.0ms |
| default | runtime.post-attach.total | 359.4ms | 359.4ms |
| default | sidecars.ready.total | 358.1ms | 358.1ms |
| skipChannels | gateway.server-impl-import | 855.8ms | 855.8ms |
| skipChannels | gateway.server-impl-import.total | 855.8ms | 855.8ms |
| skipChannels | cli.main.gateway-run-imports.total | 361.0ms | 361.0ms |
| skipChannels | ready.total | 357.4ms | 357.4ms |
| skipChannels | runtime.post-attach.total | 356.8ms | 356.8ms |
| oneInternalHook | gateway.server-impl-import | 851.6ms | 851.6ms |
| oneInternalHook | gateway.server-impl-import.total | 851.6ms | 851.6ms |
| oneInternalHook | ready.total | 405.3ms | 405.3ms |
| oneInternalHook | runtime.post-attach.total | 404.7ms | 404.7ms |
| oneInternalHook | sidecars.ready.total | 403.5ms | 403.5ms |
| allInternalHooks | gateway.server-impl-import | 867.7ms | 867.7ms |
| allInternalHooks | gateway.server-impl-import.total | 867.7ms | 867.7ms |
| allInternalHooks | ready.total | 418.8ms | 418.8ms |
| allInternalHooks | runtime.post-attach.total | 418.2ms | 418.2ms |
| allInternalHooks | sidecars.ready.total | 416.9ms | 416.9ms |
| fiftyPlugins | gateway.server-impl-import | 836.8ms | 836.8ms |
| fiftyPlugins | gateway.server-impl-import.total | 836.8ms | 836.8ms |
| fiftyPlugins | cli.main.gateway-run-imports.total | 379.9ms | 379.9ms |
| fiftyPlugins | ready.total | 314.2ms | 314.2ms |
| fiftyPlugins | runtime.post-attach.total | 313.8ms | 313.8ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import | 900.0ms | 900.0ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import.total | 900.0ms | 900.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-imports.total | 376.8ms | 376.8ms |
| fiftyStartupLazyPlugins | ready.total | 296.7ms | 296.7ms |
| fiftyStartupLazyPlugins | runtime.post-attach.total | 296.2ms | 296.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12144.0ms | 0.247 | 530.9MB | 540.7MB | 9.9MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 1328.9ms | 1328.9ms | 55.8MB | code:0x1 |
| configGetGatewayPort | config get gateway.port | 461.1ms | 461.1ms | 55.9MB | code:0x1 |

## Observations

No data.

