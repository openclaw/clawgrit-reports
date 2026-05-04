# OpenClaw Source Performance

Generated: 2026-05-04T06:21:45.533Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | ready log p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 1804.1ms | 1857.4ms | 1803.9ms | 1350.5ms | 29.5ms | 512.0MB | 1.157 |
| skipChannels | gateway, skip channels | 1734.7ms | 1785.0ms | 1734.5ms | 1393.8ms | 28.0ms | 513.3MB | 1.163 |
| oneInternalHook | gateway, one configured internal hook | 1786.6ms | 1835.9ms | 1786.1ms | 1386.5ms | 28.9ms | 485.5MB | 1.127 |
| allInternalHooks | gateway, all internal hooks | 1668.1ms | 1709.5ms | 1396.5ms | 1278.8ms | 34.6ms | 489.5MB | 1.239 |
| fiftyPlugins | gateway, 50 manifest plugins | 1610.4ms | 1618.5ms | 1615.9ms | 1201.4ms | 30.8ms | 476.6MB | 1.251 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 1614.8ms | 1634.9ms | 1614.8ms | 1190.2ms | 30.0ms | 468.8MB | 1.256 |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 817.5ms | 832.5ms |
| default | post-attach.update-sentinel.total | 811.9ms | 827.0ms |
| default | sidecars.main-session-recovery.total | 811.0ms | 826.1ms |
| default | sidecars.subagent-recovery.total | 807.5ms | 822.2ms |
| default | sidecars.restart-sentinel.total | 802.8ms | 817.1ms |
| skipChannels | sidecars.session-locks.total | 731.2ms | 803.5ms |
| skipChannels | post-attach.update-sentinel.total | 725.9ms | 798.1ms |
| skipChannels | sidecars.main-session-recovery.total | 725.2ms | 797.4ms |
| skipChannels | sidecars.subagent-recovery.total | 721.8ms | 794.1ms |
| skipChannels | sidecars.restart-sentinel.total | 717.0ms | 789.5ms |
| oneInternalHook | sidecars.session-locks.total | 819.3ms | 829.5ms |
| oneInternalHook | post-attach.update-sentinel.total | 815.1ms | 825.4ms |
| oneInternalHook | sidecars.main-session-recovery.total | 814.4ms | 824.6ms |
| oneInternalHook | sidecars.subagent-recovery.total | 811.2ms | 821.6ms |
| oneInternalHook | sidecars.restart-sentinel.total | 807.2ms | 817.1ms |
| allInternalHooks | sidecars.session-locks.total | 768.4ms | 778.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 764.5ms | 774.6ms |
| allInternalHooks | sidecars.main-session-recovery.total | 763.8ms | 774.0ms |
| allInternalHooks | sidecars.subagent-recovery.total | 760.9ms | 771.3ms |
| allInternalHooks | sidecars.restart-sentinel.total | 757.2ms | 767.2ms |
| fiftyPlugins | sidecars.session-locks.total | 637.1ms | 640.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 633.6ms | 636.5ms |
| fiftyPlugins | sidecars.main-session-recovery.total | 632.9ms | 635.7ms |
| fiftyPlugins | sidecars.subagent-recovery.total | 629.9ms | 632.7ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 625.7ms | 628.4ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 651.9ms | 661.3ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 648.0ms | 658.0ms |
| fiftyStartupLazyPlugins | sidecars.main-session-recovery.total | 647.2ms | 657.3ms |
| fiftyStartupLazyPlugins | sidecars.subagent-recovery.total | 644.1ms | 654.1ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 640.0ms | 649.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 20082.0ms | 0.349 | 512.8MB | 769.2MB | 256.5MB | mock-openai/gpt-5.4 |
| run-002 | pass | 1/1 | 13705.0ms | 0.511 | 529.1MB | 764.0MB | 234.9MB | mock-openai/gpt-5.4 |
| run-003 | pass | 1/1 | 15377.0ms | 0.455 | 556.0MB | 727.8MB | 171.8MB | mock-openai/gpt-5.4 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 1182.1ms | 1332.1ms | 55.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 521.5ms | 569.4ms | 55.8MB | code:0 x3 |

## Observations

No data.

