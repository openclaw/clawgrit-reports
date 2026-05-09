# OpenClaw Source Performance

Generated: 2026-05-09T06:06:55.494Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 1652.2ms | 1674.2ms | 1652.1ms | 1382.7ms | 28.8ms | 538.7MB | 1.211 |
| skipChannels | gateway, skip channels | 1639.3ms | 1647.9ms | 1625.4ms | 1374.1ms | 29.2ms | 538.1MB | 1.230 |
| oneInternalHook | gateway, one configured internal hook | 1683.9ms | 1696.3ms | 1683.7ms | 1396.3ms | 28.4ms | 527.1MB | 1.198 |
| allInternalHooks | gateway, all internal hooks | 1682.2ms | 1693.6ms | 1602.4ms | 1374.5ms | 29.2ms | 547.4MB | 1.195 |
| fiftyPlugins | gateway, 50 manifest plugins | 1575.9ms | 1579.7ms | 1575.7ms | 976.1ms | 29.2ms | 521.2MB | 1.273 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1592.0ms | 1601.0ms | 1591.6ms | 980.1ms | 29.0ms | 522.2MB | 1.278 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 975.0ms | 976.9ms |
| default | post-attach.update-sentinel.total | 970.3ms | 972.5ms |
| default | sidecars.main-session-recovery.total | 969.6ms | 971.7ms |
| default | sidecars.subagent-recovery.total | 967.2ms | 969.3ms |
| default | sidecars.restart-sentinel.total | 963.7ms | 965.8ms |
| skipChannels | sidecars.session-locks.total | 951.4ms | 952.1ms |
| skipChannels | post-attach.update-sentinel.total | 944.8ms | 947.6ms |
| skipChannels | sidecars.main-session-recovery.total | 944.2ms | 946.9ms |
| skipChannels | sidecars.subagent-recovery.total | 941.7ms | 944.5ms |
| skipChannels | sidecars.restart-sentinel.total | 938.3ms | 940.9ms |
| oneInternalHook | sidecars.session-locks.total | 995.3ms | 1007.3ms |
| oneInternalHook | post-attach.update-sentinel.total | 985.6ms | 997.1ms |
| oneInternalHook | sidecars.main-session-recovery.total | 985.0ms | 996.4ms |
| oneInternalHook | sidecars.subagent-recovery.total | 982.8ms | 994.1ms |
| oneInternalHook | sidecars.restart-sentinel.total | 979.9ms | 990.7ms |
| allInternalHooks | sidecars.session-locks.total | 1007.3ms | 1016.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 999.5ms | 1008.8ms |
| allInternalHooks | sidecars.main-session-recovery.total | 998.8ms | 1008.1ms |
| allInternalHooks | sidecars.subagent-recovery.total | 996.4ms | 1005.7ms |
| allInternalHooks | sidecars.restart-sentinel.total | 992.8ms | 1002.5ms |
| fiftyPlugins | sidecars.session-locks.total | 862.4ms | 869.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 859.3ms | 866.6ms |
| fiftyPlugins | sidecars.main-session-recovery.total | 858.7ms | 865.9ms |
| fiftyPlugins | sidecars.subagent-recovery.total | 856.2ms | 863.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 852.3ms | 859.5ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 856.6ms | 878.2ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 853.6ms | 875.0ms |
| fiftyStartupLazyPlugins | sidecars.main-session-recovery.total | 852.9ms | 874.3ms |
| fiftyStartupLazyPlugins | sidecars.subagent-recovery.total | 850.5ms | 871.9ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 846.8ms | 868.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12319.0ms | 0.162 | 603.0MB | 680.7MB | 77.6MB | mock-openai/gpt-5.4 |
| run-002 | pass | 1/1 | 9037.0ms | 0.221 | 565.0MB | 637.3MB | 72.3MB | mock-openai/gpt-5.4 |
| run-003 | pass | 1/1 | 8889.0ms | 0.225 | 560.8MB | 638.0MB | 77.2MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 770.7ms | 787.7ms | 56.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 409.7ms | 409.7ms | 56.4MB | code:0 x3 |

## Observations

No data.

