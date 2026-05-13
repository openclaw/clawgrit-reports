# OpenClaw Source Performance

Generated: 2026-05-13T06:25:16.429Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 1899.0ms | 1904.6ms | 1671.2ms | 1624.3ms | 27.1ms | 523.8MB | 1.055 |
| skipChannels | gateway, skip channels | 1854.9ms | 1878.7ms | 1644.7ms | 1600.3ms | 30.3ms | 530.9MB | 1.090 |
| oneInternalHook | gateway, one configured internal hook | 1886.8ms | 1890.9ms | 1665.9ms | 1595.9ms | 30.6ms | 521.4MB | 1.067 |
| allInternalHooks | gateway, all internal hooks | 1996.2ms | 2016.0ms | 1751.1ms | 1674.7ms | 29.7ms | 533.4MB | 1.016 |
| fiftyPlugins | gateway, 50 manifest plugins | 1692.3ms | 1708.8ms | 1681.6ms | 1590.3ms | 28.2ms | 533.7MB | 1.235 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1746.3ms | 1768.7ms | 1745.8ms | 1654.9ms | 32.0ms | 533.6MB | 1.191 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-attach.update-sentinel.total | 1176.5ms | 1183.1ms |
| default | sidecars.restart-sentinel.total | 1175.7ms | 1182.2ms |
| default | sidecars.session-locks.total | 1174.8ms | 1181.3ms |
| default | sidecars.main-session-recovery.total | 1170.3ms | 1176.8ms |
| default | sidecars.subagent-recovery.total | 1167.7ms | 1174.0ms |
| skipChannels | post-attach.update-sentinel.total | 1160.4ms | 1176.7ms |
| skipChannels | sidecars.restart-sentinel.total | 1159.6ms | 1175.8ms |
| skipChannels | sidecars.session-locks.total | 1158.6ms | 1174.9ms |
| skipChannels | sidecars.main-session-recovery.total | 1153.8ms | 1170.1ms |
| skipChannels | sidecars.subagent-recovery.total | 1150.8ms | 1167.1ms |
| oneInternalHook | post-attach.update-sentinel.total | 1185.9ms | 1191.0ms |
| oneInternalHook | sidecars.restart-sentinel.total | 1185.1ms | 1190.1ms |
| oneInternalHook | sidecars.session-locks.total | 1184.2ms | 1189.3ms |
| oneInternalHook | sidecars.main-session-recovery.total | 1179.5ms | 1185.0ms |
| oneInternalHook | sidecars.subagent-recovery.total | 1176.9ms | 1182.5ms |
| allInternalHooks | post-attach.update-sentinel.total | 1268.1ms | 1314.3ms |
| allInternalHooks | sidecars.restart-sentinel.total | 1267.2ms | 1313.2ms |
| allInternalHooks | sidecars.session-locks.total | 1266.2ms | 1311.9ms |
| allInternalHooks | sidecars.main-session-recovery.total | 1261.6ms | 1306.6ms |
| allInternalHooks | sidecars.subagent-recovery.total | 1258.5ms | 1303.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 912.6ms | 915.7ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 911.7ms | 914.8ms |
| fiftyPlugins | sidecars.session-locks.total | 910.6ms | 913.7ms |
| fiftyPlugins | sidecars.main-session-recovery.total | 906.7ms | 910.2ms |
| fiftyPlugins | sidecars.subagent-recovery.total | 902.8ms | 907.4ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 937.4ms | 989.9ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 934.0ms | 988.7ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 932.9ms | 986.9ms |
| fiftyStartupLazyPlugins | sidecars.main-session-recovery.total | 929.2ms | 981.4ms |
| fiftyStartupLazyPlugins | sidecars.subagent-recovery.total | 926.3ms | 978.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 17748.0ms | 0.169 | 546.6MB | 633.6MB | 87.1MB | mock-openai/gpt-5.4 |
| run-002 | pass | 1/1 | 14248.0ms | 0.281 | 542.5MB | 628.8MB | 86.3MB | mock-openai/gpt-5.4 |
| run-003 | pass | 1/1 | 15210.0ms | 0.263 | 550.5MB | 622.3MB | 71.8MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 1025.6ms | 1035.6ms | 56.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 416.4ms | 480.9ms | 56.4MB | code:1 x3 |

## Observations

No data.

