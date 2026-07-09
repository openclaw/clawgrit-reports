# OpenClaw Source Performance

Generated: 2026-07-09T22:51:52.712Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3902.9ms | 3976.1ms | 3902.5ms | 3740.4ms | 3828.4ms | 38.0ms | 827.2MB | 1.281 |
| skipChannels | gateway, skip channels | 3723.4ms | 3744.4ms | 3722.7ms | 3670.6ms | 3699.7ms | 35.4ms | 811.3MB | 1.090 |
| oneInternalHook | gateway, one configured internal hook | 3775.8ms | 3793.6ms | 3773.5ms | 3719.5ms | 3749.5ms | 37.2ms | 805.5MB | 1.065 |
| allInternalHooks | gateway, all internal hooks | 3754.0ms | 3814.9ms | 3749.9ms | 3698.8ms | 3727.6ms | 34.7ms | 842.4MB | 1.070 |
| fiftyPlugins | gateway, 50 manifest plugins | 3731.5ms | 3833.6ms | 3731.3ms | 3656.2ms | 3714.8ms | 34.9ms | 798.3MB | 1.304 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3378.5ms | 3400.6ms | 3382.8ms | 3303.3ms | 3364.0ms | 33.1ms | 778.5MB | 1.188 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 448.9MB | 405.7MB | ok |
| xai | 443.7MB | 400.5MB | ok |
| migrate-hermes | 411.2MB | 368.0MB | ok |
| active-memory | 407.3MB | 364.1MB | ok |
| llm-task | 402.1MB | 358.9MB | ok |
| openai | 388.5MB | 345.3MB | ok |
| voice-call | 374.1MB | 330.9MB | ok |
| google | 357.8MB | 314.6MB | ok |
| minimax | 346.6MB | 303.4MB | ok |
| ollama | 333.6MB | 290.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 2826.1ms | 2910.1ms |
| default | cli.main.gateway-run-bootstrap | 2298.3ms | 2369.3ms |
| default | post-attach.update-sentinel.total | 844.6ms | 856.8ms |
| default | sidecars.restart-sentinel.total | 844.0ms | 856.2ms |
| default | sidecars.session-locks.total | 843.4ms | 855.6ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 2775.1ms | 2804.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2276.2ms | 2298.0ms |
| skipChannels | post-attach.update-sentinel.total | 847.3ms | 855.4ms |
| skipChannels | sidecars.restart-sentinel.total | 846.7ms | 854.9ms |
| skipChannels | sidecars.session-locks.total | 846.1ms | 854.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2824.0ms | 2834.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2299.3ms | 2313.8ms |
| oneInternalHook | sidecars.internal-hooks.total | 904.6ms | 917.8ms |
| oneInternalHook | memory.ready.rssMb | 791.4ms | 791.7ms |
| oneInternalHook | post-attach.update-check.total | 734.2ms | 761.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2822.8ms | 2823.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2302.5ms | 2308.2ms |
| allInternalHooks | memory.ready.rssMb | 793.2ms | 844.6ms |
| allInternalHooks | post-attach.update-check.total | 725.3ms | 779.5ms |
| allInternalHooks | ready.total | 714.7ms | 768.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2897.0ms | 2910.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2356.7ms | 2365.2ms |
| fiftyPlugins | memory.ready.rssMb | 792.1ms | 797.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 724.7ms | 729.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 724.2ms | 728.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2802.1ms | 2814.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2291.0ms | 2301.3ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 764.9ms | 772.5ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 626.8ms | 627.5ms |
| fiftyStartupLazyPlugins | memory.ready.heapUsedMb | 540.3ms | 540.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8359.0ms | 0.120 | 790.5MB | 815.3MB | 24.8MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 8017.0ms | 0.125 | 841.1MB | 866.7MB | 25.6MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 8011.0ms | 0.250 | 778.6MB | 859.6MB | 81.0MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2974.7ms | 3075.4ms | 57.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 677.2ms | 683.1ms | 57.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.0ms | 41.8ms |

## Observations

No data.

