# OpenClaw Source Performance

Generated: 2026-07-21T21:04:27.974Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5826.2ms | 6036.2ms | 5826.1ms | 3295.4ms | 5719.4ms | 48.9ms | 904.3MB | 1.325 |
| skipChannels | gateway, skip channels | 5992.0ms | 7051.9ms | 5992.0ms | 3493.8ms | 3555.6ms | 57.0ms | 922.3MB | 1.337 |
| oneInternalHook | gateway, one configured internal hook | 6806.8ms | 7259.5ms | 6215.4ms | 5110.0ms | 5190.1ms | 53.2ms | 957.0MB | 1.377 |
| allInternalHooks | gateway, all internal hooks | 6827.9ms | 7409.0ms | 6827.9ms | 4957.5ms | 5056.6ms | 48.6ms | 970.1MB | 1.368 |
| fiftyPlugins | gateway, 50 manifest plugins | 8093.8ms | 8095.0ms | 8090.1ms | 4964.6ms | 5067.1ms | 55.9ms | 1088.3MB | 1.359 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8193.4ms | 9595.3ms | 8193.4ms | 5202.1ms | 5310.4ms | 63.9ms | 1101.2MB | 1.355 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| memory-lancedb | 512.3MB | 465.8MB | ok |
| migrate-hermes | 509.9MB | 463.4MB | ok |
| codex | 509.2MB | 462.8MB | ok |
| google-meet | 507.2MB | 460.7MB | ok |
| teams-meetings | 507.1MB | 460.7MB | ok |
| zoom-meetings | 505.7MB | 459.3MB | ok |
| active-memory | 505.5MB | 459.0MB | ok |
| workboard | 505.0MB | 458.6MB | ok |
| llm-task | 504.3MB | 457.9MB | ok |
| voice-call | 503.9MB | 457.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3543.8ms | 3627.9ms |
| default | post-ready.agent-runtime-plugins.total | 3519.9ms | 3618.9ms |
| default | post-attach.update-check.total | 3516.7ms | 3615.3ms |
| default | post-attach.update-sentinel.total | 3508.7ms | 3603.3ms |
| default | sidecars.restart-sentinel.total | 3507.4ms | 3601.9ms |
| skipChannels | sidecars.session-locks.total | 3564.7ms | 4330.3ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3562.2ms | 4326.2ms |
| skipChannels | post-attach.update-sentinel.total | 3551.4ms | 4298.7ms |
| skipChannels | sidecars.restart-sentinel.total | 3550.0ms | 4295.8ms |
| skipChannels | sidecars.ready.total | 3527.8ms | 4240.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3990.1ms | 4203.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3183.1ms | 3462.4ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 3152.3ms | 3432.7ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 3151.0ms | 3431.7ms |
| oneInternalHook | sidecars.session-locks.total | 2459.7ms | 2688.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3728.5ms | 4430.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 3066.1ms | 3544.1ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 3038.3ms | 3509.4ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 3037.2ms | 3507.7ms |
| allInternalHooks | post-ready.maintenance.total | 2654.5ms | 2654.5ms |
| fiftyPlugins | sidecars.session-locks.total | 4003.4ms | 4274.7ms |
| fiftyPlugins | post-ready.maintenance.total | 3902.7ms | 4168.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3887.0ms | 4141.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3561.0ms | 3851.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3559.3ms | 3849.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 4278.4ms | 4765.5ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3836.9ms | 4308.7ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 3746.0ms | 4194.8ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3727.1ms | 4175.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3418.9ms | 3788.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12434.0ms | 0.000 | 2472.0MB | 939.9MB | -1532.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11516.0ms | 0.174 | 856.5MB | 916.6MB | 60.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11739.0ms | 0.170 | 884.5MB | 927.9MB | 43.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4348.3ms | 4458.6ms | 60.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 944.5ms | 1017.3ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.1ms | 77.3ms |

## Observations

No data.

