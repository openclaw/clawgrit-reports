# OpenClaw Source Performance

Generated: 2026-07-26T02:46:50.637Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6191.1ms | 6224.9ms | 6191.0ms | 3207.3ms | 6076.9ms | 42.0ms | 1050.7MB | 1.308 |
| skipChannels | gateway, skip channels | 6073.5ms | 6235.2ms | 3282.8ms | 3154.8ms | 3193.5ms | 41.5ms | 997.7MB | 1.317 |
| oneInternalHook | gateway, one configured internal hook | 6819.4ms | 6823.5ms | 6819.4ms | 4506.2ms | 4550.4ms | 44.9ms | 1173.2MB | 1.310 |
| allInternalHooks | gateway, all internal hooks | 6780.8ms | 6834.5ms | 6780.7ms | 4561.6ms | 4606.7ms | 44.9ms | 1178.4MB | 1.189 |
| fiftyPlugins | gateway, 50 manifest plugins | 8368.2ms | 8397.9ms | 8368.2ms | 4397.1ms | 4472.3ms | 42.4ms | 1125.5MB | 1.201 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8168.0ms | 8196.9ms | 8168.0ms | 4144.0ms | 4229.0ms | 43.8ms | 1113.9MB | 1.229 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 537.2MB | 490.6MB | ok |
| codex | 536.0MB | 489.4MB | ok |
| opencode | 519.7MB | 473.2MB | ok |
| migrate-hermes | 510.4MB | 463.8MB | ok |
| voice-call | 509.8MB | 463.2MB | ok |
| zoom-meetings | 509.6MB | 463.0MB | ok |
| teams-meetings | 508.9MB | 462.3MB | ok |
| workboard | 508.8MB | 462.2MB | ok |
| anthropic | 507.6MB | 461.0MB | ok |
| memory-lancedb | 505.7MB | 459.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3966.1ms | 3980.6ms |
| default | post-ready.agent-runtime-plugins.total | 3941.3ms | 3953.2ms |
| default | post-attach.update-check.total | 3938.6ms | 3950.5ms |
| default | post-attach.update-sentinel.total | 3929.1ms | 3941.5ms |
| default | sidecars.restart-sentinel.total | 3928.0ms | 3940.4ms |
| skipChannels | sidecars.session-locks.total | 3949.4ms | 3993.4ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3946.6ms | 3991.6ms |
| skipChannels | post-attach.update-sentinel.total | 3941.9ms | 3987.0ms |
| skipChannels | sidecars.restart-sentinel.total | 3940.9ms | 3985.8ms |
| skipChannels | sidecars.ready.total | 3926.8ms | 3971.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3368.8ms | 3385.5ms |
| oneInternalHook | sidecars.session-locks.total | 3094.9ms | 3106.3ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3093.3ms | 3104.6ms |
| oneInternalHook | post-attach.update-sentinel.total | 3089.0ms | 3100.4ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3088.0ms | 3099.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3415.7ms | 3434.0ms |
| allInternalHooks | sidecars.session-locks.total | 3004.5ms | 3067.5ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3003.0ms | 3065.5ms |
| allInternalHooks | post-attach.update-sentinel.total | 2998.7ms | 3061.1ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2997.8ms | 3060.0ms |
| fiftyPlugins | sidecars.session-locks.total | 4881.9ms | 4903.6ms |
| fiftyPlugins | post-ready.maintenance.total | 4794.8ms | 4812.9ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4762.6ms | 4778.5ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4569.3ms | 4577.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4568.4ms | 4576.3ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4651.1ms | 4686.0ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4561.2ms | 4600.8ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4523.6ms | 4565.4ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4320.6ms | 4370.6ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4319.6ms | 4369.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10964.0ms | 0.000 | 2496.2MB | 1041.2MB | -1455.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10378.0ms | 0.096 | 905.5MB | 1027.5MB | 122.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10343.0ms | 0.097 | 954.1MB | 983.9MB | 29.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3378.8ms | 3450.5ms | 62.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 812.9ms | 828.0ms | 62.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 131.3ms |

## Observations

No data.

