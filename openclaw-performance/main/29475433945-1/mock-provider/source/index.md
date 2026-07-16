# OpenClaw Source Performance

Generated: 2026-07-16T06:06:25.912Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3619.1ms | 3959.2ms | 3619.0ms | 3356.1ms | 3467.1ms | 52.2ms | 765.9MB | 1.515 |
| skipChannels | gateway, skip channels | 3838.9ms | 5749.7ms | 3838.8ms | 3534.5ms | 3598.4ms | 50.4ms | 790.7MB | 1.563 |
| oneInternalHook | gateway, one configured internal hook | 6443.6ms | 7917.4ms | 6443.5ms | 5895.6ms | 6051.6ms | 54.1ms | 926.5MB | 1.516 |
| allInternalHooks | gateway, all internal hooks | 5519.5ms | 5633.4ms | 5519.4ms | 5197.1ms | 5260.8ms | 54.8ms | 915.5MB | 1.449 |
| fiftyPlugins | gateway, 50 manifest plugins | 6211.9ms | 7775.9ms | 6211.8ms | 5661.9ms | 5760.7ms | 62.6ms | 938.5MB | 1.449 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8220.8ms | 9909.5ms | 8220.5ms | 6932.8ms | 7102.7ms | 61.3ms | 963.7MB | 1.460 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 805.3MB | 765.9MB | -39.4MB (-4.9%) | +23.7MB (+5.4%) | stable |
| gateway boot | skipChannels | 766.6MB | 790.7MB | +24.1MB (+3.1%) | -5.0MB (-1.1%) | stable |
| gateway boot | oneInternalHook | 883.3MB | 926.5MB | +43.2MB (+4.9%) | +15.1MB (+2.4%) | stable |
| gateway boot | allInternalHooks | 904.7MB | 915.5MB | +10.8MB (+1.2%) | +12.2MB (+1.9%) | stable |
| gateway boot | fiftyPlugins | 847.1MB | 938.5MB | +91.5MB (+10.8%) | -90.5MB (-19.1%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 937.1MB | 963.7MB | +26.6MB (+2.8%) | -69.2MB (-16.1%) | stable |
| cli | gatewayHealthJson | 62.9MB | 63.2MB | +0.3MB (+0.4%) | n/a | stable |
| cli | configGetGatewayPort | 62.7MB | 62.7MB | +0.0MB (+0.0%) | n/a | stable |
| mock hello | gateway RSS delta avg | -468.8MB | -460.2MB | +8.5MB (-1.8%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 519.0MB | 472.4MB | ok |
| llm-task | 516.5MB | 469.9MB | ok |
| anthropic | 512.5MB | 465.9MB | ok |
| xai | 512.0MB | 465.4MB | ok |
| workboard | 510.6MB | 464.0MB | ok |
| active-memory | 509.8MB | 463.2MB | ok |
| migrate-hermes | 508.8MB | 462.2MB | ok |
| openai | 427.2MB | 380.6MB | ok |
| google | 425.1MB | 378.6MB | ok |
| voice-call | 423.6MB | 377.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-attach.update-sentinel.total | 1078.5ms | 1239.4ms |
| default | sidecars.restart-sentinel.total | 1077.6ms | 1238.6ms |
| default | sidecars.session-locks.total | 1076.7ms | 1237.4ms |
| default | post-ready.agent-runtime-plugins.total | 1074.4ms | 1234.5ms |
| default | post-attach.update-check.total | 1017.4ms | 1142.2ms |
| skipChannels | post-attach.update-sentinel.total | 1222.2ms | 1724.4ms |
| skipChannels | sidecars.restart-sentinel.total | 1221.2ms | 1722.9ms |
| skipChannels | sidecars.session-locks.total | 1220.1ms | 1721.1ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 1218.1ms | 1718.9ms |
| skipChannels | sidecars.ready.total | 1085.3ms | 1583.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 4527.8ms | 5935.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3741.1ms | 4186.6ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 3704.8ms | 4117.0ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 3703.8ms | 4115.5ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 1430.5ms | 1482.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3923.6ms | 4155.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2994.1ms | 3332.0ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2956.6ms | 3287.2ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2955.7ms | 3286.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 1051.1ms | 1178.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 4170.9ms | 4912.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 3358.9ms | 4027.1ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 3318.3ms | 3982.8ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 3317.1ms | 3981.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 1623.9ms | 2226.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 5314.8ms | 6771.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 4076.7ms | 5284.8ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 4024.6ms | 5192.7ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 4022.9ms | 5190.4ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 2126.5ms | 2148.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 15191.0ms | 0.000 | 2390.5MB | 956.6MB | -1433.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11691.0ms | 0.171 | 910.5MB | 935.4MB | 24.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13216.0ms | 0.076 | 866.9MB | 895.2MB | 28.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4676.4ms | 6334.2ms | 63.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1158.5ms | 1188.6ms | 62.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 2.9MB | 0.0MB | 0.1ms | 53.4ms |

## Observations

No data.

