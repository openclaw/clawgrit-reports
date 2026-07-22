# OpenClaw Source Performance

Generated: 2026-07-22T11:15:40.215Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5726.0ms | 5739.5ms | 5725.9ms | 2803.5ms | 5608.7ms | 41.0ms | 933.7MB | 1.228 |
| skipChannels | gateway, skip channels | 6669.2ms | 6745.2ms | 6669.2ms | 3095.3ms | 3145.1ms | 42.1ms | 897.7MB | 1.386 |
| oneInternalHook | gateway, one configured internal hook | 7604.2ms | 8719.3ms | 7585.5ms | 4963.8ms | 5030.4ms | 50.9ms | 943.4MB | 1.315 |
| allInternalHooks | gateway, all internal hooks | 7787.2ms | 7992.8ms | 7787.1ms | 5089.4ms | 5179.5ms | 56.9ms | 950.3MB | 1.376 |
| fiftyPlugins | gateway, 50 manifest plugins | 7827.2ms | 8859.4ms | 7827.1ms | 4606.6ms | 4689.7ms | 55.7ms | 1128.7MB | 1.322 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7401.4ms | 7910.3ms | 7401.4ms | 4139.1ms | 4232.7ms | 44.2ms | 1111.4MB | 1.264 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 512.2MB | 465.6MB | ok |
| active-memory | 510.0MB | 463.4MB | ok |
| teams-meetings | 509.6MB | 463.0MB | ok |
| workboard | 509.5MB | 462.9MB | ok |
| zoom-meetings | 509.1MB | 462.5MB | ok |
| llm-task | 507.8MB | 461.2MB | ok |
| memory-lancedb | 505.5MB | 458.9MB | ok |
| migrate-hermes | 505.0MB | 458.5MB | ok |
| xai | 505.0MB | 458.4MB | ok |
| google-meet | 504.8MB | 458.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3670.5ms | 3687.2ms |
| default | post-ready.agent-runtime-plugins.total | 3647.4ms | 3665.6ms |
| default | post-attach.update-check.total | 3644.4ms | 3662.9ms |
| default | post-attach.update-sentinel.total | 3635.3ms | 3654.8ms |
| default | sidecars.restart-sentinel.total | 3634.3ms | 3653.8ms |
| skipChannels | sidecars.session-locks.total | 4448.1ms | 4490.2ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4444.9ms | 4487.0ms |
| skipChannels | post-attach.update-sentinel.total | 4439.0ms | 4481.2ms |
| skipChannels | sidecars.restart-sentinel.total | 4437.6ms | 4479.8ms |
| skipChannels | sidecars.ready.total | 4415.5ms | 4456.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3690.6ms | 4570.3ms |
| oneInternalHook | sidecars.session-locks.total | 3506.4ms | 3720.3ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3503.4ms | 3717.7ms |
| oneInternalHook | post-attach.update-sentinel.total | 3491.0ms | 3706.3ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3489.7ms | 3705.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3868.3ms | 3969.9ms |
| allInternalHooks | sidecars.session-locks.total | 3529.2ms | 3641.4ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3525.9ms | 3638.0ms |
| allInternalHooks | post-attach.update-sentinel.total | 3511.4ms | 3623.4ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3509.7ms | 3622.0ms |
| fiftyPlugins | sidecars.session-locks.total | 4055.3ms | 4689.9ms |
| fiftyPlugins | post-ready.maintenance.total | 3973.7ms | 4588.5ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3959.8ms | 4570.5ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3709.5ms | 4206.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3708.3ms | 4204.3ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3825.9ms | 4278.2ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 3742.6ms | 4197.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3728.3ms | 4183.9ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3500.7ms | 3972.9ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 3499.5ms | 3971.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10140.0ms | 0.000 | 2467.4MB | 961.6MB | -1505.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9609.0ms | 0.104 | 862.6MB | 944.3MB | 81.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9343.0ms | 0.214 | 858.4MB | 939.7MB | 81.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3353.6ms | 3447.4ms | 60.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 744.3ms | 789.6ms | 60.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 63.6ms |

## Observations

No data.

