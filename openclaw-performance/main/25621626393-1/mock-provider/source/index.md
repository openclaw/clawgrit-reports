# OpenClaw Source Performance

Generated: 2026-05-10T06:22:25.612Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2242.4ms | 2265.2ms | 2242.3ms | 1989.9ms | 36.5ms | 526.4MB | 1.350 |
| skipChannels | gateway, skip channels | 2357.4ms | 2444.4ms | 2357.2ms | 2159.5ms | 38.1ms | 529.5MB | 1.273 |
| oneInternalHook | gateway, one configured internal hook | 2574.7ms | 2796.3ms | 2574.4ms | 2276.8ms | 35.8ms | 532.8MB | 1.324 |
| allInternalHooks | gateway, all internal hooks | 2155.3ms | 2218.4ms | 2054.3ms | 1877.7ms | 35.6ms | 536.5MB | 1.392 |
| fiftyPlugins | gateway, 50 manifest plugins | 1860.6ms | 1958.5ms | 1860.2ms | 1136.7ms | 31.7ms | 548.6MB | 1.106 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1770.0ms | 1827.3ms | 1769.8ms | 1125.1ms | 29.8ms | 536.8MB | 1.219 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 1313.9ms | 1359.5ms |
| default | post-attach.update-sentinel.total | 1308.6ms | 1350.0ms |
| default | sidecars.main-session-recovery.total | 1307.5ms | 1347.7ms |
| default | sidecars.subagent-recovery.total | 1303.1ms | 1336.6ms |
| default | sidecars.restart-sentinel.total | 1296.4ms | 1330.6ms |
| skipChannels | sidecars.session-locks.total | 1244.4ms | 1376.6ms |
| skipChannels | post-attach.update-sentinel.total | 1237.8ms | 1370.7ms |
| skipChannels | sidecars.main-session-recovery.total | 1236.3ms | 1369.8ms |
| skipChannels | sidecars.subagent-recovery.total | 1231.7ms | 1366.8ms |
| skipChannels | sidecars.restart-sentinel.total | 1225.2ms | 1362.0ms |
| oneInternalHook | sidecars.session-locks.total | 1445.0ms | 1700.4ms |
| oneInternalHook | post-attach.update-sentinel.total | 1429.4ms | 1684.1ms |
| oneInternalHook | sidecars.main-session-recovery.total | 1428.0ms | 1682.7ms |
| oneInternalHook | sidecars.subagent-recovery.total | 1423.2ms | 1679.0ms |
| oneInternalHook | sidecars.restart-sentinel.total | 1417.9ms | 1674.0ms |
| allInternalHooks | sidecars.session-locks.total | 1319.5ms | 1338.9ms |
| allInternalHooks | post-attach.update-sentinel.total | 1313.3ms | 1333.7ms |
| allInternalHooks | sidecars.main-session-recovery.total | 1312.3ms | 1332.8ms |
| allInternalHooks | sidecars.subagent-recovery.total | 1308.7ms | 1330.1ms |
| allInternalHooks | sidecars.restart-sentinel.total | 1303.8ms | 1326.1ms |
| fiftyPlugins | sidecars.session-locks.total | 977.4ms | 1071.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 974.1ms | 1067.2ms |
| fiftyPlugins | sidecars.main-session-recovery.total | 973.3ms | 1066.1ms |
| fiftyPlugins | sidecars.subagent-recovery.total | 970.6ms | 1063.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 966.4ms | 1058.0ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 946.7ms | 1024.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 943.0ms | 1020.9ms |
| fiftyStartupLazyPlugins | sidecars.main-session-recovery.total | 942.3ms | 1020.1ms |
| fiftyStartupLazyPlugins | sidecars.subagent-recovery.total | 939.6ms | 1017.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 935.3ms | 1012.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13043.0ms | 0.153 | 565.5MB | 582.8MB | 17.3MB | mock-openai/gpt-5.4 |
| run-002 | pass | 1/1 | 9365.0ms | 0.320 | 565.1MB | 644.5MB | 79.4MB | mock-openai/gpt-5.4 |
| run-003 | pass | 1/1 | 9659.0ms | 0.311 | 567.3MB | 645.7MB | 78.4MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 809.4ms | 810.7ms | 56.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 416.1ms | 420.5ms | 56.3MB | code:0 x3 |

## Observations

No data.

