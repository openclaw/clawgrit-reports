# OpenClaw Source Performance

Generated: 2026-07-15T06:01:54.910Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3594.6ms | 3647.0ms | 3593.8ms | 3293.0ms | 3382.4ms | 45.5ms | 805.3MB | 1.520 |
| skipChannels | gateway, skip channels | 3275.2ms | 3358.3ms | 3221.0ms | 3122.9ms | 3173.8ms | 48.9ms | 766.6MB | 1.527 |
| oneInternalHook | gateway, one configured internal hook | 4891.8ms | 5119.8ms | 4886.6ms | 4668.1ms | 4718.0ms | 46.0ms | 883.3MB | 1.471 |
| allInternalHooks | gateway, all internal hooks | 4740.7ms | 4920.9ms | 4740.5ms | 4484.6ms | 4529.2ms | 46.8ms | 904.7MB | 1.423 |
| fiftyPlugins | gateway, 50 manifest plugins | 4649.5ms | 4909.8ms | 4649.2ms | 4260.5ms | 4340.1ms | 46.8ms | 847.1MB | 1.426 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4677.5ms | 4753.1ms | 4677.5ms | 4185.3ms | 4269.0ms | 44.6ms | 937.1MB | 1.426 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 751.4MB | 805.3MB | +53.9MB (+7.2%) | -20.6MB (-4.4%) | stable |
| gateway boot | skipChannels | 754.6MB | 766.6MB | +12.0MB (+1.6%) | +30.8MB (+7.1%) | stable |
| gateway boot | oneInternalHook | 887.5MB | 883.3MB | -4.2MB (-0.5%) | +17.9MB (+2.9%) | stable |
| gateway boot | allInternalHooks | 881.0MB | 904.7MB | +23.7MB (+2.7%) | +2.2MB (+0.3%) | stable |
| gateway boot | fiftyPlugins | 933.2MB | 847.1MB | -86.1MB (-9.2%) | -3.2MB (-0.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 934.0MB | 937.1MB | +3.1MB (+0.3%) | +19.2MB (+4.7%) | stable |
| cli | gatewayHealthJson | 65.9MB | 62.9MB | -3.0MB (-4.6%) | n/a | stable |
| cli | configGetGatewayPort | 63.5MB | 62.7MB | -0.8MB (-1.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | -396.7MB | -468.8MB | -72.1MB (+18.2%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| qa-lab | 551.8MB | 505.3MB | ok |
| xai | 540.1MB | 493.6MB | ok |
| workboard | 534.6MB | 488.2MB | ok |
| llm-task | 517.9MB | 471.4MB | ok |
| active-memory | 517.3MB | 470.9MB | ok |
| codex | 513.9MB | 467.4MB | ok |
| anthropic | 513.8MB | 467.4MB | ok |
| migrate-hermes | 510.8MB | 464.3MB | ok |
| voice-call | 447.8MB | 401.3MB | ok |
| openai | 426.8MB | 380.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-attach.update-sentinel.total | 1060.7ms | 1087.8ms |
| default | sidecars.restart-sentinel.total | 1060.0ms | 1086.8ms |
| default | sidecars.session-locks.total | 1059.2ms | 1085.4ms |
| default | post-ready.agent-runtime-plugins.total | 1057.2ms | 1083.0ms |
| default | post-attach.update-check.total | 999.6ms | 1006.1ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 971.4ms | 979.2ms |
| skipChannels | post-attach.update-sentinel.total | 966.6ms | 982.1ms |
| skipChannels | sidecars.restart-sentinel.total | 965.8ms | 981.4ms |
| skipChannels | sidecars.session-locks.total | 965.0ms | 980.6ms |
| skipChannels | sidecars.subagent-recovery.total | 906.4ms | 908.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3781.4ms | 3851.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2978.8ms | 3106.2ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2952.0ms | 3069.2ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2951.1ms | 3068.1ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 896.0ms | 925.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3573.5ms | 3716.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2853.1ms | 3011.0ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2822.2ms | 2977.5ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2821.2ms | 2976.5ms |
| allInternalHooks | memory.ready.rssMb | 876.0ms | 886.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3252.5ms | 3461.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2557.0ms | 2733.9ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 2522.8ms | 2701.2ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 2521.7ms | 2700.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 1032.3ms | 1045.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3396.7ms | 3542.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2665.2ms | 2701.3ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 2634.1ms | 2663.8ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 2633.1ms | 2662.9ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 842.2ms | 932.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10434.0ms | 0.000 | 2355.7MB | 876.6MB | -1479.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10076.0ms | 0.099 | 846.5MB | 872.1MB | 25.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9584.0ms | 0.209 | 866.8MB | 914.0MB | 47.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3747.5ms | 5427.6ms | 62.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 774.8ms | 793.6ms | 62.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 2.9MB | 0.0MB | 0.1ms | 40.6ms |

## Observations

No data.

