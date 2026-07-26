# OpenClaw Source Performance

Generated: 2026-07-26T06:18:30.048Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6128.6ms | 6188.9ms | 6128.5ms | 3172.6ms | 6007.3ms | 40.1ms | 1045.7MB | 1.332 |
| skipChannels | gateway, skip channels | 6197.4ms | 6256.6ms | 6193.3ms | 3141.9ms | 3185.5ms | 43.4ms | 1022.8MB | 1.292 |
| oneInternalHook | gateway, one configured internal hook | 4567.6ms | 4618.6ms | 4567.6ms | 4481.6ms | 4522.8ms | 41.8ms | 1049.5MB | 1.326 |
| allInternalHooks | gateway, all internal hooks | 6733.6ms | 6794.6ms | 6733.5ms | 4531.3ms | 4572.1ms | 41.5ms | 1186.5MB | 1.296 |
| fiftyPlugins | gateway, 50 manifest plugins | 8357.7ms | 8545.5ms | 8357.6ms | 4413.6ms | 4485.9ms | 42.4ms | 1129.8MB | 1.210 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8144.6ms | 8224.6ms | 8144.6ms | 4117.3ms | 4200.8ms | 40.0ms | 1115.1MB | 1.236 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 938.7MB | 1045.7MB | +107.0MB (+11.4%) | -8.4MB (-1.3%) | stable |
| gateway boot | skipChannels | 805.0MB | 1022.8MB | +217.8MB (+27.1%) | -52.6MB (-14.6%) | watch |
| gateway boot | oneInternalHook | 932.0MB | 1049.5MB | +117.5MB (+12.6%) | -39.8MB (-7.4%) | stable |
| gateway boot | allInternalHooks | 949.8MB | 1186.5MB | +236.7MB (+24.9%) | -23.0MB (-4.3%) | watch |
| gateway boot | fiftyPlugins | 1136.6MB | 1129.8MB | -6.8MB (-0.6%) | +11.2MB (+1.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1063.3MB | 1115.1MB | +51.8MB (+4.9%) | +16.7MB (+2.2%) | stable |
| cli | gatewayHealthJson | 61.5MB | 61.9MB | +0.4MB (+0.7%) | n/a | stable |
| cli | configGetGatewayPort | 61.7MB | 62.3MB | +0.5MB (+0.9%) | n/a | stable |
| mock hello | gateway RSS delta avg | -285.4MB | -457.7MB | -172.3MB (+60.4%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 528.4MB | 481.8MB | ok |
| opencode | 520.8MB | 474.2MB | ok |
| google-meet | 520.3MB | 473.7MB | ok |
| workboard | 512.2MB | 465.6MB | ok |
| anthropic | 510.1MB | 463.5MB | ok |
| zoom-meetings | 509.0MB | 462.4MB | ok |
| voice-call | 508.4MB | 461.8MB | ok |
| acpx | 508.0MB | 461.4MB | ok |
| codex | 507.6MB | 461.1MB | ok |
| migrate-hermes | 505.7MB | 459.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3884.1ms | 3926.3ms |
| default | post-ready.agent-runtime-plugins.total | 3857.3ms | 3901.7ms |
| default | post-attach.update-check.total | 3854.6ms | 3899.1ms |
| default | post-attach.update-sentinel.total | 3845.5ms | 3890.0ms |
| default | sidecars.restart-sentinel.total | 3844.4ms | 3889.0ms |
| skipChannels | sidecars.session-locks.total | 4003.8ms | 4013.5ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4002.2ms | 4004.7ms |
| skipChannels | post-attach.update-sentinel.total | 3997.8ms | 4000.6ms |
| skipChannels | sidecars.restart-sentinel.total | 3996.9ms | 3999.7ms |
| skipChannels | sidecars.ready.total | 3985.2ms | 3987.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3359.9ms | 3419.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2630.5ms | 2683.5ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2608.8ms | 2661.6ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2608.0ms | 2660.7ms |
| oneInternalHook | sidecars.internal-hooks.total | 929.4ms | 931.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3394.7ms | 3411.7ms |
| allInternalHooks | sidecars.session-locks.total | 3048.9ms | 3056.4ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3047.3ms | 3054.7ms |
| allInternalHooks | post-attach.update-sentinel.total | 3043.1ms | 3050.3ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3042.1ms | 3049.3ms |
| fiftyPlugins | sidecars.session-locks.total | 4887.9ms | 4952.5ms |
| fiftyPlugins | post-ready.maintenance.total | 4802.5ms | 4866.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4768.5ms | 4834.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4575.3ms | 4638.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4574.2ms | 4637.7ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4649.8ms | 4705.0ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4562.1ms | 4619.0ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4529.8ms | 4583.6ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4333.4ms | 4387.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4332.5ms | 4386.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10725.0ms | 0.000 | 2499.9MB | 1065.3MB | -1434.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10399.0ms | 0.096 | 942.4MB | 972.1MB | 29.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10409.0ms | 0.192 | 942.9MB | 974.6MB | 31.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3385.6ms | 3391.0ms | 61.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 821.6ms | 821.9ms | 62.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 132.3ms |

## Observations

No data.

