# OpenClaw Source Performance

Generated: 2026-07-12T08:59:35.120Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3852.5ms | 3929.0ms | 3844.1ms | 3718.0ms | 3783.6ms | 27.3ms | 829.6MB | 1.300 |
| skipChannels | gateway, skip channels | 3814.6ms | 3831.0ms | 3808.6ms | 3757.9ms | 3790.8ms | 30.2ms | 809.2MB | 1.052 |
| oneInternalHook | gateway, one configured internal hook | 3915.4ms | 4003.9ms | 3915.0ms | 3858.5ms | 3889.3ms | 29.5ms | 815.0MB | 1.249 |
| allInternalHooks | gateway, all internal hooks | 3839.0ms | 3888.8ms | 3837.2ms | 3777.3ms | 3807.8ms | 29.0ms | 819.9MB | 1.052 |
| fiftyPlugins | gateway, 50 manifest plugins | 3712.0ms | 3732.3ms | 3711.6ms | 3591.0ms | 3649.6ms | 27.6ms | 794.2MB | 1.090 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3434.4ms | 3449.7ms | 3432.7ms | 3353.4ms | 3414.7ms | 28.1ms | 770.1MB | 1.175 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 453.5MB | 410.5MB | ok |
| migrate-hermes | 442.7MB | 399.7MB | ok |
| xai | 427.6MB | 384.6MB | ok |
| llm-task | 427.2MB | 384.2MB | ok |
| openai | 407.9MB | 365.0MB | ok |
| active-memory | 402.7MB | 359.8MB | ok |
| voice-call | 367.3MB | 324.4MB | ok |
| google | 357.9MB | 315.0MB | ok |
| minimax | 349.2MB | 306.2MB | ok |
| openrouter | 316.6MB | 273.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 2791.6ms | 2832.0ms |
| default | cli.main.gateway-run-bootstrap | 2267.9ms | 2325.4ms |
| default | post-attach.update-sentinel.total | 829.8ms | 865.2ms |
| default | sidecars.restart-sentinel.total | 829.2ms | 864.6ms |
| default | sidecars.session-locks.total | 828.6ms | 863.9ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 2812.5ms | 2815.8ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2303.2ms | 2303.7ms |
| skipChannels | post-attach.update-sentinel.total | 858.4ms | 949.1ms |
| skipChannels | sidecars.restart-sentinel.total | 857.7ms | 948.5ms |
| skipChannels | sidecars.session-locks.total | 857.1ms | 947.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2870.2ms | 2903.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2335.7ms | 2366.4ms |
| oneInternalHook | sidecars.internal-hooks.total | 945.7ms | 1019.4ms |
| oneInternalHook | post-attach.update-check.total | 794.8ms | 838.9ms |
| oneInternalHook | memory.ready.rssMb | 784.7ms | 800.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2856.0ms | 2873.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2306.3ms | 2335.7ms |
| allInternalHooks | memory.ready.rssMb | 789.1ms | 793.9ms |
| allInternalHooks | post-attach.update-check.total | 762.5ms | 780.0ms |
| allInternalHooks | ready.total | 753.0ms | 770.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2817.0ms | 2867.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2286.5ms | 2323.0ms |
| fiftyPlugins | memory.ready.rssMb | 778.0ms | 787.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 727.3ms | 773.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 726.6ms | 773.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2798.3ms | 2843.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2275.9ms | 2325.2ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 748.2ms | 760.1ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 613.4ms | 616.4ms |
| fiftyStartupLazyPlugins | memory.ready.heapUsedMb | 539.2ms | 542.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13335.0ms | 0.600 | 815.5MB | 1269.1MB | 453.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9518.0ms | 0.420 | 768.4MB | 941.4MB | 172.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9559.0ms | 0.418 | 761.7MB | 836.8MB | 75.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2813.2ms | 2856.8ms | 56.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 636.9ms | 655.1ms | 56.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.0ms | 41.2ms |

## Observations

No data.

