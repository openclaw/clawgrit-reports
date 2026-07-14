# OpenClaw Source Performance

Generated: 2026-07-14T09:15:58.875Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3687.4ms | 3782.2ms | 3659.0ms | 3451.2ms | 3532.5ms | 50.2ms | 795.6MB | 1.585 |
| skipChannels | gateway, skip channels | 3019.9ms | 3130.4ms | 3019.8ms | 2937.5ms | 2985.4ms | 46.7ms | 761.9MB | 1.330 |
| oneInternalHook | gateway, one configured internal hook | 4627.6ms | 4908.9ms | 4626.9ms | 4366.8ms | 4405.9ms | 50.8ms | 872.4MB | 1.426 |
| allInternalHooks | gateway, all internal hooks | 4325.0ms | 4415.6ms | 4310.7ms | 4233.5ms | 4281.9ms | 42.7ms | 856.7MB | 1.443 |
| fiftyPlugins | gateway, 50 manifest plugins | 4269.5ms | 4395.2ms | 4269.4ms | 3904.0ms | 3978.8ms | 42.1ms | 922.1MB | 1.365 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4068.5ms | 4131.2ms | 4068.2ms | 3644.9ms | 3726.6ms | 39.8ms | 925.2MB | 1.234 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| qa-lab | 549.9MB | 503.5MB | ok |
| xai | 523.3MB | 476.8MB | ok |
| llm-task | 517.2MB | 470.7MB | ok |
| active-memory | 514.4MB | 468.0MB | ok |
| migrate-hermes | 513.2MB | 466.7MB | ok |
| codex | 512.7MB | 466.2MB | ok |
| anthropic | 510.0MB | 463.5MB | ok |
| openai | 429.0MB | 382.5MB | ok |
| google | 423.0MB | 376.5MB | ok |
| voice-call | 422.4MB | 375.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 984.9ms | 1005.4ms |
| default | post-attach.update-sentinel.total | 956.6ms | 1056.2ms |
| default | sidecars.restart-sentinel.total | 955.9ms | 1055.4ms |
| default | sidecars.session-locks.total | 955.1ms | 1054.5ms |
| default | post-ready.agent-runtime-plugins.total | 953.3ms | 1052.2ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 845.9ms | 879.8ms |
| skipChannels | post-attach.update-sentinel.total | 824.3ms | 852.6ms |
| skipChannels | sidecars.restart-sentinel.total | 823.5ms | 851.8ms |
| skipChannels | sidecars.session-locks.total | 822.4ms | 850.5ms |
| skipChannels | sidecars.subagent-recovery.total | 805.5ms | 832.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3570.1ms | 4030.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2777.6ms | 3154.7ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2748.9ms | 3118.9ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2747.7ms | 3117.9ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 824.4ms | 824.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3467.7ms | 3581.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2758.5ms | 2864.8ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2728.7ms | 2829.0ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2727.8ms | 2828.0ms |
| allInternalHooks | memory.ready.rssMb | 821.5ms | 853.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2970.4ms | 2990.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2310.2ms | 2326.3ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 2280.1ms | 2300.0ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 2279.0ms | 2299.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 957.1ms | 1043.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2977.6ms | 2995.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2334.2ms | 2351.1ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 2306.9ms | 2318.3ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 2305.9ms | 2317.3ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 835.9ms | 920.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9471.0ms | 0.000 | 2335.7MB | 956.4MB | -1379.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9077.0ms | 0.220 | 860.1MB | 918.6MB | 58.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 8956.0ms | 0.223 | 878.6MB | 1031.9MB | 153.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3282.6ms | 4874.0ms | 65.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 710.6ms | 714.2ms | 65.9MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 2.9MB | 0.0MB | 0.1ms | 39.2ms |

## Observations

No data.

