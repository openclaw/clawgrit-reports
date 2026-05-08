# OpenClaw Source Performance

Generated: 2026-05-08T05:53:48.381Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 1662.0ms | 1673.7ms | 1661.8ms | 1390.7ms | 27.4ms | 526.1MB | 1.220 |
| skipChannels | gateway, skip channels | 1653.1ms | 1672.9ms | 1652.7ms | 1390.5ms | 26.8ms | 541.8MB | 1.213 |
| oneInternalHook | gateway, one configured internal hook | 1700.2ms | 1701.0ms | 1699.2ms | 1414.5ms | 26.7ms | 532.9MB | 1.194 |
| allInternalHooks | gateway, all internal hooks | 1705.6ms | 1717.1ms | 1629.2ms | 1379.5ms | 26.5ms | 542.5MB | 1.190 |
| fiftyPlugins | gateway, 50 manifest plugins | 1579.1ms | 1581.6ms | 1578.8ms | 975.9ms | 27.2ms | 518.4MB | 1.288 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1589.5ms | 1600.7ms | 1589.2ms | 980.5ms | 29.4ms | 520.2MB | 1.267 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 977.0ms | 1000.8ms |
| default | post-attach.update-sentinel.total | 972.5ms | 996.0ms |
| default | sidecars.main-session-recovery.total | 971.8ms | 995.1ms |
| default | sidecars.subagent-recovery.total | 969.4ms | 991.5ms |
| default | sidecars.restart-sentinel.total | 965.8ms | 986.7ms |
| skipChannels | sidecars.session-locks.total | 963.1ms | 963.9ms |
| skipChannels | post-attach.update-sentinel.total | 958.4ms | 959.2ms |
| skipChannels | sidecars.main-session-recovery.total | 957.6ms | 958.5ms |
| skipChannels | sidecars.subagent-recovery.total | 955.0ms | 956.0ms |
| skipChannels | sidecars.restart-sentinel.total | 951.1ms | 952.3ms |
| oneInternalHook | sidecars.session-locks.total | 1000.6ms | 1003.4ms |
| oneInternalHook | post-attach.update-sentinel.total | 990.8ms | 993.8ms |
| oneInternalHook | sidecars.main-session-recovery.total | 990.2ms | 993.1ms |
| oneInternalHook | sidecars.subagent-recovery.total | 988.0ms | 990.8ms |
| oneInternalHook | sidecars.restart-sentinel.total | 984.9ms | 987.5ms |
| allInternalHooks | sidecars.session-locks.total | 1021.2ms | 1032.0ms |
| allInternalHooks | post-attach.update-sentinel.total | 1017.6ms | 1022.7ms |
| allInternalHooks | sidecars.main-session-recovery.total | 1017.0ms | 1022.0ms |
| allInternalHooks | sidecars.subagent-recovery.total | 1014.8ms | 1019.7ms |
| allInternalHooks | sidecars.restart-sentinel.total | 1011.8ms | 1016.5ms |
| fiftyPlugins | sidecars.session-locks.total | 851.3ms | 867.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 848.3ms | 864.1ms |
| fiftyPlugins | sidecars.main-session-recovery.total | 847.6ms | 863.4ms |
| fiftyPlugins | sidecars.subagent-recovery.total | 845.2ms | 861.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 841.5ms | 857.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 873.2ms | 880.9ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 870.1ms | 877.7ms |
| fiftyStartupLazyPlugins | sidecars.main-session-recovery.total | 869.3ms | 877.0ms |
| fiftyStartupLazyPlugins | sidecars.subagent-recovery.total | 866.9ms | 874.6ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 863.1ms | 870.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12223.0ms | 0.164 | 618.0MB | 661.8MB | 43.8MB | mock-openai/gpt-5.4 |
| run-002 | pass | 1/1 | 8517.0ms | 0.235 | 585.6MB | 600.4MB | 14.9MB | mock-openai/gpt-5.4 |
| run-003 | pass | 1/1 | 8463.0ms | 0.236 | 595.8MB | 608.5MB | 12.7MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 767.1ms | 788.7ms | 56.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 406.7ms | 418.5ms | 56.3MB | code:0 x3 |

## Observations

No data.

