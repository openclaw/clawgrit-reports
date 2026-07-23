# OpenClaw Source Performance

Generated: 2026-07-23T20:08:42.357Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7295.4ms | 7414.0ms | 7295.2ms | 3597.1ms | 7181.0ms | 54.9ms | 968.9MB | 1.349 |
| skipChannels | gateway, skip channels | 7396.7ms | 8044.5ms | 7811.7ms | 3765.2ms | 3826.8ms | 52.9ms | 1028.3MB | 1.367 |
| oneInternalHook | gateway, one configured internal hook | 9210.4ms | 10367.8ms | 9210.3ms | 6202.6ms | 6304.2ms | 54.6ms | 965.2MB | 1.307 |
| allInternalHooks | gateway, all internal hooks | 8155.0ms | 8168.0ms | 8154.9ms | 5342.6ms | 5395.7ms | 51.7ms | 1104.3MB | 1.237 |
| fiftyPlugins | gateway, 50 manifest plugins | 10545.9ms | 10815.4ms | 10545.8ms | 5052.3ms | 5151.2ms | 51.7ms | 1154.9MB | 1.263 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 10785.3ms | 15383.4ms | 10785.3ms | 5334.5ms | 5429.6ms | 56.5ms | 1134.4MB | 1.300 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 532.2MB | 485.7MB | ok |
| memory-lancedb | 515.0MB | 468.6MB | ok |
| codex | 510.4MB | 463.9MB | ok |
| workboard | 506.9MB | 460.4MB | ok |
| active-memory | 506.7MB | 460.2MB | ok |
| google-meet | 506.3MB | 459.9MB | ok |
| zoom-meetings | 504.7MB | 458.2MB | ok |
| teams-meetings | 504.7MB | 458.2MB | ok |
| migrate-hermes | 504.6MB | 458.1MB | ok |
| anthropic | 504.3MB | 457.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4445.4ms | 4713.8ms |
| default | post-ready.agent-runtime-plugins.total | 4423.1ms | 4668.5ms |
| default | post-attach.update-check.total | 4419.1ms | 4661.0ms |
| default | post-attach.update-sentinel.total | 4407.7ms | 4643.9ms |
| default | sidecars.restart-sentinel.total | 4406.2ms | 4641.5ms |
| skipChannels | sidecars.session-locks.total | 4717.0ms | 5275.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4714.8ms | 5045.7ms |
| skipChannels | post-attach.update-sentinel.total | 4708.9ms | 5028.8ms |
| skipChannels | sidecars.restart-sentinel.total | 4707.6ms | 5026.9ms |
| skipChannels | sidecars.ready.total | 4689.4ms | 4997.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 4847.8ms | 4960.8ms |
| oneInternalHook | post-ready.maintenance.total | 4772.4ms | 4772.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3988.2ms | 4018.5ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 3953.9ms | 3974.1ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 3952.9ms | 3972.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4087.9ms | 4151.7ms |
| allInternalHooks | sidecars.session-locks.total | 3582.3ms | 3711.9ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3579.6ms | 3708.9ms |
| allInternalHooks | post-attach.update-sentinel.total | 3573.6ms | 3700.4ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3572.3ms | 3698.5ms |
| fiftyPlugins | sidecars.session-locks.total | 6526.6ms | 6744.5ms |
| fiftyPlugins | post-ready.maintenance.total | 6407.6ms | 6572.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 6355.8ms | 6520.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 5951.6ms | 6049.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 5950.2ms | 6047.9ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 6273.4ms | 8677.8ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 6168.2ms | 8535.9ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 6123.3ms | 8481.3ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 5850.3ms | 7914.8ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 5849.0ms | 7913.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11401.0ms | 0.000 | 2435.5MB | 1050.9MB | -1384.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10664.0ms | 0.188 | 869.8MB | 946.5MB | 76.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11178.0ms | 0.179 | 871.3MB | 941.6MB | 70.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4228.5ms | 4371.2ms | 61.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 942.0ms | 976.9ms | 61.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 74.1ms |

## Observations

No data.

