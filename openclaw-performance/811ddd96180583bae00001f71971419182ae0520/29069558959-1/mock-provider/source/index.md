# OpenClaw Source Performance

Generated: 2026-07-10T04:53:16.299Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3895.2ms | 3920.9ms | 3845.5ms | 3765.4ms | 3848.0ms | 29.5ms | 815.3MB | 1.313 |
| skipChannels | gateway, skip channels | 3984.7ms | 4139.2ms | 3979.6ms | 3925.2ms | 3960.2ms | 30.1ms | 810.9MB | 1.255 |
| oneInternalHook | gateway, one configured internal hook | 3959.2ms | 4355.5ms | 3956.6ms | 3886.0ms | 3927.2ms | 33.2ms | 815.0MB | 1.263 |
| allInternalHooks | gateway, all internal hooks | 3917.4ms | 4033.0ms | 3917.4ms | 3860.1ms | 3892.8ms | 32.0ms | 821.5MB | 1.276 |
| fiftyPlugins | gateway, 50 manifest plugins | 4052.2ms | 4222.6ms | 4052.0ms | 3927.0ms | 3988.8ms | 30.4ms | 808.8MB | 1.268 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3554.5ms | 3664.9ms | 3549.6ms | 3473.4ms | 3536.0ms | 29.5ms | 769.6MB | 1.135 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 444.5MB | 401.4MB | ok |
| xai | 438.2MB | 395.2MB | ok |
| migrate-hermes | 427.9MB | 384.9MB | ok |
| llm-task | 416.0MB | 372.9MB | ok |
| active-memory | 408.6MB | 365.5MB | ok |
| openai | 391.1MB | 348.0MB | ok |
| voice-call | 377.8MB | 334.7MB | ok |
| google | 355.9MB | 312.8MB | ok |
| minimax | 350.5MB | 307.4MB | ok |
| xiaomi | 318.9MB | 275.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 2840.4ms | 2858.2ms |
| default | cli.main.gateway-run-bootstrap | 2313.4ms | 2331.7ms |
| default | post-attach.update-sentinel.total | 851.0ms | 871.8ms |
| default | sidecars.restart-sentinel.total | 850.5ms | 871.3ms |
| default | sidecars.session-locks.total | 849.9ms | 870.6ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 2964.9ms | 3111.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2452.1ms | 2555.7ms |
| skipChannels | post-attach.update-sentinel.total | 916.0ms | 921.2ms |
| skipChannels | sidecars.restart-sentinel.total | 915.4ms | 920.7ms |
| skipChannels | sidecars.session-locks.total | 914.8ms | 920.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2898.7ms | 3299.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2356.0ms | 2705.0ms |
| oneInternalHook | sidecars.internal-hooks.total | 987.2ms | 1011.7ms |
| oneInternalHook | post-attach.update-check.total | 823.5ms | 840.7ms |
| oneInternalHook | ready.total | 808.8ms | 827.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2966.1ms | 3015.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2403.1ms | 2468.6ms |
| allInternalHooks | memory.ready.rssMb | 813.1ms | 816.3ms |
| allInternalHooks | post-attach.update-check.total | 799.6ms | 800.2ms |
| allInternalHooks | ready.total | 786.8ms | 787.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3132.0ms | 3218.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2530.7ms | 2613.3ms |
| fiftyPlugins | memory.ready.rssMb | 785.2ms | 789.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 780.6ms | 790.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 779.8ms | 789.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2937.0ms | 3032.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2416.3ms | 2468.0ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 765.1ms | 766.1ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 623.8ms | 625.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 564.2ms | 583.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8533.0ms | 0.117 | 794.3MB | 858.1MB | 63.9MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 8431.0ms | 0.119 | 836.5MB | 858.7MB | 22.2MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 8291.0ms | 0.121 | 766.9MB | 801.5MB | 34.6MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3029.7ms | 3057.9ms | 56.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 651.4ms | 665.0ms | 56.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.0ms | 42.8ms |

## Observations

No data.

