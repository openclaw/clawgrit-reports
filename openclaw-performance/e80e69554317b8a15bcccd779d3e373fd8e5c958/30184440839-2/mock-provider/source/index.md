# OpenClaw Source Performance

Generated: 2026-07-26T02:28:15.215Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6083.4ms | 6122.6ms | 6083.3ms | 3183.3ms | 5965.3ms | 41.3ms | 1099.5MB | 1.315 |
| skipChannels | gateway, skip channels | 6086.3ms | 6228.3ms | 6086.3ms | 3099.5ms | 3137.8ms | 42.0ms | 988.9MB | 1.314 |
| oneInternalHook | gateway, one configured internal hook | 6717.6ms | 6729.0ms | 6717.5ms | 4474.5ms | 4516.6ms | 42.3ms | 1175.4MB | 1.307 |
| allInternalHooks | gateway, all internal hooks | 6694.8ms | 6804.0ms | 6694.8ms | 4525.0ms | 4566.8ms | 39.8ms | 1186.4MB | 1.307 |
| fiftyPlugins | gateway, 50 manifest plugins | 8279.7ms | 8335.1ms | 8279.6ms | 4385.4ms | 4457.4ms | 41.0ms | 1134.9MB | 1.224 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8078.1ms | 8116.6ms | 8078.1ms | 4056.4ms | 4133.9ms | 41.5ms | 1132.1MB | 1.241 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 579.0MB | 532.5MB | ok |
| active-memory | 532.2MB | 485.7MB | ok |
| google-meet | 520.1MB | 473.6MB | ok |
| opencode | 519.6MB | 473.1MB | ok |
| codex | 518.0MB | 471.5MB | ok |
| migrate-hermes | 512.0MB | 465.5MB | ok |
| anthropic | 511.5MB | 465.0MB | ok |
| voice-call | 510.8MB | 464.3MB | ok |
| teams-meetings | 510.3MB | 463.8MB | ok |
| acpx | 510.1MB | 463.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3850.1ms | 3869.7ms |
| default | post-ready.agent-runtime-plugins.total | 3825.2ms | 3845.4ms |
| default | post-attach.update-check.total | 3822.6ms | 3842.7ms |
| default | post-attach.update-sentinel.total | 3813.8ms | 3833.6ms |
| default | sidecars.restart-sentinel.total | 3812.7ms | 3832.5ms |
| skipChannels | sidecars.session-locks.total | 3985.2ms | 4024.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3979.6ms | 4023.1ms |
| skipChannels | post-attach.update-sentinel.total | 3975.3ms | 4019.0ms |
| skipChannels | sidecars.restart-sentinel.total | 3974.3ms | 4018.0ms |
| skipChannels | sidecars.ready.total | 3959.1ms | 4000.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3352.5ms | 3392.6ms |
| oneInternalHook | sidecars.session-locks.total | 3037.9ms | 3055.0ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3036.3ms | 3053.6ms |
| oneInternalHook | post-attach.update-sentinel.total | 3031.9ms | 3049.3ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3030.8ms | 3048.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3391.9ms | 3399.9ms |
| allInternalHooks | sidecars.session-locks.total | 3003.6ms | 3050.1ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3001.9ms | 3048.3ms |
| allInternalHooks | post-attach.update-sentinel.total | 2997.6ms | 3043.9ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2996.6ms | 3042.9ms |
| fiftyPlugins | sidecars.session-locks.total | 4771.5ms | 4838.6ms |
| fiftyPlugins | post-ready.maintenance.total | 4679.9ms | 4750.6ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4645.8ms | 4714.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4446.5ms | 4517.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4445.6ms | 4516.7ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4671.5ms | 4684.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4585.7ms | 4596.1ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4550.0ms | 4559.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4356.6ms | 4361.9ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4355.7ms | 4360.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10928.0ms | 0.000 | 2580.6MB | 988.1MB | -1592.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10715.0ms | 0.093 | 881.7MB | 1028.8MB | 147.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10593.0ms | 0.094 | 915.9MB | 1072.3MB | 156.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3401.0ms | 3414.7ms | 61.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 818.4ms | 820.3ms | 61.9MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 127.0ms |

## Observations

No data.

