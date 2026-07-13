# OpenClaw Source Performance

Generated: 2026-07-13T06:22:50.007Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5626.0ms | 5706.9ms | 5614.4ms | 5408.4ms | 5477.0ms | 60.8ms | 779.6MB | 1.422 |
| skipChannels | gateway, skip channels | 4705.9ms | 5203.1ms | 4699.9ms | 4484.8ms | 4550.5ms | 52.4ms | 780.1MB | 1.350 |
| oneInternalHook | gateway, one configured internal hook | 5373.8ms | 5560.6ms | 5371.0ms | 5014.7ms | 5088.5ms | 53.5ms | 913.6MB | 1.439 |
| allInternalHooks | gateway, all internal hooks | 5167.7ms | 5229.7ms | 5167.6ms | 5084.6ms | 5134.6ms | 55.3ms | 842.8MB | 1.401 |
| fiftyPlugins | gateway, 50 manifest plugins | 5229.4ms | 5249.1ms | 5229.4ms | 4819.2ms | 4910.0ms | 50.4ms | 856.0MB | 1.412 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4485.7ms | 4563.1ms | 4485.3ms | 4074.7ms | 4160.4ms | 47.6ms | 837.4MB | 1.351 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 739.8MB | 779.6MB | +39.8MB (+5.4%) | +109.3MB (+26.8%) | stable |
| gateway boot | skipChannels | 733.8MB | 780.1MB | +46.3MB (+6.3%) | +70.7MB (+16.2%) | stable |
| gateway boot | oneInternalHook | 720.6MB | 913.6MB | +193.1MB (+26.8%) | +216.1MB (+49.6%) | watch |
| gateway boot | allInternalHooks | 720.3MB | 842.8MB | +122.4MB (+17.0%) | +114.9MB (+26.5%) | stable |
| gateway boot | fiftyPlugins | 753.6MB | 856.0MB | +102.3MB (+13.6%) | +132.3MB (+36.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 738.8MB | 837.4MB | +98.7MB (+13.4%) | +167.2MB (+45.6%) | stable |
| cli | gatewayHealthJson | 57.7MB | 66.9MB | +9.1MB (+15.8%) | n/a | stable |
| cli | configGetGatewayPort | 57.5MB | 66.8MB | +9.3MB (+16.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | 21.0MB | -415.2MB | -436.2MB (-2072.5%) | n/a | improved |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| qa-lab | 550.4MB | 503.9MB | ok |
| migrate-hermes | 520.9MB | 474.4MB | ok |
| active-memory | 515.4MB | 468.9MB | ok |
| llm-task | 514.9MB | 468.4MB | ok |
| codex | 512.8MB | 466.3MB | ok |
| xai | 511.2MB | 464.7MB | ok |
| anthropic | 506.1MB | 459.6MB | ok |
| openai | 429.2MB | 382.7MB | ok |
| google | 424.8MB | 378.3MB | ok |
| lmstudio | 422.4MB | 376.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-attach.update-sentinel.total | 2803.0ms | 2811.4ms |
| default | sidecars.restart-sentinel.total | 2802.3ms | 2810.4ms |
| default | sidecars.session-locks.total | 2801.5ms | 2809.5ms |
| default | post-ready.agent-runtime-plugins.total | 2799.5ms | 2807.2ms |
| default | post-attach.update-check.total | 2741.4ms | 2749.7ms |
| skipChannels | post-attach.update-sentinel.total | 2245.5ms | 2474.2ms |
| skipChannels | sidecars.restart-sentinel.total | 2244.8ms | 2473.5ms |
| skipChannels | sidecars.session-locks.total | 2244.0ms | 2472.7ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 2242.7ms | 2471.6ms |
| skipChannels | sidecars.subagent-recovery.total | 2186.1ms | 2412.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3538.7ms | 4081.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2818.1ms | 3073.6ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2784.8ms | 3039.2ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2783.8ms | 3038.2ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 1528.7ms | 1528.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3673.6ms | 3718.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2938.2ms | 2985.1ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2906.6ms | 2957.5ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2905.5ms | 2956.5ms |
| allInternalHooks | post-attach.update-sentinel.total | 1312.4ms | 1329.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3580.1ms | 3700.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2888.7ms | 2957.0ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 2861.6ms | 2928.6ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 2860.4ms | 2927.5ms |
| fiftyPlugins | post-attach.update-sentinel.total | 1168.0ms | 1272.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3341.2ms | 3365.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2644.8ms | 2708.1ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 2617.0ms | 2678.9ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 2615.9ms | 2677.8ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 813.4ms | 907.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9653.0ms | 0.000 | 2357.7MB | 975.8MB | -1381.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9015.0ms | 0.111 | 840.4MB | 951.7MB | 111.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9185.0ms | 0.109 | 866.8MB | 891.9MB | 25.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3327.4ms | 3364.0ms | 66.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 764.0ms | 792.2ms | 66.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 2.7MB | 0.0MB | 0.1ms | 36.3ms |

## Observations

No data.

