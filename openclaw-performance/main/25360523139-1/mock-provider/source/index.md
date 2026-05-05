# OpenClaw Source Performance

Generated: 2026-05-05T06:06:06.506Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 1681.1ms | 1742.8ms | 1680.4ms | 1283.5ms | 26.8ms | 525.4MB | 1.201 |
| skipChannels | gateway, skip channels | 1600.9ms | 1626.0ms | 1600.6ms | 1256.2ms | 25.9ms | 519.2MB | 1.250 |
| oneInternalHook | gateway, one configured internal hook | 1699.6ms | 1715.4ms | 1699.3ms | 1320.7ms | 26.4ms | 498.0MB | 1.219 |
| allInternalHooks | gateway, all internal hooks | 1720.7ms | 2061.8ms | 1389.0ms | 1282.2ms | 29.9ms | 501.2MB | 1.199 |
| fiftyPlugins | gateway, 50 manifest plugins | 1587.9ms | 1614.7ms | 1587.1ms | 1177.4ms | 28.3ms | 481.7MB | 1.271 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1591.3ms | 1591.6ms | 1590.7ms | 1178.8ms | 27.3ms | 475.6MB | 1.265 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 780.6ms | 813.8ms |
| default | post-attach.update-sentinel.total | 775.9ms | 809.1ms |
| default | sidecars.main-session-recovery.total | 775.2ms | 808.4ms |
| default | sidecars.subagent-recovery.total | 772.4ms | 805.6ms |
| default | sidecars.restart-sentinel.total | 766.7ms | 801.5ms |
| skipChannels | sidecars.session-locks.total | 735.2ms | 745.9ms |
| skipChannels | post-attach.update-sentinel.total | 730.6ms | 741.2ms |
| skipChannels | sidecars.main-session-recovery.total | 730.0ms | 740.5ms |
| skipChannels | sidecars.subagent-recovery.total | 727.3ms | 737.8ms |
| skipChannels | sidecars.restart-sentinel.total | 723.2ms | 733.4ms |
| oneInternalHook | sidecars.session-locks.total | 784.3ms | 792.9ms |
| oneInternalHook | post-attach.update-sentinel.total | 780.9ms | 789.4ms |
| oneInternalHook | sidecars.main-session-recovery.total | 780.2ms | 788.7ms |
| oneInternalHook | sidecars.subagent-recovery.total | 777.7ms | 786.1ms |
| oneInternalHook | sidecars.restart-sentinel.total | 774.2ms | 782.4ms |
| allInternalHooks | sidecars.session-locks.total | 827.3ms | 975.8ms |
| allInternalHooks | post-attach.update-sentinel.total | 821.3ms | 972.0ms |
| allInternalHooks | sidecars.main-session-recovery.total | 820.1ms | 971.3ms |
| allInternalHooks | sidecars.subagent-recovery.total | 815.9ms | 968.7ms |
| allInternalHooks | sidecars.restart-sentinel.total | 810.7ms | 964.5ms |
| fiftyPlugins | sidecars.session-locks.total | 650.6ms | 662.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 647.0ms | 658.9ms |
| fiftyPlugins | sidecars.main-session-recovery.total | 646.2ms | 658.2ms |
| fiftyPlugins | sidecars.subagent-recovery.total | 643.4ms | 655.2ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 639.0ms | 650.5ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 650.9ms | 651.6ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 647.6ms | 648.1ms |
| fiftyStartupLazyPlugins | sidecars.main-session-recovery.total | 646.8ms | 647.3ms |
| fiftyStartupLazyPlugins | sidecars.subagent-recovery.total | 644.1ms | 644.5ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 639.7ms | 640.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 17135.0ms | 0.233 | 529.3MB | 579.4MB | 50.1MB | mock-openai/gpt-5.4 |
| run-002 | pass | 1/1 | 10423.0ms | 0.288 | 539.3MB | 591.1MB | 51.8MB | mock-openai/gpt-5.4 |
| run-003 | pass | 1/1 | 10182.0ms | 0.295 | 523.4MB | 571.4MB | 48.1MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 1281.7ms | 1291.2ms | 55.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 435.6ms | 444.6ms | 56.2MB | code:0 x3 |

## Observations

No data.

