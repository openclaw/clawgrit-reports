# OpenClaw Source Performance

Generated: 2026-07-09T23:02:31.382Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3936.8ms | 3946.6ms | 3904.7ms | 3789.0ms | 3872.4ms | 36.0ms | 822.4MB | 1.270 |
| skipChannels | gateway, skip channels | 3766.7ms | 3844.5ms | 3762.8ms | 3707.1ms | 3738.0ms | 35.2ms | 812.7MB | 1.301 |
| oneInternalHook | gateway, one configured internal hook | 3769.3ms | 3913.1ms | 3768.4ms | 3702.9ms | 3733.5ms | 34.4ms | 834.2MB | 1.278 |
| allInternalHooks | gateway, all internal hooks | 3744.0ms | 3838.5ms | 3744.1ms | 3688.2ms | 3717.2ms | 34.2ms | 842.4MB | 1.074 |
| fiftyPlugins | gateway, 50 manifest plugins | 3938.8ms | 4450.3ms | 3902.2ms | 3807.7ms | 3869.3ms | 35.1ms | 799.1MB | 1.269 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3618.6ms | 3686.0ms | 3607.4ms | 3528.7ms | 3594.6ms | 40.1ms | 780.5MB | 1.119 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 446.3MB | 403.2MB | ok |
| xai | 435.9MB | 392.8MB | ok |
| migrate-hermes | 405.0MB | 361.9MB | ok |
| active-memory | 401.9MB | 358.9MB | ok |
| openai | 400.8MB | 357.8MB | ok |
| llm-task | 400.2MB | 357.1MB | ok |
| voice-call | 372.5MB | 329.4MB | ok |
| google | 360.0MB | 316.9MB | ok |
| minimax | 352.0MB | 308.9MB | ok |
| xiaomi | 313.7MB | 270.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 2851.6ms | 2873.4ms |
| default | cli.main.gateway-run-bootstrap | 2335.8ms | 2354.8ms |
| default | post-attach.update-sentinel.total | 846.4ms | 863.7ms |
| default | sidecars.restart-sentinel.total | 845.8ms | 863.1ms |
| default | sidecars.session-locks.total | 845.2ms | 862.4ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 2810.8ms | 2865.0ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2311.1ms | 2326.7ms |
| skipChannels | post-attach.update-sentinel.total | 859.6ms | 861.0ms |
| skipChannels | sidecars.restart-sentinel.total | 859.1ms | 860.5ms |
| skipChannels | sidecars.session-locks.total | 858.5ms | 859.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2806.6ms | 2909.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2290.5ms | 2372.0ms |
| oneInternalHook | sidecars.internal-hooks.total | 915.6ms | 941.2ms |
| oneInternalHook | memory.ready.rssMb | 790.6ms | 810.5ms |
| oneInternalHook | post-attach.update-check.total | 738.7ms | 773.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2816.5ms | 2848.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2288.3ms | 2336.2ms |
| allInternalHooks | memory.ready.rssMb | 801.6ms | 844.2ms |
| allInternalHooks | post-attach.update-check.total | 761.7ms | 762.1ms |
| allInternalHooks | ready.total | 752.2ms | 752.7ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2971.6ms | 3522.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2434.7ms | 2711.7ms |
| fiftyPlugins | memory.ready.rssMb | 797.3ms | 798.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 782.5ms | 785.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 781.9ms | 784.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2963.9ms | 3011.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2399.8ms | 2459.7ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 768.4ms | 772.5ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 624.8ms | 628.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 551.5ms | 579.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8644.0ms | 0.116 | 802.6MB | 822.3MB | 19.8MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 8209.0ms | 0.122 | 769.7MB | 805.9MB | 36.2MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 8708.0ms | 0.230 | 847.3MB | 874.6MB | 27.2MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3195.7ms | 3220.0ms | 57.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 742.6ms | 805.7ms | 57.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.1ms | 50.4ms |

## Observations

No data.

