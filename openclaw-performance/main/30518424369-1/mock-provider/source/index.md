# OpenClaw Source Performance

Generated: 2026-07-30T06:09:24.597Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6139.8ms | 7174.5ms | 6139.4ms | 3003.2ms | 5685.5ms | 213.6ms | 996.1MB | 1.394 |
| skipChannels | gateway, skip channels | 3039.4ms | 7602.7ms | 3038.6ms | 2981.8ms | 2990.9ms | 210.0ms | 995.3MB | 1.341 |
| oneInternalHook | gateway, one configured internal hook | 4235.6ms | 4276.2ms | 4235.2ms | 4174.8ms | 4183.1ms | 210.1ms | 987.4MB | 1.417 |
| allInternalHooks | gateway, all internal hooks | 4307.7ms | 4344.3ms | 4307.5ms | 4248.8ms | 4256.8ms | 210.1ms | 1005.3MB | 1.401 |
| fiftyPlugins | gateway, 50 manifest plugins | 7756.7ms | 7823.3ms | 7715.7ms | 2927.3ms | 2970.3ms | 213.9ms | 1049.0MB | 1.305 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7750.0ms | 7762.2ms | 7749.9ms | 2833.2ms | 2885.0ms | 223.9ms | 1112.7MB | 1.316 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1033.9MB | 996.1MB | -37.8MB (-3.7%) | -22.7MB (-3.4%) | stable |
| gateway boot | skipChannels | 942.7MB | 995.3MB | +52.6MB (+5.6%) | +32.2MB (+5.7%) | stable |
| gateway boot | oneInternalHook | 977.1MB | 987.4MB | +10.2MB (+1.0%) | +3.6MB (+0.7%) | stable |
| gateway boot | allInternalHooks | 934.7MB | 1005.3MB | +70.6MB (+7.6%) | +1.9MB (+0.4%) | stable |
| gateway boot | fiftyPlugins | 1089.1MB | 1049.0MB | -40.1MB (-3.7%) | +206.0MB (+60.6%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1095.5MB | 1112.7MB | +17.2MB (+1.6%) | -7.5MB (-1.2%) | stable |
| cli | gatewayHealthJson | 187.0MB | 187.7MB | +0.8MB (+0.4%) | n/a | stable |
| cli | configGetGatewayPort | 187.0MB | 186.6MB | -0.4MB (-0.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | -467.7MB | -544.3MB | -76.5MB (+16.4%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| opencode | 588.9MB | 542.8MB | ok |
| openai | 581.0MB | 534.9MB | ok |
| codex | 577.5MB | 531.4MB | ok |
| google-meet | 574.7MB | 528.6MB | ok |
| anthropic | 543.0MB | 496.9MB | ok |
| acpx | 537.0MB | 490.9MB | ok |
| memory-lancedb | 525.9MB | 479.8MB | ok |
| migrate-hermes | 514.4MB | 468.3MB | ok |
| llm-task | 510.4MB | 464.3MB | ok |
| voice-call | 509.8MB | 463.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-ready.gateway-data.plugins.total | 4140.4ms | 4864.3ms |
| default | sidecars.session-locks.total | 4042.3ms | 4723.1ms |
| default | post-ready.agent-runtime-plugins.total | 3947.7ms | 4626.9ms |
| default | post-ready.gateway-data.sessions.main.total | 3943.0ms | 4624.5ms |
| default | post-attach.update-check.total | 3937.2ms | 4618.8ms |
| skipChannels | post-ready.gateway-data.plugins.total | 5713.5ms | 5713.5ms |
| skipChannels | sidecars.session-locks.total | 5564.9ms | 5564.9ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 5471.4ms | 5471.4ms |
| skipChannels | post-ready.gateway-data.sessions.main.total | 5467.5ms | 5467.5ms |
| skipChannels | post-attach.update-sentinel.total | 5135.3ms | 5135.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3114.0ms | 3170.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2564.2ms | 2594.0ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2539.9ms | 2563.2ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2539.0ms | 2562.3ms |
| oneInternalHook | sidecars.internal-hooks.total | 908.1ms | 925.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3196.9ms | 3201.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2625.1ms | 2636.5ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2597.3ms | 2611.2ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2596.3ms | 2610.3ms |
| allInternalHooks | sidecars.internal-hooks.total | 924.1ms | 949.7ms |
| fiftyPlugins | post-ready.gateway-data.plugins.total | 5725.2ms | 5773.0ms |
| fiftyPlugins | sidecars.session-locks.total | 5484.0ms | 5665.8ms |
| fiftyPlugins | post-ready.maintenance.total | 5424.6ms | 5520.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5410.6ms | 5590.5ms |
| fiftyPlugins | post-ready.gateway-data.sessions.main.total | 5408.2ms | 5587.8ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.plugins.total | 5684.2ms | 5691.7ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5484.6ms | 5485.5ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5449.6ms | 5582.4ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5370.4ms | 5375.5ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.sessions.main.total | 5367.9ms | 5373.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11565.0ms | 0.000 | 2769.3MB | 1103.0MB | -1666.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10876.0ms | 0.092 | 968.5MB | 985.2MB | 16.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11551.0ms | 0.087 | 1090.1MB | 1106.8MB | 16.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 649.9ms | 687.6ms | 187.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 854.1ms | 869.7ms | 186.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 139.9ms |

## Observations

No data.

