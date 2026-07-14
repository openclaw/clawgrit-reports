# OpenClaw Source Performance

Generated: 2026-07-14T05:59:52.917Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2979.5ms | 3045.8ms | 2971.8ms | 2793.2ms | 2856.3ms | 41.4ms | 751.4MB | 1.351 |
| skipChannels | gateway, skip channels | 2881.7ms | 2903.4ms | 2881.3ms | 2808.4ms | 2853.3ms | 44.6ms | 754.6MB | 1.397 |
| oneInternalHook | gateway, one configured internal hook | 4290.9ms | 4352.6ms | 4290.6ms | 4198.4ms | 4242.0ms | 41.7ms | 887.5MB | 1.405 |
| allInternalHooks | gateway, all internal hooks | 4315.1ms | 4318.3ms | 4315.1ms | 4242.4ms | 4281.5ms | 44.5ms | 881.0MB | 1.394 |
| fiftyPlugins | gateway, 50 manifest plugins | 4418.0ms | 4554.4ms | 4418.0ms | 4054.2ms | 4130.1ms | 40.5ms | 933.2MB | 1.374 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4296.8ms | 4340.4ms | 4296.3ms | 3841.5ms | 3921.5ms | 41.3ms | 934.0MB | 1.396 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 779.6MB | 751.4MB | -28.2MB (-3.6%) | -54.5MB (-10.5%) | stable |
| gateway boot | skipChannels | 780.1MB | 754.6MB | -25.5MB (-3.3%) | -73.0MB (-14.4%) | stable |
| gateway boot | oneInternalHook | 913.6MB | 887.5MB | -26.2MB (-2.9%) | -43.8MB (-6.7%) | stable |
| gateway boot | allInternalHooks | 842.8MB | 881.0MB | +38.3MB (+4.5%) | +81.6MB (+14.9%) | stable |
| gateway boot | fiftyPlugins | 856.0MB | 933.2MB | +77.2MB (+9.0%) | -16.6MB (-3.4%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 837.4MB | 934.0MB | +96.6MB (+11.5%) | -122.6MB (-23.0%) | stable |
| cli | gatewayHealthJson | 66.9MB | 65.9MB | -1.0MB (-1.4%) | n/a | stable |
| cli | configGetGatewayPort | 66.8MB | 63.5MB | -3.3MB (-4.9%) | n/a | stable |
| mock hello | gateway RSS delta avg | -415.2MB | -396.7MB | +18.5MB (-4.5%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| xai | 584.4MB | 537.9MB | ok |
| qa-lab | 552.4MB | 506.0MB | ok |
| llm-task | 521.1MB | 474.6MB | ok |
| codex | 517.5MB | 471.0MB | ok |
| migrate-hermes | 514.1MB | 467.7MB | ok |
| workboard | 511.8MB | 465.3MB | ok |
| anthropic | 511.6MB | 465.2MB | ok |
| active-memory | 510.4MB | 464.0MB | ok |
| openai | 429.7MB | 383.2MB | ok |
| google | 426.1MB | 379.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 794.9ms | 809.5ms |
| default | post-attach.update-sentinel.total | 780.7ms | 788.9ms |
| default | sidecars.restart-sentinel.total | 780.1ms | 788.3ms |
| default | sidecars.session-locks.total | 779.3ms | 787.5ms |
| default | post-ready.agent-runtime-plugins.total | 777.6ms | 785.8ms |
| skipChannels | post-attach.update-sentinel.total | 824.4ms | 843.5ms |
| skipChannels | sidecars.restart-sentinel.total | 823.7ms | 842.9ms |
| skipChannels | sidecars.session-locks.total | 822.8ms | 842.1ms |
| skipChannels | sidecars.subagent-recovery.total | 815.6ms | 835.1ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 790.3ms | 811.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3391.1ms | 3433.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2739.7ms | 2751.2ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2711.6ms | 2721.4ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2710.7ms | 2720.5ms |
| oneInternalHook | memory.ready.rssMb | 876.7ms | 880.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3422.4ms | 3438.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2756.4ms | 2774.0ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2726.4ms | 2744.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2725.6ms | 2743.4ms |
| allInternalHooks | memory.ready.rssMb | 868.6ms | 871.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3091.3ms | 3185.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2422.3ms | 2514.1ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 2394.1ms | 2486.8ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 2393.2ms | 2485.9ms |
| fiftyPlugins | post-attach.update-sentinel.total | 995.5ms | 1000.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3114.3ms | 3172.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2467.4ms | 2502.8ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 2439.1ms | 2470.3ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 2438.2ms | 2469.1ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 924.2ms | 929.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9543.0ms | 0.000 | 2283.2MB | 946.8MB | -1336.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9123.0ms | 0.219 | 869.7MB | 988.7MB | 119.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9041.0ms | 0.111 | 905.9MB | 933.2MB | 27.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3409.0ms | 4876.8ms | 65.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 937.8ms | 945.2ms | 63.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 2.9MB | 0.0MB | 0.1ms | 45.6ms |

## Observations

No data.

