# OpenClaw Source Performance

Generated: 2026-07-10T02:42:40.328Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4113.8ms | 4147.4ms | 4112.7ms | 3950.8ms | 4055.3ms | 31.6ms | 815.0MB | 1.216 |
| skipChannels | gateway, skip channels | 4384.0ms | 4512.5ms | 4382.8ms | 4257.2ms | 4323.0ms | 29.9ms | 817.7MB | 1.330 |
| oneInternalHook | gateway, one configured internal hook | 3977.0ms | 4170.4ms | 3976.7ms | 3911.7ms | 3951.6ms | 30.0ms | 816.4MB | 1.271 |
| allInternalHooks | gateway, all internal hooks | 3818.9ms | 3879.7ms | 3818.8ms | 3751.4ms | 3784.6ms | 28.9ms | 820.6MB | 1.309 |
| fiftyPlugins | gateway, 50 manifest plugins | 4184.2ms | 4530.4ms | 4184.1ms | 3991.2ms | 4060.3ms | 32.0ms | 794.1MB | 1.195 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4004.6ms | 4184.4ms | 4004.0ms | 3876.2ms | 3948.9ms | 30.5ms | 787.6MB | 1.249 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 449.4MB | 406.4MB | ok |
| migrate-hermes | 442.3MB | 399.2MB | ok |
| llm-task | 419.9MB | 376.9MB | ok |
| active-memory | 405.7MB | 362.7MB | ok |
| xai | 400.9MB | 357.8MB | ok |
| openai | 388.0MB | 344.9MB | ok |
| voice-call | 369.2MB | 326.1MB | ok |
| google | 357.1MB | 314.0MB | ok |
| minimax | 356.3MB | 313.2MB | ok |
| volcengine | 311.7MB | 268.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 2980.3ms | 3010.8ms |
| default | cli.main.gateway-run-bootstrap | 2460.1ms | 2463.9ms |
| default | post-attach.update-sentinel.total | 911.4ms | 916.6ms |
| default | sidecars.restart-sentinel.total | 910.8ms | 916.0ms |
| default | sidecars.session-locks.total | 910.2ms | 915.4ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 3141.4ms | 3356.3ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2605.0ms | 2756.0ms |
| skipChannels | post-attach.update-sentinel.total | 1058.8ms | 1153.3ms |
| skipChannels | sidecars.restart-sentinel.total | 1058.2ms | 1152.5ms |
| skipChannels | sidecars.session-locks.total | 1057.4ms | 1151.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2946.4ms | 3177.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2424.4ms | 2619.0ms |
| oneInternalHook | sidecars.subagent-recovery.total | 1004.1ms | 1004.1ms |
| oneInternalHook | sidecars.ready.total | 999.1ms | 999.1ms |
| oneInternalHook | sidecars.total.total | 996.6ms | 996.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2860.2ms | 2867.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2329.6ms | 2352.7ms |
| allInternalHooks | memory.ready.rssMb | 806.3ms | 811.6ms |
| allInternalHooks | post-attach.update-check.total | 763.1ms | 800.2ms |
| allInternalHooks | ready.total | 745.0ms | 786.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3089.2ms | 3545.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2506.8ms | 2819.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 826.5ms | 866.2ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 825.6ms | 864.0ms |
| fiftyPlugins | sidecars.session-locks.total | 824.6ms | 848.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3240.7ms | 3534.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2672.8ms | 2965.9ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 765.5ms | 768.2ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 625.1ms | 627.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 568.1ms | 583.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8650.0ms | 0.231 | 792.6MB | 809.4MB | 16.8MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 8506.0ms | 0.118 | 832.2MB | 861.2MB | 29.1MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 8497.0ms | 0.235 | 731.8MB | 753.9MB | 22.1MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3057.7ms | 3110.4ms | 56.6MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 666.6ms | 711.3ms | 56.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.0ms | 44.7ms |

## Observations

No data.

