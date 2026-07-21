# OpenClaw Source Performance

Generated: 2026-07-21T07:53:49.589Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6516.0ms | 6793.5ms | 6181.4ms | 2472.2ms | 6439.5ms | 43.1ms | 828.1MB | 1.325 |
| skipChannels | gateway, skip channels | 2491.8ms | 2574.3ms | 2491.2ms | 2331.6ms | 2384.3ms | 38.5ms | 703.1MB | 1.273 |
| oneInternalHook | gateway, one configured internal hook | 3896.7ms | 4083.9ms | 3896.6ms | 3820.6ms | 3860.0ms | 41.5ms | 845.1MB | 1.311 |
| allInternalHooks | gateway, all internal hooks | 3972.3ms | 4058.9ms | 3972.2ms | 3892.7ms | 3934.5ms | 45.7ms | 796.9MB | 1.273 |
| fiftyPlugins | gateway, 50 manifest plugins | 6348.7ms | 6858.4ms | 6347.0ms | 4163.3ms | 4255.6ms | 44.1ms | 907.9MB | 1.261 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5776.2ms | 5837.0ms | 5776.1ms | 3612.2ms | 3694.7ms | 45.5ms | 885.9MB | 1.306 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 505.3MB | 458.8MB | ok |
| workboard | 499.9MB | 453.4MB | ok |
| codex | 471.8MB | 425.3MB | ok |
| memory-lancedb | 468.2MB | 421.8MB | ok |
| teams-meetings | 464.0MB | 417.5MB | ok |
| xai | 463.5MB | 417.0MB | ok |
| google-meet | 459.5MB | 413.0MB | ok |
| active-memory | 431.8MB | 385.3MB | ok |
| migrate-hermes | 428.9MB | 382.4MB | ok |
| llm-task | 428.5MB | 382.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4751.9ms | 4883.5ms |
| default | post-ready.agent-runtime-plugins.total | 4739.8ms | 4871.7ms |
| default | post-attach.update-check.total | 4736.2ms | 4868.6ms |
| default | post-attach.update-sentinel.total | 4727.3ms | 4860.1ms |
| default | sidecars.restart-sentinel.total | 4725.8ms | 4858.8ms |
| skipChannels | sidecars.internal-hooks.total | 781.6ms | 829.7ms |
| skipChannels | post-attach.update-check.total | 755.0ms | 769.2ms |
| skipChannels | ready.total | 733.4ms | 755.3ms |
| skipChannels | runtime.post-attach.total | 731.6ms | 751.2ms |
| skipChannels | post-attach.log.total | 730.3ms | 750.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2950.4ms | 2983.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2373.4ms | 2413.3ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2351.6ms | 2390.7ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2350.7ms | 2389.8ms |
| oneInternalHook | sidecars.internal-hooks.total | 766.0ms | 870.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3054.3ms | 3156.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2463.7ms | 2529.1ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2437.6ms | 2498.5ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2436.5ms | 2497.4ms |
| allInternalHooks | sidecars.internal-hooks.total | 733.7ms | 771.8ms |
| fiftyPlugins | sidecars.session-locks.total | 3098.9ms | 3426.0ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3094.2ms | 3418.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3010.2ms | 3149.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 2894.1ms | 3199.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 2892.7ms | 3198.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2841.4ms | 2890.1ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 2675.3ms | 2680.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 2673.6ms | 2684.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 2502.0ms | 2503.1ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 2501.1ms | 2502.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9270.0ms | 0.000 | 2407.5MB | 924.3MB | -1483.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 8929.0ms | 0.224 | 775.4MB | 876.8MB | 101.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 8771.0ms | 0.114 | 783.5MB | 875.5MB | 92.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2985.9ms | 2987.4ms | 59.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 716.8ms | 721.7ms | 59.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.1ms | 61.0ms |

## Observations

No data.

