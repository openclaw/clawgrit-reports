# OpenClaw Source Performance

Generated: 2026-05-03T06:15:11.802Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 1765.1ms | 1780.5ms | 1668.1ms | 1630.6ms | 26.0ms | 564.4MB | 1.142 |
| skipChannels | gateway, skip channels | 1715.2ms | 1722.7ms | 1677.1ms | 1635.7ms | 28.0ms | 560.9MB | 1.182 |
| oneInternalHook | gateway, one configured internal hook | 1737.3ms | 1766.0ms | 1694.5ms | 1627.6ms | 25.6ms | 560.9MB | 1.151 |
| allInternalHooks | gateway, all internal hooks | 1764.8ms | 1770.3ms | 1712.1ms | 1641.4ms | 26.5ms | 566.8MB | 1.143 |
| fiftyPlugins | gateway, 50 manifest plugins | 1659.6ms | 1667.6ms | 1628.7ms | 1596.8ms | 27.2ms | 558.9MB | 1.208 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1672.6ms | 1704.6ms | 1634.3ms | 1610.0ms | 29.2ms | 553.9MB | 1.199 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | gateway.server-impl-import | 848.8ms | 863.0ms |
| default | gateway.server-impl-import.total | 848.8ms | 863.0ms |
| default | ready.total | 381.4ms | 388.0ms |
| default | runtime.post-attach.total | 380.9ms | 387.4ms |
| default | sidecars.ready.total | 379.7ms | 386.3ms |
| skipChannels | gateway.server-impl-import | 851.6ms | 858.1ms |
| skipChannels | gateway.server-impl-import.total | 851.6ms | 858.1ms |
| skipChannels | ready.total | 376.7ms | 386.1ms |
| skipChannels | runtime.post-attach.total | 376.1ms | 385.5ms |
| skipChannels | sidecars.ready.total | 374.9ms | 384.5ms |
| oneInternalHook | gateway.server-impl-import | 841.3ms | 859.7ms |
| oneInternalHook | gateway.server-impl-import.total | 841.3ms | 859.7ms |
| oneInternalHook | ready.total | 428.0ms | 441.7ms |
| oneInternalHook | runtime.post-attach.total | 427.4ms | 441.2ms |
| oneInternalHook | sidecars.ready.total | 426.3ms | 440.0ms |
| allInternalHooks | gateway.server-impl-import | 840.6ms | 844.2ms |
| allInternalHooks | gateway.server-impl-import.total | 840.6ms | 844.2ms |
| allInternalHooks | ready.total | 433.2ms | 447.4ms |
| allInternalHooks | runtime.post-attach.total | 432.6ms | 446.9ms |
| allInternalHooks | sidecars.ready.total | 431.6ms | 445.8ms |
| fiftyPlugins | gateway.server-impl-import | 860.0ms | 871.8ms |
| fiftyPlugins | gateway.server-impl-import.total | 860.0ms | 871.8ms |
| fiftyPlugins | cli.main.gateway-run-imports.total | 392.2ms | 409.7ms |
| fiftyPlugins | ready.total | 300.4ms | 306.5ms |
| fiftyPlugins | runtime.post-attach.total | 299.9ms | 306.1ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import | 880.6ms | 913.2ms |
| fiftyStartupLazyPlugins | gateway.server-impl-import.total | 880.6ms | 913.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-imports.total | 391.7ms | 395.6ms |
| fiftyStartupLazyPlugins | ready.total | 301.5ms | 309.9ms |
| fiftyStartupLazyPlugins | runtime.post-attach.total | 300.8ms | 309.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 15079.0ms | 0.464 | 567.6MB | 790.0MB | 222.4MB | mock-openai/gpt-5.4 |
| run-002 | pass | 1/1 | 12757.0ms | 0.549 | 567.3MB | 787.8MB | 220.5MB | mock-openai/gpt-5.4 |
| run-003 | pass | 1/1 | 12797.0ms | 0.547 | 572.5MB | 796.5MB | 224.1MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 1245.6ms | 1273.4ms | 55.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 465.1ms | 470.0ms | 55.8MB | code:0 x3 |

## Observations

No data.

