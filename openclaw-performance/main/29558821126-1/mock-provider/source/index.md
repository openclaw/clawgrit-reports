# OpenClaw Source Performance

Generated: 2026-07-17T06:04:48.315Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3503.6ms | 4533.8ms | 3499.3ms | 3243.7ms | 3329.8ms | 44.4ms | 841.2MB | 1.544 |
| skipChannels | gateway, skip channels | 3818.3ms | 3975.1ms | 3818.2ms | 3548.5ms | 3610.1ms | 44.5ms | 789.4MB | 1.571 |
| oneInternalHook | gateway, one configured internal hook | 4839.8ms | 4916.4ms | 4839.8ms | 4621.7ms | 4665.1ms | 44.5ms | 941.4MB | 1.424 |
| allInternalHooks | gateway, all internal hooks | 4423.0ms | 4822.9ms | 4422.8ms | 4350.1ms | 4394.6ms | 43.9ms | 923.6MB | 1.451 |
| fiftyPlugins | gateway, 50 manifest plugins | 4770.8ms | 4963.6ms | 4770.6ms | 4384.9ms | 4470.4ms | 44.4ms | 894.4MB | 1.410 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6028.0ms | 6606.1ms | 6028.0ms | 5387.6ms | 5495.7ms | 48.6ms | 895.8MB | 1.362 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 765.9MB | 841.2MB | +75.3MB (+9.8%) | -9.8MB (-2.1%) | stable |
| gateway boot | skipChannels | 790.7MB | 789.4MB | -1.3MB (-0.2%) | +5.6MB (+1.2%) | stable |
| gateway boot | oneInternalHook | 926.5MB | 941.4MB | +14.9MB (+1.6%) | +30.2MB (+4.7%) | stable |
| gateway boot | allInternalHooks | 915.5MB | 923.6MB | +8.1MB (+0.9%) | +10.8MB (+1.7%) | stable |
| gateway boot | fiftyPlugins | 938.5MB | 894.4MB | -44.2MB (-4.7%) | +95.8MB (+25.0%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 963.7MB | 895.8MB | -67.8MB (-7.0%) | +117.2MB (+32.5%) | stable |
| cli | gatewayHealthJson | 63.2MB | 62.7MB | -0.4MB (-0.7%) | n/a | stable |
| cli | configGetGatewayPort | 62.7MB | 65.8MB | +3.1MB (+5.0%) | n/a | stable |
| mock hello | gateway RSS delta avg | -460.2MB | -450.2MB | +10.1MB (-2.2%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| memory-lancedb | 518.0MB | 471.4MB | ok |
| xai | 517.7MB | 471.2MB | ok |
| workboard | 515.0MB | 468.4MB | ok |
| active-memory | 514.4MB | 467.9MB | ok |
| migrate-hermes | 513.8MB | 467.3MB | ok |
| llm-task | 513.4MB | 466.9MB | ok |
| codex | 511.7MB | 465.2MB | ok |
| anthropic | 505.5MB | 458.9MB | ok |
| voice-call | 420.3MB | 373.8MB | ok |
| lmstudio | 419.5MB | 372.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 1008.9ms | 1160.1ms |
| default | post-attach.update-sentinel.total | 996.9ms | 1150.4ms |
| default | sidecars.restart-sentinel.total | 996.1ms | 1149.5ms |
| default | post-ready.agent-runtime-plugins.total | 993.9ms | 1147.3ms |
| default | post-attach.update-check.total | 936.8ms | 1088.6ms |
| skipChannels | sidecars.session-locks.total | 1040.7ms | 1285.7ms |
| skipChannels | post-attach.update-sentinel.total | 1039.4ms | 1280.2ms |
| skipChannels | sidecars.restart-sentinel.total | 1038.6ms | 1279.1ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 1036.9ms | 1275.8ms |
| skipChannels | sidecars.ready.total | 962.0ms | 1172.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3643.6ms | 3703.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2921.7ms | 2981.3ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2887.3ms | 2948.1ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2886.4ms | 2947.2ms |
| oneInternalHook | sidecars.session-locks.total | 984.3ms | 1118.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3384.8ms | 3550.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2717.2ms | 2846.6ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2686.5ms | 2814.5ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2685.6ms | 2813.6ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 926.8ms | 926.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3250.1ms | 3456.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2564.0ms | 2751.9ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 2532.1ms | 2709.2ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 2531.1ms | 2708.2ms |
| fiftyPlugins | sidecars.session-locks.total | 1138.7ms | 1141.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 4230.4ms | 4569.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 3363.4ms | 3705.9ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 3321.0ms | 3646.6ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 3319.7ms | 3644.9ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 1300.6ms | 1499.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9671.0ms | 0.000 | 2379.8MB | 936.9MB | -1442.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9062.0ms | 0.221 | 902.2MB | 951.6MB | 49.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9152.0ms | 0.219 | 898.6MB | 941.6MB | 43.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3400.3ms | 4919.5ms | 62.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 802.7ms | 831.4ms | 65.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.1ms | 50.8ms |

## Observations

No data.

