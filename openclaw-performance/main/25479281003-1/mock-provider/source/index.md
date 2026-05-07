# OpenClaw Source Performance

Generated: 2026-05-07T06:19:47.401Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 1586.1ms | 1612.6ms | 1586.0ms | 1042.2ms | 29.0ms | 501.6MB | 1.262 |
| skipChannels | gateway, skip channels | 1553.5ms | 1569.6ms | 1553.0ms | 1031.4ms | 26.2ms | 498.0MB | 1.294 |
| oneInternalHook | gateway, one configured internal hook | 1616.2ms | 1621.9ms | 1621.8ms | 1049.0ms | 28.4ms | 474.8MB | 1.241 |
| allInternalHooks | gateway, all internal hooks | 1633.2ms | 1654.8ms | 1170.6ms | 1057.5ms | 29.2ms | 471.1MB | 1.225 |
| fiftyPlugins | gateway, 50 manifest plugins | 1561.8ms | 1567.8ms | 1561.5ms | 962.6ms | 26.2ms | 519.3MB | 1.300 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1547.2ms | 1573.0ms | 1546.6ms | 942.8ms | 25.8ms | 544.5MB | 1.340 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 919.8ms | 945.5ms |
| default | post-attach.update-sentinel.total | 915.4ms | 941.2ms |
| default | sidecars.main-session-recovery.total | 914.8ms | 940.5ms |
| default | sidecars.subagent-recovery.total | 912.5ms | 938.3ms |
| default | sidecars.restart-sentinel.total | 908.7ms | 934.7ms |
| skipChannels | sidecars.session-locks.total | 893.2ms | 910.9ms |
| skipChannels | post-attach.update-sentinel.total | 888.7ms | 906.7ms |
| skipChannels | sidecars.main-session-recovery.total | 888.0ms | 906.0ms |
| skipChannels | sidecars.subagent-recovery.total | 885.7ms | 903.8ms |
| skipChannels | sidecars.restart-sentinel.total | 882.0ms | 900.2ms |
| oneInternalHook | sidecars.session-locks.total | 951.7ms | 957.5ms |
| oneInternalHook | post-attach.update-sentinel.total | 941.5ms | 947.5ms |
| oneInternalHook | sidecars.main-session-recovery.total | 940.8ms | 946.8ms |
| oneInternalHook | sidecars.subagent-recovery.total | 938.5ms | 944.5ms |
| oneInternalHook | sidecars.restart-sentinel.total | 935.1ms | 941.1ms |
| allInternalHooks | sidecars.session-locks.total | 987.9ms | 990.9ms |
| allInternalHooks | post-attach.update-sentinel.total | 984.0ms | 986.8ms |
| allInternalHooks | sidecars.main-session-recovery.total | 983.3ms | 986.1ms |
| allInternalHooks | sidecars.subagent-recovery.total | 981.0ms | 983.5ms |
| allInternalHooks | sidecars.restart-sentinel.total | 977.8ms | 980.1ms |
| fiftyPlugins | sidecars.session-locks.total | 859.8ms | 863.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 856.3ms | 860.5ms |
| fiftyPlugins | sidecars.main-session-recovery.total | 855.6ms | 859.8ms |
| fiftyPlugins | sidecars.subagent-recovery.total | 853.2ms | 857.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 849.7ms | 853.5ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 846.1ms | 861.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 842.8ms | 858.3ms |
| fiftyStartupLazyPlugins | sidecars.main-session-recovery.total | 842.2ms | 857.7ms |
| fiftyStartupLazyPlugins | sidecars.subagent-recovery.total | 839.9ms | 855.4ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 836.1ms | 851.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12342.0ms | 0.162 | 547.5MB | 609.8MB | 62.3MB | mock-openai/gpt-5.4 |
| run-002 | pass | 1/1 | 9395.0ms | 0.319 | 553.9MB | 628.5MB | 74.5MB | mock-openai/gpt-5.4 |
| run-003 | pass | 1/1 | 9077.0ms | 0.220 | 555.3MB | 635.5MB | 80.2MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 771.5ms | 773.1ms | 56.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 396.3ms | 403.6ms | 56.2MB | code:0 x3 |

## Observations

No data.

