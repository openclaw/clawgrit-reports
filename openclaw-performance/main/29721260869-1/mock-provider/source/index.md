# OpenClaw Source Performance

Generated: 2026-07-20T06:22:11.270Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5803.1ms | 5935.6ms | 2242.6ms | 2150.7ms | 5705.5ms | 40.9ms | 918.6MB | 1.211 |
| skipChannels | gateway, skip channels | 2248.3ms | 2291.5ms | 2248.0ms | 2177.2ms | 2220.2ms | 39.1ms | 696.8MB | 1.350 |
| oneInternalHook | gateway, one configured internal hook | 3552.0ms | 3581.2ms | 3551.7ms | 3471.9ms | 3511.4ms | 40.5ms | 861.4MB | 1.151 |
| allInternalHooks | gateway, all internal hooks | 3479.4ms | 3484.3ms | 3479.2ms | 3398.1ms | 3439.6ms | 39.8ms | 856.4MB | 1.157 |
| fiftyPlugins | gateway, 50 manifest plugins | 5326.3ms | 5366.5ms | 5323.9ms | 3450.8ms | 3526.5ms | 38.1ms | 886.4MB | 1.320 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3641.1ms | 3641.3ms | 3640.5ms | 3215.8ms | 3294.4ms | 38.8ms | 859.5MB | 1.100 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 812.5MB | 918.6MB | +106.0MB (+13.0%) | +79.4MB (+17.6%) | stable |
| gateway boot | skipChannels | 812.3MB | 696.8MB | -115.5MB (-14.2%) | -135.1MB (-27.1%) | improved |
| gateway boot | oneInternalHook | 943.4MB | 861.4MB | -82.0MB (-8.7%) | -212.4MB (-31.0%) | stable |
| gateway boot | allInternalHooks | 932.0MB | 856.4MB | -75.6MB (-8.1%) | -217.3MB (-32.0%) | stable |
| gateway boot | fiftyPlugins | 1024.2MB | 886.4MB | -137.8MB (-13.5%) | -110.1MB (-21.9%) | improved |
| gateway boot | fiftyStartupLazyPlugins | 1028.4MB | 859.5MB | -169.0MB (-16.4%) | -84.1MB (-17.0%) | improved |
| cli | gatewayHealthJson | 66.1MB | 59.4MB | -6.7MB (-10.1%) | n/a | stable |
| cli | configGetGatewayPort | 62.9MB | 59.3MB | -3.6MB (-5.7%) | n/a | stable |
| mock hello | gateway RSS delta avg | -395.1MB | -368.4MB | +26.7MB (-6.8%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 503.9MB | 457.3MB | ok |
| codex | 473.0MB | 426.4MB | ok |
| memory-lancedb | 464.6MB | 418.0MB | ok |
| anthropic | 463.8MB | 417.2MB | ok |
| xai | 456.5MB | 409.9MB | ok |
| llm-task | 427.1MB | 380.5MB | ok |
| active-memory | 426.5MB | 379.9MB | ok |
| migrate-hermes | 421.9MB | 375.3MB | ok |
| openrouter | 359.0MB | 312.4MB | ok |
| minimax | 357.6MB | 311.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4273.7ms | 4356.7ms |
| default | post-ready.agent-runtime-plugins.total | 4265.7ms | 4339.9ms |
| default | post-attach.update-check.total | 4261.9ms | 4337.6ms |
| default | post-attach.update-sentinel.total | 4254.2ms | 4331.5ms |
| default | sidecars.restart-sentinel.total | 4253.1ms | 4330.6ms |
| skipChannels | sidecars.internal-hooks.total | 716.4ms | 736.4ms |
| skipChannels | post-attach.update-check.total | 660.4ms | 679.3ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 652.3ms | 665.0ms |
| skipChannels | ready.total | 648.3ms | 667.2ms |
| skipChannels | runtime.post-attach.total | 646.9ms | 665.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2755.0ms | 2757.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2206.5ms | 2214.1ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2186.5ms | 2193.5ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2185.7ms | 2192.7ms |
| oneInternalHook | memory.ready.rssMb | 713.8ms | 726.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2678.8ms | 2683.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2146.9ms | 2152.4ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2127.8ms | 2132.6ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2126.9ms | 2131.8ms |
| allInternalHooks | memory.ready.rssMb | 709.9ms | 737.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 2555.8ms | 2586.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2534.5ms | 2559.7ms |
| fiftyPlugins | sidecars.session-locks.total | 2528.9ms | 2589.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 2426.7ms | 2460.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 2425.8ms | 2456.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2545.7ms | 2569.9ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 2262.8ms | 2278.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 2258.4ms | 2273.5ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 2257.4ms | 2272.6ms |
| fiftyStartupLazyPlugins | sidecars.ready.total | 2241.5ms | 2257.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8682.0ms | 0.000 | 2167.1MB | 884.7MB | -1282.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 8446.0ms | 0.237 | 770.2MB | 863.9MB | 93.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 8512.0ms | 0.235 | 780.5MB | 864.0MB | 83.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2782.7ms | 2821.7ms | 59.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 635.4ms | 654.9ms | 59.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.0ms | 56.4ms |

## Observations

No data.

