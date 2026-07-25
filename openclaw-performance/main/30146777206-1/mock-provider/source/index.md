# OpenClaw Source Performance

Generated: 2026-07-25T06:06:48.852Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6085.7ms | 6161.9ms | 6040.5ms | 3117.7ms | 6033.5ms | 43.3ms | 938.7MB | 1.324 |
| skipChannels | gateway, skip channels | 3193.1ms | 3198.2ms | 3192.7ms | 3120.0ms | 3163.4ms | 40.7ms | 805.0MB | 1.269 |
| oneInternalHook | gateway, one configured internal hook | 4553.0ms | 4642.7ms | 4552.9ms | 4481.1ms | 4523.7ms | 41.8ms | 932.0MB | 1.321 |
| allInternalHooks | gateway, all internal hooks | 4525.3ms | 4542.5ms | 4525.2ms | 4448.1ms | 4492.3ms | 42.4ms | 949.8MB | 1.331 |
| fiftyPlugins | gateway, 50 manifest plugins | 8409.7ms | 8412.8ms | 8409.5ms | 4365.6ms | 4446.8ms | 41.4ms | 1136.6MB | 1.195 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8164.1ms | 8303.4ms | 8164.0ms | 4071.7ms | 4154.4ms | 42.2ms | 1063.3MB | 1.239 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1038.2MB | 938.7MB | -99.5MB (-9.6%) | -4.4MB (-0.7%) | stable |
| gateway boot | skipChannels | 780.5MB | 805.0MB | +24.5MB (+3.1%) | -23.7MB (-6.2%) | stable |
| gateway boot | oneInternalHook | 953.8MB | 932.0MB | -21.7MB (-2.3%) | +35.0MB (+7.0%) | stable |
| gateway boot | allInternalHooks | 984.2MB | 949.8MB | -34.4MB (-3.5%) | +162.7MB (+44.2%) | stable |
| gateway boot | fiftyPlugins | 1150.4MB | 1136.6MB | -13.7MB (-1.2%) | +107.6MB (+16.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1105.2MB | 1063.3MB | -41.9MB (-3.8%) | +11.0MB (+1.5%) | stable |
| cli | gatewayHealthJson | 61.7MB | 61.5MB | -0.2MB (-0.4%) | n/a | stable |
| cli | configGetGatewayPort | 60.8MB | 61.7MB | +0.9MB (+1.4%) | n/a | stable |
| mock hello | gateway RSS delta avg | -314.0MB | -285.4MB | +28.5MB (-9.1%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 582.4MB | 535.9MB | ok |
| google-meet | 533.1MB | 486.7MB | ok |
| active-memory | 513.7MB | 467.3MB | ok |
| codex | 512.6MB | 466.2MB | ok |
| teams-meetings | 510.1MB | 463.7MB | ok |
| migrate-hermes | 508.6MB | 462.1MB | ok |
| zoom-meetings | 508.4MB | 462.0MB | ok |
| anthropic | 507.4MB | 461.0MB | ok |
| voice-call | 506.0MB | 459.6MB | ok |
| llm-task | 504.8MB | 458.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3913.3ms | 3938.5ms |
| default | post-ready.agent-runtime-plugins.total | 3903.6ms | 3917.1ms |
| default | post-attach.update-check.total | 3899.2ms | 3914.4ms |
| default | post-attach.update-sentinel.total | 3891.1ms | 3906.3ms |
| default | sidecars.restart-sentinel.total | 3889.8ms | 3905.1ms |
| skipChannels | sidecars.internal-hooks.total | 1030.1ms | 1068.0ms |
| skipChannels | post-attach.update-check.total | 962.3ms | 992.4ms |
| skipChannels | ready.total | 949.2ms | 979.0ms |
| skipChannels | runtime.post-attach.total | 947.6ms | 977.3ms |
| skipChannels | post-attach.log.total | 946.6ms | 976.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3403.0ms | 3461.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2695.4ms | 2732.8ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2676.7ms | 2713.6ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2675.9ms | 2712.8ms |
| oneInternalHook | sidecars.internal-hooks.total | 935.1ms | 949.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3360.7ms | 3364.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2647.6ms | 2672.5ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2628.0ms | 2650.5ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2627.0ms | 2649.6ms |
| allInternalHooks | sidecars.internal-hooks.total | 934.9ms | 949.5ms |
| fiftyPlugins | sidecars.session-locks.total | 4959.8ms | 4980.3ms |
| fiftyPlugins | post-ready.maintenance.total | 4864.2ms | 4887.4ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4825.6ms | 4852.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4626.9ms | 4653.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4625.9ms | 4652.5ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4712.0ms | 4726.4ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4615.2ms | 4631.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4575.9ms | 4597.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4369.7ms | 4406.6ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4368.5ms | 4405.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10598.0ms | 0.000 | 2305.8MB | 1122.9MB | -1182.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10025.0ms | 0.200 | 838.3MB | 1094.0MB | 255.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10349.0ms | 0.193 | 934.4MB | 1005.3MB | 70.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3378.8ms | 3416.6ms | 61.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 802.6ms | 816.4ms | 61.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 124.4ms |

## Observations

No data.

