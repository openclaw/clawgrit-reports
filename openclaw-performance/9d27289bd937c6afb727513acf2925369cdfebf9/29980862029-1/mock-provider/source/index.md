# OpenClaw Source Performance

Generated: 2026-07-23T05:03:22.960Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5900.6ms | 6208.0ms | 5900.5ms | 2933.4ms | 5812.2ms | 41.8ms | 908.7MB | 1.289 |
| skipChannels | gateway, skip channels | 2981.7ms | 3000.2ms | 2981.3ms | 2900.3ms | 2943.5ms | 41.7ms | 871.6MB | 1.381 |
| oneInternalHook | gateway, one configured internal hook | 4374.2ms | 4439.4ms | 4374.0ms | 4288.3ms | 4340.4ms | 40.0ms | 914.3MB | 1.372 |
| allInternalHooks | gateway, all internal hooks | 6608.0ms | 6696.4ms | 6607.9ms | 4367.1ms | 4420.4ms | 46.3ms | 954.2MB | 1.349 |
| fiftyPlugins | gateway, 50 manifest plugins | 8678.5ms | 8734.0ms | 8678.5ms | 4380.1ms | 4469.8ms | 43.6ms | 1147.2MB | 1.267 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8377.7ms | 8383.0ms | 8377.7ms | 3976.5ms | 4064.4ms | 45.1ms | 1137.2MB | 1.231 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| teams-meetings | 534.7MB | 488.2MB | ok |
| zoom-meetings | 516.8MB | 470.3MB | ok |
| google-meet | 514.2MB | 467.7MB | ok |
| codex | 511.4MB | 464.9MB | ok |
| migrate-hermes | 507.9MB | 461.4MB | ok |
| llm-task | 506.5MB | 460.0MB | ok |
| memory-lancedb | 506.0MB | 459.5MB | ok |
| anthropic | 505.2MB | 458.8MB | ok |
| voice-call | 504.6MB | 458.1MB | ok |
| workboard | 504.4MB | 458.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3695.1ms | 3805.7ms |
| default | post-ready.agent-runtime-plugins.total | 3676.5ms | 3796.4ms |
| default | post-attach.update-check.total | 3673.9ms | 3793.8ms |
| default | post-attach.update-sentinel.total | 3665.8ms | 3785.9ms |
| default | sidecars.restart-sentinel.total | 3664.8ms | 3784.9ms |
| skipChannels | sidecars.internal-hooks.total | 883.6ms | 902.0ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 836.5ms | 863.1ms |
| skipChannels | memory.ready.rssMb | 832.6ms | 847.7ms |
| skipChannels | post-attach.update-check.total | 817.2ms | 868.9ms |
| skipChannels | ready.total | 803.7ms | 850.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3309.7ms | 3379.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2644.0ms | 2697.2ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2617.8ms | 2670.8ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2617.0ms | 2669.9ms |
| oneInternalHook | memory.ready.rssMb | 898.4ms | 904.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3385.1ms | 3479.3ms |
| allInternalHooks | sidecars.session-locks.total | 2893.8ms | 2936.5ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2891.6ms | 2934.1ms |
| allInternalHooks | post-attach.update-sentinel.total | 2882.3ms | 2924.0ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2881.2ms | 2922.9ms |
| fiftyPlugins | sidecars.session-locks.total | 5094.5ms | 5121.9ms |
| fiftyPlugins | post-ready.maintenance.total | 5002.5ms | 5030.4ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4962.8ms | 4993.4ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4766.8ms | 4798.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4765.9ms | 4797.7ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4912.9ms | 4916.4ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4821.8ms | 4829.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4784.8ms | 4794.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4485.2ms | 4590.2ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4483.9ms | 4589.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10274.0ms | 0.000 | 2445.6MB | 964.4MB | -1481.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10198.0ms | 0.098 | 810.4MB | 1028.7MB | 218.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9953.0ms | 0.201 | 810.9MB | 1013.3MB | 202.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3342.9ms | 3406.1ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 768.4ms | 768.9ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 61.0ms |

## Observations

No data.

