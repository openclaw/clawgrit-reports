# OpenClaw Source Performance

Generated: 2026-07-19T13:32:15.709Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3162.5ms | 3205.5ms | 3154.2ms | 2969.5ms | 3036.7ms | 40.6ms | 809.5MB | 1.284 |
| skipChannels | gateway, skip channels | 2996.7ms | 3037.3ms | 2996.2ms | 2920.3ms | 2965.3ms | 44.0ms | 811.2MB | 1.340 |
| oneInternalHook | gateway, one configured internal hook | 4443.2ms | 4497.6ms | 4443.0ms | 4366.4ms | 4408.6ms | 42.8ms | 951.6MB | 1.374 |
| allInternalHooks | gateway, all internal hooks | 4423.1ms | 4497.3ms | 4423.1ms | 4348.5ms | 4390.8ms | 41.6ms | 947.3MB | 1.385 |
| fiftyPlugins | gateway, 50 manifest plugins | 4810.2ms | 4909.9ms | 4810.2ms | 4417.5ms | 4493.2ms | 41.2ms | 1045.9MB | 1.262 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4474.9ms | 4480.6ms | 4474.7ms | 4006.7ms | 4086.1ms | 44.9ms | 1037.3MB | 1.346 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| xai | 584.4MB | 537.9MB | ok |
| codex | 526.2MB | 479.7MB | ok |
| llm-task | 514.4MB | 468.0MB | ok |
| workboard | 514.1MB | 467.6MB | ok |
| anthropic | 510.4MB | 464.0MB | ok |
| migrate-hermes | 506.7MB | 460.3MB | ok |
| memory-lancedb | 506.0MB | 459.5MB | ok |
| active-memory | 505.9MB | 459.5MB | ok |
| openai | 425.1MB | 378.6MB | ok |
| voice-call | 421.5MB | 375.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 921.5ms | 928.1ms |
| default | post-ready.agent-runtime-plugins.total | 912.2ms | 916.2ms |
| default | post-attach.update-check.total | 865.1ms | 865.8ms |
| default | post-attach.update-sentinel.total | 858.2ms | 858.5ms |
| default | sidecars.restart-sentinel.total | 857.2ms | 857.6ms |
| skipChannels | sidecars.session-locks.total | 904.6ms | 914.4ms |
| skipChannels | post-attach.update-sentinel.total | 898.8ms | 908.6ms |
| skipChannels | sidecars.restart-sentinel.total | 898.0ms | 907.9ms |
| skipChannels | sidecars.ready.total | 885.1ms | 906.2ms |
| skipChannels | sidecars.total.total | 880.0ms | 900.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3438.7ms | 3469.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2790.4ms | 2808.9ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2759.6ms | 2778.9ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2758.8ms | 2778.0ms |
| oneInternalHook | memory.ready.rssMb | 937.1ms | 944.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3374.7ms | 3450.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2736.3ms | 2826.1ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2707.1ms | 2796.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2706.2ms | 2795.5ms |
| allInternalHooks | memory.ready.rssMb | 936.2ms | 942.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3280.7ms | 3357.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2619.8ms | 2658.5ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 2589.3ms | 2627.7ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 2588.3ms | 2626.8ms |
| fiftyPlugins | sidecars.session-locks.total | 1138.2ms | 1139.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3163.1ms | 3166.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2493.1ms | 2522.6ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 2462.5ms | 2493.2ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 2461.6ms | 2492.3ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 1025.2ms | 1032.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9690.0ms | 0.000 | 2329.2MB | 1154.7MB | -1174.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9362.0ms | 0.107 | 918.3MB | 963.3MB | 45.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9361.0ms | 0.214 | 951.3MB | 1115.6MB | 164.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3530.5ms | 5152.4ms | 63.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 760.6ms | 770.0ms | 63.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.0ms | 58.2ms |

## Observations

No data.

