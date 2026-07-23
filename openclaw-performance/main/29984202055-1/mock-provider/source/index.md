# OpenClaw Source Performance

Generated: 2026-07-23T06:16:15.614Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5668.6ms | 5935.5ms | 5668.5ms | 2802.3ms | 5579.9ms | 42.4ms | 1001.7MB | 1.242 |
| skipChannels | gateway, skip channels | 3040.5ms | 3106.7ms | 3040.1ms | 2962.3ms | 3004.3ms | 41.1ms | 764.0MB | 1.324 |
| oneInternalHook | gateway, one configured internal hook | 6441.5ms | 6442.0ms | 6441.5ms | 4274.9ms | 4321.2ms | 43.4ms | 942.9MB | 1.374 |
| allInternalHooks | gateway, all internal hooks | 4283.4ms | 6570.8ms | 4283.0ms | 4208.3ms | 4249.4ms | 41.2ms | 948.6MB | 1.218 |
| fiftyPlugins | gateway, 50 manifest plugins | 8252.7ms | 8257.8ms | 8252.7ms | 4133.4ms | 4214.1ms | 42.0ms | 1165.4MB | 1.229 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7933.5ms | 8114.5ms | 7933.5ms | 3813.7ms | 3898.6ms | 40.1ms | 1130.8MB | 1.269 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 917.9MB | 1001.7MB | +83.8MB (+9.1%) | +160.4MB (+33.8%) | stable |
| gateway boot | skipChannels | 876.5MB | 764.0MB | -112.5MB (-12.8%) | -135.8MB (-27.4%) | improved |
| gateway boot | oneInternalHook | 957.9MB | 942.9MB | -15.0MB (-1.6%) | +107.7MB (+29.3%) | stable |
| gateway boot | allInternalHooks | 947.0MB | 948.6MB | +1.5MB (+0.2%) | +361.5MB (+124.4%) | stable |
| gateway boot | fiftyPlugins | 1135.8MB | 1165.4MB | +29.6MB (+2.6%) | +151.9MB (+25.0%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1153.8MB | 1130.8MB | -22.9MB (-2.0%) | +17.2MB (+3.0%) | stable |
| cli | gatewayHealthJson | 60.2MB | 60.1MB | -0.1MB (-0.1%) | n/a | stable |
| cli | configGetGatewayPort | 60.9MB | 60.2MB | -0.7MB (-1.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | -440.7MB | -377.6MB | +63.1MB (-14.3%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| teams-meetings | 535.7MB | 489.2MB | ok |
| active-memory | 531.5MB | 485.1MB | ok |
| memory-lancedb | 521.3MB | 474.8MB | ok |
| voice-call | 514.0MB | 467.6MB | ok |
| codex | 511.7MB | 465.2MB | ok |
| zoom-meetings | 510.8MB | 464.3MB | ok |
| workboard | 510.1MB | 463.6MB | ok |
| migrate-hermes | 508.7MB | 462.3MB | ok |
| anthropic | 506.9MB | 460.4MB | ok |
| google-meet | 505.3MB | 458.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3589.9ms | 3686.2ms |
| default | post-ready.agent-runtime-plugins.total | 3574.8ms | 3666.6ms |
| default | post-attach.update-check.total | 3572.3ms | 3663.8ms |
| default | post-attach.update-sentinel.total | 3563.9ms | 3655.3ms |
| default | sidecars.restart-sentinel.total | 3562.8ms | 3654.2ms |
| skipChannels | sidecars.internal-hooks.total | 905.6ms | 926.0ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 874.7ms | 882.5ms |
| skipChannels | post-attach.update-check.total | 838.2ms | 858.3ms |
| skipChannels | ready.total | 822.4ms | 840.9ms |
| skipChannels | runtime.post-attach.total | 821.0ms | 839.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3279.5ms | 3367.2ms |
| oneInternalHook | sidecars.session-locks.total | 2835.4ms | 2836.9ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 2833.5ms | 2835.4ms |
| oneInternalHook | post-attach.update-sentinel.total | 2824.8ms | 2827.0ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2823.8ms | 2826.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3284.9ms | 3345.5ms |
| allInternalHooks | sidecars.session-locks.total | 2897.2ms | 2897.2ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2894.8ms | 2894.8ms |
| allInternalHooks | post-attach.update-sentinel.total | 2885.0ms | 2885.0ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2883.8ms | 2883.8ms |
| fiftyPlugins | sidecars.session-locks.total | 4877.2ms | 4943.3ms |
| fiftyPlugins | post-ready.maintenance.total | 4788.9ms | 4856.3ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4749.2ms | 4819.4ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4558.2ms | 4628.7ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4557.3ms | 4627.7ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4624.3ms | 4777.9ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4538.5ms | 4688.8ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4504.2ms | 4654.4ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4310.4ms | 4454.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4309.6ms | 4453.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9822.0ms | 0.000 | 2441.8MB | 1036.4MB | -1405.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9600.0ms | 0.104 | 815.0MB | 1013.4MB | 198.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9881.0ms | 0.202 | 874.9MB | 949.1MB | 74.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3406.2ms | 3447.3ms | 60.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 753.1ms | 795.3ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 60.9ms |

## Observations

No data.

