# OpenClaw Source Performance

Generated: 2026-05-06T06:16:20.653Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 1805.9ms | 1901.1ms | 1805.8ms | 1163.3ms | 28.6ms | 500.7MB | 1.124 |
| skipChannels | gateway, skip channels | 1826.6ms | 1874.3ms | 1826.6ms | 1230.7ms | 35.2ms | 497.0MB | 1.111 |
| oneInternalHook | gateway, one configured internal hook | 1752.2ms | 1872.4ms | 1752.1ms | 1167.9ms | 29.9ms | 478.8MB | 1.185 |
| allInternalHooks | gateway, all internal hooks | 1744.5ms | 1912.8ms | 1261.4ms | 1150.0ms | 28.8ms | 477.4MB | 1.153 |
| fiftyPlugins | gateway, 50 manifest plugins | 1659.8ms | 1674.7ms | 1659.5ms | 1021.8ms | 28.9ms | 522.9MB | 1.225 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1586.5ms | 1745.4ms | 1586.0ms | 983.8ms | 30.9ms | 530.6MB | 1.310 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 1073.0ms | 1142.2ms |
| default | post-attach.update-sentinel.total | 1068.1ms | 1136.3ms |
| default | sidecars.main-session-recovery.total | 1067.4ms | 1135.3ms |
| default | sidecars.subagent-recovery.total | 1064.7ms | 1131.7ms |
| default | sidecars.restart-sentinel.total | 1060.7ms | 1122.5ms |
| skipChannels | sidecars.session-locks.total | 1072.8ms | 1081.1ms |
| skipChannels | post-attach.update-sentinel.total | 1060.2ms | 1075.9ms |
| skipChannels | sidecars.main-session-recovery.total | 1059.1ms | 1075.1ms |
| skipChannels | sidecars.subagent-recovery.total | 1055.8ms | 1072.5ms |
| skipChannels | sidecars.restart-sentinel.total | 1050.8ms | 1068.4ms |
| oneInternalHook | sidecars.session-locks.total | 1014.8ms | 1107.5ms |
| oneInternalHook | post-attach.update-sentinel.total | 1010.9ms | 1101.2ms |
| oneInternalHook | sidecars.main-session-recovery.total | 1010.1ms | 1100.1ms |
| oneInternalHook | sidecars.subagent-recovery.total | 1007.4ms | 1096.9ms |
| oneInternalHook | sidecars.restart-sentinel.total | 1003.8ms | 1092.7ms |
| allInternalHooks | sidecars.session-locks.total | 1088.7ms | 1186.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 1085.0ms | 1181.1ms |
| allInternalHooks | sidecars.main-session-recovery.total | 1084.3ms | 1180.3ms |
| allInternalHooks | sidecars.subagent-recovery.total | 1082.0ms | 1177.6ms |
| allInternalHooks | sidecars.restart-sentinel.total | 1078.8ms | 1173.7ms |
| fiftyPlugins | sidecars.session-locks.total | 907.1ms | 920.5ms |
| fiftyPlugins | post-attach.update-sentinel.total | 903.7ms | 916.8ms |
| fiftyPlugins | sidecars.main-session-recovery.total | 903.0ms | 916.0ms |
| fiftyPlugins | sidecars.subagent-recovery.total | 900.6ms | 913.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 896.7ms | 909.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 865.0ms | 904.5ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 861.0ms | 900.7ms |
| fiftyStartupLazyPlugins | sidecars.main-session-recovery.total | 860.3ms | 899.9ms |
| fiftyStartupLazyPlugins | sidecars.subagent-recovery.total | 857.9ms | 896.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 853.8ms | 891.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 16669.0ms | 0.300 | 565.4MB | 598.8MB | 33.4MB | mock-openai/gpt-5.4 |
| run-002 | pass | 1/1 | 12822.0ms | 0.312 | 570.0MB | 598.7MB | 28.7MB | mock-openai/gpt-5.4 |
| run-003 | pass | 1/1 | 11891.0ms | 0.336 | 560.2MB | 631.2MB | 71.0MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 995.9ms | 1150.0ms | 56.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 447.8ms | 518.5ms | 56.2MB | code:0 x3 |

## Observations

No data.

