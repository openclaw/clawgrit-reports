# OpenClaw Source Performance

Generated: 2026-07-11T02:37:52.349Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3910.8ms | 3945.3ms | 3879.9ms | 3750.6ms | 3841.3ms | 30.0ms | 817.3MB | 1.308 |
| skipChannels | gateway, skip channels | 3746.3ms | 3823.4ms | 3746.1ms | 3692.1ms | 3725.0ms | 29.5ms | 812.2MB | 1.069 |
| oneInternalHook | gateway, one configured internal hook | 3718.3ms | 3788.3ms | 3717.9ms | 3664.2ms | 3696.7ms | 27.6ms | 815.7MB | 1.086 |
| allInternalHooks | gateway, all internal hooks | 3747.2ms | 3796.4ms | 3747.0ms | 3692.7ms | 3726.3ms | 27.8ms | 815.2MB | 1.070 |
| fiftyPlugins | gateway, 50 manifest plugins | 3653.4ms | 3664.9ms | 3653.4ms | 3571.6ms | 3629.6ms | 30.0ms | 791.6MB | 1.102 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3374.9ms | 3401.8ms | 3373.5ms | 3301.2ms | 3361.1ms | 29.1ms | 768.6MB | 1.190 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 441.8MB | 398.6MB | ok |
| xai | 437.3MB | 394.1MB | ok |
| migrate-hermes | 406.2MB | 363.0MB | ok |
| llm-task | 402.5MB | 359.3MB | ok |
| active-memory | 400.5MB | 357.2MB | ok |
| openai | 392.1MB | 348.9MB | ok |
| voice-call | 387.4MB | 344.2MB | ok |
| google | 356.5MB | 313.3MB | ok |
| minimax | 354.2MB | 311.0MB | ok |
| azure-speech | 329.6MB | 286.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 2836.7ms | 2875.9ms |
| default | cli.main.gateway-run-bootstrap | 2323.3ms | 2337.0ms |
| default | post-attach.update-sentinel.total | 859.1ms | 866.8ms |
| default | sidecars.restart-sentinel.total | 858.5ms | 866.2ms |
| default | sidecars.session-locks.total | 857.9ms | 865.6ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 2800.6ms | 2873.1ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2289.3ms | 2347.9ms |
| skipChannels | post-attach.update-sentinel.total | 875.6ms | 879.7ms |
| skipChannels | sidecars.restart-sentinel.total | 875.1ms | 879.1ms |
| skipChannels | sidecars.session-locks.total | 874.4ms | 878.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2793.3ms | 2824.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2274.9ms | 2307.9ms |
| oneInternalHook | sidecars.internal-hooks.total | 879.4ms | 909.4ms |
| oneInternalHook | memory.ready.rssMb | 796.5ms | 814.4ms |
| oneInternalHook | post-attach.update-check.total | 721.0ms | 753.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2790.3ms | 2836.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2292.5ms | 2319.7ms |
| allInternalHooks | memory.ready.rssMb | 813.7ms | 814.4ms |
| allInternalHooks | post-attach.update-check.total | 751.3ms | 757.7ms |
| allInternalHooks | ready.total | 742.1ms | 744.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2837.4ms | 2838.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2322.3ms | 2328.9ms |
| fiftyPlugins | memory.ready.rssMb | 751.9ms | 783.5ms |
| fiftyPlugins | post-attach.update-sentinel.total | 744.4ms | 748.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 743.8ms | 748.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2807.7ms | 2833.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2293.4ms | 2327.5ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 731.4ms | 766.3ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 592.2ms | 624.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 510.6ms | 514.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13869.0ms | 0.649 | 816.6MB | 1282.8MB | 466.2MB | mock-openai/gpt-5.6 |
| run-002 | pass | 1/1 | 9594.0ms | 0.417 | 770.4MB | 845.5MB | 75.0MB | mock-openai/gpt-5.6 |
| run-003 | pass | 1/1 | 9631.0ms | 0.311 | 768.6MB | 845.1MB | 76.5MB | mock-openai/gpt-5.6 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2907.0ms | 2932.5ms | 56.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 632.1ms | 675.8ms | 56.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.0ms | 41.1ms |

## Observations

No data.

