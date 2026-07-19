# OpenClaw Source Performance

Generated: 2026-07-19T06:12:54.179Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3099.2ms | 3117.2ms | 3091.3ms | 2910.8ms | 2981.0ms | 40.9ms | 812.5MB | 1.301 |
| skipChannels | gateway, skip channels | 2995.0ms | 3007.4ms | 2994.5ms | 2923.0ms | 2964.8ms | 40.7ms | 812.3MB | 1.336 |
| oneInternalHook | gateway, one configured internal hook | 4377.1ms | 4396.6ms | 4376.8ms | 4304.1ms | 4346.6ms | 41.1ms | 943.4MB | 1.386 |
| allInternalHooks | gateway, all internal hooks | 4365.0ms | 4452.2ms | 4364.9ms | 4285.4ms | 4332.3ms | 40.0ms | 932.0MB | 1.377 |
| fiftyPlugins | gateway, 50 manifest plugins | 4642.9ms | 4715.3ms | 4642.8ms | 4250.9ms | 4326.5ms | 43.3ms | 1024.2MB | 1.294 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4404.2ms | 4518.9ms | 4403.8ms | 3963.6ms | 4040.2ms | 40.6ms | 1028.4MB | 1.364 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 777.8MB | 812.5MB | +34.8MB (+4.5%) | -13.8MB (-3.0%) | stable |
| gateway boot | skipChannels | 760.7MB | 812.3MB | +51.7MB (+6.8%) | +30.1MB (+6.4%) | stable |
| gateway boot | oneInternalHook | 941.8MB | 943.4MB | +1.6MB (+0.2%) | -9.8MB (-1.4%) | stable |
| gateway boot | allInternalHooks | 946.9MB | 932.0MB | -14.9MB (-1.6%) | -20.0MB (-2.9%) | stable |
| gateway boot | fiftyPlugins | 927.9MB | 1024.2MB | +96.3MB (+10.4%) | -16.4MB (-3.2%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 923.1MB | 1028.4MB | +105.3MB (+11.4%) | +16.1MB (+3.4%) | stable |
| cli | gatewayHealthJson | 66.0MB | 66.1MB | +0.0MB (+0.0%) | n/a | stable |
| cli | configGetGatewayPort | 66.2MB | 62.9MB | -3.3MB (-4.9%) | n/a | stable |
| mock hello | gateway RSS delta avg | -348.7MB | -395.1MB | -46.4MB (+13.3%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| xai | 517.0MB | 470.5MB | ok |
| active-memory | 516.3MB | 469.8MB | ok |
| llm-task | 512.4MB | 465.9MB | ok |
| codex | 511.9MB | 465.4MB | ok |
| anthropic | 511.8MB | 465.4MB | ok |
| memory-lancedb | 507.6MB | 461.1MB | ok |
| migrate-hermes | 507.2MB | 460.8MB | ok |
| workboard | 488.4MB | 441.9MB | ok |
| google | 422.5MB | 376.0MB | ok |
| voice-call | 419.6MB | 373.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 887.7ms | 908.3ms |
| default | post-ready.agent-runtime-plugins.total | 876.7ms | 897.0ms |
| default | post-attach.update-check.total | 829.2ms | 847.7ms |
| default | post-attach.update-sentinel.total | 822.3ms | 840.5ms |
| default | sidecars.restart-sentinel.total | 821.4ms | 839.5ms |
| skipChannels | sidecars.session-locks.total | 900.5ms | 915.1ms |
| skipChannels | post-attach.update-sentinel.total | 894.4ms | 908.7ms |
| skipChannels | sidecars.restart-sentinel.total | 893.6ms | 907.8ms |
| skipChannels | sidecars.ready.total | 886.7ms | 895.2ms |
| skipChannels | sidecars.total.total | 881.4ms | 889.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3348.6ms | 3355.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2723.1ms | 2730.4ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2693.6ms | 2700.4ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2692.7ms | 2699.6ms |
| oneInternalHook | memory.ready.rssMb | 926.5ms | 934.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3338.9ms | 3406.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2710.9ms | 2740.6ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2681.9ms | 2707.7ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2681.1ms | 2706.9ms |
| allInternalHooks | memory.ready.rssMb | 912.8ms | 919.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3122.4ms | 3225.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2492.6ms | 2582.3ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 2463.7ms | 2545.8ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 2462.8ms | 2544.7ms |
| fiftyPlugins | sidecars.session-locks.total | 1134.0ms | 1136.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3114.6ms | 3167.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2472.3ms | 2533.1ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 2442.0ms | 2502.6ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 2441.1ms | 2501.7ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 1022.7ms | 1023.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9737.0ms | 0.000 | 2435.8MB | 1044.4MB | -1391.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9331.0ms | 0.214 | 949.5MB | 1110.4MB | 160.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9269.0ms | 0.108 | 915.7MB | 960.9MB | 45.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3621.2ms | 4922.3ms | 66.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 754.3ms | 768.1ms | 62.9MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.1ms | 55.7ms |

## Observations

No data.

