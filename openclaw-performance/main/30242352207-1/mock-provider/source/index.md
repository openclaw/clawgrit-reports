# OpenClaw Source Performance

Generated: 2026-07-27T06:24:54.358Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5893.8ms | 5929.5ms | 5765.0ms | 2885.0ms | 5810.4ms | 42.5ms | 966.1MB | 1.362 |
| skipChannels | gateway, skip channels | 2877.4ms | 2901.3ms | 2877.1ms | 2788.5ms | 2804.2ms | 43.3ms | 912.8MB | 1.415 |
| oneInternalHook | gateway, one configured internal hook | 4228.6ms | 4252.5ms | 4227.5ms | 4162.9ms | 4177.9ms | 41.8ms | 965.5MB | 1.419 |
| allInternalHooks | gateway, all internal hooks | 4206.5ms | 4268.2ms | 4206.1ms | 4143.3ms | 4157.7ms | 43.9ms | 979.9MB | 1.406 |
| fiftyPlugins | gateway, 50 manifest plugins | 7965.5ms | 8058.7ms | 7965.5ms | 4124.3ms | 4174.9ms | 41.9ms | 1109.6MB | 1.269 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7830.2ms | 8046.2ms | 7830.1ms | 3878.5ms | 3935.2ms | 41.0ms | 1173.3MB | 1.294 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1045.7MB | 966.1MB | -79.6MB (-7.6%) | +1.5MB (+0.2%) | stable |
| gateway boot | skipChannels | 1022.8MB | 912.8MB | -110.0MB (-10.8%) | +66.9MB (+21.7%) | improved |
| gateway boot | oneInternalHook | 1049.5MB | 965.5MB | -84.0MB (-8.0%) | +19.0MB (+3.8%) | stable |
| gateway boot | allInternalHooks | 1186.5MB | 979.9MB | -206.6MB (-17.4%) | -4.7MB (-0.9%) | improved |
| gateway boot | fiftyPlugins | 1129.8MB | 1109.6MB | -20.2MB (-1.8%) | +16.5MB (+2.2%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1115.1MB | 1173.3MB | +58.2MB (+5.2%) | -54.8MB (-7.1%) | stable |
| cli | gatewayHealthJson | 61.9MB | 61.9MB | +0.0MB (+0.0%) | n/a | stable |
| cli | configGetGatewayPort | 62.3MB | 62.0MB | -0.2MB (-0.4%) | n/a | stable |
| mock hello | gateway RSS delta avg | -457.7MB | -495.3MB | -37.6MB (+8.2%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| opencode | 555.7MB | 509.2MB | ok |
| active-memory | 533.5MB | 487.0MB | ok |
| google-meet | 513.9MB | 467.5MB | ok |
| workboard | 513.3MB | 466.8MB | ok |
| zoom-meetings | 511.7MB | 465.2MB | ok |
| codex | 511.3MB | 464.9MB | ok |
| teams-meetings | 509.1MB | 462.7MB | ok |
| anthropic | 508.8MB | 462.3MB | ok |
| migrate-hermes | 507.6MB | 461.1MB | ok |
| memory-lancedb | 507.5MB | 461.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3933.1ms | 3971.3ms |
| default | post-ready.agent-runtime-plugins.total | 3917.8ms | 3946.3ms |
| default | post-attach.update-check.total | 3914.9ms | 3943.4ms |
| default | post-attach.update-sentinel.total | 3905.1ms | 3933.3ms |
| default | sidecars.restart-sentinel.total | 3903.9ms | 3931.9ms |
| skipChannels | sidecars.internal-hooks.total | 1053.0ms | 1062.7ms |
| skipChannels | post-attach.update-check.total | 959.3ms | 963.7ms |
| skipChannels | ready.total | 941.3ms | 945.5ms |
| skipChannels | runtime.post-attach.total | 939.7ms | 943.9ms |
| skipChannels | post-attach.log.total | 938.7ms | 943.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3120.0ms | 3128.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2566.8ms | 2582.6ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2550.3ms | 2554.6ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2549.4ms | 2553.7ms |
| oneInternalHook | sidecars.internal-hooks.total | 927.6ms | 939.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3119.6ms | 3152.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2580.3ms | 2603.0ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2557.5ms | 2580.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2556.6ms | 2579.4ms |
| allInternalHooks | sidecars.internal-hooks.total | 923.7ms | 929.6ms |
| fiftyPlugins | sidecars.session-locks.total | 4718.3ms | 4728.6ms |
| fiftyPlugins | post-ready.maintenance.total | 4677.2ms | 4687.3ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4644.6ms | 4651.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4449.5ms | 4457.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4448.7ms | 4456.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4540.8ms | 4628.0ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4499.2ms | 4586.6ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4467.2ms | 4550.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4273.5ms | 4352.6ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4272.7ms | 4351.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10467.0ms | 0.000 | 2661.9MB | 992.1MB | -1669.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9970.0ms | 0.100 | 904.5MB | 911.7MB | 7.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9976.0ms | 0.100 | 877.9MB | 1054.6MB | 176.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3255.5ms | 3256.5ms | 61.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 725.8ms | 735.3ms | 62.0MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 127.0ms |

## Observations

No data.

