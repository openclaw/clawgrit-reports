# OpenClaw Source Performance

Generated: 2026-07-21T21:03:55.983Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5354.3ms | 6840.0ms | 5354.2ms | 3078.5ms | 5268.9ms | 47.9ms | 982.2MB | 1.316 |
| skipChannels | gateway, skip channels | 7020.1ms | 7134.6ms | 7020.2ms | 4035.8ms | 4090.0ms | 55.7ms | 891.8MB | 1.402 |
| oneInternalHook | gateway, one configured internal hook | 7321.5ms | 7406.0ms | 7321.4ms | 5395.9ms | 5459.0ms | 49.8ms | 971.8MB | 1.366 |
| allInternalHooks | gateway, all internal hooks | 6191.6ms | 6763.6ms | 6191.2ms | 4671.2ms | 4744.0ms | 48.6ms | 942.8MB | 1.331 |
| fiftyPlugins | gateway, 50 manifest plugins | 7718.3ms | 8030.0ms | 7717.9ms | 5195.2ms | 5283.3ms | 49.7ms | 1098.2MB | 1.370 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7688.9ms | 7880.1ms | 7688.5ms | 4898.7ms | 4999.8ms | 55.8ms | 1097.3MB | 1.396 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 578.4MB | 532.0MB | ok |
| google-meet | 514.2MB | 467.7MB | ok |
| codex | 509.6MB | 463.2MB | ok |
| zoom-meetings | 504.7MB | 458.3MB | ok |
| workboard | 504.2MB | 457.8MB | ok |
| migrate-hermes | 504.2MB | 457.8MB | ok |
| teams-meetings | 504.1MB | 457.7MB | ok |
| anthropic | 504.0MB | 457.6MB | ok |
| active-memory | 502.2MB | 455.8MB | ok |
| memory-lancedb | 502.1MB | 455.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3138.3ms | 4095.5ms |
| default | post-ready.agent-runtime-plugins.total | 3119.7ms | 4059.2ms |
| default | post-attach.update-check.total | 3117.1ms | 4054.1ms |
| default | post-attach.update-sentinel.total | 3110.4ms | 4041.1ms |
| default | sidecars.restart-sentinel.total | 3109.4ms | 4039.5ms |
| skipChannels | sidecars.session-locks.total | 4207.7ms | 4319.2ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4205.0ms | 4314.8ms |
| skipChannels | post-attach.update-sentinel.total | 4194.6ms | 4303.0ms |
| skipChannels | sidecars.restart-sentinel.total | 4193.2ms | 4300.5ms |
| skipChannels | sidecars.ready.total | 4171.2ms | 4263.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 4061.9ms | 4132.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3228.0ms | 3319.4ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 3197.0ms | 3285.1ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 3196.0ms | 3284.1ms |
| oneInternalHook | sidecars.session-locks.total | 2867.8ms | 2888.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3616.1ms | 3985.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2902.5ms | 3338.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2874.7ms | 3309.5ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2873.8ms | 3308.4ms |
| allInternalHooks | sidecars.session-locks.total | 2245.5ms | 2419.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3819.9ms | 3821.6ms |
| fiftyPlugins | sidecars.session-locks.total | 3503.2ms | 3879.6ms |
| fiftyPlugins | post-ready.maintenance.total | 3412.2ms | 3784.6ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3393.9ms | 3767.5ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3173.9ms | 3508.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3930.2ms | 3932.5ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3479.4ms | 3550.9ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 3382.1ms | 3450.4ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3366.2ms | 3434.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 3098.4ms | 3143.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13832.0ms | 0.000 | 2301.2MB | 881.2MB | -1420.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11313.0ms | 0.265 | 820.5MB | 867.5MB | 47.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11403.0ms | 0.263 | 852.2MB | 892.5MB | 40.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4355.1ms | 4665.6ms | 60.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 947.9ms | 997.1ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.1ms | 77.2ms |

## Observations

No data.

