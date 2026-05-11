# OpenClaw Source Performance

Generated: 2026-05-11T06:29:34.457Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2171.7ms | 2344.7ms | 1908.9ms | 1835.9ms | 31.2ms | 531.4MB | 1.279 |
| skipChannels | gateway, skip channels | 2014.6ms | 2430.8ms | 1797.3ms | 1753.4ms | 32.6ms | 536.4MB | 1.234 |
| oneInternalHook | gateway, one configured internal hook | 2159.5ms | 2222.4ms | 1923.8ms | 1849.1ms | 31.1ms | 535.0MB | 0.944 |
| allInternalHooks | gateway, all internal hooks | 2549.8ms | 2640.9ms | 2265.5ms | 2152.9ms | 35.7ms | 545.2MB | 1.177 |
| fiftyPlugins | gateway, 50 manifest plugins | 2026.4ms | 2201.0ms | 2025.9ms | 1936.8ms | 34.2ms | 528.9MB | 1.363 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1861.8ms | 1878.0ms | 1850.1ms | 1769.7ms | 33.1ms | 523.4MB | 1.109 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-attach.update-sentinel.total | 1325.7ms | 1415.9ms |
| default | sidecars.restart-sentinel.total | 1325.0ms | 1415.1ms |
| default | sidecars.session-locks.total | 1324.4ms | 1414.0ms |
| default | sidecars.main-session-recovery.total | 1320.1ms | 1408.1ms |
| default | sidecars.subagent-recovery.total | 1317.7ms | 1404.7ms |
| skipChannels | post-attach.update-sentinel.total | 1214.8ms | 1368.1ms |
| skipChannels | sidecars.restart-sentinel.total | 1214.1ms | 1367.4ms |
| skipChannels | sidecars.session-locks.total | 1213.3ms | 1366.6ms |
| skipChannels | sidecars.main-session-recovery.total | 1208.1ms | 1361.0ms |
| skipChannels | sidecars.subagent-recovery.total | 1205.3ms | 1357.7ms |
| oneInternalHook | post-attach.update-sentinel.total | 1345.9ms | 1409.3ms |
| oneInternalHook | sidecars.restart-sentinel.total | 1345.3ms | 1408.5ms |
| oneInternalHook | sidecars.session-locks.total | 1344.6ms | 1407.6ms |
| oneInternalHook | sidecars.main-session-recovery.total | 1339.9ms | 1401.5ms |
| oneInternalHook | sidecars.subagent-recovery.total | 1337.2ms | 1398.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 1570.0ms | 1652.3ms |
| allInternalHooks | sidecars.restart-sentinel.total | 1569.1ms | 1651.4ms |
| allInternalHooks | sidecars.session-locks.total | 1568.0ms | 1650.2ms |
| allInternalHooks | sidecars.main-session-recovery.total | 1559.4ms | 1643.3ms |
| allInternalHooks | sidecars.subagent-recovery.total | 1555.6ms | 1639.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 1095.0ms | 1106.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 1094.2ms | 1105.1ms |
| fiftyPlugins | sidecars.session-locks.total | 1093.1ms | 1103.9ms |
| fiftyPlugins | sidecars.main-session-recovery.total | 1088.1ms | 1099.1ms |
| fiftyPlugins | sidecars.subagent-recovery.total | 1083.2ms | 1095.2ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 987.5ms | 1030.2ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 986.8ms | 1029.3ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 985.9ms | 1028.1ms |
| fiftyStartupLazyPlugins | sidecars.main-session-recovery.total | 982.1ms | 1023.8ms |
| fiftyStartupLazyPlugins | sidecars.subagent-recovery.total | 979.3ms | 1020.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 15488.0ms | 0.194 | 576.0MB | 598.7MB | 22.8MB | mock-openai/gpt-5.4 |
| run-002 | pass | 1/1 | 13243.0ms | 0.227 | 541.0MB | 633.0MB | 92.0MB | mock-openai/gpt-5.4 |
| run-003 | pass | 1/1 | 12965.0ms | 0.231 | 537.0MB | 622.7MB | 85.7MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 842.3ms | 861.5ms | 56.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 346.3ms | 369.1ms | 56.3MB | code:1 x3 |

## Observations

No data.

